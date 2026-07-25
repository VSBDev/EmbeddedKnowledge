#!/usr/bin/env node
/**
 * Verify that every repair an adjudication claims to have incorporated actually touched the file
 * its finding names.
 *
 * Usage: node scripts/validate-adjudication-dispositions.mjs <packPath>
 *
 * The commits come from the adjudication itself (candidateCommit and finalCommit), so this checks
 * the artifact against its own stated range. Both commits must be present locally; on a pull
 * request they are, because both sit on the branch under review.
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { unbackedIncorporations } from "./lib/adjudication-dispositions.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const packArgument = process.argv[2];

// With no argument, check every pack carrying an adjudication. A squash merge removes the
// candidate and final commits from main's history, so a merged pack's range stops being
// resolvable; those are reported as skipped rather than failed. The range a pull request is
// asking to merge is always resolvable, because both commits sit on the branch under review,
// and that is the case this guard has to hold.
const packPaths = packArgument
  ? [packArgument.replace(/\/+$/, "")]
  : fs.readdirSync(path.join(root, "lessons"), { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => `lessons/${entry.name}`)
      .filter((pack) => fs.existsSync(path.join(root, pack, "adjudication.json")))
      .sort();

let failures = 0;
let skipped = 0;
let checked = 0;

for (const packPath of packPaths) checkPack(packPath);

if (failures) process.exit(1);
console.log(`Adjudication dispositions: ${checked} pack(s) verified, ${skipped} skipped as unresolvable (already squash-merged).`);

function checkPack(packPath) {
const packDir = path.resolve(root, packPath);
const adjudicationPath = path.join(packDir, "adjudication.json");

if (!fs.existsSync(adjudicationPath)) {
  console.log(`No adjudication in ${packPath}; nothing to check.`);
  return;
}

const adjudication = JSON.parse(fs.readFileSync(adjudicationPath, "utf8"));
const reviewsDir = path.join(packDir, "reviews");
const reviews = fs.existsSync(reviewsDir)
  ? fs.readdirSync(reviewsDir)
      .filter((name) => name.endsWith(".json"))
      .map((name) => JSON.parse(fs.readFileSync(path.join(reviewsDir, name), "utf8")))
  : [];

const { candidateCommit, finalCommit } = adjudication;
if (!/^[0-9a-f]{40}$/.test(candidateCommit || "") || !/^[0-9a-f]{40}$/.test(finalCommit || "")) {
  console.error(`${packPath}: adjudication must carry 40-character candidateCommit and finalCommit before this check can run.`);
  failures += 1;
  return;
}

const hasCommit = (sha) => {
  try {
    execFileSync("git", ["cat-file", "-e", `${sha}^{commit}`], { cwd: root, stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
};

if (!hasCommit(candidateCommit) || !hasCommit(finalCommit)) {
  console.log(`${packPath}: skipped, ${candidateCommit.slice(0, 12)}..${finalCommit.slice(0, 12)} is no longer resolvable.`);
  skipped += 1;
  return;
}

const output = execFileSync(
  "git",
  ["diff", "--name-only", candidateCommit, finalCommit, "--", packPath],
  { cwd: root, encoding: "utf8" }
);
const changedFiles = output.split("\n").filter(Boolean).map((file) => file.slice(`${packPath}/`.length));

const problems = unbackedIncorporations({ adjudication, reviews, changedFiles, packPath });

if (problems.length) {
  console.error(`${packPath}: adjudication claims repairs that were never made.`);
  for (const problem of problems) console.error(`  - ${problem}`);
  failures += 1;
  return;
}

checked += 1;
const incorporated = (adjudication.finalization?.reviewDispositions ?? []).filter((d) => d.action === "incorporated").length;
console.log(`${packPath}: ${incorporated} incorporated disposition(s) each backed by a change to the file their finding names.`);
}
