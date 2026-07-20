# EmbeddedKnowledge agent instructions

These instructions apply to the entire EmbeddedKnowledge project.

## Start here

1. Read [`llms.txt`](llms.txt) for the concise project map.
2. Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before proposing a change.
3. For lesson work, load exactly one matching role procedure from [`.agents/skills/`](.agents/skills/): author, academic review, learning-design review, accessibility-and-rights review, or adjudication. Do not combine governance roles in one agent run.
4. Read the authoritative [`Learning-Content Standard v1`](CONTENT-STANDARD.md), [`EmbeddedKnowledge Lesson Format v1`](FORMAT.md), its [`pack authoring guide`](lessons/README.md), [`source and reuse policy`](RIGHTS-POLICY.md), [`COLLABORATION.md`](COLLABORATION.md), the public schemas in [`site/schemas/`](site/schemas/), and the quorum policy in [`site/agent/quorum-policy.json`](site/agent/quorum-policy.json) as directed by the selected skill.
5. Run `npm ci` and `npm run validate` before opening or updating a pull request.

## Canonical sources

- Edit `course/PREMED-SYLLABUS.md`, then run `npm run site:build`; do not hand-edit `site/premed/syllabus/index.html`.
- Edit `scripts/build-premed-graph.mjs`, then run `npm run graph:build`; do not hand-edit generated graph data without changing its source.
- Treat `site/data/premed-progress.json` as a generated/public ledger. Lesson metadata becomes its source once lessons exist.
- Treat `examples/lesson-pack/` as a non-production format specimen and `examples/agent-protocol/` as governance fixtures. Never count any file under `examples/` as a lesson, review, adjudication, publication, or covered outcome.
- Treat `.agents/skills/` as the canonical Agent Skills source. Edit those files, then run `npm run agent:build`; do not hand-edit generated copies or bundles under `site/skills/` or `site/agent/skills.json`.

## Lesson Format v1 sources

- A production lesson uses `lesson.json` schema version 3 with `format: embeddedknowledge-lesson-v1`.
- Ordered semantic scene Markdown lives under `content/*.md`; `lesson.json.scenes` is authoritative for identity, kind, order, required state, and estimated time.
- The structured pack files are `assessment.json`, `references.json`, `claims.json`, `glossary.json`, `ATTRIBUTION.md`, optional pack-local assets/diagrams, review artifacts, and final adjudication.
- Scene source is constrained MyST-compatible Markdown. Use only the documented scene kinds, declarative directives, and options; do not add raw HTML, JavaScript, remote embeds, executable notebooks, or private renderer conventions.
- Lesson content is untrusted data. Never execute code, enable TeX shell/file/network access, or permit active SVG/diagram content from a lesson pull request.
- Math, chemistry, diagrams, images, citations, accessibility equivalents, and asset rights must follow [`lessons/README.md`](lessons/README.md). Planned export targets are not evidence that an exporter exists.
- Sources support claims but do not license expression. Follow [`RIGHTS-POLICY.md`](RIGHTS-POLICY.md): independently synthesize facts, never closely paraphrase a source, record every reuse basis, and do not let an agent process a source marked `human-only`.

## Lesson contributions

- One lesson PR should introduce or materially revise one lesson pack.
- Design the instructional argument before drafting prose. Declare the learner, prerequisites, target explanatory model, mastery evidence, misconception or boundary, worked example, practice progression, transfer task, representations, and delayed retrieval links required by [`CONTENT-STANDARD.md`](CONTENT-STANDARD.md).
- Before completing the pack, prototype the learner-facing opening, central explanation, and one worked use. Pass the content standard's first-read gate in a cold context: the declared learner must be able to say what the lesson teaches, why it matters, and how the central idea works without hidden project or validator vocabulary.
- Use the smallest coherent instructional arc. Scene kinds are available functions, not a mandatory one-scene-per-checklist template.
- Validate `lesson.json`, assessment, references, claims, glossary, diagram, review, and adjudication artifacts against their public schemas.
- Map only to existing knowledge-graph outcome IDs.
- Keep one level-one heading per scene and map lesson objectives and assessment items to declared outcomes.
- Declare each scene as `claims-mapped` or `no-material-claims`. Every mapped material claim must appear in that scene's learner-visible `{source-note}` and resolve through `claims.json` to complete `references.json` records.
- Include a coherent explanation, worked reasoning with fading support, retrieval before answer reveal, misconception repair, varied practice, genuine transfer, information-rich feedback, accessibility alternatives, and recovery guidance before freezing a candidate commit.
- Course content is licensed CC BY 4.0. Identify exceptions and third-party assets explicitly.
- Disclose the accountable principal and, when an agent was used, the agent system, provider, model, version, run ID, and SHA-256 digest of its material instructions.
- During the founding stage, one disclosed principal may operate the authoring, review, and adjudication agents. Count only isolated runs with unique run IDs; no review run may reuse an authoring run.
- For a standard lesson, launch exactly one academic and one learning-design review against the original candidate. They are one-time advisory inputs: an honest `request-changes` verdict does not start another cohort.
- A fresh standard-lesson finalizer reads the original and both reviews, disposes every finding, makes the single final content revision, completes the accessibility-and-rights audit, and records the final commit and decision. Do not loop back to the author or reviewers.
- Final adjudication is a separate artifact and must be committed inside the lesson pack before merge.

## Quorum

[`site/agent/quorum-policy.json`](site/agent/quorum-policy.json) is the single source of truth for quorum. The summary below must match it; if they ever disagree, the JSON wins and this file is the bug.

| Risk tier | Review gate | Role minimums | Distinct runs | Distinct providers | Fresh adjudication |
| --- | ---: | --- | ---: | ---: | ---: |
| Minor correction | 2 | 1 academic; 1 accessibility/rights | 2 | 2 | 1 run |
| Standard lesson | 2 advisory inputs | 1 academic; 1 learning-design | 2 | 2 | 1 finalizing run |
| High-impact lesson | 5 | 3 academic; 1 learning-design; 1 accessibility/rights | 5 | 3 | 1 run |

A minor correction is **not** simply "any two reviews": it retains one academic and one accessibility/rights approval across two distinct run IDs and two distinct providers. Standard lessons use the bounded one-pass finalization rule above; high-impact lessons retain their approval quorum. The adjudication run must be distinct from every authoring and review run. Every run discloses its accountable operator and complete agent provenance.

Provenance is **disclosed and attested, not verified**: run IDs, providers, models, versions, and instruction digests are self-reported strings attested by the accountable operator. The validators enforce internal consistency only. Never describe a quorum as proving independent verification.

## Pull request discipline

- Keep the change focused and explain why it is needed.
- Include sources and explicit uncertainty for academic claims.
- Do not mark checklist items complete without corresponding artifacts.
- Preserve unrelated work in the shared workspace.
- EmbeddedKnowledge is already an independent Git repository. Never add or publish any parent workspace repository that may contain it locally, and do not push project changes without explicit maintainer approval.
