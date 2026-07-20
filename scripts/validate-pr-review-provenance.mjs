import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { principalKey, canonical, extractStructured, allowedReviewStates } from "./lib/provenance.mjs";
import { githubApiJson } from "./lib/github-api.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const eventPath = process.env.GITHUB_EVENT_PATH;
const token = process.env.GITHUB_TOKEN;
const repository = process.env.GITHUB_REPOSITORY;
if (!eventPath || !fs.existsSync(eventPath) || !token) {
  console.log("PR review provenance skipped outside an authenticated GitHub pull_request event.");
  process.exit(0);
}
const event = JSON.parse(fs.readFileSync(eventPath, "utf8"));
if (!event.pull_request) {
  console.log("PR review provenance skipped: event has no pull request.");
  process.exit(0);
}

const policy = JSON.parse(fs.readFileSync(path.join(root, "site/agent/quorum-policy.json"), "utf8"));
const git = (...args) => execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();
// Deleted governance artifacts do not claim new GitHub provenance. Remaining
// lesson readiness checks still validate every artifact present in the head.
const changedFiles = git("diff", "--name-only", "--diff-filter=d", `${event.pull_request.base.sha}...${event.pull_request.head.sha}`).split("\n").filter(Boolean);
const reviewFiles = changedFiles.filter((file) => /^lessons\/[^/]+\/reviews\/[^/]+\.json$/.test(file));
const adjudicationFiles = changedFiles.filter((file) => /^lessons\/[^/]+\/adjudication\.json$/.test(file));
if (!reviewFiles.length && !adjudicationFiles.length) {
  console.log("No new review or adjudication artifacts require GitHub provenance yet.");
  process.exit(0);
}

async function api(relativePath) {
  return githubApiJson({ url: `https://api.github.com${relativePath}`, token });
}

const githubReviews = [];
for (let page = 1; ; page += 1) {
  const batch = await api(`/repos/${repository}/pulls/${event.pull_request.number}/reviews?per_page=100&page=${page}`);
  githubReviews.push(...batch);
  if (batch.length < 100) break;
}

const errors = [];
for (const file of reviewFiles) {
  let artifact;
  try {
    artifact = JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
  } catch (error) {
    errors.push(`${file} is not valid JSON: ${error.message}`);
    continue;
  }
  const match = githubReviews.find((review) => {
    const submitted = extractStructured(review.body, "review");
    return submitted?.reviewId === artifact.reviewId && canonical(submitted) === canonical(artifact);
  });
  if (!match) {
    errors.push(`${file} has no equivalent structured GitHub review submission.`);
    continue;
  }
  if (principalKey(artifact.reviewer.principalId) !== principalKey(`github:${match.user.login}`)) errors.push(`${file} principal does not match GitHub reviewer ${match.user.login}.`);
  if (artifact.candidateCommit !== match.commit_id) errors.push(`${file} candidate commit does not match its GitHub review commit.`);
  if (!allowedReviewStates(artifact, "review", policy).has(String(match.state).toLowerCase())) errors.push(`${file} GitHub review state is not eligible for the artifact.`);
}
for (const file of adjudicationFiles) {
  let artifact;
  try {
    artifact = JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
  } catch (error) {
    errors.push(`${file} is not valid JSON: ${error.message}`);
    continue;
  }
  const match = githubReviews.find((review) => {
    const submitted = extractStructured(review.body, "adjudication");
    return submitted?.adjudicationId === artifact.adjudicationId && canonical(submitted) === canonical(artifact);
  });
  if (!match) {
    errors.push(`${file} has no equivalent structured GitHub adjudication submission.`);
    continue;
  }
  if (principalKey(artifact.adjudicator.principalId) !== principalKey(`github:${match.user.login}`)) errors.push(`${file} principal does not match GitHub adjudicator ${match.user.login}.`);
  if (!allowedReviewStates(artifact, "adjudication", policy).has(String(match.state).toLowerCase())) errors.push(`${file} GitHub adjudication state is not eligible for the artifact.`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`GitHub provenance valid for ${reviewFiles.length} review artifact(s) and ${adjudicationFiles.length} adjudication artifact(s).`);
