---
name: adjudicate-embeddedknowledge-lesson
description: Independently adjudicate one frozen EmbeddedKnowledge lesson after its required structured reviews are complete. Use when asked to verify candidate identity, review eligibility, role quorum, run and model-family independence, unresolved findings, dissent, and provenance, then produce a merge, revise, or reject adjudication artifact without changing lesson content.
---

# Adjudicate an EmbeddedKnowledge lesson

Make the final governance judgment from the frozen candidate and complete review record. Do not author, repair, review, push, merge, or publish lesson content in this run. A `merge` decision is an artifact value, not permission to merge GitHub.

## Establish the adjudication boundary

1. Locate the repository root with `git rev-parse --show-toplevel`.
2. Require the lesson-pack path, lesson ID and version, exact candidate commit, all structured review artifacts and their GitHub submissions, accountable GitHub principal, actual agent system/provider/model/version, a fresh unique run ID, and the discloseable material-instructions digest.
3. Read `AGENTS.md`, `COLLABORATION.md`, `REVIEWING.md`, `CONTENT-STANDARD.md`, `RIGHTS-POLICY.md`, `site/agent/quorum-policy.json`, `site/schemas/review.schema.json`, `site/schemas/adjudication.schema.json`, and `.github/REVIEW_TEMPLATE/adjudication.md`.
4. Read the exact candidate and complete review record. Do not read or inherit the authoring conversation. Do not invoke an author or review skill in this run.
5. Confirm that the adjudication run ID appears nowhere in authoring or review provenance. Stop if freshness cannot be established.
6. Declare conflicts and limitations before deciding.

## Verify candidate integrity

1. Confirm the candidate commit exists and contains the stated lesson ID, version, risk tier, outcomes, and pack.
2. Confirm every review targets exactly that 40-character commit and the same lesson identity and version.
3. Compare the candidate with the current pack. Permit only review artifacts, `adjudication.json`, and the documented `lesson.json` status or source-confidence transitions after freezing.
4. Treat any post-candidate change to scenes, assessment, claims, references, glossary, attribution, diagrams, assets, mappings, authorship, or substantive metadata as stale. Return `revise` or stop; do not repair it.
5. Exclude specimens, examples, drafts from another pack, edited review text, dismissed GitHub reviews, and artifacts without equivalent GitHub provenance.

## Recompute review eligibility

For every proposed counted review:

1. Validate it against `site/schemas/review.schema.json`.
2. Verify reviewer identity, conflict declaration, real agent provenance, unique run ID, evidence targets, signed time, candidate commit, and equivalent GitHub submission.
3. Count only `approve` verdicts with no unresolved blocking or major finding.
4. Exclude reused authoring runs, duplicate review runs, stale candidates, ineligible GitHub states, fabricated or rewritten artifacts, and reviews outside the declared role.
5. Compute distinct principals, distinct agent runs, and distinct providers from the eligible artifacts; never copy the author’s summary.
6. Apply the exact policy for `minor-correction`, `standard`, or `high-impact`. Confirm approval count, role minimums, distinct-run floor, model-family floor, principal floor, and one fresh adjudicator.

If the required review set is incomplete, do not fabricate a final artifact merely to fill `adjudication.json`. Report the missing eligibility conditions and request the required review runs.

## Synthesize rather than vote-count

1. Read every finding, limitation, conflict, dissenting review, and resolution, including non-counted reviews that raise credible risks.
2. Verify that claimed resolutions exist in the frozen candidate. A response in discussion is not a content resolution.
3. Assess whether the review record collectively covers academic integrity, learning design, assessment, accessibility, rights, security, and provenance appropriate to the risk tier.
4. Preserve material dissent and uncertainty in the adjudication. Do not erase a concern because numerical quorum is met.
5. Choose `merge` only when quorum is satisfied, all counted reviews are eligible, no credible unresolved blocker remains, and the candidate meets the protocol.
6. Choose `revise` when remediable content or governance defects remain. Explain which change will stale the reviews and which reviews must be repeated.
7. Choose `reject` for non-remediable scope, integrity, rights, safety, provenance, or protocol failures.

Quorum is necessary but not sufficient for `merge`. Conversely, confidence or model consensus cannot replace quorum.

## Produce the artifact

1. Follow `.github/REVIEW_TEMPLATE/adjudication.md` and `site/schemas/adjudication.schema.json` exactly.
2. Cite the complete eligible review ID set used in the decision and record a recomputed quorum snapshot.
3. State the policy ID, decision, rationale, dissent, conditions, accountable principal, real fresh-agent provenance, and adjudication time.
4. Output one fenced `embeddedknowledge-adjudication` JSON block suitable for an equivalent GitHub review submission.
5. Do not modify teaching content. Write `adjudication.json` only when explicitly requested, preserving the emitted artifact exactly.
6. After the artifact is saved, run `npm run validate`. In a real pull-request event, require the repository’s PR-readiness and GitHub-provenance checks as well.
7. For `merge`, instruct the maintainer to make only the allowed governance commit and documented status/source-confidence transition, then rerun all checks. Do not perform the merge.
8. Report the decision, counted and excluded reviews, quorum calculation, dissent, conditions, validation result, and any action still reserved to the maintainer.
