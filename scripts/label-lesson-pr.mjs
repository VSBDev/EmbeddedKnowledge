#!/usr/bin/env node
/**
 * Label a lesson pull request with the governance stage it has actually reached.
 *
 * The review sequence has several stages and each one lives in repository artifacts rather than in
 * the pull-request UI, so telling "waiting for reviewers" apart from "waiting for the finalizer"
 * previously meant opening the pack and counting files. This derives the stage from those same
 * artifacts and writes it onto the pull request, so the queue is readable at a glance.
 *
 * The label is a mirror of the artifacts, never a control: nothing merges because of a label, and
 * the required checks are unchanged. Exactly one `stage:` label and one `tier:` label are kept.
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const eventPath = process.env.GITHUB_EVENT_PATH;
const token = process.env.GITHUB_TOKEN;
if (!eventPath || !fs.existsSync(eventPath) || !token) {
  console.log("Lesson PR labelling skipped outside an authenticated GitHub pull_request event.");
  process.exit(0);
}
const event = JSON.parse(fs.readFileSync(eventPath, "utf8"));
const pr = event.pull_request;
if (!pr) {
  console.log("Lesson PR labelling skipped: event has no pull request.");
  process.exit(0);
}

const STAGES = {
  "stage:authoring": ["FBCA04", "Draft pack; the candidate is still being written"],
  "stage:awaiting-review": ["1D76DB", "Candidate frozen; waiting for the two quorum reviews"],
  "stage:in-review": ["0E8A16", "One review recorded; the second is outstanding"],
  "stage:awaiting-adjudication": ["5319E7", "Both reviews recorded; waiting for the fresh finalizer"],
  "stage:merge-ready": ["0B7261", "Adjudicated merge, published, and ready for the maintainer"]
};
const TIERS = {
  "tier:standard": ["C5DEF5", "Standard lesson quorum: two reviews and a fresh finalizer"],
  "tier:rephrasing": ["D4C5F9", "Wording-only repair of a published lesson; machine-gated, no quorum"],
  "tier:minor-correction": ["C5DEF5", "Minor-correction quorum"],
  "tier:high-impact": ["E99695", "High-impact quorum: five reviews"]
};

const repo = process.env.GITHUB_REPOSITORY;
const api = async (route, init = {}) => {
  const response = await fetch(`https://api.github.com/${route}`, {
    ...init,
    headers: {
      accept: "application/vnd.github+json",
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
      ...(init.headers || {})
    }
  });
  if (!response.ok && response.status !== 404) {
    throw new Error(`${init.method || "GET"} ${route} -> ${response.status} ${await response.text()}`);
  }
  return response.status === 404 ? null : response.json().catch(() => ({}));
};

const git = (...args) => execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();
const headSha = pr.head.sha;
const baseSha = pr.base.sha;

const changed = git("diff", "--name-only", `${baseSha}...${headSha}`).split("\n").filter(Boolean);
const pack = [...new Set(changed.map((f) => f.match(/^lessons\/([^/]+)\//)?.[1]).filter(Boolean))][0];
if (!pack) {
  console.log("Lesson PR labelling skipped: no lesson pack changed.");
  process.exit(0);
}

const read = (file) => {
  try {
    return git("show", `${headSha}:lessons/${pack}/${file}`);
  } catch {
    return null;
  }
};
const listed = (() => {
  try {
    return git("ls-tree", "-r", "--name-only", headSha, "--", `lessons/${pack}`).split("\n").filter(Boolean);
  } catch {
    return [];
  }
})();

const metadata = JSON.parse(read("lesson.json") || "{}");
const reviewCount = listed.filter((f) => f.includes(`/${pack}/reviews/`) && f.endsWith(".json")).length;
const adjudication = read("adjudication.json");
const decision = adjudication ? JSON.parse(adjudication).decision : null;

const tier = `tier:${metadata.riskTier || "standard"}`;
let stage;
if (tier === "tier:rephrasing") {
  stage = pr.draft ? "stage:authoring" : "stage:merge-ready";
} else if (decision === "merge" && metadata.status === "published") {
  stage = "stage:merge-ready";
} else if (reviewCount >= 2) {
  stage = "stage:awaiting-adjudication";
} else if (reviewCount === 1) {
  stage = "stage:in-review";
} else {
  stage = pr.draft ? "stage:awaiting-review" : "stage:authoring";
}

const wanted = [stage, TIERS[tier] ? tier : "tier:standard"];

for (const name of wanted) {
  const [color, description] = STAGES[name] || TIERS[name];
  const existing = await api(`repos/${repo}/labels/${encodeURIComponent(name)}`);
  if (!existing) {
    await api(`repos/${repo}/labels`, { method: "POST", body: JSON.stringify({ name, color, description }) });
  }
}

const current = (pr.labels || []).map((label) => label.name);
for (const name of current) {
  if ((name.startsWith("stage:") || name.startsWith("tier:")) && !wanted.includes(name)) {
    await api(`repos/${repo}/issues/${pr.number}/labels/${encodeURIComponent(name)}`, { method: "DELETE" });
  }
}
const missing = wanted.filter((name) => !current.includes(name));
if (missing.length) {
  await api(`repos/${repo}/issues/${pr.number}/labels`, { method: "POST", body: JSON.stringify({ labels: missing }) });
}
console.log(`Lesson PR #${pr.number} labelled: ${wanted.join(", ")} (${reviewCount} review artifact(s), decision ${decision || "none"}).`);
