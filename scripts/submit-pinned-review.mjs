#!/usr/bin/env node
// submit-pinned-review.mjs <body.md> <pr> <commit_sha> [owner/repo]
//
// Post a structured Comment review pinned to a specific commit through the REST createReview
// endpoint. `gh pr review --comment` attaches to the pull request's current HEAD, but the
// provenance gate (validate-pr-review-provenance.mjs) requires a review's GitHub commit to equal
// the candidateCommit its artifact declares. This is the sanctioned submission path; do not use
// `gh pr review` for structured review or adjudication bodies.
import fs from "node:fs";
import { execFileSync } from "node:child_process";

const [body, pr, sha, repoArg] = process.argv.slice(2);
if (!body || !pr || !sha) {
  console.error("usage: submit-pinned-review.mjs <body.md> <pr> <full-40-char-sha> [owner/repo]");
  process.exit(2);
}
if (!/^[0-9a-f]{40}$/.test(sha)) {
  console.error(`commit sha must be a full 40-character SHA (the REST API 422s on a prefix); got ${sha}`);
  process.exit(2);
}
const repo = repoArg
  || execFileSync("gh", ["repo", "view", "--json", "nameWithOwner", "-q", ".nameWithOwner"], { encoding: "utf8" }).trim();

const payload = JSON.stringify({ commit_id: sha, event: "COMMENT", body: fs.readFileSync(body, "utf8") });
try {
  const out = execFileSync("gh", ["api", `repos/${repo}/pulls/${pr}/reviews`, "--input", "-"], { input: payload, encoding: "utf8" });
  const r = JSON.parse(out);
  console.log(`pinned review ${r.id} -> ${r.commit_id.slice(0, 8)} (${repo}#${pr})`);
} catch (e) {
  console.error("submit failed:", (e.stderr || e.message).toString().slice(0, 300));
  process.exit(1);
}
