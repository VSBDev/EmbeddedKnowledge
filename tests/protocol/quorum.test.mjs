import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { evaluateProposal } from "../../scripts/fetch-open-lesson-prs.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const read = (name) => JSON.parse(fs.readFileSync(path.join(root, "examples/agent-protocol", name), "utf8"));
const lesson = { ...read("lesson.example.json"), status: "published" };
const reviews = [
  read("review.example.json"),
  read("review-learning-design.example.json"),
  read("review-accessibility-rights.example.json")
];
const adjudication = read("adjudication.example.json");

function githubSubmission(artifact, kind, state) {
  const actor = kind === "review" ? artifact.reviewer : artifact.adjudicator;
  return {
    body: `\`\`\`embeddedknowledge-${kind}\n${JSON.stringify(artifact, null, 2)}\n\`\`\``,
    state,
    commit_id: artifact.candidateCommit,
    user: { login: actor.principalId.replace(/^github:/i, "") }
  };
}

const reviewSubmissions = reviews.map((review) => githubSubmission(review, "review", "COMMENTED"));

test("three isolated cross-model reviews satisfy the founding-stage standard quorum", () => {
  const result = evaluateProposal(lesson, reviews, null, [], [], reviewSubmissions, "example-contributor");
  assert.equal(result.state, "awaiting-adjudication");
  assert.equal(result.reviewSummary.approvals, 3);
  assert.equal(result.reviewSummary.distinctAgentRuns, 3);
  assert.equal(result.reviewSummary.distinctAgentModelFamilies, 3);
  assert.equal(result.reviewSummary.githubProvenanceVerifiedApprovals, 3);
  assert.equal(result.reviewSummary.quorumSatisfied, true);
});

test("a dismissed or fabricated review cannot count", () => {
  const dismissed = structuredClone(reviewSubmissions);
  dismissed[0].state = "DISMISSED";
  const dismissedResult = evaluateProposal(lesson, reviews, null, [], [], dismissed, "example-contributor");
  assert.equal(dismissedResult.state, "awaiting-reviews");
  assert.equal(dismissedResult.reviewSummary.approvals, 2);
  assert.match(dismissedResult.blockers.join("\n"), /requires GitHub state approved or commented; found dismissed/);

  const fabricatedResult = evaluateProposal(lesson, reviews, null, [], [], reviewSubmissions.slice(1), "example-contributor");
  assert.equal(fabricatedResult.reviewSummary.approvals, 2);
  assert.match(fabricatedResult.blockers.join("\n"), /no equivalent structured GitHub review submission/);
});

test("duplicating an agent run cannot create an extra vote", () => {
  const duplicateReviews = structuredClone(reviews);
  duplicateReviews[1].reviewer.agent.runId = duplicateReviews[0].reviewer.agent.runId;
  const submissions = duplicateReviews.map((review) => githubSubmission(review, "review", "COMMENTED"));
  const result = evaluateProposal(lesson, duplicateReviews, null, [], [], submissions, "example-contributor");
  assert.equal(result.state, "awaiting-reviews");
  assert.equal(result.reviewSummary.approvals, 2);
  assert.match(result.blockers.join("\n"), /duplicates selected review agent run/);
});

test("one disclosed maintainer may operate the three isolated review agents", () => {
  const result = evaluateProposal(lesson, reviews, null, [], [], reviewSubmissions, "example-contributor");
  assert.equal(result.reviewSummary.approvals, 3);
  assert.equal(result.reviewSummary.distinctPrincipals, 1);
  assert.equal(result.reviewSummary.quorumSatisfied, true);
});

test("a fourth fresh adjudication run produces merge-ready state", () => {
  const githubReviews = [...reviewSubmissions, githubSubmission(adjudication, "adjudication", "COMMENTED")];
  const result = evaluateProposal(lesson, reviews, adjudication, [], [], githubReviews, "example-contributor");
  assert.equal(result.state, "ready-to-merge");
  assert.equal(result.adjudication.githubProvenanceVerified, true);
  assert.deepEqual(result.blockers, []);
});

test("adjudicated is an intermediate state; merge-ready requires published", () => {
  const intermediateLesson = { ...lesson, status: "adjudicated" };
  const githubReviews = [...reviewSubmissions, githubSubmission(adjudication, "adjudication", "COMMENTED")];
  const result = evaluateProposal(intermediateLesson, reviews, adjudication, [], [], githubReviews, "example-contributor");
  assert.notEqual(result.state, "ready-to-merge");
  assert.match(result.blockers.join("\n"), /requires lesson\.json status published/);
});
