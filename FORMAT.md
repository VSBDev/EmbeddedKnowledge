# EmbeddedKnowledge Lesson Format v1

**Status:** authoritative authoring and interchange contract
**Metadata discriminator:** `"schemaVersion": 3`, `"format": "embeddedknowledge-lesson-v1"`
**Applies to:** Premed lesson packs proposed under the contribution and review protocol

This document defines what a lesson pack is, how its files relate, and which content constructs are safe and portable. JSON carries identity, sequence, outcomes, claims, sources, assessments, and glossary data. Constrained MyST-compatible Markdown carries the teaching prose. Assets and diagrams are local, inspectable, and non-executable.

The format does not alter publication governance. A structurally valid pack is only a candidate. It becomes a published lesson only after the applicable independent review quorum, a separate adjudication, a merge decision, and protected-branch validation. Files under `examples/` are specimens and never count toward lesson coverage.

## 1. Canonical pack

The standard names below are recommended. `lesson.json` may point to other safe relative JSON or Markdown paths where the schema permits.

```text
lessons/PREM-CHE-001-short-slug/
  lesson.json
  assessment.json
  references.json
  claims.json
  glossary.json
  ATTRIBUTION.md
  content/
    01-orientation.md
    02-concept.md
    03-worked-example.md
    04-practice.md
  assets/
    local-static-image.svg
  diagrams/
    relationship.diagram.json
  reviews/
    *.json
  adjudication.json
```

`lesson.json` is the manifest and ordered table of contents. Scene Markdown has no front matter; duplicating metadata in prose creates drift. Review and adjudication artifacts remain governed by their existing schemas.

## 2. Metadata and scenes

The public schema is [`site/schemas/lesson.schema.json`](site/schemas/lesson.schema.json). Important fields are:

| Field | Contract |
|---|---|
| `id`, `version` | Stable lesson ID and semantic version |
| `status`, `riskTier` | Workflow state and applicable quorum tier |
| `outcomes`, `prerequisites` | Existing atomic graph topic IDs only |
| `objectives` | Observable statements, each mapped to declared lesson outcomes |
| `estimatedMinutes` | Exact sum of ordered scene estimates |
| `scenes` | At least four ordered semantic units |
| `scenes[].claimCoverage` | Explicitly `claims-mapped` or `no-material-claims` for every scene |
| `authors`, `aiAssistance` | Accountable principal and material agent provenance |
| `license`, `thirdPartyAssets` | Rights declaration; third-party assets remain explicit |
| `sourceConfidence` | Placement confidence, never a substitute for independent review |

Each scene is:

```json
{
  "id": "scene-concept",
  "title": "Proton transfer",
  "kind": "concept",
  "source": "content/02-concept.md",
  "estimatedMinutes": 20,
  "required": true,
  "claimCoverage": "claims-mapped"
}
```

Scene order is array order. Filenames help humans but do not establish order. Scene IDs are stable internal targets for claims, assessments, glossary entries, rendered navigation, and corrections.

The exact scene-kind vocabulary is:

- `orientation`
- `diagnostic`
- `concept`
- `definition`
- `derivation`
- `worked-example`
- `investigation`
- `retrieval-check`
- `misconception`
- `practice`
- `transfer`
- `synthesis`
- `assessment`
- `references`

Not every kind needs a separate scene. Scene boundaries should reflect a useful learner interaction or resumable unit, not force instructional obligations into artificial pages. A complete lesson must still include observable objectives, prerequisite guidance, explanation, a worked example, independent practice, retrieval, transfer, misconception handling, accessible equivalents, and recovery guidance. These may be represented by scene kinds, directives, assessment items, and named sections across the pack.

## 3. Constrained scene Markdown

Scene files use UTF-8 Markdown with a conservative MyST-compatible extension.

1. Begin with exactly one level-one heading.
2. Use headings only through level three.
3. Do not add YAML front matter.
4. Do not use raw HTML, inline styles, scripts, iframes, remote embeds, or Markdown image syntax.
5. Use ordinary paragraphs, lists, tables, emphasis, block quotes, and safe links.
6. External links must use HTTPS. Fragment and safe relative links are allowed.
7. Code fences are inert text and must declare one of `text`, `json`, `csv`, `python`, or `r`. A renderer must never execute them automatically.
8. Use the directives and inline roles below for semantic content.

### Directive whitelist

Only these colon-fenced directives are valid:

| Directive | Intended use |
|---|---|
| `{definition}` | A bounded term or relation definition |
| `{theorem}` | A named formal statement used by the lesson |
| `{derivation}` | Ordered symbolic reasoning with assumptions |
| `{worked-example}` | Fully reasoned model of a task |
| `{check}` | Diagnostic or retrieval prompt |
| `{misconception}` | Incorrect model, why it fails, and corrective test |
| `{investigation}` | Practical, simulation, dataset, or experimental inquiry |
| `{figure}` | Validated local static image |
| `{diagram}` | Validated local declarative diagram source |
| `{equation}` | Display mathematics |
| `{chemistry}` | Display chemical notation or reaction |
| `{source-note}` | Visible bridge from prose to claim and source IDs |
| `{callout}` | Bounded note such as a safety, accessibility, boundary, or recovery message |

Directive syntax is deliberately small:

```md
:::{worked-example}
:id: worked-example-conjugate-pairs

Reasoned content goes here.
:::
```

The available option names are `id`, `label`, `kind`, `alt`, `longdesc`, `claims`, and `sources`. Directives may not nest in format v1. Renderers must escape directive content before applying trusted templates.

The inline roles ``{math}`...` `` and ``{chem}`...` `` are accepted for short expressions; `$...$` is also accepted as familiar inline TeX. Use `{equation}` or `{chemistry}` for display content so labels and semantic intent remain explicit. Unlabelled `$$...$$` is compatible input, but the directive form is preferred.

## 4. Mathematics and chemistry

Math is a constrained TeX payload. Chemistry uses `\ce{...}` within an inline `{chem}` role or display `{chemistry}` directive. The current specimen build compiles both to MathML with a pinned Temml renderer; another implementation may use an equivalently bounded renderer without changing the canonical source.

```md
The pair differs by {chem}`H+`.

:::{equation}
:label: equation-buffer-response

A^- + H^+ \rightarrow HA
:::
```

The source is always preserved as text. A non-math reading path must express the same relationship in prose. Rendering may improve presentation but must not change meaning.

The validator rejects TeX commands that define macros, read or write files, load packages or resources, create HTML/classes/styles, or create links. This includes command families such as `\input`, `\include`, `\write`, `\newcommand`, `\href`, `\url`, `\html`, and `\require`. Math and chemistry never execute code or load remote resources.

## 5. Figures and diagrams

### Static figures

Images must be pack-local `.png`, `.jpg`, `.jpeg`, `.webp`, `.avif`, or sanitized `.svg` files and must use a `{figure}` directive:

```md
:::{figure} ../assets/conjugate-pairs.svg
:alt: Acetate and acetic acid form one pair; water and hydroxide form the other.
:longdesc: Two labelled relationships show that each conjugate pair differs by one proton, including the donor and acceptor roles.
:::
```

Both `alt` and `longdesc` are required. The long description must preserve the relationship or evidence carried by the visual, not merely describe its appearance. Unique information may not depend only on color, animation, hover, drag, audio, or spatial position.

SVG is treated as untrusted input. Validation requires internal `<title>` and `<desc>` elements and rejects scripts, event handlers, stylesheets, external references, embedded HTML/media, `data:` or `javascript:` URLs, entities, and resource-loading constructs. Renderers should sanitize again at the output boundary.

### Declarative diagrams

Diagram source uses [`site/schemas/diagram.schema.json`](site/schemas/diagram.schema.json). It supports bounded flow, concept-map, process, cycle, and timeline structures with labelled nodes and edges.

```md
:::{diagram} ../diagrams/model-scope.diagram.json
:alt: Proton-transfer cases are a subset of the broader electron-pair model.
:longdesc: The diagram connects a Brønsted–Lowry proton-transfer node to a broader Lewis donor-and-acceptor node and then to a model-choice question.
:::
```

The JSON source and its long description are canonical. Mermaid, DOT, Vega-Lite, canvas, SVG, or another presentation can be derived later, but those languages are not accepted as canonical lesson diagram source in format v1. Layout engines must not be allowed to fetch URLs or emit active markup.

## 6. Claims and sources

Academic prose does not become traceable merely because a bibliography exists. Format v1 separates a source registry from a claim ledger:

- [`references.schema.json`](site/schemas/references.schema.json) v2 records stable source IDs, source type, title, creators, publisher, issued/version information, exact HTTPS URL, retrieval date, locator, displayed license, each use and rights basis, rights evidence, and dated agent-access status.
- [`claims.schema.json`](site/schemas/claims.schema.json) records the claim statement, scenes where it appears, sources supporting it, direct/synthesis/context/inference status, confidence, scope, uncertainty, risk, and review status.

Every scene must declare one of two evidence states:

- `claims-mapped` means the scene contains one or more material teaching claims. Every claim mapped to that scene in `claims.json` must appear in a learner-visible `{source-note}` in the same scene, and that note must list every source supporting its named claims.
- `no-material-claims` means the scene contains orientation, instructions, reflection, navigation, or another activity with no factual, quantitative, definitional, causal, or evidence-dependent teaching claim. The validator rejects this declaration when any claim maps to the scene or the scene contains a source note.

Every claim must reference valid scene and source IDs. Source notes are required evidence bridges rather than optional bibliography decoration:

```md
:::{source-note}
:claims: claim-bronsted-model
:sources: source-openstax-chemistry, source-iupac-gold-book

These sources support the bounded definitions used above.
:::
```

Listing a source does not grant reuse rights. Follow [`RIGHTS-POLICY.md`](RIGHTS-POLICY.md): default to facts-only research and an independently created instructional structure and expression; do not closely paraphrase. Any quotation, adaptation, media redistribution, or dataset extraction must use a permitted recorded basis. Agent-access terms are checked separately, and an authoring agent may not process a `human-only` source. `confidence: high` means strong support within the stated scope; it does not mean universal applicability, clinical authority, or exemption from review.

A `published` lesson may contain only claims whose `reviewStatus` is `reviewed`, and its lesson-level `sourceConfidence` may not remain `pending-review`. Authors keep both states pending during drafting; independent review and final adjudication determine whether publication is justified.

Health-sensitive and safety-critical claims must be labelled in `claims.json`. Existing risk-tier, review-quorum, correction, and adjudication rules continue to govern them.

## 7. Assessments and glossary

[`assessment.schema.json`](site/schemas/assessment.schema.json) requires:

- a retakeable attempt policy;
- item-to-scene, objective, and graph-outcome mappings;
- a machine-readable response specification;
- the correct response, answer reasoning, acceptable variants, and common errors;
- a rubric reference and explicit safety-critical flag;
- rubric criteria with point values.

Answer logic is part of the open lesson pack. A learner interface may withhold it until an attempt, but it must not delete it from the canonical corpus. Timed attempts are optional; no assessment can disable retakes.

[`glossary.schema.json`](site/schemas/glossary.schema.json) gives each term a stable local ID, definition, aliases, and scene references. Glossary definitions should state the sense used in the lesson, not pretend to replace broader disciplinary usage.

## 8. Accessibility, recovery, and safety

Accessibility and recovery are lesson-wide obligations, not mandatory scene types. Validators require an explicit `Accessibility and alternatives` section or equivalent accessibility callout and an explicit `Recovery route` section or equivalent recovery callout somewhere in the scene sequence.

A valid alternative preserves the learning operation. For example:

- a nonvisual diagram alternative states nodes, relationships, direction, and conclusion;
- a chemical equation is also explained in words;
- audio has a transcript and does not carry unique assessment information;
- a drag interaction has an equivalent keyboard and non-drag response;
- personal physiology, disability, medication, diagnosis, or other health data is never required;
- a simulation or supplied dataset remains available without penalty where physical practical work is unsuitable.

Lessons must state educational and medical boundaries where context could be mistaken for advice. No scene, asset, assessment, or investigation may direct diagnosis, treatment, unsafe home experimentation, pathogen culture, ingestion, personal medical testing, or circumvention of supervision.

## 9. Security boundary

All lesson contributions are untrusted until validated and reviewed.

- Paths are relative, may not traverse outside their pack, and may not use backslashes or absolute paths.
- Raw HTML and Markdown images are rejected.
- Only HTTPS external links are accepted.
- Remote images, scripts, frames, styles, fonts, media, and data URLs are rejected.
- Canonical diagrams are bounded JSON, not executable graph languages.
- Markdown code fences are displayed only; no renderer or export step may execute them.
- SVG and math are checked on input and must be sanitized again on output.
- Generated HTML must escape prose and option values and render only through trusted component templates.
- Renderers should apply a restrictive Content Security Policy and never use lesson content as JavaScript, CSS, an event handler, or unsanitized `innerHTML`.

Validation is necessary, not sufficient. Reviewers remain responsible for unsafe instructions, misleading health framing, inaccessible equivalence, licensing, and academically harmful omissions that syntax cannot detect.

## 10. Deterministic validation

`scripts/validate-lessons.mjs` validates production packs and the non-production specimen. It checks:

- all JSON Schemas;
- graph outcome mappings;
- safe in-pack files;
- unique scene, objective, source, claim, item, rubric, glossary, diagram-node, and diagram-edge IDs;
- exact scene-minute totals;
- artifact identity against lesson ID and version;
- assessment links to scenes, objectives, outcomes, rubrics, options, and answer logic;
- claim-to-scene and claim-to-source integrity;
- scene evidence declarations, same-scene learner-visible source notes, and complete claim-to-note source coverage;
- reviewed-only claims and resolved source confidence for published lessons;
- source-use, rights-basis/evidence, and dated agent-access declarations;
- compatible third-party asset identity, rights evidence, attribution, and modification records;
- glossary-to-scene integrity;
- scene Markdown headings, links, roles, directives, code fences, and required lesson-wide features;
- figure accessibility and SVG safety;
- diagram schema and edge endpoints;
- math and chemistry command restrictions;
- existing review, isolated-run quorum, provenance, and adjudication invariants for production packs.

Run:

```text
npm run agent:validate
npm run validate
```

The reference fixture is [`examples/lesson-pack/`](examples/lesson-pack/). It must remain `draft`, version `0.0.0`, under `examples/`. The validator reports it separately, while production indexes and progress builders scan only `lessons/`.

## 11. Public rendered data

A renderer should preserve the machine-readable order and provenance rather than flattening a lesson into one opaque HTML string. The recommended detail payload is:

```json
{
  "schemaVersion": 3,
  "format": "embeddedknowledge-lesson-v1",
  "id": "PREM-CHE-001",
  "version": "0.1.0",
  "title": "Acid–base models",
  "outcomes": [],
  "prerequisites": [],
  "objectives": [],
  "scenes": [
    {
      "id": "scene-concept",
      "title": "Proton transfer",
      "kind": "concept",
      "estimatedMinutes": 20,
      "required": true,
      "claimCoverage": "claims-mapped",
      "source": "content/02-concept.md",
      "contentHtml": "...sanitized output..."
    }
  ],
  "assessment": {},
  "references": {},
  "claims": {},
  "glossary": {},
  "attributionHtml": "...sanitized output..."
}
```

Index payloads may omit scene bodies. Exports should include original scene Markdown and JSON artifacts alongside derived HTML so another implementation can audit, rerender, or transform the lesson without scraping presentation markup. Rendered output is a derivative cache; the reviewed pack remains authoritative.
