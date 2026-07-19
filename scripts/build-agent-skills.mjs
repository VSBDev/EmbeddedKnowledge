import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
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

function crc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
  }
  return (crc ^ 0xffffffff) >>> 0;
}

// A deliberately small ZIP writer for the two-file public skill bundles. It
// stores bytes without compression and fixes every header field, avoiding the
// host timestamps and implementation metadata emitted by external zip tools.
function createDeterministicZip(entries) {
  const localParts = [];
  const centralParts = [];
  let localOffset = 0;
  const dosDate = 0x0021; // 1980-01-01

  for (const entry of entries) {
    const name = Buffer.from(entry.name, "utf8");
    const data = Buffer.from(entry.data);
    const checksum = crc32(data);

    const localHeader = Buffer.alloc(30);
    localHeader.writeUInt32LE(0x04034b50, 0);
    localHeader.writeUInt16LE(10, 4);
    localHeader.writeUInt16LE(0, 6);
    localHeader.writeUInt16LE(0, 8);
    localHeader.writeUInt16LE(0, 10);
    localHeader.writeUInt16LE(dosDate, 12);
    localHeader.writeUInt32LE(checksum, 14);
    localHeader.writeUInt32LE(data.length, 18);
    localHeader.writeUInt32LE(data.length, 22);
    localHeader.writeUInt16LE(name.length, 26);
    localHeader.writeUInt16LE(0, 28);
    localParts.push(localHeader, name, data);

    const centralHeader = Buffer.alloc(46);
    centralHeader.writeUInt32LE(0x02014b50, 0);
    centralHeader.writeUInt16LE(20, 4);
    centralHeader.writeUInt16LE(10, 6);
    centralHeader.writeUInt16LE(0, 8);
    centralHeader.writeUInt16LE(0, 10);
    centralHeader.writeUInt16LE(0, 12);
    centralHeader.writeUInt16LE(dosDate, 14);
    centralHeader.writeUInt32LE(checksum, 16);
    centralHeader.writeUInt32LE(data.length, 20);
    centralHeader.writeUInt32LE(data.length, 24);
    centralHeader.writeUInt16LE(name.length, 28);
    centralHeader.writeUInt16LE(0, 30);
    centralHeader.writeUInt16LE(0, 32);
    centralHeader.writeUInt16LE(0, 34);
    centralHeader.writeUInt16LE(0, 36);
    centralHeader.writeUInt32LE(0, 38);
    centralHeader.writeUInt32LE(localOffset, 42);
    centralParts.push(centralHeader, name);

    localOffset += localHeader.length + name.length + data.length;
  }

  const centralDirectory = Buffer.concat(centralParts);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(0, 4);
  end.writeUInt16LE(0, 6);
  end.writeUInt16LE(entries.length, 8);
  end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(centralDirectory.length, 12);
  end.writeUInt32LE(localOffset, 16);
  end.writeUInt16LE(0, 20);
  return Buffer.concat([...localParts, centralDirectory, end]);
}

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
  fs.writeFileSync(bundlePath, createDeterministicZip([
    { name: "SKILL.md", data: fs.readFileSync(skillPath) },
    { name: "agents/openai.yaml", data: fs.readFileSync(agentMetadataPath) }
  ]));

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
