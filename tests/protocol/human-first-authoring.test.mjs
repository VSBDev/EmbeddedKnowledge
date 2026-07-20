import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

test("lesson authors must pass a human first-read gate before building the full pack", () => {
  const standard = read("CONTENT-STANDARD.md");
  const skill = read(".agents/skills/author-embeddedknowledge-lesson/SKILL.md");
  const template = read(".github/PULL_REQUEST_TEMPLATE/lesson.md");

  assert.match(standard, /First-read gate: write for a learner, not for the contract/);
  assert.match(standard, /opening, central explanation, and one example.*prototype/is);
  assert.match(skill, /Pass a human-first prototype before multiplying the prose/);
  assert.match(skill, /Do not make the lesson sound like its validator/);
  assert.match(template, /Human-first preflight/);
});

test("learning-design review treats opaque prose as a major failure", () => {
  const skill = read(".agents/skills/review-embeddedknowledge-learning-design/SKILL.md");
  const template = read(".github/REVIEW_TEMPLATE/learning-design.md");

  assert.match(skill, /Cold-read the learner experience before checking the rubric/);
  assert.match(skill, /record a `major` finding/);
  assert.match(template, /Grammatically valid but opaque, bureaucratic, validator-facing, or needlessly abstract prose is a major learning-design failure/);
});

test("standard review runs once in parallel before one fresh finalizer", () => {
  const contributing = read("CONTRIBUTING.md");
  const reviewing = read("REVIEWING.md");
  const collaboration = read("COLLABORATION.md");

  for (const document of [contributing, reviewing, collaboration]) {
    assert.match(document, /parallel/i);
    assert.match(document, /finaliz/i);
  }
  assert.match(contributing, /exactly two isolated reviews/);
  assert.match(reviewing, /There is no return to the author and no re-review loop/);
  assert.match(collaboration, /Do not revise between review returns/);
});
