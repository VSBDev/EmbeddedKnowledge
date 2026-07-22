// Public-copy spot checks.
//
// IMPORTANT: this script mechanically checks only a small subset of the
// COPY-AUDIT.md standard — retired phrases, required discovery metadata, and
// the boundary disclaimer. Voice rules 1-7 of COPY-AUDIT.md (audience, voice,
// state precision, institutional language, boundaries) still require human or
// agent editorial review. A green result here must NOT be read as full
// compliance with the public copy standard.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicFiles = [
  "site/index.html",
  "site/premed/index.html",
  "site/premed/syllabus/index.html",
  "site/premed/graph/index.html",
  "site/premed/lessons/index.html",
  "site/premed/lessons/read/index.html",
  "site/premed/lessons/specimen/index.html",
  "site/psychiatry/index.html",
  "site/psychiatry/syllabus/index.html",
  "site/contribute/index.html",
  "site/contribute/format/index.html",
  "site/llms.txt",
  "site/llms-full.txt",
  "site/content-standard.txt",
  "site/rights-policy.txt",
  "site/agent/skills.json",
  "site/schemas/agent-skills.schema.json",
  "site/skills/author-embeddedknowledge-lesson/SKILL.md",
  "site/skills/review-embeddedknowledge-academic/SKILL.md",
  "site/skills/review-embeddedknowledge-learning-design/SKILL.md",
  "site/skills/review-embeddedknowledge-accessibility-rights/SKILL.md",
  "site/skills/adjudicate-embeddedknowledge-lesson/SKILL.md",
  "README.md",
  "AGENTS.md",
  "CONTRIBUTING.md",
  "PAGES-DEPLOYMENT.md",
  "CONTENT-STANDARD.md",
  "RIGHTS-POLICY.md",
  "COLLABORATION.md",
  "REVIEWING.md",
  "COPY-AUDIT.md",
  "CONCEPT.md",
  "research/README.md",
  "research/DIARY.md",
  "research/PORTABLE-RESEARCH-PROMPT.md",
  "research/SOURCE-CATALOG.md",
  "research/PSYCHIATRY-SOURCE-CATALOG.md",
  "research/CONTENT-AUTHORING-EVIDENCE-2026-07-19.md",
  "course/PREMED-SYLLABUS.md",
  "course/PREMED-CURRICULUM-MAP.md",
  "course/PREMED-KNOWLEDGE-GRAPH.md",
  "course/PSYCHIATRY-SYLLABUS.md"
];
// Name-like entries use word boundaries so that e.g. "victory" or "victorious"
// do not false-positive; multi-word phrases match as literal substrings.
const retiredPhrases = [
  { label: "Victor", pattern: /\bvictor\b/i },
  { label: "user #1", pattern: /\buser #1\b/i },
  { label: "does this keep Victor studying", pattern: /does this keep victor studying/i },
  { label: "Victor starts studying", pattern: /victor starts studying/i },
  { label: "You do not need permission", pattern: /you do not need permission/i },
  { label: "We are defining lesson structure", pattern: /we are defining lesson structure/i },
  { label: "Two doors. One review queue.", pattern: /two doors\. one review queue\./i },
  { label: "Proposed: CC BY 4.0", pattern: /proposed: cc by 4\.0/i }
];
const retiredLifecycleClaims = [
  { label: "repository-private-empty", pattern: /repository-private-empty/i },
  { label: "public and empty repository", pattern: /public and empty|public repository (?:exists but )?is still empty/i },
  { label: "private and empty repository", pattern: /repository is private and empty/i },
  { label: "unpopulated public repository", pattern: /public github repository that is not yet populated/i },
  { label: "unselected software licence", pattern: /software (?:uses|needs) a separate (?:license|code-license) (?:to be selected|decision)/i },
  { label: "no project content pushed", pattern: /no project content has been pushed/i }
];
const errors = [];
for (const relativePath of publicFiles) {
  const contents = fs.readFileSync(path.join(root, relativePath), "utf8");
  for (const phrase of retiredPhrases) {
    if (phrase.pattern.test(contents)) errors.push(`${relativePath} contains retired audience-of-one copy: ${phrase.label}`);
  }
  for (const claim of retiredLifecycleClaims) {
    if (claim.pattern.test(contents)) errors.push(`${relativePath} contains retired lifecycle copy: ${claim.label}`);
  }
}

const contributionManifest = fs.readFileSync(path.join(root, "site/agent/contribution.json"), "utf8");
for (const claim of retiredLifecycleClaims) {
  if (claim.pattern.test(contributionManifest)) errors.push(`site/agent/contribution.json contains retired lifecycle copy: ${claim.label}`);
}

// The boundary disclaimer must stay present on the public surfaces that carry
// it. site/index.html is the canonical statement; extending the disclaimer to
// the remaining HTML surfaces requires site template changes.
const disclaimerPattern = /Educational content only\. Not a degree, university, or substitute for professional advice\./;
for (const relativePath of ["site/index.html"]) {
  const contents = fs.readFileSync(path.join(root, relativePath), "utf8");
  if (!disclaimerPattern.test(contents)) {
    errors.push(`${relativePath} is missing the boundary disclaimer: "Educational content only. Not a degree, university, or substitute for professional advice."`);
  }
}

const htmlFiles = publicFiles.filter((file) => file.endsWith(".html") && !file.endsWith("404.html"));
for (const relativePath of htmlFiles) {
  const contents = fs.readFileSync(path.join(root, relativePath), "utf8");
  if (!contents.includes('rel="canonical"')) errors.push(`${relativePath} is missing canonical domain metadata.`);
  if (!contents.includes('rel="alternate"') || !contents.includes("llms.txt")) errors.push(`${relativePath} is missing agent-context discovery metadata.`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Public copy valid: ${publicFiles.length} surfaces use the multi-audience contract and required discovery metadata.`);
