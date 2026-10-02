---
name: clear-sessions
description: Use to clean up finished worktrees — the user says "clear sessions", "/clear-sessions", "clean up worktrees", or wants to tidy up after PRs merged. Removes each worktree whose branch has been merged into main and deleted on the remote, leaving active ones untouched. Read-only and safe — never force-removes a worktree with uncommitted work.
user-invocable: true
argument: none
---

Remove worktrees whose work is done — branch merged into `main` and its remote branch gone. Run everything from the **main checkout** (`/Users/bohdanburukhin/Projects/personal/race-grid`).

1. **Sync with the remote** so merged/deleted branches are reflected locally:
   ```
   git -C /Users/bohdanburukhin/Projects/personal/race-grid fetch --prune origin
   git -C /Users/bohdanburukhin/Projects/personal/race-grid worktree prune
   ```

2. **List the candidates.** Look at every worktree except the main checkout:
   ```
   git -C /Users/bohdanburukhin/Projects/personal/race-grid worktree list
   git -C /Users/bohdanburukhin/Projects/personal/race-grid branch -vv
   ```
   A worktree is **safe to remove** when its branch is both:
   - **gone on the remote** — `branch -vv` shows `[origin/<branch>: gone]` (the PR merged and the remote branch was deleted), and
   - **merged into main** — it appears in `git branch --merged origin/main`.

   If a branch is gone-on-remote but NOT merged (e.g. squash-merge rewrote history), confirm with the user before removing — the commits won't show as merged even though the PR landed.

3. **Remove each safe worktree and its branch:**
   ```
   git -C /Users/bohdanburukhin/Projects/personal/race-grid worktree remove "$DIR"
   git -C /Users/bohdanburukhin/Projects/personal/race-grid branch -d "$BRANCH"
   ```
   - `worktree remove` refuses if there are uncommitted changes — **do not** pass `--force`. Stop and tell the user instead.
   - The symlinked `node_modules` is removed with the directory; the shared main `node_modules` is untouched.

4. **Report** which worktrees were removed and which were kept, with the reason each survivor was skipped (still active, unmerged, or had local changes).
