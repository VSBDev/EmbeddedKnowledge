/**
 * A draft pull request is the review workspace. It must pass every structural,
 * rights, file-scope, and provenance check that applies to the artifacts it
 * already contains, but it is not merge-ready until the author marks it ready.
 */
export function lessonPrStage(pullRequest) {
  const draft = pullRequest?.draft === true;
  return {
    name: draft ? "candidate" : "merge-readiness",
    requireFinalAdjudication: !draft,
    requirePublishedStatus: !draft
  };
}
