import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const progress = JSON.parse(fs.readFileSync(path.join(projectRoot, "site/data/premed-progress.json"), "utf8"));
const graph = JSON.parse(fs.readFileSync(path.join(projectRoot, "site/data/premed-graph.json"), "utf8"));
const lessonIndex = JSON.parse(fs.readFileSync(path.join(projectRoot, "site/data/premed-lessons.json"), "utf8"));
const pullRequestIndex = JSON.parse(fs.readFileSync(path.join(projectRoot, "site/data/premed-open-prs.json"), "utf8"));
const errors = [];

if (progress.outcomes.total !== graph.metrics.topics) {
  errors.push(`Progress denominator ${progress.outcomes.total} does not match ${graph.metrics.topics} graph outcomes.`);
}

const counters = {
  coveredByOpenLessons: progress.outcomes.coveredByOpenLessons,
  contributed: progress.lessons.contributed,
  inReview: progress.lessons.inReview,
  publishedOpen: progress.lessons.publishedOpen,
};

for (const [name, value] of Object.entries(counters)) {
  if (!Number.isInteger(value) || value < 0) errors.push(`${name} must be a non-negative integer.`);
}

if (progress.outcomes.coveredByOpenLessons > progress.outcomes.total) errors.push("Covered outcomes cannot exceed total outcomes.");
if (!Array.isArray(progress.outcomes.coveredOutcomeIds)) {
  errors.push("coveredOutcomeIds must be an array.");
} else {
  const topicIds = new Set(graph.nodes.filter((node) => node.kind === "topic").map((node) => node.id));
  const uniqueIds = new Set(progress.outcomes.coveredOutcomeIds);
  if (uniqueIds.size !== progress.outcomes.coveredOutcomeIds.length) errors.push("coveredOutcomeIds must not contain duplicates.");
  if (progress.outcomes.coveredOutcomeIds.length !== progress.outcomes.coveredByOpenLessons) {
    errors.push("coveredOutcomeIds length must equal coveredByOpenLessons.");
  }
  for (const outcomeId of progress.outcomes.coveredOutcomeIds) {
    if (!topicIds.has(outcomeId)) errors.push(`Unknown covered outcome ID: ${outcomeId}.`);
  }
}
if (progress.lessons.inReview > progress.lessons.contributed) errors.push("Lessons in review cannot exceed contributed lessons.");
if (progress.lessons.publishedOpen > progress.lessons.contributed) errors.push("Published lessons cannot exceed contributed lessons.");
const openProposalCount = pullRequestIndex.pullRequests.reduce((total, pullRequest) => total + pullRequest.lessons.length, 0);
const expectedPublished = lessonIndex.lessons.filter((lesson) => lesson.status === "published").length;
const expectedCoveredIds = lessonIndex.outcomes.filter((outcome) => outcome.publishedLessonIds.length > 0).map((outcome) => outcome.id);
if (progress.lessons.contributed !== lessonIndex.lessons.length + openProposalCount) errors.push("Contributed lesson count does not match merged lesson packs plus open proposals.");
if (progress.lessons.inReview !== openProposalCount) errors.push("In-review count does not match the open lesson PR index.");
if (progress.lessons.publishedOpen !== expectedPublished) errors.push("Published-open count does not match the merged lesson index.");
if (JSON.stringify(progress.outcomes.coveredOutcomeIds) !== JSON.stringify(expectedCoveredIds)) errors.push("Covered outcome IDs do not match published lesson mappings.");
if (progress.intake.status === "not-open" && (progress.intake.repository || progress.intake.submissionForm)) errors.push("Closed intake must not publish active intake URLs.");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

const percentage = progress.outcomes.total ? (progress.outcomes.coveredByOpenLessons / progress.outcomes.total) * 100 : 0;
console.log(`Premed production ledger valid: ${progress.lessons.contributed} contributed, ${progress.lessons.publishedOpen} published, ${percentage}% coverage.`);
