import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { copyLessonAssetTree } from "./render-lesson-format.mjs";
import { buildProductionLessonArtifact, productionLessonReaderUrl } from "./lib/production-lesson-artifact.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const lessonsRoot = path.join(root, "lessons");
const lessonDataRoot = path.join(root, "site", "data", "lessons");
const lessonAssetRoot = path.join(root, "site", "assets", "lessons");
const courseConfigs = [
  { id: "premed", lessonPrefix: "PREM-", graphPath: "site/data/premed-graph.json", outputPath: "site/data/premed-lessons.json" },
  { id: "psychiatry", lessonPrefix: "PSY-", graphPath: "site/data/psychiatry-graph.json", outputPath: "site/data/psychiatry-lessons.json" }
];

fs.rmSync(lessonDataRoot, { recursive: true, force: true });
fs.mkdirSync(lessonDataRoot, { recursive: true });
fs.rmSync(lessonAssetRoot, { recursive: true, force: true });
fs.mkdirSync(lessonAssetRoot, { recursive: true });

const courseByPrefix = new Map(courseConfigs.map((course) => [course.lessonPrefix, course]));
const lessonsByCourse = new Map(courseConfigs.map((course) => [course.id, []]));
const packDirectories = fs.readdirSync(lessonsRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .sort((left, right) => left.name.localeCompare(right.name));

for (const entry of packDirectories) {
  const packPath = path.join(lessonsRoot, entry.name);
  const metadata = JSON.parse(fs.readFileSync(path.join(packPath, "lesson.json"), "utf8"));
  const course = [...courseByPrefix.entries()].find(([prefix]) => metadata.id.startsWith(prefix))?.[1];
  if (!course) throw new Error(`${metadata.id} does not use a registered course lesson prefix.`);

  const publicAssetBase = `/assets/lessons/${metadata.id}`;
  const outputAssetPath = path.join(lessonAssetRoot, metadata.id);
  for (const directory of ["assets", "diagrams"]) {
    copyLessonAssetTree(path.join(packPath, directory), path.join(outputAssetPath, directory));
  }
  const detail = buildProductionLessonArtifact({ packPath, metadata, publicAssetBase });
  const dataFile = `${metadata.id}.json`;
  fs.writeFileSync(path.join(lessonDataRoot, dataFile), `${JSON.stringify(detail, null, 2)}\n`);
  lessonsByCourse.get(course.id).push({
    id: metadata.id,
    version: metadata.version,
    title: metadata.title,
    status: metadata.status,
    riskTier: metadata.riskTier,
    estimatedMinutes: metadata.estimatedMinutes,
    outcomeIds: metadata.outcomes,
    prerequisiteIds: metadata.prerequisites,
    license: metadata.license,
    sourceConfidence: metadata.sourceConfidence,
    dataUrl: `/data/lessons/${dataFile}`,
    readerUrl: productionLessonReaderUrl(metadata.id)
  });
}

const stateDefinitions = {
  empty: "No merged lesson and no indexed open lesson pull request maps to the outcome.",
  inReview: "At least one open lesson pull request maps to the outcome and has not completed quorum and adjudication.",
  published: "At least one merged, publicly available CC BY 4.0 lesson maps to the outcome."
};

for (const course of courseConfigs) {
  const graph = JSON.parse(fs.readFileSync(path.join(root, course.graphPath), "utf8"));
  const lessons = lessonsByCourse.get(course.id);
  const lessonByOutcome = new Map();
  for (const lesson of lessons) {
    for (const outcomeId of lesson.outcomeIds) {
      if (!lessonByOutcome.has(outcomeId)) lessonByOutcome.set(outcomeId, []);
      lessonByOutcome.get(outcomeId).push(lesson);
    }
  }

  const nodesById = new Map(graph.nodes.map((node) => [node.id, node]));
  const graphTopicIds = new Set(graph.nodes.filter((node) => node.kind === "topic").map((node) => node.id));
  for (const lesson of lessons) {
    for (const outcomeId of [...lesson.outcomeIds, ...lesson.prerequisiteIds]) {
      if (!graphTopicIds.has(outcomeId)) throw new Error(`${lesson.id} maps to ${outcomeId}, which is not in the ${course.id} graph.`);
    }
  }

  const domains = graph.nodes.filter((node) => node.kind === "domain").map((node) => ({
    id: node.id,
    title: node.title,
    color: node.color,
    order: node.order
  }));
  const outcomes = graph.nodes.filter((node) => node.kind === "topic").map((node) => {
    const mapped = lessonByOutcome.get(node.id) || [];
    const domain = nodesById.get(node.domainId);
    const module = nodesById.get(node.moduleId);
    return {
      id: node.id,
      code: node.code,
      title: node.title,
      outcome: node.outcome,
      summary: node.summary,
      domainId: node.domainId,
      domainTitle: domain?.title || node.subject,
      moduleId: node.moduleId,
      moduleTitle: module?.title || null,
      requirement: node.requirement,
      level: node.level,
      estimatedHours: node.estimatedHours,
      prerequisites: node.prerequisites,
      crossLinks: node.crossLinks,
      lessonIds: mapped.map((lesson) => lesson.id),
      publishedLessonIds: mapped.filter((lesson) => lesson.status === "published").map((lesson) => lesson.id)
    };
  });
  const index = {
    schemaVersion: 1,
    generatedAt: graph.generatedAt,
    course: course.id,
    repository: "https://github.com/VSBDev/EmbeddedKnowledge",
    stateDefinitions,
    summary: {
      outcomes: outcomes.length,
      mergedLessons: lessons.length,
      publishedLessons: lessons.filter((lesson) => lesson.status === "published").length,
      outcomesCoveredByPublishedLessons: outcomes.filter((outcome) => outcome.publishedLessonIds.length > 0).length
    },
    domains,
    outcomes,
    lessons
  };

  fs.writeFileSync(path.join(root, course.outputPath), `${JSON.stringify(index, null, 2)}\n`);
  console.log(`Built ${course.id} lesson index: ${outcomes.length} outcomes, ${lessons.length} merged lesson(s), ${index.summary.outcomesCoveredByPublishedLessons} published-covered outcome(s).`);
}
