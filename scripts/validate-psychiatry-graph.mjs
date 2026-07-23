#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const GRAPH_PATH = resolve(HERE, "../site/data/psychiatry-graph.json");
const graph = JSON.parse(await readFile(GRAPH_PATH, "utf8"));
const errors = [];
const warnings = [];
const fail = (message) => errors.push(message);

if (graph.course?.id !== "psychiatry") fail("course.id must be psychiatry");
if (graph.course?.estimatedHours !== 1440) fail("course.estimatedHours must equal the 1,440-hour common syllabus");
if (graph.status !== "proposed-intake") fail("graph status must remain proposed-intake until merge");
if (!/not a residency/i.test(graph.course?.disclaimer || "")) fail("course disclaimer must preserve the residency boundary");
if (!/stable public identifiers/i.test(graph.scope?.stabilityRule || "")) fail("scope must declare the stable-ID rule");
if (!Array.isArray(graph.nodes)) fail("nodes must be an array");
if (!Array.isArray(graph.links)) fail("links must be an array");

const nodes = graph.nodes ?? [];
const links = graph.links ?? [];
const ids = new Set();
for (const node of nodes) {
  if (!node.id) fail("node without id");
  if (ids.has(node.id)) fail(`duplicate node id: ${node.id}`);
  ids.add(node.id);
  for (const field of graph.schema?.requiredNodeFields ?? []) {
    if (node[field] === undefined || node[field] === null || node[field] === "") fail(`${node.id}: missing ${field}`);
  }
}

const linkIds = new Set();
for (const link of links) {
  if (!link.id) fail(`link without id: ${JSON.stringify(link)}`);
  if (linkIds.has(link.id)) fail(`duplicate link id: ${link.id}`);
  linkIds.add(link.id);
  if (!ids.has(link.source)) fail(`${link.id}: missing source ${link.source}`);
  if (!ids.has(link.target)) fail(`${link.id}: missing target ${link.target}`);
  if (!Object.hasOwn(graph.schema?.linkTypes ?? {}, link.type)) fail(`${link.id}: unknown type ${link.type}`);
  if (link.source === link.target) fail(`${link.id}: self-link`);
}

const sourceTags = new Set((graph.sources ?? []).map((source) => source.tag));
const pathwayIds = new Set((graph.pathways ?? []).map((pathway) => pathway.id));
for (const node of nodes.filter((node) => node.kind === "topic" || node.kind === "module")) {
  for (const tag of node.sourceTags ?? []) if (!sourceTags.has(tag)) fail(`${node.id}: unknown source tag ${tag}`);
  for (const pathway of node.pathway ?? []) if (!pathwayIds.has(pathway)) fail(`${node.id}: unknown pathway ${pathway}`);
}

const topics = nodes.filter((node) => node.kind === "topic");
const modules = nodes.filter((node) => node.kind === "module");
const domains = nodes.filter((node) => node.kind === "domain");
if (domains.length !== 4) fail(`expected 4 stages, found ${domains.length}`);
if (modules.length !== 26) fail(`expected 26 modules, found ${modules.length}`);
if (topics.length !== 154) fail(`expected 154 atomic outcomes, found ${topics.length}`);

const observableVerbs = new Set([
  "adapt", "analyze", "answer", "appraise", "build", "clarify", "co-design", "compare", "connect",
  "construct", "defend", "define", "describe", "design", "differentiate", "discriminate", "discuss",
  "distinguish", "elicit", "evaluate", "explain", "formulate", "generate", "identify", "integrate",
  "interpret", "lead", "move", "organize", "plan", "prepare", "produce", "reason", "recognize",
  "relate", "respond", "revise", "select", "teach", "trace", "use"
]);
const normalizedOutcomes = new Set();
for (const topic of topics) {
  if (!/^topic-psy-[0-9]{3}-[a-z0-9-]+$/.test(topic.id)) fail(`${topic.id}: invalid Psychiatry topic ID`);
  if (!/^PSY-[0-9]{3}\.[0-9]{2}$/.test(topic.code || "")) fail(`${topic.id}: invalid topic code ${topic.code}`);
  if (topic.requirement !== "common-academic" || !topic.core) fail(`${topic.id}: common graph topics must be common-academic core`);
  if ((topic.pathway || []).length !== pathwayIds.size || [...pathwayIds].some((id) => !topic.pathway.includes(id))) fail(`${topic.id}: must be available to all three declared routes`);
  if (topic.evidenceConfidence !== "pending-external-review") fail(`${topic.id}: evidence confidence must remain pending-external-review in the proposal`);
  const firstWord = String(topic.outcome || "").trim().split(/\s+/)[0].toLowerCase();
  if (!observableVerbs.has(firstWord)) fail(`${topic.id}: outcome must begin with an observable verb, found '${firstWord}'`);
  const normalized = String(topic.outcome).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  if (normalizedOutcomes.has(normalized)) fail(`${topic.id}: duplicate outcome statement`);
  normalizedOutcomes.add(normalized);
}

const prereqLinks = links.filter((link) => link.type === "prerequisite");
const declaredPrereqs = new Set(topics.flatMap((topic) => (topic.prerequisites ?? []).map((source) => `${source}>${topic.id}`)));
const linkedPrereqs = new Set(prereqLinks.map((link) => `${link.source}>${link.target}`));
for (const key of declaredPrereqs) if (!linkedPrereqs.has(key)) fail(`declared prerequisite has no link: ${key}`);
for (const key of linkedPrereqs) if (!declaredPrereqs.has(key)) fail(`prerequisite link not declared on topic: ${key}`);

const declaredCrossLinks = new Set();
for (const topic of topics) {
  for (const related of topic.crossLinks ?? []) {
    const pair = [topic.id, related].sort().join(">");
    declaredCrossLinks.add(pair);
    if (!topics.some((candidate) => candidate.id === related && candidate.crossLinks?.includes(topic.id))) fail(`${topic.id}: cross-link to ${related} is not declared symmetrically`);
  }
}
const linkedCrossLinks = new Set(links.filter((link) => link.type === "cross-link").map((link) => [link.source, link.target].sort().join(">")));
for (const key of declaredCrossLinks) if (!linkedCrossLinks.has(key)) fail(`declared cross-link has no link: ${key}`);
for (const key of linkedCrossLinks) if (!declaredCrossLinks.has(key)) fail(`cross-link is not declared on topics: ${key}`);

// Kahn's algorithm: prerequisite edges must be a DAG.
const adjacency = new Map(topics.map((topic) => [topic.id, []]));
const indegree = new Map(topics.map((topic) => [topic.id, 0]));
for (const link of prereqLinks) {
  if (!adjacency.has(link.source) || !adjacency.has(link.target)) {
    fail(`${link.id}: prerequisite endpoints must both be topics`);
    continue;
  }
  adjacency.get(link.source).push(link.target);
  indegree.set(link.target, indegree.get(link.target) + 1);
}
const queue = [...indegree.entries()].filter(([, degree]) => degree === 0).map(([id]) => id);
let visited = 0;
while (queue.length) {
  const current = queue.shift();
  visited += 1;
  for (const next of adjacency.get(current)) {
    indegree.set(next, indegree.get(next) - 1);
    if (indegree.get(next) === 0) queue.push(next);
  }
}
if (visited !== topics.length) fail(`prerequisite graph contains a cycle involving ${topics.length - visited} outcomes`);

const calculatedHours = topics.reduce((sum, topic) => sum + topic.estimatedHours, 0);
if (calculatedHours !== graph.course?.estimatedHours) fail(`course hours ${graph.course?.estimatedHours} != topic sum ${calculatedHours}`);
for (const module of modules) {
  const moduleTopics = topics.filter((topic) => topic.moduleId === module.id);
  const sum = moduleTopics.reduce((total, topic) => total + topic.estimatedHours, 0);
  if (sum !== module.estimatedHours) fail(`${module.id}: module hours ${module.estimatedHours} != topic sum ${sum}`);
  if (moduleTopics.length < 4 || moduleTopics.length > 8) warnings.push(`${module.id}: unusual atomic-outcome count ${moduleTopics.length}`);
}
const expectedStageHours = new Map([
  ["domain-psy-stage-1", 320],
  ["domain-psy-stage-2", 480],
  ["domain-psy-stage-3", 400],
  ["domain-psy-stage-4", 240]
]);
for (const domain of domains) if (domain.estimatedHours !== expectedStageHours.get(domain.id)) fail(`${domain.id}: expected ${expectedStageHours.get(domain.id)} hours, found ${domain.estimatedHours}`);

const metricChecks = {
  domains: domains.length,
  modules: modules.length,
  topics: topics.length,
  links: links.length,
  prerequisiteLinks: prereqLinks.length,
  crossLinks: linkedCrossLinks.size,
  estimatedHours: calculatedHours
};
for (const [key, value] of Object.entries(metricChecks)) if (graph.metrics?.[key] !== value) fail(`metrics.${key} ${graph.metrics?.[key]} != ${value}`);

if (errors.length) {
  console.error(`Psychiatry graph INVALID (${errors.length} errors, ${warnings.length} warnings)`);
  for (const error of errors) console.error(`ERROR ${error}`);
  for (const warning of warnings) console.warn(`WARN  ${warning}`);
  process.exit(1);
}

console.log(`Psychiatry graph valid: ${nodes.length} nodes, ${links.length} links, ${topics.length} outcomes, ${calculatedHours} academic hours.`);
if (warnings.length) for (const warning of warnings) console.warn(`WARN  ${warning}`);
