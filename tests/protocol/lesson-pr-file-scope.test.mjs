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
    "site/index.html",
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
