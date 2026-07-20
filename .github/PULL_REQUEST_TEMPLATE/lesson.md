# Lesson contribution

> Contribution intake remains closed until maintainers announce that the dedicated repository is public and protected. Do not push project content or open a lesson pull request before that announcement.
>
> One pull request changes one lesson pack. Keep the PR in draft while content changes. Freeze a candidate content commit before independent reviews begin; only review artifacts, final adjudication, and the permitted `lesson.json` state fields may change afterward.

Canonical format: [`lessons/README.md`](../../lessons/README.md) · schema: `site/schemas/lesson.schema.json` v3 · `format: embeddedknowledge-lesson-v1`

## Lesson identity

- Lesson ID:
- Version:
- Risk tier: `minor-correction | standard | high-impact`
- Outcome IDs:
- Lesson pack path: `lessons/...`
- Lesson schema/format: `3 / embeddedknowledge-lesson-v1`
- Candidate content commit:

## Educational purpose

Explain what this lesson enables, why these outcomes belong together, and which learner communities or pathways it serves.

## Human-first preflight

- Cold-reader context/run ID, if used:
- In one plain sentence, what will the learner understand or be able to do?
- What concrete question, phenomenon, or task opens the lesson?
- What did the cold reader say the central idea was?
- Which sentences or sections were rewritten after the first-read check?

This is a developmental check, not a governance vote or evidence that learners mastered the outcome.

## Contribution declaration

- [ ] This PR changes exactly one lesson pack.
- [ ] The opening, central explanation, and one worked use passed the `CONTENT-STANDARD.md` first-read gate before the full pack was built.
- [ ] Learner prose sounds like an informed teacher, not a schema, validator, evidence ledger, or review rubric; internal project vocabulary appears only when the mapped outcome requires it.
- [ ] The lesson uses the smallest coherent instructional arc and does not create or repeat scenes mechanically to mirror checklist items.
- [ ] Every mapped outcome and prerequisite exists in the Premed graph.
- [ ] `lesson.json.scenes` orders unique sources under `content/*.md` using only the 14 documented scene kinds.
- [ ] Scene Markdown uses only the documented declarative directives/options and contains no raw HTML, JavaScript, executable content, or remote embed.
- [ ] The lesson includes objectives, explanations, worked examples, practice, retrieval, transfer, misconceptions, accessibility alternatives, and recovery guidance.
- [ ] `assessment.json` maps items to declared objectives/outcomes and includes answer logic, rubrics, feedback, mastery, retry, and remediation criteria.
- [ ] Every scene declares `claims-mapped` or `no-material-claims`; each mapped claim is visible in that scene's `{source-note}` and resolves through `claims.json` to every supporting record in `references.json`.
- [ ] `glossary.json` defines introduced terms, symbols, and abbreviations.
- [ ] Math, chemistry, diagrams, charts, molecule records, and images use canonical structured source and pass the available format checks.
- [ ] Essential visuals/audio/interactions have alt text, long descriptions/tables/transcripts, keyboard access, and equivalent adaptive routes as applicable.
- [ ] Original content is contributed under CC BY 4.0.
- [ ] Lesson prose, structure, examples, questions, diagrams, and assessments are original syntheses, not close paraphrases or lightly modified source expression.
- [ ] Every reference declares its use, rights basis/evidence, dated agent-access status, and exact terms route; no agent processed a source marked `human-only`.
- [ ] Every third-party asset/dataset is declared in `lesson.json`, separately identified in `ATTRIBUTION.md`, and uses only a permitted basis under `RIGHTS-POLICY.md`.
- [ ] Pack paths are local/normalized; there are no unsafe SVG/TeX features, secrets, personal medical data, identifiable learner/patient data, or unlicensed media.
- [ ] Accountable principals and all material agent assistance are disclosed.
- [ ] `npm run source:preflight -- --strict lessons/<lesson-pack>` passes before candidate freeze.
- [ ] `npm run verify` passes sequentially; validation and tests were not run concurrently in this worktree.

## Pack inventory

- [ ] `lesson.json`
- [ ] `content/*.md`
- [ ] `assessment.json`
- [ ] `references.json`
- [ ] `claims.json`
- [ ] `glossary.json`
- [ ] `ATTRIBUTION.md`
- [ ] Pack-local `assets/` and `diagrams/` source, if used
- [ ] No file was copied from `examples/lesson-pack/` and represented as reviewed or production content

## Agent disclosure

- Accountable principal:
- Agent system/provider/model/version:
- Run ID:
- Material-instructions SHA-256 digest:
- Work performed by the agent:
- Checks independently performed by the accountable principal:

## Candidate freeze

- [ ] Scene content, metadata, assessment, references, claims, glossary, attribution, diagrams, and assets are frozen at the candidate commit above.
- [ ] A substantive revision after review began bumped the lesson version before a fresh candidate was frozen; the current version has only one review candidate.
- [ ] All counted reviews target that exact commit.
- [ ] Every required role in the current review cohort was launched against the same commit before any finding was applied.
- [ ] The author waited for the complete cohort and consolidated requested changes into one revision rather than creating rolling candidates.
- [ ] Changes after the candidate commit are limited to `reviews/*.json`, `adjudication.json`, and the permitted `lesson.json` status/source-confidence transition.
- [ ] The draft PR's `lesson-candidate` check is green; the protected `agent-protocol` context remains absent until the PR is ready.

## Review quorum

Every checked item must correspond to a schema-valid JSON artifact copied exactly from a structured GitHub PR review. Reviewers use the templates in `.github/REVIEW_TEMPLATE/`.

- [ ] Required academic review 1
- [ ] Required academic review 2, only for high-impact lessons
- [ ] Required academic review 3, if required by risk tier
- [ ] Required learning-design review
- [ ] Required accessibility-and-rights review
- [ ] Every review uses a unique run ID that differs from all authoring runs
- [ ] Required run-count and model-family rules are satisfied
- [ ] No unresolved blocking finding remains
- [ ] Each exact GitHub review body was generated with `npm run review:prepare`, submitted and verified before its equivalent artifact commit was pushed.

## Final adjudication

- [ ] A fresh adjudication agent run submitted the structured adjudication review.
- [ ] `adjudication.json` is copied exactly into the lesson pack.
- [ ] The adjudication run ID is distinct from every authoring and review run ID.
- [ ] The adjudication records quorum, rationale, dissent, conditions, and a `merge` decision.
- [ ] `lesson.json` status is `published`; `adjudicated` is an intermediate pre-merge state.
- [ ] Every retained published claim has `reviewStatus: reviewed`, and lesson source confidence is no longer `pending-review`.
- [ ] The PR is marked ready and the resulting full `agent-protocol` publication-readiness check passes.
