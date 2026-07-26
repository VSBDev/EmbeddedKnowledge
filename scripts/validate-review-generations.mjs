#!/usr/bin/env node
/**
 * Refuse a lesson pull request that throws away a candidate's review record without recording a
 * decision about it.
 *
 * Usage: node scripts/validate-review-generations.mjs        (pull_request events; no-op otherwise)
 *
 * The adjudicate skill already forbids reopening authoring, launching another review cohort, and
 * changing the lesson version during finalization. This makes the invariant checkable so that a run
 * which has not read the skill still cannot land the mistake.
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { discardedReviewVersions, unrecordedDiscards } from "./lib/review-generations.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const git = (...args) => execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();
const eventPath = process.env.GITHUB_EVENT_PATH;
if (!eventPath || !fs.existsSync(eventPath)) {
  console.log("No pull-request event payload; review-generation check skipped.");
  process.exit(0);
}
const event = JSON.parse(fs.readFileSync(eventPath, "utf8"));
if (!event.pull_request) {
  console.log("Not a pull-request event; review-generation check skipped.");
  process.exit(0);
}
const baseSha = event.pull_request.base.sha;
const headSha = event.pull_request.head.sha;

const changed = git("diff", "--name-only", `${baseSha}...${headSha}`).split("\n").filter(Boolean);
const packs = [...new Set(changed.filter((f) => f.startsWith("lessons/")).map((f) => f.split("/").slice(0, 2).join("/")))];
if (!packs.length) {
  console.log("No lesson pack in this pull request; review-generation check skipped.");
  process.exit(0);
}

const problems = [];
for (const packPath of packs) {
  // every deletion under reviews/ in this range, with the commit that removed it
  const log = git("log", "--diff-filter=D", "--name-only", "--format=%H", `${baseSha}...${headSha}`, "--", `${packPath}/reviews/`);
  const deletions = [];
  let commit = null;
  for (const line of log.split("\n")) {
    if (/^[0-9a-f]{40}$/.test(line.trim())) { commit = line.trim(); continue; }
    if (line.trim() && commit) deletions.push({ commit, path: line.trim() });
  }
  // A deletion in history is not a discard if the artifact is back at head. Restoring the record is
  // the right correction for having removed it, and it must not keep failing afterwards.
  const presentAtHead = (file) => {
    try { git("cat-file", "-e", `${headSha}:${file}`); return true; } catch { return false; }
  };
  const stillGone = deletions.filter(({ path: file }) => !presentAtHead(file));
  if (!stillGone.length) continue;

  const versionAt = (sha, file) => {
    try { return JSON.parse(git("show", `${sha}^:${file}`)).lessonVersion || null; }
    catch { return null; }
  };
  const discarded = discardedReviewVersions({ deletions: stillGone, versionAt });

  // every adjudication that ever existed in range, by the version it judged
  const adjudicatedVersions = new Map();
  const adjLog = git("log", "--format=%H", `${baseSha}...${headSha}`, "--", `${packPath}/adjudication.json`);
  for (const sha of adjLog.split("\n").filter(Boolean)) {
    try {
      const adj = JSON.parse(git("show", `${sha}:${packPath}/adjudication.json`));
      if (adj.lessonVersion) adjudicatedVersions.set(adj.lessonVersion, adj.decision);
    } catch { /* absent at that commit */ }
  }

  for (const problem of unrecordedDiscards({ discarded, adjudicatedVersions })) {
    problems.push(`${packPath}: ${problem}`);
  }
}

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log(`Review generations valid: ${packs.length} pack(s) retain or properly retire their review record.`);
