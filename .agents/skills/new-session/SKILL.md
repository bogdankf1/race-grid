---
name: new-session
description: Use at the START of every change — feature, fix, data update, or chore. The user says "new session", "/new-session <description>", "start work on ...", or describes any task that will modify the repo. Derives a branch name, creates an isolated git worktree forked from main (deps ready, free dev port), then begins the work inside it. Pure read-only work (questions, searches, reviews) does not need this.
user-invocable: true
argument: "<short description of the work>" — required. Examples: "/new-session update F1 results", "/new-session add Formula E series", "/new-session fix timezone bug on day view"
---

Start every change in an isolated worktree forked from `main`, so the main checkout stays clean and multiple tasks can run in parallel. Run the setup commands from the **main checkout** (`/Users/bohdanburukhin/Projects/personal/race-grid`); do the actual work from inside the new worktree.

1. **Derive a branch name** from the description. Pick a conventional-commit type prefix and a short kebab-case slug:
   - `data/…` — calendar, results, or standings data (e.g. `data/f1-results-spanish-gp`)
   - `feat/…` — new feature or series (e.g. `feat/formula-e-series`)
   - `fix/…` — bug fix (e.g. `fix/timezone-day-view`)
   - `chore/…` — housekeeping, deps, config
   - `docs/…` — docs/runbooks only

   The worktree directory mirrors the branch with slashes replaced by dashes, under the sibling `race-grid-worktrees/` folder:
   ```
   BRANCH=<type/slug>
   DIR=/Users/bohdanburukhin/Projects/personal/race-grid-worktrees/$(echo "$BRANCH" | tr '/' '-')
   ```

2. **Create the worktree, forked from `main`.** Fetch first so it forks from the latest main:
   ```
   git -C /Users/bohdanburukhin/Projects/personal/race-grid fetch origin main
   git -C /Users/bohdanburukhin/Projects/personal/race-grid worktree add -b "$BRANCH" "$DIR" origin/main
   ```
   If the branch name is already taken, append a short suffix (`-2`) or pick a more specific slug.

3. **Make deps available.** This project's dependencies are stable across worktrees, so symlink the main checkout's `node_modules` instead of a full reinstall (fast, and keeps disk usage down):
   ```
   ln -s /Users/bohdanburukhin/Projects/personal/race-grid/node_modules "$DIR/node_modules"
   ```
   If a build or dev server later complains about modules (e.g. deps changed on this branch), replace the symlink with a real install: `rm "$DIR/node_modules" && (cd "$DIR" && npm install)`.

4. **Pick a free dev port** (the main checkout usually holds 3000):
   ```
   PORT=3001; while lsof -i :$PORT >/dev/null 2>&1; do PORT=$((PORT+1)); done
   ```
   Start the dev server, when needed, with `npm run dev -- -p $PORT` from inside `$DIR`.

5. **Announce** the branch, worktree path, and dev port to the user.

6. **Begin the work inside `$DIR`.** Invoke the matching task skill from within the worktree:
   - results → `/update-results`
   - standings → `/update-standings`
   - new season year → `/support-year`
   - new series → `/add-series`
   - feature / fix / chore → proceed directly, following the runbooks in `docs/` where one applies.

   After any data change, verify with `npx next build` before finishing.

7. **When the work is done**, run `/complete` (from inside the worktree) to commit, push, and open a PR. After it merges and the remote branch is deleted, `/clear-sessions` removes the worktree.
