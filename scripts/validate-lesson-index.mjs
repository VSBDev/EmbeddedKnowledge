import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const readJson = (relativePath) => JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
const lessonIndex = readJson("site/data/premed-lessons.json");
const openPullRequests = readJson("site/data/premed-open-prs.json");
const graph = readJson("site/data/premed-graph.json");
const lessonIndexSchema = readJson("site/schemas/lesson-index.schema.json");
const openPullRequestsSchema = readJson("site/schemas/open-lesson-prs.schema.json");
const ajv = new Ajv2020({ allErrors: true, strict: true });
addFormats(ajv);
const errors = [];
for (const [artifact, schema, label] of [
  [lessonIndex, lessonIndexSchema, "premed-lessons.json"],
  [openPullRequests, openPullRequestsSchema, "premed-open-prs.json"]
]) {
  const validate = ajv.compile(schema);
  if (!validate(artifact)) errors.push(`${label}: ${ajv.errorsText(validate.errors, { separator: "; " })}`);
}

const graphTopicIds = new Set(graph.nodes.filter((node) => node.kind === "topic").map((node) => node.id));
const indexedOutcomeIds = new Set(lessonIndex.outcomes.map((outcome) => outcome.id));
if (indexedOutcomeIds.size !== lessonIndex.outcomes.length) errors.push("Lesson index contains duplicate outcomes.");
if (indexedOutcomeIds.size !== graphTopicIds.size || [...graphTopicIds].some((id) => !indexedOutcomeIds.has(id))) errors.push("Lesson index outcomes must exactly match graph topics.");
if (lessonIndex.summary.outcomes !== lessonIndex.outcomes.length) errors.push("Lesson index outcome summary is incorrect.");
if (lessonIndex.summary.mergedLessons !== lessonIndex.lessons.length) errors.push("Lesson index merged lesson summary is incorrect.");
if (lessonIndex.summary.publishedLessons !== lessonIndex.lessons.filter((lesson) => lesson.status === "published").length) errors.push("Lesson index published lesson summary is incorrect.");

const lessonIds = new Set(lessonIndex.lessons.map((lesson) => lesson.id));
if (lessonIds.size !== lessonIndex.lessons.length) errors.push("Lesson index contains duplicate lesson IDs.");
for (const outcome of lessonIndex.outcomes) {
  for (const lessonId of [...outcome.lessonIds, ...outcome.publishedLessonIds]) if (!lessonIds.has(lessonId)) errors.push(`${outcome.id} references unknown lesson ${lessonId}.`);
}
for (const pullRequest of openPullRequests.pullRequests) {
  for (const proposal of pullRequest.lessons) {
    for (const outcomeId of proposal.outcomeIds) if (!graphTopicIds.has(outcomeId)) errors.push(`PR #${pullRequest.number} exposes unknown outcome ${outcomeId}.`);
  }
}
const proposalCount = openPullRequests.pullRequests.reduce((total, pullRequest) => total + pullRequest.lessons.length, 0);
if (proposalCount !== openPullRequests.summary.lessonProposals) errors.push("Open PR lesson proposal summary is incorrect.");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Lesson indexes valid: ${lessonIndex.outcomes.length} outcomes, ${lessonIndex.lessons.length} merged lesson(s), ${proposalCount} open proposal(s).`);
