import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { evaluateProposal, resolveGeneratedAt } from "../../scripts/fetch-open-lesson-prs.mjs";

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

test("the current lesson version never guesses between multiple candidate cohorts", () => {
  const mixedReviews = structuredClone(reviews);
  mixedReviews[2].candidateCommit = "f".repeat(40);
  const submissions = mixedReviews.map((review) => githubSubmission(review, "review", "COMMENTED"));
  const result = evaluateProposal(lesson, mixedReviews, null, [], [], submissions, "example-contributor");
  assert.equal(result.state, "awaiting-reviews");
  assert.equal(result.reviewSummary.approvals, 0);
  assert.match(result.blockers.join("\n"), /multiple candidate commits/);
});

test("older lesson-version reviews remain traceability records without counting or blocking", () => {
  const historical = structuredClone(reviews[0]);
  historical.reviewId = "REV-PREM-AAA-001-ACADEMIC-HISTORICAL";
  historical.lessonVersion = "0.0.9";
  historical.candidateCommit = "e".repeat(40);
  historical.verdict = "request-changes";
  const result = evaluateProposal(lesson, [...reviews, historical], null, [], [], reviewSubmissions, "example-contributor");
  assert.equal(result.state, "awaiting-adjudication");
  assert.equal(result.reviewSummary.approvals, 3);
  assert.equal(result.reviewSummary.quorumSatisfied, true);
  assert.doesNotMatch(result.blockers.join("\n"), /HISTORICAL/);
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

test("the open-PR index timestamp remains valid when the contribution queue is empty", async () => {
  const fallback = "2026-07-19T22:15:15Z";
  assert.equal(await resolveGeneratedAt([], async () => fallback), "2026-07-19T22:15:15.000Z");
  assert.equal(
    await resolveGeneratedAt([
      { updated_at: "2026-07-18T10:00:00Z" },
      { updated_at: "2026-07-20T09:30:00Z" }
    ], async () => fallback),
    "2026-07-20T09:30:00.000Z"
  );
});
