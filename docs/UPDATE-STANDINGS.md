# Update Championship Standings

This runbook is executed manually via Claude Code. It finds series with outdated or missing standings and updates them from official sources.

---

## Procedure

### 1. Identify series needing standings updates

Read `src/data/series-registry.ts` to get all series and `AVAILABLE_YEARS`. For each series+year combination, check:
- Does a standings file exist in `src/data/standings/<series>-<year>.ts`?
- If yes, has a new round been completed since the last update? (Compare the number of completed events in the calendar data against the standings data — if more races have finished, standings need updating.)
- If no, has the series started its season? (Check if any events have `startUtc + durationMinutes` in the past.)

**Skip** series+year combinations where no races have been completed yet.

### 2. Search for standings from official sources

For each series needing an update, search **official sources first**:

| Series | Primary source | Fallback |
|--------|---------------|----------|
| F1 | formula1.com/en/results/{year}/drivers | Wikipedia "20XX Formula One World Championship" |
| F2 | fiaformula2.com/Standings | Wikipedia "20XX Formula 2 Championship" |
| F3 | fiaformula3.com/Standings | Wikipedia "20XX Formula 3 Championship" |
| Formula E | fiaformulae.com/en/standings | Wikipedia "20XX Formula E World Championship" |
| IndyCar | indycar.com/Standings | Wikipedia "20XX IndyCar Series" |
| NASCAR | nascar.com/standings/nascar-cup-series | espn.com/racing/standings |
| WEC | fiawec.com standings, autohebdof1.com | Wikipedia "20XX FIA World Endurance Championship" |
| IMSA | imsa.com/weathertech/standings | indymotorspeedway.com |
| ELMS | europeanlemansseries.com/ranking | speedsport-magazine.com |
| MLMC | lemanscup.com standings | Wikipedia "20XX Michelin Le Mans Cup" |
| IGTC | intercontinentalgtchallenge.com | Wikipedia "20XX Intercontinental GT Challenge" |
| WRC | wrc.com/en/results-and-standings | autohebdof1.com WRC standings |
| Dakar | dakar.com/en/rankings | Wikipedia "20XX Dakar Rally" |
| DTM | dtm.com/en/standings | Wikipedia "20XX Deutsche Tourenwagen Masters" |
| GTWC | gt-world-challenge-europe.com/standings | Wikipedia "20XX GT World Challenge Europe" |
| NLS | nuerburgring-langstrecken-serie.de | N/A — NLS uses class-based standings, skip if no consolidated table available |
| Super GT | supergt.net/en/team_ranking | Wikipedia "20XX Super GT Series" |
| Super Formula | superformula.net/en | Wikipedia "20XX Super Formula Championship" |
| Supercars | supercars.com/standings | speedsport-magazine.com |
| MotoGP | motogp.com/en/standings | Wikipedia "20XX MotoGP World Championship" |

Extract for each driver entry: **position, driver name, team, points, wins**.
Extract for each constructor/manufacturer entry (if applicable): **position, team/manufacturer, points, wins**.

### 3. Map driver and team names to IDs

Every standings entry must reference existing IDs from `src/data/drivers.ts` and `src/data/teams.ts`.

- Look up each driver name → find matching `driverId` using `getDriver(id)` or search by `shortName`
- Look up each team name → find matching `teamId` using `getTeam(id)` or search by `name`
- If a driver or team doesn't exist yet, **add them** to `drivers.ts` or `teams.ts` before creating the standings file

### 4. Create or update standings file

File location: `src/data/standings/<series>-<year>.ts`

**New file template:**
```typescript
import type { SeasonStandings } from './types'

// <Series Name> <Year> standings — verified from <source>
export const <series>Standings<year>: SeasonStandings = {
  drivers: [
    { position: 1, driverId: '<id>', teamId: '<id>', points: <N>, wins: <N> },
    // ...
  ],
  constructors: [
    // Include if the series has a constructor/manufacturer championship
    // Leave as empty array [] if not (IndyCar, NASCAR, DTM, Super Formula, etc.)
    { position: 1, teamId: '<id>', points: <N>, wins: <N> },
    // ...
  ],
}
```

**Naming conventions:**
- Export name: `<series>Standings<year>` (e.g., `f1Standings2026`, `nascarStandings2025`)
- File name: `<series>-<year>.ts` (e.g., `f1-2026.ts`, `nascar-2025.ts`)

### 5. Register in index

Add the import and entry to `src/data/standings/index.ts`:

```typescript
import { f1Standings2026 } from './f1-2026'

// In ALL_STANDINGS:
'f1-2026': f1Standings2026,
```

### 6. Build and verify

```
npx next build
```

Verify the standings page displays correctly for the updated series.

---

## Series-specific notes

### Series WITH constructor/manufacturer standings
- **F1** — "Constructors" championship
- **F2** — "Teams" championship
- **F3** — "Teams" championship
- **Formula E** — "Teams" championship
- **WEC** — "Manufacturers" championship (Ferrari, Toyota, Porsche, etc.)
- **WRC** — "Manufacturers" championship (Toyota, Hyundai, M-Sport Ford)
- **GTWC** — "Teams" championship
- **IGTC** — "Manufacturers" championship
- **MotoGP** — "Constructors" championship

### Series WITHOUT constructor standings (use `constructors: []`)
- **IndyCar** — Drivers only
- **NASCAR** — Drivers only (no manufacturer championship)
- **DTM** — Drivers only
- **Super GT** — Has team standings but we track GT500 drivers only
- **Super Formula** — Drivers only
- **ELMS** — LMP2 drivers only
- **MLMC** — Overall drivers only
- **Supercars** — Drivers only
- **IMSA** — GTP drivers only (manufacturer title exists but not tracked here)
- **Dakar** — Cars category drivers only

### NLS special case
The NLS (Nurburgring Langstrecken-Serie) uses a class-based points system across hundreds of participants. There is no single consolidated driver standings table. Skip NLS standings unless a clear overall championship table can be sourced.

### Dakar special case
The Dakar Rally is a single multi-stage event. Standings reflect the final overall classification (driver + co-driver). Use `className: 'Cars'` for the car category standings.

### Multi-driver entries (WEC, IMSA, ELMS, MLMC, GTWC, IGTC, Super GT)
Endurance series have multi-driver crews sharing one car. For standings:
- Use the **first listed driver** of the crew as the `driverId`
- The full crew details are available through the `entries/` data and race results

### Points systems vary by series
- **F1**: 25-18-15-12-10-8-6-4-2-1 (race), 8-7-6-5-4-3-2-1 (sprint)
- **F2/F3**: 25-18-15-12-10-8-6-4-2-1 (feature), 10-8-6-5-4-3-2-1 (sprint)
- **Formula E**: 25-18-15-12-10-8-6-4-2-1 + bonus points (pole, fastest lap)
- **IndyCar**: 50-40-35-30-26-22-20-18-16-14... (plus bonus points)
- **NASCAR**: Stage points + playoff reset system (top 4 get 5000+ base)
- **WEC**: 38-27-23-19-15-12-9-6-4-2-1
- **IMSA**: Cumulative points system (2000+ scale)
- **ELMS/MLMC**: 25-18-15-12-10-8-6-4-2-1
- **WRC**: 25-18-15-12-10-8-6-4-2-1 (rally) + Power Stage points
- **MotoGP**: 25-20-16-13-11-10-9-8-7-6-5-4-3-2-1 (race), 12-9-7-6-5-4-3-2-1 (sprint)
- **Supercars**: Finals series resets top qualifiers to 5000+ base
- **Dakar**: Time-based (lowest cumulative time wins)

### Win counts
Count wins from race results data when official standings don't include them. For accuracy:
- Check `getResult(eventId, 'race')` or `getResult(eventId, 'endurance')` for each event
- A win = the driver's `driverId` appears in `result.overall.driverIds`

---

## Important notes

- **Only add verified standings.** Never guess points or positions.
- **Driver and team IDs must exist** in `drivers.ts` and `teams.ts` before referencing them.
- **Update alongside results.** When running `/update-results`, also check if standings need updating.
- **For in-season standings**, note the source and how many rounds are reflected (e.g., "after Round 4 Barber").
- **For final standings**, note the source and confirm it's the end-of-season result.
- **Standings for series whose 2026 season hasn't started** should not be created — wait until at least 1 round is completed.
