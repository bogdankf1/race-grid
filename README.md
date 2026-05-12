# Race Grid

A universal motorsport calendar — 27 racing series, 6 seasons, every session in your local timezone. Live at [race-grid.app](https://race-grid.app).

No accounts, no backend, no database. All preferences live in `localStorage`. The web app is a static Next.js export deployed on Vercel.

## What's tracked

Open Wheel (F1, F2, F3, Formula E, IndyCar, Super Formula), Endurance (WEC, ELMS, MLMC, IMSA, IGTC, 24H Series), GT / Touring (DTM, GTWC Europe / America / Asia / Australia, British GT, Super GT, NLS, Supercars), Stock Car (NASCAR Cup), Rally (WRC, Dakar, FIA Rallycross), Motorcycle (MotoGP), and Special Events (Goodwood, Pikes Peak, Le Mans Classic, Race of Champions, etc.).

## Project layout

```
src/
├── app/                         # Next.js App Router pages
├── components/                  # CalendarGrid, DayDetail, Header, …
├── data/
│   ├── <series>-<year>.ts       # Per-series calendars (UTC times)
│   ├── series-registry.ts       # Master series list + lazy year loaders
│   ├── circuits.ts              # Circuit metadata
│   ├── results/                 # Race results per series-year
│   ├── standings/               # Championship tables per series-year
│   ├── entries/                 # Driver rosters per series-year
│   └── broadcasts.ts            # Where-to-watch per country
└── lib/                         # Timezone, i18n, types, theme, ical export
docs/                            # Update playbooks (UPDATE-RESULTS, etc.)
scripts/                         # generate-ics.ts, validate-data.ts
mcp/                             # Public MCP server (see below)
```

## Develop

```bash
npm install
npm run dev                    # http://localhost:3000
npx tsx scripts/validate-data.ts  # Referential-integrity check across all data
npx next build                 # Static export to ./out
```

---

## AI Infrastructure

Race Grid runs on top of a small AI-infrastructure stack — purpose-built so the calendar data stays accurate without manual scraping every weekend. Two pieces:

### Public MCP server → [`mcp/`](mcp/README.md)

A Model Context Protocol server that exposes the entire dataset (calendars, results, standings, circuits) as queryable tools. Any MCP-aware client — Claude Desktop, Cursor, Claude Code, Windsurf — can connect and answer:

- *"When is the next F1 race in Kyiv time?"*
- *"Who won the 2024 24 Hours of Le Mans, by class?"*
- *"List every Italian race weekend in 2026."*

Seven tools: `list_series`, `get_calendar`, `get_next_race`, `get_race_results`, `get_standings`, `get_circuit`, `search_races`. Streamable HTTP and SSE transports. Install snippets and full tool reference are in [`mcp/README.md`](mcp/README.md).

### Scheduled agents → [`docs/SCHEDULED-AGENTS.md`](docs/SCHEDULED-AGENTS.md)

Three Claude Code routines run on cron to keep the data fresh:

- **Weekly results** (Sun 22:00 UTC) — runs `/update-results`, opens a PR with new race finishes.
- **Weekly standings** (Mon 12:00 UTC) — runs `/update-standings`, opens a PR with updated championship tables.
- **Monthly calendar verify** (1st of month, 06:00 UTC) — runs the `VERIFY-SEASON-DATA.md` playbook against all 27 series, opens a PR with discrepancies or an issue if everything checks out.

Each routine reuses an existing project skill, so the runbooks in `docs/` remain the source of truth for *how* to update.

### Data-integrity skills (manual)

The same skills the scheduled agents call can be invoked by hand for backfills:

| Skill | Use for |
|---|---|
| `/update-results` | Backfill or refresh results for a series/year |
| `/update-standings` | Refresh championship tables |
| `/add-series` | Onboard a brand-new racing series end-to-end |
| `/support-year` | Backfill a whole new season year across all 27 series |

---

## License

MIT.
