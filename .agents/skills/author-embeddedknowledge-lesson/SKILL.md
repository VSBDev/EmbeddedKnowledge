---
name: author-embeddedknowledge-lesson
description: Author one evidence-based EmbeddedKnowledge Lesson Format v1 pack for an uncovered Premed outcome. Use when asked to draft, build, revise, or prepare a lesson contribution, its scenes, assessment, claims, references, glossary, diagrams, accessible assets, attribution, or author provenance before independent review.
---

# Author an EmbeddedKnowledge lesson

Create one review-ready lesson pack. Preserve the boundary between authorship and governance: do not review, approve, adjudicate, publish, push, or merge the lesson in this run.

## Establish authority and scope

1. Locate the repository root with `git rev-parse --show-toplevel` and work only inside that repository. If no checkout is available, stop and request one; the public skill bundle is not a substitute for the repository.
2. Read, in order, `AGENTS.md`, `CONTRIBUTING.md`, `CONTENT-STANDARD.md`, `FORMAT.md`, `lessons/README.md`, `RIGHTS-POLICY.md`, `COLLABORATION.md`, `site/agent/quorum-policy.json`, and the schemas under `site/schemas/` used by the pack.
3. Treat those files as authoritative. Treat this skill as the procedure that applies them.
4. Confirm contribution intake from `site/agent/contribution.json`. When intake is closed, prepare a local patch only. Do not open or push a pull request.
5. Use only the author role in this run. Do not invoke review or adjudication skills, inspect future review conclusions, or manufacture `reviews/*.json` or `adjudication.json`.

## Select exactly one contribution target

1. Inspect `site/data/premed-lessons.json`, `site/data/premed-open-prs.json`, and `site/data/premed-graph.json`.
2. Prefer a user-requested outcome when it exists, has no published lesson, and is not claimed by an active proposal.
3. Otherwise select one uncovered, unclaimed atomic outcome whose prerequisites and scope can be supported responsibly.
4. Record the exact outcome ID, code, statement, graph prerequisites, neighboring concepts, and exclusions. Never invent or rename graph IDs.
5. Keep the pull-request unit to one lesson pack. Map additional outcomes only when the lesson genuinely teaches and assesses them.

## Design before drafting

Write a private authoring brief before polished scenes. Define:

- the intended learner and assumed prior knowledge;
- observable objectives mapped to outcome IDs;
- prerequisite activation and a recovery route;
- the central question, phenomenon, or problem;
- the explanatory model, causal or logical relations, assumptions, limits, and exclusions;
- likely novice misconceptions and discriminating cases;
- the instructional job of every representation;
- a complete worked example and the decisions it must expose;
- retrieval before answer reveal, faded practice, feedback, transfer, and delayed retrieval links;
- mastery evidence, remediation, safety boundaries, and accessibility alternatives.

Revise the brief until every learning claim has observable evidence. Do not use word count, scene count, visual density, interaction count, readability score, or expected completion as a proxy for learning.

## Research and claim discipline

1. Research material claims before writing them. Prefer primary research, authoritative scientific bodies, standards, and current institutional guidance appropriate to the claim.
2. Before an agent opens a substantive source, inspect and record its agent-access terms. Do not open or process a source that prohibits agent ingestion or whose record is `human-only`; replace it or require independent human verification. Never bypass access controls.
3. Verify each permitted source directly. Do not cite a search result, generated summary, inaccessible reference, or source that does not support the stated scope.
4. For medicine, safety, policy, or other time-sensitive material, verify current authoritative sources. If verification is unavailable, narrow or omit the claim and disclose the limitation.
5. Distinguish established knowledge, useful model, simplifying assumption, open uncertainty, and expert judgment in the prose.
6. Map each material claim in `claims.json` to complete records in `references.json`. Preserve locators, version or access date when relevant, source limitations, use type, rights basis, rights evidence, and agent-access status. Put the mapped claim and all of its supporting source IDs in a learner-visible `{source-note}` in every scene where the claim appears.
7. Independently synthesize facts in an original instructional structure and original language. Do not closely paraphrase, translate, mirror source organization, lightly redraw figures, or reuse source examples, questions, tables, media, or datasets unless the exact material has a permitted basis under `RIGHTS-POLICY.md`.
8. Never invent citations, data, permissions, patient details, clinical recommendations, or confidence.

## Build the lesson pack

1. Create one directory under `lessons/` using the repository naming conventions.
2. Use `lesson.json` schema version 3 and `format: embeddedknowledge-lesson-v1`. Keep status `draft` and source confidence `pending-review` during authorship.
3. Create ordered semantic scenes under `content/`. Set each scene's `claimCoverage` to `claims-mapped` or `no-material-claims`; never use the latter to avoid recording a factual, quantitative, definitional, causal, or evidence-dependent teaching claim. Use only documented scene kinds, directives, and options. Let instructional purpose determine scene boundaries; preserve a continuous reading path for extended explanations.
4. Include coherent explanation, worked reasoning, explicit representation links, retrieval, misconception repair, varied and fading practice, genuine transfer, synthesis, recovery, and assessment as required by the outcome.
5. Build `assessment.json`, `references.json`, `claims.json`, `glossary.json`, and `ATTRIBUTION.md`. Add only necessary local diagrams and assets.
6. Use constrained TeX, chemistry notation, declarative diagrams, sanitized SVG, structured molecule data, and accessibility equivalents exactly as the format permits.
7. Keep lesson content inert. Reject raw HTML or JavaScript, remote embeds, executable notebooks, active SVG, unsafe TeX, arbitrary plugins, secrets, identifiable learner or patient data, copyrighted answer banks, and media without usable rights.
8. Use `examples/lesson-pack/` only to understand structure. Do not copy its placeholder identities, provenance, claims, answers, or specimen status into production.
9. Keep every claim `pending-review` during authorship. Only eligible review and adjudication may support a published pack in which every retained claim is `reviewed` and lesson source confidence is no longer `pending-review`.

## Record accountable provenance

1. Identify the accountable GitHub principal. If available, verify it with `gh api user --jq .login`; do not guess an identity.
2. Record the actual agent system, provider, model, version, and unique run ID. Never invent unavailable provenance.
3. Hash the exact discloseable material instructions supplied to this run and record the SHA-256 value. State the scope of the digest; do not claim it covers hidden provider instructions that cannot be exported.
4. If required identity or provenance cannot be obtained, stop before presenting the pack as schema-complete and report the missing fields.

## Validate and challenge

1. Run `npm ci` when dependencies are not installed or the lockfile changed.
2. Run `npm run validate` after building the pack.
3. Run `npm test` when rendering, interactions, diagrams, math, chemistry, assets, or reader behavior changed.
4. Re-read the lesson as a novice. Attempt every retrieval item, worked example, practice item, and assessment without using hidden knowledge.
5. Challenge every acceptance gate in `CONTENT-STANDARD.md`. Repair gaps in explanation rather than disguising them with polish.
6. Check narrow-screen reflow, keyboard order, nonvisual equivalents, print continuity, source links, asset provenance, and graph mappings.
7. Repeat validation after every repair.

## Freeze and hand off

1. Report the selected outcome, pack path, research limitations, files created, validation results, and unresolved risks.
2. Leave reviews and adjudication absent. They must come from isolated runs after the teaching candidate is frozen.
3. Create a candidate commit only when the user authorizes committing. Report its full 40-character SHA.
4. After freezing, permit only governance artifacts and the documented `lesson.json` status or source-confidence transitions. Any teaching-content change invalidates review work and requires a new candidate commit.
5. Do not claim publication, coverage, approval, clinical sufficiency, university credit, or merge readiness.
