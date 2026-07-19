import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { principalKey, allowedReviewStates } from "./lib/provenance.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const eventPath = process.env.GITHUB_EVENT_PATH;
const token = process.env.GITHUB_TOKEN;
const repository = process.env.GITHUB_REPOSITORY;
if (!eventPath || !fs.existsSync(eventPath) || !token) {
  console.log("Review comment validation skipped outside an authenticated GitHub Actions event.");
  process.exit(0);
}
const event = JSON.parse(fs.readFileSync(eventPath, "utf8"));
if (!event.pull_request || !event.review) {
  console.log("Review comment validation skipped: no pull request review payload.");
  process.exit(0);
}

async function api(relativePath) {
  const response = await fetch(`https://api.github.com${relativePath}`, {
    headers: { Accept: "application/vnd.github+json", Authorization: `Bearer ${token}`, "X-GitHub-Api-Version": "2022-11-28" }
  });
  if (!response.ok) throw new Error(`GitHub API returned ${response.status} for ${relativePath}.`);
  return response.json();
}

const files = [];
for (let page = 1; ; page += 1) {
  const batch = await api(`/repos/${repository}/pulls/${event.pull_request.number}/files?per_page=100&page=${page}`);
  files.push(...batch);
  if (batch.length < 100) break;
}
if (!files.some((file) => file.filename.startsWith("lessons/"))) {
  console.log("Structured review validation skipped: this PR does not change a lesson pack.");
  process.exit(0);
}
if (event.action === "dismissed") {
  console.error("A structured lesson review was dismissed. Its committed artifact no longer has eligible GitHub provenance; update the PR and collect a replacement review.");
  process.exit(1);
}

const readJson = (relativePath) => JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
const policy = readJson("site/agent/quorum-policy.json");
const lessonSchema = readJson("site/schemas/lesson.schema.json");
const reviewSchema = readJson("site/schemas/review.schema.json");
const adjudicationSchema = readJson("site/schemas/adjudication.schema.json");
const ajv = new Ajv2020({ allErrors: true, strict: true });
addFormats(ajv);
ajv.addSchema(lessonSchema).addSchema(reviewSchema).addSchema(adjudicationSchema);
const reviewMatch = event.review.body?.match(/```embeddedknowledge-review\s*\n([\s\S]*?)```/i);
const adjudicationMatch = event.review.body?.match(/```embeddedknowledge-adjudication\s*\n([\s\S]*?)```/i);
if (!reviewMatch && !adjudicationMatch) {
  console.error("Lesson PR reviews must include an embeddedknowledge-review or embeddedknowledge-adjudication JSON block.");
  process.exit(1);
}
if (reviewMatch && adjudicationMatch) {
  console.error("Submit a review artifact and a final adjudication as separate GitHub reviews.");
  process.exit(1);
}

const githubLogin = event.review.user.login;
const expectedPrincipal = `github:${githubLogin}`.toLowerCase();
const errors = [];
if (reviewMatch) {
  let artifact;
  try { artifact = JSON.parse(reviewMatch[1]); } catch (error) { errors.push(`Review block is not valid JSON: ${error.message}`); }
  const validate = ajv.getSchema(reviewSchema.$id);
  if (artifact && !validate(artifact)) errors.push(ajv.errorsText(validate.errors, { separator: "; " }));
  if (artifact && principalKey(artifact.reviewer.principalId) !== expectedPrincipal) errors.push(`reviewer.principalId must be github:${githubLogin}.`);
  if (artifact && artifact.candidateCommit !== event.review.commit_id) errors.push("candidateCommit must equal the commit reviewed by this GitHub review.");
  if (artifact) {
    const allowedStates = allowedReviewStates(artifact, "review", policy);
    if (!allowedStates.has(event.review.state.toLowerCase())) errors.push(`GitHub review state must be ${[...allowedStates].join(" or ")} for verdict ${artifact.verdict}.`);
  }
}
if (adjudicationMatch) {
  let artifact;
  try { artifact = JSON.parse(adjudicationMatch[1]); } catch (error) { errors.push(`Adjudication block is not valid JSON: ${error.message}`); }
  const validate = ajv.getSchema(adjudicationSchema.$id);
  if (artifact && !validate(artifact)) errors.push(ajv.errorsText(validate.errors, { separator: "; " }));
  if (artifact && principalKey(artifact.adjudicator.principalId) !== expectedPrincipal) errors.push(`adjudicator.principalId must be github:${githubLogin}.`);
  if (artifact) {
    const allowedStates = allowedReviewStates(artifact, "adjudication", policy);
    if (!allowedStates.has(event.review.state.toLowerCase())) errors.push(`GitHub review state must be ${[...allowedStates].join(" or ")} for adjudication decision ${artifact.decision}.`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
if (event.action === "edited") {
  console.error("This structured review was edited. Commit the equivalent updated artifact (or remove the stale artifact) so the pull-request provenance check runs again.");
  process.exit(1);
}
console.log(`Structured ${reviewMatch ? "review" : "adjudication"} submission valid for github:${githubLogin}.`);
