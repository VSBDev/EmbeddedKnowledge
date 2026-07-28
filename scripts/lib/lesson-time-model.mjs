/**
 * A stated derivation for a lesson's estimated duration.
 *
 * `estimatedMinutes` is learner-facing: it is the number a self-directed learner plans an evening
 * around, and the landing page totals it into a course-length claim. It had no derivation anywhere in
 * the project, and `validate-lessons.mjs` could only check that the scene minutes summed to the
 * lesson total — which proves the parts agree with each other and nothing about whether either is
 * plausible.
 *
 * The result was a corpus where the same figure meant different things per block. Measured against a
 * reader who worked every task: PREM-QNT-008 claimed 250 minutes for about 38 minutes of work, and
 * PREM-BIO-010 claimed 109 for about 135. Wrong by more than six times in one direction and by a
 * third in the other, which makes the number worse than absent — an absent number is not trusted,
 * and a wrong one is.
 *
 * The model has two terms and no more, because a model nobody can hold in their head does not get
 * used:
 *
 *   minutes = words / READING_RATE + doing blocks x TASK_MINUTES
 *
 * READING_RATE is careful reading of technical prose where the reader is expected to follow an
 * argument rather than skim. TASK_MINUTES is the surcharge for a block that asks the learner to
 * produce something before reading on — a check, a worked example to follow line by line, a
 * misconception to commit to, an investigation, a practice set. Blocks that are only read, such as a
 * definition or a source note, cost their words and nothing more.
 *
 * The constants are fitted against ten lessons that a reader worked end to end and timed, and they
 * reproduce those within about fifteen minutes on average. That is the honest precision of the thing,
 * so this model is used to flag figures that are out by a factor, not to legislate a value. An author
 * who knows their lesson is slower than its word count should say so and be believed; an author whose
 * figure is six times the model has made an error.
 */

// Words per minute, careful reading of technical prose with the argument followed rather than skimmed.
export const READING_RATE = 120;

// Minutes added by one block that asks the learner to produce something before reading on.
export const TASK_MINUTES = 4;

// Blocks that cost more than their words, because the learner has to stop and do something.
export const DOING_BLOCKS = new Set([
  "check",
  "worked-example",
  "misconception",
  "investigation",
  "practice"
]);

// The band a stored figure may sit in before it is reported. Wide on purpose: the model's own error
// is about fifteen minutes, so anything tighter would flag honest author judgement. What it catches
// is the figure that is wrong by a factor.
export const LOWER_BOUND = 0.6;
export const UPPER_BOUND = 1.8;

/** Every word a learner reads, including the text inside directive blocks. */
export function countWords(markdown) {
  return (String(markdown ?? "").match(/\b[\w'-]+\b/g) || []).length;
}

/** Blocks that ask the learner to produce something before reading on. */
export function countDoingBlocks(markdown) {
  const opens = String(markdown ?? "").matchAll(/^:::\{([a-z-]+)\}/gm);
  let total = 0;
  for (const match of opens) if (DOING_BLOCKS.has(match[1])) total += 1;
  return total;
}

/** The derived estimate, in minutes, for one lesson's whole scene text. */
export function modelMinutes(markdown) {
  return countWords(markdown) / READING_RATE + countDoingBlocks(markdown) * TASK_MINUTES;
}

/**
 * Compare a stored figure with the model. Returns null when the figure is defensible, or a finding
 * describing the direction and size of the gap.
 */
export function timeFinding({ lessonId, storedMinutes, markdown }) {
  const model = modelMinutes(markdown);
  if (model <= 0) return null;
  const ratio = storedMinutes / model;
  if (ratio >= LOWER_BOUND && ratio <= UPPER_BOUND) return null;
  const direction = ratio > UPPER_BOUND ? "longer" : "shorter";
  return {
    lessonId,
    storedMinutes,
    modelMinutes: Math.round(model),
    ratio: Math.round(ratio * 100) / 100,
    message:
      `estimatedMinutes ${storedMinutes} is ${ratio.toFixed(1)}x the derived estimate of ` +
      `${Math.round(model)} minutes (${countWords(markdown)} words at ${READING_RATE} per minute, plus ` +
      `${countDoingBlocks(markdown)} task block(s) at ${TASK_MINUTES} minutes). A figure this much ` +
      `${direction} than the work in the lesson is the number a learner plans around, so either the ` +
      `figure or the lesson needs to change.`
  };
}
