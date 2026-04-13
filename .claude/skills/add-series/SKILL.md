---
description: Add a new racing series to the app with full calendar, entries, results, standings, broadcasts, and all pages
user_invocable: true
argument: series name (e.g., Formula E, MotoGP, TCR World Tour)
---

Follow the runbook in `docs/ADD-NEW-SERIES.md` to add a complete new racing series:

1. Choose a series ID (short, kebab-case, URL-friendly)
2. Use `WebSearch` to find the official calendar, entry list, standings, and broadcast info
3. Add logo to `public/logos/` and register in `SeriesLogo.tsx`
4. Add new circuits to `src/data/circuits.ts` (if any venues aren't already in the database)
5. Add drivers to `src/data/drivers.ts` and teams to `src/data/teams.ts`
6. Create calendar file `src/data/<series>-<year>.ts` with full event + session data in UTC
7. Register in `src/data/series-registry.ts` (SERIES_META + SERIES_EVENTS + imports)
8. Add to appropriate filter group in `src/components/SeriesFilterDropdown.tsx`
9. Add broadcast/where-to-watch data to `src/data/broadcasts.ts`
10. Create entries file in `src/data/entries/` + register in `index.ts`
11. Create results file in `src/data/results/` + register in `index.ts`
12. Create standings file in `src/data/standings/` + register in `index.ts`
13. Update `CLAUDE.md` and docs (`UPDATE-RESULTS.md`, `UPDATE-STANDINGS.md`)
14. Run `npx next build` to verify
15. Report what was added and list any pages to manually spot-check

**Important:** Use only verified data from official sources. All session times must be in UTC. Never guess or fabricate dates/times. The series logo should be an SVG — create a styled vector, not plain text.
