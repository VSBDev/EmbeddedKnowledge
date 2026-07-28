import assert from "node:assert/strict";
import test from "node:test";
import {
  isAllowedLessonGeneratedFile,
  lessonPrOutsideFiles,
  validateFullLessonPackRemoval
} from "../../scripts/lib/lesson-pr-file-scope.mjs";

const currentId = "PREM-LPP-001";
const previousId = "PREM-LPP-002";
const packPath = "lessons/PREM-LPP-001-reading-curriculum-map";

test("lesson pull requests allow only their deterministic generated site outputs", () => {
  const generatedFiles = [
    "site/data/premed-lessons.json",
    "site/data/premed-progress.json",
    `site/data/lessons/${currentId}.json`,
    `site/assets/lessons/${currentId}/assets/map.svg`,
    `site/assets/lessons/${currentId}/diagrams/path.diagram.json`
  ];

  for (const file of generatedFiles) {
    assert.equal(isAllowedLessonGeneratedFile(file, [currentId]), true, file);
  }
  assert.deepEqual(lessonPrOutsideFiles({
    changedFiles: [`${packPath}/lesson.json`, ...generatedFiles],
    packPath,
    lessonIds: [currentId]
  }), []);
});

test("Psychiatry lesson pull requests use only Psychiatry aggregate outputs", () => {
  const psychiatryId = "PSY-FLD-001";
  for (const file of [
    "site/data/psychiatry-lessons.json",
    "site/data/psychiatry-progress.json",
    "site/data/psychiatry-terminology.json",
    `site/data/lessons/${psychiatryId}.json`,
    `site/assets/lessons/${psychiatryId}/assets/model.svg`
  ]) assert.equal(isAllowedLessonGeneratedFile(file, [psychiatryId]), true, file);

  for (const file of [
    "site/data/premed-lessons.json",
    "site/data/premed-progress.json",
    "site/data/premed-terminology.json"
  ]) assert.equal(isAllowedLessonGeneratedFile(file, [psychiatryId]), false, file);
});

test("a revised pack may remove generated files belonging to its prior valid lesson ID", () => {
  assert.deepEqual(lessonPrOutsideFiles({
    changedFiles: [
      `${packPath}/lesson.json`,
      `site/data/lessons/${previousId}.json`,
      `site/assets/lessons/${previousId}/assets/old.svg`,
      `site/data/lessons/${currentId}.json`
    ],
    packPath,
    lessonIds: [currentId, previousId]
  }), []);
});

test("lesson pull requests reject gate changes, sibling outputs, and path-prefix near misses", () => {
  const rejected = [
    ".github/workflows/validate.yml",
    "scripts/validate-lesson-pr.mjs",
    "tests/protocol/lesson-pr-file-scope.test.mjs",
    "package.json",
    "lessons/PREM-LPP-002-diagnostic-baseline/lesson.json",
    "site/data/premed-graph.json",
    "site/data/lessons/PREM-LPP-999.json",
    `site/data/lessons/${currentId}-copy.json`,
    `site/assets/lessons/${currentId}-copy/asset.svg`,
    "site/assets/lessons/PREM-LPP-999/asset.svg"
  ];

  assert.deepEqual(lessonPrOutsideFiles({
    changedFiles: [`${packPath}/lesson.json`, ...rejected],
    packPath,
    lessonIds: [currentId]
  }), rejected);
});

test("the shared landing page is in scope for a lesson in either book", () => {
  // It carries a generated published counter for each book, so publishing in either one moves it.
  // It was rejected here until the landing page started quoting those counts.
  assert.deepEqual(lessonPrOutsideFiles({
    changedFiles: [`${packPath}/lesson.json`, "site/index.html"],
    packPath,
    lessonIds: [currentId]
  }), []);
});

test("invalid metadata IDs cannot widen the generated-output allowlist", () => {
  for (const lessonId of ["../scripts", "PREM-LPP-001/../../scripts", "PREM-lpp-001", "PREM-LPPP-001"]) {
    assert.equal(isAllowedLessonGeneratedFile(`site/assets/lessons/${lessonId}/payload`, [lessonId]), false);
  }
});

test("a complete existing lesson pack may be removed without retaining governance artifacts", () => {
  assert.deepEqual(validateFullLessonPackRemoval({
    baseMetadata: { id: currentId },
    packExists: false,
    trackedFiles: [],
    changedEntries: [
      { status: "D", path: `${packPath}/lesson.json` },
      { status: "D", path: `${packPath}/reviews/academic.json` },
      { status: "D", path: `${packPath}/adjudication.json` }
    ]
  }), { removed: true, errors: [] });
});

test("a claimed lesson removal rejects retained files and non-deletion pack changes", () => {
  const result = validateFullLessonPackRemoval({
    baseMetadata: { id: currentId },
    packExists: false,
    trackedFiles: [`${packPath}/notes.txt`],
    changedEntries: [{ status: "M", path: `${packPath}/notes.txt` }]
  });

  assert.equal(result.removed, true);
  assert.equal(result.errors.length, 2);
});

test("a missing manifest is not classified as removal while the pack directory remains", () => {
  assert.deepEqual(validateFullLessonPackRemoval({
    baseMetadata: { id: currentId },
    packExists: true,
    trackedFiles: [`${packPath}/content/010-orientation.md`],
    changedEntries: [{ status: "D", path: `${packPath}/lesson.json` }]
  }), { removed: false, errors: [] });
});

test("a duration calibration may span packs, and only durations may move", async () => {
  // estimatedMinutes is one learner-facing integer that was wrong across sixteen published lessons by
  // up to six times. One pull request per integer is paperwork, not review, so the calibration class
  // is allowed to span packs — on the condition that a machine can prove nothing else changed.
  const { calibrationProblems, withoutDurations } = await import("../../scripts/lib/calibration-gate.mjs");
  const published = {
    id: "PREM-QNT-008", version: "0.2.0", status: "published", estimatedMinutes: 250,
    scenes: [{ id: "a", estimatedMinutes: 150 }, { id: "b", estimatedMinutes: 100 }]
  };
  const calibrated = {
    id: "PREM-QNT-008", version: "0.2.0", status: "published", estimatedMinutes: 40,
    scenes: [{ id: "a", estimatedMinutes: 24 }, { id: "b", estimatedMinutes: 16 }]
  };
  assert.deepEqual(calibrationProblems({ packs: [{ packPath: "lessons/x", base: published, head: calibrated }] }), []);

  // The durations are the only thing the gate ignores. Anything a reviewer would read still counts.
  const alsoPublishes = { ...calibrated, status: "draft" };
  assert.equal(calibrationProblems({ packs: [{ packPath: "lessons/x", base: published, head: alsoPublishes }] }).length, 1);

  // The existing invariant survives: the parts must still agree with the whole.
  const staleScenes = { ...calibrated, estimatedMinutes: 40, scenes: published.scenes };
  assert.equal(calibrationProblems({ packs: [{ packPath: "lessons/x", base: published, head: staleScenes }] }).length, 1);

  // Nothing outside a lesson.json rides along.
  assert.equal(calibrationProblems({
    packs: [{ packPath: "lessons/x", base: published, head: calibrated }],
    otherChangedFiles: ["scripts/validate-lessons.mjs"]
  }).length, 1);

  // A new lesson cannot arrive by this route.
  assert.equal(calibrationProblems({ packs: [{ packPath: "lessons/x", base: null, head: calibrated }] }).length, 1);

  assert.deepEqual(withoutDurations(published), withoutDurations(calibrated));
});
