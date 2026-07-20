# `main` protection contract

Status: **active and exercised**. The repository is public at `VSBDev/EmbeddedKnowledge`. Repository ruleset `main protection contract` (id `19180386`) was created and enforced on 19 July 2026, before any content was pushed. Its candidate, structured-review, finalization, publication, and Pages paths have since been exercised through real lesson pull requests.

## Currently enforced

Ruleset target: `~DEFAULT_BRANCH`. Enforcement: `active`.

| Rule | Effect |
| --- | --- |
| `pull_request` | A pull request is required before merging. Approval count is **0** by design — see "Quorum source of truth". |
| `pull_request.dismiss_stale_reviews_on_push` | Platform approvals are dismissed when new commits are pushed. |
| `pull_request.required_review_thread_resolution` | All conversations must be resolved before merge. |
| `required_status_checks` | The `agent-protocol` job in `.github/workflows/validate.yml` must pass. |
| `required_status_checks.strict` | Branches must be up to date with `main` before merge. |
| `non_fast_forward` | Force pushes to `main` are rejected. |
| `deletion` | `main` cannot be deleted. |

Lesson validation uses two mutually exclusive check names on a pull-request SHA. While a lesson pull request is draft, the green `lesson-candidate` context enforces generated-output integrity, pack/file scope, structural and rights validation, review-candidate freshness, any committed review provenance, and tests without creating the protected `agent-protocol` context. Marking the pull request ready emits `ready_for_review` and creates the required `agent-protocol` context with full adjudication, quorum, frozen-candidate, and publication-readiness enforcement. Because drafts never create that protected context, a draft success cannot be reused as ready-state approval on the same SHA. Converting back to draft reruns candidate validation. A green draft therefore means candidate-valid, never merge-ready.

Allowed merge methods: merge and squash. Rebase is disabled so that the merge commit preserves the reviewed candidate commit.

## Merge authority — read this carefully

**Merge authority currently rests on access control, not on a rule.**

GitHub provides no per-user merge permission on personal repositories. "Restrict who can push to matching branches" is an organization-only feature and is unavailable here. Anyone granted write access to this repository can merge any pull request that satisfies the rules above.

Today the collaborator list is exactly one entry: `VSBDev` (admin). That — and only that — is why the accountable operator is the sole merger. It is a property of the current access list, not a guarantee of the ruleset.

Consequences that remain part of repository operations:

- Granting any collaborator write access grants them merge rights over lessons. Use read access plus fork-based pull requests for contributors who do not need write.
- To make sole-merger status a genuine policy rather than a circumstance, move the repository into a GitHub organization and restrict pushes to `main` to a named team.

## Administrator bypass removed

The ruleset originally granted `RepositoryRole 5` (repository admin) an `always` bypass because an empty repository could not create protected `main` through a pull request. That bootstrap bypass was used to create the branch and land the first release, then removed on 20 July 2026 after both `agent-protocol` and the Pages deployment passed on the protected branch.

The current ruleset reports an empty `bypass_actors` list and `current_user_can_bypass: never`. Administrators must now use a pull request and satisfy the same required checks. Any future emergency bypass is a material governance change and must be documented publicly when introduced and removed.

Verify that the bypass remains absent with:

```bash
gh api repos/VSBDev/EmbeddedKnowledge/rulesets/19180386 \
  --jq '{bypass_actors, current_user_can_bypass}'
```

## Quorum source of truth

GitHub review requests and CODEOWNERS are routing aids. The portable, enforceable quorum is the set of schema-valid review JSON artifacts and `adjudication.json` checked by `npm run agent:validate` and matched to equivalent, non-dismissed GitHub reviews by the pull-request provenance check.

Platform approval counts are deliberately set to zero: a pull request author cannot formally approve their own pull request, so requiring platform approvals during the founding stage would block the disclosed single-operator model without adding any real independence.

For a standard lesson this means:

- 1 academic advisory review input;
- 1 learning-design advisory review input;
- 2 unique review run IDs across 2 distinct providers;
- 1 additional fresh finalizer that disposes every finding, writes the final version once, audits accessibility and rights, and adjudicates the result;
- one disclosed accountable operator may run all three agents during the founding stage;
- both reviews target the same original candidate commit;
- no unresolved blocking finding may remain in a merge decision.

Agent provenance — system, provider, model, version, run ID, and instructions digest — is **disclosed and attested by the accountable operator. It is not cryptographically verified.** Do not describe the quorum as proving that three independent models reviewed a lesson; it records that the operator attested they did, in a form that is auditable and falsifiable after the fact.

When a broader reviewer community exists, add required-reviewer rules as defense in depth and revise the founding-stage policy explicitly. Do not pretend platform approval counts represent the current agent quorum.

## Workflow integrity

`validate-lesson-pr.mjs` rejects a lesson pull request that changes anything outside its single `lessons/<pack>/` directory except the narrowly enumerated public artifacts derived from that pack: the shared lesson index and progress ledger, the compiled JSON for the pack's lesson ID, and that ID's copied asset subtree. The workflow rebuilds `site/` first and rejects any committed generated byte that differs. Gate, workflow, package, test, sibling-pack, and unrelated site changes remain forbidden. This is load-bearing: workflow and validator code runs from the pull request's own merge ref, so a lesson pull request must not be able to edit the checks that police it and still report a green `agent-protocol` status.

A pull request may also remove one complete pack that exists at its base. In that case every path change inside the pack must be a deletion, no tracked pack file may remain, the compiled lesson detail must be absent, and only that lesson's deterministic shared/index/detail/asset outputs remain in scope. Deleted review and adjudication files do not assert new GitHub provenance. Because complete removal withdraws the teaching claims and coverage rather than introducing or approving content, the removed pack's old review quorum is not required to authorize its absence; the protected pull-request merge and public history remain the decision record.

Infrastructure changes must therefore travel in separate pull requests that contain no lesson pack. Require code-owner review on `/scripts/` and `/.github/` before granting any contributor write access.

The `structured-lesson-review` workflow runs from trusted default-branch code whenever a review is submitted, edited, or dismissed. Edited and dismissed structured reviews deliberately fail until the pull request commits a reconciled artifact and reruns the head validation. Real lesson pull requests have confirmed that GitHub displays these failures against the current pull request merge ref and prevents merge under the ruleset.

## Re-verifying this document

```bash
gh api repos/VSBDev/EmbeddedKnowledge/rulesets/19180386 \
  --jq '{name,enforcement,bypass:.bypass_actors,rules:[.rules[].type]}'
gh api repos/VSBDev/EmbeddedKnowledge/collaborators --jq '.[] | "\(.login): \(.role_name)"'
```

If the collaborator list ever contains more than the accountable operator, the "Merge authority" section above is no longer accurate and must be revised in the same change.
