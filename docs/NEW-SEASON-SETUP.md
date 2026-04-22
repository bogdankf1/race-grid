# New Season Setup (Post-2026)

This runbook creates all calendar data files for the **next season** (e.g., 2027) once the current season concludes. It should be run in **late November / December** after the final races, or in **January** once calendars are officially published.

---

## When to run

- The current season has concluded (all series have finished their final rounds)
- The user requests preparation for the next season
- Official calendars for the new season have been published

---

## Important: calendar availability

Not all series publish their next-season calendar at the same time. Typical timeline:

| Series | Calendar usually available | Notes |
|--------|---------------------------|-------|
| F1 | October (year before) | Published by FIA, usually final by November |
| IndyCar | September–October | |
| NASCAR | September–October | Full schedule with broadcast partners |
| WEC | July–August (year before) | FIA confirms early |
| IMSA | March (year before) | Sometimes provisional until late in the year |
| WRC | June–August (year before) | FIA confirms early |
| DTM | August–September | |
| GTWC | August–September | SRO announces |
| NLS | September–October | |
| Super GT | August | GTA announcement |
| ELMS | August–September | |
| IGTC | June–July | SRO announces alongside GTWC |
| Super Formula | Late in current year | |
| Supercars | October | |
| GTWC America | August–September | SRO announces |
| GTWC Asia | August–September | SRO announces |
| British GT | June–July | SRO announces |
| GTWC Australia | August–September | SRO announces |

**If a calendar is not yet available**, skip that series, add a `// TODO: <year> calendar not yet published` comment to the existing file, and inform the user which series are pending.

---

## Step-by-step procedure

### 1. Determine the target season year

The user will tell you, or it is simply `currentYear + 1`. Example: if it's December 2026, the target is **2027**.

### 2. For each series, create the new data file

For each series in `src/data/series-registry.ts`:

#### a) Search for the official calendar
```
WebSearch: "<Series Name> <year> calendar schedule"
```
Use the official sources listed in `docs/VERIFY-SEASON-DATA.md`. Also try:
- Wikipedia: `<year> <Series Name>` (often has confirmed calendars early)
- racingcalendar.net: `https://racingcalendar.net/championship/<id>/<year>`
- motorsport.com: `https://www.motorsport.com/<id>/schedule/<year>/`

#### b) If the calendar IS available

Create `src/data/<series>-<year>.ts` following the exact same structure as the current year's file:

```typescript
import { RaceEvent } from '@/lib/types'

// <Series Name> <year> season calendar
// Source: <official URL> — verified <month> <year>
export const <series><year>: RaceEvent[] = [
  {
    id: '<series>-<year>-<location>',
    round: 1,
    name: '<Event Name>',
    circuit: '<Circuit Name>',  // Must match a key in circuits.ts
    country: '<Country>',
    countryCode: '<CC>',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '<ISO datetime>', durationMinutes: <N> },
      { type: 'qualifying', label: 'Qualifying', startUtc: '<ISO datetime>', durationMinutes: <N> },
      { type: 'race', label: 'Race', startUtc: '<ISO datetime>', durationMinutes: <N> },
    ],
  },
  // ... all rounds
]
```

**Rules:**
- All times must be in **UTC** (`startUtc` field)
- `circuit` must match an existing key in `src/data/circuits.ts` — add new circuits if needed
- Session types must be one of: `race`, `qualifying`, `sprint`, `sprint_qualifying`, `hyperpole`, `practice`, `warmup`, `stage`, `shakedown`, `endurance`
- Include `durationMinutes` for all sessions
- Use verified dates only — never fabricate dates

#### c) If the calendar is NOT yet available

Do **not** create a data file with guessed dates. Instead:
- Keep the current year's file in place
- Add a comment at the top: `// TODO: <year> calendar not yet published — update when available`
- Report to the user that this series is pending

### 3. Update the series registry

Edit `src/data/series-registry.ts`:
- Update each import to point to the new data file: `import { f1<year> } from './<series>-<year>'`
- Update the `events` property in each series config

### 4. Update circuits if needed

If new circuits appear on any calendar:
- Add them to `src/data/circuits.ts` with `length`, `turns`, and `type`
- Use official sources for circuit data (Wikipedia is usually accurate for track specs)

### 5. Update broadcast data if needed

Check `src/data/broadcasts.ts`:
- If broadcast deals changed for the new season, update the providers
- Verify URLs still work

### 6. Update static generation range

Check `src/app/day/[date]/page.tsx` — the `generateStaticParams` function generates pages for a date range. Update the year range to include the new season:
```typescript
// Change the start/end dates to cover the new season
```

### 7. Run verification

After creating all files, run the verification procedure from `docs/VERIFY-SEASON-DATA.md` to double-check every entry.

### 8. Build and test

```
npx next build
```

Then start the dev server and spot-check:
- Calendar grid shows events in the new season months
- Day view shows correct sessions with proper times
- Series filter shows all series
- "Add to Calendar" generates correct .ics files

### 9. Clean up old season

After the new season is confirmed and working:
- Keep old season data files for archival (they're small)
- Or remove them if the user prefers — the app only shows what's imported in the registry

---

## Checklist template

Copy and fill this for each new season setup:

```
## <Year> Season Setup Progress

- [ ] F1 — calendar available? ___ | file created? ___
- [ ] IndyCar — calendar available? ___ | file created? ___
- [ ] NASCAR — calendar available? ___ | file created? ___
- [ ] WEC — calendar available? ___ | file created? ___
- [ ] IMSA — calendar available? ___ | file created? ___
- [ ] WRC — calendar available? ___ | file created? ___
- [ ] DTM — calendar available? ___ | file created? ___
- [ ] GTWC — calendar available? ___ | file created? ___
- [ ] NLS — calendar available? ___ | file created? ___
- [ ] Super GT — calendar available? ___ | file created? ___
- [ ] ELMS — calendar available? ___ | file created? ___
- [ ] IGTC — calendar available? ___ | file created? ___
- [ ] Super Formula — calendar available? ___ | file created? ___
- [ ] Supercars — calendar available? ___ | file created? ___
- [ ] GTWC America — calendar available? ___ | file created? ___
- [ ] GTWC Asia — calendar available? ___ | file created? ___
- [ ] British GT — calendar available? ___ | file created? ___
- [ ] GTWC Australia — calendar available? ___ | file created? ___
- [ ] Series registry updated? ___
- [ ] New circuits added? ___
- [ ] Broadcasts updated? ___
- [ ] Static generation range updated? ___
- [ ] Build passes? ___
- [ ] Manual spot-check done? ___
```
