#!/usr/bin/env node
/**
 * Report every lesson's stored duration against the derived one, and flag the ones out by a factor.
 *
 * Companion to report-lesson-readability.mjs and report-prose-tells.mjs: a table first, so an author
 * can see where their lesson sits among the others, then findings. `--strict` exits non-zero, which is
 * how CI uses it.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { modelMinutes, timeFinding, READING_RATE, TASK_MINUTES } from "./lib/lesson-time-model.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const strict = process.argv.includes("--strict");
const lessonsDir = path.join(root, "lessons");

const rows = [];
const findings = [];

for (const pack of fs.readdirSync(lessonsDir).sort()) {
  const packPath = path.join(lessonsDir, pack);
  const metadataPath = path.join(packPath, "lesson.json");
  const contentDir = path.join(packPath, "content");
  if (!fs.existsSync(metadataPath) || !fs.existsSync(contentDir)) continue;
  const lesson = JSON.parse(fs.readFileSync(metadataPath, "utf8"));
  if (lesson.status === "specimen") continue;
  const markdown = fs.readdirSync(contentDir).sort()
    .filter((file) => file.endsWith(".md"))
    .map((file) => fs.readFileSync(path.join(contentDir, file), "utf8"))
    .join("\n");
  if (!markdown.trim()) continue;
  const model = modelMinutes(markdown);
  rows.push({ id: lesson.id, stored: lesson.estimatedMinutes, model, ratio: lesson.estimatedMinutes / model });
  const finding = timeFinding({ lessonId: lesson.id, storedMinutes: lesson.estimatedMinutes, markdown });
  if (finding) findings.push(finding);
}

rows.sort((a, b) => b.ratio - a.ratio);
console.log("lesson".padEnd(50) + "stored".padStart(8) + "derived".padStart(9) + "ratio".padStart(8));
for (const row of rows) {
  const flag = row.ratio > 1.8 || row.ratio < 0.6 ? "  <-- out by a factor" : "";
  console.log(
    row.id.padEnd(50) +
    String(row.stored).padStart(8) +
    String(Math.round(row.model)).padStart(9) +
    row.ratio.toFixed(2).padStart(8) + flag
  );
}

console.log(
  `\nDerived as words / ${READING_RATE} per minute plus ${TASK_MINUTES} minutes per task block. ` +
  "The model's own error is about fifteen minutes, so the band is wide and catches figures wrong by a " +
  "factor rather than by a margin."
);

if (!findings.length) {
  console.log("\nEvery stored duration is within the band.");
  process.exit(0);
}

console.log(`\nFindings (${findings.length}):`);
for (const finding of findings) {
  console.log(`  ${finding.lessonId} · estimated-minutes`);
  console.log(`      ${finding.message}`);
}
process.exit(strict ? 1 : 0);
