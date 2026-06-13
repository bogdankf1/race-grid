# Adding a New Season Year to Race Grid

This runbook covers adding historical or future season data for all 35 racing series.

## Prerequisites

- Official calendars with session times for the target year
- For historical years: results data is available immediately
- For future years: calendars may not be finalized for all series

## Steps

### 1. Create data files

For each of the 35 series, create `src/data/<series-id>-<year>.ts`:

```
f1-<year>.ts, f2-<year>.ts, f3-<year>.ts, f1-academy-<year>.ts, fe-<year>.ts,
indycar-<year>.ts, indy-nxt-<year>.ts, nascar-<year>.ts, nascar-xfinity-<year>.ts,
nascar-truck-<year>.ts, wec-<year>.ts, imsa-<year>.ts, impc-<year>.ts,
elms-<year>.ts, mlmc-<year>.ts, igtc-<year>.ts, wrc-<year>.ts,
dakar-<year>.ts, dtm-<year>.ts, gtwc-<year>.ts, gtwcam-<year>.ts,
gtwcasia-<year>.ts, gtwcau-<year>.ts, britgt-<year>.ts, nls-<year>.ts,
supergt-<year>.ts, superformula-<year>.ts, supercars-<year>.ts,
motogp-<year>.ts, moto2-<year>.ts, moto3-<year>.ts,
porsche-supercup-<year>.ts, 24h-<year>.ts, special-<year>.ts, wrx-<year>.ts
```

Each file exports `RaceEvent[]` following the exact pattern of existing files (e.g., `f1-2026.ts`):
- Import `RaceEvent` from `@/lib/types`
- Export as `const <seriesId><year>: RaceEvent[]`
- Event IDs: `<series>-<year>-<slug>` (e.g., `f1-2025-bahrain`)
- All session times in UTC (ISO 8601)
- Include `round` numbers on all events
- Use correct session types per series:
  - **F1:** practice, qualifying, sprint_qualifying, sprint, race
  - **F2/F3:** practice, qualifying, sprint, race
  - **Formula E:** practice, qualifying, race
  - **WEC/IMSA/ELMS/MLMC:** practice, qualifying, hyperpole, warmup, endurance/race
  - **WRC:** shakedown, stage
  - **Dakar:** stage
  - **NASCAR:** qualifying, race
  - **MotoGP:** practice, qualifying, sprint, race
  - **DTM/GTWC/NLS/SuperGT/IGTC/SuperFormula/Supercars:** practice, qualifying, race

Use `WebSearch` to find official calendars for each series. Key sources:
- F1: formula1.com/en/results
- F2/F3: fiaformula2.com, fiaformula3.com
- Formula E: fiaformulae.com
- IndyCar: indycar.com/schedule
- NASCAR: nascar.com/schedule
- WEC: fiawec.com/en/season
- IMSA: imsa.com/weathertech
- IMSA Michelin Pilot Challenge: imsa.com/imsa-michelin-pilot-challenge
- ELMS: europeanlemansseries.com
- MLMC: lemanscup.com
- WRC: wrc.com/en/calendar
- Dakar: dakar.com
- MotoGP: motogp.com
- Others: official series websites

### 2. Register data in series-registry.ts

Import each new data file and add it to `SERIES_EVENTS` under the correct year key:

```typescript
import { f12025 } from './f1-2025'
// ... all 35 imports

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
- **Dakar** uses `stage` session type — one stage per day over ~2 weeks in January
- **WEC/IMSA/ELMS/MLMC** use `endurance` type for main races and `hyperpole` for qualifying
- **DTM/GTWC** often have Race 1 and Race 2 per weekend
- **F2/F3** have sprint race + feature race per weekend (follow F1 calendar)
- **Formula E** has double-header weekends (Race 1 and Race 2)
- **MotoGP** has sprint + main race per weekend
- **Super Formula/Super GT** are Japan-based — session times in JST, convert to UTC
- Some series may not exist in all years or may have different names
