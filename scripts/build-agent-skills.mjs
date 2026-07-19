import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = path.join(root, ".agents", "skills");
const publicRoot = path.join(root, "site", "skills");
const manifestPath = path.join(root, "site", "agent", "skills.json");

const roles = new Map([
  ["author-embeddedknowledge-lesson", "author"],
  ["review-embeddedknowledge-academic", "academic-review"],
  ["review-embeddedknowledge-learning-design", "learning-design-review"],
  ["review-embeddedknowledge-accessibility-rights", "accessibility-rights-review"],
  ["adjudicate-embeddedknowledge-lesson", "adjudicator"]
]);

function parseFrontmatter(source, file) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) throw new Error(`${file} has no YAML frontmatter.`);
  const metadata = {};
  for (const line of match[1].split("\n")) {
    const separator = line.indexOf(":");
    if (separator === -1) throw new Error(`${file} has invalid frontmatter: ${line}`);
    metadata[line.slice(0, separator).trim()] = line.slice(separator + 1).trim();
  }
  if (!metadata.name || !metadata.description) throw new Error(`${file} requires name and description.`);
  return metadata;
}

fs.rmSync(publicRoot, { recursive: true, force: true });
fs.mkdirSync(publicRoot, { recursive: true });

const skills = [];
for (const [name, role] of roles) {
  const sourceDirectory = path.join(sourceRoot, name);
  const skillPath = path.join(sourceDirectory, "SKILL.md");
  const agentMetadataPath = path.join(sourceDirectory, "agents", "openai.yaml");
  if (!fs.existsSync(skillPath) || !fs.existsSync(agentMetadataPath)) {
    throw new Error(`${name} is missing SKILL.md or agents/openai.yaml.`);
  }

  const skillSource = fs.readFileSync(skillPath, "utf8");
  const metadata = parseFrontmatter(skillSource, skillPath);
  if (metadata.name !== name) throw new Error(`${skillPath} name must match its directory.`);

  const destination = path.join(publicRoot, name);
  fs.mkdirSync(path.join(destination, "agents"), { recursive: true });
  fs.copyFileSync(skillPath, path.join(destination, "SKILL.md"));
  fs.copyFileSync(agentMetadataPath, path.join(destination, "agents", "openai.yaml"));

  const bundleName = `${name}.zip`;
  const bundlePath = path.join(destination, bundleName);
  const bundleSource = fs.mkdtempSync(path.join(os.tmpdir(), "embeddedknowledge-skill-"));
  try {
    fs.mkdirSync(path.join(bundleSource, "agents"), { recursive: true });
    fs.copyFileSync(skillPath, path.join(bundleSource, "SKILL.md"));
    fs.copyFileSync(agentMetadataPath, path.join(bundleSource, "agents", "openai.yaml"));
    const stableTime = new Date("1980-01-01T00:00:00.000Z");
    for (const relativePath of ["SKILL.md", "agents/openai.yaml", "agents"]) {
      fs.utimesSync(path.join(bundleSource, relativePath), stableTime, stableTime);
    }
    const zip = spawnSync("zip", ["-X", "-q", bundlePath, "SKILL.md", "agents/openai.yaml"], {
      cwd: bundleSource,
      encoding: "utf8",
      // ZIP stores DOS timestamps without a timezone. Force UTC so the same
      // canonical source produces identical archive bytes on every runner.
      env: { ...process.env, TZ: "UTC" }
    });
    if (zip.status !== 0) throw new Error(`Could not package ${name}: ${zip.stderr || zip.stdout}`);
  } finally {
    fs.rmSync(bundleSource, { recursive: true, force: true });
  }

  skills.push({
    name,
    role,
    description: metadata.description,
    invocation: `$${name}`,
    source: `.agents/skills/${name}/SKILL.md`,
    instructions: `/skills/${name}/SKILL.md`,
    bundle: `/skills/${name}/${bundleName}`,
    instructionsSha256: `sha256:${crypto.createHash("sha256").update(skillSource).digest("hex")}`,
    bundleSha256: `sha256:${crypto.createHash("sha256").update(fs.readFileSync(bundlePath)).digest("hex")}`
  });
}

const manifest = {
  schemaVersion: 1,
  standard: "https://agentskills.io/specification",
  canonicalDirectory: ".agents/skills",
  repositoryRequired: true,
  discovery: {
    generic: "Read this manifest, then load the matching SKILL.md explicitly.",
    geminiCli: "Workspace discovery supports the .agents/skills alias.",
    claudeCode: "Install the bundle or load the canonical SKILL.md explicitly.",
    otherClients: "Use the downloadable bundle when custom skills are supported; otherwise use the raw instructions URL."
  },
  skills
};

fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Built ${skills.length} public Agent Skills and downloadable bundles.`);
