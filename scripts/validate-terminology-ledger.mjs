#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
for (const course of ["premed", "psychiatry"]) {
  const ledgerPath = path.join(root, "site", "data", `${course}-terminology.json`);
  if (!fs.existsSync(ledgerPath)) {
    console.error(`${course} terminology ledger missing; run npm run terminology:build.`);
    process.exit(1);
  }
  const ledger = JSON.parse(fs.readFileSync(ledgerPath, "utf8"));
  if (ledger.course !== course) {
    console.error(`${course} terminology ledger has an incorrect course identifier.`);
    process.exit(1);
  }
  const shiftedUndeclared = ledger.terms.filter((term) => term.sense === "shifted" && term.undeclaredRedefinitions.length > 0);
  const shiftedDeclared = ledger.terms.filter((term) => term.sense === "shifted" && term.undeclaredRedefinitions.length === 0);
  const rewordedUndeclared = ledger.terms.filter((term) => term.sense === "reworded" && term.undeclaredRedefinitions.length > 0);
  if (shiftedUndeclared.length) {
    console.log(`${course}: ${shiftedUndeclared.length} term(s) shift sense with no declared alignment (reported, non-blocking during founding stage).`);
  }
  console.log(`${course} terminology: ${ledger.summary.multiLesson} multi-lesson term(s), ${ledger.summary.senseShifted} sense-shifted (${shiftedDeclared.length} aligned), ${rewordedUndeclared.length} reworded without alignment.`);
}
