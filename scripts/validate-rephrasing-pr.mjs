#!/usr/bin/env node
/**
 * Enforce the `rephrasing` risk tier on a pull request.
 *
 * A lesson declaring `riskTier: "rephrasing"` skips the two-reviewer quorum, so the claim that the
 * change is wording-only must be proved, not trusted. This check reads the published pack from the
 * base commit and the proposed pack from the head commit and runs the machine gate over both. If
 * anything a reviewer would have examined differs, the pull request is rejected and the contributor
 * uses the standard tier.
 *
 * Runs on every lesson pull request: a pack that does not declare the tier is skipped, and a pack
 * that does declare it can never merge without passing here.
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { rephrasingGateProblems } from "./lib/rephrasing-gate.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const eventPath = process.env.GITHUB_EVENT_PATH;
if (!eventPath || !fs.existsSync(eventPath)) {
  console.log("Rephrasing gate skipped outside a GitHub pull_request event.");
  process.exit(0);
}
const event = JSON.parse(fs.readFileSync(eventPath, "utf8"));
if (!event.pull_request) {
  console.log("Rephrasing gate skipped: event has no pull request.");
  process.exit(0);
}

const baseSha = event.pull_request.base.sha;
const headSha = event.pull_request.head.sha;
const git = (...args) => execFileSync("git", args, { cwd: root, encoding: "utf8" });
const trimmed = (...args) => git(...args).trim();

const changed = trimmed("diff", "--name-only", `${baseSha}...${headSha}`).split("\n").filter(Boolean);
const packs = [...new Set(changed.map((f) => f.match(/^lessons\/([^/]+)\//)?.[1]).filter(Boolean))];
if (!packs.length) {
  console.log("Rephrasing gate skipped: no lesson pack changed.");
  process.exit(0);
}

const show = (sha, file) => {
  try {
    return git("show", `${sha}:${file}`);
  } catch {
    return null;
  }
};
const listPack = (sha, pack) => {
  try {
    return trimmed("ls-tree", "-r", "--name-only", sha, "--", `lessons/${pack}`)
      .split("\n").filter(Boolean).map((f) => f.replace(`lessons/${pack}/`, ""));
  } catch {
    return [];
  }
};

const problems = [];
let gated = 0;

for (const pack of packs) {
  const headLesson = show(headSha, `lessons/${pack}/lesson.json`);
  if (!headLesson) continue;
  let metadata;
  try {
    metadata = JSON.parse(headLesson);
  } catch (error) {
    problems.push(`${pack}: lesson.json is not valid JSON (${error.message}).`);
    continue;
  }
  if (metadata.riskTier !== "rephrasing") continue;
  gated += 1;

  const found = rephrasingGateProblems({
    readBase: (file) => show(baseSha, `lessons/${pack}/${file}`),
    readHead: (file) => show(headSha, `lessons/${pack}/${file}`),
    baseFiles: listPack(baseSha, pack),
    headFiles: listPack(headSha, pack)
  });
  problems.push(...found.map((problem) => `${pack}: ${problem}`));
}

if (!gated) {
  console.log("Rephrasing gate: no pack declares the rephrasing tier.");
  process.exit(0);
}
if (problems.length) {
  console.error(
    "This pull request declares the rephrasing tier, which skips the two-reviewer quorum, but the\n" +
    "change is not provably wording-only:\n" +
    problems.map((p) => `  - ${p}`).join("\n") +
    "\n\nEither restrict the change to scene prose, or set riskTier back to \"standard\" and collect a\n" +
    "full quorum. The tier exists to make published lessons easier to read, never to change what\n" +
    "they teach."
  );
  process.exit(1);
}
console.log(`Rephrasing gate passed for ${gated} pack(s): prose changed; claims, numbers, mathematics, assessment, and structure identical.`);
