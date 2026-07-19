import fs from "node:fs";
import path from "node:path";
import { renderLessonMarkdown } from "../render-lesson-format.mjs";

function readOptionalJson(filePath) {
  return fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, "utf8")) : null;
}

function renderPackMarkdown(packPath, relativePath, publicAssetBase) {
  const sourcePath = path.join(packPath, relativePath);
  if (!fs.existsSync(sourcePath)) return null;
  return renderLessonMarkdown(fs.readFileSync(sourcePath, "utf8"), { packPath, sourcePath, publicAssetBase });
}

export function productionLessonReaderUrl(lessonId) {
  return `/premed/lessons/read/?lesson=${encodeURIComponent(lessonId)}`;
}

export function buildProductionLessonArtifact({ packPath, metadata, publicAssetBase }) {
  return {
    schemaVersion: metadata.schemaVersion,
    format: metadata.format,
    artifactType: "production-lesson",
    id: metadata.id,
    version: metadata.version,
    title: metadata.title,
    status: metadata.status,
    riskTier: metadata.riskTier,
    estimatedMinutes: metadata.estimatedMinutes,
    outcomes: metadata.outcomes,
    prerequisites: metadata.prerequisites,
    objectives: metadata.objectives,
    scenes: metadata.scenes.map((scene) => ({
      ...scene,
      contentHtml: renderPackMarkdown(packPath, scene.source, publicAssetBase)
    })),
    authors: metadata.authors,
    license: metadata.license,
    sourceConfidence: metadata.sourceConfidence,
    aiAssistance: metadata.aiAssistance,
    assessment: readOptionalJson(path.join(packPath, metadata.files.assessment)),
    references: readOptionalJson(path.join(packPath, metadata.files.references)),
    claims: readOptionalJson(path.join(packPath, metadata.files.claims)),
    glossary: readOptionalJson(path.join(packPath, metadata.files.glossary)),
    attributionHtml: renderPackMarkdown(packPath, metadata.files.attribution, publicAssetBase)
  };
}
