import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { extractStructured } from "../../scripts/lib/provenance.mjs";
import { assertSubmissionExpectations, fencedSubmission, structuredArtifactKind } from "../../scripts/lib/review-submission.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const readJson = (relativePath) => JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
const policy = readJson("site/agent/quorum-policy.json");

test("the submission generator round-trips a review artifact without semantic changes", () => {
  const artifact = readJson("examples/agent-protocol/review.example.json");
  assert.equal(structuredArtifactKind(artifact), "review");
  assert.deepEqual(extractStructured(fencedSubmission(artifact), "review"), artifact);
});

test("the submission generator round-trips an adjudication artifact without semantic changes", () => {
  const artifact = readJson("examples/agent-protocol/adjudication.example.json");
  assert.equal(structuredArtifactKind(artifact), "adjudication");
  assert.deepEqual(extractStructured(fencedSubmission(artifact), "adjudication"), artifact);
});

test("submission preflight pins candidate, principal, and eligible GitHub state", () => {
  const artifact = readJson("examples/agent-protocol/review.example.json");
  const login = artifact.reviewer.principalId.replace(/^github:/i, "");
  assert.equal(assertSubmissionExpectations({
    artifact,
    policy,
    candidateCommit: artifact.candidateCommit,
    githubLogin: login,
    state: "commented"
  }), "review");
  assert.throws(() => assertSubmissionExpectations({ artifact, policy, candidateCommit: "1".repeat(40) }), /does not equal expected candidate/);
  assert.throws(() => assertSubmissionExpectations({ artifact, policy, githubLogin: "different-user" }), /does not equal/);
  assert.throws(() => assertSubmissionExpectations({ artifact: { ...artifact, verdict: "request-changes" }, policy, state: "approved" }), /not eligible/);
});
