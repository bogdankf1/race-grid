---
name: update-standings
description: Update championship standings for all series with new completed rounds, using verified data from official sources.
user-invocable: true
---

Follow the runbook in `docs/UPDATE-STANDINGS.md` to update championship standings:

1. Read `src/data/series-registry.ts` to get all series and their events
2. For each series, check if new rounds have been completed since the last standings update
3. Compare against existing files in `src/data/standings/` — identify which series need updates
4. For each outdated series, use `WebSearch` to find current standings from the official series website
5. Map driver/team names to IDs in `src/data/drivers.ts` and `src/data/teams.ts` (add new entries if needed)
6. Update or create the standings file in `src/data/standings/` and register in `index.ts`
7. Report what was updated

**Important:** Only use verified standings from official sources. Never guess points or positions. Skip NLS (no consolidated standings table).
