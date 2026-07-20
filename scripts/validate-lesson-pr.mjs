import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { claimsChangeIsGovernanceOnly, lessonMetadataChangeIsGovernanceOnly } from "./lib/candidate-governance.mjs";
import { lessonPrOutsideFiles, validateFullLessonPackRemoval } from "./lib/lesson-pr-file-scope.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const eventPath = process.env.GITHUB_EVENT_PATH;
if (!eventPath || !fs.existsSync(eventPath)) {
  console.log("Lesson PR readiness skipped outside a GitHub pull_request event.");
  process.exit(0);
}
const event = JSON.parse(fs.readFileSync(eventPath, "utf8"));
if (!event.pull_request) {
  console.log("Lesson PR readiness skipped: event has no pull request.");
  process.exit(0);
}

const baseSha = event.pull_request.base.sha;
const headSha = event.pull_request.head.sha;
const git = (...args) => execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();
const changedFiles = git("diff", "--name-only", `${baseSha}...${headSha}`).split("\n").filter(Boolean);
const packPaths = [...new Set(changedFiles.map((file) => file.match(/^(lessons\/[^/]+)\//)?.[1]).filter(Boolean))];
if (!packPaths.length) {
  console.log("Lesson PR readiness skipped: no lesson pack changed.");
  process.exit(0);
}

const errors = [];
if (packPaths.length !== 1) errors.push(`A lesson PR must change exactly one lesson pack; found ${packPaths.length}.`);
const packPath = packPaths[0];
const metadataPath = path.join(root, packPath, "lesson.json");
const claimsPath = path.join(root, packPath, "claims.json");
const adjudicationPath = path.join(root, packPath, "adjudication.json");

let metadata;
let adjudication;
try {
  if (fs.existsSync(metadataPath)) metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));
} catch (error) {
  errors.push(`lesson.json is not valid JSON: ${error.message}`);
}

let baseMetadata;
try {
  baseMetadata = JSON.parse(git("show", `${baseSha}:${packPath}/lesson.json`));
} catch {
  // A new lesson pack has no metadata at the base commit.
}

const changedPackEntries = git("diff", "--name-status", "--no-renames", `${baseSha}...${headSha}`, "--", packPath)
  .split("\n")
  .filter(Boolean)
  .map((line) => {
    const [status, file] = line.split("\t", 2);
    return { status, path: file };
  });
const trackedPackFiles = git("ls-files", "--", packPath).split("\n").filter(Boolean);
const removal = validateFullLessonPackRemoval({
  baseMetadata,
  packExists: fs.existsSync(path.join(root, packPath)),
  trackedFiles: trackedPackFiles,
  changedEntries: changedPackEntries
});
errors.push(...removal.errors);

if (!removal.removed) {
  if (!fs.existsSync(metadataPath)) errors.push(`${packPath}/lesson.json is required.`);
  if (!fs.existsSync(adjudicationPath)) errors.push(`${packPath}/adjudication.json is required before merge.`);
}

// A lesson PR may include only its source pack and the exact public files that
// the trusted site build derives from that pack. The workflow rebuilds site/
// before this check and rejects any byte that does not match the fresh build.
// Gate, workflow, test, package, sibling-pack, and unrelated site changes stay
// outside this allowlist so infrastructure must travel in a separate PR.
const outsideFiles = lessonPrOutsideFiles({
  changedFiles,
  packPath,
  lessonIds: [metadata?.id, baseMetadata?.id]
});
if (outsideFiles.length) {
  errors.push(
    `A lesson PR may only change files inside ${packPath}/ and its deterministic generated site outputs. ` +
    `It also changes: ${outsideFiles.join(", ")}. ` +
    "Move infrastructure, workflow, validator, or other-pack changes into a separate non-lesson pull request."
  );
}

if (removal.removed) {
  const generatedDetailPath = path.join(root, "site", "data", "lessons", `${baseMetadata.id}.json`);
  if (fs.existsSync(generatedDetailPath)) {
    errors.push(`Removed lesson ${baseMetadata.id} still has generated detail data at site/data/lessons/${baseMetadata.id}.json.`);
  }
  if (errors.length) {
    console.error(errors.join("\n"));
    process.exit(1);
  }
  console.log(`Lesson removal valid: ${packPath} and the generated detail for ${baseMetadata.id} are absent.`);
  process.exit(0);
}
try {
  if (fs.existsSync(adjudicationPath)) adjudication = JSON.parse(fs.readFileSync(adjudicationPath, "utf8"));
} catch (error) {
  errors.push(`adjudication.json is not valid JSON: ${error.message}`);
}

if (metadata && metadata.status !== "published") {
  errors.push(`Lesson status must be published before merge; found ${metadata.status}.`);
}
const metadataAuthors = Array.isArray(metadata?.authors) ? metadata.authors : [];
if (metadata && !Array.isArray(metadata.authors)) {
  errors.push("lesson.json must declare an authors array of accountable principals.");
}
if (metadata && !metadataAuthors.some((author) => String(author?.principalId ?? "").toLowerCase() === `github:${event.pull_request.user.login}`.toLowerCase())) {
  errors.push(`The pull-request author github:${event.pull_request.user.login} must appear among the lesson's accountable author principals.`);
}
if (adjudication && adjudication.decision !== "merge") errors.push(`Final adjudication decision must be merge; found ${adjudication.decision}.`);
if (adjudication && !adjudication.quorum?.satisfied) errors.push("Final adjudication must record a satisfied quorum.");

const reviewDirectory = path.join(root, packPath, "reviews");
const reviews = [];
if (fs.existsSync(reviewDirectory)) {
  for (const file of fs.readdirSync(reviewDirectory).filter((name) => name.endsWith(".json"))) {
    try {
      reviews.push(JSON.parse(fs.readFileSync(path.join(reviewDirectory, file), "utf8")));
    } catch (error) {
      errors.push(`${packPath}/reviews/${file} is not valid JSON: ${error.message}`);
    }
  }
}
const candidateCommits = new Set(reviews.filter((review) => adjudication?.reviewIds?.includes(review.reviewId)).map((review) => review.candidateCommit));
if (candidateCommits.size !== 1) errors.push("Counted reviews must identify exactly one candidate content commit.");
const candidateCommit = candidateCommits.size === 1 ? [...candidateCommits][0] : null;
if (candidateCommit && adjudication?.candidateCommit !== candidateCommit) errors.push("Adjudication and counted reviews must target the same candidate content commit.");

if (candidateCommit) {
  try {
    git("cat-file", "-e", `${candidateCommit}^{commit}`);
    git("merge-base", "--is-ancestor", candidateCommit, headSha);
    const postCandidateFiles = git("diff", "--name-only", `${candidateCommit}..${headSha}`, "--", packPath).split("\n").filter(Boolean);
    const allowed = postCandidateFiles.filter((file) =>
      !file.startsWith(`${packPath}/reviews/`) &&
      file !== `${packPath}/adjudication.json` &&
      file !== `${packPath}/lesson.json` &&
      file !== `${packPath}/claims.json`
    );
    if (allowed.length) errors.push(`Lesson content changed after the candidate commit: ${allowed.join(", ")}. Reviews are stale.`);

    if (postCandidateFiles.includes(`${packPath}/lesson.json`)) {
      const candidateMetadata = JSON.parse(git("show", `${candidateCommit}:${packPath}/lesson.json`));
      const currentMetadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));
      if (!lessonMetadataChangeIsGovernanceOnly(candidateMetadata, currentMetadata)) {
        errors.push("lesson.json changed after the candidate commit beyond status or sourceConfidence; reviews are stale.");
      }
    }

    if (postCandidateFiles.includes(`${packPath}/claims.json`)) {
      const candidateClaims = JSON.parse(git("show", `${candidateCommit}:${packPath}/claims.json`));
      const currentClaims = JSON.parse(fs.readFileSync(claimsPath, "utf8"));
      if (!claimsChangeIsGovernanceOnly(candidateClaims, currentClaims)) {
        errors.push("claims.json changed after the candidate commit beyond claims[].reviewStatus; reviews are stale.");
      }
    }
  } catch (error) {
    errors.push(`Candidate commit is missing from PR history or cannot be verified: ${error.message.split("\n")[0]}`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Lesson PR merge-ready: ${packPath}, candidate ${candidateCommit}, ${reviews.length} review artifact(s), published status and merge adjudication present.`);
