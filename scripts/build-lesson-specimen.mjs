import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { copyLessonAssetTree, renderLessonMarkdown } from "./render-lesson-format.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const packPath = path.join(root, "examples", "lesson-pack");
const assetRoot = path.join(root, "site", "assets", "lesson-specimen");
const outputPath = path.join(root, "site", "data", "lessons", "specimen.json");
const readJson = (relativePath) => JSON.parse(fs.readFileSync(path.join(packPath, relativePath), "utf8"));
const metadata = readJson("lesson.json");

fs.rmSync(assetRoot, { recursive: true, force: true });
fs.mkdirSync(assetRoot, { recursive: true });
for (const directory of ["assets", "diagrams"]) {
  const source = path.join(packPath, directory);
  copyLessonAssetTree(source, path.join(assetRoot, directory));
}

const renderSource = (relativePath) => {
  const sourcePath = path.join(packPath, relativePath);
  return renderLessonMarkdown(fs.readFileSync(sourcePath, "utf8"), {
    packPath,
    sourcePath,
    publicAssetBase: "/assets/lesson-specimen"
  });
};

const artifact = {
  schemaVersion: metadata.schemaVersion,
  format: metadata.format,
  artifactType: "lesson-specimen",
  nonProduction: true,
  countsTowardCoverage: false,
  id: metadata.id,
  version: metadata.version,
  title: metadata.title,
  status: metadata.status,
  riskTier: metadata.riskTier,
  estimatedMinutes: metadata.estimatedMinutes,
  outcomes: metadata.outcomes,
  prerequisites: metadata.prerequisites,
  objectives: metadata.objectives,
  scenes: metadata.scenes.map((scene) => ({ ...scene, contentHtml: renderSource(scene.source) })),
  assessment: readJson(metadata.files.assessment),
  references: readJson(metadata.files.references),
  claims: readJson(metadata.files.claims),
  glossary: readJson(metadata.files.glossary),
  attributionHtml: renderSource(metadata.files.attribution),
  authors: metadata.authors,
  license: metadata.license,
  sourceConfidence: metadata.sourceConfidence,
  aiAssistance: metadata.aiAssistance,
  disclaimer: "Format specimen only. It is not reviewed or published teaching material and never changes Premed coverage."
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(artifact, null, 2)}\n`);
console.log(`Built non-production lesson specimen: ${artifact.scenes.length} scenes, coverage unchanged.`);
