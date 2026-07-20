export function currentRule(policy, riskTier) {
  return policy?.tiers?.[riskTier] || null;
}

export function resolveRule(policy, { lessonId, lessonVersion, riskTier, policyId } = {}) {
  const current = currentRule(policy, riskTier);
  if (!policyId || current?.policyId === policyId) return current;
  return (policy.legacyAdjudications || []).find((rule) =>
    rule.lessonId === lessonId &&
    rule.lessonVersion === lessonVersion &&
    rule.riskTier === riskTier &&
    rule.policyId === policyId
  ) || current;
}

export function eligibleReviewVerdicts(rule) {
  return new Set(rule?.eligibleReviewVerdicts || ["approve"]);
}

export function reviewInputMinimum(rule) {
  return rule?.minimumReviewInputs ?? rule?.minimumApprovingReviews ?? 0;
}

export function finalizationRequired(rule) {
  return rule?.reviewMode === "advisory-finalization" && rule?.finalCommitRequired === true;
}

export function reviewVerdictCounts(reviews) {
  return {
    reviewInputs: reviews.length,
    approvals: reviews.filter((review) => review.verdict === "approve").length,
    changeRequests: reviews.filter((review) => review.verdict === "request-changes").length
  };
}

export function validateFinalizationRecord(adjudication, reviews, rule) {
  if (!finalizationRequired(rule)) return [];
  const errors = [];
  if (!adjudication?.finalCommit) errors.push("Finalizing adjudication requires finalCommit.");
  if (!adjudication?.finalization) return [...errors, "Finalizing adjudication requires a finalization record."];

  const expected = new Map();
  for (const review of reviews) {
    for (let findingIndex = 0; findingIndex < (review.findings || []).length; findingIndex += 1) {
      expected.set(`${review.reviewId}:${findingIndex}`, review.findings[findingIndex]);
    }
  }
  const seen = new Set();
  for (const disposition of adjudication.finalization.reviewDispositions || []) {
    const key = `${disposition.reviewId}:${disposition.findingIndex}`;
    if (!expected.has(key)) errors.push(`Finalization disposition ${key} does not match a cited review finding.`);
    if (seen.has(key)) errors.push(`Finalization disposition ${key} is duplicated.`);
    seen.add(key);
    const finding = expected.get(key);
    if (adjudication.decision === "merge" && finding?.severity === "blocking" && disposition.action === "not-incorporated") {
      errors.push(`Blocking finding ${key} cannot remain unincorporated in a merge decision.`);
    }
  }
  for (const key of expected.keys()) {
    if (!seen.has(key)) errors.push(`Finalization does not dispose review finding ${key}.`);
  }
  if (adjudication.decision === "merge" && adjudication.finalization.accessibilityRightsAudit?.satisfied !== true) {
    errors.push("A merge decision requires a satisfied final accessibility-and-rights audit.");
  }
  return errors;
}
