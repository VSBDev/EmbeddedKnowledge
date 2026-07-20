import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");
const readJson = (relativePath) => JSON.parse(read(relativePath));
const errors = [];

const expected = new Map([
  ["author-embeddedknowledge-lesson", "author"],
  ["review-embeddedknowledge-academic", "academic-review"],
  ["review-embeddedknowledge-learning-design", "learning-design-review"],
  ["review-embeddedknowledge-accessibility-rights", "accessibility-rights-review"],
  ["adjudicate-embeddedknowledge-lesson", "adjudicator"]
]);

function frontmatter(source, file) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) {
    errors.push(`${file}: missing YAML frontmatter.`);
    return {};
  }
  const metadata = {};
  for (const line of match[1].split("\n")) {
    const separator = line.indexOf(":");
    if (separator === -1) {
      errors.push(`${file}: malformed frontmatter line ${line}`);
      continue;
    }
    metadata[line.slice(0, separator).trim()] = line.slice(separator + 1).trim();
  }
  const keys = Object.keys(metadata).sort().join(",");
  if (keys !== "description,name") errors.push(`${file}: frontmatter must contain only name and description.`);
  return metadata;
}

const canonicalRoot = path.join(root, ".agents", "skills");
const actualNames = fs.readdirSync(canonicalRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();
const expectedNames = [...expected.keys()].sort();
if (JSON.stringify(actualNames) !== JSON.stringify(expectedNames)) {
  errors.push(`Canonical skill set differs: expected ${expectedNames.join(", ")}; found ${actualNames.join(", ")}.`);
}

const manifest = readJson("site/agent/skills.json");
const schema = readJson("site/schemas/agent-skills.schema.json");
const validateManifest = new Ajv2020({ allErrors: true, strict: true }).compile(schema);
if (!validateManifest(manifest)) {
  errors.push(`site/agent/skills.json: ${validateManifest.errors.map((error) => `${error.instancePath || "/"} ${error.message}`).join("; ")}`);
}

const manifestSkills = new Map((manifest.skills || []).map((skill) => [skill.name, skill]));
if (manifestSkills.size !== expected.size) errors.push(`Skills manifest must contain exactly ${expected.size} unique skills.`);

for (const [name, role] of expected) {
  const sourcePath = `.agents/skills/${name}/SKILL.md`;
  const metadataPath = `.agents/skills/${name}/agents/openai.yaml`;
  if (!fs.existsSync(path.join(root, sourcePath)) || !fs.existsSync(path.join(root, metadataPath))) {
    errors.push(`${name}: missing canonical SKILL.md or agents/openai.yaml.`);
    continue;
  }

  const source = read(sourcePath);
  const metadata = frontmatter(source, sourcePath);
  if (metadata.name !== name) errors.push(`${sourcePath}: name must match directory.`);
  if (!metadata.description || metadata.description.length > 1024) errors.push(`${sourcePath}: description must contain 1-1024 characters.`);
  if (source.split("\n").length > 500) errors.push(`${sourcePath}: keep SKILL.md under 500 lines.`);
  if (/\bTODO\b|\[TODO/i.test(source)) errors.push(`${sourcePath}: unresolved scaffold text remains.`);
  if (!source.includes("git rev-parse --show-toplevel")) errors.push(`${sourcePath}: repository-root discovery is required.`);
  if (!source.includes("candidate commit")) errors.push(`${sourcePath}: frozen-candidate discipline is missing.`);

  const openai = read(metadataPath);
  if (!openai.includes("display_name:") || !openai.includes("short_description:")) errors.push(`${metadataPath}: incomplete interface metadata.`);
  if (!openai.includes(`$${name}`)) errors.push(`${metadataPath}: default prompt must invoke $${name}.`);

  const entry = manifestSkills.get(name);
  if (!entry) {
    errors.push(`${name}: missing from public skills manifest.`);
    continue;
  }
  if (entry.role !== role || entry.description !== metadata.description || entry.invocation !== `$${name}`) {
    errors.push(`${name}: public manifest metadata differs from canonical metadata.`);
  }
  const digest = `sha256:${crypto.createHash("sha256").update(source).digest("hex")}`;
  if (entry.instructionsSha256 !== digest) errors.push(`${name}: public manifest digest is stale.`);

  const publicSkillPath = path.join(root, "site", entry.instructions.replace(/^\//, ""));
  const bundlePath = path.join(root, "site", entry.bundle.replace(/^\//, ""));
  if (!fs.existsSync(publicSkillPath) || fs.readFileSync(publicSkillPath, "utf8") !== source) {
    errors.push(`${name}: public SKILL.md is missing or differs from canonical source.`);
  }
  if (!fs.existsSync(bundlePath) || fs.statSync(bundlePath).size < 200) errors.push(`${name}: downloadable skill bundle is missing or empty.`);
  else {
    const bundleDigest = `sha256:${crypto.createHash("sha256").update(fs.readFileSync(bundlePath)).digest("hex")}`;
    if (entry.bundleSha256 !== bundleDigest) errors.push(`${name}: downloadable bundle digest is stale.`);
  }
}

const author = read(".agents/skills/author-embeddedknowledge-lesson/SKILL.md");
if (!author.includes("do not review, approve, adjudicate") || !author.includes("manufacture `reviews/*.json`")) {
  errors.push("Author skill must preserve the author/governance boundary.");
}
for (const name of [...expected.keys()].filter((name) => name.startsWith("review-"))) {
  const source = read(`.agents/skills/${name}/SKILL.md`);
  if (!source.includes("Do not edit the lesson") || !source.includes("Do not read the authoring conversation")) {
    errors.push(`${name}: independent read-only review boundary is missing.`);
  }
}
const adjudicator = read(".agents/skills/adjudicate-embeddedknowledge-lesson/SKILL.md");
if (!adjudicator.includes("Finalize a standard lesson exactly once") || !adjudicator.includes("Quorum is necessary but not sufficient")) {
  errors.push("Adjudication skill must define bounded standard-lesson finalization and judgment beyond quorum.");
}

const contribution = readJson("site/agent/contribution.json");
if (contribution.agentEntryPoints.agentSkills !== "/agent/skills.json" ||
    contribution.agentEntryPoints.lessonAuthorSkill !== "/skills/author-embeddedknowledge-lesson/SKILL.md" ||
    contribution.schemas.agentSkills !== "/schemas/agent-skills.schema.json" ||
    contribution.agentSkills?.roleIsolationRequired !== true) {
  errors.push("Contribution manifest does not expose the canonical role-isolated skills contract.");
}

const llms = read("llms.txt");
const agents = read("AGENTS.md");
const portal = read("site/contribute/index.html");
const prompt = read("site/contribute.js");
if (!llms.includes("/agent/skills.json") || !llms.includes("author-embeddedknowledge-lesson")) errors.push("llms.txt does not discover Agent Skills.");
if (!agents.includes(".agents/skills/") || !agents.includes("Do not combine governance roles")) errors.push("AGENTS.md does not require role-isolated skills.");
if ((portal.match(/data-agent-skill=/g) || []).length !== expected.size) errors.push("Contribution portal must show all five role skills.");
if (!prompt.includes("skills/author-embeddedknowledge-lesson/SKILL.md")) errors.push("Contribution prompt does not load the author skill.");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Agent Skills valid: ${expected.size} canonical skills, ${manifestSkills.size} public entries, role isolation, hashes, metadata, and bundles.`);
