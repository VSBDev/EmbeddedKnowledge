# Lesson review runbook

Operational companion to [`REVIEWING.md`](REVIEWING.md) and [`CONTRIBUTING.md`](CONTRIBUTING.md).
Those define what the governance sequence *is*. This records how to actually execute it, and the
failure modes that cost the most time in practice.

Derived from the PREM-SCI-004 `0.1.1` correction cycle, which needed six agent invocations to
produce two usable reviews and six CI runs to reach a green required check. Every trap below was
hit at least once in that cycle.

## Three runs per lesson, not two

| Run | Role | Constraint |
| --- | --- | --- |
| 1 | academic | `roleMinimums.academic: 1` |
| 2 | learning-design | `roleMinimums.learning-design: 1` |
| 3 | finalization / adjudication | `adjudicationRunMustDifferFromAuthorAndReviewRuns` |

`minimumDistinctAgentModelFamilies: 2` is keyed on `agent.provider` (see `modelFamilyKey` in
`scripts/lib/provenance.mjs`), so the two reviews must come from **different vendors**. Two runs
of the same CLI do not satisfy quorum no matter how isolated they are.

`abstain` is not an eligible verdict for the standard tier. A reviewer that abstains has produced
nothing usable, so tell it so explicitly in the prompt.

## Working invocations

Run every agent in a detached worktree pinned to the frozen candidate, never in the primary
working tree:

```bash
git worktree add --detach /tmp/review-<pr> <candidate-sha>
```

**Academic review — Codex (OpenAI).** Read-only sandbox makes editing the lesson impossible
rather than merely forbidden:

```bash
codex exec --sandbox read-only -C /tmp/review-<pr> - < prompt-academic.md
```

**Learning-design review — Agy (Google):**

```bash
agy --print "$(cat prompt-learning.md)" --model gemini-3.5-flash-high --effort high \
    --mode plan --dangerously-skip-permissions --print-timeout 25m
```

Do **not** pass `agy --sandbox`. It enables terminal restrictions, the agent's first shell call is
blocked with no message on either stream, and it exits `0` after emitting a stub. Silent failure
with a success code. `--mode plan` gives read-only protection without severing the shell.

**Finalizer — needs write access**, since its job is the one permitted post-review revision:

```bash
codex exec --sandbox workspace-write -C /tmp/final-<pr> - < prompt-finalizer.md
```

### Prompt requirements

- **Bound the reading scope.** An unbounded academic review looped for 65 minutes re-reading
  `RIGHTS-POLICY.md` and `CONTENT-STANDARD.md` 32 times each and never emitted output. Exclude
  `scripts/`, workflows, and other packs.
- **But require the full pack.** Capping tool calls and forbidding re-reads caused truncated file
  reads and a forced `abstain`. Permit re-reads; restrict breadth, not depth.
- **Forbid `abstain` explicitly** and require unreachable evidence to go in `limitations`.
- **Reject unspecific findings.** A review whose only finding is praise with no file target is not
  evidence of review.
- **Demand the provenance placeholder**, never a self-report. See below.

## Provenance: agents misreport their own identity

Two of four runs in the reference cycle declared a model they were not running:

| Declared | Actually running |
| --- | --- |
| `gemini-pro` / `1.0` | `gemini-2.5-pro` |
| `gpt-5.4` | `gpt-5.6-sol` |

The second did this immediately after being told a prior reviewer had just been rejected for it.
`review.schema.json` types `model` and `version` as free strings, so `npm run validate` passes a
fabricated identity and the review-provenance gate cannot detect it either.

Instruct the agent to emit the literal placeholder `RUNTIME-STAMPED` for
`system` / `provider` / `model` / `version`, then stamp them from the runtime:

```bash
npm run provenance:stamp -- <artifact.json> \
  --system="OpenAI Codex" --provider=OpenAI --model=gpt-5.6-sol --version="codex-cli 0.144.6"
```

Read the values from the runtime, not the transcript: Codex prints `model:` and
`OpenAI Codex v<version>` in its startup banner; for Agy use the `--model` you passed plus
`agy --version`. `npm run provenance:stamp` refuses to overwrite a non-placeholder, and
`validate-lessons.mjs` fails any pack whose committed artifact still carries one.

The agent keeps every judgement — findings, verdict, dispositions, limitations. Only the facts it
cannot report reliably about itself are supplied by the operator.

## Submitting artifacts

All three artifacts need a structured GitHub submission, not just the two reviews.
`validate-pr-review-provenance.mjs` fails with `has no equivalent structured GitHub adjudication
submission` if the adjudication is committed but never posted.

```bash
npm run review:prepare -- <artifact.json> --candidate <sha> --github-login <login> \
  --state approved --output body.md
gh pr review <pr> --comment --body-file body.md
```

Use `--comment`. GitHub refuses to let a pull-request author approve their own PR, and
`allowedReviewStates` accepts `commented` while `foundingStage.active` is true.

## Publishing

Publication is **two coupled edits**. `lesson.json` status and source confidence, *and* every
`claims.json` entry to `reviewStatus: reviewed` — `lesson-evidence.mjs` rejects a published lesson
whose claims are still pending-review. Doing only the first leaves the pack failing validation:

```bash
npm run lesson:publish -- lessons/<pack>            # --check to preview
npm run site:build && npm run validate
```

The script refuses to publish a pack with no adjudication, a non-`merge` decision, an unsatisfied
quorum, or an unstamped `finalCommit`.

## CI trigger traps

**Rebuild `site/` on the branch.** `npm run site:build` regenerates against whatever tree is
checked out. Running it from a directory sitting on `main` leaves the branch carrying stale
generated files, and CI fails with `Committed generated files under site/ do not match a fresh
build`.

**Do not push and mark ready in one motion.** The two events can collapse into a single workflow
run whose payload still reads `draft: true`, producing a green `lesson-candidate` and no
`agent-protocol` — the only context the `main protection contract` ruleset requires. The pull
request then blocks on a check that never ran. Let the push settle, then mark ready; or use
`workflow_dispatch` to produce the required context.

**Posting an artifact now re-triggers this gate.** `validate.yml` listens for
`pull_request_review`, so a submitted review or adjudication re-evaluates the gate rather than
leaving a stale red check. If a check is still stale, re-run it from the Actions tab
(`workflow_dispatch`) instead of toggling draft.
