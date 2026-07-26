/**
 * Which pages carry generated course counters, and for which book.
 *
 * This lives apart from the generator because two checks far from it have to agree with it: the
 * workflow step that diffs a fresh build against the commit, and the file scope a lesson pull
 * request may touch. A page listed here is derived from the whole corpus, so a lesson branch holds
 * it at main's copy and a batch refresh rebuilds it.
 *
 * `id` is the value of the page's `data-course-counter` attribute. `form: "published-only"` writes
 * the bare published count; the default writes the outcome total beside it.
 */
export const courses = [
  { id: "premed", index: "site/data/premed-lessons.json", pages: ["site/premed/index.html"] },
  { id: "psychiatry", index: "site/data/psychiatry-lessons.json", pages: ["site/psychiatry/index.html"] },
  // The landing page quotes each book's published count on its own, without the outcome total, so it
  // carries a second marker form. A hand-edited number there goes stale the moment a lesson merges.
  { id: "premed-published", index: "site/data/premed-lessons.json", pages: ["site/index.html"], form: "published-only" },
  { id: "psychiatry-published", index: "site/data/psychiatry-lessons.json", pages: ["site/index.html"], form: "published-only" }
];

/** Every page a counter is written into, once each. */
export const counterPages = [...new Set(courses.flatMap((course) => course.pages))];

/** The book prefix whose lesson index feeds a given counter id. */
export function counterBookPrefix(counterId) {
  return counterId.startsWith("psychiatry") ? "PSY-" : "PREM-";
}
