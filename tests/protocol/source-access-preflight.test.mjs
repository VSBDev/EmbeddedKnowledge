import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { applySourcePreflightExemptions, preflightSourceAccess } from "../../scripts/lib/source-access-preflight.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

const agentLesson = {
  authors: [{ principalId: "github:operator", agent: { runId: "author-run" } }]
};

const source = (overrides = {}) => ({
  id: "source-example",
  accessed: "2026-07-20",
  agentAccess: {
    status: "checked-no-agent-restriction-found",
    termsUrl: "https://example.org/terms",
    checked: "2026-07-20",
    notes: "The public route and its terms were checked; no agent restriction was found.",
    ...overrides
  }
});

test("strict source preflight accepts a dated permitted route with a terms location", () => {
  const result = preflightSourceAccess({
    lesson: agentLesson,
    references: { sources: [source()] },
    strict: true,
    today: "2026-07-20"
  });
  assert.deepEqual(result, { errors: [], warnings: [] });
});

test("strict source preflight stops missing terms routes and human-only sources before freeze", () => {
  const result = preflightSourceAccess({
    lesson: agentLesson,
    references: { sources: [
      source({ termsUrl: null }),
      { ...source(), id: "source-human", agentAccess: {
        status: "human-only",
        termsUrl: "https://example.org/ai-policy",
        checked: "2026-07-20",
        notes: "The policy prohibits agent ingestion; agents must not process this source."
      } }
    ] },
    strict: true,
    today: "2026-07-20"
  });
  assert.equal(result.errors.length, 2);
  assert.match(result.errors[0], /no termsUrl/);
  assert.match(result.errors[1], /human-only in an agent-authored lesson/);
});

test("source preflight rejects future access checks without guessing from prose notes", () => {
  const result = preflightSourceAccess({
    lesson: agentLesson,
    references: { sources: [{
      ...source({
        checked: "2026-07-21",
        notes: "The route was checked on the recorded date."
      }),
      accessed: "2026-07-21"
    }] },
    strict: false,
    today: "2026-07-20"
  });
  assert.equal(result.errors.length, 1);
  assert.match(result.errors[0], /future/);
});

test("source terms must be checked before substantive source access", () => {
  const result = preflightSourceAccess({
    lesson: agentLesson,
    references: { sources: [{ ...source(), accessed: "2026-07-19" }] },
    strict: true,
    today: "2026-07-20"
  });
  assert.equal(result.errors.length, 1);
  assert.match(result.errors[0], /checked after the source access date/);
});

test("compatibility exemptions match only one exact lesson candidate, source, and rule", () => {
  const problem = "source-legacy has no termsUrl for the exact route the agent used; record the route's current terms before candidate freeze.";
  const policy = { exemptions: [{
    lessonId: "PREM-AAA-001",
    lessonVersion: "0.1.0",
    candidateCommit: "a".repeat(40),
    sourceId: "source-legacy",
    rule: "missing-terms-url"
  }] };
  const exact = applySourcePreflightExemptions({
    problems: [problem],
    lesson: { id: "PREM-AAA-001", version: "0.1.0" },
    candidateCommit: "a".repeat(40),
    policy
  });
  assert.equal(exact.remaining.length, 0);
  assert.equal(exact.applied.length, 1);
  const newCandidate = applySourcePreflightExemptions({
    problems: [problem],
    lesson: { id: "PREM-AAA-001", version: "0.1.0" },
    candidateCommit: "b".repeat(40),
    policy
  });
  assert.deepEqual(newCandidate, { remaining: [problem], applied: [] });
});

test("the public source-preflight exemption policy is exact-scoped and auditable", () => {
  const policy = JSON.parse(fs.readFileSync(path.join(root, "site/agent/source-preflight-policy.json"), "utf8"));
  assert.equal(policy.schemaVersion, 1);
  assert.ok(Array.isArray(policy.exemptions));
  for (const exemption of policy.exemptions) {
    assert.match(exemption.lessonId, /^PREM-[A-Z]{3}-\d{3}$/);
    assert.match(exemption.lessonVersion, /^\d+\.\d+\.\d+$/);
    assert.match(exemption.candidateCommit, /^[a-f0-9]{40}$/);
    assert.match(exemption.sourceId, /^source-[a-z0-9-]+$/);
    assert.equal(exemption.rule, "missing-terms-url");
    assert.ok(exemption.rationale.length >= 80);
  }
  const keys = policy.exemptions.map((entry) => [entry.candidateCommit, entry.sourceId, entry.rule].join(":"));
  assert.equal(new Set(keys).size, keys.length);
});
