# Adding a New Season Year to Race Grid

This runbook covers adding historical or future season data for all 14 racing series.

## Prerequisites

- Official calendars with session times for the target year
- For historical years: results data is available immediately
- For future years: calendars may not be finalized for all series

## Steps

### 1. Create data files

For each of the 14 series, create `src/data/<series-id>-<year>.ts`:

```
f1-<year>.ts, indycar-<year>.ts, nascar-<year>.ts, wec-<year>.ts,
imsa-<year>.ts, wrc-<year>.ts, dtm-<year>.ts, gtwc-<year>.ts,
nls-<year>.ts, supergt-<year>.ts, elms-<year>.ts, igtc-<year>.ts,
superformula-<year>.ts, supercars-<year>.ts
```

Each file exports `RaceEvent[]` following the exact pattern of existing files (e.g., `f1-2026.ts`):
- Import `RaceEvent` from `@/lib/types`
- Export as `const <seriesId><year>: RaceEvent[]`
- Event IDs: `<series>-<year>-<slug>` (e.g., `f1-2025-bahrain`)
- All session times in UTC (ISO 8601)
- Include `round` numbers on all events
- Use correct session types per series:
  - **F1:** practice, qualifying, sprint_qualifying, sprint, race
  - **WEC/IMSA/ELMS:** practice, qualifying, hyperpole, warmup, endurance/race
  - **WRC:** shakedown, stage
  - **NASCAR:** qualifying, race
  - **DTM/GTWC/NLS/SuperGT/IGTC/SuperFormula/Supercars:** practice, qualifying, race

Use `WebSearch` to find official calendars for each series. Key sources:
- F1: formula1.com/en/results
- IndyCar: indycar.com/schedule
- NASCAR: nascar.com/schedule
- WEC: fiawec.com/en/season
- WRC: wrc.com/en/calendar
- Others: official series websites

### 2. Register data in series-registry.ts

Import each new data file and add it to `SERIES_EVENTS` under the correct year key:

```typescript
import { f12025 } from './f1-2025'
// ... all 14 imports

// In SERIES_EVENTS:
f1: { 2025: f12025, 2026: f12026 },
```

Add the year to `AVAILABLE_YEARS` array.

### 3. Create results files (for historical years)

If the year is complete, create `src/data/results/<series>-<year>.ts` files. Follow the existing results file pattern. Use `/update-results` skill to populate them.

### 4. Update supporting files

- `scripts/generate-ics.ts` — generate ICS files for the new year
- `src/app/sitemap.ts` — include day pages from the new year

### 5. Verify

Run `npx next build` to confirm everything compiles.

## Series-specific notes

- **NASCAR** has 36 rounds — the largest data file
- **WRC** uses `stage` and `shakedown` session types, not `race`/`qualifying`
- **WEC/IMSA** use `endurance` type for main races and `hyperpole` for qualifying
- **DTM/GTWC** often have Race 1 and Race 2 per weekend
- **Super Formula/Super GT** are Japan-based — session times in JST, convert to UTC
- Some series may not exist in all years or may have different names
