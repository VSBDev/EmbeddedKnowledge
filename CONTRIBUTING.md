# Contributing to EmbeddedKnowledge

Contribution intake is not open. The public repository is in its founding stage while the reference lesson workflow, reviewer ownership, and end-to-end pull-request gates are proven. This document defines the v1 pull-request contract for agents, contributors, reviewers, adjudicators, and maintainers.

## The interface is a pull request

Pull requests are the only write path. `llms.txt`, JSON Schemas, WebMCP tools, and the website are discovery and validation surfaces; none can merge or publish content.

For a lesson contribution:

1. Load [`.agents/skills/author-embeddedknowledge-lesson/SKILL.md`](.agents/skills/author-embeddedknowledge-lesson/SKILL.md) or follow its public raw equivalent, then select uncovered atomic outcomes from `site/data/premed-graph.json` and `site/data/premed-progress.json`.
2. Read [`CONTENT-STANDARD.md`](CONTENT-STANDARD.md) and [`RIGHTS-POLICY.md`](RIGHTS-POLICY.md), design the lesson, and draft only its learner-facing opening, central explanation, and one worked use. Pass the standard's first-read gate before expanding that voice into a full pack. A developmental reader-proxy sees only the declared learner, outcome, and prose; it creates no governance artifact and cannot count as a formal review run.
3. Create one Lesson Format v1 pack under `lessons/` using the current public schemas and [`lessons/README.md`](lessons/README.md). Add the smallest coherent set of ordered scenes, explicit per-scene claim coverage, learner-visible claim-to-source notes, assessment logic, references, glossary, accessible assets, attribution, and agent disclosure. Do not manufacture one scene per rubric item.
4. Complete the author audit and batch its repairs. Run the strict offline source-access preflight, then the sequential verifier once the candidate is stable: `npm run source:preflight -- --strict lessons/<pack>` followed by `npm run verify`. Do not run `npm run validate` and `npm test` concurrently in one worktree because both rebuild shared generated fixtures.
5. Open a draft pull request using the lesson template. A green `lesson-candidate` check means the draft candidate and any artifacts already present are valid; it does not create the protected `agent-protocol` context and does not mean the lesson has quorum or is merge-ready.
6. Freeze one candidate commit, then launch the complete required review cohort in parallel against exactly that commit. Wait for every role before editing; do not react to the first returned review while other reviewers are still inspecting the old candidate.
7. If any role requests changes, consolidate all current-cohort findings into one author revision, create a new lesson version and candidate commit, and launch one fresh parallel cohort. Never collect a rolling mixture of approvals against successive commits. Generate each exact GitHub body with `npm run review:prepare`, submit and verify the GitHub review first, then commit the equivalent artifact.
8. After one cohort approves, a fresh adjudication agent run writes `adjudication.json`, recording the quorum, reasoning, dissent, conditions, and decision.
9. Commit the adjudication with the lesson, make only its authorized publication-state transition, and rerun `npm run verify` sequentially.
10. Mark the pull request ready for review. That lifecycle event reruns the required `agent-protocol` check with full publication readiness enforced; protected-branch checks decide whether merge is permitted.

Use the matching role-isolated skill for each academic, learning-design, accessibility-and-rights, and adjudication run. A skill is a procedure, not a vote: review eligibility still depends on the frozen commit, artifact schema, disclosed provenance, GitHub submission, quorum policy, and deterministic checks.

## Lesson Format v1 authoring contract

Lesson source is constrained MyST-compatible Markdown: CommonMark/GFM plus the documented declarative directives. The 14 allowed scene kinds are `orientation`, `diagnostic`, `concept`, `definition`, `derivation`, `worked-example`, `investigation`, `retrieval-check`, `misconception`, `practice`, `transfer`, `synthesis`, `assessment`, and `references`. A lesson uses the kinds its outcomes require; it does not need every kind.

The approved embedded directives are `definition`, `theorem`, `derivation`, `worked-example`, `check`, `misconception`, `investigation`, `figure`, `diagram`, `equation`, `chemistry`, `source-note`, and `callout`. Directive options are inert data. Raw HTML/JavaScript, inline styles, custom components, remote embeds, executable notebooks, and arbitrary plugins are not accepted.

A complete production pack contains:

```text
lesson.json
content/*.md
assessment.json
references.json
claims.json
glossary.json
diagrams/
assets/
ATTRIBUTION.md
reviews/*.json
adjudication.json
```

The authoritative order is the `scenes` array in `lesson.json`, not filename order. The metadata maps only to existing atomic graph outcomes and identifies the accountable principal and material agent provenance. Structured review and adjudication files are added through the governance sequence; they are not fabricated at initial authoring time.

### Content standard

[`CONTENT-STANDARD.md`](CONTENT-STANDARD.md) is the authoritative teaching-quality contract. Before a candidate commit is frozen, the lesson must have:

- a human-first opening and explanation that a cold reader at the declared level can summarize in plain language after one careful read, without hidden project or validator vocabulary;
- explicit scope, exclusions, observable objectives, prerequisites, and a recovery route;
- an accurate, coherent explanatory model with explicit causal/logical relations, assumptions, limits, and consistent terminology;
- representations with declared instructional jobs and explicit connections among words, diagrams, equations, chemistry, and data;
- worked reasoning that exposes model selection, decisions, checks, and interpretation, followed by fading support;
- retrieval before answer reveal, delayed/cumulative retrieval links, misconception repair, varied practice, and a genuine transfer task;
- feedback that identifies correctness, explains the governing principle or process, and gives an actionable next step;
- assessment items mapped to outcomes, answer logic, feedback, rubric where applicable, retry strategy, and remediation;
- every scene declared `claims-mapped` or `no-material-claims`, with each material claim exposed in a same-scene `{source-note}` and mapped in `claims.json` to every complete, verified record in `references.json`;
- original synthesis rather than close paraphrase, with every reference recording its use, rights basis/evidence, and dated agent-access status;
- stable definitions and symbols in `glossary.json`;
- accessibility alternatives and complete asset rights/provenance;
- explicit safety, privacy, uncertainty, route, and non-clinical boundaries where relevant.

There is no universal scene word count or frame quota. Split content at changes in instructional purpose or resumable meaning, preserve a continuous reading path, and never delete necessary reasoning to fit a viewport. Readability scores, interaction counts, completion, model agreement, and agent self-review are not evidence that learners achieved the outcome.

### Math, chemistry, and visuals

- Author constrained TeX math inline or in an `{equation}` directive; author chemical formulae/equations with `\ce{...}` in `{chem}` or `{chemistry}`. Unsafe TeX I/O, shell, HTML, link, package-loading, and macro commands are forbidden.
- Use schema-valid `*.diagram.json` for bounded processes, networks, cycles, concept maps, and timelines, and sanitized SVG for scientific illustration. Mermaid, DOT, and Vega-Lite are future generated adapters, not accepted canonical lesson inputs in format v1.
- Store SMILES/InChI and Mol/SDF where molecular identity, stereochemistry, atom mapping, or reusable coordinates matter. A generated molecular image is not the sole source.
- Commit visual source and data. Provide alt text plus a long description, accessible table, transcript, or stepwise equivalent when a concise alt string cannot carry the outcome.
- Identify source, title, creator, compatible rights basis/evidence, attribution, and modifications for every third-party asset. “Free to view” is not permission to adapt. The conservative allowlist and dataset rules in `RIGHTS-POLICY.md` apply.

### Accessibility, export, and security

Scene source order is the reading/focus order. Content must work with keyboard navigation, screen readers, 200% zoom/reflow, reduced motion, touch, print, and narrow screens without relying on color, position, hover, drag, sound, animation, or time alone. The desktop lesson shell may keep body navigation fixed and let a scene own bounded overflow; authors must still support adaptive mobile/document flow.

The format is designed for a versioned JSON AST, sanitized semantic HTML/MathML, Typst-first PDF with LuaLaTeX fallback, and EPUB/DOCX/JATS adapters. Those complete compiler/export paths are planned, not currently available. Author source so essential content can survive every target, and run only the format/export checks that the repository actually exposes.

Lesson content is data, never executable. Repository automation must not run code from an untrusted pull request. Pack paths stay local and normalized; SVG and declarative visual inputs contain no scripts, event handlers, foreign objects, arbitrary file reads, or network dependencies. Never commit secrets, identifiable learner/patient data, personal medical information, unlicensed patient media, or copyrighted answer banks.

## Specimen is not production

`examples/lesson-pack/` is a format and accessibility specimen. It is excluded from lesson indexes, pull-request quorum, adjudication totals, coverage, and publication claims. A copy of the specimen under a different ID does not become a lesson. Production status comes only from a focused contribution under `lessons/` that passes validation, independent review quorum, separate adjudication, merge, public availability, and the open-license checks.

## Standard lesson quorum

A standard lesson uses a founding-stage **3 + 1 agent quorum**:

- 1 academic review;
- 1 learning-design review;
- 1 accessibility and rights review.

The three reviews must come from isolated runs across three distinct providers and target the same frozen candidate commit. After quorum, a fourth fresh run makes the final merge/revise/reject adjudication. Its run ID may not appear in authoring or review provenance. See `site/agent/quorum-policy.json` for minor-correction and high-impact rules.

One disclosed maintainer may operate these agents during the founding stage. Each artifact still identifies the accountable operator plus system, provider, model, version, run ID, and material-instructions digest. Reusing or relabelling one run never creates another vote. This provenance is disclosed and attested by that maintainer, not verified: nothing checks that a declared run really used the declared provider or model, so the requirement buys accountability on the public record rather than proof of independence.

## License

Except where noted, contributed course content is accepted under the Creative Commons Attribution 4.0 International license (CC BY 4.0). Contributors affirm that they can license submitted work on those terms and that third-party materials are separately identified and compatible.

See [`CONTENT-LICENSE.md`](CONTENT-LICENSE.md) for scope and attribution instructions.

## Validation

```bash
npm ci
npm run source:preflight -- --strict lessons/<lesson-pack>
npm run verify
```

`npm run verify` runs deterministic validation and tests sequentially and is the canonical local gate. The strict source preflight deliberately rejects missing terms routes and unresolved human-only sources in agent-authored lessons in both candidate and ready states. Drafts report this through `lesson-candidate`; the protected `agent-protocol` context exists only after the pull request is marked ready and enforces full merge readiness. Any temporary compatibility exemption for a candidate frozen before this gate is public and exact-scoped in `site/agent/source-preflight-policy.json`.
