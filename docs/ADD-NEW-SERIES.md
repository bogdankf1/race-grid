# Add New Racing Series

This runbook adds a brand-new racing series to the app — calendar, logos, drivers, teams, entries, results, standings, broadcasts, filters, and all pages.

---

## When to run

- A new championship is to be tracked (e.g., Formula E, MotoGP, TCR)
- The user requests adding a series that isn't among the current ones

---

## Pre-flight

Before starting, gather:
- **Official series website** (for calendar, results, standings)
- **Series branding** — official name, abbreviation, brand color
- **Logo** — SVG preferred (can be PNG as fallback)
- **Which filter group** it belongs to: Open Wheel, Endurance, GT / Touring, Stock Car, Rally (or a new group)

**Note:** This runbook adds the series for the **current year only** (2026). To backfill older years (e.g., 2025), use the `/support-year` skill afterward. The year switcher in the app lets users browse any supported year — a missing year will simply show the series with zero events, which is fine until backfilled.

---

## Step-by-step procedure

### 1. Choose the series ID

Pick a short, kebab-case identifier. This ID is used everywhere — files, URLs, data keys.

Examples: `f1`, `indycar`, `nascar`, `wec`, `imsa`, `wrc`, `dtm`, `gtwc`, `nls`, `supergt`, `elms`, `igtc`, `superformula`, `supercars`

Rules:
- Lowercase, kebab-case (no spaces, underscores, or capitals)
- Short and recognizable
- Used in URLs: `/series/<id>`, so keep it URL-friendly

---

### 2. Add series logo

Place the logo file at:
```
public/logos/<series-id>.svg    (preferred)
public/logos/<series-id>.png    (fallback)
```

Then register it in `src/components/SeriesLogo.tsx`:
```typescript
const LOGO_MAP: Record<string, string> = {
  // ... existing entries
  '<series-id>': '/logos/<series-id>.svg',
}
```

Logo guidelines:
- SVG preferred — styled vectors, not plain text
- Reasonable dimensions (renders at ~24px height)
- Consider `logoBgWhite: true` in series meta if the logo needs a white background for contrast on dark themes

---

### 3. Add circuits

Check `src/data/circuits.ts` for any circuits used by the new series that don't already exist. Add new ones:

```typescript
'circuit-slug': {
  id: 'circuit-slug',
  name: 'Full Circuit Name',
  country: 'Country',
  countryCode: 'CC',    // ISO 2-letter
  length: '5.412 km',
  turns: 16,
  type: 'permanent',    // 'permanent' | 'street' | 'oval' | 'mixed'
  lapRecord?: 'Driver Name - 1:23.456',
}
```

Many circuits are shared across series — only add new ones. Circuit IDs must match `circuitId` in calendar files exactly (case-sensitive).

---

### 4. Add drivers and teams

Add all drivers to `src/data/drivers.ts` (alphabetical by ID):
```typescript
'driver-slug': { id: 'driver-slug', name: 'Full Name', shortName: 'LastName', nationality: 'CC' },
```

Add all teams to `src/data/teams.ts` (alphabetical by ID):
```typescript
'team-slug': { id: 'team-slug', name: 'Official Team Name', country: 'CC' },
```

Rules:
- IDs are lowercase kebab-case
- `nationality` / `country` use ISO 2-letter codes (empty string `''` if unknown)
- Insert in alphabetical order within the existing list
- Reuse existing entries for drivers/teams that compete in multiple series

---

### 5. Create calendar data file

Create `src/data/<series-id>-2026.ts`:

```typescript
import { RaceEvent } from '@/lib/types'

// <Series Name> <year> calendar
// Source: <official URL> — verified <month> <year>
export const <seriesId><year>: RaceEvent[] = [
  {
    id: '<series>-<year>-<location-slug>',
    round: 1,
    name: 'Event Name',
    circuitId: 'circuit-slug',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-03-01T10:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-01T14:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-03-02T15:00:00Z', durationMinutes: 120 },
    ],
  },
  // ... all rounds
]
```

Critical rules:
- **All times in UTC** — convert from local time carefully
- `circuitId` must match a key in `circuits.ts`
- Event IDs must be globally unique: `<series>-<year>-<slug>`
- `round` numbers are sequential (1-indexed)
- Session types: `race`, `qualifying`, `sprint`, `sprint_qualifying`, `hyperpole`, `practice`, `warmup`, `stage`, `shakedown`, `endurance`
- If your series needs a new session type, add it to the `SessionType` union in `src/lib/types.ts`
- Never fabricate or guess dates — use official sources only

---

### 6. Register in series-registry.ts

Edit `src/data/series-registry.ts`:

**a) Add import at the top:**
```typescript
import { <seriesId><year> } from './<series-id>-<year>'
```

**b) Add to `SERIES_META` array:**
```typescript
{ id: '<series-id>', name: 'Full Series Name', shortName: 'ABBR', color: '#HEX', textColor: '#fff' },
```
- `shortName`: 2-6 character abbreviation for UI chips
- `color`: primary brand hex color
- `textColor`: `'#fff'` for dark backgrounds, `'#000'` for light
- `logoBgWhite?: true` if logo needs white background

**c) Add to `SERIES_EVENTS` object:**
```typescript
'<series-id>': { 2026: <seriesId>2026 },
```

---

### 7. Add to filter dropdown

Edit `src/components/SeriesFilterDropdown.tsx` — add the series ID to the appropriate group in the `GROUPS` array:

```typescript
const GROUPS: SeriesGroup[] = [
  { labelKey: 'group.openwheel', ids: ['f1', 'indycar', 'superformula'] },
  { labelKey: 'group.endurance', ids: ['wec', 'elms', 'imsa', 'igtc'] },
  { labelKey: 'group.gt', ids: ['dtm', 'gtwc', 'supergt', 'nls', 'supercars'] },
  { labelKey: 'group.stock', ids: ['nascar'] },
  { labelKey: 'group.rally', ids: ['wrc'] },
]
```

If the series doesn't fit an existing group, create a new one:
- Add the group to `GROUPS`
- Add i18n strings to `src/lib/i18n.ts` for both `en` and `uk` locales:
  ```typescript
  'group.newcategory': 'Category Name',  // en
  'group.newcategory': 'Назва категорії', // uk
  ```
- Update `CLAUDE.md` series groups section

---

### 8. Add broadcast data

Edit `src/data/broadcasts.ts` — add an entry for the series:

```typescript
'<series-id>': {
  US: [{ name: 'Channel/Service', url: 'https://...', note: 'Details' }],
  UA: [{ name: 'Канал', url: 'https://...' }],
  GB: [{ name: 'Channel', url: 'https://...' }],
  DE: [{ name: 'Sender', url: 'https://...' }],
  PL: [{ name: 'Kanał', url: 'https://...' }],
  AU: [{ name: 'Channel', url: 'https://...' }],
  BR: [{ name: 'Canal', url: 'https://...' }],
  JP: [{ name: 'チャンネル', url: 'https://...' }],
  CO: [{ name: 'Canal', url: 'https://...' }],
},
```

Use `WebSearch` to find official broadcast partners for each country. If no broadcaster exists for a country, use an empty array `[]`.

---

### 9. Create entries file

Create `src/data/entries/<series-id>-2026.ts`:

```typescript
import type { EntryItem } from './types'

// <Series Name> <year> entries — verified from <source>
export const <seriesId>Entries<year>: EntryItem[] = [
  { driverId: 'driver-slug', teamId: 'team-slug' },
  // ... all drivers
]
```

Register in `src/data/entries/index.ts`:
- Add import: `import { <seriesId>Entries<year> } from './<series-id>-<year>'`
- Add to `ALL_ENTRIES`: `'<series-id>-<year>': <seriesId>Entries<year>,`

---

### 10. Create results file

Create `src/data/results/<series-id>-2026.ts`:

```typescript
import type { EventResults } from './types'

// <Series Name> <year> results — verified from <source>
export const <seriesId>Results<year>: Record<string, EventResults> = {
  // Add results as races complete — start empty if season hasn't begun
}
```

Register in `src/data/results/index.ts`:
- Add import: `import { <seriesId>Results<year> } from './<series-id>-<year>'`
- Spread into `ALL_RESULTS`: `...<seriesId>Results<year>,`

---

### 11. Create standings file

Create `src/data/standings/<series-id>-2026.ts`:

```typescript
import type { SeasonStandings } from './types'

// <Series Name> <year> standings — verified from <source>
export const <seriesId>Standings<year>: SeasonStandings = {
  drivers: [
    // Add as season progresses
  ],
  constructors: [
    // Include if series has constructor/manufacturer championship, otherwise []
  ],
}
```

Register in `src/data/standings/index.ts`:
- Add import: `import { <seriesId>Standings<year> } from './<series-id>-<year>'`
- Add to `ALL_STANDINGS`: `'<series-id>-<year>': <seriesId>Standings<year>,`

---

### 12. Update documentation

**`CLAUDE.md`:**
- Update the total series count
- Add the series to the appropriate filter group list
- Add the data source to the list of official sources (if maintaining a verification table)

**`docs/UPDATE-RESULTS.md`:**
- Add the series to the official sources table with its primary results URL
- Note any special result formats (multi-class, co-drivers, stage-based, etc.)

**`docs/UPDATE-STANDINGS.md`:**
- Add the series to the official sources table
- Note whether it has constructor/manufacturer standings or drivers-only

**`docs/VERIFY-SEASON-DATA.md`:**
- Add the series to the verification checklist

---

### 13. Build and verify

```
npx next build
```

Then start the dev server and verify:
- [ ] Series appears in the filter dropdown under the correct group
- [ ] Calendar grid shows events on the correct dates
- [ ] Day detail view shows correct sessions with proper UTC times
- [ ] Series page (`/series/<id>`) loads with logo, events list, and standings
- [ ] Driver pages show entries for the new series
- [ ] Team pages show entries for the new series
- [ ] Standings page shows the new series (if standings data was added)
- [ ] "Where to Watch" section displays broadcast data
- [ ] "Add to Calendar" generates correct .ics files

---

## Auto-generated pages (no work needed)

These pages are dynamically generated from the data — no modifications required:

- `/series/<id>` — series detail page (auto-generated from `SERIES_META`)
- `/drivers/<id>` — driver pages (auto-generated from `drivers.ts`)
- `/teams/<id>` — team pages (auto-generated from `teams.ts`)
- `/day/<date>` — calendar day pages (auto-generated from event dates)
- `/sitemap.xml` — search engine sitemap (auto-includes new series)

---

## Checklist

```
## Add New Series: <Series Name> (<series-id>)

Phase 1: Core data
- [ ] Series ID chosen
- [ ] Logo added to public/logos/
- [ ] Logo registered in SeriesLogo.tsx
- [ ] New circuits added to circuits.ts (if any)
- [ ] Drivers added to drivers.ts
- [ ] Teams added to teams.ts
- [ ] Calendar file created: <series-id>-2026.ts
- [ ] Registered in series-registry.ts (SERIES_META + SERIES_EVENTS + imports)
- [ ] Added to SeriesFilterDropdown.tsx GROUPS

Phase 2: Supplementary data
- [ ] Broadcast data added to broadcasts.ts
- [ ] Entries file created + registered in entries/index.ts
- [ ] Results file created + registered in results/index.ts
- [ ] Standings file created + registered in standings/index.ts

Phase 3 (later): Backfill older years with /support-year

Phase 3: Documentation
- [ ] CLAUDE.md updated (series count, filter groups, sources)
- [ ] docs/UPDATE-RESULTS.md updated (sources table)
- [ ] docs/UPDATE-STANDINGS.md updated (sources table)

Phase 4: Verification
- [ ] npx next build passes
- [ ] Dev server: filter dropdown works
- [ ] Dev server: calendar shows events
- [ ] Dev server: series page loads
- [ ] Dev server: driver/team pages show entries
```
