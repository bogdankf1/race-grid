---
name: update-results
description: Find all finished race sessions without results and update the data files with verified results from official sources.
user-invocable: true
---

Follow the runbook in `docs/UPDATE-RESULTS.md` to update race results:

1. Read `src/data/series-registry.ts` to get all series
2. For each series, scan events and find sessions (race, endurance, sprint, sprint_qualifying, qualifying, hyperpole, stage) where `startUtc + durationMinutes` is in the past
3. Check `src/data/results/` files — identify which finished sessions are missing results
4. For each missing result, use `WebSearch` to find the official result from the series' official website
5. Update the appropriate file in `src/data/results/` (create new file + update index.ts if series has no results file yet)
6. Run `npx next build` to verify
7. Report what was added

**Important:** Only use verified results from official sources. Never guess or fabricate data.
