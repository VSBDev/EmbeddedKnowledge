import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const readJson = (relativePath) => JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
const errors = [];

for (const course of ["premed", "psychiatry"]) {
  const progress = readJson(`site/data/${course}-progress.json`);
  const graph = readJson(`site/data/${course}-graph.json`);
  const lessonIndex = readJson(`site/data/${course}-lessons.json`);
  const pullRequestIndex = readJson(`site/data/${course}-open-prs.json`);
  const issue = (message) => errors.push(`${course}: ${message}`);
  if (progress.course !== course) issue("Progress course identifier is incorrect.");
  if (progress.outcomes.total !== graph.metrics.topics) issue(`Progress denominator ${progress.outcomes.total} does not match ${graph.metrics.topics} graph outcomes.`);
  for (const [name, value] of Object.entries({
    coveredByOpenLessons: progress.outcomes.coveredByOpenLessons,
    contributed: progress.lessons.contributed,
    inReview: progress.lessons.inReview,
    publishedOpen: progress.lessons.publishedOpen
  })) if (!Number.isInteger(value) || value < 0) issue(`${name} must be a non-negative integer.`);
  if (progress.outcomes.coveredByOpenLessons > progress.outcomes.total) issue("Covered outcomes cannot exceed total outcomes.");
  if (!Array.isArray(progress.outcomes.coveredOutcomeIds)) issue("coveredOutcomeIds must be an array.");
  else {
    const topicIds = new Set(graph.nodes.filter((node) => node.kind === "topic").map((node) => node.id));
    const uniqueIds = new Set(progress.outcomes.coveredOutcomeIds);
    if (uniqueIds.size !== progress.outcomes.coveredOutcomeIds.length) issue("coveredOutcomeIds must not contain duplicates.");
    if (progress.outcomes.coveredOutcomeIds.length !== progress.outcomes.coveredByOpenLessons) issue("coveredOutcomeIds length must equal coveredByOpenLessons.");
    for (const outcomeId of progress.outcomes.coveredOutcomeIds) if (!topicIds.has(outcomeId)) issue(`Unknown covered outcome ID: ${outcomeId}.`);
  }
  if (progress.lessons.inReview > progress.lessons.contributed) issue("Lessons in review cannot exceed contributed lessons.");
  if (progress.lessons.publishedOpen > progress.lessons.contributed) issue("Published lessons cannot exceed contributed lessons.");
  const openProposalCount = pullRequestIndex.pullRequests.reduce((total, pullRequest) => total + pullRequest.lessons.length, 0);
  const expectedPublished = lessonIndex.lessons.filter((lesson) => lesson.status === "published").length;
  const expectedCoveredIds = lessonIndex.outcomes.filter((outcome) => outcome.publishedLessonIds.length > 0).map((outcome) => outcome.id);
  if (progress.lessons.contributed !== lessonIndex.lessons.length + openProposalCount) issue("Contributed lesson count does not match merged lesson packs plus open proposals.");
  if (progress.lessons.inReview !== openProposalCount) issue("In-review count does not match the open lesson PR index.");
  if (progress.lessons.publishedOpen !== expectedPublished) issue("Published-open count does not match the merged lesson index.");
  if (JSON.stringify(progress.outcomes.coveredOutcomeIds) !== JSON.stringify(expectedCoveredIds)) issue("Covered outcome IDs do not match published lesson mappings.");
  if (progress.intake.status !== "open" || !progress.intake.repository || !progress.intake.submissionForm) issue("Open intake must publish its repository and pull-request route.");
  const percentage = progress.outcomes.total ? (progress.outcomes.coveredByOpenLessons / progress.outcomes.total) * 100 : 0;
  console.log(`${course}: ${progress.lessons.contributed} contributed, ${progress.lessons.publishedOpen} published, ${percentage}% coverage.`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log("Course production ledgers valid.");
