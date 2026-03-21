# race-grid — Full Implementation Spec for Claude Code

## Overview

**race-grid** is a universal motorsport calendar web app. Users select which racing series they follow, pick their timezone, and see a clean calendar showing every race weekend across all selected series. Clicking a day opens a detailed view with all sessions (qualifying, race, sprints, hyperpole, stages, etc.) shown in local time.

**No accounts. No backend. No database.** All user preferences (selected series, timezone) are stored in `localStorage`. The app is a fully static Next.js export, deployable to Vercel.

---

## Tech Stack

```
Framework:   Next.js 14 (App Router, TypeScript)
Styling:     Tailwind CSS
Date utils:  date-fns
Icons:       lucide-react
Utilities:   clsx
Fonts:       Bebas Neue (headings) + DM Sans (body) via next/font/google
Deploy:      Vercel (static export)
```

### Install

```bash
npx create-next-app@latest race-grid --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd race-grid
npm install date-fns lucide-react clsx
```

---

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Main calendar view
│   └── day/[date]/page.tsx         # Day detail view (YYYY-MM-DD param)
├── components/
│   ├── Header.tsx
│   ├── CalendarGrid.tsx
│   ├── DayCell.tsx
│   ├── SeriesChip.tsx
│   ├── DayDetail.tsx
│   ├── SeriesSelector.tsx          # First-launch onboarding screen
│   └── TimezoneSelector.tsx
├── data/
│   ├── series-registry.ts          # Master list — import all series here
│   ├── f1-2026.ts
│   ├── wec-2026.ts
│   ├── indycar-2026.ts
│   ├── nascar-2026.ts
│   ├── nls-2026.ts
│   └── wrc-2026.ts
├── hooks/
│   ├── useLocalStorage.ts
│   └── useCalendarEvents.ts
├── lib/
│   ├── types.ts
│   └── timezone.ts
└── styles/
    └── globals.css
```

---

## Core Types (`src/lib/types.ts`)

```ts
export type SessionType =
  | 'race'
  | 'qualifying'
  | 'sprint'
  | 'sprint_qualifying'
  | 'hyperpole'          // WEC-specific
  | 'practice'
  | 'warmup'
  | 'stage'              // WRC rally stages
  | 'shakedown'          // WRC shakedown
  | 'endurance'          // Long-format NLS/WEC races

export interface Session {
  type: SessionType
  label: string          // e.g. "Hyperpole", "Race 1", "SS1–SS4", "6h Race"
  startUtc: string       // ISO 8601 UTC — e.g. "2026-03-20T13:00:00Z"
  durationMinutes?: number
}

export interface RaceEvent {
  id: string             // e.g. "f1-2026-bahrain"
  round?: number
  name: string           // e.g. "Bahrain Grand Prix", "6 Hours of Spa"
  circuit: string        // e.g. "Bahrain International Circuit"
  country: string        // e.g. "Bahrain"
  countryCode: string    // ISO 3166-1 alpha-2 for flag emoji, e.g. "BH"
  sessions: Session[]    // Sorted chronologically
}

export interface SeriesConfig {
  id: string
  name: string           // Full name
  shortName: string      // Chip label, e.g. "F1", "WEC", "NLS"
  color: string          // Primary hex color
  textColor: string      // Chip text contrast color, "#fff" or "#000"
  events: RaceEvent[]
}
```

---

## Series Colors (Brand-Accurate)

Each series has a dedicated, visually distinct color derived from official branding:

| Series  | Color Name          | Hex       | Text  | Notes                               |
|---------|---------------------|-----------|-------|-------------------------------------|
| F1      | F1 Scarlet Red      | `#FF1801` | `#fff` | Official F1 brand red               |
| WEC     | WEC Blue            | `#0066CC` | `#fff` | FIA WEC brand blue                  |
| IndyCar | IndyCar Navy        | `#002F6C` | `#fff` | NTT IndyCar Series deep navy        |
| NASCAR  | NASCAR Blue         | `#007AC2` | `#fff` | NASCAR official secondary blue      |
| NLS     | Nürburgring Green   | `#009B3A` | `#fff` | The Ring's iconic green branding    |
| WRC     | Rally Yellow        | `#FFD100` | `#000` | Universally associated rally yellow |

---

## Series Registry (`src/data/series-registry.ts`)

```ts
// To add a new series: create a new data file, import it, add one entry here.
import { SeriesConfig } from '@/lib/types'
import { f12026 } from './f1-2026'
import { wec2026 } from './wec-2026'
import { indycar2026 } from './indycar-2026'
import { nascar2026 } from './nascar-2026'
import { nls2026 } from './nls-2026'
import { wrc2026 } from './wrc-2026'

export const ALL_SERIES: SeriesConfig[] = [
  {
    id: 'f1',
    name: 'Formula 1',
    shortName: 'F1',
    color: '#FF1801',
    textColor: '#fff',
    events: f12026,
  },
  {
    id: 'wec',
    name: 'FIA World Endurance Championship',
    shortName: 'WEC',
    color: '#0066CC',
    textColor: '#fff',
    events: wec2026,
  },
  {
    id: 'indycar',
    name: 'IndyCar Series',
    shortName: 'INDY',
    color: '#002F6C',
    textColor: '#fff',
    events: indycar2026,
  },
  {
    id: 'nascar',
    name: 'NASCAR Cup Series',
    shortName: 'NASCAR',
    color: '#007AC2',
    textColor: '#fff',
    events: nascar2026,
  },
  {
    id: 'nls',
    name: 'Nürburgring Langstrecken-Serie',
    shortName: 'NLS',
    color: '#009B3A',
    textColor: '#fff',
    events: nls2026,
  },
  {
    id: 'wrc',
    name: 'FIA World Rally Championship',
    shortName: 'WRC',
    color: '#FFD100',
    textColor: '#000',
    events: wrc2026,
  },
]
```

---

## Data File Shape (example: `src/data/wec-2026.ts`)

All six series files follow this exact shape. Populate with accurate 2026 calendars.

```ts
import { RaceEvent } from '@/lib/types'

export const wec2026: RaceEvent[] = [
  {
    id: 'wec-2026-qatar',
    round: 1,
    name: '1812km of Qatar',
    circuit: 'Lusail International Circuit',
    country: 'Qatar',
    countryCode: 'QA',
    sessions: [
      { type: 'practice',   label: 'Practice 1',   startUtc: '2026-02-20T08:00:00Z', durationMinutes: 120 },
      { type: 'practice',   label: 'Practice 2',   startUtc: '2026-02-20T15:00:00Z', durationMinutes: 120 },
      { type: 'qualifying', label: 'Qualifying',    startUtc: '2026-02-21T08:00:00Z', durationMinutes: 60  },
      { type: 'hyperpole',  label: 'Hyperpole',     startUtc: '2026-02-21T11:00:00Z', durationMinutes: 30  },
      { type: 'race',       label: '1812km Race',   startUtc: '2026-02-22T14:00:00Z', durationMinutes: 1812 },
    ],
  },
  // ... all 2026 WEC rounds
]
```

**Session naming conventions by series:**
- **F1**: Practice 1/2/3, Qualifying, Sprint Qualifying, Sprint, Race
- **WEC**: Practice 1/2, Qualifying, Hyperpole, Race (named by distance/duration)
- **IndyCar**: Practice, Qualifying, Race (some rounds: Race 1, Race 2)
- **NASCAR**: Practice, Qualifying, Race (named by sponsor/location)
- **NLS**: Practice, Qualifying, Endurance Race (race names: "NLS 1", "4h ADAC", "24h", etc.)
- **WRC**: Shakedown, SS1–SSn (daily stage groupings), Power Stage

**Important:** Use real 2026 UTC times for all sessions. Research each series' official 2026 calendar.

---

## F1 Data Strategy

Use the **OpenF1 API** (`https://api.openf1.org/v1`) — free, no API key required, has 2026 data.

Create `src/lib/fetchF1.ts`:

```ts
// Fetch F1 2026 sessions at build time.
// Falls back to bundled JSON if API is unreachable.
export async function fetchF12026(): Promise<RaceEvent[]> {
  try {
    const res = await fetch('https://api.openf1.org/v1/sessions?year=2026', {
      next: { revalidate: 86400 } // cache 24h
    })
    const data = await res.json()
    return transformOpenF1Data(data)
  } catch {
    const fallback = await import('@/data/f1-2026')
    return fallback.f12026
  }
}
```

For simplicity, the bundled `f1-2026.ts` JSON is the primary source; the API is an enhancement. Keep it simple — no ISR, no client-side fetching for race data.

---

## localStorage Keys & Hook (`src/hooks/useLocalStorage.ts`)

```ts
// Generic typed hook
export function useLocalStorage<T>(key: string, initial: T): [T, (val: T) => void]

// Keys used throughout the app:
// 'race-grid:series'    → string[]   selected series IDs, e.g. ["f1", "wec"]
// 'race-grid:timezone'  → string     IANA tz, e.g. "Europe/Kyiv"
// 'race-grid:month'     → string     current month, e.g. "2026-03"
```

---

## Calendar Logic (`src/hooks/useCalendarEvents.ts`)

```ts
// Returns a Map<string, ActiveSeries[]> keyed by "YYYY-MM-DD" local date.
// A day gets an entry for each series that has any session starting on that local date.
// Uses Intl.DateTimeFormat to convert UTC session times to local dates.
export function useCalendarEvents(
  selectedSeriesIds: string[],
  timezone: string,
  month: string // "YYYY-MM"
): Map<string, SeriesConfig[]>
```

Logic:
1. For each selected series, iterate all events
2. For each event, iterate all sessions
3. Convert `startUtc` to local date using the selected timezone
4. If that local date falls in the current month view, add the series to that date's set
5. Deduplicate — a series appears max once per day cell even if it has multiple sessions

---

## UI Behavior & Pages

### First Launch (`app/page.tsx` with no stored series)

- Full-screen onboarding: "Which series do you follow?"
- 6 cards in a responsive grid (2 cols mobile, 3 cols tablet/desktop)
- Each card: colored left border, series name, short description, checkbox
- "Let's race →" CTA button, disabled until at least 1 series selected
- On confirm: save to localStorage, render calendar

### Main Calendar (`app/page.tsx` after series selected)

**Header:**
- App logo + "race-grid" wordmark (left)
- Series filter toggles — pill buttons per series, colored when active (right)
- Timezone selector dropdown
- Settings/gear icon to return to series selection

**Calendar grid:**
- Standard month grid, Mon–Sun columns
- Prev / Next month chevrons + "Today" button
- Month + Year label (e.g. "March 2026")
- Each day cell:
  - Day number (top-left)
  - Today: subtle ring highlight
  - Stacked `SeriesChip` components for each active series that day
  - Max 3 chips shown; if more → show "+N" overflow chip in neutral color
  - Clickable — navigates to `/day/YYYY-MM-DD`

### Day Detail (`app/day/[date]/page.tsx`)

- Back breadcrumb "← March 2026"
- Date header: "Sunday, March 22, 2026"
- If no events: "No races scheduled." empty state
- One card per active series that has sessions this day:
  - Card header: colored left border (series color), series shortName chip, event name, circuit, country flag emoji + country name
  - Session list inside card, sorted by start time:
    - Session label (e.g. "Hyperpole", "Race", "SS1–SS4")
    - Session type badge (small colored icon: 🏁 race, ⏱ qualifying, ⚡ sprint, 🎯 hyperpole, 🔧 practice, 🗺 stage)
    - Local time in user's timezone (e.g. "14:00" or "2:00 PM")
    - Duration if known (e.g. "6h 00m", "30 min")
  - Cards sorted by earliest session time

### Timezone Selector (`components/TimezoneSelector.tsx`)

- Searchable dropdown (input + filtered list)
- Grouped by region: Americas, Europe, Asia, Pacific, Africa
- Default: auto-detected via `Intl.DateTimeFormat().resolvedOptions().timeZone`
- Saved to `localStorage`

---

## Design System

### Theme (dark)

```css
/* globals.css */
:root {
  --bg-base:        #0A0A0F;   /* near-black background */
  --bg-surface:     #12121A;   /* card / panel surface */
  --bg-elevated:    #1C1C28;   /* elevated elements */
  --border:         #2A2A3A;   /* subtle borders */
  --text-primary:   #F0F0F5;
  --text-secondary: #8888A0;
  --text-muted:     #55556A;
  --today-ring:     #FFFFFF33;

  /* Series colors (also set via JS for dynamic use) */
  --color-f1:      #FF1801;
  --color-wec:     #0066CC;
  --color-indycar: #002F6C;
  --color-nascar:  #007AC2;
  --color-nls:     #009B3A;
  --color-wrc:     #FFD100;
}
```

### Typography

```ts
// layout.tsx
import { Bebas_Neue, DM_Sans } from 'next/font/google'

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-display' })
const dmSans    = DM_Sans({ subsets: ['latin'], variable: '--font-body' })
```

- `--font-display` (Bebas Neue): app logo, month/year heading, event names in day detail
- `--font-body` (DM Sans): all body text, chips, labels, times

### SeriesChip component

```tsx
// Small pill: colored background, series shortName, white or black text
// Used in: day cells, header filter toggles, day detail card headers
<span
  style={{ backgroundColor: series.color, color: series.textColor }}
  className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold tracking-wide"
>
  {series.shortName}
</span>
```

### Responsive Breakpoints

- **Mobile (< 640px):** Single column header (logo top, controls below), compact day cells (28px min-height), chips truncate to 2 visible + overflow, day detail is full-page
- **Tablet (640–1024px):** Full header in one row, 3-chip max in cells
- **Desktop (> 1024px):** Comfortable spacing, full series toggle row, optional sidebar for day detail instead of routing

---

## Build Order for Claude Code

Build in this exact sequence to avoid import errors:

1. `src/lib/types.ts` — all interfaces
2. `src/lib/timezone.ts` — IANA timezone list + `formatInTimezone(utcString, tz)` util
3. `src/data/f1-2026.ts` — full 2026 F1 calendar (use real dates)
4. `src/data/wec-2026.ts` — full 2026 WEC calendar
5. `src/data/indycar-2026.ts` — full 2026 IndyCar calendar
6. `src/data/nascar-2026.ts` — full 2026 NASCAR Cup calendar
7. `src/data/nls-2026.ts` — full 2026 NLS calendar
8. `src/data/wrc-2026.ts` — full 2026 WRC calendar
9. `src/data/series-registry.ts` — imports all above
10. `src/hooks/useLocalStorage.ts`
11. `src/hooks/useCalendarEvents.ts`
12. `src/styles/globals.css` — CSS variables, base resets
13. `src/app/layout.tsx` — fonts, metadata, base layout
14. `src/components/SeriesChip.tsx`
15. `src/components/SeriesSelector.tsx` — first-launch screen
16. `src/components/TimezoneSelector.tsx`
17. `src/components/Header.tsx`
18. `src/components/DayCell.tsx`
19. `src/components/CalendarGrid.tsx`
20. `src/app/page.tsx` — main calendar page (conditional: onboarding vs calendar)
21. `src/components/DayDetail.tsx`
22. `src/app/day/[date]/page.tsx`
23. Final pass: responsive polish, empty states, loading states, page transitions

---

## Key Constraints & Rules

- **No accounts, no backend, no Supabase** — everything is static + localStorage
- **English only** — no i18n needed
- **All times stored as UTC** in data files, converted to user's local timezone at render time
- **2026 data only** — all calendars must reflect the actual 2026 season schedules
- **No AI-generated aesthetic** — dark, minimal, purposeful. Bebas Neue + DM Sans. Series colors as the only accent palette
- **Adding a new series** = create one data file + add one entry to `series-registry.ts`. Nothing else should need changing
- **Conventional commits** throughout: `feat:`, `fix:`, `chore:`, etc.
- **No AI authorship comments** anywhere in code

---

## Adding New Series (Future)

The architecture makes this trivial:

```ts
// 1. Create src/data/formula-e-2026.ts following the RaceEvent[] shape
// 2. Add to series-registry.ts:
{
  id: 'formula-e',
  name: 'ABB FIA Formula E World Championship',
  shortName: 'FE',
  color: '#00AAFF',
  textColor: '#fff',
  events: formulaE2026,
}
// Done. The calendar, chips, filters, and day detail all work automatically.
```
