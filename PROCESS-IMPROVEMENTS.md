# Review-process improvement proposals

Status: proposals for maintainer decision, drafted after running the PREM-SCI-002/003/006–011 and
PREM-WEL-001 review-and-merge cycle end to end (nine lessons, 27 agent runs).

Each item is tagged with the effort to adopt and whether it **adds**, is **neutral to**, or
**trades** rigor. Nothing here weakens a gate; the goal is to remove avoidable friction and close
two genuine rigor holes the run exposed.

Items 1 and 5 are shipped in the pull request that carries this file. Items 2–4 and 6 need a
maintainer decision because they change CI configuration, repository layout, or the review contract.

---

## Shipped in this PR

### 1. Sanctioned pinned review submission — *neutral, closes a broken documented path*

`gh pr review --comment` attaches a review to the pull request's **current HEAD**, but
`validate-pr-review-provenance.mjs` requires a review's GitHub commit to equal the `candidateCommit`
its artifact declares. The documented path was therefore broken for any review submitted after the
branch advanced. `scripts/submit-pinned-review.mjs` (`npm run review:submit`) posts through the REST
`createReview` endpoint with an explicit `commit_id`. `REVIEW-RUNBOOK.md` now points to it and the
review skills tell the agent to leave provenance placeholdered for the operator to stamp.

### 5. Provenance stamped from the runtime, not self-reported — *adds rigor* (shipped previously in the guardrails PR; the skills now match)

Two of four agents in the reference cycle declared a model they were not running, one immediately
after being warned. `review.schema.json` types `model`/`version` as free strings, so a fabricated
identity passes `validate`. The review and adjudication skills now instruct the agent to emit the
literal `RUNTIME-STAMPED` placeholder for `system`/`provider`/`model`/`version`;
`scripts/stamp-agent-provenance.mjs` fills them from the runtime banner and refuses to overwrite a
non-placeholder, and `validate-lessons.mjs` fails any committed artifact that still carries one.

---

## For maintainer decision

### 2. Adopt a GitHub merge queue — *adds rigor; highest value*

**Problem it removes.** The `main protection contract` ruleset sets
`strict_required_status_checks_policy: true`, so every lesson branch goes `BEHIND` the moment
another merges and must have `main` merged in by hand — which then conflicts on the shared generated
index every single time. Separately, pushing and marking a PR ready in one motion can dedup into a
single workflow run that still sees `draft: true`, so the required `agent-protocol` context never
runs and the PR blocks on a check that silently does not exist.

**Proposal.** Enable a merge queue on `main`. The queue rebases each PR onto the latest `main` and
runs the required check on the actual to-be-merged commit at merge time. This removes the manual
`BEHIND` refresh, removes the shared-index conflict churn, and guarantees the required context runs
on the merged state — strictly more rigorous than the current per-PR gate, which validates a commit
that may no longer be what lands.

**Effort.** Ruleset change plus a small `merge_group` trigger in `validate.yml`. No content change.

### 3. Do not commit the aggregate generated indexes — *trades inspectability for zero conflicts*

**Problem it removes.** `site/data/premed-lessons.json` and `site/data/premed-progress.json` are
whole-corpus aggregates that every lesson PR regenerates, so every lesson PR conflicts with every
other on those two files. Per-lesson generated files (`site/data/lessons/<id>.json`) do not have
this problem.

**Proposal.** Build the two aggregate files at deploy time (Pages workflow) and stop tracking them,
or move them behind a `build:aggregate` step that only CI runs. Per-lesson generated output stays
committed and inspectable — the deliberate design choice is preserved for the files where it
matters; only the two conflict-magnet aggregates move.

**Trade-off.** The aggregate index is no longer diffable in the PR. Mitigation: CI already rebuilds
and could attach or diff it as a check artifact.

### 4. A finalizer diff-scope check — *adds rigor*

**Problem it removes.** The finalizer runs with `workspace-write` and makes "one coherent post-review
revision." On PREM-SCI-003 it correctly added an entire new concept (the causal-pathway exclusion),
but nothing *surfaced* "the finalizer made a large teaching change" for a maintainer's eyes. A
runaway or off-scope finalizer edit would merge on the strength of its own `merge` decision.

**Proposal.** In `validate-lessons.mjs` (or a PR check), compare the finalizer's content diff against
the dispositioned findings and flag — not necessarily fail — a diff that is large or touches scenes
no accepted finding referenced. Keep it advisory so a justified large revision still merges, but it
no longer merges *unseen*.

### 6. An adversarial completeness pass — *adds rigor; the one gap the mechanics cannot close*

**Problem it does not remove otherwise.** Every fix above is mechanical. None catches a *plausible
but shallow* review. The first learning-design run in this cycle returned fluent, specific-looking
praise with no real finding; it was caught only by verifying findings against the pack by hand. The
gates check shape, provenance, and commit lineage — never whether the review actually found what was
there.

**Proposal.** Add an optional third agent whose sole task is "what did both reviewers miss?" — a
completeness critic reading the pack plus both reviews, emitting only net-new findings. It need not
be a quorum role; feeding its output to the finalizer as additional evidence is enough. This is the
one place more rigor costs a run rather than a script, and it is the place the run showed it is most
needed.

---

## Root-cause note for future operators

Most of the wall-clock cost of the reference cycle was not the process — it was orchestrating a
process designed for careful, human-supervised single runs as unattended automation. The specific
traps (tree detachment from write-capable agents, strict-up-to-date churn, review pinning, the
publish two-edit coupling, the push/ready dedup) are all documented in `REVIEW-RUNBOOK.md` with
working invocations. Read it before automating a batch.
