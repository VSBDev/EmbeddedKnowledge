# Reviewing EmbeddedKnowledge lessons

Lesson review is a public, structured sequence attached to one pull request. GitHub supplies identity and conversation; repository artifacts supply portable evidence and deterministic gates.

Operational guidance for executing this sequence — working CLI invocations, provenance stamping, and the CI trigger traps — is in [`REVIEW-RUNBOOK.md`](REVIEW-RUNBOOK.md).

## Standard one-pass sequence

1. The author completes one lesson pack, batches the author audit, runs strict source preflight and verification, opens a draft PR, and freezes one original candidate commit.
2. Launch exactly two isolated runs in parallel against that commit: one academic reviewer and one learning-design reviewer. The learning-design reviewer cold-reads learner-visible prose before consulting ledgers or validator output.
3. Each reviewer inspects once and emits one unchanged structured artifact. `approve` and `request-changes` are both eligible standard-lesson inputs; `abstain` is not. Reviewers never edit the lesson or start another cohort.
4. Generate each exact GitHub review body with `npm run review:prepare`, submit and verify it against the original candidate, then commit the identical JSON under `reviews/`.
5. Launch one fresh finalizer after both records exist. It reads the original candidate and both reviews, decides an indexed disposition for every finding, and makes one coherent final content revision. There is no return to the author and no re-review loop.
6. The finalizer checks the resulting academic and assessment logic and personally completes the accessibility-and-rights audit, including semantic/equivalent access, source provenance, licensing, attribution, privacy, and security.
7. After strict source preflight and repository verification pass, the finalizer commits the final lesson content and records that SHA as `finalCommit`. Both cited review artifacts must be present in that commit.
8. Without changing teaching content again, the finalizer writes `adjudication.json` with the original candidate, final commit, two review IDs, review-input/approval/change-request counts, every finding disposition, material changes, access/rights audit, dissent, conditions, provenance, and merge/revise/reject decision.
9. The maintainer makes only the permitted post-finalization publication transition: lesson status/source-confidence and retained claim review-status fields. The PR is then marked ready and the protected checks verify schemas, graph identity, exact GitHub provenance, commit ordering, final-content immutability, and adjudication.

The original reviews do not claim to approve edits they did not see. The fresh finalizer is explicitly accountable for those edits and the final audit. If the bounded finalization cannot produce a safe, accurate, coherent, accessible, rights-compliant lesson, it records `reject` or `revise`; it does not launch a loop.

Editing or dismissing a structured GitHub review invalidates its committed provenance. The open-PR index counts only equivalent submissions whose identity, state, and reviewed original commit remain eligible.

## Reading the queue: stage labels

Every stage of the sequence above lives in repository artifacts, not in the pull-request interface, so an open pull request used to reveal nothing about where it had reached without opening the pack and counting files. `scripts/label-lesson-pr.mjs` derives the stage from those artifacts on each run and writes one `stage:` label and one `tier:` label onto the pull request:

| Label | Means |
| --- | --- |
| `stage:authoring` | the pack is still being written |
| `stage:awaiting-review` | the candidate is frozen and waiting for the two quorum reviews |
| `stage:in-review` | one review is recorded; the second is outstanding |
| `stage:awaiting-adjudication` | both reviews are recorded and a fresh finalizer is due |
| `stage:merge-ready` | an adjudicated merge decision, published status, and ready for the maintainer |

The labels mirror the artifacts; they never control them. Nothing merges because of a label, and the required checks are unchanged — a label that disagrees with the pack is a bug in the labeller, not permission to proceed.

## Rephrasing: a maintainer-attested tier

Not every change needs a quorum. The `rephrasing` tier lets the accountable maintainer merge a wording-only repair of an **already published** lesson — a typo, a grammatical slip, an ambiguous sentence — with no reviewers and no adjudication artifact.

Skipping the sequence is only safe because "wording-only" is verified rather than asserted. `scripts/validate-rephrasing-pr.mjs` compares the published pack with the proposed one and rejects the pull request unless the mathematics, every number, the scene directives and their claim and source mappings, the section structure, the assessment, the objectives, the glossary meanings, and the references are all identical, the lesson was already published, and the version advances by exactly one patch step. Everything a reviewer would have examined must be unchanged; only the prose carrying it may move.

The tier can therefore make a published lesson easier to read. It can never change what that lesson teaches, asserts, or asks, and it cannot be used to introduce a lesson or bypass an initial review — a change that fails the gate uses the standard tier. `site/agent/quorum-policy.json` holds the machine-readable rule.

## Founding-stage agent use

One accountable maintainer may operate the author, review, and finalizer agents during the founding stage. Standard review inputs require two unique run IDs across two declared providers; the finalizer uses a third fresh run and may see the original candidate plus both complete reviews. Provenance is disclosed and attested by the operator, not verified by a platform: checks enforce internal consistency, not proof that a declared provider or model was used.

GitHub may not allow a pull-request author to submit an **Approve** or **Request changes** review. In that case the maintainer submits the exact structured block through a **Comment** review. The portable artifact and `standard-lesson-v3` determine eligibility.

## Roles

- **Academic review:** factual accuracy, calculations, outcome scope, uncertainty, source interpretation, and assessment correctness.
- **Learning-design review:** first-read comprehension, natural learner-facing prose, explanatory coherence, practice, feedback, transfer, assessment alignment, mastery, and recovery.
- **Standard finalization/adjudication:** finding dispositions, one final content revision, final accessibility-and-rights audit, verification, dissent, conditions, and merge/revise/reject accountability.
- **Accessibility-and-rights review:** remains a separate quorum role where the minor-correction or high-impact policy requires it.

The machine-readable rules in `site/agent/quorum-policy.json` are authoritative.
