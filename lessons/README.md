# EmbeddedKnowledge Lesson Format v1

This directory is the production namespace for reviewed EmbeddedKnowledge lesson packs. There are currently **0 contributed lessons and 0 published lessons**. The specimen under `examples/lesson-pack/` demonstrates the format, but it is not a contribution, does not enter review quorum, and never counts toward course coverage.

Read `AGENTS.md`, `CONTRIBUTING.md`, [`CONTENT-STANDARD.md`](../CONTENT-STANDARD.md), [`RIGHTS-POLICY.md`](../RIGHTS-POLICY.md), and `COLLABORATION.md` before preparing a lesson. The content standard defines what the teaching must do; the rights policy defines what source access and reuse are allowed. The public JSON Schemas remain the machine-enforced interface; this guide defines the pack, authoring, and rendering contract those artifacts express.

## 1. Canonical authoring stack

`EmbeddedKnowledge Lesson Format v1` is:

- constrained MyST-compatible Markdown, using a CommonMark/GFM base and a documented whitelist of colon-fence directives;
- one ordered Markdown file per semantic lesson scene, with no raw HTML or JavaScript;
- JSON Schema-validated metadata, assessment, claim mapping, references, and glossary data;
- TeX math authored with `$...$` and `$$...$$`, plus `\ce{...}` for chemical formulae and equations;
- schema-valid `*.diagram.json` for bounded processes and networks, plus sanitized SVG for scientific illustration;
- structured chemical source such as SMILES, InChI, Mol, or SDF when molecular identity or structure matters;
- a deterministic compiler target that emits a versioned JSON AST and semantic HTML for the custom lesson application;
- planned export adapters for PDF, EPUB, DOCX, and JATS, with Typst first for PDF and LuaLaTeX as the fallback.

Markdown and structured source are canonical. Generated HTML, MathML, SVG, PDF, EPUB, DOCX, JATS, thumbnails, and lesson-index data are build artifacts. Contributors do not hand-edit generated outputs.

**Implementation status.** The v1 source/schema validator, deterministic web compiler, and browser reader are implemented. The repository intentionally implements the documented MyST-compatible subset, not arbitrary MyST extensions. Typst/LuaLaTeX PDF and EPUB/DOCX/JATS adapters remain unavailable interoperability targets until deterministic checks for them land.

## 2. Production pack

One lesson pull request introduces or materially revises one directory:

```text
lessons/
  PREM-CHE-001-acid-base-models/
    lesson.json
    content/
      010-orientation.md
      020-diagnostic.md
      030-concept.md
      040-worked-example.md
      050-retrieval-check.md
      060-misconception.md
      070-practice.md
      080-transfer.md
      090-synthesis.md
      100-references.md
    assessment.json
    references.json
    claims.json
    glossary.json
    diagrams/
      process.diagram.json
    assets/
      images/
      molecules/
      data/
      transcripts/
    ATTRIBUTION.md
    reviews/
      academic-01.json
      learning-design.json
      accessibility-rights.json
    adjudication.json
```

This tree demonstrates available artifact and scene kinds; it is not a lesson template to copy line for line. A real lesson uses the smallest set of scenes that gives its outcome a coherent explanation, practice, assessment, and recovery path. Several instructional functions may share one scene, and unused scene kinds should be omitted.

The scene filenames under `content/` are descriptive and prefixed with sortable numbers. The authoritative order, identity, and kind live in the `scenes` array in `lesson.json`; directory order is only a human convenience. Use forward-slash relative paths contained within the pack. A pack may omit scene kinds that do not serve its outcomes, but it must satisfy the lesson must-haves in section 5.

`lesson.json` declares format/version, lesson identity/version/status/risk, graph outcomes and prerequisites, duration, authorship and agent provenance, ordered scenes, files, source confidence, CC BY 4.0 licensing, and third-party assets. Lesson Format v1 currently uses lesson schema v3. Follow the current public lesson schema exactly; do not add private conventions that other renderers cannot discover.

## 3. Semantic scenes

A scene is a bounded instructional purpose, not a slide and not an arbitrary page break. One scene should remain understandable when rendered alone, link its prerequisites or prior scene where needed, and fit an adaptive view without relying on a fixed screen size.

| Scene kind | Purpose | Minimum authoring expectation |
|---|---|---|
| `orientation` | Establish relevance, scope, outcomes, route, and boundaries | Start with a concrete reason to care and the progress learners will make; add exclusions or boundaries afterward only when they affect safe or correct use. |
| `diagnostic` | Surface prerequisite knowledge before instruction | Use ungraded questions with routing feedback; never treat placement as failure. |
| `concept` | Build an explanatory model | Connect representations, evidence, assumptions, and limits rather than listing facts. |
| `definition` | Establish precise language or notation | Give term, meaning, conditions, non-examples, and linked glossary ID. |
| `derivation` | Show how a result follows | Expose each justified step, assumptions, units, and interpretation. |
| `worked-example` | Model expert problem solving | Include problem representation, plan, execution, checks, and reflection—not answer-only arithmetic. |
| `investigation` | Ask or analyze an empirical question | State variables, controls, method/data, safety/ethics, uncertainty, and valid conclusion. |
| `retrieval-check` | Recall or discriminate before seeing feedback | Keep it low stakes; provide answer logic and schedule later retrieval. |
| `misconception` | Make a high-value wrong model visible and repairable | Elicit a prediction, provide disconfirming evidence, reconstruct the correct model, and test the repair. |
| `practice` | Build independent, varied performance | Fade hints, vary surface form, include feedback and a next-step route. |
| `transfer` | Apply learning in an unfamiliar bounded context | Require selection and adaptation of the model; do not merely change numbers. |
| `synthesis` | Connect scenes, outcomes, or domains | Produce a concept/causal map, comparative explanation, or cumulative model. |
| `assessment` | Collect declared mastery evidence | Identify assessed outcome, conditions, rubric/answer logic, and remediation route in `assessment.json`. |
| `references` | Expose sources, claim support, rights, and further reading | Render traceable records from `references.json` and `claims.json`; do not maintain an unlinked duplicate list. |

Scene order follows learning logic, not the table order. For example, a diagnostic may precede orientation in a short placement pack, investigations can motivate concepts, and retrieval checks should recur after spacing.

### Scene source rules

- Begin with one level-one scene title; use descending headings without skipped levels inside the file.
- Write semantic prose, lists, tables, links, code literals, TeX, and approved directives only.
- Keep outcome-relevant explanation in the source. CSS, generated images, hover states, and speaker notes may not contain the only copy of essential content.
- Use stable graph outcome IDs and glossary/reference/claim IDs in metadata and machine links. In learner prose, prefer descriptive names and ordinary transitions; do not expose internal identity machinery unless the outcome teaches it.
- Set `claimCoverage` on every scene. Use `claims-mapped` when it contains any material teaching claim and `no-material-claims` only for a scene whose content is genuinely instructional routing, reflection, or other non-evidentiary activity.
- In every `claims-mapped` scene, expose each mapped claim through a learner-visible `{source-note}` that lists all source IDs attached to its named claims.
- Do not encode absolute viewport dimensions, body scroll behavior, pagination, or desktop-only layout in a scene.
- Keep practice prompts separate from answer logic. A scene can point to assessment item IDs; it must not leak hidden answers into the learner payload.

## 4. Approved Markdown and directives

The base syntax is CommonMark/GFM: headings, paragraphs, emphasis, lists, block quotes, fenced code shown as inert text, tables, thematic breaks, and links. **Markdown image syntax is rejected** (see `FORMAT.md` sections 4 and 12); use the `{figure}` directive, which carries the required alt text and rights metadata. MyST-style colon fences add semantics without admitting raw HTML.

The v1 directive whitelist is:

| Directive | Use |
|---|---|
| `definition` | Term linked to `glossary.json` |
| `theorem` | Named proposition, conditions, and scope where theorem-style treatment is appropriate |
| `derivation` | Stepwise justification linked to declared assumptions and symbols |
| `worked-example` | Worked reasoning block inside a broader scene |
| `check` | Formative prompt linked to answer logic or feedback ID |
| `misconception` | Wrong-model elicitation, disconfirming evidence, repair, and recheck |
| `investigation` | Method, data, or inquiry block linked to its safety/ethics record |
| `figure` | Local image or generated visual plus caption, alt text, and optional long description |
| `diagram` | Schema-valid `*.diagram.json` source plus accessible equivalent |
| `equation` | Named display equation plus prose reading when the expression is not self-explanatory |
| `chemistry` | Chemical equation, mechanism, or structured molecule reference plus text alternative |
| `source-note` | Evidence scope, source IDs, uncertainty, or rights note linked to structured records |
| `callout` | Bounded note, tip, warning, objective, transcript, or other declared callout variant |

Example shape:

```md
:::{figure} ../assets/images/buffer-capacity.svg
:alt: Two titration curves with the buffer region highlighted.
:longdesc: The first titration curve stays comparatively flat through the marked buffer region, while the second changes steeply over the same added volume.
:label: fig-buffer-capacity

Buffer capacity is greatest where the curve changes least for an added amount of strong acid or base.
:::
```

The v1 directive-option whitelist is `id`, `label`, `kind`, `alt`, `longdesc`, `claims`, and `sources`. Options are data, not executable attributes. Use only combinations accepted by the format validator. Unknown directives or options, raw HTML, custom components, inline styles, event handlers, iframes, and embedded scripts are rejected.

## 5. Lesson must-haves

A standard lesson is content-complete before review only when it passes the learning-quality gates in [`CONTENT-STANDARD.md`](../CONTENT-STANDARD.md) and contains all applicable evidence below:

1. **Human first read:** a cold reader at the declared level can say what the lesson teaches, why it matters, and how its central idea works without consulting metadata, ledgers, or hidden project vocabulary.
2. **Identity and scope:** valid lesson/version IDs, selected atomic graph outcomes, prerequisites, level, estimated time, material exclusions, and route status.
3. **Observable objectives:** each objective maps to a graph outcome and at least one assessment item.
4. **Prerequisite route:** a diagnostic or explicit verification path, plus recovery links for missing dependencies.
5. **Explanatory model:** a coherent causal, relational, or procedural argument at the declared depth, with stable terminology, explicit inference links, consistent representations, assumptions, evidence, and limits.
6. **Worked reasoning:** at least one worked example or derivation that exposes task representation, model selection, plan, reasons, execution, verification, and interpretation, followed by a route that fades support.
7. **Retrieval:** a prompt presented before answer reveal, with reasoning-rich feedback and delayed/cumulative retrieval mapping.
8. **Misconception repair:** at least one evidence-backed misconception, non-example, or boundary case chosen for the mapped outcomes.
9. **Practice:** varied independent practice with fading support, feedback that diagnoses reasoning and prescribes a next step, retry, and actionable remediation.
10. **Transfer:** a novel bounded task requiring model selection or cross-context reasoning.
11. **Assessment:** item-to-outcome map, conditions, answer logic, misconception-sensitive feedback, analytic rubric where appropriate, equivalent retry form/strategy, and remediation route.
12. **Claims and sources:** explicit scene coverage; material factual claims mapped in `claims.json` to complete reference records; a same-scene learner-visible `{source-note}` with every supporting source ID; exact source scope, confidence/uncertainty, review state, and retrieval/version data.
13. **Glossary:** stable definitions for introduced technical terms, symbols, abbreviations, and ambiguous everyday words.
14. **Accessibility:** meaningful structure; equivalents for visuals, audio, interactions, and practical modalities; no color-, sound-, motion-, hover-, pointer-, or time-only information.
15. **Rights and provenance:** CC BY 4.0 contributor grant, complete third-party asset records, attribution, modification notices, and accountable agent disclosure.
16. **Boundaries and safety:** no clinical advice or credential claim; investigation risks, privacy, consent, and non-physical alternatives addressed when relevant.
17. **Export parity:** essential content and relationships survive semantic HTML, JSON AST, PDF, EPUB, DOCX, and JATS transforms.

A references-only reading list, a narrated deck, a question bank without instruction, or a long essay divided into screens is not a lesson pack.

## 6. Mathematics

- Author inline TeX as `$...$` and display TeX as `$$...$$`.
- Use semantic commands and conventional notation; declare symbols before use and preserve units.
- Keep TeX to the supported math subset. File inclusion, shell escape, macro redefinition with side effects, raw backend commands, and package loading are forbidden.
- Put long derivations in a `derivation` scene and expose intermediate logic. Do not replace reasoning with a screenshot of equations.
- Give important displayed equations a label and a plain-language interpretation. Complex expressions need a prose reading or structured alternative sufficient for nonvisual navigation.
- The compiler target is accessible MathML with an HTML fallback. Until that path is implemented and validated, the specimen must not imply that mathematical accessibility is complete. TeX source remains available for copying and future export.
- Verify line breaking and numbering in the SPA and PDF paths; no result may depend on visual alignment alone.

## 7. Chemistry

- Use `\ce{...}` for formulae and chemical equations within the supported TeX chemistry subset.
- Balance reactions, show charge and physical state where material, define conditions, and distinguish equilibrium arrows from one-way transformations.
- A molecular diagram that carries identity must have structured source. Use canonical/isomeric SMILES as appropriate, InChI for identity, and Mol/SDF when coordinates, atom mapping, stereochemistry, or a reusable structure record matter.
- Commit structured molecular source and a generated SVG depiction. The SVG is a view, not the sole record.
- State stereochemistry explicitly and check that text, structured source, and drawing agree.
- Reaction mechanisms need ordered steps, electron-flow meaning in text, reagents/conditions, and an accessible long description. A raster arrow diagram alone is insufficient.
- Do not make clinical efficacy, toxicity, handling, or treatment claims from chemical plausibility alone.

## 8. Diagrams, charts, images, audio, and video

Choose the simplest inspectable source that fits the relationship:

| Need | Canonical source | Required equivalent |
|---|---|---|
| Simple sequence, state, process, or bounded network | `*.diagram.json` | ordered relationship list or long description |
| Quantitative chart | Local CSV/JSON data plus a reviewed static SVG in v1 | accessible data table and interpretation |
| Scientific illustration/anatomy | sanitized SVG, with editable source when available | concise alt text plus linked long description |
| Photograph/micrograph | local lossless/high-quality raster plus provenance | alt text, scale/orientation/stain/context where relevant |
| Animation | declarative frames/data | transcript or stepwise static equivalent; pause/restart controls |
| Audio/video | local or approved hosted media with provenance | synchronized captions and complete transcript |

Visual source and input data are committed with the pack. Generated SVGs must contain no script, event handler, foreign object, remote resource, or external font dependency. Text in diagrams must remain legible at 200% zoom and in reflow. Color is never the only encoding; palettes must retain contrast in common color-vision deficiencies. Decorative images use empty alt text and are not cited as evidence.

The author supplies the intended meaning, not a pixel inventory. Alt text identifies the visual and its purpose; a long description explains relationships, data, trends, labels, and uncertainty needed to achieve the same outcome. Charts also ship the underlying accessible table.

## 9. Claims, references, and glossary

`references.json` schema v2 holds stable bibliographic records plus each use type, rights basis and evidence, and dated agent-access state. `claims.json` links material claims to one or more reference IDs and records scene IDs, support type, confidence, scope, uncertainty, risk, and review state. Exact version, page, section, table, or figure location belongs in the source record's locator. `glossary.json` gives stable term IDs, labels, definitions, aliases, and linked scene IDs; symbols and abbreviations are recorded as term entries when they need definitions.

A material claim is a factual, quantitative, definitional, causal, mechanistic, safety, health, standards, or evidence-dependent statement that the learner is expected to accept or use. Objectives, interface instructions, reflection prompts, and author-created practice directions are usually not material claims unless they also teach such a statement. Repeating or applying a material claim in another scene still requires that scene to map and visibly cite it. A lesson-wide bibliography does not satisfy this contract.

Source expectations:

- prefer primary standards, official specifications, peer-reviewed research, and versioned scholarly/open textbooks for the claim they can actually support;
- distinguish a source used as evidence from suggested further reading;
- cite mutable sources with retrieval date and exact version/date; include DOI or durable identifier where available;
- preserve jurisdiction, population, model, and uncertainty limits;
- never cite an AI response as authority or invent a bibliographic record from a plausible title;
- independently synthesize facts in original language, organization, examples, questions, and visuals; do not closely paraphrase or lightly redraw a source;
- reuse expression, media, or datasets only under a permitted basis in `RIGHTS-POLICY.md`, and record it separately from academic citation;
- check source terms before agent access and never let an agent process a source recorded as `human-only`;
- check that every cited URL/identifier resolves and that the source supports the attached claim before review.
- keep authoring claims at `pending-review` in the frozen candidate; after exact-candidate quorum and merge adjudication, promote only retained claims' `reviewStatus` fields and permitted lesson status/source-confidence fields. Publication requires every retained claim to be `reviewed` and lesson source confidence to be resolved.

References are rendered from structured records. A hand-maintained prose bibliography may add context but cannot replace `references.json` and `claims.json`.

## 10. Accessibility and adaptive presentation

The source order is the reading and focus order. Scenes must work with keyboard-only navigation, screen readers, zoom/reflow, reduced motion, and touch without changing the assessed outcome.

The lesson application uses a no-body-scroll desktop shell so navigation and progress remain stable while the active scene owns bounded overflow. That is a renderer behavior, not an authoring assumption. On narrow screens, zoomed views, print, and assistive layouts, scenes reflow into ordinary document flow. Authors must not use fixed-height content, desktop coordinates, hover-only disclosure, drag-only input, or wording such as “the diagram on the right” as the sole locator.

Every interaction needs a visible label, keyboard operation, persistent or repeatable instructions, programmatic status/feedback, and a non-timed route unless timing is the declared construct. Captions, transcripts, long descriptions, tables, and simulation/dataset alternatives must be outcome-equivalent. Accommodation changes the medium or route, not the scientific standard; the record must not claim a physical skill when only a simulation was completed.

## 11. Build and export contract

The normative compiler parses trusted, validated source into a versioned JSON AST. Renderers are designed to consume that AST to produce:

- sanitized semantic HTML and accessible MathML for the custom SPA;
- deterministic visual assets derived from validated diagram JSON, local data, and structured chemistry sources;
- PDF through Typst first, with LuaLaTeX as the compatibility fallback;
- EPUB for reflowable reading;
- DOCX for institutional editing/review workflows;
- JATS for archival and scholarly interchange.

Export adapters may simplify an interaction, but they must preserve the prompt, data, answer conditions, feedback location, semantic relationships, citations, glossary links, visual equivalents, and source attribution. Unsupported output is a build failure or an explicit, reviewed degradation notice—not silent omission.

At v1 adoption, the source/schema contract, deterministic web compiler, and browser reader are implemented. The non-web adapters above are planned and unavailable until repository checks demonstrate otherwise.

The current browser specimen uses the safe `diagrams/*.diagram.json` schema for a small process diagram. Mermaid, DOT, and Vega-Lite may be added later as generated adapters, but they are not accepted as canonical lesson inputs until bounded validators and deterministic renderers exist.

## 12. Security and privacy

Lesson content is data and is never executable.

- Raw HTML, JavaScript, CSS, web components, iframes, event handlers, executable notebooks, macros, plugins, and remote embeds are forbidden in lesson source.
- Code fences are inert instructional text. Repository automation must never run code from an untrusted lesson pull request.
- Diagram JSON, TeX, chemistry, local data, and SVG inputs are parsed with pinned toolchains, strict feature allowlists, resource/time limits, no shell escape, no arbitrary file reads, and no network access.
- Builds resolve only normalized paths inside the lesson pack. Path traversal, symlink escape, data URLs, and unsafe URL schemes are rejected.
- External links are sanitized and rendered with safe opener/referrer behavior. Third-party assets are downloaded only through a separate, reviewed provenance workflow—not by the lesson renderer.
- SVGs are sanitized; raster metadata is stripped when it can expose location/device data; secrets and contributor-private data never enter assets or scenes.
- Personal medical information, identifiable learner data, credentials, API keys, copyrighted answer banks, and unlicensed patient media are prohibited.
- Assessments delivered to learners separate hidden answer logic from public prompts and do not trust the client for authoritative scoring or credential claims.

Validation and rendering do not establish factual correctness. Academic, learning-design, accessibility/rights reviews and separate adjudication remain required.

## 13. Specimen versus contribution

`examples/lesson-pack/` is the gold-standard **format specimen**. It may demonstrate every scene kind, source adapter, accessibility alternative, claim map, and export fixture. It is deliberately excluded from:

- the `lessons/` production namespace;
- open pull-request and merged-lesson indexes;
- review or adjudication counts;
- covered-outcome and progress totals;
- claims that Premed has a published lesson.

A contributed lesson lives under `lessons/` or in an open pull request proposing that path, maps to real graph outcomes, and follows the governance protocol. It becomes `published open` only after validation, independent quorum, separate adjudication, merge, public availability, and confirmed CC BY 4.0 status. Copying the specimen into `lessons/` does not confer review or publication state.

## 14. Author preflight

Before requesting review:

- [ ] Read the current schema and quorum policy; build against their version.
- [ ] Complete the learner/outcome authoring brief and every applicable acceptance gate in `CONTENT-STANDARD.md`.
- [ ] Prototype the opening, central explanation, and one worked use; pass the first-read gate before completing the pack.
- [ ] Confirm every outcome and prerequisite ID exists in the current graph.
- [ ] Validate scene order, kinds, links, directives, math, chemistry, structured visuals, and pack-local paths.
- [ ] Check all lesson must-haves and item-to-outcome mappings.
- [ ] Resolve every claim ID to a supporting reference and every glossary use to a term record.
- [ ] Run accessibility checks on semantic HTML and export fixtures, including keyboard, screen reader, reflow, contrast, captions, MathML, and long descriptions.
- [ ] Confirm rights and attribution for every asset and dataset.
- [ ] Confirm no executable content, raw HTML, unsafe SVG, remote embed, secret, personal data, or unapproved experiment appears.
- [ ] Disclose accountable principals and material agent provenance.
- [ ] Run `npm ci`, `npm run source:preflight -- --strict lessons/<lesson-pack>`, and `npm run verify` sequentially.
- [ ] Freeze one candidate commit before collecting review artifacts.

The review record determines whether the pack is fit to merge. The specimen and automated checks are necessary implementation references, not substitutes for independent judgment.
