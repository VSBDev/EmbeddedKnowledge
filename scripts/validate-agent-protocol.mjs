import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { principalKey, modelFamilyKey, reviewerAuthorConflict } from "./lib/provenance.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const readJson = (relativePath) => JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
const errors = [];

const schemas = {
  lesson: readJson("site/schemas/lesson.schema.json"),
  review: readJson("site/schemas/review.schema.json"),
  adjudication: readJson("site/schemas/adjudication.schema.json")
};
const ajv = new Ajv2020({ allErrors: true, strict: true });
addFormats(ajv);
ajv.addSchema(schemas.lesson).addSchema(schemas.review).addSchema(schemas.adjudication);

const exampleFiles = {
  lesson: "examples/agent-protocol/lesson.example.json",
  reviews: [
    "examples/agent-protocol/review.example.json",
    "examples/agent-protocol/review-learning-design.example.json",
    "examples/agent-protocol/review-accessibility-rights.example.json"
  ],
  adjudication: "examples/agent-protocol/adjudication.example.json"
};
const lesson = readJson(exampleFiles.lesson);
const reviews = exampleFiles.reviews.map(readJson);
const adjudication = readJson(exampleFiles.adjudication);

function validateArtifact(kind, artifact, label) {
  const validate = ajv.getSchema(schemas[kind].$id);
  if (!validate(artifact)) {
    errors.push(`${label}: ${ajv.errorsText(validate.errors, { separator: "; " })}`);
  }
}

validateArtifact("lesson", lesson, exampleFiles.lesson);
for (let index = 0; index < reviews.length; index += 1) {
  validateArtifact("review", reviews[index], exampleFiles.reviews[index]);
}
validateArtifact("adjudication", adjudication, exampleFiles.adjudication);

const policy = readJson("site/agent/quorum-policy.json");
const manifest = readJson("site/agent/contribution.json");
const graph = readJson("site/data/premed-graph.json");
const progress = readJson("site/data/premed-progress.json");
const topicIds = new Set(graph.nodes.filter((node) => node.kind === "topic").map((node) => node.id));

for (const tier of ["minor-correction", "standard", "high-impact"]) {
  const rule = policy.tiers[tier];
  const roleTotal = Object.values(rule.roleMinimums).reduce((total, value) => total + value, 0);
  if (roleTotal !== rule.minimumApprovingReviews) errors.push(`${tier}: role minimums do not equal minimum approvals.`);
  if (rule.minimumDistinctAgentRuns !== rule.minimumApprovingReviews) errors.push(`${tier}: each approving vote must use a distinct agent run.`);
  if (rule.minimumDistinctPrincipals < 1 || rule.minimumDistinctPrincipals > rule.minimumApprovingReviews) errors.push(`${tier}: distinct-principal floor is invalid.`);
  if (rule.minimumDistinctAgentModelFamilies < 1 || rule.minimumDistinctAgentModelFamilies > rule.minimumDistinctAgentRuns) errors.push(`${tier}: model-family floor is invalid.`);
  if (rule.finalAdjudicators !== 1) errors.push(`${tier}: exactly one final adjudicator is required.`);
}

if (manifest.canonicalWriteMechanism !== "pull-request") errors.push("Protocol manifest must keep pull requests as the canonical write mechanism.");
if (manifest.contentLicense !== "CC-BY-4.0") errors.push("Protocol manifest must identify the adopted CC BY 4.0 content license.");
if (manifest.webmcp.mode !== "read-only") errors.push("WebMCP must remain read-only.");

for (const endpoint of [
  ...Object.values(manifest.agentEntryPoints),
  ...Object.values(manifest.schemas)
]) {
  if (endpoint.startsWith("/") && !fs.existsSync(path.join(root, "site", endpoint.slice(1)))) {
    errors.push(`Manifest endpoint does not exist in site output: ${endpoint}`);
  }
}

for (const outcomeId of [...lesson.outcomes, ...lesson.prerequisites]) {
  if (!topicIds.has(outcomeId)) errors.push(`Example lesson references unknown outcome: ${outcomeId}`);
}

const standard = policy.tiers.standard;
const authorPrincipals = new Set(lesson.authors.map((author) => principalKey(author.principalId)));
const authorAgentRuns = new Set(lesson.authors.map((author) => author.agent?.runId).filter(Boolean));
const reviewPrincipals = new Set();
const reviewAgentRuns = new Set();
const roleCounts = { academic: 0, "learning-design": 0, "accessibility-rights": 0 };
const modelFamilies = new Set();
for (const review of reviews) {
  if (review.lessonId !== lesson.id || review.lessonVersion !== lesson.version) errors.push(`${review.reviewId}: lesson identity differs from the example lesson.`);
  if (review.candidateCommit !== adjudication.candidateCommit) errors.push(`${review.reviewId}: candidate commit differs from adjudication.`);
  if (review.verdict !== "approve") errors.push(`${review.reviewId}: counted example review must approve.`);
  reviewPrincipals.add(principalKey(review.reviewer.principalId));
  const authorConflict = reviewerAuthorConflict(policy, authorPrincipals, review.reviewer.principalId);
  if (authorConflict) errors.push(`${review.reviewId}: ${authorConflict}`);
  roleCounts[review.role] += 1;
  if (!review.reviewer.agent) {
    errors.push(`${review.reviewId}: founding-stage counted reviews require agent provenance.`);
  } else {
    if (authorAgentRuns.has(review.reviewer.agent.runId)) errors.push(`${review.reviewId}: review run duplicates an authoring run.`);
    if (reviewAgentRuns.has(review.reviewer.agent.runId)) errors.push(`${review.reviewId}: review run ID is not unique.`);
    reviewAgentRuns.add(review.reviewer.agent.runId);
    modelFamilies.add(modelFamilyKey(review.reviewer.agent));
  }
}

if (reviews.length !== standard.minimumApprovingReviews) errors.push("Example review set does not satisfy standard approval count.");
if (reviewPrincipals.size < standard.minimumDistinctPrincipals) errors.push("Example review set is below the reviewer-principal floor.");
if (reviewAgentRuns.size !== standard.minimumDistinctAgentRuns) errors.push("Example review set does not use three distinct agent runs.");
for (const [role, minimum] of Object.entries(standard.roleMinimums)) {
  if (roleCounts[role] < minimum) errors.push(`Example review set is below the ${role} role minimum.`);
}
if (modelFamilies.size < standard.minimumDistinctAgentModelFamilies) {
  errors.push("All-agent example reviews do not meet model-family diversity.");
}

const exampleReviewIds = new Set(reviews.map((review) => review.reviewId));
if (adjudication.reviewIds.length !== exampleReviewIds.size || adjudication.reviewIds.some((id) => !exampleReviewIds.has(id))) {
  errors.push("Example adjudication must cite the complete example review set.");
}
if (!adjudication.adjudicator.agent) errors.push("Example adjudication requires agent provenance.");
else if (authorAgentRuns.has(adjudication.adjudicator.agent.runId) || reviewAgentRuns.has(adjudication.adjudicator.agent.runId)) errors.push("Example adjudication must use a fresh run.");
if (adjudication.policyId !== standard.policyId || !adjudication.quorum.satisfied || adjudication.decision !== "merge") {
  errors.push("Example adjudication must record a satisfied standard merge decision.");
}
if (adjudication.quorum.approvals !== reviews.length || adjudication.quorum.distinctPrincipals !== reviewPrincipals.size || adjudication.quorum.distinctAgentRuns !== reviewAgentRuns.size) {
  errors.push("Example adjudication quorum snapshot does not match its reviews.");
}
if (adjudication.quorum.roleCounts.academic !== roleCounts.academic ||
    adjudication.quorum.roleCounts.learningDesign !== roleCounts["learning-design"] ||
    adjudication.quorum.roleCounts.accessibilityRights !== roleCounts["accessibility-rights"] ||
    adjudication.quorum.distinctAgentModelFamilies !== modelFamilies.size) {
  errors.push("Example adjudication role or model-family snapshot does not match its reviews.");
}
if (progress.outcomes.total !== topicIds.size || progress.outcomes.coveredOutcomeIds.length !== progress.outcomes.coveredByOpenLessons) {
  errors.push("Premed progress ledger is inconsistent with graph topics or covered outcome IDs.");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Agent protocol valid: 3 schemas, ${reviews.length + 2} example artifacts, 3 quorum tiers, and ${manifest.webmcp.tools.length} read-only WebMCP tools.`);
