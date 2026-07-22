import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const readJson = (relativePath) => JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
const lessonIndexSchema = readJson("site/schemas/lesson-index.schema.json");
const openPullRequestsSchema = readJson("site/schemas/open-lesson-prs.schema.json");
const ajv = new Ajv2020({ allErrors: true, strict: true });
addFormats(ajv);
const errors = [];

for (const course of ["premed", "psychiatry"]) {
  const lessonIndex = readJson(`site/data/${course}-lessons.json`);
  const openPullRequests = readJson(`site/data/${course}-open-prs.json`);
  const graph = readJson(`site/data/${course}-graph.json`);
  for (const [artifact, schema, label] of [
    [lessonIndex, lessonIndexSchema, `${course}-lessons.json`],
    [openPullRequests, openPullRequestsSchema, `${course}-open-prs.json`]
  ]) {
    const validate = ajv.compile(schema);
    if (!validate(artifact)) errors.push(`${label}: ${ajv.errorsText(validate.errors, { separator: "; " })}`);
  }

  if (lessonIndex.course !== course) errors.push(`${course}: lesson index course identifier is incorrect.`);
  const graphTopicIds = new Set(graph.nodes.filter((node) => node.kind === "topic").map((node) => node.id));
  const indexedOutcomeIds = new Set(lessonIndex.outcomes.map((outcome) => outcome.id));
  if (indexedOutcomeIds.size !== lessonIndex.outcomes.length) errors.push(`${course}: lesson index contains duplicate outcomes.`);
  if (indexedOutcomeIds.size !== graphTopicIds.size || [...graphTopicIds].some((id) => !indexedOutcomeIds.has(id))) errors.push(`${course}: lesson index outcomes must exactly match graph topics.`);
  if (lessonIndex.summary.outcomes !== lessonIndex.outcomes.length) errors.push(`${course}: outcome summary is incorrect.`);
  if (lessonIndex.summary.mergedLessons !== lessonIndex.lessons.length) errors.push(`${course}: merged lesson summary is incorrect.`);
  if (lessonIndex.summary.publishedLessons !== lessonIndex.lessons.filter((lesson) => lesson.status === "published").length) errors.push(`${course}: published lesson summary is incorrect.`);

  const lessonIds = new Set(lessonIndex.lessons.map((lesson) => lesson.id));
  if (lessonIds.size !== lessonIndex.lessons.length) errors.push(`${course}: lesson index contains duplicate lesson IDs.`);
  for (const outcome of lessonIndex.outcomes) {
    for (const lessonId of [...outcome.lessonIds, ...outcome.publishedLessonIds]) if (!lessonIds.has(lessonId)) errors.push(`${course}: ${outcome.id} references unknown lesson ${lessonId}.`);
  }
  for (const pullRequest of openPullRequests.pullRequests) {
    for (const proposal of pullRequest.lessons) {
      for (const outcomeId of proposal.outcomeIds) if (!graphTopicIds.has(outcomeId)) errors.push(`${course}: PR #${pullRequest.number} exposes unknown outcome ${outcomeId}.`);
    }
  }
  const proposalCount = openPullRequests.pullRequests.reduce((total, pullRequest) => total + pullRequest.lessons.length, 0);
  if (proposalCount !== openPullRequests.summary.lessonProposals) errors.push(`${course}: open PR lesson proposal summary is incorrect.`);
  console.log(`${course}: ${lessonIndex.outcomes.length} outcomes, ${lessonIndex.lessons.length} merged lesson(s), ${proposalCount} open proposal(s).`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log("Course lesson indexes valid.");
