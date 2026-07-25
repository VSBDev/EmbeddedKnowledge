// Prose-tell report.
//
// Lessons in this repository are drafted by agents and revised by agents, and the revision loop has
// a house style of its own. An audit of the corpus found the usual signatures: em-dash density of
// 2.4 per 1000 words on average but 7.1 in the worst lesson, which read as machine-written on the
// page; the "not X, but Y" contrast used as a rhythm instead of an argument; "rather than" reached
// for 24 times in a single lesson where "instead of" or a plain positive sentence would do; and the
// familiar marker vocabulary of delve, crucial, robust, seamless, and their relatives.
//
// None of these are errors. Each one is a habit that survives review because no reviewer is reading
// for frequency, and frequency is the whole tell. This script counts them per lesson so that the
// pattern is visible before it hardens.
//
// Report-only by default; --strict exits non-zero on a breach, --json emits the raw rows.
//
// The audit counted raw Markdown. This script counts the teaching prose left after the stripping
// report-lesson-readability.mjs applies, so that both reports describe the same text, and its
// figures therefore sit a little away from those headline numbers.
//
// Counts are prompts to reread, not verdicts. A statistics lesson has honest reasons to say
// "robust", and one sharp em-dash in a scene is good writing. Read the flagged passage and decide.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const strict = process.argv.includes("--strict");
const json = process.argv.includes("--json");

// Corpus mean em-dash density is 2.4 per 1000 words. The lesson that read as machine-written sat at
// 7.1. This ceiling leaves room for a writer who likes the mark without leaving room for the tic.
const EM_DASH_LIMIT = 4.0;
// Negative parallelism is the most recognisable construction in the set, so the budget is small:
// roughly one per scene across a lesson, and only where the contrast carries the point.
const NEGATIVE_PARALLELISM_LIMIT = 2;
// "rather than" is fine occasionally and a verbal tic in bulk.
const RATHER_THAN_LIMIT = 12;
// Marker vocabulary scales with lesson length, so it is measured as a density. Some hits are
// legitimate technical usage; the count is a reading list, not a verdict.
const MARKER_DENSITY_LIMIT = 2.0;
// Filler framing carries no information in any register. A couple of survivors is drift; more is a
// habit.
const FILLER_LIMIT = 2;
// "Moreover", "Furthermore", and "Additionally" almost always replace a real connective.
const TRANSITION_LIMIT = 4;

const EM_DASH = /—/g;

// Two shapes of the same construction: "not a rule, but a habit", and "it is not a rule; it is a
// habit". The reversed form ("a habit, not a rule") is deliberately excluded because it is ordinary
// English and flagging it would bury the signal.
const NEGATIVE_PARALLELISM = [
  /\bnot\b(?:(?!\bbut\b)[^.;:!?\n]){1,90},\s*but\b/gi,
  /\b(?:it['’]s|that['’]s|this is|is|are|was|were)\s+not\b[^.;:!?\n]{1,90}[,;]\s*(?:it|they|that|this)\s+(?:is|are)\b/gi,
  /\b(?:it|that|this)['’]s not\b[^.;:!?\n]{1,90}[,;]\s*(?:it|that|this)['’]s\b/gi
];

const RATHER_THAN = /\brather than\b/gi;

const MARKER_VOCABULARY = [
  ["delve", /\bdelv(?:e|es|ed|ing)\b/gi],
  ["tapestry", /\btapestr(?:y|ies)\b/gi],
  ["testament", /\btestament\b/gi],
  ["realm", /\brealms?\b/gi],
  ["underscore", /\bunderscor(?:e|es|ed|ing)\b/gi],
  ["showcase", /\bshowcas(?:e|es|ed|ing)\b/gi],
  ["crucial", /\bcrucial(?:ly)?\b/gi],
  ["pivotal", /\bpivotal\b/gi],
  ["leverage", /\bleverag(?:e|es|ed|ing)\b/gi],
  ["foster", /\bfoster(?:s|ed|ing)?\b/gi],
  ["harness", /\bharness(?:es|ed|ing)?\b/gi],
  ["intricate", /\bintricate(?:ly)?\b/gi],
  ["multifaceted", /\bmulti-?faceted\b/gi],
  ["meticulous", /\bmeticulous(?:ly)?\b/gi],
  ["comprehensive", /\bcomprehensive(?:ly|ness)?\b/gi],
  ["robust", /\brobust(?:ly|ness)?\b/gi],
  ["seamless", /\bseamless(?:ly)?\b/gi],
  ["holistic", /\bholistic(?:ally)?\b/gi],
  ["myriad", /\bmyriads?\b/gi],
  ["plethora", /\bplethora\b/gi],
  ["navigate the complexities", /\bnavigat\w*\s+the\s+complexit\w*/gi],
  ["at its core", /\bat its core\b/gi],
  ["shed light on", /\bsheds?\s+light\s+on\b/gi]
];

const FILLER_FRAMING = [
  ["it is important to note", /\bit(?:\s+is|['’]s)\s+(?:also\s+)?important to note\b/gi],
  ["it is worth noting", /\bit(?:\s+is|['’]s)\s+(?:also\s+)?worth (?:noting|mentioning)\b/gi],
  ["keep in mind that", /\bkeep in mind that\b/gi],
  ["in conclusion", /\bin conclusion\b/gi],
  ["let's dive in", /\blet['’]s dive\b/gi],
  ["when it comes to", /\bwhen it comes to\b/gi],
  ["that being said", /\bthat being said\b/gi]
];

const TRANSITION_TICS = [
  ["moreover", /\bmoreover\b/gi],
  ["furthermore", /\bfurthermore\b/gi],
  ["additionally", /\badditionally\b/gi]
];

// Strip anything that is not continuous teaching prose: directive blocks, fenced code, tables,
// math, headings, and link syntax. This mirrors report-lesson-readability.mjs so that both reports
// describe the same text.
function extractProse(markdown) {
  let text = markdown;
  text = text.replace(/^---[\s\S]*?^---/m, " ");
  text = text.replace(/:::\{[\s\S]*?:::/g, " ");
  text = text.replace(/```[\s\S]*?```/g, " ");
  text = text.replace(/\$\$[\s\S]*?\$\$/g, " value ");
  text = text.replace(/\$[^$\n]*\$/g, " value ");
  text = text.replace(/^\s*\|.*$/gm, " ");
  text = text.replace(/^\s*#{1,6}\s.*$/gm, " ");
  text = text.replace(/!\[[^\]]*\]\([^)]*\)/g, " ");
  text = text.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1");
  text = text.replace(/`[^`]*`/g, " term ");
  text = text.replace(/[*_>#]/g, " ");
  return text.replace(/\s+/g, " ").trim();
}

function countMatches(prose, pattern) {
  return [...prose.matchAll(pattern)].length;
}

// The three negative-parallelism patterns can describe the same sentence, so spans are merged
// before counting.
function countNegativeParallelism(prose) {
  const spans = [];
  for (const pattern of NEGATIVE_PARALLELISM) {
    for (const match of prose.matchAll(pattern)) {
      spans.push([match.index, match.index + match[0].length]);
    }
  }
  spans.sort((a, b) => a[0] - b[0]);
  let count = 0;
  let reach = -1;
  for (const [start, end] of spans) {
    if (start >= reach) count += 1;
    reach = Math.max(reach, end);
  }
  return count;
}

// Returns the total and the per-term breakdown, so a finding can name the words a reader should
// look at instead of only reporting a number.
function countVocabulary(prose, entries) {
  const hits = [];
  let total = 0;
  for (const [term, pattern] of entries) {
    const count = countMatches(prose, pattern);
    if (count > 0) {
      hits.push({ term, count });
      total += count;
    }
  }
  hits.sort((a, b) => b.count - a.count || a.term.localeCompare(b.term));
  return { total, hits };
}

function describe(hits, limit = 4) {
  return hits.slice(0, limit).map((hit) => `${hit.term} ×${hit.count}`).join(", ");
}

function measure(prose) {
  const words = prose.split(/\s+/).filter((word) => /[a-z]/i.test(word)).length;
  if (words === 0) return null;
  const perThousand = (count) => (count * 1000) / words;
  const emDashes = countMatches(prose, EM_DASH);
  const marker = countVocabulary(prose, MARKER_VOCABULARY);
  const filler = countVocabulary(prose, FILLER_FRAMING);
  const transition = countVocabulary(prose, TRANSITION_TICS);
  return {
    words,
    emDashes,
    emDashDensity: perThousand(emDashes),
    negativeParallelism: countNegativeParallelism(prose),
    ratherThan: countMatches(prose, RATHER_THAN),
    markerHits: marker.total,
    markerDensity: perThousand(marker.total),
    markerTerms: marker.hits,
    fillerHits: filler.total,
    fillerTerms: filler.hits,
    transitionHits: transition.total,
    transitionTerms: transition.hits
  };
}

// A single sort key so the table reads worst-first. Each measure is expressed as a fraction of its
// own ceiling and the fractions are summed, so 1.00 means one measure is exactly at its limit.
function pressure(result) {
  return (
    result.emDashDensity / EM_DASH_LIMIT +
    result.negativeParallelism / NEGATIVE_PARALLELISM_LIMIT +
    result.ratherThan / RATHER_THAN_LIMIT +
    result.markerDensity / MARKER_DENSITY_LIMIT +
    result.fillerHits / FILLER_LIMIT +
    result.transitionHits / TRANSITION_LIMIT
  );
}

const lessonDirs = fs
  .readdirSync(path.join(root, "lessons"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

const rows = [];
const findings = [];

for (const lessonId of lessonDirs) {
  const contentDir = path.join(root, "lessons", lessonId, "content");
  if (!fs.existsSync(contentDir)) continue;
  const markdown = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".md"))
    .sort()
    .map((file) => fs.readFileSync(path.join(contentDir, file), "utf8"))
    .join("\n\n");

  const result = measure(extractProse(markdown));
  if (!result) continue;

  rows.push({ lessonId, pressure: pressure(result), ...result });

  if (result.emDashDensity > EM_DASH_LIMIT) {
    findings.push({
      lessonId,
      kind: "em-dash",
      detail: `${result.emDashDensity.toFixed(1)} em-dashes per 1000 words (${result.emDashes} total) exceeds ${EM_DASH_LIMIT.toFixed(1)}; the corpus mean is 2.4. Prefer a comma, a colon, or a full stop, and keep the dash for a genuine sharp aside`
    });
  }
  if (result.negativeParallelism > NEGATIVE_PARALLELISM_LIMIT) {
    findings.push({
      lessonId,
      kind: "negative-parallelism",
      detail: `${result.negativeParallelism} uses of "not X, but Y" exceeds ${NEGATIVE_PARALLELISM_LIMIT}; keep the ones where the contrast carries the point and state the rest positively`
    });
  }
  if (result.ratherThan > RATHER_THAN_LIMIT) {
    findings.push({
      lessonId,
      kind: "rather-than",
      detail: `"rather than" appears ${result.ratherThan} times, over ${RATHER_THAN_LIMIT}; try "instead of", "and not", or a positive recast`
    });
  }
  if (result.markerDensity > MARKER_DENSITY_LIMIT) {
    findings.push({
      lessonId,
      kind: "marker-vocabulary",
      detail: `${result.markerHits} marker words, ${result.markerDensity.toFixed(1)} per 1000 words, over ${MARKER_DENSITY_LIMIT.toFixed(1)}: ${describe(result.markerTerms)}. Keep the ones a scientific claim needs and replace the decoration`
    });
  }
  if (result.fillerHits > FILLER_LIMIT) {
    findings.push({
      lessonId,
      kind: "filler-framing",
      detail: `${result.fillerHits} filler openers, over ${FILLER_LIMIT}: ${describe(result.fillerTerms)}. Delete the frame and start with the sentence it introduces`
    });
  }
  if (result.transitionHits > TRANSITION_LIMIT) {
    findings.push({
      lessonId,
      kind: "transition-tic",
      detail: `${result.transitionHits} uses of Moreover/Furthermore/Additionally, over ${TRANSITION_LIMIT}: ${describe(result.transitionTerms)}. Name the actual relation between the sentences or drop the connective`
    });
  }
}

rows.sort((a, b) => b.pressure - a.pressure);

const mean = (pick) => (rows.length ? rows.reduce((total, row) => total + pick(row), 0) / rows.length : 0);
const corpus = {
  lessons: rows.length,
  words: rows.reduce((total, row) => total + row.words, 0),
  emDashDensity: mean((row) => row.emDashDensity),
  negativeParallelism: mean((row) => row.negativeParallelism),
  ratherThan: mean((row) => row.ratherThan),
  markerDensity: mean((row) => row.markerDensity),
  fillerHits: mean((row) => row.fillerHits),
  transitionHits: mean((row) => row.transitionHits)
};

if (json) {
  console.log(JSON.stringify({ rows, corpus, findings }, null, 2));
} else {
  const nameWidth = Math.max(44, ...rows.map((row) => row.lessonId.length)) + 2;
  console.log(
    "lesson".padEnd(nameWidth) +
    "score".padStart(7) +
    "em/1k".padStart(7) +
    "negpar".padStart(8) +
    "rather".padStart(8) +
    "marker".padStart(8) +
    "filler".padStart(8) +
    "trans".padStart(7)
  );
  for (const row of rows) {
    const over =
      row.emDashDensity > EM_DASH_LIMIT ||
      row.negativeParallelism > NEGATIVE_PARALLELISM_LIMIT ||
      row.ratherThan > RATHER_THAN_LIMIT ||
      row.markerDensity > MARKER_DENSITY_LIMIT ||
      row.fillerHits > FILLER_LIMIT ||
      row.transitionHits > TRANSITION_LIMIT;
    console.log(
      row.lessonId.padEnd(nameWidth) +
      row.pressure.toFixed(2).padStart(7) +
      row.emDashDensity.toFixed(1).padStart(7) +
      String(row.negativeParallelism).padStart(8) +
      String(row.ratherThan).padStart(8) +
      String(row.markerHits).padStart(8) +
      String(row.fillerHits).padStart(8) +
      String(row.transitionHits).padStart(7) +
      (over ? "  <-- over a ceiling" : "")
    );
  }
  console.log(
    `\nCorpus (${corpus.lessons} lessons, ${corpus.words} prose words): ` +
    `em-dash ${corpus.emDashDensity.toFixed(1)}/1000w, ` +
    `negative parallelism ${corpus.negativeParallelism.toFixed(1)}, ` +
    `"rather than" ${corpus.ratherThan.toFixed(1)}, ` +
    `marker ${corpus.markerDensity.toFixed(1)}/1000w, ` +
    `filler ${corpus.fillerHits.toFixed(1)}, ` +
    `transitions ${corpus.transitionHits.toFixed(1)} per lesson.`
  );
  console.log(findings.length ? `\nFindings (${findings.length}):` : "\nNo prose-tell findings.");
  for (const finding of findings) console.log(`  ${finding.lessonId} · ${finding.kind}\n      ${finding.detail}`);
}

if (strict && findings.length > 0) process.exit(1);
