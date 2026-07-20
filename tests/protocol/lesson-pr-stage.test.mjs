import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { lessonPrStage } from "../../scripts/lib/lesson-pr-stage.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

test("draft lesson pull requests require candidate validity without pretending to be merge-ready", () => {
  assert.deepEqual(lessonPrStage({ draft: true }), {
    name: "candidate",
    requireFinalAdjudication: false,
    requirePublishedStatus: false
  });
});

test("ready lesson pull requests require publication and final adjudication", () => {
  assert.deepEqual(lessonPrStage({ draft: false }), {
    name: "merge-readiness",
    requireFinalAdjudication: true,
    requirePublishedStatus: true
  });
});

test("ready-for-review and draft conversion both rerun the protected status check", () => {
  const workflow = fs.readFileSync(path.join(root, ".github/workflows/validate.yml"), "utf8");
  assert.match(workflow, /types: \[opened, synchronize, reopened, ready_for_review, converted_to_draft\]/);
  assert.match(workflow, /github\.event\.pull_request\.draft && 'lesson-candidate' \|\| 'agent-protocol'/);
  assert.match(workflow, /Verify lesson candidate or merge readiness/);
});
