#!/usr/bin/env bash
#
# FOUNDING-STAGE OPERATOR REFERENCE TOOLING. Provider-specific (invokes the `codex` and
# `agy` CLIs) and macOS/bash-3.2 tested; not wired into npm and not part of the validated
# pipeline. It encodes the working invocation so the next operator does not rediscover it.
# The governance contract is REVIEWING.md + CONTRIBUTING.md; the mechanics are REVIEW-RUNBOOK.md.
# One driver at a time (a lock enforces this): concurrent write-capable agents can detach the
# primary working tree.
# Drive the finalization/adjudication run for one lesson pull request.
#
#   run-lesson-finalizer.sh <pr> <branch> <pack>
#
# The finalizer is a fresh run, distinct from the authoring and both review runs, that
# dispositions every finding, makes the one permitted post-review content revision, completes the
# accessibility-and-rights audit, and writes adjudication.json. It needs write access, unlike the
# reviewers. It works on a worktree checked out on the branch so its revision can be committed as
# the finalCommit that adjudication.json then cites.
set -euo pipefail

PR=$1; BRANCH=$2; PACK=$3
ROOT=$(git rev-parse --show-toplevel)
WORK=${EK_REVIEW_WORKDIR:-/tmp/ek-review}
mkdir -p "$WORK"
cd "$ROOT"

LOCK="${TMPDIR:-/tmp}/ek-lesson-driver.lock"
if ! mkdir "$LOCK" 2>/dev/null; then
  echo "another lesson driver is running (lock $LOCK); run drivers one at a time" >&2
  exit 1
fi
trap 'rmdir "$LOCK" 2>/dev/null || true' EXIT

PRIMARY_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$PRIMARY_BRANCH" = "HEAD" ]; then
  echo "refusing to run: primary working tree is detached; check out a branch first" >&2
  exit 1
fi
WT="$WORK/final-$PR-$$"
restore_primary() {
  local now
  now=$(git -C "$ROOT" rev-parse --abbrev-ref HEAD)
  [ "$now" = "$PRIMARY_BRANCH" ] || git -C "$ROOT" checkout -q "$PRIMARY_BRANCH"
  rm -rf "$WT" 2>/dev/null || true
}
trap 'restore_primary; rmdir "$LOCK" 2>/dev/null || true' EXIT

ORIGIN_URL=$(git remote get-url origin)
git fetch -q origin "$BRANCH"
rm -rf "$WT"
git clone -q --no-hardlinks "$ROOT" "$WT"
git -C "$WT" checkout -q -B "$BRANCH" "$(git rev-parse "origin/$BRANCH")"
CANDIDATE=$(git -C "$WT" rev-parse HEAD)
LESSON=$(python3 -c 'import json,sys;print(json.load(open(sys.argv[1]))["id"])' "$WT/lessons/$PACK/lesson.json")
VERSION=$(python3 -c 'import json,sys;print(json.load(open(sys.argv[1]))["version"])' "$WT/lessons/$PACK/lesson.json")

# The candidate the reviews actually targeted, not necessarily the branch tip: committing a
# review artifact advances the branch, and reviews/ is excluded from the post-final check.
REVIEW_CANDIDATE=$(python3 - "$WT/lessons/$PACK/reviews" "$VERSION" <<'PY'
import json, sys, pathlib, collections
seen = collections.Counter()
for f in pathlib.Path(sys.argv[1]).glob("*.json"):
    d = json.loads(f.read_text())
    if d.get("lessonVersion") == sys.argv[2]:
        seen[d["candidateCommit"]] += 1
if len(seen) != 1:
    sys.exit(f"expected exactly one reviewed candidate commit for {sys.argv[2]}, found {dict(seen)}")
print(next(iter(seen)))
PY
)

REVIEW_LIST=$(python3 - "$WT/lessons/$PACK/reviews" "$VERSION" <<'PY'
import json, sys, pathlib
for f in sorted(pathlib.Path(sys.argv[1]).glob("*.json")):
    d = json.loads(f.read_text())
    if d.get("lessonVersion") == sys.argv[2]:
        a = d["reviewer"]["agent"]
        print(f"    {d['reviewId']}  role={d['role']}  verdict={d['verdict']}  {a['provider']} {a['model']}")
PY
)

RUN_ID="codex-finalizer-$LESSON-$(uuidgen)"
PROMPT="$WORK/prompt-final-$PR.md"
cat > "$PROMPT" <<EOF
You are the FRESH FINALIZER / ADJUDICATOR for one EmbeddedKnowledge lesson, per
.agents/skills/adjudicate-embeddedknowledge-lesson/SKILL.md. You did not author this lesson and
did not write any review. Follow that skill.

SCOPE: work only inside lessons/$PACK/ . Do NOT read or modify scripts/, site/, workflows, or any
other lesson pack. Consult CONTENT-STANDARD.md and RIGHTS-POLICY.md at most once each.

CONTEXT
- Lesson pack: lessons/$PACK    Lesson ID: $LESSON    Version: $VERSION
- Risk tier: standard           Policy: standard-lesson-v3
- Original candidate commit reviewed: $REVIEW_CANDIDATE
- Accountable GitHub principal: github:VSBDev
- Your run ID: $RUN_ID
- Eligible reviews already committed under lessons/$PACK/reviews/:
$REVIEW_LIST
  Their GitHub transports are COMMENTED reviews on pull request $PR. COMMENTED reflects
  author-transport, not dismissal. request-changes is an eligible advisory verdict for this tier.

TASK, in order:
1. Read every eligible review artifact and the whole pack. Disposition EVERY finding in each.
2. Make ONE coherent post-review content revision resolving the findings you accept. Do NOT edit
   any file under reviews/. Do NOT bump the lesson version. Leave lesson.json status as it is;
   the maintainer performs the publication transition separately.
3. Personally complete the accessibility-and-rights audit of the resulting pack.
4. Write lessons/$PACK/adjudication.json against site/schemas/adjudication.schema.json.
   Use candidateCommit $REVIEW_CANDIDATE. Leave finalCommit as the literal string
   "PENDING-FINAL-COMMIT"; the operator substitutes the real SHA after committing your revision,
   which does not exist while you work. Decide merge, revise, or reject on the evidence. Record
   dissent and conditions honestly. Do not claim a quorum property you did not verify.
5. PROVENANCE: in adjudicator.agent set system/provider/model/version to the literal string
   "RUNTIME-STAMPED". The operator stamps these from the runtime banner, because agents in this
   project have repeatedly misreported their own model. Use the run ID above. Real UTC adjudicatedAt.

Do NOT git commit, git push, or run npm. Only edit files. End with a plain-text list of every
file you changed and every finding disposition.
EOF

DIGEST="sha256:$(shasum -a 256 "$PROMPT" | cut -d' ' -f1)"
FULL="$WORK/full-final-$PR.md"
{ cat "$PROMPT"; echo; echo "Material-instructions digest to disclose: $DIGEST"; } > "$FULL"

OUT="$WORK/out-final-$PR.txt"; ERR="$WORK/err-final-$PR.txt"
echo "[$PR/finalizer] running codex against $CANDIDATE (reviews target $REVIEW_CANDIDATE)"
codex exec --sandbox workspace-write -C "$WT" - < "$FULL" > "$OUT" 2> "$ERR" || true

git -C "$ROOT" rev-parse --verify -q "$PRIMARY_BRANCH" >/dev/null && git -C "$ROOT" checkout -q "$PRIMARY_BRANCH" 2>/dev/null || true
MODEL=$(grep -m1 '^model:' "$ERR" | sed 's/^model: *//')
VER=$(grep -m1 -oE 'OpenAI Codex v[0-9.]+' "$ERR" | sed 's/OpenAI Codex v/codex-cli /')
[ -n "$MODEL" ] || { echo "[$PR/finalizer] FAILED: no runtime model in $ERR"; exit 1; }
[ -f "$WT/lessons/$PACK/adjudication.json" ] || { echo "[$PR/finalizer] FAILED: no adjudication.json produced"; exit 1; }

# Reviews are evidence; a finalizer that edits them has destroyed the record it was judging.
if ! git -C "$WT" diff --quiet -- "lessons/$PACK/reviews"; then
  echo "[$PR/finalizer] FAILED: finalizer modified committed review artifacts"; exit 1
fi

git -C "$WT" add "lessons/$PACK/content" "lessons/$PACK/claims.json" "lessons/$PACK/lesson.json" \
                 "lessons/$PACK/ATTRIBUTION.md" "lessons/$PACK/assessment.json" \
                 "lessons/$PACK/glossary.json" "lessons/$PACK/references.json" 2>/dev/null || true
if git -C "$WT" diff --cached --quiet; then
  echo "[$PR/finalizer] no content revision produced; adjudication only"
  FINAL="$CANDIDATE"
else
  git -C "$WT" commit -q -m "Finalize $LESSON $VERSION content after review

One coherent post-review revision by a fresh finalizer run, distinct from the
authoring run and from every review run. Dispositions are recorded in
adjudication.json against reviewed candidate $REVIEW_CANDIDATE."
  FINAL=$(git -C "$WT" rev-parse HEAD)
fi

# Validate the finalizer's content revision before trusting it. The finalizer runs in a clone
# without node_modules and its prompt forbids npm, so it cannot self-validate; a schema violation
# (e.g. an over-long field) would otherwise reach CI. Symlink deps and validate here.
ln -sfn "$ROOT/node_modules" "$WT/node_modules"
EXC_F=$(git -C "$WT" rev-parse --git-path info/exclude); echo node_modules >> "$EXC_F"
( cd "$WT" && npm run --silent site:build >/dev/null 2>&1 && npm run validate ) > "$WORK/finalvalidate-$PR.log" 2>&1
if [ "${PIPESTATUS:-$?}" -ne 0 ] && ! grep -q "packs valid" "$WORK/finalvalidate-$PR.log"; then
  echo "[$PR/finalizer] FAILED: finalizer output does not validate; see $WORK/finalvalidate-$PR.log"
  grep -iE "must NOT|error|invalid|required" "$WORK/finalvalidate-$PR.log" | head -5
  exit 1
fi
# discard the site rebuild from the clone; site output is regenerated on the branch by finish-pr
git -C "$WT" checkout -- site/ 2>/dev/null || true

node "$ROOT/scripts/stamp-agent-provenance.mjs" "$WT/lessons/$PACK/adjudication.json" \
  --system="OpenAI Codex" --provider="OpenAI" --model="$MODEL" --version="$VER" --final-commit="$FINAL"

DECISION=$(python3 -c 'import json,sys;print(json.load(open(sys.argv[1]))["decision"])' "$WT/lessons/$PACK/adjudication.json")
git -C "$WT" add "lessons/$PACK/adjudication.json"
git -C "$WT" commit -q -m "Adjudicate $LESSON $VERSION

Decision $DECISION for reviewed candidate $REVIEW_CANDIDATE and final content
commit $FINAL. Adjudicator provenance stamped from the runtime banner rather
than model self-report."
git -C "$WT" push -q "$ORIGIN_URL" "HEAD:$BRANCH"
echo "[$PR/finalizer] decision=$DECISION final=$FINAL model=$MODEL"
