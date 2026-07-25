// Lesson readability report.
//
// The review quorum optimises for precision, and each pass tends to add qualification: more
// subordinate clauses, more hedging, longer sentences. That is usually the right trade, but it is
// not free, and nothing in the current gates measures the cost. PREM-WEL-001 is the clearest case —
// it has been through ten times more review than any other lesson and is the hardest text in the
// corpus, at the exact point where a first-time learner arrives. Reviewing it harder made it
// harder to read.
//
// This script scores every lesson with Flesch Reading Ease and Flesch-Kincaid grade level over
// teaching prose only, and applies a stricter ceiling to onboarding lessons than to advanced ones.
// Report-only by default; --strict exits non-zero on a breach, --json emits the raw rows.
//
// Readability formulas are proxies, not targets. A dense sentence is sometimes the honest one.
// Treat a finding as a prompt to reread, not an instruction to shorten.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const strict = process.argv.includes("--strict");
const json = process.argv.includes("--json");

// Grade-level ceilings. Onboarding prose meets learners who have not yet opted in; advanced methods
// lessons legitimately run denser.
const ONBOARDING_GRADE_LIMIT = 10;
const STANDARD_GRADE_LIMIT = 13;
// Sentences past this mean length are hard to hold in working memory while also tracking a new
// concept.
const MEAN_SENTENCE_LIMIT = 22;
// Lessons above this length are candidates for splitting.
const WORD_COUNT_LIMIT = 9000;

const ONBOARDING_PATTERN = /-WEL-\d+/;

// Strip anything that is not continuous teaching prose: directive blocks, fenced code, tables,
// math, headings, and link syntax. Scoring raw Markdown inflates difficulty and hides real drift.
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

function countSyllables(word) {
  const clean = word.toLowerCase().replace(/[^a-z]/g, "");
  if (clean.length === 0) return 0;
  if (clean.length <= 3) return 1;
  const trimmed = clean
    .replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "")
    .replace(/^y/, "");
  const groups = trimmed.match(/[aeiouy]{1,2}/g);
  return Math.max(groups ? groups.length : 1, 1);
}

function score(prose) {
  const sentences = prose
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.split(/\s+/).filter(Boolean).length > 3);
  const words = prose.split(/\s+/).filter((word) => /[a-z]/i.test(word));
  if (sentences.length === 0 || words.length === 0) return null;
  const syllables = words.reduce((total, word) => total + countSyllables(word), 0);
  const wordsPerSentence = words.length / sentences.length;
  const syllablesPerWord = syllables / words.length;
  return {
    words: words.length,
    sentences: sentences.length,
    meanSentence: wordsPerSentence,
    readingEase: 206.835 - 1.015 * wordsPerSentence - 84.6 * syllablesPerWord,
    grade: 0.39 * wordsPerSentence + 11.8 * syllablesPerWord - 15.59
  };
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

  const result = score(extractProse(markdown));
  if (!result) continue;

  const onboarding = ONBOARDING_PATTERN.test(lessonId);
  const gradeLimit = onboarding ? ONBOARDING_GRADE_LIMIT : STANDARD_GRADE_LIMIT;
  rows.push({ lessonId, onboarding, gradeLimit, ...result });

  if (result.grade > gradeLimit) {
    findings.push({
      lessonId,
      kind: onboarding ? "onboarding-grade" : "grade",
      detail: `Flesch-Kincaid grade ${result.grade.toFixed(1)} exceeds the ${onboarding ? "onboarding" : "standard"} ceiling of ${gradeLimit}`
    });
  }
  if (result.meanSentence > MEAN_SENTENCE_LIMIT) {
    findings.push({
      lessonId,
      kind: "sentence-length",
      detail: `mean sentence ${result.meanSentence.toFixed(1)} words exceeds ${MEAN_SENTENCE_LIMIT}`
    });
  }
  if (result.words > WORD_COUNT_LIMIT) {
    findings.push({
      lessonId,
      kind: "length",
      detail: `${result.words} prose words exceeds ${WORD_COUNT_LIMIT}; consider splitting across outcomes`
    });
  }
}

rows.sort((a, b) => b.grade - a.grade);

if (json) {
  console.log(JSON.stringify({ rows, findings }, null, 2));
} else {
  console.log("lesson".padEnd(46) + "grade".padStart(7) + "ease".padStart(8) + "sent".padStart(7) + "words".padStart(8));
  for (const row of rows) {
    const flag = row.grade > row.gradeLimit ? "  <-- over ceiling" : "";
    console.log(
      row.lessonId.padEnd(46) +
      row.grade.toFixed(1).padStart(7) +
      row.readingEase.toFixed(1).padStart(8) +
      row.meanSentence.toFixed(1).padStart(7) +
      String(row.words).padStart(8) +
      flag
    );
  }
  const onboarding = rows.filter((row) => row.onboarding);
  if (onboarding.length && rows.length) {
    const hardest = rows[0];
    for (const row of onboarding) {
      if (row.lessonId === hardest.lessonId) {
        console.log(`\nNote: ${row.lessonId} is an onboarding lesson and the hardest prose in the corpus.`);
      }
    }
  }
  console.log(findings.length ? `\nFindings (${findings.length}):` : "\nNo readability findings.");
  for (const finding of findings) console.log(`  ${finding.lessonId} · ${finding.kind}\n      ${finding.detail}`);
}

if (strict && findings.length > 0) process.exit(1);
