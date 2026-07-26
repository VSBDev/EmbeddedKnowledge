// A candidate's review record is the evidence an adjudication rests on. Discarding it and running a
// fresh cohort turns an advisory review into an instruction to try again, which is the one thing the
// adjudicate skill rules out: "a request-changes review is evidence to resolve rather than an
// instruction to repeat the cohort."
//
// The skill says so in four separate places and it was still done. Prose that is already emphatic
// does not get more effective by being repeated, so the invariant is stated here as a check.
//
// The signature of the mistake is mechanical: review artifacts for one lesson version disappear from
// a branch, a new version appears, and no adjudication ever recorded a decision about the version
// whose reviews were thrown away. A legitimate re-authoring cycle looks almost identical except that
// it carries that record, so the record is what this asks for.

/** Lesson versions whose review artifacts were deleted somewhere in the range. */
export function discardedReviewVersions({ deletions, versionAt }) {
  const versions = new Map();
  for (const { path, commit } of deletions) {
    const version = versionAt(commit, path);
    if (!version) continue;
    if (!versions.has(version)) versions.set(version, []);
    versions.get(version).push(path);
  }
  return versions;
}

/**
 * Report versions whose reviews were discarded with no adjudication recording the decision.
 * `adjudicatedVersions` maps a lesson version to the decision recorded for it anywhere in range.
 */
export function unrecordedDiscards({ discarded, adjudicatedVersions }) {
  const problems = [];
  for (const [version, paths] of discarded) {
    const decision = adjudicatedVersions.get(version);
    if (!decision) {
      problems.push(
        `review artifacts for version ${version} were discarded with no adjudication recording a decision ` +
        `about that candidate (${paths.join(", ")}). An advisory review is evidence for the adjudicator to ` +
        `resolve, not an instruction to repeat the cohort. Dispose the findings in one finalization pass, or ` +
        `record an adjudication with decision revise or reject before replacing the candidate.`
      );
      continue;
    }
    if (!["revise", "reject"].includes(decision)) {
      problems.push(
        `review artifacts for version ${version} were discarded, but its adjudication recorded ` +
        `decision "${decision}". Only revise or reject retire a candidate and its review record.`
      );
    }
  }
  return problems;
}
