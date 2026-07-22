---
name: review-embeddedknowledge-academic
description: Independently review one frozen EmbeddedKnowledge lesson candidate for academic accuracy, evidence, calculations, model boundaries, uncertainty, outcome scope, and assessment correctness. Use when assigned the academic quorum role and asked to produce a structured academic review artifact against an exact candidate commit.
---

# Review an EmbeddedKnowledge lesson academically

Produce one independent academic verdict against one frozen candidate commit. Do not edit the lesson, act as author, perform another quorum role, adjudicate, push, or merge.

## Establish the review boundary

1. Locate the repository root with `git rev-parse --show-toplevel`.
2. Require the lesson-pack path, lesson ID and version, exact 40-character candidate commit, accountable GitHub principal, actual agent system/provider/model/version, a unique run ID, and the discloseable material-instructions digest.
3. Stop if the candidate commit does not exist, does not contain the stated pack, or differs from the content presented for review.
4. Read `AGENTS.md`, `CONTENT-STANDARD.md`, `FORMAT.md`, `lessons/README.md`, `RIGHTS-POLICY.md`, `REVIEWING.md`, `site/agent/quorum-policy.json`, `site/schemas/review.schema.json`, and `.github/REVIEW_TEMPLATE/academic.md`.
5. Inspect the candidate pack and relevant graph nodes. Do not read the authoring conversation, other review conclusions, or an adjudication draft. Do not invoke another EmbeddedKnowledge role skill in this run.
6. Declare conflicts, expertise limits, inaccessible evidence, and environmental limits before deciding the verdict.

## Verify the frozen candidate

Inspect content from the candidate commit rather than trusting the working tree. Confirm identity and mappings in `lesson.json`, then inspect every declared scene, assessment item, claim, reference, glossary entry, diagram, structured molecule record, asset, and attribution record relevant to academic correctness.

Treat changes to scene content, metadata, assessment, claims, references, glossary, diagrams, assets, or attribution after the candidate commit as stale-review blockers. Governance files added after freezing do not alter the academic candidate.

## Conduct independent verification

1. Restate each objective and outcome in the narrowest scientifically defensible form.
2. Trace every material claim from lesson prose to the same scene's learner-visible `{source-note}`, then to `claims.json` and the exact supporting record and locator in `references.json`. Treat a false `no-material-claims` declaration, an omitted scene mapping, or a source note that omits a supporting source as an evidence gap.
3. Open and verify important sources directly only when their `agentAccess.status` is `checked-no-agent-restriction-found`. Do not process a `human-only` source; require documented human verification, replace the source, or abstain when that prevents a responsible academic judgment. Prefer primary or authoritative sources and check recency for unstable medical, safety, policy, nomenclature, and standards claims.
4. Recalculate quantitative examples, units, significant assumptions, equations, chemical balances, mappings, and answer keys independently.
5. Check mechanisms, definitions, terminology, causal language, analogies, boundary cases, uncertainty, and transitions between models or representations.
6. Verify that examples and assessments are correct for the declared scope and do not reward a scientifically false shortcut.
7. Check prerequisite claims, graph outcome coverage, route relevance, non-clinical boundaries, and any statement that could be mistaken for medical advice or professional authorization.
8. Search for plausible counterexamples and common expert objections. Distinguish factual error from pedagogical preference.
9. Do not treat model agreement, citation count, prestigious venue, fluent prose, or successful schema validation as evidence of correctness.

If a central claim cannot be independently verified, abstain or request changes. Never fill an evidence gap with inference presented as a checked fact.

## Classify findings and verdict

Use exact pack-relative paths and stable IDs in every evidence target.

- Use `blocking` for unsafe, fabricated, fundamentally false, legally unusable, or outcome-defeating content.
- Use `major` for material errors, unsupported central claims, incorrect calculations, misleading model boundaries, or invalid assessment logic.
- Use `minor` for bounded corrections that do not change the instructional argument.
- Use `note` for verified strengths, limitations, or nonblocking observations.

Choose `request-changes` when any unresolved major or blocking finding exists. Choose `abstain` when conflict, expertise, access, or verification limits prevent a responsible judgment. Choose `approve` only when the candidate is academically sound within its declared scope; approval may still contain minor findings. Include at least one substantive finding because the schema requires a nonempty findings array.

## Produce the artifact

1. Follow `.github/REVIEW_TEMPLATE/academic.md` and `site/schemas/review.schema.json` exactly.
2. Set `role` to `academic` and target the exact candidate commit.
3. Record evidence actually checked, not an aspirational checklist.
4. State concrete findings, consequences, required resolutions, limitations, conflict status, accountable principal, and agent provenance in which you emit the literal placeholder `RUNTIME-STAMPED` for the four agent-identity fields (system, provider, model, version) — the accountable operator stamps these from the runtime banner because agents cannot reliably self-report their own model — with an accurate run ID and material-instructions digest.
5. Output one fenced `embeddedknowledge-review` JSON block suitable for an equivalent GitHub review submission. The accountable operator submits this artifact pinned to the candidate commit and fills the placeholdered provenance fields from the runtime, per [`REVIEW-RUNBOOK.md`](../../../REVIEW-RUNBOOK.md).
6. Do not write the artifact into the pack unless the operator explicitly asks. The operator must copy it without rewriting the findings.
7. After it is saved, validate the artifact and full repository with `npm run validate`. Report any structural failure separately from the academic verdict.
8. Never claim quorum or merge readiness. Under `standard-lesson-v3`, this is one advisory input to a fresh finalizer; report `request-changes` honestly when warranted and do not start a revision loop.
