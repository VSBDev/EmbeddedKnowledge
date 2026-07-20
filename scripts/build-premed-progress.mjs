import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const readJson = (relativePath) => JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
const graph = readJson("site/data/premed-graph.json");
const lessonIndex = readJson("site/data/premed-lessons.json");
const pullRequestIndex = readJson("site/data/premed-open-prs.json");
const outputPath = path.join(root, "site/data/premed-progress.json");

const openProposals = pullRequestIndex.pullRequests.flatMap((pullRequest) => pullRequest.lessons);
const publishedLessons = lessonIndex.lessons.filter((lesson) => lesson.status === "published");
const coveredOutcomeIds = lessonIndex.outcomes
  .filter((outcome) => outcome.publishedLessonIds.length > 0)
  .map((outcome) => outcome.id);
const updatedAt = [graph.generatedAt, lessonIndex.generatedAt, pullRequestIndex.generatedAt]
  .filter(Boolean)
  .sort()
  .at(-1)
  .slice(0, 10);

const progress = {
  schemaVersion: 1,
  updatedAt,
  course: "premed",
  coverageDefinition: "An outcome is covered only when at least one complete lesson pack mapped to that atomic outcome has passed academic, learning-design, accessibility, provenance, and licensing review and is publicly available under the adopted open-content license.",
  outcomes: {
    total: graph.metrics.topics,
    coveredByOpenLessons: coveredOutcomeIds.length,
    coveredOutcomeIds
  },
  lessons: {
    contributed: lessonIndex.lessons.length + openProposals.length,
    inReview: openProposals.length,
    publishedOpen: publishedLessons.length
  },
  intake: {
    status: "open",
    repository: "https://github.com/VSBDev/EmbeddedKnowledge",
    submissionForm: "https://github.com/VSBDev/EmbeddedKnowledge/compare"
  }
};

fs.writeFileSync(outputPath, `${JSON.stringify(progress, null, 2)}\n`);
console.log(`Built Premed progress: ${progress.lessons.contributed} contribution(s), ${progress.lessons.inReview} open, ${publishedLessons.length} published, ${coveredOutcomeIds.length}/${graph.metrics.topics} outcomes covered.`);
