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

Before submission, generate the exact fenced body from the artifact and pin the candidate, operator, and intended GitHub state:

```bash
npm run review:prepare -- lessons/PREM-XXX-000-example/reviews/academic.json \
  --candidate REPLACE_WITH_40_CHARACTER_COMMIT_SHA \
  --github-login REPLACE_WITH_GITHUB_LOGIN \
  --state commented \
  --output /tmp/embeddedknowledge-review-body.md
gh pr review REPLACE_WITH_PR_NUMBER --comment --body-file /tmp/embeddedknowledge-review-body.md
```

Use `approved` or `changes_requested` when the platform permits the corresponding state. Submit and verify the GitHub review first, then commit and push the byte-equivalent artifact. That order keeps the branch provenance check green instead of creating a temporary artifact-without-transport failure.

Each agent run works in an isolated detached worktree and returns an artifact-only commit to the orchestrator. Review and adjudication agents do not push the shared lesson branch. A substantive revision bumps the lesson version before the next candidate freeze. Give every review cycle explicit filenames and unique IDs, and tell the adjudicator exactly which current-cycle review IDs may count; older-version artifacts remain traceability records, not implicit votes. The public proposal index fails closed instead of guessing when one current lesson version contains approvals for multiple candidate commits.

Reviewers must inspect the candidate content commit, not a later governance-only commit. Evidence targets use exact pack-relative paths and stable IDs, such as `content/03-worked-example.md#...`, `claims.json#claim-...`, or `assessment.json#item-...`. If scene content, metadata, assessment, claims, references, glossary, attribution, diagrams, or assets change, every approval becomes stale and must be resubmitted against the new candidate.
