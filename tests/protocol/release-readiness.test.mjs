import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

test("the public contribution manifest reports open reviewed-PR intake", () => {
  const manifest = JSON.parse(read("site/agent/contribution.json"));
  assert.equal(manifest.status, "repository-public-intake-open");
  assert.match(manifest.submissionState, /contributions are open through focused pull requests/i);
  assert.match(manifest.submissionState, /two-review plus fresh-finalizer workflow/i);
  assert.match(manifest.submissionState, /MIT software and CC BY 4\.0 content licences are active/);
  assert.doesNotMatch(manifest.submissionState, /closed|private|empty|no project content/i);
});

test("the public progress ledger exposes the active pull-request route", () => {
  const progress = JSON.parse(read("site/data/premed-progress.json"));
  assert.equal(progress.intake.status, "open");
  assert.equal(progress.intake.repository, "https://github.com/VSBDev/EmbeddedKnowledge");
  assert.match(progress.intake.submissionForm, /github\.com\/VSBDev\/EmbeddedKnowledge\/compare/);
});

test("the Pages workflow skips cleanly until Pages is enabled", () => {
  const workflow = read(".github/workflows/pages.yml");
  assert.match(workflow, /pages-status:\n/);
  assert.match(workflow, /https:\/\/api\.github\.com\/repos\/\$\{GITHUB_REPOSITORY\}\/pages/);
  assert.match(workflow, /404\)\n\s+echo "enabled=false" >> "\$\{GITHUB_OUTPUT\}"/);
  assert.match(workflow, /build:\n\s+needs: pages-status\n\s+if: needs\.pages-status\.outputs\.enabled == 'true'/);
  assert.match(workflow, /needs: \[pages-status, build\]/);
  assert.doesNotMatch(workflow, /enablement:\s*['"]?true/i);
});
