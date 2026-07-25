import assert from "node:assert/strict";
import test from "node:test";
import { targetFile, unbackedIncorporations } from "../../scripts/lib/adjudication-dispositions.mjs";

const packPath = "lessons/PREM-BIO-001-cell-theory-scale";

function scenario({ dispositions, changedFiles, findings }) {
  return unbackedIncorporations({
    adjudication: { finalization: { reviewDispositions: dispositions } },
    reviews: [{ reviewId: "REV-ACADEMIC", findings }],
    changedFiles,
    packPath
  });
}

test("a finding target resolves to the pack-relative file it names", () => {
  assert.equal(targetFile("glossary.json#term-cell", packPath), "glossary.json");
  assert.equal(targetFile("diagrams/scale-ladder.diagram.json#diagram-x", packPath), "diagrams/scale-ladder.diagram.json");
  // Reviewers write the target both ways; a repo-relative one must normalise to the same file.
  assert.equal(targetFile(`${packPath}/lesson.json#L8`, packPath), "lesson.json");
  // Nothing falsifiable is named by these, so they are not checkable.
  assert.equal(targetFile("#section-only", packPath), null);
  assert.equal(targetFile(packPath, packPath), null);
  assert.equal(targetFile(undefined, packPath), null);
});

test("an incorporated repair must have touched the file its finding names", () => {
  const findings = [{ target: "diagrams/scale-ladder.diagram.json#diagram-scale-ladder" }];
  const dispositions = [{ reviewId: "REV-ACADEMIC", findingIndex: 0, action: "incorporated" }];

  assert.deepEqual(
    scenario({ dispositions, findings, changedFiles: ["diagrams/scale-ladder.diagram.json"] }),
    []
  );

  // This is PREM-BIO-001 0.1.0: the finalization recorded the repair and never opened the file.
  const problems = scenario({ dispositions, findings, changedFiles: ["glossary.json", "content/04.md"] });
  assert.equal(problems.length, 1);
  assert.match(problems[0], /diagrams\/scale-ladder\.diagram\.json is unchanged/);
});

test("a repair made somewhere other than the target is accepted when it says so", () => {
  // A title and a diagram that disagree can be reconciled from either end, so a disposition may
  // name the files it actually changed. That claim then has to hold in its place.
  const findings = [{ target: "lesson.json#L8" }];
  const base = { reviewId: "REV-ACADEMIC", findingIndex: 0, action: "incorporated" };

  assert.deepEqual(
    scenario({
      dispositions: [{ ...base, changedFiles: ["content/020-six-lens-map.md"] }],
      findings,
      changedFiles: ["content/020-six-lens-map.md"]
    }),
    []
  );

  const lying = scenario({
    dispositions: [{ ...base, changedFiles: ["content/020-six-lens-map.md"] }],
    findings,
    changedFiles: ["glossary.json"]
  });
  assert.equal(lying.length, 1);
  assert.match(lying[0], /declares it changed content\/020-six-lens-map\.md, which is unchanged/);

  // An empty list is an escape hatch used to assert nothing, which is the thing being prevented.
  const empty = scenario({ dispositions: [{ ...base, changedFiles: [] }], findings, changedFiles: [] });
  assert.equal(empty.length, 1);
  assert.match(empty[0], /empty changedFiles/);
});

test("only incorporated dispositions are held to a change", () => {
  const findings = [{ target: "glossary.json#term-cell" }];
  for (const action of ["no-change-required", "not-incorporated"]) {
    assert.deepEqual(
      scenario({
        dispositions: [{ reviewId: "REV-ACADEMIC", findingIndex: 0, action }],
        findings,
        changedFiles: []
      }),
      [],
      `${action} should not require a diff`
    );
  }
});

test("a disposition that cites nothing real is itself a problem", () => {
  const findings = [{ target: "glossary.json#term-cell" }];

  const unknownReview = scenario({
    dispositions: [{ reviewId: "REV-DOES-NOT-EXIST", findingIndex: 0, action: "incorporated" }],
    findings,
    changedFiles: ["glossary.json"]
  });
  assert.match(unknownReview[0], /unknown reviewId/);

  const missingFinding = scenario({
    dispositions: [{ reviewId: "REV-ACADEMIC", findingIndex: 7, action: "incorporated" }],
    findings,
    changedFiles: ["glossary.json"]
  });
  assert.match(missingFinding[0], /finding 7, which does not exist/);
});
