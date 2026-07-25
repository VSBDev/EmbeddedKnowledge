/**
 * The machine gate for the `rephrasing` risk tier.
 *
 * The rephrasing tier lets the accountable maintainer merge a wording-only repair of an already
 * published lesson without convening the two-reviewer quorum. That is a real shortcut around the
 * governance sequence, so it is only safe if "wording-only" is a property a machine can verify
 * rather than a claim a contributor makes. This module is that verification.
 *
 * The gate compares the published (base) pack with the proposed (head) pack and requires that
 * everything a reviewer would have checked is bit-identical: the teaching claims, the numbers, the
 * mathematics, the assessment answers, the objectives, the glossary meanings, the sources, and the
 * scene structure. What may change is the prose that carries them.
 *
 * Anything the gate cannot prove is unchanged is a rejection, and the contributor uses the standard
 * tier instead. The tier can therefore make a lesson easier to read; it can never change what the
 * lesson teaches, asserts, or asks.
 */

// A scene's invariant skeleton: the parts that encode meaning rather than phrasing. Two scenes with
// the same skeleton assert the same facts, run the same mathematics, and cite the same evidence.
export function sceneSkeleton(markdown) {
  const text = String(markdown ?? "");
  const lines = text.split("\n");
  return {
    // Display and inline mathematics, verbatim and in order.
    math: [
      ...(text.match(/\$\$[\s\S]*?\$\$/g) || []),
      ...(text.replace(/\$\$[\s\S]*?\$\$/g, "").match(/\$[^$\n]+\$/g) || [])
    ],
    // Every number that appears outside prose formatting, in order. A rewording never needs to
    // change a digit; a smuggled content change almost always does.
    numbers: (text.replace(/\$\$[\s\S]*?\$\$/g, "").replace(/\$[^$\n]+\$/g, "").match(/\d+(?:\.\d+)?/g) || []),
    // Directive fences and their attribute lines: scene ids, claim and source mappings, check ids,
    // worked-example ids. These bind the scene to the evidence ledger and the schema.
    directives: lines
      .map((line) => line.trim())
      .filter((line) => /^:::/.test(line) || /^:[a-zA-Z-]+:/.test(line)),
    // Structural shape: how many headings at each level, so a rewrite cannot silently add,
    // remove, or re-nest a section while claiming to be a rewording.
    headingShape: lines.filter((line) => /^#{1,6}\s/.test(line)).map((line) => line.match(/^#+/)[0].length)
  };
}

const sameList = (a, b) => a.length === b.length && a.every((value, index) => value === b[index]);

function compareSkeletons(file, base, head) {
  const problems = [];
  const b = sceneSkeleton(base);
  const h = sceneSkeleton(head);
  if (!sameList(b.math, h.math)) problems.push(`${file}: mathematics changed (a rephrasing may not alter any expression).`);
  if (!sameList(b.numbers, h.numbers)) problems.push(`${file}: numeric values changed (a rephrasing may not alter any number).`);
  if (!sameList(b.directives, h.directives)) problems.push(`${file}: scene directives, ids, claim or source mappings changed.`);
  if (!sameList(b.headingShape, h.headingShape)) problems.push(`${file}: section structure changed (headings added, removed, or re-nested).`);
  return problems;
}

// Files whose content must be byte-identical apart from the version field the maintainer bumps.
const VERSIONED_LEDGERS = ["glossary.json", "assessment.json", "claims.json", "references.json"];

const stripFields = (value, ...keys) => {
  const clone = JSON.parse(JSON.stringify(value));
  for (const key of keys) delete clone[key];
  return JSON.stringify(clone);
};
const stripVersion = (value, key) => stripFields(value, key);

function isPatchBump(from, to) {
  const parse = (v) => String(v ?? "").split(".").map(Number);
  const [aMajor, aMinor, aPatch] = parse(from);
  const [bMajor, bMinor, bPatch] = parse(to);
  if ([aMajor, aMinor, aPatch, bMajor, bMinor, bPatch].some((n) => !Number.isInteger(n))) return false;
  return bMajor === aMajor && bMinor === aMinor && bPatch === aPatch + 1;
}

/**
 * @param {object} io  { readBase(relPath) => string|null, readHead(relPath) => string|null,
 *                       baseFiles: string[], headFiles: string[] }  paths are pack-relative
 * @returns {string[]} problems; empty means the change is provably a rephrasing
 */
export function rephrasingGateProblems(io) {
  const problems = [];
  const baseLesson = io.readBase("lesson.json");
  const headLesson = io.readHead("lesson.json");

  if (!baseLesson) {
    return ["The rephrasing tier only repairs an already published lesson; this pack does not exist on the base branch."];
  }
  if (!headLesson) return ["The rephrasing tier cannot remove a lesson pack."];

  const base = JSON.parse(baseLesson);
  const head = JSON.parse(headLesson);

  // 1. It must be a repair of content that already cleared the full quorum.
  if (base.status !== "published") {
    problems.push(`The rephrasing tier only repairs a published lesson; the base status is ${base.status}. Use the standard tier.`);
  }
  // 2. The version must advance by exactly one patch, so the change is visible in the ledger.
  if (!isPatchBump(base.version, head.version)) {
    problems.push(`A rephrasing must bump the patch version by one (${base.version} -> ${base.version.replace(/(\d+)$/, (m) => Number(m) + 1)}); found ${head.version}.`);
  }
  // 3. Nothing in lesson.json may change except the version and the tier declaration itself.
  //    Declaring `riskTier: "rephrasing"` is how a pull request enters this pathway, so forbidding
  //    it would make the tier unusable. Everything the declaration could be used to smuggle is
  //    still compared: objectives, scenes, status, and the rest of the metadata must be identical,
  //    and the published-status check above independently prevents entering the pathway early.
  if (stripFields(base, "version", "riskTier") !== stripFields(head, "version", "riskTier")) {
    problems.push("lesson.json changed beyond its version and tier declaration: objectives, scenes, status, and metadata are not rephrasable.");
  }
  // 4. The evidence and assessment ledgers must be identical apart from lessonVersion.
  for (const ledger of VERSIONED_LEDGERS) {
    const b = io.readBase(ledger);
    const h = io.readHead(ledger);
    if (b == null && h == null) continue;
    if (b == null || h == null) { problems.push(`${ledger} was added or removed; a rephrasing may not change the pack's files.`); continue; }
    if (stripVersion(JSON.parse(b), "lessonVersion") !== stripVersion(JSON.parse(h), "lessonVersion")) {
      problems.push(`${ledger} changed beyond lessonVersion. Assessment answers, claims, sources, and glossary meanings require the standard tier.`);
    }
  }
  // 5. The scene set may not change.
  const sceneFiles = (files) => files.filter((f) => f.startsWith("content/")).sort();
  const baseScenes = sceneFiles(io.baseFiles);
  const headScenes = sceneFiles(io.headFiles);
  if (!sameList(baseScenes, headScenes)) {
    problems.push("The set of scenes changed; adding, removing, or renaming a scene is not a rephrasing.");
  }
  // 6. Each scene keeps its invariant skeleton; only prose may differ.
  for (const file of baseScenes.filter((f) => headScenes.includes(f))) {
    const b = io.readBase(file);
    const h = io.readHead(file);
    if (b === h) continue;
    problems.push(...compareSkeletons(file, b, h));
  }
  // 7. No file outside the scenes and the version-bearing ledgers may change at all.
  const allowed = new Set(["lesson.json", ...VERSIONED_LEDGERS, ...headScenes, "ATTRIBUTION.md"]);
  for (const file of io.headFiles) {
    if (!allowed.has(file) && io.readBase(file) !== io.readHead(file)) {
      problems.push(`${file} changed; the rephrasing tier covers scene prose only.`);
    }
  }
  return problems;
}
