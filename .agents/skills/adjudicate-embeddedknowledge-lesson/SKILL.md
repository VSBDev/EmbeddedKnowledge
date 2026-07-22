---
name: adjudicate-embeddedknowledge-lesson
description: Finalize and adjudicate one EmbeddedKnowledge lesson after its required frozen-candidate reviews are complete. For a standard lesson, use one fresh run to read the original candidate and both advisory reviews, dispose every finding, make the single final content revision, audit accessibility and rights, and produce the merge, revise, or reject artifact. For other risk tiers, apply their approval-quorum rule without changing content.
---

# Finalize and adjudicate an EmbeddedKnowledge lesson

Make the final accountable judgment from the original candidate and complete review record. For `standard-lesson-v3`, this run is the only post-review content editor: it may revise the lesson once, must audit the resulting accessibility-and-rights boundary, and then owns the final decision. Do not perform a review role, reopen authoring, launch another review cohort, push, merge, or publish. A `merge` decision is an artifact value, not permission to merge GitHub.

## Establish the boundary

1. Locate the repository root with `git rev-parse --show-toplevel`.
2. Require the lesson-pack path, lesson ID and version, exact original candidate commit, all structured review artifacts and their GitHub submissions, accountable GitHub principal, actual agent system/provider/model/version, a fresh unique run ID, and the discloseable material-instructions digest.
3. Read `AGENTS.md`, `COLLABORATION.md`, `REVIEWING.md`, `CONTENT-STANDARD.md`, `FORMAT.md`, `lessons/README.md`, `RIGHTS-POLICY.md`, `site/agent/quorum-policy.json`, `site/schemas/review.schema.json`, `site/schemas/adjudication.schema.json`, and `.github/REVIEW_TEMPLATE/adjudication.md` completely.
4. Read the original candidate from the exact commit and the complete review record. Do not read or inherit the authoring conversation. Do not invoke an author or review skill in this run.
5. Confirm that the finalization run ID appears nowhere in authoring or review provenance. Stop if freshness cannot be established.
6. Declare conflicts and limitations before deciding.

## Recompute review-input eligibility

For every proposed review input:

1. Validate it against `site/schemas/review.schema.json`.
2. Verify lesson identity and version, exact original candidate commit, role, conflict declaration, agent provenance, unique run ID, evidence targets, signed time, and equivalent non-dismissed GitHub submission.
3. For `standard-lesson-v3`, require exactly the policy's academic and learning-design inputs across distinct runs and providers. Both `approve` and `request-changes` are honest, eligible advisory verdicts; `abstain` is not eligible.
4. For approval-quorum tiers, count only verdicts and roles allowed by that tier and do not alter teaching content.
5. Exclude reused authoring runs, duplicate review runs, wrong candidates, fabricated or rewritten artifacts, dismissed submissions, and reviews outside their declared role.
6. Recompute review-input count, approval count, change-request count, role counts, distinct principals, runs, and providers. Never copy an earlier summary.

If the required two standard review inputs are missing or ineligible, stop. Do not replace a missing role, fabricate an artifact, or start another review yourself.

## Finalize a standard lesson exactly once

This section applies only to `standard-lesson-v3`. Minor-correction, high-impact, and preserved legacy policies retain their no-content-edit adjudication boundary.

1. Read every finding and limitation from both reviews, including minor and note findings. Inspect the original candidate evidence each finding cites.
2. Decide a disposition for every finding index: `incorporated`, `no-change-required`, or `not-incorporated`, with a concrete rationale. A merge decision may not leave a blocking finding unincorporated.
3. Make one coherent final revision directly in the lesson pack. You may change scenes, assessment, claims, references, glossary, attribution, diagrams, assets, mappings, and substantive metadata when the review evidence justifies it. Do not edit either review artifact, change the lesson identity/version, or add another review.
4. Preserve good original material. Do not mechanically implement contradictory or low-quality advice; record why it was not incorporated. Resolve findings together so the lesson reads as one human work, not a patchwork of reviewer phrases.
5. Recheck academic correctness, objective/outcome scope, answer logic, claims-to-sources mapping, learner-visible source notes, boundaries, uncertainty, feedback, recovery, and first-read coherence in the final pack.
6. Personally complete the final accessibility-and-rights audit: semantic structure and reading order, keyboard/reflow path, nonvisual equivalents, interaction fallback, privacy/security boundary, source-access records, license/reuse basis, attribution, third-party assets, and agent disclosure. Record actual evidence and limitations. This audit is part of finalizer accountability, not a third review vote.
7. Run strict source preflight and repository validation. Repair the final pack within this one pass if the checks expose a defect; do not send it back into a review loop.
8. Commit the final lesson content when the operator explicitly requested the final version. The commit must contain both cited review artifacts, must follow the original candidate, and must not yet contain `adjudication.json`. Record its exact 40-character SHA as `finalCommit`.
9. After `finalCommit` exists, write `adjudication.json` with the finalization record and decision. Do not change teaching content after `finalCommit`.

If the lesson cannot be made safe, accurate, coherent, accessible, and rights-compliant in this bounded finalization pass, choose `reject` or `revise` and explain the unresolved condition. Do not launch a loop.

## Decide

Choose `merge` only when the applicable review-input or approval gate is satisfied, every finding is disposed, the final content passes verification, the accessibility-and-rights audit is satisfied where required, and no credible unresolved blocker remains. Preserve material dissent and uncertainty in the artifact. Choose `reject` for non-remediable scope, integrity, rights, safety, provenance, or protocol failures; use `revise` only when the operator must make a new, separately authorized attempt.

Quorum is necessary but not sufficient for `merge`. Model agreement cannot replace the finalizer's evidence-backed judgment, and a request-changes review is evidence to resolve rather than an instruction to repeat the cohort.

## Produce the artifact

1. Follow `.github/REVIEW_TEMPLATE/adjudication.md` and `site/schemas/adjudication.schema.json` exactly.
2. Cite the complete eligible review ID set and record the recomputed quorum snapshot. For `standard-lesson-v3`, include `finalCommit`, `quorum.reviewInputs`, `quorum.changeRequests`, every indexed finding disposition, material changes, and the final accessibility-and-rights audit.
3. State the policy ID, decision, rationale, dissent, conditions, accountable principal, fresh-agent provenance in which you emit the literal placeholder `RUNTIME-STAMPED` for the four agent-identity fields (system, provider, model, version) — the accountable operator stamps these from the runtime banner because agents cannot reliably self-report their own model — with an accurate run ID and material-instructions digest, and adjudication time.
4. Output one fenced `embeddedknowledge-adjudication` JSON block suitable for an equivalent GitHub review submission and, when explicitly requested, preserve it exactly in `adjudication.json`.
5. Run `npm run validate` after saving the artifact. In a real pull-request event, require PR-readiness and GitHub-provenance checks as well.
6. The operator submits the adjudication pinned as a GitHub Comment review and fills placeholdered provenance and `finalCommit` from the runtime, per [`REVIEW-RUNBOOK.md`](../../../REVIEW-RUNBOOK.md); posting it re-triggers the required check.
6. For `merge`, instruct the maintainer to make only the allowed post-finalization publication transition: lesson status/source-confidence and retained claim review-status fields. Do not perform the GitHub merge.
7. Report the original candidate SHA, final content SHA, counted and excluded reviews, dispositions, audit result, decision, validation result, dissent, conditions, and any action reserved to the maintainer.
