#!/usr/bin/env node
/**
 * Perform the maintainer post-finalization publication transition for one lesson pack.
 *
 * Publishing is two coupled edits, not one. `lesson.json` moves to published with a real
 * source confidence, and every `claims.json` entry moves to reviewStatus `reviewed`, because
 * `lesson-evidence.mjs` rejects a published lesson whose claims are still pending-review.
 * Doing only the first leaves the pack failing validation, so this script does both or neither.
 *
 * Both fields are governance state under `lessonMetadataChangeIsGovernanceOnly` and
 * `claimsChangeIsGovernanceOnly`, so this transition does not disturb the recorded final commit.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const packArgument = args.find((value) => !value.startsWith("--"));
const confidenceFlag = args.find((value) => value.startsWith("--source-confidence="));
const check = args.includes("--check");

if (!packArgument) {
  console.error("Usage: npm run lesson:publish -- lessons/<pack> [--source-confidence=medium-high] [--check]");
  process.exit(2);
}

const sourceConfidence = confidenceFlag ? confidenceFlag.split("=")[1] : "medium-high";
const allowedConfidence = new Set(["low", "medium", "medium-high", "high"]);
if (!allowedConfidence.has(sourceConfidence)) {
  console.error(`--source-confidence must be one of ${[...allowedConfidence].join(", ")}; pending-review is not a published state.`);
  process.exit(2);
}

const packPath = path.resolve(root, packArgument);
const metadataPath = path.join(packPath, "lesson.json");
const claimsPath = path.join(packPath, "claims.json");
const adjudicationPath = path.join(packPath, "adjudication.json");

const problems = [];
for (const [label, target] of [["lesson.json", metadataPath], ["claims.json", claimsPath]]) {
  if (!fs.existsSync(target)) problems.push(`${label} is missing from ${packArgument}.`);
}

// Publication is only legitimate once a finalizer has recorded a merge adjudication. Refusing
// here is what stops a pack being published on the strength of reviews alone.
if (!fs.existsSync(adjudicationPath)) {
  problems.push("adjudication.json is missing; a lesson cannot be published before finalization records a decision.");
} else {
  const adjudication = JSON.parse(fs.readFileSync(adjudicationPath, "utf8"));
  if (adjudication.decision !== "merge") {
    problems.push(`adjudication decision is ${adjudication.decision}; only merge may be published.`);
  }
  if (!/^[0-9a-f]{40}$/.test(String(adjudication.finalCommit ?? ""))) {
    problems.push(`adjudication finalCommit is not a 40-character SHA (found ${adjudication.finalCommit}); stamp the real final content commit first.`);
  }
  if (adjudication.quorum && adjudication.quorum.satisfied !== true) {
    problems.push("adjudication records an unsatisfied quorum.");
  }
}

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}

const metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));
const claims = JSON.parse(fs.readFileSync(claimsPath, "utf8"));
const pendingClaims = (claims.claims ?? []).filter((claim) => claim.reviewStatus !== "reviewed");

const planned = [];
if (metadata.status !== "published") planned.push(`lesson.json status ${metadata.status} -> published`);
if (metadata.sourceConfidence !== sourceConfidence) planned.push(`lesson.json sourceConfidence ${metadata.sourceConfidence} -> ${sourceConfidence}`);
if (pendingClaims.length) planned.push(`claims.json ${pendingClaims.length} claim(s) -> reviewStatus reviewed`);

if (!planned.length) {
  console.log(`${packArgument} is already published with reviewed claims; nothing to do.`);
  process.exit(0);
}

if (check) {
  console.log(`Publication transition would apply:\n  ${planned.join("\n  ")}`);
  process.exit(0);
}

metadata.status = "published";
metadata.sourceConfidence = sourceConfidence;
fs.writeFileSync(metadataPath, `${JSON.stringify(metadata, null, 2)}\n`);

for (const claim of claims.claims ?? []) claim.reviewStatus = "reviewed";
fs.writeFileSync(claimsPath, `${JSON.stringify(claims, null, 2)}\n`);

console.log(`Published ${metadata.id} ${metadata.version}:\n  ${planned.join("\n  ")}`);
console.log("Now run: npm run site:build && npm run validate, then commit both files with the regenerated site/ output.");
