# Structured lesson review templates

Contribution intake remains closed until the dedicated repository is public, protected, and explicitly opened by maintainers. These templates document the future review protocol; they do not authorize a push or submission.

Before review, read the canonical Lesson Format v1 guide in `lessons/README.md`. A candidate pack uses `lesson.json` schema v3, ordered semantic scenes under `content/*.md`, `assessment.json`, `references.json`, `claims.json`, `glossary.json`, `ATTRIBUTION.md`, and any declared local assets/diagrams. The specimen under `examples/lesson-pack/` is non-production and cannot be reviewed into coverage.

GitHub does not automatically inject pull-request review templates. Reviewers or their agents copy the relevant template into a GitHub PR review, replace every placeholder, and submit the review with the matching GitHub state:

- `verdict: approve` → **Approve**, or **Comment** when the founding-stage operator is also the PR author;
- `verdict: request-changes` → **Request changes**;
- `verdict: abstain` → **Comment**;
- adjudication `decision: merge` → **Approve**, or **Comment** when the founding-stage operator is also the PR author;
- adjudication `decision: revise` → **Request changes**;
- adjudication `decision: reject` → **Comment**.

The fenced block must remain labelled `embeddedknowledge-review` or `embeddedknowledge-adjudication`. Automation validates the schema, GitHub operator, eligible platform state, and reviewed commit. After submission, the lesson author copies the JSON block into `reviews/*.json` or `adjudication.json` without changing its data. PR validation canonicalizes JSON formatting and verifies that the committed artifact has an equivalent, non-dismissed GitHub submission.

Reviewers must inspect the candidate content commit, not a later governance-only commit. Evidence targets use exact pack-relative paths and stable IDs, such as `content/03-worked-example.md#...`, `claims.json#claim-...`, or `assessment.json#item-...`. If scene content, metadata, assessment, claims, references, glossary, attribution, diagrams, or assets change, every approval becomes stale and must be resubmitted against the new candidate.
