# New Pages & Navigation

Runbook for implementing app-wide navigation and four new page types: Series, Circuits, Standings, Drivers/Teams. Depends on data normalization (see `docs/DATA-NORMALIZATION.md`) being at least partially complete (Phase 1 entity files + Phase 2 normalized results).

---

## Navigation

### Desktop (≥769px): Header nav links

Add navigation links to the existing header, between the logo and the controls (filter, install, settings).

```
[RACE GRID]   Calendar   Series   Circuits   Standings        [filter] [install] [settings]
```

- Links are plain text, no icons on desktop
- Active page highlighted with `var(--rg-link)` color
- Inactive links use `var(--rg-text2)`
- Font: body font (DM Sans), 14px, weight 500
- Links: `/` (Calendar), `/series` (Series), `/circuits` (Circuits), `/standings` (Standings)
- On sub-pages (e.g., `/series/f1`, `/circuits/spa-francorchamps`, `/drivers/verstappen`), the parent nav item stays highlighted (Series stays active on `/series/f1`)
- The series filter dropdown only appears on Calendar page — other pages handle filtering inline where needed
- Remove the "Back to calendar" link from day view header — users navigate via the nav bar instead

### Mobile/Tablet (<769px): Bottom tab bar

Fixed bar at the bottom of the viewport with 4 tabs.

```
┌──────────────────────────────────────────────────┐
│  📅 Calendar     🏎 Series     🏁 Circuits     📊 Standings │
└──────────────────────────────────────────────────┘
```

- Fixed position, bottom: 0, full width
- Background: `var(--rg-header-bg)` with `backdrop-filter: blur(16px)` (same as header)
- Border-top: `1px solid var(--rg-border)`
- Safe area padding: `padding-bottom: env(safe-area-inset-bottom)`
- Each tab: icon (lucide, 20px) + label (11px, weight 500) stacked vertically
- Active tab: `var(--rg-link)` color for both icon and label
- Inactive: `var(--rg-text3)`
- Tab icons: `Calendar` (calendar), `Flag` (series), `MapPin` (circuits), `Trophy` (standings)
- On mobile, the desktop nav links in the header are hidden
- The header shrinks to: logo + controls only (filter on calendar page, settings gear on all pages)
- Add `padding-bottom` to the page content equal to the bottom bar height (~60px + safe area) so content isn't hidden behind the bar

### Navigation component

Create `src/components/Navigation.tsx`:
- Accepts `currentPath: string` and `locale: Locale`
- Renders desktop nav (inside header) and bottom bar (standalone fixed element)
- Uses `next/link` for client-side navigation
- Determines active state from `currentPath` with prefix matching:
  - `/` → Calendar (exact match only)
  - `/series` → Series (prefix match: `/series`, `/series/f1`, `/drivers/verstappen`, `/teams/mclaren`)
  - `/circuits` → Circuits (prefix match: `/circuits`, `/circuits/spa`)
  - `/standings` → Standings (prefix match: `/standings`, `/standings/f1`)
- Day detail pages (`/day/2025-04-05`) highlight Calendar as active

### i18n strings to add

```
'nav.calendar': 'Calendar' / 'Календар'
'nav.series': 'Series' / 'Серії'
'nav.circuits': 'Circuits' / 'Траси'
'nav.standings': 'Standings' / 'Турнірна таблиця'
```

---

## Page: Series index (`/series`)

### URL: `/series`

### Content
- Grid of all 14 series cards
- Each card shows:
  - Series logo (from `public/logos/<id>.svg`)
  - Series name
  - Season progress bar (reuse existing progress bar component from filter dropdown)
  - Next upcoming event name + date
  - Total rounds count: "24 rounds" / "8 rounds"
- Cards link to `/series/[id]`
- Year selector at the top (from `AVAILABLE_YEARS`), defaults to current year
- Persist selected year in localStorage

### Layout
- Max-width: 1200px, centered (same as calendar)
- Cards: responsive grid — 3 columns desktop, 2 columns tablet, 1 column mobile
- Card style: `var(--rg-elevated)` background, `var(--rg-border)` border, rounded corners (12px)
- Series color as left border accent (4px)

### Data source
- `getSeriesForYear(year)` from `series-registry.ts`
- Next event: first event with a session `startUtc` in the future

---

## Page: Series detail (`/series/[id]`)

### URL: `/series/f1`, `/series/wec`, etc.

### Content

Sections displayed vertically (no tabs — keep it simple, scrollable):

**1. Header area**
- Series logo (large) + full name
- Season progress bar: "Round 5 of 24"
- Year selector

**2. Calendar section**
- Full season schedule as a list of event cards
- Each card: round number, event name, circuit name (links to `/circuits/[slug]`), date range, results summary (winner if race completed)
- Upcoming event visually highlighted
- Past events show result, future events show date

**3. Circuits section**
- List of all circuits this series visits in the selected year
- Each row: circuit name (link to `/circuits/[slug]`), country flag, circuit type badge
- No duplicates if a series visits the same circuit twice (e.g., Fuji in Super GT)

**4. Standings section**
- Embedded standings table (same component as `/standings` page)
- Driver standings + Constructor/Manufacturer standings
- For class-based series (WEC, IMSA, GTWC): show per-class standings
- Initially uses static standings data; later can be computed from results

**5. Entry list section** (Phase 2 — after data normalization)
- Drivers and teams for this series + year
- Each driver row: name (link to `/drivers/[id]`), car number, team (link to `/teams/[id]`), nationality flag
- Data from `entries/<series>-<year>.ts`

### Data source
- Series metadata: `series-registry.ts`
- Events/calendar: `getSeriesForYear(year)`
- Standings: `src/data/standings/<series>-<year>.ts`
- Entry list: `src/data/entries/<series>-<year>.ts`
- Results: `getResult(eventId, sessionType)` for past events

### Static generation
- `generateStaticParams()` returns all series IDs × available years
- Default year: latest in `AVAILABLE_YEARS`

---

## Page: Circuits index (`/circuits`)

### URL: `/circuits`

### Content
- Searchable list/grid of all circuits
- Search input at top (same style as calendar search)
- Filter chips: by type (Permanent, Street, Oval, Mixed) and optionally by series
- Each circuit card shows:
  - Circuit name
  - Country (flag emoji + name)
  - Length, turns, type badge
  - Series badges: which series race here (small colored pills with series short names)
- Cards link to `/circuits/[slug]`

### Layout
- Max-width: 1200px, centered
- Cards: list layout (full width rows) — circuits have long names, grid doesn't work well
- Card style: same as series cards — elevated background, border, 12px radius

### Data source
- All circuits from `circuits.ts`
- Cross-reference: scan all calendar files to find which series use each circuit
- Build this cross-reference at build time in a helper function

---

## Page: Circuit detail (`/circuits/[slug]`)

### URL: `/circuits/spa-francorchamps`, `/circuits/albert-park`, etc.

### Content

**1. Header area**
- Circuit name + country flag
- Metadata row: length, turns, type badge, lap record (if available)

**2. Series that race here**
- Row of series badges/chips (colored pills), each linking to `/series/[id]`

**3. Event history**
- All events at this circuit across all series and years
- Grouped by year, sorted newest first
- Each row: series badge, event name, date, race winner (from results)
- Event name links to `/day/[date]` for that event's race day
- Driver names in results link to `/drivers/[id]` (once normalized)

### Data source
- Circuit metadata: `circuits.ts` (by slug)
- Events: scan all calendar files for events with matching `circuitId`
- Results: `getResult()` for each past event

### Static generation
- `generateStaticParams()` returns all circuit slugs

---

## Page: Standings (`/standings`)

### URL: `/standings` or `/standings?series=f1&year=2026`

### Content

**1. Controls row**
- Series selector: dropdown with all 14 series, showing series color dot + name
- Year selector: from `AVAILABLE_YEARS`
- Persist last-viewed series + year in localStorage (`race-grid:standings-series`, `race-grid:standings-year`)
- Default: F1, current year

**2. Driver standings table**
- Columns: Position, Driver (link to `/drivers/[id]`), Team (link to `/teams/[id]`), Points, Wins
- Rows sorted by position
- Top 3 highlighted subtly (gold/silver/bronze accent or bold)
- For class-based series: class selector tabs (e.g., Hypercar / LMGT3 for WEC)

**3. Constructor/Manufacturer standings table**
- Columns: Position, Team (link to `/teams/[id]`), Points, Wins
- Same styling as driver table
- Label adapts: "Constructors" for F1, "Manufacturers" for NASCAR/DTM, "Teams" for others

### Data source

**Static approach (initial):**
- `src/data/standings/<series>-<year>.ts` files
- Updated manually alongside results (add step to `docs/UPDATE-RESULTS.md`)
- Structure:
  ```typescript
  export interface StandingsEntry {
    position: number
    driverId: string     // references drivers.ts
    teamId: string       // references teams.ts
    points: number
    wins: number
  }

  export interface TeamStandingsEntry {
    position: number
    teamId: string
    points: number
    wins: number
  }

  export interface SeasonStandings {
    drivers: StandingsEntry[]
    constructors: TeamStandingsEntry[]
  }
  ```
- For class-based series, extend with:
  ```typescript
  export interface ClassStandings {
    className: string    // 'Hypercar', 'LMGT3', 'GTP', etc.
    drivers: StandingsEntry[]
    teams: TeamStandingsEntry[]
  }
  ```

**Future computed approach:**
- Define points systems per series in a config:
  ```typescript
  // src/data/points-systems.ts
  export const POINTS_SYSTEMS: Record<string, Record<number, number>> = {
    f1: { 1: 25, 2: 18, 3: 15, 4: 12, 5: 10, 6: 8, 7: 6, 8: 4, 9: 2, 10: 1 },
    f1_sprint: { 1: 8, 2: 7, 3: 6, 4: 5, 5: 4, 6: 3, 7: 2, 8: 1 },
    indycar: { 1: 50, 2: 40, 3: 35, ... },
    // ...
  }
  ```
- Compute standings from normalized results: iterate all events for a series+year, sum points per driver/team
- This makes standings automatically update when results are added — no manual standings file maintenance

### Static generation
- Single page, no dynamic params (series/year are query params or localStorage)

---

## Page: Driver profile (`/drivers/[id]`)

### URL: `/drivers/verstappen`, `/drivers/norris`, etc.

### Content

**1. Header area**
- Driver name (large, display font)
- Nationality flag
- Current team + series (with links)
- Car number badge

**2. Season results**
- For each series the driver competes in (current year):
  - Series badge + year
  - List of events with their results
  - Each row: round number, event name, qualifying position, race position
  - Event name links to `/day/[date]`

**3. Career summary** (grows with historical data)
- Year-by-year: series, team, championship position, wins
- One row per season

### Data source
- Driver info: `drivers.ts`
- Entries: `entries/<series>-<year>.ts` — find all entries for this driver
- Results: scan all results files for events where this driver appears in podium

### Static generation
- `generateStaticParams()` returns all driver IDs from `drivers.ts`

---

## Page: Team profile (`/teams/[id]`)

### URL: `/teams/mclaren`, `/teams/ferrari-af-corse`, etc.

### Content

**1. Header area**
- Team name (large, display font)
- Country flag
- Series entered (badge chips)

**2. Current drivers**
- List of drivers for current year, per series
- Each row: driver name (link), car number, nationality flag

**3. Season results**
- Same layout as driver profile but aggregated for the team
- All events where this team has results

### Data source
- Team info: `teams.ts`
- Entries: find all entries for this team
- Results: find all results referencing this team

### Static generation
- `generateStaticParams()` returns all team IDs from `teams.ts`

---

## Implementation order

### Step 1 — Navigation component
- Create `Navigation.tsx` (desktop nav + mobile bottom bar)
- Integrate into Header — desktop nav links between logo and controls
- Render bottom bar on mobile/tablet
- Add i18n strings
- Add content padding for bottom bar on mobile
- Remove "Back to calendar" from day view header
- All new nav links point to pages that don't exist yet — they'll 404 temporarily, that's fine

### Step 2 — Circuits pages (simplest, uses existing data)
- `/circuits` — index page with search and filters
- `/circuits/[slug]` — detail page with event history
- Requires: enhanced `circuits.ts` with IDs/slugs (Phase 1 of data normalization, or can use name-to-slug conversion as interim)
- Make circuit names clickable in day detail view

### Step 3 — Series pages
- `/series` — index page with series cards
- `/series/[id]` — detail page with calendar, circuits, entry list placeholder
- Uses existing data from series registry
- Make series chips clickable throughout the app

### Step 4 — Standings page
- `/standings` — standalone page with series/year selectors
- Create standings data files for current year (start with F1, top 5 series)
- Embed standings section in `/series/[id]` page
- Add standings update step to results update runbook

### Step 5 — Driver & Team pages (requires data normalization Phase 2+)
- `/drivers/[id]` — driver profile with results
- `/teams/[id]` — team profile with drivers and results
- Make driver/team names clickable in results and standings
- Requires: `drivers.ts`, `teams.ts`, `entries/` files to be populated

---

## Design principles

- **Same visual language everywhere.** All pages share max-width (1200px), card styles, typography, color variables. A user should feel like they're in the same app on every page.
- **Straight to the point.** No hero banners, no decorative elements, no "welcome to" text. Open a page, see the data immediately.
- **Everything is a link.** Circuit names, driver names, team names, series badges — all clickable, all leading somewhere useful.
- **Mobile-first.** Bottom nav, cards that stack single-column, touch-friendly tap targets. Desktop is the same content, wider layout.
- **Progressive disclosure.** Index pages show summary cards. Detail pages show full information. No need to load everything at once.
