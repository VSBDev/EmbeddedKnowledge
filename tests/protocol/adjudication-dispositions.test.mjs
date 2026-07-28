import assert from "node:assert/strict";
import test from "node:test";
import { targetFiles, unbackedIncorporations } from "../../scripts/lib/adjudication-dispositions.mjs";

const packPath = "lessons/PREM-BIO-001-cell-theory-scale";

function scenario({ dispositions, changedFiles, findings }) {
  return unbackedIncorporations({
    adjudication: { finalization: { reviewDispositions: dispositions } },
    reviews: [{ reviewId: "REV-ACADEMIC", findings }],
    changedFiles,
    packPath
  });
}

test("a finding target resolves to every pack-relative file it names", () => {
  assert.deepEqual(targetFiles("glossary.json#term-cell", packPath), ["glossary.json"]);
  // Reviewers write the target both ways; a repo-relative one must normalise to the same file.
  assert.deepEqual(targetFiles(`${packPath}/lesson.json#L8`, packPath), ["lesson.json"]);
  // One finding routinely spans several files. Reading only the first was this check's own bug.
  assert.deepEqual(
    targetFiles("charts/a.chart.json#series-x; charts/b.chart.json#series-y; content/030.md#sec", packPath),
    ["charts/a.chart.json", "charts/b.chart.json", "content/030.md"]
  );
  // Nothing falsifiable is named by these, so they are not checkable.
  assert.deepEqual(targetFiles("#section-only", packPath), []);
  assert.deepEqual(targetFiles(packPath, packPath), []);
  assert.deepEqual(targetFiles(undefined, packPath), []);
});

test("a repair in any file the finding names answers it", () => {
  const findings = [{ target: "charts/a.chart.json#x; charts/b.chart.json#y; content/030.md#z" }];
  const dispositions = [{ reviewId: "REV-ACADEMIC", findingIndex: 0, action: "incorporated" }];
  // The repair landed in the third file named, which is the merged-history case that exposed this.
  assert.deepEqual(scenario({ dispositions, findings, changedFiles: ["content/030.md"] }), []);
  const none = scenario({ dispositions, findings, changedFiles: ["glossary.json"] });
  assert.equal(none.length, 1);
  assert.match(none[0], /none of charts\/a\.chart\.json, charts\/b\.chart\.json, content\/030\.md are changed/);
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

test("a finding pinned to a renamed file is backed by the rename", () => {
  // Inserting a scene renumbers every content file after it, and git reports a rename as one entry
  // naming only the destination. A reviewer pinned their finding to the path they read, so unless
  // both sides of the rename count as changed, every finding against a renumbered scene reads as a
  // repair that was never made. That happened to PREM-BIO-006, whose coverage fix added two scenes.
  const changedFiles = [
    "content/03-what-a-gradient-can-specify.md", "content/04-what-a-gradient-can-specify.md",
    "content/06-practice.md", "content/08-practice.md"
  ];
  assert.deepEqual(scenario({
    dispositions: [{ reviewId: "REV-ACADEMIC", findingIndex: 0, action: "incorporated" }],
    findings: [{ target: "content/03-what-a-gradient-can-specify.md#worked-example; content/06-practice.md#task-3" }],
    changedFiles
  }), []);

  // The allowance is only for paths the diff actually names. A finding against a file nobody touched
  // still fails, which is the whole point of the guard.
  assert.equal(scenario({
    dispositions: [{ reviewId: "REV-ACADEMIC", findingIndex: 0, action: "incorporated" }],
    findings: [{ target: "content/07-clinical-wrap-up.md#reasoning" }],
    changedFiles
  }).length, 1);
});

test("a durations-only change is not asked to answer for the packs it brushes against", async () => {
  // The guard checks every pack a pull request touches. A calibration touches lesson.json in sixteen
  // packs and no content anywhere, which drags sixteen closed adjudications into scope and blocks on
  // any that were already unbacked — attaching a historical finding to a pull request that has nothing
  // to do with it. A calibration can neither create a disposition nor repair one, so the guard has
  // nothing to say about it.
  const { isCalibrationChange, isCalibrationPath } =
    await import("../../scripts/lib/calibration-gate.mjs");

  assert.equal(isCalibrationChange([
    "lessons/PREM-QNT-008-uncertainty/lesson.json",
    "lessons/PREM-STA-004-probability-foundations/lesson.json",
    "site/data/lessons/PREM-QNT-008.json"
  ]), true);

  // One content file in the set and it is an ordinary lesson change again, adjudication and all.
  assert.equal(isCalibrationChange([
    "lessons/PREM-QNT-008-uncertainty/lesson.json",
    "lessons/PREM-QNT-008-uncertainty/content/030-worked.md"
  ]), false);
  assert.equal(isCalibrationPath("lessons/PREM-BIO-010-cell-death/claims.json"), false);
  assert.equal(isCalibrationPath("lessons/PREM-BIO-010-cell-death/adjudication.json"), false);

  // An empty diff is not a calibration; it must not open the skip by vacuous truth.
  assert.equal(isCalibrationChange([]), false);
});

test("both gates recognise a calibration by the same rule", async () => {
  // validate-lesson-pr.mjs admits the change and validate-adjudication-dispositions.mjs steps aside
  // for it. If the two ever drift, a change is a calibration to one and a content edit to the other,
  // and the contributor gets a failure nobody can act on. So neither may carry its own copy of the
  // rule.
  const fs = await import("node:fs");
  for (const script of ["validate-lesson-pr.mjs", "validate-adjudication-dispositions.mjs"]) {
    const source = fs.readFileSync(new URL(`../../scripts/${script}`, import.meta.url), "utf8");
    assert.match(source, /from "\.\/lib\/calibration-gate\.mjs"/, `${script} must share the predicate`);
    assert.doesNotMatch(
      source,
      /\/\^lessons\\\/\[\^\/\]\+\\\/lesson\\\.json\$\//,
      `${script} declares its own calibration path rule instead of importing it`
    );
  }
});

test("a finding against the adjudication itself is not asked for a diff that cannot exist", () => {
  // A re-versioned lesson carries a stale adjudication until the finalization writes a new one, and
  // reviewers file that: it is why validate-lessons.mjs fails on the candidate. But the finalization
  // ordering puts the content revision in the final commit and the adjudication in the commit AFTER
  // it, so adjudication.json is never inside the range this check reads. Demanding a diff there would
  // force a true disposition to be recorded as no-change-required -- a false statement in the record,
  // written to satisfy a check that cannot see the true one.
  assert.deepEqual(
    scenario({
      dispositions: [{ reviewId: "REV-ACADEMIC", findingIndex: 0, action: "incorporated" }],
      findings: [{ target: `${packPath}/adjudication.json#L5` }],
      changedFiles: ["content/010.md"]
    }).length,
    0
  );

  // The exemption is that one file and no other. A finding naming the adjudication AND a content file
  // still has to show the content repair, because that one lands inside the range.
  assert.equal(
    scenario({
      dispositions: [{ reviewId: "REV-ACADEMIC", findingIndex: 0, action: "incorporated" }],
      findings: [{ target: "adjudication.json#L5; content/020.md#intro" }],
      changedFiles: ["content/010.md"]
    }).length,
    1
  );
  assert.equal(
    scenario({
      dispositions: [{ reviewId: "REV-ACADEMIC", findingIndex: 0, action: "incorporated" }],
      findings: [{ target: "lesson.json#prerequisites" }],
      changedFiles: ["content/010.md"]
    }).length,
    1
  );
});
