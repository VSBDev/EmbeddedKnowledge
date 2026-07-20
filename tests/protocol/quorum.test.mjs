import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { evaluateProposal, resolveGeneratedAt } from "../../scripts/fetch-open-lesson-prs.mjs";
import { finalCommitLineageRequired } from "../../scripts/lib/quorum-policy.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const read = (name) => JSON.parse(fs.readFileSync(path.join(root, "examples/agent-protocol", name), "utf8"));
const lesson = { ...read("lesson.example.json"), status: "published" };
const reviews = [
  read("review.example.json"),
  read("review-learning-design.example.json")
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

test("draft review accumulation does not require final content before adjudication exists", () => {
  const standardRule = JSON.parse(fs.readFileSync(path.join(root, "site/agent/quorum-policy.json"), "utf8")).tiers.standard;
  assert.equal(finalCommitLineageRequired(standardRule, null), false);
  assert.equal(finalCommitLineageRequired(standardRule, adjudication), true);
});

test("two isolated cross-provider reviews complete the standard review-input gate", () => {
  const result = evaluateProposal(lesson, reviews, null, [], [], reviewSubmissions, "example-contributor");
  assert.equal(result.state, "awaiting-adjudication");
  assert.equal(result.reviewSummary.reviewInputs, 2);
  assert.equal(result.reviewSummary.approvals, 2);
  assert.equal(result.reviewSummary.distinctAgentRuns, 2);
  assert.equal(result.reviewSummary.distinctAgentModelFamilies, 2);
  assert.equal(result.reviewSummary.githubProvenanceVerifiedApprovals, 2);
  assert.equal(result.reviewSummary.quorumSatisfied, true);
});

test("a dismissed or fabricated review cannot count", () => {
  const dismissed = structuredClone(reviewSubmissions);
  dismissed[0].state = "DISMISSED";
  const dismissedResult = evaluateProposal(lesson, reviews, null, [], [], dismissed, "example-contributor");
  assert.equal(dismissedResult.state, "awaiting-reviews");
  assert.equal(dismissedResult.reviewSummary.reviewInputs, 1);
  assert.match(dismissedResult.blockers.join("\n"), /requires GitHub state approved or commented; found dismissed/);

  const fabricatedResult = evaluateProposal(lesson, reviews, null, [], [], reviewSubmissions.slice(1), "example-contributor");
  assert.equal(fabricatedResult.reviewSummary.reviewInputs, 1);
  assert.match(fabricatedResult.blockers.join("\n"), /no equivalent structured GitHub review submission/);
});

test("duplicating an agent run cannot create an extra vote", () => {
  const duplicateReviews = structuredClone(reviews);
  duplicateReviews[1].reviewer.agent.runId = duplicateReviews[0].reviewer.agent.runId;
  const submissions = duplicateReviews.map((review) => githubSubmission(review, "review", "COMMENTED"));
  const result = evaluateProposal(lesson, duplicateReviews, null, [], [], submissions, "example-contributor");
  assert.equal(result.state, "awaiting-reviews");
  assert.equal(result.reviewSummary.reviewInputs, 1);
  assert.match(result.blockers.join("\n"), /duplicates selected review agent run/);
});

test("one disclosed maintainer may operate the two isolated review agents", () => {
  const result = evaluateProposal(lesson, reviews, null, [], [], reviewSubmissions, "example-contributor");
  assert.equal(result.reviewSummary.reviewInputs, 2);
  assert.equal(result.reviewSummary.distinctPrincipals, 1);
  assert.equal(result.reviewSummary.quorumSatisfied, true);
});

test("the current lesson version never guesses between multiple candidate cohorts", () => {
  const mixedReviews = structuredClone(reviews);
  mixedReviews[1].candidateCommit = "f".repeat(40);
  const submissions = mixedReviews.map((review) => githubSubmission(review, "review", "COMMENTED"));
  const result = evaluateProposal(lesson, mixedReviews, null, [], [], submissions, "example-contributor");
  assert.equal(result.state, "awaiting-reviews");
  assert.equal(result.reviewSummary.reviewInputs, 0);
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
  assert.equal(result.reviewSummary.reviewInputs, 2);
  assert.equal(result.reviewSummary.quorumSatisfied, true);
  assert.doesNotMatch(result.blockers.join("\n"), /HISTORICAL/);
});

test("a fresh finalizing adjudication produces merge-ready state", () => {
  const githubReviews = [...reviewSubmissions, githubSubmission(adjudication, "adjudication", "COMMENTED")];
  const result = evaluateProposal(lesson, reviews, adjudication, [], [], githubReviews, "example-contributor");
  assert.equal(result.state, "ready-to-merge");
  assert.equal(result.adjudication.githubProvenanceVerified, true);
  assert.deepEqual(result.blockers, []);
});

test("an honest request-changes review remains usable by the one-pass finalizer", () => {
  const advisoryReviews = structuredClone(reviews);
  advisoryReviews[1].verdict = "request-changes";
  const advisoryAdjudication = structuredClone(adjudication);
  advisoryAdjudication.quorum.approvals = 1;
  advisoryAdjudication.quorum.changeRequests = 1;
  const submissions = [
    ...advisoryReviews.map((review) => githubSubmission(review, "review", "COMMENTED")),
    githubSubmission(advisoryAdjudication, "adjudication", "COMMENTED")
  ];
  const result = evaluateProposal(lesson, advisoryReviews, advisoryAdjudication, [], [], submissions, "example-contributor");
  assert.equal(result.state, "ready-to-merge");
  assert.equal(result.reviewSummary.reviewInputs, 2);
  assert.equal(result.reviewSummary.approvals, 1);
  assert.equal(result.reviewSummary.changeRequests, 1);
});

test("the finalizer must dispose every finding and cannot waive a blocking finding", () => {
  const incomplete = structuredClone(adjudication);
  incomplete.finalization.reviewDispositions.pop();
  let submissions = [...reviewSubmissions, githubSubmission(incomplete, "adjudication", "COMMENTED")];
  let result = evaluateProposal(lesson, reviews, incomplete, [], [], submissions, "example-contributor");
  assert.notEqual(result.state, "ready-to-merge");
  assert.match(result.blockers.join("\n"), /does not dispose review finding/);

  const blockingReviews = structuredClone(reviews);
  blockingReviews[1].verdict = "request-changes";
  blockingReviews[1].findings[0].severity = "blocking";
  blockingReviews[1].findings[0].resolution = null;
  const waived = structuredClone(adjudication);
  waived.quorum.approvals = 1;
  waived.quorum.changeRequests = 1;
  waived.finalization.reviewDispositions[1].action = "not-incorporated";
  submissions = [
    ...blockingReviews.map((review) => githubSubmission(review, "review", "COMMENTED")),
    githubSubmission(waived, "adjudication", "COMMENTED")
  ];
  result = evaluateProposal(lesson, blockingReviews, waived, [], [], submissions, "example-contributor");
  assert.notEqual(result.state, "ready-to-merge");
  assert.match(result.blockers.join("\n"), /Blocking finding .* cannot remain unincorporated/);
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
