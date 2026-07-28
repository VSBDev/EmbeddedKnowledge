/**
 * The machine gate for a duration calibration.
 *
 * A lesson pull request may change exactly one pack, which is the right default: it keeps a lesson's
 * governance attached to the lesson. But it makes one class of repair impossible in practice.
 * `estimatedMinutes` is a single learner-facing number that was wrong across sixteen published
 * lessons, by up to six times, and correcting it one pack at a time means sixteen pull requests to
 * change sixteen integers that no reviewer can usefully review in isolation.
 *
 * So a calibration is allowed to span packs, on the same terms the rephrasing tier gets: the claim
 * that "only the durations changed" has to be a property a machine can verify, not a promise a
 * contributor makes. This module is that verification.
 *
 * Everything except the duration fields must be bit-identical between the published pack and the
 * proposed one. Scene text, claims, sources, assessment, glossary, objectives, outcomes, status,
 * version, risk tier: all of it. What may move is `estimatedMinutes` on the lesson and on its scenes,
 * and nothing else, in any number of packs.
 *
 * A calibration therefore cannot teach anything different, cannot publish anything, and cannot touch
 * a claim. It can only change how long the course says a lesson takes.
 */

/** Strip the duration fields so what remains is everything a reviewer would have examined. */
export function withoutDurations(lesson) {
  const copy = JSON.parse(JSON.stringify(lesson ?? {}));
  delete copy.estimatedMinutes;
  for (const scene of copy.scenes ?? []) delete scene.estimatedMinutes;
  return copy;
}

/**
 * Problems that disqualify a change from the calibration class.
 *
 * `packs` is a list of { packPath, base, head } where base and head are the parsed lesson.json from
 * the published commit and the proposal. `otherChangedFiles` is every changed path that is not a
 * lesson.json, which must be empty apart from the deterministic site outputs the caller allows.
 */
export function calibrationProblems({ packs, otherChangedFiles = [] }) {
  const problems = [];

  if (!packs.length) problems.push("A calibration must change at least one lesson.");

  for (const { packPath, base, head } of packs) {
    if (!base) {
      problems.push(`${packPath}: a calibration may only change a published lesson, and this one is new.`);
      continue;
    }
    if (JSON.stringify(withoutDurations(base)) !== JSON.stringify(withoutDurations(head))) {
      problems.push(
        `${packPath}: lesson.json changed beyond estimatedMinutes. A calibration may move the durations ` +
        "and nothing else; use the standard tier for anything a reviewer would need to read."
      );
      continue;
    }
    // The existing invariant still has to hold: the parts must agree with the whole. A calibration
    // that fixed the lesson total and left the scenes stale would put the two in conflict.
    const sceneSum = (head.scenes ?? []).reduce((total, scene) => total + (scene.estimatedMinutes ?? 0), 0);
    if (head.scenes?.length && sceneSum !== head.estimatedMinutes) {
      problems.push(
        `${packPath}: scene minutes sum to ${sceneSum}, not the lesson's ${head.estimatedMinutes}. ` +
        "Recalibrate the scenes with the lesson."
      );
    }
    if (!(head.estimatedMinutes > 0)) {
      problems.push(`${packPath}: estimatedMinutes must be a positive number.`);
    }
  }

  for (const file of otherChangedFiles) {
    problems.push(
      `${file} is not a lesson.json. A calibration changes durations only; move anything else into its ` +
      "own pull request."
    );
  }

  return problems;
}
