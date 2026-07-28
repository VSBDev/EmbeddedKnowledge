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
import { isCalibrationChange } from "./lib/calibration-gate.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const packArgument = process.argv[2];

// A pull request answers for the adjudication it is asking to merge, not for the corpus's
// history. Checking everything re-opens settled lessons whose repairs were made in a different
// file than the finding named, which is a judgement already taken at merge time and not this
// gate's to reverse. So in a pull-request event only the packs the branch actually touches are
// checked; outside one, and with no argument, every pack is swept as a report.
//
// A squash merge also removes the candidate and final commits from main's history, so a merged
// pack's range stops being resolvable and is skipped rather than failed. The range a pull request
// asks to merge is always resolvable, because both commits sit on the branch under review, and
// that is the case this guard has to hold for.
const packsWithAdjudication = () =>
  fs.readdirSync(path.join(root, "lessons"), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => `lessons/${entry.name}`)
    .filter((pack) => fs.existsSync(path.join(root, pack, "adjudication.json")))
    .sort();

function packsChangedInPullRequest() {
  const eventPath = process.env.GITHUB_EVENT_PATH;
  if (!eventPath || !fs.existsSync(eventPath)) return null;
  let event;
  try {
    event = JSON.parse(fs.readFileSync(eventPath, "utf8"));
  } catch {
    return null;
  }
  if (!event.pull_request?.base?.sha || !event.pull_request?.head?.sha) return null;

  const changed = execFileSync(
    "git",
    ["diff", "--name-only", `${event.pull_request.base.sha}...${event.pull_request.head.sha}`],
    { cwd: root, encoding: "utf8" }
  ).split("\n").filter(Boolean);

  // A duration calibration touches lesson.json in many packs and no content anywhere. It can neither
  // create a disposition nor repair one, so checking every pack it brushes against only re-litigates
  // history: a pack with an old unbacked disposition would block a change that had nothing to do with
  // it, and the finding would arrive attached to the wrong pull request. Historical defects are worth
  // fixing on their own terms, which is why this says what it skipped rather than skipping silently.
  //
  // This is the same predicate validate-lesson-pr.mjs uses to admit the change in the first place, so
  // the two gates cannot disagree about what a calibration is.
  if (isCalibrationChange(changed)) {
    console.log("Adjudication dispositions skipped: this change moves lesson durations only and repairs no finding.");
    return [];
  }

  const packs = new Set();
  for (const file of changed) {
    const match = /^(lessons\/[^/]+)\//.exec(file);
    if (match && fs.existsSync(path.join(root, match[1], "adjudication.json"))) packs.add(match[1]);
  }
  return [...packs].sort();
}

const packPaths = packArgument
  ? [packArgument.replace(/\/+$/, "")]
  : packsChangedInPullRequest() ?? packsWithAdjudication();

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

// --name-status rather than --name-only, because git collapses a rename into one entry reporting
// only the destination. A reviewer pins a finding to the path they read, and if the author then
// reorganises the pack — inserting a scene renumbers every file after it — that path never appears
// in the diff and every finding against it reads as a repair that was never made. Both sides of a
// rename count as changed, which is the truth: the old path no longer holds anything, and the
// content moved and in practice was edited on the way.
const output = execFileSync(
  "git",
  ["diff", "--name-status", candidateCommit, finalCommit, "--", packPath],
  { cwd: root, encoding: "utf8" }
);
const changedFiles = output
  .split("\n")
  .filter(Boolean)
  .flatMap((line) => line.split("\t").slice(1))
  .map((file) => file.slice(`${packPath}/`.length));

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
