import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const manifest = JSON.parse(fs.readFileSync(path.join(root, "site/agent/skills.json"), "utf8"));
const buildScript = path.join(root, "scripts", "build-agent-skills.mjs");

function publicSkillInventory() {
  const output = {};
  const visit = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true }).sort((left, right) => left.name.localeCompare(right.name))) {
      const filePath = path.join(directory, entry.name);
      if (entry.isDirectory()) visit(filePath);
      else output[path.relative(root, filePath)] = crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
    }
  };
  visit(path.join(root, "site", "skills"));
  output["site/agent/skills.json"] = crypto.createHash("sha256").update(fs.readFileSync(path.join(root, "site", "agent", "skills.json"))).digest("hex");
  return output;
}

test("the public skills manifest exposes the complete role-isolated workflow", () => {
  assert.equal(manifest.canonicalDirectory, ".agents/skills");
  assert.equal(manifest.skills.length, 5);
  assert.deepEqual(new Set(manifest.skills.map((skill) => skill.role)), new Set([
    "author",
    "academic-review",
    "learning-design-review",
    "accessibility-rights-review",
    "adjudicator"
  ]));
});

for (const skill of manifest.skills) {
  test(`${skill.name} public instructions match the canonical source and digest`, () => {
    const canonical = fs.readFileSync(path.join(root, skill.source), "utf8");
    const published = fs.readFileSync(path.join(root, "site", skill.instructions.slice(1)), "utf8");
    const bundle = fs.readFileSync(path.join(root, "site", skill.bundle.slice(1)));
    const digest = `sha256:${crypto.createHash("sha256").update(canonical).digest("hex")}`;

    assert.equal(published, canonical);
    assert.equal(skill.instructionsSha256, digest);
    assert.equal(skill.bundleSha256, `sha256:${crypto.createHash("sha256").update(bundle).digest("hex")}`);
    assert.equal(bundle.subarray(0, 2).toString("ascii"), "PK");
    assert.match(canonical, new RegExp(`^---\\nname: ${skill.name}\\n`, "m"));
    assert.doesNotMatch(canonical, /\bTODO\b|\[TODO/i);
  });
}

test("author, reviewer, and adjudicator instructions preserve separate authorities", () => {
  const author = fs.readFileSync(path.join(root, ".agents/skills/author-embeddedknowledge-lesson/SKILL.md"), "utf8");
  const academic = fs.readFileSync(path.join(root, ".agents/skills/review-embeddedknowledge-academic/SKILL.md"), "utf8");
  const adjudicator = fs.readFileSync(path.join(root, ".agents/skills/adjudicate-embeddedknowledge-lesson/SKILL.md"), "utf8");

  assert.match(author, /do not review, approve, adjudicate, publish, push, or merge/i);
  assert.match(academic, /Do not edit the lesson/);
  assert.match(academic, /Do not read the authoring conversation/);
  assert.match(adjudicator, /Do not perform a review role, reopen authoring, launch another review cohort, push, merge, or publish/);
  assert.match(adjudicator, /Finalize a standard lesson exactly once/);
  assert.match(adjudicator, /Quorum is necessary but not sufficient/);
});

test("public skill bundles are byte-for-byte deterministic across host timezones", () => {
  execFileSync(process.execPath, [buildScript], { cwd: root, env: { ...process.env, TZ: "Europe/Madrid" } });
  const madrid = publicSkillInventory();
  execFileSync(process.execPath, [buildScript], { cwd: root, env: { ...process.env, TZ: "America/Los_Angeles" } });
  const losAngeles = publicSkillInventory();
  assert.deepEqual(losAngeles, madrid);
});
