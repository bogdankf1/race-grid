---
name: update-results
description: Find all finished race sessions without results and update the data files with verified results from official sources.
user-invocable: true
argument: "[year(s)] [series]" — optional filters. Examples: "2024 f1", "2023 wec imsa", "2021-2024", "f1 indycar"
---

Follow the runbook in `docs/UPDATE-RESULTS.md` to update race results:

1. Read `src/data/series-registry.ts` to get all series
2. **Parse arguments** to determine scope:
   - If year(s) specified (e.g., `2024`, `2021-2024`, `2021 2022 2023`): only process those years
   - If series specified (e.g., `f1`, `f1 wec indycar`): only process those series
   - If no arguments: process all series for the current year (2026)
   - Year ranges like `2021-2024` expand to all years in that range
3. For each series+year in scope, scan events and find sessions (race, endurance, sprint, sprint_qualifying, qualifying, hyperpole, stage) where `startUtc + durationMinutes` is in the past
4. Check `src/data/results/` files — identify which finished sessions are missing results
5. For each missing result, use `WebSearch` to find the official result from the series' official website
6. Update the appropriate file in `src/data/results/` (create new file + update index.ts if series has no results file yet)
7. Run `npx next build` to verify
8. Report what was added

**Important:** Only use verified results from official sources. Never guess or fabricate data.

**Examples:**
- `/update-results` — update current year (2026), all series
- `/update-results 2024 f1` — backfill F1 2024 results
- `/update-results 2021-2023 wec imsa` — backfill WEC and IMSA for 2021-2023
- `/update-results f1 indycar nascar` — update F1, IndyCar, NASCAR for current year
