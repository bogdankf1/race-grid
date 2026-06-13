---
name: complete
description: Use when work on a worktree branch is finished and ready to ship — the user says "complete", "wrap up", "finish this", "ship it", "raise a PR", or otherwise signals the feature/fix is done. Commits, pushes, and opens a PR. Optional argument overrides the default base branch (main).
user-invocable: true
argument: "[base-branch]" — optional. Branch the PR targets. Defaults to main. Examples: "/complete" or "/complete develop"
---

Finish the current worktree branch: commit everything, push, and open a pull request. Run every command from inside the worktree you're completing (use absolute paths if unsure). The base branch is the argument if given, otherwise `main`.

1. **Locate yourself and pick the base.**
   ```
   git rev-parse --abbrev-ref HEAD     # current branch
   git rev-parse --show-toplevel       # worktree path
   ```
   - `BASE` = the argument, else `main`.
   - **If the current branch equals `BASE` (e.g. you're on `main`), stop.** You can't open a PR from a branch into itself — tell the user to switch to a feature worktree (or run `/new-session`).

2. **Review what's changing** so the commit message and PR body describe reality:
   ```
   git status --short
   git diff            # unstaged
   git diff --staged   # already staged
   ```

3. **Verify the build before shipping** (project rule — data accuracy is critical, never PR a broken build):
   ```
   npx next build
   ```
   If it fails, stop and fix it. Do not commit or open a PR on a red build.

4. **Commit all changes.**
   ```
   git add -A
   git commit -m "<conventional-commit subject>"
   ```
   - Write a concise conventional-commit subject from the diff: `feat:`, `fix:`, `chore:`, `data:` (calendar/results/standings), `docs:`. Add a short body for non-trivial changes.
   - Commits are auto-attributed to Bohdan (`bogdankf1@gmail.com`) via repo config — no `--author` needed.
   - If there's nothing to commit but the branch has commits not on `BASE`, skip the commit and continue.
   - If there's nothing to commit **and** no commits ahead of `BASE`, there's nothing to PR — tell the user and stop.

5. **Push the branch.**
   ```
   BRANCH=$(git rev-parse --abbrev-ref HEAD)
   git push -u origin "$BRANCH"
   ```
   Pushes authenticate as `bogdankf1` via the repo-local keychain credential.

6. **Open the PR as bogdankf1 — via the REST API, NOT `gh`.**
   The `gh` CLI is signed in as a different (work) account: it would mis-attribute the PR and lacks push rights. Use the same token git uses for pushes:
   ```
   TOKEN=$(printf "protocol=https\nhost=github.com\n\n" | git credential fill 2>/dev/null | sed -n 's/^password=//p')
   BRANCH=$(git rev-parse --abbrev-ref HEAD)
   BASE=main   # or the argument

   curl -s -X POST \
     -H "Authorization: Bearer $TOKEN" \
     -H "Accept: application/vnd.github+json" \
     https://api.github.com/repos/bogdankf1/race-grid/pulls \
     -d "$(jq -nc \
            --arg t "<PR title>" \
            --arg h "$BRANCH" \
            --arg b "$BASE" \
            --arg body "<PR body>" \
            '{title:$t, head:$h, base:$b, body:$body}')" \
     | jq -r '.html_url // .message // .errors'
   ```
   - **Title:** the commit subject (or a one-line summary if the branch has several commits).
   - **Body:** a short `## Summary` of what changed and why, then `## Test plan` (e.g. "`npx next build` passes").
   - **If it already exists** (response message contains "A pull request already exists"), fetch the open one instead of erroring:
     ```
     curl -s -H "Authorization: Bearer $TOKEN" \
       "https://api.github.com/repos/bogdankf1/race-grid/pulls?head=bogdankf1:$BRANCH&state=open" \
       | jq -r '.[0].html_url'
     ```

7. **Report** the PR `html_url` to the user in one line, along with the base branch it targets.

After the PR is merged and its remote branch deleted, `/clear-sessions` removes the worktree.
