#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const lessonsDir = path.join(root, "lessons");
const normalizeDef = (value) => String(value || "").toLowerCase().replace(/\s+/g, " ").replace(/[.;,]/g, "").trim();
const STOP = new Set("a an the of to in on and or that this which is are be as by for with its their under over from within into it not no than then when where whose whether some any each all one two".split(" "));
const contentWords = (value) => new Set(normalizeDef(value).split(" ").filter((word) => word.length > 2 && !STOP.has(word)));
const jaccard = (left, right) => {
  const a = contentWords(left);
  const b = contentWords(right);
  if (!a.size && !b.size) return 1;
  let intersection = 0;
  for (const word of a) if (b.has(word)) intersection += 1;
  return intersection / (a.size + b.size - intersection);
};

for (const course of [
  { id: "premed", prefix: "PREM-" },
  { id: "psychiatry", prefix: "PSY-" }
]) {
  const index = JSON.parse(fs.readFileSync(path.join(root, "site", "data", `${course.id}-lessons.json`), "utf8"));
  const orderByLesson = new Map();
  for (const outcome of index.outcomes || []) {
    for (const lessonId of outcome.publishedLessonIds || []) if (!orderByLesson.has(lessonId)) orderByLesson.set(lessonId, outcome.order ?? 9999);
  }
  const packs = fs.readdirSync(lessonsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name.startsWith(course.prefix));
  const terms = new Map();
  for (const pack of packs) {
    const lessonPath = path.join(lessonsDir, pack.name, "lesson.json");
    const glossaryPath = path.join(lessonsDir, pack.name, "glossary.json");
    if (!fs.existsSync(lessonPath) || !fs.existsSync(glossaryPath)) continue;
    const lesson = JSON.parse(fs.readFileSync(lessonPath, "utf8"));
    if (lesson.status !== "published") continue;
    const glossary = JSON.parse(fs.readFileSync(glossaryPath, "utf8"));
    for (const entry of glossary.terms || glossary.entries || []) {
      const key = String(entry.term || "").trim().toLowerCase();
      if (!key) continue;
      if (!terms.has(key)) terms.set(key, []);
      terms.get(key).push({
        lessonId: lesson.id,
        rank: orderByLesson.get(lesson.id) ?? 9999,
        id: entry.id,
        definition: entry.definition,
        aliases: entry.aliases || [],
        alignment: entry.alignment || null
      });
    }
  }

  const ledger = [];
  for (const [term, uses] of [...terms.entries()].sort()) {
    uses.sort((left, right) => left.rank - right.rank);
    const distinctDefinitions = new Set(uses.map((use) => normalizeDef(use.definition)));
    let status = "single-lesson";
    if (uses.length > 1) status = distinctDefinitions.size === 1 ? "consistent" : "divergent";
    let minimumOverlap = 1;
    if (status === "divergent") {
      for (let left = 0; left < uses.length; left += 1) {
        for (let right = left + 1; right < uses.length; right += 1) minimumOverlap = Math.min(minimumOverlap, jaccard(uses[left].definition, uses[right].definition));
      }
    }
    const sense = status !== "divergent" ? null : minimumOverlap >= 0.5 ? "reworded" : "shifted";
    const undeclaredRedefinitions = status === "divergent"
      ? uses.slice(1).filter((use) => !(use.alignment?.priorLesson && use.alignment?.relation)).map((use) => use.lessonId)
      : [];
    ledger.push({
      term,
      status,
      sense,
      minDefinitionOverlap: status === "divergent" ? Number(minimumOverlap.toFixed(2)) : null,
      lessons: uses.map((use) => use.lessonId),
      ids: [...new Set(uses.map((use) => use.id))],
      undeclaredRedefinitions,
      uses: uses.map(({ lessonId, id, definition, aliases, alignment }) => ({ lessonId, id, definition, aliases, alignment }))
    });
  }
  const summary = {
    terms: ledger.length,
    multiLesson: ledger.filter((term) => term.lessons.length > 1).length,
    consistent: ledger.filter((term) => term.status === "consistent").length,
    divergent: ledger.filter((term) => term.status === "divergent").length,
    divergentUndeclared: ledger.filter((term) => term.undeclaredRedefinitions.length > 0).length,
    senseShifted: ledger.filter((term) => term.sense === "shifted").length
  };
  const output = {
    schemaVersion: 1,
    format: "embeddedknowledge-terminology-ledger-v1",
    course: course.id,
    purpose: "Consult before defining a glossary term. If a prior published lesson already defines it, adopt that meaning and cross-reference, or declare a glossary `alignment` block that names the prior lesson and the relation (adopt/narrow/extend/distinct-sense/supersede) with a rationale. Never silently redefine a term another lesson owns.",
    summary,
    terms: ledger
  };
  fs.writeFileSync(path.join(root, "site", "data", `${course.id}-terminology.json`), `${JSON.stringify(output, null, 2)}\n`);
  console.log(`Built ${course.id} terminology ledger: ${summary.terms} terms, ${summary.multiLesson} multi-lesson, ${summary.divergent} divergent.`);
}
