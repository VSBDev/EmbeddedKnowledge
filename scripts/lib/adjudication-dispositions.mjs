// A finalizer that says it incorporated a finding, and did not, defeats every check downstream of
// it. Nothing else in this repository notices: the reviews are pinned to the frozen candidate, the
// provenance is stamped from the runtime, the generated output matches a fresh build, and the
// adjudication is schema-valid. All of that can be true of an adjudication whose stated repairs
// were never made.
//
// PREM-BIO-001 0.1.0 is the case this exists for. Its academic review raised six major findings.
// The finalization recorded all twelve dispositions, claimed in materialChanges that it had
// "Reordered the scale ladder", and never opened diagrams/scale-ladder.diagram.json. Five of the
// six repairs were real. The sixth shipped as a claim.
//
// The check is possible because a review finding names where it lives. `target` is a pack-relative
// path with an optional fragment, so an incorporated disposition asserts something falsifiable:
// that file must differ between the candidate commit and the final commit.

/**
 * Resolve a finding `target` to the pack-relative files it names.
 *
 * One finding often spans several files, written as a separated list, for example
 * `charts/a.chart.json#series-x; charts/b.chart.json#series-y; content/030.md#section`. Reading
 * only the first was this check's own first bug: run across merged history it reported repairs as
 * missing when they had landed in the third file the finding named. A change to any file in the
 * set answers the finding.
 */
export function targetFiles(target, packPath) {
  if (typeof target !== "string" || !target) return [];
  const prefix = `${packPath}/`;
  return target
    .split(/[;,]/)
    .map((part) => part.split("#")[0].trim())
    .map((part) => (part.startsWith(prefix) ? part.slice(prefix.length) : part))
    // A bare fragment, or a target naming the pack itself, pins no file and cannot be checked.
    .filter((part) => part && part !== packPath && /\.[a-z0-9]+$/i.test(part));
}

/**
 * Report incorporated dispositions whose finding names a file the finalization never touched.
 *
 * @param adjudication  the parsed adjudication.json
 * @param reviews       parsed review artifacts, each carrying reviewId and findings[]
 * @param changedFiles  pack-relative paths changed between candidateCommit and finalCommit
 * @param packPath      repo-relative pack directory, used to normalise targets
 */
export function unbackedIncorporations({ adjudication, reviews, changedFiles, packPath }) {
  const dispositions = adjudication?.finalization?.reviewDispositions ?? [];
  const changed = new Set(changedFiles ?? []);
  const byId = new Map((reviews ?? []).map((review) => [review.reviewId, review]));
  const problems = [];

  for (const disposition of dispositions) {
    if (disposition?.action !== "incorporated") continue;

    const review = byId.get(disposition.reviewId);
    if (!review) {
      problems.push(`Disposition cites unknown reviewId ${disposition.reviewId}.`);
      continue;
    }

    const finding = review.findings?.[disposition.findingIndex];
    if (!finding) {
      problems.push(`Disposition cites ${disposition.reviewId} finding ${disposition.findingIndex}, which does not exist.`);
      continue;
    }

    // A finding names where the problem is, and a sound repair may land somewhere else: a title
    // and a diagram that disagree can be reconciled from either end. So a disposition may declare
    // the files it actually touched, and then those are what must have changed. Without that
    // declaration the target file is the only falsifiable claim on offer, and it has to hold.
    const declared = Array.isArray(disposition.changedFiles) ? disposition.changedFiles : null;
    if (declared) {
      const missing = declared.filter((file) => !changed.has(file));
      if (!declared.length) {
        problems.push(`${disposition.reviewId} finding ${disposition.findingIndex} is recorded as incorporated with an empty changedFiles.`);
      } else if (missing.length) {
        problems.push(
          `${disposition.reviewId} finding ${disposition.findingIndex} declares it changed ${missing.join(", ")}, which ${missing.length === 1 ? "is" : "are"} unchanged between the candidate and final commits.`
        );
      }
      continue;
    }

    const files = targetFiles(finding.target, packPath);
    if (!files.length) continue;

    // A finding may name adjudication.json itself, and reviewers do: a re-versioned lesson carries a
    // stale adjudication that fails validation until the finalization writes a new one. But the
    // finalization ordering puts the content revision in the final commit and the adjudication in the
    // commit after it, so adjudication.json is never inside the range this check reads. An
    // incorporated disposition against it is therefore unprovable here in every case -- not because
    // the repair is missing, but because the artifact making the claim is the repair. Forcing such a
    // finding to no-change-required would put a false statement in the record to satisfy a check that
    // cannot see the true one.
    if (files.every((file) => file === "adjudication.json")) continue;

    if (!files.some((file) => changed.has(file))) {
      problems.push(
        `${disposition.reviewId} finding ${disposition.findingIndex} is recorded as incorporated, but ` +
        `${files.length === 1 ? `${files[0]} is unchanged` : `none of ${files.join(", ")} are changed`} between the candidate and final commits. ` +
        `Target: ${finding.target}.`
      );
    }
  }

  return problems;
}
