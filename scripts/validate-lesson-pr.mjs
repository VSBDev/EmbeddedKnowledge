import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { claimsChangeIsGovernanceOnly, lessonMetadataChangeIsGovernanceOnly } from "./lib/candidate-governance.mjs";
import { lessonPrOutsideFiles } from "./lib/lesson-pr-file-scope.mjs";
import { lessonPrStage } from "./lib/lesson-pr-stage.mjs";
import { applySourcePreflightExemptions, preflightSourceAccess } from "./lib/source-access-preflight.mjs";

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
const stage = lessonPrStage(event.pull_request);
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
if (!fs.existsSync(metadataPath)) errors.push(`${packPath}/lesson.json is required.`);
if (stage.requireFinalAdjudication && !fs.existsSync(adjudicationPath)) {
  errors.push(`${packPath}/adjudication.json is required after the pull request is marked ready for review.`);
}

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
try {
  if (fs.existsSync(adjudicationPath)) adjudication = JSON.parse(fs.readFileSync(adjudicationPath, "utf8"));
} catch (error) {
  errors.push(`adjudication.json is not valid JSON: ${error.message}`);
}

if (stage.requirePublishedStatus && metadata && metadata.status !== "published") {
  errors.push(`Lesson status must be published before merge; found ${metadata.status}.`);
}
const metadataAuthors = Array.isArray(metadata?.authors) ? metadata.authors : [];
if (metadata && !Array.isArray(metadata.authors)) {
  errors.push("lesson.json must declare an authors array of accountable principals.");
}
if (metadata && !metadataAuthors.some((author) => String(author?.principalId ?? "").toLowerCase() === `github:${event.pull_request.user.login}`.toLowerCase())) {
  errors.push(`The pull-request author github:${event.pull_request.user.login} must appear among the lesson's accountable author principals.`);
}
if (stage.requireFinalAdjudication && adjudication && adjudication.decision !== "merge") errors.push(`Final adjudication decision must be merge; found ${adjudication.decision}.`);
if (stage.requireFinalAdjudication && adjudication && !adjudication.quorum?.satisfied) errors.push("Final adjudication must record a satisfied quorum.");

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
const currentReviews = reviews.filter((review) => review.lessonId === metadata?.id && review.lessonVersion === metadata?.version);
const currentCandidateCommits = new Set(currentReviews.map((review) => review.candidateCommit));
if (currentCandidateCommits.size > 1) {
  errors.push("The current lesson version has reviews for multiple candidate commits. Bump the lesson version after substantive revision and collect one fresh exact-candidate cycle.");
}
const countedCandidateCommits = new Set(reviews.filter((review) => adjudication?.reviewIds?.includes(review.reviewId)).map((review) => review.candidateCommit));
if (adjudication && countedCandidateCommits.size !== 1) errors.push("Counted reviews must identify exactly one candidate content commit.");
const candidateCommit = adjudication
  ? (countedCandidateCommits.size === 1 ? [...countedCandidateCommits][0] : null)
  : (currentCandidateCommits.size === 1 ? [...currentCandidateCommits][0] : null);
if (candidateCommit && adjudication && adjudication.candidateCommit !== candidateCommit) errors.push("Adjudication and counted reviews must target the same candidate content commit.");

if (metadata) {
  try {
    const referencesPath = path.resolve(path.join(root, packPath), metadata.files?.references || "references.json");
    if (!referencesPath.startsWith(`${path.join(root, packPath)}${path.sep}`)) throw new Error("lesson.files.references escapes the lesson pack.");
    const references = JSON.parse(fs.readFileSync(referencesPath, "utf8"));
    const sourcePolicy = JSON.parse(fs.readFileSync(path.join(root, "site/agent/source-preflight-policy.json"), "utf8"));
    const sourcePreflight = preflightSourceAccess({ lesson: metadata, references, strict: true });
    const filtered = applySourcePreflightExemptions({
      problems: sourcePreflight.errors,
      lesson: metadata,
      candidateCommit,
      policy: sourcePolicy
    });
    for (const exemption of filtered.applied) {
      console.log(`Source preflight compatibility exemption applied: ${exemption.lessonId} ${exemption.candidateCommit} ${exemption.sourceId} ${exemption.rule}.`);
    }
    errors.push(...filtered.remaining.map((problem) => `Source preflight: ${problem}`));
  } catch (error) {
    errors.push(`Source preflight could not read the candidate source ledger: ${error.message}`);
  }
}

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
if (stage.name === "candidate") {
  console.log(`Lesson PR candidate-valid: ${packPath}, ${reviews.length} review artifact(s), draft workspace may continue to quorum and adjudication.`);
} else {
  console.log(`Lesson PR merge-ready: ${packPath}, candidate ${candidateCommit}, ${reviews.length} review artifact(s), published status and merge adjudication present.`);
}
