#!/usr/bin/env bash
#
# FOUNDING-STAGE OPERATOR REFERENCE TOOLING. Provider-specific (invokes the `codex` and
# `agy` CLIs) and macOS/bash-3.2 tested; not wired into npm and not part of the validated
# pipeline. It encodes the working invocation so the next operator does not rediscover it.
# The governance contract is REVIEWING.md + CONTRIBUTING.md; the mechanics are REVIEW-RUNBOOK.md.
# One driver at a time (a lock enforces this): concurrent write-capable agents can detach the
# primary working tree.
# Drive one review role for one lesson pull request, end to end.
#
#   run-lesson-review.sh <pr> <branch> <pack> <role> <provider>
#     role      academic | learning-design
#     provider  codex | agy
#
# Runs the agent read-only against a detached worktree pinned to the frozen candidate, stamps
# provenance from the runtime instead of the agent's self-report, prepares the exact GitHub body,
# posts it as a Comment review, and commits the artifact. Every step from REVIEW-RUNBOOK.md.
set -euo pipefail

PR=$1; BRANCH=$2; PACK=$3; ROLE=$4; PROVIDER=$5
ROOT=$(git rev-parse --show-toplevel)
WORK=${EK_REVIEW_WORKDIR:-/tmp/ek-review}
mkdir -p "$WORK"

cd "$ROOT"

# The primary working tree must never move. An earlier version of this script left the main
# repository detached at a pull-request commit, which silently removed every file that lives
# only on main -- including the provenance stamper this script depends on. Record the branch up
# front, refuse to run detached, and re-assert it on exit however the script terminates.
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
restore_primary() {
  local now
  now=$(git -C "$ROOT" rev-parse --abbrev-ref HEAD)
  if [ "$now" != "$PRIMARY_BRANCH" ]; then
    echo "[guard] primary tree moved to $now; restoring $PRIMARY_BRANCH" >&2
    git -C "$ROOT" checkout -q "$PRIMARY_BRANCH"
  fi
  [ -n "${WT:-}" ] && rm -rf "$WT" 2>/dev/null || true
}
trap 'restore_primary; rmdir "$LOCK" 2>/dev/null || true' EXIT

git fetch -q origin "$BRANCH"
SHA=$(git rev-parse "origin/$BRANCH")
VERSION=$(git show "origin/$BRANCH:lessons/$PACK/lesson.json" | python3 -c 'import json,sys;print(json.load(sys.stdin)["version"])')
LESSON=$(git show "origin/$BRANCH:lessons/$PACK/lesson.json" | python3 -c 'import json,sys;print(json.load(sys.stdin)["id"])')

WT="$WORK/wt-$PR-$ROLE-$$"
rm -rf "$WT"
git clone -q --no-hardlinks "$ROOT" "$WT"
git -C "$WT" checkout -q --detach "$SHA"


RUN_ID="$PROVIDER-$ROLE-$LESSON-$(uuidgen)"
PROMPT="$WORK/prompt-$PR-$ROLE.md"
SKILL="review-embeddedknowledge-$ROLE"
# macOS ships bash 3.2, which has no ${var^^} expansion.
ROLE_UPPER=$(printf %s "$ROLE" | tr "[:lower:]" "[:upper:]")

cat > "$PROMPT" <<EOF
You are performing the $ROLE_UPPER quorum review role for one EmbeddedKnowledge lesson candidate,
per .agents/skills/$SKILL/SKILL.md. Apply that skill's judgement rules. Do not edit any file,
adjudicate, or perform another role.

SCOPE — a prior run looped for 65 minutes re-reading policy docs and produced nothing:
- You MUST fully read every file in lessons/$PACK/ , including all content/*.md and assessment.json.
  Read in chunks if output truncates. Re-reading a file to finish it is REQUIRED, not forbidden.
- Do NOT read scripts/, site/, workflows, or any other lesson pack.
- Consult CONTENT-STANDARD.md and RIGHTS-POLICY.md at most once each, only if needed.

You MUST reach a verdict of "approve" or "request-changes". "abstain" is NOT eligible for this
tier and discards your work entirely. Record unreachable evidence in "limitations" and still
decide. Every finding needs a concrete file target; generic praise with no target is not a
finding and will be rejected.

MATERIAL INSTRUCTIONS
- Lesson pack: lessons/$PACK    Lesson ID: $LESSON    Version: $VERSION
- Candidate commit: $SHA
- Accountable GitHub principal: github:VSBDev
- Role: $ROLE     Your run ID: $RUN_ID

PROVENANCE: set reviewer.agent.system/provider/model/version to the literal string
"RUNTIME-STAMPED" for all four. The operator stamps these from the runtime banner, because
agents in this project have repeatedly misreported their own model. Use the run ID above and the
digest below. Set signedAt to the real current UTC time.

OUTPUT: exactly one fenced block tagged embeddedknowledge-review containing JSON valid against
site/schemas/review.schema.json. Print nothing after the block.
EOF

DIGEST="sha256:$(shasum -a 256 "$PROMPT" | cut -d' ' -f1)"
FULL="$WORK/full-$PR-$ROLE.md"
{ cat "$PROMPT"; echo; echo "Material-instructions digest to disclose: $DIGEST"; } > "$FULL"

OUT="$WORK/out-$PR-$ROLE.txt"; ERR="$WORK/err-$PR-$ROLE.txt"
echo "[$PR/$ROLE] running $PROVIDER against $SHA"
if [ "$PROVIDER" = "codex" ]; then
  codex exec --sandbox read-only -C "$WT" - < "$FULL" > "$OUT" 2> "$ERR" || true
  SYSTEM="OpenAI Codex"; PROVIDER_NAME="OpenAI"
  MODEL=$(grep -m1 '^model:' "$ERR" | sed 's/^model: *//')
  VER=$(grep -m1 -oE 'OpenAI Codex v[0-9.]+' "$ERR" | sed 's/OpenAI Codex v/codex-cli /')
else
  AGY_MODEL=${EK_AGY_MODEL:-gemini-3.5-flash-high}
  ( cd "$WT" && agy --print "$(cat "$FULL")" --model "$AGY_MODEL" --effort high \
      --mode plan --dangerously-skip-permissions --print-timeout 25m ) > "$OUT" 2> "$ERR" || true
  SYSTEM="Agy"; PROVIDER_NAME="Google"; MODEL="$AGY_MODEL"; VER="Agy $(agy --version | head -1)"
fi

# The agent may have detached the primary tree; the scripts we call next live only on the
# primary branch. Re-assert it before using them.
git -C "$ROOT" rev-parse --verify -q "$PRIMARY_BRANCH" >/dev/null && git -C "$ROOT" checkout -q "$PRIMARY_BRANCH" 2>/dev/null || true

[ -n "$MODEL" ] || { echo "[$PR/$ROLE] FAILED: could not read runtime model from $ERR"; exit 1; }

ART="$WORK/review-$PR-$ROLE.json"
python3 - "$OUT" "$ART" <<'PY'
import re, json, sys
m = re.search(r"```embeddedknowledge-review\s*\n(.*?)```", open(sys.argv[1]).read(), re.S)
if not m:
    sys.exit("no embeddedknowledge-review block in agent output")
d=json.loads(m.group(1))
for f in d.get("findings",[]):
    if isinstance(f.get("target"),str) and len(f["target"])>240: f["target"]=f["target"][:237].rstrip()+"..."
json.dump(d, open(sys.argv[2], "w"), indent=2)
PY

npm run --silent provenance:stamp -- "$ART" \
  --system="$SYSTEM" --provider="$PROVIDER_NAME" --model="$MODEL" --version="$VER"

VERDICT=$(python3 -c 'import json,sys;print(json.load(open(sys.argv[1]))["verdict"])' "$ART")
STATE=$([ "$VERDICT" = "approve" ] && echo approved || echo changes_requested)
BODY="$WORK/body-$PR-$ROLE.md"
npm run --silent review:prepare -- "$ART" --candidate "$SHA" --github-login VSBDev --state "$STATE" --output "$BODY"

node "$ROOT/scripts/submit-pinned-review.mjs" "$BODY" "$PR" "$SHA" || { echo "[$PR/$ROLE] submit failed"; exit 1; }
echo "[$PR/$ROLE] submitted: $VERDICT ($SYSTEM $MODEL)"

REVIEW_ID=$(python3 -c 'import json,sys;print(json.load(open(sys.argv[1]))["reviewId"])' "$BODY.json" 2>/dev/null \
  || python3 - "$BODY" <<'PY'
import re,json,sys
print(json.loads(re.search(r"```embeddedknowledge-review\s*\n(.*?)```", open(sys.argv[1]).read(), re.S).group(1))["reviewId"])
PY
)

echo "[$PR/$ROLE] artifact ready at $ART (reviewId $REVIEW_ID) — commit it onto $BRANCH"
