#!/usr/bin/env node
/**
 * Keep the static course counters in the portal pages truthful.
 *
 * The course landing pages carry a headline counter ("388 outcomes · N lessons published"). It was
 * written by hand as `0 lessons published` and only corrected client-side after the lesson index
 * loaded, so every crawler, link preview, and LLM indexer that reads the served HTML — none of
 * which run the page's JavaScript — recorded the course as having no content at all, long after
 * lessons were published.
 *
 * The count is derived data, so it is generated here from the same lesson index the site uses and
 * written into the markup. CI's "committed generated output matches a fresh build" check then makes
 * a stale number impossible: the number cannot drift from the corpus without failing the build.
 *
 * Markup contract: <span data-course-counter="<course>">…</span>. The element's text is replaced;
 * nothing else in the page is touched.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const courses = [
  { id: "premed", index: "site/data/premed-lessons.json", pages: ["site/premed/index.html"] },
  { id: "psychiatry", index: "site/data/psychiatry-lessons.json", pages: ["site/psychiatry/index.html"] },
  // The landing page quotes each book's published count on its own, without the outcome total, so it
  // carries a second marker form. A hand-edited number there goes stale the moment a lesson merges.
  { id: "premed-published", index: "site/data/premed-lessons.json", pages: ["site/index.html"], form: "published-only" },
  { id: "psychiatry-published", index: "site/data/psychiatry-lessons.json", pages: ["site/index.html"], form: "published-only" }
];

const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;

let rewritten = 0;
const report = [];

for (const course of courses) {
  const indexPath = path.join(root, course.index);
  if (!fs.existsSync(indexPath)) continue;
  const summary = JSON.parse(fs.readFileSync(indexPath, "utf8")).summary ?? {};
  const outcomes = Number(summary.outcomes ?? 0);
  const published = Number(summary.publishedLessons ?? 0);
    const text = course.form === "published-only"
      ? String(published)
      : `${plural(outcomes, "outcome")} · ${plural(published, "lesson")} published`;

  for (const page of course.pages) {
    const pagePath = path.join(root, page);
    if (!fs.existsSync(pagePath)) continue;
    const before = fs.readFileSync(pagePath, "utf8");
    // Replace only the text inside the marked element; the element itself is authored by hand.
    const pattern = new RegExp(`(<(?:span|strong) data-course-counter="${course.id}">)[^<]*(</(?:span|strong)>)`, "g");
    const after = before.replace(pattern, `$1${text}$2`);
    const hits = (before.match(pattern) || []).length;
    if (hits === 0) continue;
    if (after !== before) {
      fs.writeFileSync(pagePath, after);
      rewritten += hits;
    }
    report.push(`${page}: ${hits} counter(s) -> ${text}`);
  }
}

console.log(
  report.length
    ? `Built course counters (${rewritten} rewritten):\n  ${report.join("\n  ")}`
    : "Built course counters: no marked counters found."
);
