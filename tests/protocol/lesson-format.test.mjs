import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { copyLessonAssetTree, renderLessonMarkdown } from "../../scripts/render-lesson-format.mjs";
import { validateLessonEvidenceContract } from "../../scripts/lib/lesson-evidence.mjs";
import { validateLessonRightsContract } from "../../scripts/lib/lesson-rights.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const specimenPack = path.join(root, "examples", "lesson-pack");
const specimenOutput = path.join(root, "site", "data", "lessons", "specimen.json");
const specimenAssets = path.join(root, "site", "assets", "lesson-specimen");
const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf8"));
const runScript = (name) => execFileSync(process.execPath, [path.join(root, "scripts", name)], { cwd: root, encoding: "utf8" });
const digest = (content) => crypto.createHash("sha256").update(content).digest("hex");

function fileInventory(directory) {
  const inventory = {};
  const visit = (current) => {
    for (const entry of fs.readdirSync(current, { withFileTypes: true }).sort((left, right) => left.name.localeCompare(right.name))) {
      const filePath = path.join(current, entry.name);
      if (entry.isDirectory()) visit(filePath);
      else inventory[path.relative(directory, filePath).split(path.sep).join("/")] = digest(fs.readFileSync(filePath));
    }
  };
  visit(directory);
  return inventory;
}

function renderContext(packPath = specimenPack, sourcePath = path.join(specimenPack, "content", "02-concept.md")) {
  return { packPath, sourcePath, publicAssetBase: "/assets/lesson-specimen" };
}

test("the lesson specimen derives deterministically from the canonical pack", () => {
  runScript("build-lesson-specimen.mjs");
  const firstBytes = fs.readFileSync(specimenOutput);
  const firstAssets = fileInventory(specimenAssets);

  runScript("build-lesson-specimen.mjs");
  const secondBytes = fs.readFileSync(specimenOutput);
  const secondAssets = fileInventory(specimenAssets);
  assert.equal(digest(firstBytes), digest(secondBytes));
  assert.deepEqual(firstAssets, secondAssets);

  const metadata = readJson(path.join(specimenPack, "lesson.json"));
  const artifact = JSON.parse(secondBytes);
  assert.equal(artifact.schemaVersion, 3);
  assert.equal(artifact.artifactType, "lesson-specimen");
  assert.equal(artifact.nonProduction, true);
  assert.equal(artifact.countsTowardCoverage, false);
  assert.equal(artifact.id, metadata.id);
  assert.equal(artifact.version, metadata.version);
  assert.deepEqual(
    artifact.scenes.map(({ contentHtml: _contentHtml, ...scene }) => scene),
    metadata.scenes
  );
  assert.ok(artifact.scenes.every((scene) => typeof scene.contentHtml === "string" && scene.contentHtml.startsWith("<h1>")));
  assert.deepEqual(artifact.assessment, readJson(path.join(specimenPack, metadata.files.assessment)));
  assert.deepEqual(artifact.references, readJson(path.join(specimenPack, metadata.files.references)));
  assert.deepEqual(artifact.claims, readJson(path.join(specimenPack, metadata.files.claims)));
  assert.deepEqual(artifact.glossary, readJson(path.join(specimenPack, metadata.files.glossary)));

  for (const relativePath of ["assets/conjugate-pairs.svg", "diagrams/model-scope.diagram.json"]) {
    assert.equal(
      digest(fs.readFileSync(path.join(specimenPack, relativePath))),
      digest(fs.readFileSync(path.join(specimenAssets, relativePath))),
      `${relativePath} should be copied byte-for-byte`
    );
  }
});

test("math, chemistry, diagrams, and figures render to semantic accessible HTML", () => {
  const markdown = `# Rich rendering

Inline {math}\`x^2\` and {chem}\`H2O\`.

:::{equation}
:label: Pythagorean relation

x^2 + y^2 = z^2
:::

:::{chemistry}
:label: Water formation

2 H2 + O2 -> 2 H2O
:::

:::{diagram} ../diagrams/model-scope.diagram.json
:alt: Proton transfer is one case inside a broader electron-pair model.
:longdesc: Four labelled nodes connect proton transfer, two acid-base models, and a final model-choice question.
:::

:::{figure} ../assets/conjugate-pairs.svg
:alt: Two conjugate acid-base pairs are connected by one-proton changes.
:longdesc: The image identifies acetate and acetic acid as one pair and water and hydroxide as the other.
:::`;

  const html = renderLessonMarkdown(markdown, renderContext());
  assert.match(html, /<math xmlns="http:\/\/www\.w3\.org\/1998\/Math\/MathML"/);
  assert.match(html, /<annotation encoding="application\/x-tex">x\^2<\/annotation>/);
  assert.match(html, /class="ek-inline-math ek-inline-math--chem"/);
  assert.match(html, /\\ce\{H2O\}/);
  assert.match(html, /data-directive="equation"/);
  assert.match(html, /data-directive="chemistry"/);
  assert.match(html, /data-directive="diagram"/);
  assert.match(html, /data-diagram-source="diagrams\/model-scope\.diagram\.json"/);
  assert.match(html, /role="img" aria-label="Proton transfer is one case/);
  assert.match(html, /<summary>Read the diagram as text<\/summary>/);
  assert.match(html, /<strong>Proton moves<\/strong> → <strong>Brønsted–Lowry/);
  assert.match(html, /data-directive="figure"/);
  assert.match(html, /src="\/assets\/lesson-specimen\/assets\/conjugate-pairs\.svg"/);
  assert.match(html, /alt="Two conjugate acid-base pairs are connected by one-proton changes\."/);
  assert.match(html, /<summary>Read the image description<\/summary>/);
  assert.doesNotMatch(html, /EK(?:MATH|DIRECTIVE)/);
});

test("active content is rejected or rendered inert at the format boundary", () => {
  const hostileMarkdown = `# Hostile input\n\n<script>alert("x")</script>\n\n[bad](javascript:alert(1))\n\n![bad](data:text/html,<script>alert(1)</script>)`;
  const inert = renderLessonMarkdown(hostileMarkdown, renderContext());
  assert.doesNotMatch(inert, /<script>/i);
  assert.doesNotMatch(inert, /href="javascript:/i);
  assert.doesNotMatch(inert, /src="data:/i);
  assert.match(inert, /&lt;script&gt;/);

  assert.throws(
    () => renderLessonMarkdown(`# Unsafe math

{math}\`\\href{javascript:alert(1)}{x}\``, renderContext()),
    /Unsafe TeX command/
  );
  assert.throws(
    () => renderLessonMarkdown(`# Escape\n\n:::{figure} ../../../etc/passwd\n:alt: Attempted path escape.\n:::\n`, renderContext()),
    /escapes the lesson pack/
  );
  assert.throws(
    () => renderLessonMarkdown(`# Remote\n\n:::{diagram} https://example.com/graph.json\n:alt: Remote graph.\n:::\n`, renderContext()),
    /does not exist/
  );

  const temporaryPack = fs.mkdtempSync(path.join(os.tmpdir(), "embeddedknowledge-format-"));
  const outsideDirectory = fs.mkdtempSync(path.join(os.tmpdir(), "embeddedknowledge-outside-"));
  try {
    fs.mkdirSync(path.join(temporaryPack, "content"));
    fs.mkdirSync(path.join(temporaryPack, "diagrams"));
    const sourcePath = path.join(temporaryPack, "content", "scene.md");
    fs.writeFileSync(sourcePath, "# Temporary scene\n");
    fs.writeFileSync(path.join(temporaryPack, "diagrams", "hostile.diagram.json"), JSON.stringify({
      nodes: [
        { id: "node-a", label: "<img src=x onerror=alert(1)>", shape: "box" },
        { id: "node-b", label: "safe", shape: "box" }
      ],
      edges: [{ id: "edge-a", from: "node-a", to: "node-b", label: "<script>alert(1)</script>" }],
      alt: "Hostile labels are escaped.",
      longDescription: "The source includes markup-shaped labels that must remain inert text."
    }));
    const diagramHtml = renderLessonMarkdown(`# Diagram\n\n:::{diagram} ../diagrams/hostile.diagram.json\n:alt: Hostile labels are escaped.\n:longdesc: Markup-shaped labels remain visible as text and never become elements.\n:::\n`, renderContext(temporaryPack, sourcePath));
    assert.doesNotMatch(diagramHtml, /<img src=x/i);
    assert.doesNotMatch(diagramHtml, /<script>/i);
    assert.match(diagramHtml, /&lt;img src=x onerror=alert\(1\)&gt;/);
    assert.match(diagramHtml, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);

    const outsideDiagram = path.join(outsideDirectory, "outside.diagram.json");
    fs.writeFileSync(outsideDiagram, JSON.stringify({ nodes: [], edges: [] }));
    fs.symlinkSync(outsideDiagram, path.join(temporaryPack, "diagrams", "linked.diagram.json"));
    assert.throws(
      () => renderLessonMarkdown(`# Symlink\n\n:::{diagram} ../diagrams/linked.diagram.json\n:alt: Symlink boundary test.\n:longdesc: This source must be rejected because its symlink resolves outside the pack.\n:::\n`, renderContext(temporaryPack, sourcePath)),
      /resolves outside the lesson pack through a symbolic link/
    );
    assert.throws(
      () => copyLessonAssetTree(path.join(temporaryPack, "diagrams"), path.join(temporaryPack, "public-copy")),
      /asset trees may not contain symbolic links/
    );
    const linkedRoot = path.join(temporaryPack, "linked-root");
    fs.symlinkSync(outsideDirectory, linkedRoot);
    assert.throws(
      () => copyLessonAssetTree(linkedRoot, path.join(temporaryPack, "public-root-copy")),
      /asset roots may not be symbolic links/
    );
  } finally {
    fs.rmSync(temporaryPack, { recursive: true, force: true });
    fs.rmSync(outsideDirectory, { recursive: true, force: true });
  }
});

test("the specimen build remains explicitly outside production indexes and coverage", () => {
  runScript("build-lesson-index.mjs");
  runScript("build-lesson-specimen.mjs");
  runScript("build-premed-progress.mjs");

  const metadata = readJson(path.join(specimenPack, "lesson.json"));
  const specimen = readJson(specimenOutput);
  const index = readJson(path.join(root, "site", "data", "premed-lessons.json"));
  const progress = readJson(path.join(root, "site", "data", "premed-progress.json"));
  const pullRequests = readJson(path.join(root, "site", "data", "premed-open-prs.json"));

  assert.equal(specimen.nonProduction, true);
  assert.equal(specimen.countsTowardCoverage, false);
  assert.match(specimen.disclaimer, /never changes Premed coverage/i);
  assert.ok(!index.lessons.some((lesson) => lesson.dataUrl.endsWith("/specimen.json")));
  assert.ok(!index.lessons.some((lesson) => lesson.version === metadata.version && lesson.title === metadata.title));

  const openProposals = pullRequests.pullRequests.flatMap((pullRequest) => pullRequest.lessons);
  const publishedLessons = index.lessons.filter((lesson) => lesson.status === "published");
  const coveredOutcomeIds = index.outcomes
    .filter((outcome) => outcome.publishedLessonIds.length > 0)
    .map((outcome) => outcome.id);
  assert.equal(progress.lessons.contributed, index.lessons.length + openProposals.length);
  assert.equal(progress.lessons.inReview, openProposals.length);
  assert.equal(progress.lessons.publishedOpen, publishedLessons.length);
  assert.deepEqual(progress.outcomes.coveredOutcomeIds, coveredOutcomeIds);
  assert.equal(progress.outcomes.coveredByOpenLessons, coveredOutcomeIds.length);
});

test("scene evidence declarations, visible source notes, and publication state are enforced", () => {
  const lesson = {
    status: "draft",
    sourceConfidence: "pending-review",
    scenes: [
      { id: "scene-orientation", claimCoverage: "no-material-claims" },
      { id: "scene-concept", claimCoverage: "claims-mapped" }
    ]
  };
  const claims = {
    claims: [{
      id: "claim-model",
      sceneIds: ["scene-concept"],
      sourceIds: ["source-standard"],
      reviewStatus: "pending-review"
    }]
  };
  const references = { sources: [{ id: "source-standard" }] };
  const sourceNotes = [{
    sceneId: "scene-concept",
    claimIds: ["claim-model"],
    sourceIds: ["source-standard"],
    location: "content/02-concept.md:12"
  }];

  assert.deepEqual(validateLessonEvidenceContract({ lesson, claims, references, sourceNotes }), []);

  const withoutVisibleNote = validateLessonEvidenceContract({ lesson, claims, references, sourceNotes: [] });
  assert.ok(withoutVisibleNote.some((problem) => problem.includes("no learner-visible {source-note}")));
  assert.ok(withoutVisibleNote.some((problem) => problem.includes("does not expose mapped claim claim-model")));

  const incompleteNote = structuredClone(sourceNotes);
  incompleteNote[0].sourceIds = [];
  const incompleteProblems = validateLessonEvidenceContract({ lesson, claims, references, sourceNotes: incompleteNote });
  assert.ok(incompleteProblems.some((problem) => problem.includes("at least one :sources: ID")));
  assert.ok(incompleteProblems.some((problem) => problem.includes("omits source-standard")));

  const falseNoClaimsDeclaration = structuredClone(lesson);
  falseNoClaimsDeclaration.scenes[1].claimCoverage = "no-material-claims";
  assert.ok(validateLessonEvidenceContract({ lesson: falseNoClaimsDeclaration, claims, references, sourceNotes })
    .some((problem) => problem.includes("declares no-material-claims")));

  const publishedLesson = { ...lesson, status: "published" };
  const publicationProblems = validateLessonEvidenceContract({ lesson: publishedLesson, claims, references, sourceNotes });
  assert.ok(publicationProblems.some((problem) => problem.includes("must have reviewStatus reviewed")));
  assert.ok(publicationProblems.some((problem) => problem.includes("sourceConfidence must not be pending-review")));
});

test("expressive source reuse requires compatible rights and attribution", () => {
  const lesson = { thirdPartyAssets: [] };
  const references = {
    sources: [{
      id: "source-example",
      license: "CC BY 4.0",
      uses: [{ usageType: "adapted-expression", rightsBasis: "cc-by-4.0" }]
    }]
  };

  assert.deepEqual(validateLessonRightsContract({
    lesson,
    references,
    attribution: "Adapted from source-example under CC BY 4.0."
  }), []);

  const missingAttribution = validateLessonRightsContract({ lesson, references, attribution: "" });
  assert.ok(missingAttribution.some((problem) => problem.includes("must name source ID source-example")));

  const incompatible = structuredClone(references);
  incompatible.sources[0].license = "CC BY-NC-SA 4.0";
  assert.ok(validateLessonRightsContract({ lesson, references: incompatible, attribution: "source-example" })
    .some((problem) => problem.includes("does not record CC BY 4.0")));

  const badAsset = {
    thirdPartyAssets: [{ path: "assets/example.svg", modified: true, modifications: null }]
  };
  assert.ok(validateLessonRightsContract({ lesson: badAsset, references: { sources: [] }, attribution: "" })
    .some((problem) => problem.includes("has no modification notice")));
});
