import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { principalKey, modelFamilyKey, reviewerAuthorConflict } from "./lib/provenance.mjs";
import { validateLessonEvidenceContract } from "./lib/lesson-evidence.mjs";
import { validateLessonRightsContract } from "./lib/lesson-rights.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const lessonsRoot = path.join(root, "lessons");
const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf8"));
const readProjectJson = (relativePath) => readJson(path.join(root, relativePath));
const schemas = {
  lesson: readProjectJson("site/schemas/lesson.schema.json"),
  assessment: readProjectJson("site/schemas/assessment.schema.json"),
  references: readProjectJson("site/schemas/references.schema.json"),
  claims: readProjectJson("site/schemas/claims.schema.json"),
  glossary: readProjectJson("site/schemas/glossary.schema.json"),
  diagram: readProjectJson("site/schemas/diagram.schema.json"),
  review: readProjectJson("site/schemas/review.schema.json"),
  adjudication: readProjectJson("site/schemas/adjudication.schema.json")
};
const policy = readProjectJson("site/agent/quorum-policy.json");
const graph = readProjectJson("site/data/premed-graph.json");
const topicIds = new Set(graph.nodes.filter((node) => node.kind === "topic").map((node) => node.id));
const ajv = new Ajv2020({ allErrors: true, strict: true });
addFormats(ajv);
for (const schema of Object.values(schemas)) ajv.addSchema(schema);
const errors = [];

const directiveWhitelist = new Set([
  "definition", "theorem", "derivation", "worked-example", "check", "misconception",
  "investigation", "figure", "diagram", "equation", "chemistry", "source-note", "callout"
]);
const directiveOptionWhitelist = new Set(["id", "label", "kind", "alt", "longdesc", "claims", "sources"]);
const roleWhitelist = new Set(["math", "chem"]);
const codeFenceWhitelist = new Set(["text", "json", "csv", "python", "r"]);
const imageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".svg"]);
const forbiddenTex = /\\(?:def|gdef|edef|xdef|newcommand|renewcommand|providecommand|input|include|includegraphics|write|openout|read|csname|href|url|html|style|class|require)\b/i;

function error(packName, message) {
  errors.push(`${packName}: ${message}`);
}

function validateSchema(kind, artifact, label, packName) {
  const validate = ajv.getSchema(schemas[kind].$id);
  if (!validate(artifact)) error(packName, `${label} ${ajv.errorsText(validate.errors, { separator: "; " })}`);
}

function uniqueValues(values, label, packName) {
  const seen = new Set();
  for (const value of values) {
    if (seen.has(value)) error(packName, `duplicate ${label}: ${value}.`);
    seen.add(value);
  }
  return seen;
}

function insidePack(packPath, relativePath) {
  if (typeof relativePath !== "string" || !relativePath) return null;
  const resolved = path.resolve(packPath, relativePath);
  return resolved.startsWith(`${packPath}${path.sep}`) ? resolved : null;
}

function validateSvg(filePath, relativePath, packName) {
  const svg = fs.readFileSync(filePath, "utf8");
  if (!/^\s*<svg\b/i.test(svg)) error(packName, `${relativePath} is not an SVG document.`);
  if (!/<title(?:\s[^>]*)?>[\s\S]*?<\/title>/i.test(svg) || !/<desc(?:\s[^>]*)?>[\s\S]*?<\/desc>/i.test(svg)) {
    error(packName, `${relativePath} must contain non-empty <title> and <desc> accessibility text.`);
  }
  const dangerous = [
    /<!DOCTYPE|<!ENTITY/i,
    /<(?:script|foreignObject|iframe|object|embed|audio|video|image|use|style)\b/i,
    /\son[a-z]+\s*=/i,
    /(?:xlink:)?href\s*=/i,
    /\burl\s*\(|@import/i,
    /javascript:|data:/i
  ];
  if (dangerous.some((pattern) => pattern.test(svg))) error(packName, `${relativePath} contains disallowed active or externally loaded SVG content.`);
}

function validateDiagram(filePath, relativePath, packName) {
  let diagram;
  try {
    diagram = readJson(filePath);
  } catch (parseError) {
    error(packName, `${relativePath} is not valid JSON: ${parseError.message}`);
    return;
  }
  validateSchema("diagram", diagram, relativePath, packName);
  const nodeIds = uniqueValues((diagram.nodes || []).map((node) => node.id), `${relativePath} node ID`, packName);
  uniqueValues((diagram.edges || []).map((edge) => edge.id), `${relativePath} edge ID`, packName);
  for (const edge of diagram.edges || []) {
    if (!nodeIds.has(edge.from) || !nodeIds.has(edge.to)) error(packName, `${relativePath} edge ${edge.id} has an unknown endpoint.`);
    if (edge.from === edge.to) error(packName, `${relativePath} edge ${edge.id} must not be a self-link.`);
  }
}

function parseDirectiveBlocks(markdown, relativePath, packName) {
  const lines = markdown.split(/\r?\n/);
  const blocks = [];
  let active = null;
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const opener = line.match(/^:::\{([a-z-]+)\}(?:\s+(.+))?\s*$/);
    if (opener) {
      if (active) error(packName, `${relativePath}:${index + 1} nests a directive; nesting is not allowed in format v1.`);
      const name = opener[1];
      if (!directiveWhitelist.has(name)) error(packName, `${relativePath}:${index + 1} uses unknown directive {${name}}.`);
      active = { name, argument: opener[2]?.trim() || null, options: {}, content: [], line: index + 1 };
      continue;
    }
    if (/^:::\s*$/.test(line)) {
      if (!active) error(packName, `${relativePath}:${index + 1} closes a directive that is not open.`);
      else {
        blocks.push(active);
        active = null;
      }
      continue;
    }
    if (active) {
      const option = line.match(/^:([a-z-]+):\s*(.*)$/);
      if (option && active.content.length === 0) {
        if (!directiveOptionWhitelist.has(option[1])) error(packName, `${relativePath}:${index + 1} uses unknown directive option :${option[1]}:.`);
        if (Object.hasOwn(active.options, option[1])) error(packName, `${relativePath}:${index + 1} repeats :${option[1]}:.`);
        active.options[option[1]] = option[2].trim();
      } else {
        active.content.push(line);
      }
    }
  }
  if (active) error(packName, `${relativePath}:${active.line} has an unclosed {${active.name}} directive.`);
  return blocks;
}

function validateMarkdown(packPath, scene, packName, featureState) {
  const filePath = insidePack(packPath, scene.source);
  if (!filePath || !fs.existsSync(filePath)) {
    error(packName, `scene ${scene.id} source is missing or escapes its pack: ${scene.source}.`);
    return;
  }
  const markdown = fs.readFileSync(filePath, "utf8");
  if (markdown.startsWith("---\n") || markdown.startsWith("---\r\n")) error(packName, `${scene.source} must not contain YAML front matter; metadata belongs in lesson.json.`);
  const h1 = markdown.match(/^#\s+.+$/gm) || [];
  if (h1.length !== 1 || !markdown.startsWith(`${h1[0]}\n`)) error(packName, `${scene.source} must begin with exactly one level-one heading.`);
  if (/^####+\s/m.test(markdown)) error(packName, `${scene.source} uses a heading below level three.`);
  if (/<\/?[A-Za-z][^>]*>/m.test(markdown)) error(packName, `${scene.source} contains raw HTML.`);
  if (/!\[[^\]]*\]\([^)]*\)/m.test(markdown)) error(packName, `${scene.source} uses Markdown image syntax; use a validated {figure} directive.`);
  let codeFenceOpen = false;
  for (const [index, line] of markdown.split(/\r?\n/).entries()) {
    const fence = line.match(/^```([^\s`]*)\s*$/);
    if (!fence) continue;
    if (!codeFenceOpen) {
      if (!codeFenceWhitelist.has(fence[1])) error(packName, `${scene.source}:${index + 1} uses unsupported or missing code-fence language '${fence[1]}'.`);
      codeFenceOpen = true;
    } else {
      if (fence[1]) error(packName, `${scene.source}:${index + 1} closing code fence must not repeat a language.`);
      codeFenceOpen = false;
    }
  }
  if (codeFenceOpen) error(packName, `${scene.source} has an unclosed code fence.`);
  for (const match of markdown.matchAll(/\[[^\]]+\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
    const target = match[1];
    if (!/^(?:https:\/\/|#|\.\.?\/|[A-Za-z0-9_-]+\/)/.test(target)) error(packName, `${scene.source} has an unsafe or unsupported link target: ${target}.`);
  }
  for (const match of markdown.matchAll(/\{([a-z-]+)\}`[^`]*`/g)) {
    if (!roleWhitelist.has(match[1])) error(packName, `${scene.source} uses unsupported inline role {${match[1]}}.`);
    if (forbiddenTex.test(match[0])) error(packName, `${scene.source} uses a disallowed math command.`);
  }

  const blocks = parseDirectiveBlocks(markdown, scene.source, packName);
  for (const block of blocks) {
    featureState.directives.add(block.name);
    if (block.name === "callout" && block.options.kind) featureState.calloutKinds.add(block.options.kind);
    if (["equation", "chemistry"].includes(block.name)) {
      const body = block.content.join("\n").trim();
      if (!body) error(packName, `${scene.source}:${block.line} has an empty {${block.name}} directive.`);
      if (forbiddenTex.test(body)) error(packName, `${scene.source}:${block.line} uses a disallowed TeX command.`);
      if (block.name === "chemistry" && /<\/?[A-Za-z]/.test(body)) error(packName, `${scene.source}:${block.line} contains markup-like chemistry content.`);
    }
    if (["figure", "diagram"].includes(block.name)) {
      if (!block.argument) error(packName, `${scene.source}:${block.line} requires a local file argument.`);
      if (!block.options.alt || block.options.alt.length < 8) error(packName, `${scene.source}:${block.line} requires meaningful :alt: text.`);
      if (!block.options.longdesc || block.options.longdesc.length < 20) error(packName, `${scene.source}:${block.line} requires a :longdesc: equivalent.`);
      if (!block.argument) continue;
      const referenced = path.resolve(path.dirname(filePath), block.argument);
      if (!referenced.startsWith(`${packPath}${path.sep}`) || !fs.existsSync(referenced)) {
        error(packName, `${scene.source}:${block.line} references a missing or out-of-pack file: ${block.argument}.`);
        continue;
      }
      const relative = path.relative(packPath, referenced).split(path.sep).join("/");
      if (block.name === "figure") {
        if (!imageExtensions.has(path.extname(referenced).toLowerCase())) error(packName, `${relative} is not an allowed static image type.`);
        if (path.extname(referenced).toLowerCase() === ".svg") validateSvg(referenced, relative, packName);
      } else {
        if (!relative.endsWith(".diagram.json")) error(packName, `${relative} must use the .diagram.json suffix.`);
        else validateDiagram(referenced, relative, packName);
      }
    }
    if (block.name === "source-note") {
      const claimIds = (block.options.claims || "").split(",").map((value) => value.trim()).filter(Boolean);
      const sourceIds = (block.options.sources || "").split(",").map((value) => value.trim()).filter(Boolean);
      featureState.sourceNotes.push({
        sceneId: scene.id,
        claimIds,
        sourceIds,
        location: `${scene.source}:${block.line}`
      });
    }
  }
  if (/^## Accessibility and alternatives\s*$/mi.test(markdown)) featureState.accessibility = true;
  if (/^## Recovery route\s*$/mi.test(markdown)) featureState.recovery = true;
}

function readAndValidateArtifact(kind, packPath, relativePath, packName) {
  const filePath = insidePack(packPath, relativePath);
  if (!filePath || !fs.existsSync(filePath)) {
    error(packName, `declared ${kind} artifact is missing or escapes its pack: ${relativePath}.`);
    return null;
  }
  try {
    const artifact = readJson(filePath);
    validateSchema(kind, artifact, relativePath, packName);
    return artifact;
  } catch (parseError) {
    error(packName, `${relativePath} is not valid JSON: ${parseError.message}`);
    return null;
  }
}

function validateFormatPack(packName, packPath, lesson, { specimen = false } = {}) {
  if (lesson.schemaVersion !== 3 || lesson.format !== "embeddedknowledge-lesson-v1") return;
  const sceneIds = uniqueValues((lesson.scenes || []).map((scene) => scene.id), "scene ID", packName);
  uniqueValues((lesson.scenes || []).map((scene) => scene.source), "scene source", packName);
  const objectiveIds = uniqueValues((lesson.objectives || []).map((objective) => objective.id), "objective ID", packName);
  uniqueValues((lesson.authors || []).map((author) => principalKey(author.principalId)), "author principal", packName);
  const lessonOutcomes = new Set(lesson.outcomes || []);
  for (const objective of lesson.objectives || []) {
    for (const outcomeId of objective.outcomeIds || []) if (!lessonOutcomes.has(outcomeId)) error(packName, `${objective.id} maps to undeclared lesson outcome ${outcomeId}.`);
  }
  const minutes = (lesson.scenes || []).reduce((sum, scene) => sum + scene.estimatedMinutes, 0);
  if (minutes !== lesson.estimatedMinutes) error(packName, `scene minutes sum to ${minutes}, not lesson estimatedMinutes ${lesson.estimatedMinutes}.`);

  const assessment = readAndValidateArtifact("assessment", packPath, lesson.files?.assessment, packName);
  const references = readAndValidateArtifact("references", packPath, lesson.files?.references, packName);
  const claims = readAndValidateArtifact("claims", packPath, lesson.files?.claims, packName);
  const glossary = readAndValidateArtifact("glossary", packPath, lesson.files?.glossary, packName);
  for (const [kind, artifact] of Object.entries({ assessment, references, claims, glossary })) {
    if (artifact && (artifact.lessonId !== lesson.id || artifact.lessonVersion !== lesson.version)) error(packName, `${kind} identity differs from lesson.json.`);
  }
  const attributionPath = insidePack(packPath, lesson.files?.attribution);
  const attribution = attributionPath && fs.existsSync(attributionPath) ? fs.readFileSync(attributionPath, "utf8") : "";
  if (!attribution) error(packName, `declared attribution artifact is missing or empty: ${lesson.files?.attribution}.`);
  if (attribution && /<\/?[A-Za-z][^>]*>/m.test(attribution)) error(packName, `${lesson.files?.attribution} contains raw HTML.`);
  if (attribution && !/CC BY 4\.0/i.test(attribution)) error(packName, `${lesson.files?.attribution} must identify the adopted CC BY 4.0 lesson-content license.`);
  for (const asset of lesson.thirdPartyAssets || []) {
    const assetPath = insidePack(packPath, asset.path);
    if (!assetPath || !fs.existsSync(assetPath)) error(packName, `third-party asset is missing or escapes its pack: ${asset.path}.`);
    if (attribution && !attribution.includes(asset.path)) error(packName, `${lesson.files?.attribution} must name third-party asset ${asset.path}.`);
  }
  for (const problem of validateLessonRightsContract({ lesson, references, attribution })) error(packName, problem);

  const featureState = { directives: new Set(), calloutKinds: new Set(), sourceNotes: [], accessibility: false, recovery: false };
  for (const scene of lesson.scenes || []) validateMarkdown(packPath, scene, packName, featureState);
  const sceneKinds = new Set((lesson.scenes || []).map((scene) => scene.kind));
  const has = (sceneKind, directive) => sceneKinds.has(sceneKind) || featureState.directives.has(directive);
  for (const [label, present] of [
    ["worked example", has("worked-example", "worked-example")],
    ["practice", has("practice", "practice")],
    ["retrieval check", has("retrieval-check", "check")],
    ["transfer", has("transfer", "transfer")],
    ["misconception handling", has("misconception", "misconception")],
    ["accessibility alternatives", featureState.accessibility || featureState.calloutKinds.has("accessibility")],
    ["recovery guidance", featureState.recovery || featureState.calloutKinds.has("recovery")]
  ]) if (!present) error(packName, `lesson-wide obligation missing: ${label}.`);

  uniqueValues((references?.sources || []).map((source) => source.id), "source ID", packName);
  uniqueValues((claims?.claims || []).map((claim) => claim.id), "claim ID", packName);
  for (const problem of validateLessonEvidenceContract({ lesson, claims, references, sourceNotes: featureState.sourceNotes })) error(packName, problem);

  const rubricIds = uniqueValues((assessment?.rubrics || []).map((rubric) => rubric.id), "rubric ID", packName);
  uniqueValues((assessment?.items || []).map((item) => item.id), "assessment item ID", packName);
  const assessedObjectives = new Set();
  const assessedOutcomes = new Set();
  const expectedModes = {
    "single-choice": "single-choice",
    "multiple-choice": "multiple-choice",
    numeric: "number",
    "short-answer": "text",
    ordering: "ordered-ids",
    matching: "matched-ids",
    "data-interpretation": "text",
    "open-response": "text"
  };
  for (const item of assessment?.items || []) {
    if (!sceneIds.has(item.sceneId)) error(packName, `${item.id} references unknown scene ${item.sceneId}.`);
    for (const objectiveId of item.objectiveIds || []) {
      assessedObjectives.add(objectiveId);
      if (!objectiveIds.has(objectiveId)) error(packName, `${item.id} references unknown objective ${objectiveId}.`);
    }
    for (const outcomeId of item.outcomeIds || []) {
      assessedOutcomes.add(outcomeId);
      if (!lessonOutcomes.has(outcomeId)) error(packName, `${item.id} references undeclared lesson outcome ${outcomeId}.`);
    }
    if (!rubricIds.has(item.rubricId)) error(packName, `${item.id} references unknown rubric ${item.rubricId}.`);
    if (expectedModes[item.type] !== item.responseSpec?.mode) error(packName, `${item.id} type ${item.type} requires response mode ${expectedModes[item.type]}.`);
    const options = item.responseSpec?.options || [];
    const optionIds = uniqueValues(options.map((option) => option.id), `${item.id} option ID`, packName);
    const correct = Array.isArray(item.answer?.correct) ? item.answer.correct : [item.answer?.correct];
    if (options.length && correct.some((value) => typeof value === "string" && !optionIds.has(value))) error(packName, `${item.id} correct answer does not match a declared option.`);
    if (["single-choice", "multiple-choice"].includes(item.type) && options.length < 2) error(packName, `${item.id} requires at least two options.`);
  }
  for (const objectiveId of objectiveIds) if (!assessedObjectives.has(objectiveId)) error(packName, `${objectiveId} has no assessment item.`);
  for (const outcomeId of lessonOutcomes) if (!assessedOutcomes.has(outcomeId)) error(packName, `${outcomeId} has no assessment item.`);
  uniqueValues((glossary?.terms || []).map((term) => term.id), "glossary term ID", packName);
  for (const term of glossary?.terms || []) for (const sceneId of term.sceneIds || []) if (!sceneIds.has(sceneId)) error(packName, `${term.id} references unknown scene ${sceneId}.`);

  if (specimen) {
    if (lesson.status !== "draft" || lesson.version !== "0.0.0") error(packName, "format specimen must remain draft version 0.0.0.");
    if (!packPath.includes(`${path.sep}examples${path.sep}`)) error(packName, "specimen must live under examples/.");
  }
}

const packDirectories = fs.readdirSync(lessonsRoot, { withFileTypes: true }).filter((entry) => entry.isDirectory());
for (const entry of packDirectories) {
  const packName = entry.name;
  const packPath = path.join(lessonsRoot, packName);
  const lessonPath = path.join(packPath, "lesson.json");
  if (!fs.existsSync(lessonPath)) {
    error(packName, "missing lesson.json.");
    continue;
  }

  let lesson;
  try {
    lesson = readJson(lessonPath);
  } catch (parseError) {
    error(packName, `lesson.json is not valid JSON: ${parseError.message}`);
    continue;
  }
  validateSchema("lesson", lesson, "lesson.json", packName);
  validateFormatPack(packName, packPath, lesson);

  for (const outcomeId of [...(lesson.outcomes || []), ...(lesson.prerequisites || [])]) {
    if (!topicIds.has(outcomeId)) error(packName, `unknown graph outcome ${outcomeId}.`);
  }
  for (const relativeFile of Object.values(lesson.files || {})) {
    const resolved = path.resolve(packPath, relativeFile);
    if (!resolved.startsWith(`${packPath}${path.sep}`)) error(packName, `lesson file escapes its pack: ${relativeFile}.`);
    else if (!fs.existsSync(resolved)) error(packName, `declared file is missing: ${relativeFile}.`);
  }

  const reviewDirectory = path.join(packPath, "reviews");
  const reviewFiles = fs.existsSync(reviewDirectory)
    ? fs.readdirSync(reviewDirectory).filter((file) => file.endsWith(".json")).sort()
    : [];
  const reviews = [];
  for (const reviewFile of reviewFiles) {
    try {
      const review = readJson(path.join(reviewDirectory, reviewFile));
      validateSchema("review", review, `reviews/${reviewFile}`, packName);
      reviews.push(review);
    } catch (parseError) {
      error(packName, `reviews/${reviewFile} is not valid JSON: ${parseError.message}`);
    }
  }
  if (new Set(reviews.map((review) => review.reviewId)).size !== reviews.length) {
    error(packName, "review IDs must be unique within a lesson pack.");
  }

  const adjudicationPath = path.join(packPath, "adjudication.json");
  let adjudication = null;
  if (fs.existsSync(adjudicationPath)) {
    try {
      adjudication = readJson(adjudicationPath);
      validateSchema("adjudication", adjudication, "adjudication.json", packName);
    } catch (parseError) {
      error(packName, `adjudication.json is not valid JSON: ${parseError.message}`);
    }
  }

  if (["adjudicated", "published"].includes(lesson.status) && !adjudication) {
    error(packName, `${lesson.status} lessons require adjudication.json.`);
  }
  if (!adjudication) continue;

  const tier = policy.tiers?.[lesson.riskTier];
  if (!tier) {
    error(packName, `unknown or missing riskTier '${lesson.riskTier}'; expected one of: ${Object.keys(policy.tiers || {}).join(", ")}.`);
    continue;
  }
  const authorPrincipals = new Set((lesson.authors || []).map((author) => principalKey(author.principalId)));
  const authorAgentRuns = new Set(lesson.authors.map((author) => author.agent?.runId).filter(Boolean));
  const citedReviews = reviews.filter((review) => adjudication.reviewIds.includes(review.reviewId));
  const citedIds = new Set(citedReviews.map((review) => review.reviewId));
  const reviewerPrincipals = new Set();
  const reviewAgentRuns = new Set();
  const modelFamilies = new Set();
  const roleCounts = { academic: 0, "learning-design": 0, "accessibility-rights": 0 };

  for (const reviewId of adjudication.reviewIds) {
    if (!citedIds.has(reviewId)) error(packName, `adjudication cites missing review ${reviewId}.`);
  }
  for (const review of citedReviews) {
    if (review.lessonId !== lesson.id || review.lessonVersion !== lesson.version) error(packName, `${review.reviewId} targets a different lesson identity.`);
    if (review.candidateCommit !== adjudication.candidateCommit) error(packName, `${review.reviewId} targets a stale candidate commit.`);
    if (review.verdict !== "approve") error(packName, `${review.reviewId} is counted but does not approve.`);
    const reviewerPrincipal = principalKey(review.reviewer.principalId);
    reviewerPrincipals.add(reviewerPrincipal);
    const authorConflict = reviewerAuthorConflict(policy, authorPrincipals, review.reviewer.principalId);
    if (authorConflict) error(packName, `${review.reviewId} ${authorConflict}`);
    roleCounts[review.role] += 1;
    if (!review.reviewer.agent) {
      error(packName, `${review.reviewId} requires disclosed agent provenance under the founding-stage policy.`);
    } else {
      const runId = review.reviewer.agent.runId;
      if (authorAgentRuns.has(runId)) error(packName, `${review.reviewId} reuses an authoring agent run.`);
      if (reviewAgentRuns.has(runId)) error(packName, `${review.reviewId} reuses review agent run ${runId}.`);
      reviewAgentRuns.add(runId);
      modelFamilies.add(modelFamilyKey(review.reviewer.agent));
    }
    if (review.findings.some((finding) => finding.severity === "blocking" && !finding.resolution)) {
      error(packName, `${review.reviewId} has an unresolved blocking finding.`);
    }
  }

  if (adjudication.lessonId !== lesson.id || adjudication.lessonVersion !== lesson.version || adjudication.riskTier !== lesson.riskTier) {
    error(packName, "adjudication identity or risk tier differs from lesson.json.");
  }
  if (adjudication.policyId !== tier.policyId) error(packName, `adjudication must use ${tier.policyId}.`);
  if (citedReviews.length < tier.minimumApprovingReviews) error(packName, `requires at least ${tier.minimumApprovingReviews} approving reviews.`);
  if (reviewerPrincipals.size < tier.minimumDistinctPrincipals) error(packName, `requires at least ${tier.minimumDistinctPrincipals} distinct reviewer principals.`);
  if (reviewAgentRuns.size < tier.minimumDistinctAgentRuns) error(packName, `requires at least ${tier.minimumDistinctAgentRuns} distinct review agent runs.`);
  for (const [role, minimum] of Object.entries(tier.roleMinimums)) {
    if (roleCounts[role] < minimum) error(packName, `requires ${minimum} ${role} review(s).`);
  }
  if (modelFamilies.size < tier.minimumDistinctAgentModelFamilies) error(packName, `requires ${tier.minimumDistinctAgentModelFamilies} distinct review agent providers.`);
  const adjudicationRun = adjudication.adjudicator.agent?.runId;
  if (!adjudicationRun) error(packName, "founding-stage adjudication requires disclosed agent provenance.");
  else if (authorAgentRuns.has(adjudicationRun) || reviewAgentRuns.has(adjudicationRun)) error(packName, "adjudication must use a fresh agent run distinct from authoring and review runs.");
  if (!adjudication.quorum.satisfied) error(packName, "adjudication quorum must be marked satisfied.");
  if (adjudication.quorum.approvals !== citedReviews.length || adjudication.quorum.distinctPrincipals !== reviewerPrincipals.size || adjudication.quorum.distinctAgentRuns !== reviewAgentRuns.size) {
    error(packName, "adjudication quorum counts do not match cited review artifacts.");
  }
  const snapshotCounts = adjudication.quorum.roleCounts;
  if (snapshotCounts.academic !== roleCounts.academic || snapshotCounts.learningDesign !== roleCounts["learning-design"] || snapshotCounts.accessibilityRights !== roleCounts["accessibility-rights"]) {
    error(packName, "adjudication role counts do not match cited review artifacts.");
  }
  if (adjudication.quorum.distinctAgentModelFamilies !== modelFamilies.size) {
    error(packName, "adjudication model-family count does not match cited review artifacts.");
  }
  if (["adjudicated", "published"].includes(lesson.status) && adjudication.decision !== "merge") {
    error(packName, `${lesson.status} lessons require a merge adjudication decision.`);
  }
}

const specimenPath = path.join(root, "examples", "lesson-pack");
const specimenLessonPath = path.join(specimenPath, "lesson.json");
if (!fs.existsSync(specimenLessonPath)) {
  error("examples/lesson-pack", "required format specimen is missing lesson.json.");
} else {
  try {
    const specimenLesson = readJson(specimenLessonPath);
    validateSchema("lesson", specimenLesson, "lesson.json", "examples/lesson-pack");
    validateFormatPack("examples/lesson-pack", specimenPath, specimenLesson, { specimen: true });
    for (const outcomeId of [...(specimenLesson.outcomes || []), ...(specimenLesson.prerequisites || [])]) {
      if (!topicIds.has(outcomeId)) error("examples/lesson-pack", `unknown graph outcome ${outcomeId}.`);
    }
  } catch (parseError) {
    error("examples/lesson-pack", `lesson.json is not valid JSON: ${parseError.message}`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Lesson packs valid: ${packDirectories.length} production pack(s); 1 format specimen validated and excluded from coverage.`);
