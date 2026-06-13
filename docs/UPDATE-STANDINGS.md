# Update Championship Standings

This runbook is executed manually via Claude Code. It finds series with outdated or missing standings and updates them from official sources.

> **Start in a worktree.** When running this by hand, kick off with `/new-session "update standings"` first so all changes land in an isolated worktree (our default parallelized workflow — see CLAUDE.md). Then run `/update-standings` inside it.

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
| F1 Academy | f1academy.com/Standings, f1academy.com/Racing/Schedule | Wikipedia "20XX F1 Academy season" |
| F2 | fiaformula2.com/Standings | Wikipedia "20XX Formula 2 Championship" |
| F3 | fiaformula3.com/Standings | Wikipedia "20XX Formula 3 Championship" |
| Formula E | fiaformulae.com/en/standings | Wikipedia "20XX Formula E World Championship" |
| IndyCar | indycar.com/Standings | Wikipedia "20XX IndyCar Series" |
| Indy NXT | indynxt.com/Standings, indynxt.com/Schedule | Wikipedia "20XX Indy NXT season" |
| Moto2 | motogp.com/en/calendar/{year}/moto2 | Wikipedia "20XX Moto2 World Championship" |
| Moto3 | motogp.com/en/calendar/{year}/moto3 | Wikipedia "20XX Moto3 World Championship" |
| NASCAR | nascar.com/standings/nascar-cup-series | espn.com/racing/standings |
| NASCAR Xfinity | nascar.com/standings/nascar-xfinity-series | Wikipedia "20XX NASCAR Xfinity Series" |
| NASCAR Craftsman Truck | nascar.com/standings/nascar-craftsman-truck-series | Wikipedia "20XX NASCAR Craftsman Truck Series" |
| Porsche Supercup | porsche.com motorsport / pitwall.app/series/porsche-mobil-1-supercup | Wikipedia "20XX Porsche Supercup" |
| WEC | fiawec.com standings, autohebdof1.com | Wikipedia "20XX FIA World Endurance Championship" |
| IMSA | imsa.com/weathertech/standings | indymotorspeedway.com |
| IMSA Michelin Pilot Challenge | imsa.com/imsa-michelin-pilot-challenge/standings | Wikipedia "20XX IMSA Michelin Pilot Challenge season" — multi-class (GS + TCR) |
| ELMS | europeanlemansseries.com/ranking | speedsport-magazine.com |
| MLMC | lemanscup.com standings | Wikipedia "20XX Michelin Le Mans Cup" |
| IGTC | intercontinentalgtchallenge.com | Wikipedia "20XX Intercontinental GT Challenge" |
| WRC | wrc.com/en/results-and-standings | autohebdof1.com WRC standings |
| Dakar | dakar.com/en/rankings | Wikipedia "20XX Dakar Rally" |
| DTM | dtm.com/en/standings | Wikipedia "20XX Deutsche Tourenwagen Masters" |
| GTWC | gt-world-challenge-europe.com/standings | Wikipedia "20XX GT World Challenge Europe" |
| GTWC America | gt-world-challenge-america.com/standings | Wikipedia "20XX GT World Challenge America" |
| GTWC Asia | gt-world-challenge-asia.com/standings | Wikipedia "20XX GT World Challenge Asia" |
| British GT | britishgt.com/standings | Wikipedia "20XX British GT Championship" |
| GTWC Australia | gt-world-challenge-australia.com/standings | Wikipedia "20XX GT World Challenge Australia" |
| NLS | nuerburgring-langstrecken-serie.de | N/A — NLS uses class-based standings, skip if no consolidated table available |
| Super GT | supergt.net/en/team_ranking | Wikipedia "20XX Super GT Series" |
| Super Formula | superformula.net/en | Wikipedia "20XX Super Formula Championship" |
| Supercars | supercars.com/standings | speedsport-magazine.com |
| MotoGP | motogp.com/en/standings | Wikipedia "20XX MotoGP World Championship" |
| 24H Series | 24hseries.com standings | Wikipedia "20XX 24H Series" |
| FIA Rallycross (`wrx`) | fiaworldrallycross.com (2021–2025) / fia-rallycross.com (Euro RX 2026+) | Wikipedia "20XX FIA World Rallycross Championship" / "20XX FIA European Rallycross Championship" |
| Special Events (`special`) | N/A — calendar-only; no championship standings | — |

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
- **GTWC America** — "Teams" championship
- **GTWC Asia** — "Teams" championship
- **British GT** — "Teams" championship
- **GTWC Australia** — "Teams" championship
- **IGTC** — "Manufacturers" championship
- **MotoGP** — "Constructors" championship
- **Moto2** — "Constructors" championship (Boscoscuro, Forward, Kalex chassis)
- **Moto3** — "Constructors" championship (KTM, Honda, GASGAS, Husqvarna, CFMOTO)
- **F1 Academy** — "Teams" championship
- **NASCAR Xfinity** — "Manufacturers" championship (Chevrolet, Ford, Toyota)
- **NASCAR Craftsman Truck** — "Manufacturers" championship

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
- **IMSA Michelin Pilot Challenge** — multi-class (GS + TCR), drivers only
- **Dakar** — Cars category drivers only
- **Porsche Supercup** — One-make championship (drivers only)
- **Indy NXT** — Drivers only (spec chassis)

### NLS special case
The NLS (Nurburgring Langstrecken-Serie) uses a class-based points system across hundreds of participants. There is no single consolidated driver standings table. Skip NLS standings unless a clear overall championship table can be sourced.

### Multi-class series

For series with multiple championship classes, the top-level `drivers`/`constructors` represent the **primary class** (the headline championship), and additional classes go in `otherClasses: [{ className, drivers, constructors }]`. The standings page renders a class pill row when `otherClasses` is non-empty.

**Currently populated in the data layer:**
- **WEC**: primary = `Hypercar`, otherClasses = `[{ className: 'LMGT3', drivers, constructors }]`
- **IMSA**: primary = `GTP`, otherClasses = `[{ className: 'GTD Pro', drivers, constructors: [] }, { className: 'GTD', drivers, constructors: [] }]`
- **IMSA Michelin Pilot Challenge**: primary = `GS`, otherClasses = `[{ className: 'TCR', drivers, constructors: [] }]`

**Candidates for future multi-class backfill** (currently single-class in the data layer; extend to `otherClasses` when refreshing):
- **ELMS**: primary = `LMP2`, candidates = `LMP3`, `LMGT3`
- **MLMC**: primary = `LMP3`, candidates = `GT3`
- **IGTC**: primary = drivers across the whole series, candidate splits = `Pro` / `Silver` / `Am`
- **24H Series**: primary = `GT3`, candidates = `GT4`, `TCR`, `GTX`
- **GTWC Europe**: primary = `Pro`, candidates = `Gold` / `Silver` / `Bronze`
- **GTWC America / Asia / Australia**: primary = `Pro`, candidates = `Pro-Am` / `Am` / `Silver` (varies)
- **British GT**: primary = `GT3`, candidate = `GT4`
- **Super GT**: primary = `GT500`, candidate = `GT300`

When refreshing standings for any multi-class series:
1. **Fetch each class separately.** The official source typically has a dropdown or separate tab per class — query each one and capture top-N for that class.
2. Update the primary class table (top-level fields) as before.
3. Add or update each `otherClasses[*]` entry the same way.
4. If a driver or team ID is not yet present in `drivers.ts`/`teams.ts`, skip that row and add an inline comment listing the skipped name. Do not invent IDs in the standings runbook — adding new drivers/teams is its own task.
5. Multi-class entries on the `src/data/entries/` side should also be tagged with `class: '<Class Name>'` (matching the `className` strings above) so the series detail page can split rosters per class.

### Feeder series

Several series in the data layer are "feeders" whose calendars piggyback on a parent series. When updating standings:
- **Moto2**, **Moto3**: race every MotoGP weekend. Source: motogp.com/en/standings/{year}/moto2 (or moto3)
- **NASCAR Xfinity**: races ~32 of 33 NASCAR Cup weekends. Source: nascar.com/standings/nascar-xfinity-series
- **NASCAR Craftsman Truck**: races a subset of Cup weekends + standalone events. Source: nascar.com/standings/nascar-craftsman-truck-series
- **Indy NXT**: races ~14 of 17 IndyCar weekends. Source: indynxt.com/Standings
- **F1 Academy**: races at selected F1 weekends (~7 rounds). Source: f1academy.com/Standings
- **Porsche Supercup**: races at selected European F1 weekends (~7 rounds). Source: porsche.com motorsport / pitwall.app

When refreshing a parent series' standings, also check whether its feeders need a refresh.

### Dakar special case
The Dakar Rally is a single multi-stage event. Standings reflect the final overall classification (driver + co-driver). Use `className: 'Cars'` for the car category standings.

### 24H Series
The 24H Series uses GT3 overall standings. Use `className: 'GT3'`. Has both driver and team championships.

### Multi-driver entries (WEC, IMSA, IMPC, ELMS, MLMC, GTWC, IGTC, Super GT, 24H Series)
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
- **IMSA Michelin Pilot Challenge**: Cumulative points system (similar IMSA-style scale), multi-class GS + TCR
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
