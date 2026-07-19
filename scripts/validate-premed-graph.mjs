#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const GRAPH_PATH = resolve(HERE, "../site/data/premed-graph.json");
const graph = JSON.parse(await readFile(GRAPH_PATH, "utf8"));
const errors = [];
const warnings = [];

if (!Array.isArray(graph.nodes)) errors.push("nodes must be an array");
if (!Array.isArray(graph.links)) errors.push("links must be an array");

const nodes = graph.nodes ?? [];
const links = graph.links ?? [];
const ids = new Set();
for (const node of nodes) {
  if (!node.id) errors.push("node without id");
  if (ids.has(node.id)) errors.push(`duplicate node id: ${node.id}`);
  ids.add(node.id);
  for (const field of graph.schema?.requiredNodeFields ?? []) {
    if (node[field] === undefined || node[field] === null || node[field] === "") errors.push(`${node.id}: missing ${field}`);
  }
}

const linkIds = new Set();
for (const link of links) {
  if (!link.id) errors.push(`link without id: ${JSON.stringify(link)}`);
  if (linkIds.has(link.id)) errors.push(`duplicate link id: ${link.id}`);
  linkIds.add(link.id);
  if (!ids.has(link.source)) errors.push(`${link.id}: missing source ${link.source}`);
  if (!ids.has(link.target)) errors.push(`${link.id}: missing target ${link.target}`);
  if (!Object.hasOwn(graph.schema?.linkTypes ?? {}, link.type)) errors.push(`${link.id}: unknown type ${link.type}`);
  if (link.source === link.target) errors.push(`${link.id}: self-link`);
}

const sourceTags = new Set((graph.sources ?? []).map(source => source.tag));
const pathwayIds = new Set((graph.pathways ?? []).map(pathway => pathway.id));
for (const node of nodes.filter(node => node.kind === "topic" || node.kind === "module")) {
  for (const tag of node.sourceTags ?? []) if (!sourceTags.has(tag)) errors.push(`${node.id}: unknown source tag ${tag}`);
  for (const pathway of node.pathway ?? []) if (!pathwayIds.has(pathway)) errors.push(`${node.id}: unknown pathway ${pathway}`);
}

const topics = nodes.filter(node => node.kind === "topic");
const prereqLinks = links.filter(link => link.type === "prerequisite");
const declaredPrereqs = new Set(topics.flatMap(topic => (topic.prerequisites ?? []).map(source => `${source}>${topic.id}`)));
const linkedPrereqs = new Set(prereqLinks.map(link => `${link.source}>${link.target}`));
for (const key of declaredPrereqs) if (!linkedPrereqs.has(key)) errors.push(`declared prerequisite has no link: ${key}`);
for (const key of linkedPrereqs) if (!declaredPrereqs.has(key)) errors.push(`prerequisite link not declared on topic: ${key}`);

// Kahn's algorithm: prerequisite edges must be a DAG. Cross-links are intentionally ignored.
const adjacency = new Map(topics.map(topic => [topic.id, []]));
const indegree = new Map(topics.map(topic => [topic.id, 0]));
for (const link of prereqLinks) {
  if (!adjacency.has(link.source) || !adjacency.has(link.target)) {
    errors.push(`${link.id}: prerequisite endpoints must both be topics`);
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
if (visited !== topics.length) {
  const cyclic = [...indegree.entries()].filter(([, degree]) => degree > 0).map(([id]) => id);
  errors.push(`prerequisite cycle(s) involve ${cyclic.length} topics: ${cyclic.slice(0, 20).join(", ")}`);
}

const calculatedHours = topics.reduce((sum, topic) => sum + topic.estimatedHours, 0);
if (calculatedHours !== graph.course?.estimatedHours) errors.push(`course hours ${graph.course?.estimatedHours} != topic sum ${calculatedHours}`);
for (const module of nodes.filter(node => node.kind === "module")) {
  const sum = topics.filter(topic => topic.moduleId === module.id).reduce((total, topic) => total + topic.estimatedHours, 0);
  if (sum !== module.estimatedHours) errors.push(`${module.id}: module hours ${module.estimatedHours} != topic sum ${sum}`);
  if (!sum) warnings.push(`${module.id}: empty module`);
}

if (errors.length) {
  console.error(`Premed graph INVALID (${errors.length} errors, ${warnings.length} warnings)`);
  for (const error of errors) console.error(`ERROR ${error}`);
  for (const warning of warnings) console.warn(`WARN  ${warning}`);
  process.exit(1);
}

console.log(`Premed graph valid: ${nodes.length} nodes, ${links.length} links, ${topics.length} topics, ${calculatedHours} estimated hours.`);
if (warnings.length) for (const warning of warnings) console.warn(`WARN  ${warning}`);
