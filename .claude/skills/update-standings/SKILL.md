---
name: update-standings
description: Update championship standings for all series with new completed rounds, using verified data from official sources.
user-invocable: true
argument: "[year(s)] [series]" — optional filters. Examples: "2024 f1", "2023 wec imsa", "2021-2024", "f1 indycar"
---

Follow the runbook in `docs/UPDATE-STANDINGS.md` to update championship standings:

1. Read `src/data/series-registry.ts` to get all series and their events
2. **Parse arguments** to determine scope:
   - If year(s) specified (e.g., `2024`, `2021-2024`, `2021 2022 2023`): only process those years
   - If series specified (e.g., `f1`, `f1 wec indycar`): only process those series
   - If no arguments: process all series for the current year (2026)
   - Year ranges like `2021-2024` expand to all years in that range
3. For each series+year in scope, check if rounds have been completed and whether standings exist/need updating
4. Compare against existing files in `src/data/standings/` — identify which series need updates
5. For each outdated series, use `WebSearch` to find current standings from the official series website
6. Map driver/team names to IDs in `src/data/drivers.ts` and `src/data/teams.ts` (add new entries if needed)
7. Update or create the standings file in `src/data/standings/` and register in `index.ts`
8. Report what was updated

**Important:** Only use verified standings from official sources. Never guess points or positions. Skip NLS (no consolidated standings table).

**Examples:**
- `/update-standings` — update current year (2026), all series
- `/update-standings 2024 f1` — backfill F1 2024 final standings
- `/update-standings 2021-2023 wec imsa` — backfill WEC and IMSA standings for 2021-2023
- `/update-standings f1 indycar nascar` — update F1, IndyCar, NASCAR for current year
