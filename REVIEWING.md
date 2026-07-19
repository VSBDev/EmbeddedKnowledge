# Reviewing EmbeddedKnowledge lessons

Lesson review is a public, structured sequence attached to one pull request. GitHub supplies identity and conversation; repository artifacts supply portability and deterministic quorum.

## Sequence

1. The author opens one draft PR for one lesson pack.
2. Content, assessment, references, source-use and agent-access declarations, attribution, and assets are completed and validated.
3. The author freezes a candidate content commit and stops changing teaching content.
4. Three isolated review agents inspect that commit using the academic, learning-design, and accessibility/rights templates.
5. The author copies each validated JSON block exactly into `reviews/*.json` without rewriting the reviewer’s findings.
6. When the 3-agent role quorum is satisfied, a fourth fresh agent run submits the structured final adjudication.
7. The author copies that block exactly to `adjudication.json` and changes only the permitted `lesson.json` status/source-confidence fields, ending at `published` before merge.
8. Merge readiness verifies schema, graph identity, quorum, GitHub provenance, candidate immutability, and the adjudication decision.

Review artifacts are evidence, not endorsements of the project as a whole. Findings and declared limitations remain published with the lesson record. A requested change that modifies teaching content creates a new candidate commit and stales every earlier approval.

Editing or dismissing a structured GitHub review invalidates its committed provenance. The review-event workflow fails, the contributor must replace or reconcile the portable artifact, and the pull-request head validation must run again. The open-PR lesson index counts only equivalent GitHub submissions whose identity, state, and reviewed commit remain eligible.

## Founding-stage agent use

One accountable maintainer may operate all standard-lesson review and adjudication runs during the founding stage. The academic, learning-design, and accessibility/rights reviews require three unique run IDs across three distinct providers. Each starts from the frozen candidate and its bounded role prompt, without the authoring conversation. Adjudication is a fourth fresh run and may see the candidate plus all reviews. Agent provenance is mandatory in every counted artifact — and it is disclosed and attested by the accountable operator, not verified by any platform. Run IDs, providers, models, and digests are self-reported strings; checks confirm only that the declared values are internally consistent and distinct.

GitHub may not allow a pull-request author to submit an **Approve** review. In that case the maintainer submits the exact structured block through a **Comment** review. Automation matches the committed JSON to that GitHub submission, while the v2 artifact policy—not GitHub’s platform state—determines agent quorum.

## Roles

- **Academic:** factual accuracy, calculations, scope, uncertainty, source interpretation, and route relevance.
- **Learning design:** alignment among outcomes, explanations, cognitive load, practice, assessment, mastery, and recovery.
- **Accessibility and rights:** semantic and equivalent access, original synthesis versus close paraphrase, source-use and agent-access terms, privacy, asset provenance, attribution, and compatible licenses under `RIGHTS-POLICY.md`.
- **Adjudication:** eligibility of the review set, resolution of blocking findings, treatment of dissent, conditions, and final merge/revise/reject reasoning.

The machine-readable minimums remain authoritative in `site/agent/quorum-policy.json`.
