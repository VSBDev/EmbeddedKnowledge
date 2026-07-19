// Shared provenance and quorum helpers used by every gate that counts reviews:
// validate-lessons.mjs, validate-agent-protocol.mjs, fetch-open-lesson-prs.mjs,
// validate-pr-review-provenance.mjs and validate-review-comment.mjs.
// Keeping these in one module prevents the counting rules from drifting apart.

/** Normalize a principal identifier for identity comparison and set membership. */
export const principalKey = (principalId) => String(principalId).toLowerCase();

/**
 * A "model family" is the disclosed agent *provider* (lowercased), not
 * provider:model. Three models from one provider are one family, so
 * minimumDistinctAgentModelFamilies enforces genuine cross-vendor diversity.
 */
export const modelFamilyKey = (agent) => String(agent?.provider ?? "").toLowerCase();

/** Deterministic canonical JSON serialization used to compare structured artifacts. */
export function canonical(value) {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`).join(",")}}`;
  return JSON.stringify(value);
}

/** Extract an embedded ```embeddedknowledge-<kind> JSON block from a GitHub review body. */
export function extractStructured(body, kind) {
  const match = body?.match(new RegExp("```embeddedknowledge-" + kind + "\\s*\\n([\\s\\S]*?)```", "i"));
  if (!match) return null;
  try { return JSON.parse(match[1]); } catch { return null; }
}

/** GitHub review state that a structured artifact's verdict or decision implies. */
export function expectedReviewState(artifact, kind) {
  if (kind === "review") return artifact.verdict === "approve" ? "approved" : artifact.verdict === "request-changes" ? "changes_requested" : "commented";
  return artifact.decision === "merge" ? "approved" : artifact.decision === "revise" ? "changes_requested" : "commented";
}

/**
 * GitHub review states eligible for a structured artifact. A plain "commented"
 * state is additionally accepted ONLY while the founding stage is active AND the
 * actor discloses agent provenance (self-operated agents cannot formally
 * approve their operator's own pull request on GitHub).
 */
export function allowedReviewStates(artifact, kind, policy) {
  const expected = expectedReviewState(artifact, kind);
  const actor = kind === "review" ? artifact.reviewer : artifact.adjudicator;
  return policy?.foundingStage?.active && actor?.agent ? new Set([expected, "commented"]) : new Set([expected]);
}

/**
 * Outside the founding stage a lesson author's own review must not count toward
 * quorum. `authorPrincipals` must be a Set of principalKey()-normalized IDs.
 * Returns an error message when the reviewer is ineligible, otherwise null.
 */
export function reviewerAuthorConflict(policy, authorPrincipals, reviewerPrincipalId) {
  if (policy?.foundingStage?.active) return null;
  const reviewer = principalKey(reviewerPrincipalId);
  if (authorPrincipals.has(reviewer)) {
    return `reviewer principal ${reviewer} is also an accountable author principal; outside the founding stage an author's review cannot count toward quorum.`;
  }
  return null;
}
