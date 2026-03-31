# Data Normalization Plan

This document describes the migration from denormalized string-based data to a normalized ID-based entity model. The goal is to make every entity (driver, team, circuit, series) linkable and reusable across pages — and to prepare the data layer for a future migration to Supabase/Postgres.

---

## Current state

All data lives in TypeScript files under `src/data/`. Entities reference each other by **string matching**:

- **Circuits**: Calendar events store `circuit: 'Albert Park Circuit'` which must exactly match a key in `circuits.ts`
- **Drivers**: Results store `drivers: ['Norris']` — plain surname strings, no IDs, no link to a driver entity
- **Teams**: Results store `team: 'McLaren'` — plain strings, inconsistent naming (e.g., "Manthey EMA Porsche" vs "Manthey EMA Porsche #911")
- **Series**: Already use IDs (`'f1'`, `'indycar'`, etc.) — the one well-normalized entity

### Problems this causes

1. **No driver/team pages** — can't aggregate "all results for Verstappen" without fuzzy string matching
2. **Inconsistent names** — same team appears as different strings across results files
3. **No cross-referencing** — can't answer "which series race at Spa?" without scanning every calendar file
4. **Fragile circuit links** — a typo in a circuit name silently breaks the circuit info lookup
5. **Can't compute standings** — need structured result data with driver IDs, not name strings

---

## Target state

### Entity files

```
src/data/
├── drivers.ts              # All drivers across all series/years
├── teams.ts                # All teams across all series/years
├── circuits.ts             # Already exists — add slugs, country fields
├── entries/                # Per-series per-year: who drives for whom
│   ├── f1-2025.ts
│   ├── f1-2026.ts
│   ├── indycar-2025.ts
│   └── ...
├── series-registry.ts      # Already normalized — no changes needed
├── results/                # Migrated to use driverId/teamId references
│   ├── f1-2025.ts
│   └── ...
└── <series>-<year>.ts      # Calendar files — add circuitId field
```

### Driver entity (`src/data/drivers.ts`)

```typescript
export interface Driver {
  id: string           // 'verstappen', 'norris', 'hamilton'
  name: string         // 'Max Verstappen'
  shortName: string    // 'Verstappen' (for results display)
  nationality: string  // 'NL', 'GB', 'MC'
}

export const DRIVERS: Record<string, Driver> = {
  'verstappen': { id: 'verstappen', name: 'Max Verstappen', shortName: 'Verstappen', nationality: 'NL' },
  'norris': { id: 'norris', name: 'Lando Norris', shortName: 'Norris', nationality: 'GB' },
  // ...
}

export function getDriver(id: string): Driver | null { ... }
```

**ID convention**: lowercase surname. If ambiguous (e.g., two van der Lindes), use `k-van-der-linde` / `s-van-der-linde`. For drivers who appear in only one series, the surname alone is fine.

### Team entity (`src/data/teams.ts`)

```typescript
export interface Team {
  id: string           // 'mclaren', 'red-bull-racing', 'ferrari-af-corse'
  name: string         // 'McLaren'
  country: string      // 'GB'
}

export const TEAMS: Record<string, Team> = {
  'mclaren': { id: 'mclaren', name: 'McLaren', country: 'GB' },
  'red-bull-racing': { id: 'red-bull-racing', name: 'Red Bull Racing', country: 'AT' },
  // ...
}

export function getTeam(id: string): Team | null { ... }
```

**Note on GT/endurance teams**: Teams like "Ferrari AF Corse #50" and "Ferrari AF Corse #51" are the same team with different car entries. Use one team ID (`ferrari-af-corse`) and store the car number in the result entry, not in the team name.

### Circuit entity (`src/data/circuits.ts` — enhanced)

```typescript
export interface Circuit {
  id: string           // 'albert-park', 'spa-francorchamps', 'nurburgring-nordschleife'
  name: string         // 'Albert Park Circuit'
  country: string      // 'Australia'
  countryCode: string  // 'AU'
  length: string       // '5.278 km'
  turns: number        // 14
  type: 'permanent' | 'street' | 'oval' | 'mixed'
  lapRecord?: string   // '1:27.097 (Verstappen, 2023)'
}
```

The circuit `id` (slug) becomes the canonical reference used in calendar files instead of the full name string. Existing name-based keys migrate to `id` field.

### Entry files (`src/data/entries/<series>-<year>.ts`)

Maps drivers to teams for a specific series and year. This is the "who drives for whom" data.

```typescript
export interface EntryItem {
  driverId: string
  teamId: string
  carNumber?: number    // #44, #1, etc.
}

export const f1Entries2025: EntryItem[] = [
  { driverId: 'norris', teamId: 'mclaren', carNumber: 4 },
  { driverId: 'piastri', teamId: 'mclaren', carNumber: 81 },
  { driverId: 'verstappen', teamId: 'red-bull-racing', carNumber: 1 },
  // ...
]
```

### Normalized results

```typescript
// Before (current)
{
  overall: { drivers: ['Norris'], team: 'McLaren' },
  classes: [{
    className: 'Classification',
    podium: [
      { position: 1, drivers: ['Norris'], team: 'McLaren' },
      { position: 2, drivers: ['Verstappen'], team: 'Red Bull Racing' },
    ],
  }],
  fastestLap: 'Norris',
}

// After (normalized)
{
  overall: { driverIds: ['norris'], teamId: 'mclaren' },
  classes: [{
    className: 'Classification',
    podium: [
      { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
      { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
    ],
  }],
  fastestLapDriverId: 'norris',
}
```

### Calendar events — add `circuitId`

```typescript
// Before
{ circuit: 'Albert Park Circuit', country: 'Australia', countryCode: 'AU' }

// After
{ circuitId: 'albert-park' }
// country/countryCode are looked up from the circuit entity
```

---

## Migration phases

### Phase 1 — Create entity files (no UI changes)

**Goal**: Build the driver, team, and entry data files. Enhance circuits with IDs.

1. **Create `src/data/drivers.ts`**
   - Extract every unique driver name from all results files (2025 + 2026)
   - Assign each a stable ID
   - Populate `name`, `shortName`, `nationality`
   - Export `DRIVERS` record and `getDriver()` lookup

2. **Create `src/data/teams.ts`**
   - Extract every unique team from all results files
   - Normalize inconsistent names (e.g., all "Manthey EMA" variants → one ID)
   - Export `TEAMS` record and `getTeam()` lookup

3. **Enhance `src/data/circuits.ts`**
   - Add `id` (slug) and `countryCode` to every circuit
   - Keep `name` as-is for display
   - Export `getCircuit(id)` and `getCircuitByName(name)` (for backward compat during migration)

4. **Create `src/data/entries/` directory**
   - One file per series per year: `f1-2025.ts`, `f1-2026.ts`, etc.
   - Map every driver → team for that season using `driverId` and `teamId`
   - Start with F1, NASCAR, IndyCar, WEC, WRC (most popular series first)
   - Remaining series can be added incrementally

**Verification**: Build passes, no UI changes, all new files are pure data exports.

### Phase 2 — Normalize results (with compatibility layer)

**Goal**: Migrate results to use IDs. Add a resolver so existing UI still works.

1. **Update `src/lib/types.ts`**
   - Add new interfaces alongside old ones:
     ```typescript
     export interface NormalizedPodiumEntry {
       position: number
       driverIds: string[]
       teamId: string
       carNumber?: number
     }
     ```
   - Keep old `PodiumEntry` interface during migration

2. **Create resolver layer (`src/data/results/resolve.ts`)**
   ```typescript
   // Takes normalized result, returns display-ready result with names
   export function resolveResult(result: NormalizedRaceResult): RaceResult {
     return {
       overall: {
         drivers: result.overall.driverIds.map(id => getDriver(id)?.shortName ?? id),
         team: getTeam(result.overall.teamId)?.name ?? result.overall.teamId,
       },
       // ... resolve classes, fastestLap
     }
   }
   ```

3. **Migrate results files one series at a time**
   - Start with F1 2025 (most data, most visible)
   - Replace `drivers: ['Norris']` → `driverIds: ['norris']`
   - Replace `team: 'McLaren'` → `teamId: 'mclaren'`
   - Update `getResult()` in `index.ts` to resolve before returning
   - Test: UI should display identical results

4. **Repeat for all series**
   - Do one series at a time, verify after each
   - Order: F1 → NASCAR → IndyCar → WEC → WRC → DTM → remaining

**Verification**: After each series migration, `npx next build` + visual check that results display unchanged.

### Phase 3 — Normalize calendar events

**Goal**: Calendar files reference circuits by ID instead of name string.

1. **Add `circuitId` to `RaceEvent` interface**
   - Keep `circuit` (name), `country`, `countryCode` for now as computed fields
   - Add `circuitId: string` as the canonical reference

2. **Migrate calendar files one by one**
   - Add `circuitId` field to every event
   - Update `DayDetail` to look up circuit by ID: `getCircuit(event.circuitId)`
   - Remove `country`/`countryCode` from events (read from circuit entity)

3. **Update `circuits.ts` export**
   - Change from `Record<string, CircuitInfo>` keyed by name
   - To `Record<string, Circuit>` keyed by slug ID

**Verification**: Circuit info still displays in day detail, no missing data.

### Phase 4 — Make things clickable (UI changes)

**Goal**: Driver names, team names, circuit names become links.

1. **Circuit links in DayDetail**
   - Circuit name becomes `<Link href={`/circuits/${circuitId}`}>`
   - Works immediately since we have circuit IDs from Phase 3

2. **Driver/team links in results**
   - In the results display component, wrap driver names with `<Link href={`/drivers/${driverId}`}>`
   - Wrap team names with `<Link href={`/teams/${teamId}`}>`
   - These pages don't exist yet — link anyway, build pages in Phase 5

3. **Series chip links**
   - Series chips in day detail become `<Link href={`/series/${seriesId}`}>`
   - Series ID already exists

### Phase 5 — New pages

Build the pages from roadmap items 14, 15, 16 using normalized data.

1. **`/circuits/[slug]`** — Circuit detail page
   - Lookup circuit by slug from `circuits.ts`
   - Cross-reference: scan all calendar files for events with this `circuitId`
   - Show: metadata, all events at this venue, past winners

2. **`/series/[id]`** — Series hub page
   - Lookup series from registry
   - Show: season calendar, circuits, entry list (from entries file)
   - Embed standings once available

3. **`/drivers/[id]`** — Driver profile
   - Lookup driver from `drivers.ts`
   - Find all entries (which teams, which series, which years)
   - Aggregate results across all series/years
   - Show: career summary, season-by-season results

4. **`/teams/[id]`** — Team profile
   - Lookup team from `teams.ts`
   - Find all entries (which drivers, which series, which years)
   - Aggregate results

5. **`/standings`** — Championship standings
   - Computed from normalized results + entry data
   - Per-series, per-year standings
   - Points systems differ per series — configurable per series

---

## ID naming conventions

| Entity | Pattern | Examples |
|--------|---------|---------|
| Driver | `lowercase-surname` or `first-surname` if ambiguous | `verstappen`, `norris`, `k-van-der-linde` |
| Team | `lowercase-hyphenated-name` | `mclaren`, `red-bull-racing`, `ferrari-af-corse` |
| Circuit | `lowercase-hyphenated-slug` | `albert-park`, `spa-francorchamps`, `indianapolis` |
| Series | Already exist | `f1`, `indycar`, `nascar`, `wec` |
| Event | Already exist | `f1-2025-australia`, `nascar-2025-daytona-500` |

---

## Rules during migration

- **Never break the build.** Every intermediate commit must pass `npx next build`.
- **One series at a time.** Don't migrate all results files in one go.
- **Keep backward compatibility** until a phase is fully complete. The resolver layer in Phase 2 ensures old and new formats both work.
- **Verify visually** after each series migration — results should look identical to users.
- **Driver/team IDs must be stable.** Once assigned, an ID never changes (even if the driver/team changes name). This matters for future URL stability.

---

## Future: Supabase migration

When the time comes, each entity file maps directly to a database table:

| File | Table | Primary Key |
|------|-------|-------------|
| `drivers.ts` | `drivers` | `id` |
| `teams.ts` | `teams` | `id` |
| `circuits.ts` | `circuits` | `id` |
| `entries/*.ts` | `entries` | `(series_id, year, driver_id)` |
| `results/*.ts` | `results` | `(event_id, session_type)` |
| `<series>-<year>.ts` | `events` + `sessions` | `event.id`, `(event_id, type)` |
| `series-registry.ts` | `series` | `id` |
| `broadcasts.ts` | `broadcasts` | `(series_id, country_code)` |

The resolver functions (`getDriver()`, `getTeam()`, etc.) become API calls or Supabase client queries — same interface, different backend.
