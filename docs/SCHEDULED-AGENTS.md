# Scheduled Agents

Race Grid uses three Claude Code routines (remote agents running on a cron schedule) to keep race data fresh without manual effort. Each routine reuses an existing project skill, so the source of truth for *how* to update is still the runbook in `docs/`.

## Routines

| Routine | Schedule (UTC) | Invokes | Output |
|---|---|---|---|
| `race-grid-results-weekly` | Sun 22:00 | `/update-results` | PR with new entries in `src/data/results/<series>-<year>.ts` |
| `race-grid-standings-weekly` | Mon 12:00 | `/update-standings` | PR with updated `src/data/standings/<series>-<year>.ts` |
| `race-grid-calendar-monthly` | 1st of month, 06:00 | "Run the playbook in `docs/VERIFY-SEASON-DATA.md` for all 27 series. Open a PR with any corrections; open an issue if no diffs but you flagged a concern." | PR or issue with calendar discrepancies |

The schedules are deliberately staggered so results land before standings (standings depend on the latest race results being recorded), and the verify routine runs at a low-traffic hour at the start of each month.

## Why a routine, not a Vercel cron + Anthropic SDK?

The three routines reuse the existing `/update-results`, `/update-standings`, and `docs/VERIFY-SEASON-DATA.md` playbooks unchanged. Those have already been tuned by hand against every series — the runbooks know which official source to hit for each one (formula1.com, imsa.com, nascar.com, wikipedia for fallbacks). Rebuilding that on top of the raw Anthropic SDK would duplicate the source-mapping logic without making the output any better.

A future v2 could swap in a Vercel-Cron + Anthropic-SDK pipeline once the runbooks have stabilized further. The current setup is the cheapest path to "the calendar updates itself."

## Managing the routines

```bash
# In a Claude Code session inside this repo
/schedule list                                    # Show all configured routines
/schedule run race-grid-results-weekly            # Trigger one manually
/schedule edit race-grid-results-weekly           # Change schedule or prompt
/schedule delete race-grid-calendar-monthly       # Remove a routine
```

## Creating the routines (one-time setup)

Each routine is created with `/schedule` and a cron expression. Run these once in a Claude Code session inside the repo:

```
/schedule create
  name: race-grid-results-weekly
  cron: 0 22 * * 0
  prompt: /update-results
```

```
/schedule create
  name: race-grid-standings-weekly
  cron: 0 12 * * 1
  prompt: /update-standings
```

```
/schedule create
  name: race-grid-calendar-monthly
  cron: 0 6 1 * *
  prompt: Run the playbook in docs/VERIFY-SEASON-DATA.md across all 27 series. Open a PR with any corrections needed. If all data matches official sources, open an issue summarising what was verified instead.
```

## Failure modes & recovery

- **A routine opens a PR with bad data** → close the PR, fix the runbook (`docs/UPDATE-*.md` or `VERIFY-SEASON-DATA.md`), re-run the routine manually with `/schedule run`. The runbook is the source of truth; the routine is just a scheduler.
- **A routine fails outright** → check `/schedule logs <name>`. Typical cause: rate-limited WebSearch on a recent race weekend with many concurrent updates. Wait and retry.
- **An official source restructures its results page** → update the source mapping table in the relevant runbook (e.g., `docs/UPDATE-RESULTS.md` § Sources).

## Related

- `docs/UPDATE-RESULTS.md` — the runbook the weekly results routine follows
- `docs/UPDATE-STANDINGS.md` — the runbook the weekly standings routine follows
- `docs/VERIFY-SEASON-DATA.md` — the runbook the monthly verify routine follows
- `mcp/README.md` — the public MCP server that serves the data these routines keep fresh
