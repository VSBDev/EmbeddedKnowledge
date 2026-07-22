#!/usr/bin/env node
/**
 * Report cross-lesson terminology divergences from the built ledger.
 *
 * Non-blocking during the founding stage: the first 12 lessons were authored before the
 * adopt-or-protest contract existed, so their sense-shifted terms are reported, not failed. As
 * those are normalized (each later use either harmonized or given a glossary `alignment` block),
 * the count of undeclared sense-shifts trends to zero; flip `BLOCKING` to true to make it a gate.
 *
 * A term is worth a maintainer's eye when its definition SENSE shifts across lessons (low overlap)
 * and the later lesson declares no `alignment`. Reworded-but-same-concept divergences are listed
 * only in the summary.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const BLOCKING = false; // flip once the back-catalogue is normalized

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ledgerPath = path.join(root, "site", "data", "premed-terminology.json");
if (!fs.existsSync(ledgerPath)) {
  console.error("terminology ledger missing; run `npm run terminology:build` (part of site:build).");
  process.exit(1);
}
const ledger = JSON.parse(fs.readFileSync(ledgerPath, "utf8"));

const shiftedUndeclared = ledger.terms.filter(
  (t) => t.sense === "shifted" && t.undeclaredRedefinitions.length > 0
);
const shiftedDeclared = ledger.terms.filter(
  (t) => t.sense === "shifted" && t.undeclaredRedefinitions.length === 0
);
const rewordedUndeclared = ledger.terms.filter(
  (t) => t.sense === "reworded" && t.undeclaredRedefinitions.length > 0
);

if (shiftedUndeclared.length) {
  console.log(
    `Terminology ledger: ${shiftedUndeclared.length} term(s) shift sense across lessons with no declared alignment` +
      `${BLOCKING ? "" : " (reported, non-blocking during founding stage)"}:`
  );
  for (const t of shiftedUndeclared) {
    console.log(`  - "${t.term}" (overlap ${t.minDefinitionOverlap}) across ${t.lessons.join(", ")}`);
    for (const u of t.uses) console.log(`      [${u.lessonId}] ${String(u.definition).slice(0, 100)}`);
  }
}
console.log(
  `Terminology ledger summary: ${ledger.summary.multiLesson} multi-lesson term(s), ` +
    `${ledger.summary.senseShifted} sense-shifted (${shiftedDeclared.length} with declared alignment), ` +
    `${rewordedUndeclared.length} reworded-but-same-concept without alignment.`
);

if (BLOCKING && shiftedUndeclared.length) {
  console.error("Terminology gate: every sense-shifted term must declare a glossary alignment block.");
  process.exit(1);
}
process.exit(0);
