---
description: Add a new season year with full calendar data for all 14 racing series
user_invocable: true
argument: year (e.g., 2025)
---

Follow the runbook in `docs/SUPPORT-YEAR.md` to add season data for the specified year:

1. Read `src/data/series-registry.ts` to understand the current structure
2. Read an existing data file (e.g., `src/data/f1-2026.ts`) to understand the exact format
3. For each of the 14 series, use `WebSearch` to find the official calendar for the specified year
4. Create `src/data/<series>-<year>.ts` files with full event + session data
5. Import all new files in `src/data/series-registry.ts` and add to `SERIES_EVENTS`
6. Add the year to `AVAILABLE_YEARS`
7. Run `npx next build` to verify

**Important:** Use only verified data from official sources. All session times must be in UTC. Never guess or fabricate dates/times.
