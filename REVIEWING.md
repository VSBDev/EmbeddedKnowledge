# Reviewing EmbeddedKnowledge lessons

Lesson review is a public, structured sequence attached to one pull request. GitHub supplies identity and conversation; repository artifacts supply portability and deterministic quorum.

## Sequence

1. The author passes the human-first prototype gate, completes one lesson pack, batches author-audit repairs, and runs the strict source preflight plus sequential verifier.
2. The author opens one draft PR. Its `lesson-candidate` check may become green before quorum; the protected `agent-protocol` merge check is deliberately absent while the PR remains draft.
3. The author freezes a candidate content commit and stops changing teaching content.
4. Launch the academic, learning-design, and accessibility/rights agents in parallel against that exact commit. The learning-design agent cold-reads learner-visible prose before consulting ledgers or validator output.
5. Wait for all roles. If any requests changes, consolidate the complete cohort into one author revision, bump the lesson version, freeze one replacement candidate, and launch one fresh parallel cohort. Do not revise while agents are still reviewing the old commit or mix successive candidates in one current version.
6. Generate every exact GitHub review body with `npm run review:prepare`, submit and verify it against the candidate first, then copy the validated JSON block exactly into `reviews/*.json` without rewriting findings.
7. When one complete cohort satisfies the 3-agent role quorum, a fourth fresh agent run submits the structured final adjudication.
8. The author copies that block exactly to `adjudication.json` and changes only the permitted `lesson.json` status/source-confidence fields and retained `claims.json` claim `reviewStatus` fields, ending at `published` with every retained claim `reviewed` before merge.
9. The author marks the PR ready. The required `agent-protocol` check then verifies schema, graph identity, quorum, GitHub provenance, candidate immutability, and the adjudication decision.

Review artifacts are evidence, not endorsements of the project as a whole. Findings and declared limitations remain published with the lesson record. A requested change that modifies teaching content or any claims-ledger field other than retained claims' `reviewStatus` creates a new candidate commit and stales every earlier approval.

Editing or dismissing a structured GitHub review invalidates its committed provenance. The review-event workflow fails, the contributor must replace or reconcile the portable artifact, and the pull-request head validation must run again. The open-PR lesson index counts only equivalent GitHub submissions whose identity, state, and reviewed commit remain eligible.

## Founding-stage agent use

One accountable maintainer may operate all standard-lesson review and adjudication runs during the founding stage. The academic, learning-design, and accessibility/rights reviews require three unique run IDs across three distinct providers. Each starts from the frozen candidate and its bounded role prompt, without the authoring conversation. Adjudication is a fourth fresh run and may see the candidate plus all reviews. Agent provenance is mandatory in every counted artifact — and it is disclosed and attested by the accountable operator, not verified by any platform. Run IDs, providers, models, and digests are self-reported strings; checks confirm only that the declared values are internally consistent and distinct.

GitHub may not allow a pull-request author to submit an **Approve** review. In that case the maintainer submits the exact structured block through a **Comment** review. Automation matches the committed JSON to that GitHub submission, while the v2 artifact policy—not GitHub’s platform state—determines agent quorum.

## Roles

- **Academic:** factual accuracy, calculations, scope, uncertainty, source interpretation, and route relevance.
- **Learning design:** first-read comprehension and natural learner-facing prose, then alignment among outcomes, explanations, cognitive load, practice, assessment, mastery, and recovery.
- **Accessibility and rights:** semantic and equivalent access, original synthesis versus close paraphrase, source-use and agent-access terms, privacy, asset provenance, attribution, and compatible licenses under `RIGHTS-POLICY.md`.
- **Adjudication:** eligibility of the review set, resolution of blocking findings, treatment of dissent, conditions, and final merge/revise/reject reasoning.

The machine-readable minimums remain authoritative in `site/agent/quorum-policy.json`.
