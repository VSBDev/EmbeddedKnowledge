import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import { counterBookPrefix, counterPages, courses } from "../../scripts/lib/course-counters.mjs";
import { isAllowedLessonGeneratedFile } from "../../scripts/lib/lesson-pr-file-scope.mjs";

// A page whose content is generated from the whole corpus has to be named in two places that are
// nowhere near the generator: the workflow step that diffs a fresh build, and the file scope a
// lesson pull request is allowed to touch. Adding the landing page's published counters updated
// neither, so the two checks then contradicted each other — one refused the file as out of scope,
// the other refused the branch for holding it stale — and no single change could satisfy both.
//
// These tests derive the list from build-course-counters.mjs so the generator stays the one place a
// page is declared. A new counter page fails here rather than in the middle of someone's merge.

const workflow = fs.readFileSync(".github/workflows/validate.yml", "utf8");

test("the counter generator writes at least the pages this guard expects to find", () => {
  // Guards that silently check nothing are worse than no guard. If the generator is refactored so
  // `courses` no longer carries pages, this fails instead of passing vacuously.
  assert.ok(counterPages.length >= 3, `expected several counter pages, found ${counterPages.length}`);
  assert.ok(counterPages.includes("site/index.html"));
});

for (const page of counterPages) {
  test(`${page} is excluded from the fresh-build diff on pull_request`, () => {
    // The aggregates depend on every published lesson, so a lesson branch holds them at main's copy
    // and a batch refresh rebuilds them. Diffing them on a lesson pull request fails the branch for
    // being correct.
    assert.match(workflow, new RegExp(`':!${page.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}'`),
      `${page} is generated from the corpus but the freshness step still diffs it on a pull request`);
  });

  test(`${page} is inside the file scope of a lesson in the book it counts`, () => {
    // Which books a page counts is the generator's business, not this test's: a page is in scope for
    // any book whose counter it carries.
    const books = new Set(courses.filter((course) => course.pages.includes(page))
      .map((course) => (counterBookPrefix(course.id) === "PSY-" ? "PSY-MOO-001" : "PREM-BIO-001")));
    for (const lessonId of books) {
      assert.equal(isAllowedLessonGeneratedFile(page, [lessonId]), true,
        `publishing ${lessonId} moves a counter on ${page}, so a lesson pull request must be allowed to carry it`);
    }
  });
}

test("a page no generator writes stays outside the lesson file scope", () => {
  // The exclusions are a narrow allowance for derived output, not a general opening of site/.
  assert.equal(isAllowedLessonGeneratedFile("site/styles.css", ["PREM-BIO-001"]), false);
  assert.equal(isAllowedLessonGeneratedFile("site/agent/illustration-sources.json", ["PREM-BIO-001"]), false);
});

test("a book's own generated page stays outside the other book's scope", () => {
  // site/index.html is shared because both books count on it. The per-book pages are not.
  assert.equal(isAllowedLessonGeneratedFile("site/psychiatry/index.html", ["PREM-BIO-001"]), false);
  assert.equal(isAllowedLessonGeneratedFile("site/premed/index.html", ["PSY-MOO-001"]), false);
});
