import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { preflightSourceAccess } from "./lib/source-access-preflight.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const strict = args.includes("--strict");
const packArgument = args.find((argument) => !argument.startsWith("--"));

if (!packArgument) {
  console.error("Usage: npm run source:preflight -- [--strict] lessons/<lesson-pack>");
  process.exit(2);
}

const lessonsRoot = path.join(root, "lessons");
const packPath = path.resolve(root, packArgument);
if (!packPath.startsWith(`${lessonsRoot}${path.sep}`)) {
  console.error("Source preflight accepts one production pack under lessons/.");
  process.exit(2);
}

try {
  const lesson = JSON.parse(fs.readFileSync(path.join(packPath, "lesson.json"), "utf8"));
  const referencesPath = path.resolve(packPath, lesson.files?.references || "references.json");
  if (!referencesPath.startsWith(`${packPath}${path.sep}`)) throw new Error("lesson.files.references escapes the lesson pack.");
  const references = JSON.parse(fs.readFileSync(referencesPath, "utf8"));
  const result = preflightSourceAccess({ lesson, references, strict });
  for (const warning of result.warnings) console.warn(`WARNING: ${warning}`);
  if (result.errors.length) {
    for (const error of result.errors) console.error(`ERROR: ${error}`);
    process.exit(1);
  }
  console.log(`Source access preflight passed for ${path.relative(root, packPath)} (${references.sources?.length || 0} source record(s), strict=${strict}).`);
} catch (error) {
  console.error(`Source access preflight failed: ${error.message}`);
  process.exit(1);
}
