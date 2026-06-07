# Multi-Class Standings (WEC & IMSA 2026) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Allow WEC and IMSA 2026 standings to expose multiple class tables (Hypercar + LMGT3 for WEC; GTP + GTD Pro + GTD for IMSA), with a class switcher on the standings page. Tag the relevant entries with their class so future per-class views become trivial.

**Architecture:** Keep the existing `SeasonStandings` shape backward-compatible by adding an optional `otherClasses?: ClassStandings[]` field that holds additional class tables alongside the "primary" class (already in the top-level `drivers`/`constructors`/`className`). The standings page renders a class pill row above the drivers/constructors tabs when `otherClasses` is non-empty. `EntryItem` gains an optional `class?: string` field used only by multi-class series.

**Tech Stack:** Next.js 15 (App Router, static export), React 19, TypeScript, vitest. No runtime deps added.

**Scope (in):**
- Type changes to `SeasonStandings` and `EntryItem`
- `StandingsPageClient` class switcher UI
- `SeriesDetailClient` class switcher in the embedded standings widget
- WEC 2026: add LMGT3 class table; tag entries with `class`
- IMSA 2026: add GTD Pro + GTD class tables; tag entries with `class`
- Runbook update (`docs/UPDATE-STANDINGS.md`)
- Test coverage for the new type helpers and class switcher

**Scope (out — explicitly deferred):**
- Other GT series (GTWC, GTWC America/Asia/AU, British GT, Super GT, 24H Series, ELMS, MLMC, IGTC)
- Historical years (2021–2025) — current code keeps prior data unchanged
- `TeamDetailClient` per-class breakdown (existing season aggregation still works on primary class)
- Per-class filtering on `/series/<id>` entries grid (data tagging only; UI change is a follow-up)
- Sourcing brand-new driver/team IDs — out-of-scope crews that don't already exist in `drivers.ts`/`teams.ts` are skipped from the class tables and noted in the runbook

---

## File Structure

**Modify (type & helpers):**
- `src/data/standings/types.ts` — add `ClassStandings`, extend `SeasonStandings`
- `src/data/standings/index.ts` — add `getAllClassStandings(seriesId, year)` helper that returns `ClassStandings[]` including the primary class
- `src/data/entries/types.ts` — add optional `class?: string` to `EntryItem`

**Modify (UI):**
- `src/app/standings/StandingsPageClient.tsx` — class pill row, active-class state, swap rendered drivers/constructors based on active class
- `src/app/series/[id]/SeriesDetailClient.tsx` — same class pill row in the embedded standings widget

**Modify (data):**
- `src/data/standings/wec-2026.ts` — add `otherClasses: [{ className: 'LMGT3', drivers, constructors }]`
- `src/data/standings/imsa-2026.ts` — add `otherClasses: [{ className: 'GTD Pro', ... }, { className: 'GTD', ... }]`
- `src/data/entries/wec-2026.ts` — annotate each row with `class: 'Hypercar' | 'LMGT3'`
- `src/data/entries/imsa-2026.ts` — annotate each row with `class: 'GTP' | 'GTD Pro' | 'GTD'`

**Modify (docs):**
- `docs/UPDATE-STANDINGS.md` — document the multi-class shape for WEC/IMSA

**Create (tests):**
- `src/data/standings/standings.test.ts` — `getAllClassStandings` returns primary + other classes in order
- `src/app/standings/StandingsPageClient.test.tsx` — class switcher renders and toggles (only if a JSX-test setup is feasible; see Task 6 fallback)

---

## Self-contained source dump (so each task can be read independently)

These shapes are referenced by multiple tasks. Tasks restate them where needed; this section is the canonical source.

```ts
// src/data/standings/types.ts (post-change)
export interface DriverStandingEntry {
  position: number
  driverId: string
  teamId: string
  points: number
  wins: number
}

export interface TeamStandingEntry {
  position: number
  teamId: string
  points: number
  wins: number
}

export interface ClassStandings {
  className: string
  drivers: DriverStandingEntry[]
  constructors: TeamStandingEntry[]
}

export interface SeasonStandings {
  drivers: DriverStandingEntry[]
  constructors: TeamStandingEntry[]
  /** Class name displayed for multi-class series (e.g., "Hypercar", "GTP"). Optional for single-class series. */
  className?: string
  /** Additional class tables for multi-class series. The top-level drivers/constructors represent the primary class. */
  otherClasses?: ClassStandings[]
}
```

```ts
// src/data/standings/index.ts (added export — keep all existing imports/exports intact)
import type { ClassStandings, SeasonStandings } from './types'

export function getAllClassStandings(seriesId: string, year: number): ClassStandings[] {
  const s = getStandings(seriesId, year)
  if (!s) return []
  const primary: ClassStandings = {
    className: s.className ?? 'Overall',
    drivers: s.drivers,
    constructors: s.constructors,
  }
  return [primary, ...(s.otherClasses ?? [])]
}
```

```ts
// src/data/entries/types.ts (post-change)
export interface EntryItem {
  driverId: string
  teamId: string
  carNumber?: number
  /** Class identifier for multi-class series (e.g., "Hypercar", "LMGT3", "GTP", "GTD Pro", "GTD"). */
  class?: string
}
```

---

## Task 1: Type changes — `ClassStandings` and `otherClasses`

**Files:**
- Modify: `src/data/standings/types.ts`
- Test: `src/data/standings/standings.test.ts` (create)

- [ ] **Step 1: Write the failing test**

Create `src/data/standings/standings.test.ts`:

```ts
import { describe, it, expect } from 'vitest'
import type { ClassStandings, SeasonStandings } from './types'
import { getAllClassStandings } from './index'

describe('getAllClassStandings', () => {
  it('returns empty array for missing standings', () => {
    expect(getAllClassStandings('does-not-exist', 1999)).toEqual([])
  })

  it('returns single-class array for a single-class series (F1 2026)', () => {
    const classes = getAllClassStandings('f1', 2026)
    expect(classes.length).toBe(1)
    expect(classes[0].drivers.length).toBeGreaterThan(0)
  })

  it('returns primary + other classes for multi-class series (WEC 2026)', () => {
    const classes = getAllClassStandings('wec', 2026)
    expect(classes.map(c => c.className)).toEqual(['Hypercar', 'LMGT3'])
    expect(classes[1].drivers.length).toBeGreaterThan(0)
  })

  it('returns three classes for IMSA 2026', () => {
    const classes = getAllClassStandings('imsa', 2026)
    expect(classes.map(c => c.className)).toEqual(['GTP', 'GTD Pro', 'GTD'])
  })

  it('asserts the type shape compiles', () => {
    const s: SeasonStandings = {
      drivers: [],
      constructors: [],
      className: 'Foo',
      otherClasses: [{ className: 'Bar', drivers: [], constructors: [] } satisfies ClassStandings],
    }
    expect(s.otherClasses?.[0].className).toBe('Bar')
  })
})
```

- [ ] **Step 2: Run test to confirm it fails**

```bash
npx vitest run src/data/standings/standings.test.ts
```

Expected: FAIL — `getAllClassStandings` is not exported; `otherClasses` is not on `SeasonStandings`; WEC/IMSA tests fail because data does not yet contain `otherClasses`.

- [ ] **Step 3: Add `ClassStandings` and `otherClasses` to types**

Edit `src/data/standings/types.ts`. Replace the file with:

```ts
export interface DriverStandingEntry {
  position: number
  driverId: string
  teamId: string
  points: number
  wins: number
}

export interface TeamStandingEntry {
  position: number
  teamId: string
  points: number
  wins: number
}

export interface ClassStandings {
  className: string
  drivers: DriverStandingEntry[]
  constructors: TeamStandingEntry[]
}

export interface SeasonStandings {
  drivers: DriverStandingEntry[]
  constructors: TeamStandingEntry[]
  /** Class name displayed for multi-class series (e.g., "Hypercar", "GTP", "GT500"). Optional for single-class series. */
  className?: string
  /** Additional class tables for multi-class series. The top-level drivers/constructors represent the primary class. */
  otherClasses?: ClassStandings[]
}
```

- [ ] **Step 4: Verify type-only test sub-cases pass**

```bash
npx vitest run src/data/standings/standings.test.ts -t "type shape"
```

Expected: PASS on the "asserts the type shape compiles" case. The other cases still fail (helper + data not yet added) — that's fine; Task 2 fixes the helper, Task 4/5 fix the data.

- [ ] **Step 5: Commit**

```bash
git add src/data/standings/types.ts src/data/standings/standings.test.ts
git commit -m "Add ClassStandings type and otherClasses field"
```

---

## Task 2: `getAllClassStandings` helper

**Files:**
- Modify: `src/data/standings/index.ts`

- [ ] **Step 1: Add the helper export**

Open `src/data/standings/index.ts`. Append after the existing `hasStandings` function (the last lines of the file currently read `export function hasStandings(...)`):

```ts
import type { ClassStandings } from './types'

export function getAllClassStandings(seriesId: string, year: number): ClassStandings[] {
  const s = getStandings(seriesId, year)
  if (!s) return []
  const primary: ClassStandings = {
    className: s.className ?? 'Overall',
    drivers: s.drivers,
    constructors: s.constructors,
  }
  return [primary, ...(s.otherClasses ?? [])]
}
```

If `ClassStandings` is already imported earlier in the file, do not duplicate the import — just add the function. Place the `import type` line next to the existing `import type { SeasonStandings }` at the top of the file instead of mid-file (TypeScript allows mid-file imports but project convention is top-of-file).

- [ ] **Step 2: Run the helper-only tests**

```bash
npx vitest run src/data/standings/standings.test.ts -t "missing standings"
npx vitest run src/data/standings/standings.test.ts -t "single-class series"
```

Expected: both PASS. The WEC/IMSA tests still fail until Tasks 4 & 5 populate the data.

- [ ] **Step 3: Commit**

```bash
git add src/data/standings/index.ts
git commit -m "Add getAllClassStandings helper for multi-class series"
```

---

## Task 3: `EntryItem` gains optional `class` field

**Files:**
- Modify: `src/data/entries/types.ts`

- [ ] **Step 1: Edit the type**

Replace `src/data/entries/types.ts` with:

```ts
export interface EntryItem {
  driverId: string
  teamId: string
  carNumber?: number
  /** Class identifier for multi-class series (e.g., "Hypercar", "LMGT3", "GTP", "GTD Pro", "GTD"). */
  class?: string
}
```

- [ ] **Step 2: Type-check the codebase**

```bash
npx tsc --noEmit
```

Expected: PASS (the field is optional — existing entries without `class` still compile).

- [ ] **Step 3: Commit**

```bash
git add src/data/entries/types.ts
git commit -m "Add optional class field to EntryItem"
```

---

## Task 4: WEC 2026 — LMGT3 class table & entry tagging

**Source — verified driver/team IDs (all already in `drivers.ts`/`teams.ts`; do NOT add new ones in this task):**

LMGT3 class standings after the same round as the existing Hypercar table (Round 2 Spa). Sources to query: fiawec.com/en/results, autohebdof1.com/news/endurance/wec, Wikipedia "2026 FIA World Endurance Championship".

For each LMGT3 driver entry the worker must:
1. WebSearch the source for the top-10 LMGT3 driver standings after Round 2 Spa 2026
2. For each row, look up the driver ID in `src/data/drivers.ts` (search by surname); the team ID in `src/data/teams.ts` (search by name fragment)
3. If a driver or team is **not** already present, **skip** that row and continue with the next — do not add new driver/team IDs in this task. Note skipped rows in the comment block above the data
4. Same procedure for the top-8 LMGT3 manufacturers/teams

**Files:**
- Modify: `src/data/standings/wec-2026.ts`
- Modify: `src/data/entries/wec-2026.ts`

- [ ] **Step 1: Fetch LMGT3 standings**

Run WebSearch with query: `WEC 2026 LMGT3 standings after Spa drivers teams points`. Cross-reference with `https://www.autohebdof1.com/news/endurance/wec/` if a direct URL appears in results.

Record the top-10 drivers (position, driver name, team, points, wins) and top-8 teams. Map each name to its existing ID via:

```bash
grep -nE "name: '<Driver Last Name>'" src/data/drivers.ts
grep -nE "name: '<Team Name Fragment>'" src/data/teams.ts
```

If a row has no matching ID, skip it. Keep a comment listing skipped rows.

- [ ] **Step 2: Add `otherClasses` to `wec-2026.ts`**

Open `src/data/standings/wec-2026.ts`. Inside the `wecStandings2026` object, just before the closing `}`, add the `otherClasses` field. The file currently ends with `constructors: [...] }`. Change the closing to:

```ts
  constructors: [
    // ...existing Hypercar manufacturers stay unchanged
  ],
  otherClasses: [
    {
      className: 'LMGT3',
      // Source: fiawec.com / autohebdof1.com — after Round 2 Spa 2026
      // Skipped rows (driver/team IDs not yet in repo): <list any here>
      drivers: [
        { position: 1, driverId: '<id>', teamId: '<id>', points: <N>, wins: <N> },
        // ... fill rows discovered in Step 1
      ],
      constructors: [
        { position: 1, teamId: '<id>', points: <N>, wins: <N> },
        // ... fill rows discovered in Step 1
      ],
    },
  ],
}
```

Replace `<...>` with the verified values from Step 1.

- [ ] **Step 3: Annotate WEC entries with class**

Open `src/data/entries/wec-2026.ts`. The file groups entries by team with `// Hypercar` and `// LMGT3` section comments already. For every row, add `class:` matching the current section header:

```ts
{ driverId: 'gamble', teamId: 'aston-martin-thor', class: 'Hypercar' },
// ... continue for every existing row, switching to class: 'LMGT3' when the section comment changes
```

Do not add or remove rows; only add the `class` field on each existing row.

- [ ] **Step 4: Run the WEC-targeted standings test**

```bash
npx vitest run src/data/standings/standings.test.ts -t "WEC 2026"
```

Expected: PASS — the test now finds `['Hypercar', 'LMGT3']` and non-empty LMGT3 drivers.

- [ ] **Step 5: Build to confirm no regressions**

```bash
npx next build
```

Expected: build succeeds. If a driver/team ID is missing, the build won't fail (lookups return null) — instead, eyeball the LMGT3 rows in the file for any `<id>` placeholders and remove them.

- [ ] **Step 6: Commit**

```bash
git add src/data/standings/wec-2026.ts src/data/entries/wec-2026.ts
git commit -m "Add WEC 2026 LMGT3 standings and tag entries with class"
```

---

## Task 5: IMSA 2026 — GTD Pro + GTD class tables & entry tagging

**Source — same workflow as Task 4, but two additional class tables (GTD Pro, GTD).** Source: `https://www.imsa.com/weathertech/standings/`, autohebdof1.com.

**Files:**
- Modify: `src/data/standings/imsa-2026.ts`
- Modify: `src/data/entries/imsa-2026.ts`

- [ ] **Step 1: Fetch GTD Pro and GTD standings**

Run WebSearch with queries:
- `IMSA 2026 GTD Pro standings after Detroit drivers teams points`
- `IMSA 2026 GTD class standings after Detroit drivers points`

Capture top-10 drivers and top-8 teams per class. Map to existing IDs with `grep` against `drivers.ts`/`teams.ts`. Skip unmapped rows and note them.

- [ ] **Step 2: Extend `imsa-2026.ts` standings**

Open `src/data/standings/imsa-2026.ts`. After the existing `constructors: []` line, add:

```ts
  otherClasses: [
    {
      className: 'GTD Pro',
      // Source: imsa.com — after Round 5 Detroit Sprint 2026
      // Skipped rows: <list>
      drivers: [
        { position: 1, driverId: '<id>', teamId: '<id>', points: <N>, wins: <N> },
        // ...
      ],
      constructors: [],
    },
    {
      className: 'GTD',
      // Source: imsa.com — after Round 5 Detroit Sprint 2026
      // Skipped rows: <list>
      drivers: [
        { position: 1, driverId: '<id>', teamId: '<id>', points: <N>, wins: <N> },
        // ...
      ],
      constructors: [],
    },
  ],
```

(GTD Pro and GTD do not have separate manufacturer titles tracked here — keep `constructors: []`.)

- [ ] **Step 3: Annotate IMSA entries with class**

Open `src/data/entries/imsa-2026.ts`. The file uses `// GTP`, `// GTD Pro`, and `// GTD` section comments. Add a `class:` field to every row matching its section. Example:

```ts
{ driverId: 'estre', teamId: 'porsche-penske', carNumber: 6, class: 'GTP' },
```

Apply consistently for every existing row. Do not add or remove rows.

- [ ] **Step 4: Run the IMSA-targeted standings test**

```bash
npx vitest run src/data/standings/standings.test.ts -t "IMSA 2026"
```

Expected: PASS.

- [ ] **Step 5: Build**

```bash
npx next build
```

Expected: success.

- [ ] **Step 6: Commit**

```bash
git add src/data/standings/imsa-2026.ts src/data/entries/imsa-2026.ts
git commit -m "Add IMSA 2026 GTD Pro and GTD standings and tag entries with class"
```

---

## Task 6: Standings page — class switcher UI

**Files:**
- Modify: `src/app/standings/StandingsPageClient.tsx`

UI behavior:
- When `getAllClassStandings(seriesId, year).length <= 1`, render exactly as today (no class row).
- When `> 1`, render a pill row above the existing drivers/constructors tabs. Pills are styled like `.rg-series-tab` (same as the drivers/constructors pills). Active pill matches the active tab styling.
- Active class is component-local state (`useState`), reset to index 0 whenever `seriesId` or `year` changes.
- The rendered drivers/constructors arrays come from the active class instead of `standings.drivers`/`standings.constructors`.
- Existing search filter (`query`) still applies to whichever class is active.

- [ ] **Step 1: Open the file and make the swap**

Open `src/app/standings/StandingsPageClient.tsx`. At the top, add `getAllClassStandings` to the existing `@/data/standings` import:

```ts
import { getStandings, hasStandings, getAllClassStandings } from '@/data/standings'
```

Also add `ClassStandings` to the standings types import:

```ts
import type { ClassStandings, DriverStandingEntry, TeamStandingEntry } from '@/data/standings/types'
```

- [ ] **Step 2: Replace the `standings`-derived data with class-aware data**

Locate the existing line (around line 45):

```ts
const standings = useMemo(() => getStandings(seriesId, year), [seriesId, year])
```

Keep it, and add directly below:

```ts
const allClasses = useMemo(() => getAllClassStandings(seriesId, year), [seriesId, year])
const [activeClassIdx, setActiveClassIdx] = useState(0)

useEffect(() => { setActiveClassIdx(0) }, [seriesId, year])

const activeClass: ClassStandings | null = allClasses[activeClassIdx] ?? null
```

- [ ] **Step 3: Replace `standings.drivers` and `standings.constructors` references**

In `filteredDrivers` and `filteredConstructors` (around lines 63–82), change:

```ts
const filteredDrivers = useMemo(() => {
  if (!standings) return []
  if (!query.trim()) return standings.drivers
  // ...
  return standings.drivers.filter(...)
}, [standings, query])
```

to:

```ts
const filteredDrivers = useMemo(() => {
  if (!activeClass) return []
  if (!query.trim()) return activeClass.drivers
  const q = query.toLowerCase()
  return activeClass.drivers.filter(entry => {
    const driver = getDriver(entry.driverId)
    const team = getTeam(entry.teamId)
    return driver?.name.toLowerCase().includes(q) || team?.name.toLowerCase().includes(q)
  })
}, [activeClass, query])
```

Apply the same swap to `filteredConstructors` (use `activeClass.constructors`).

Also update the `useEffect` that resets the tab to drivers when no constructors exist (line ~49):

```ts
useEffect(() => {
  if (activeClass && activeClass.constructors.length === 0) setTab('drivers')
}, [activeClass])
```

And the `constructors.length > 0` check that controls the drivers/constructors tab bar visibility (line ~204): change `standings.constructors.length` to `activeClass?.constructors.length ?? 0`.

The class-label block that currently renders `standings.className` (lines 192–201) should be REPLACED by the new pill row from Step 4 — delete it.

- [ ] **Step 4: Insert the class pill row**

Where the deleted className block used to be (between the year selector and the drivers/constructors tabs), insert:

```tsx
{allClasses.length > 1 && (
  <div
    className="rg-series-tabs"
    style={{
      display: 'flex', gap: 2, background: 'var(--rg-btn-bg)',
      borderRadius: 10, padding: 2, marginBottom: 12,
      width: 'fit-content', maxWidth: '100%', flexWrap: 'wrap',
    }}
  >
    {allClasses.map((cls, idx) => (
      <button
        key={cls.className}
        onClick={() => setActiveClassIdx(idx)}
        className="rg-series-tab"
        style={{
          padding: '6px 14px', borderRadius: 8, fontSize: 12, fontWeight: 700,
          letterSpacing: 0.5, textTransform: 'uppercase',
          background: idx === activeClassIdx ? 'var(--rg-elevated)' : 'transparent',
          border: idx === activeClassIdx ? '1px solid var(--rg-border)' : '1px solid transparent',
          color: idx === activeClassIdx ? 'var(--rg-text)' : 'var(--rg-text3)',
          cursor: 'pointer',
        }}
      >
        {cls.className}
      </button>
    ))}
  </div>
)}

{allClasses.length === 1 && allClasses[0].className && allClasses[0].className !== 'Overall' && (
  <div style={{ marginBottom: 12 }}>
    <span style={{
      fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase',
      color: 'var(--rg-text3)',
    }}>
      {allClasses[0].className}
    </span>
  </div>
)}
```

The second block preserves the existing single-class label behavior (e.g., IMSA shows "GTP" today before this work). Once IMSA gains `otherClasses`, the first block takes over.

- [ ] **Step 5: Verify in the browser**

```bash
npm run dev
```

Open `http://localhost:3000/standings`:
1. Select F1 2026 → no class row, drivers/constructors tabs render
2. Select WEC 2026 → "HYPERCAR" / "LMGT3" pills above the tab bar; click each, list updates
3. Select IMSA 2026 → "GTP" / "GTD PRO" / "GTD" pills; GTD Pro/GTD show drivers only (no constructors)
4. Switch year/series → pills reset to first class

Stop the dev server when verified.

- [ ] **Step 6: Type check**

```bash
npx tsc --noEmit
```

Expected: PASS.

- [ ] **Step 7: Build**

```bash
npx next build
```

Expected: PASS.

- [ ] **Step 8: Commit**

```bash
git add src/app/standings/StandingsPageClient.tsx
git commit -m "Add class switcher to standings page for multi-class series"
```

---

## Task 7: Series detail page — class switcher in embedded standings widget

**Files:**
- Modify: `src/app/series/[id]/SeriesDetailClient.tsx`

The series detail page also embeds a standings widget. Mirror the same logic so `/series/wec` and `/series/imsa` get the class switcher.

- [ ] **Step 1: Identify the standings block in `SeriesDetailClient.tsx`**

Open the file. Locate the existing block that consumes `standingsData = useMemo(() => getStandings(seriesId, year), ...)` (around line 61) and the JSX that renders `standingsData.drivers`/`standingsData.constructors`.

- [ ] **Step 2: Apply the same swap as Task 6**

Replace the `getStandings` call with a `getAllClassStandings` call:

```ts
import { getAllClassStandings, getStandings } from '@/data/standings'
import type { ClassStandings } from '@/data/standings/types'

// inside the component:
const allClasses = useMemo(() => getAllClassStandings(seriesId, year), [seriesId, year])
const [activeClassIdx, setActiveClassIdx] = useState(0)
useEffect(() => { setActiveClassIdx(0) }, [seriesId, year])
const activeClass: ClassStandings | null = allClasses[activeClassIdx] ?? null
```

Replace every `standingsData.drivers` / `standingsData.constructors` reference with `activeClass?.drivers ?? []` / `activeClass?.constructors ?? []`. If `standingsData` is referenced for any other purpose (e.g., a presence check), keep it via `getStandings` but only use it for that.

- [ ] **Step 3: Insert the same class pill row**

Use the exact JSX from Task 6 Step 4 (paste it above the table the series page already renders).

- [ ] **Step 4: Verify in the browser**

```bash
npm run dev
```

Visit `/series/wec` and `/series/imsa` → confirm the class pills appear and switch classes.

- [ ] **Step 5: Type check + build**

```bash
npx tsc --noEmit && npx next build
```

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/app/series/[id]/SeriesDetailClient.tsx
git commit -m "Add class switcher to series detail standings widget"
```

---

## Task 8: Update runbook

**Files:**
- Modify: `docs/UPDATE-STANDINGS.md`

- [ ] **Step 1: Document the new shape**

Open `docs/UPDATE-STANDINGS.md`. Find the "Series-specific notes" section near the bottom. Replace the existing WEC entry under "Series WITH constructor/manufacturer standings" with the explicit multi-class instruction, and add an IMSA entry.

Append a new section after "NLS special case" and before "Dakar special case":

```markdown
### Multi-class series (WEC, IMSA)

For series with multiple championship classes, the top-level `drivers`/`constructors` represent the **primary class**, and additional classes go in `otherClasses`:

- **WEC**: primary = `Hypercar`, otherClasses = `[{ className: 'LMGT3', drivers, constructors }]`
- **IMSA**: primary = `GTP`, otherClasses = `[{ className: 'GTD Pro', drivers, constructors: [] }, { className: 'GTD', drivers, constructors: [] }]`

When refreshing standings:
1. Update the primary class table (top-level fields) as before
2. Update each `otherClasses[*]` table the same way — query each class's official source separately
3. If a driver or team ID is not yet present in `drivers.ts`/`teams.ts`, skip that row and add a comment listing the skipped name. Do not invent IDs in the standings runbook — adding new drivers/teams is its own task
```

- [ ] **Step 2: Commit**

```bash
git add docs/UPDATE-STANDINGS.md
git commit -m "Document multi-class standings shape in update runbook"
```

---

## Task 9: Final verification

- [ ] **Step 1: Run the full test suite**

```bash
npx vitest run
```

Expected: all tests pass, including all four cases in `standings.test.ts`.

- [ ] **Step 2: Final build**

```bash
npx next build
```

Expected: success, no warnings beyond baseline.

- [ ] **Step 3: Spot-check the live UI**

```bash
npm run dev
```

Visit and confirm:
- `/standings` → F1 2026, WEC 2026, IMSA 2026
- `/series/wec`, `/series/imsa`
- `/standings` → F1 2025 (regression check: single-class still works)

Stop dev server.

- [ ] **Step 4: Push**

```bash
git push origin <branch>
```

(Or open a PR — `/ultrareview <PR#>` becomes available once the PR exists.)

---

## Self-Review

**Spec coverage check (against the user's stated scope: WEC + IMSA, 2026; per-class drivers and standings; class concept on entries):**
- Standings type supports multiple classes — Task 1
- Helper to enumerate all classes — Task 2
- Entries gain class tagging — Task 3
- WEC 2026 LMGT3 data populated + entries tagged — Task 4
- IMSA 2026 GTD Pro & GTD data populated + entries tagged — Task 5
- Standings page UI switcher — Task 6
- Series detail page UI switcher — Task 7
- Runbook updated for future maintenance — Task 8
- Verification — Task 9

**Placeholder scan:** Tasks 4 & 5 contain `<id>` placeholders where the worker writes the actual driver/team IDs after WebSearch. That is the intended workflow (verified data only — never fabricate) and is explicitly framed as a fill-in step, with skip-and-comment fallback. All other tasks have complete code.

**Type consistency:** `ClassStandings`, `SeasonStandings`, `getAllClassStandings`, `activeClass`, `allClasses`, `activeClassIdx` are used consistently across Tasks 1, 2, 6, 7. Field names: `className`, `drivers`, `constructors`, `otherClasses`, `class` (on EntryItem) match across all tasks.

**Out-of-scope reminder:** other GT series, historical years, per-class entries grid filtering, `TeamDetailClient` per-class breakdown — all deferred. If the user wants any of those, follow this plan as a template for the next pass.
