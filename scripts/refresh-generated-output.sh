#!/usr/bin/env bash
# Refresh the corpus-wide generated output after a batch of lessons has merged.
#
# The lesson indexes, progress and terminology ledgers, landing-page counters, and agent context
# derive from every published lesson, so a lesson pull request no longer carries them: requiring it
# made every merge invalidate every other open request, and the cost of landing a block grew with
# the square of its size.
#
# They cannot be refreshed by a workflow either. This repository sets the default workflow token to
# read-only, and the main ruleset requires a pull request with no bypass actor, so nothing running in
# Actions can commit here. Both are the right settings and neither is worth weakening for a counter.
#
# So the refresh is an operator step: run this once after a batch merges, and it opens one pull
# request carrying the rebuilt output. One request per batch, instead of one conflict per lesson.
set -euo pipefail
ROOT=$(git rev-parse --show-toplevel); cd "$ROOT"
BRANCH="chore/refresh-generated-$(git rev-parse --short origin/main)"
WT="${TMPDIR:-/tmp}/ek-refresh-$$"
git fetch -q origin main
git worktree remove --force "$WT" 2>/dev/null || true
git worktree add -q --detach "$WT" origin/main
ln -sfn "$ROOT/node_modules" "$WT/node_modules"
exc=$(git -C "$WT" rev-parse --git-path info/exclude); echo node_modules >> "$exc"
( cd "$WT" && npm run --silent graph:build >/dev/null 2>&1 && npm run --silent site:build >/dev/null 2>&1 )
rm -f "$WT/node_modules"
if git -C "$WT" diff --quiet -- site/; then
  echo "Generated output already matches the corpus; nothing to refresh."
  git worktree remove --force "$WT"; exit 0
fi
echo "Refreshing:"; git -C "$WT" diff --name-only -- site/ | sed 's/^/  /'
git -C "$WT" add site/
git -C "$WT" commit -q -m "Refresh generated output after merged lessons

The lesson indexes, progress and terminology ledgers, landing-page counters, and
agent context derive from every published lesson rather than from any one of
them, so they are refreshed once for a batch instead of being carried, and
re-conflicted, by every lesson pull request."
# Pushing from a detached HEAD needs the fully qualified ref, or git cannot tell whether the
# destination is a branch it should create.
git -C "$WT" push -q origin "HEAD:refs/heads/$BRANCH"
git worktree remove --force "$WT"
gh pr create --base main --head "$BRANCH" \
  --title "Refresh generated output after merged lessons" \
  --body "Rebuilds the corpus-wide generated output from the merged corpus. Lesson pull requests no longer carry these files, so they are refreshed once per batch here." 2>&1 | tail -1
