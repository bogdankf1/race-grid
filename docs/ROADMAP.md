# Race Grid — Roadmap

Ideas and planned work for race-grid.com, ordered by priority within each section. Each item includes enough context for Claude Code to implement it autonomously.

---

## Bugs & Polish

### ~~1. Localize "more" text in day cells~~ ✅
~~The `CalendarGrid` component shows "+N more" when a day has more than 3 events. The word "more" is hardcoded in English. Add it to `src/lib/i18n.ts` for both `en` and `uk` locales, then use the translation in the component.~~

### ~~2. Fix notification permission stale state~~ ✅
~~In `InstallOrNotify`, if a user starts the notification enable flow but denies the browser permission prompt, the component's internal state can become out of sync with the actual `Notification.permission` value. The fix: re-check `Notification.permission` on component mount and whenever the page regains visibility (`visibilitychange` event), and reconcile internal state accordingly.~~

### ~~3. Add WRC rally locations to circuits.ts~~ ✅
~~14 WRC rally locations are missing from `src/data/circuits.ts`. The circuit names used in `wrc-2026.ts` (e.g., "Monaco / French Alps", "Umea", "Naivasha", "Zagreb", etc.) have no matching entry in the circuits database, so the day detail page shows no circuit info for WRC events. Add entries for all 14 WRC locations with approximate stage length info, number of stages (as "turns"), and type `'mixed'` (rally stages are neither permanent circuits nor street circuits). Check every `circuit` value in `wrc-2026.ts` and ensure a matching key exists in `CIRCUITS`.~~

### ~~4. Improve countdown timer granularity~~ ✅
~~The countdown timer in the day detail page updates every 30 seconds. When a session is < 5 minutes away, switch to updating every second to show a live countdown. Use a ref-based interval that adjusts its frequency based on proximity to the session start.~~

### ~~5. Refactor InstallOrNotify component~~ ✅
~~`src/components/InstallOrNotify.tsx` is ~320 lines. Extract platform-specific install instruction panels (iOS Safari, iOS Chrome, Android, Desktop) into a separate `InstallInstructions` component or a map of platform configs. Keep the notification logic in the parent. This is not urgent — do it when touching this component for other reasons.~~

---

## Features

### ~~6. Offline caching in the service worker~~ ✅
~~**What:** `public/sw.js` currently only handles notification scheduling. Add a cache-first strategy so the app works fully offline after first visit.~~
~~**How:** Pre-caches app shell on install, cache-first for static assets (JS/CSS/images), network-first with cache fallback for navigation requests. Versioned cache (`race-grid-v1`) with old cache cleanup on activate.~~

### ~~7. iCal subscription URL~~ ✅
~~**What:** Generate `.ics` feed files at build time that users can subscribe to via `webcal://` URL.~~
~~**How:** `scripts/generate-ics.ts` runs as `prebuild`, generates `public/calendar/<series-id>.ics` + `public/calendar/all.ics`. CalendarExport dropdown includes "Subscribe to Calendar" link using `webcal://race-grid.com/calendar/<series>.ics`. Feeds include `REFRESH-INTERVAL:P1D` for auto-updating.~~

### 8. Expand broadcast data
**What:** Add broadcast/streaming info for UK, Germany, Australia, Japan, and Brazil to `src/data/broadcasts.ts`. Currently only US and UA are supported.
**How:**
- Add country codes `'GB'`, `'DE'`, `'AU'`, `'JP'`, `'BR'` to the `CountryCode` type in broadcasts.ts (or wherever it's defined).
- Research and add broadcast entries for each series in each new country. Key broadcasters:
  - **UK:** Sky Sports F1, TNT Sports, ITV, Channel 4, Motorsport.tv
  - **Germany:** Sky Deutschland, DAZN, ProSieben (DTM), Motorsport.tv
  - **Australia:** Fox Sports, Stan Sport, Kayo Sports, 10 Play (Supercars)
  - **Japan:** DAZN Japan, Fuji TV, J Sports
  - **Brazil:** Band, ESPN Brasil, BandSports
- Update the country detection logic in `src/data/broadcasts.ts` to map timezones from these regions to the correct country code.
- Use WebSearch to verify current 2026 broadcast deals for accuracy. Broadcast rights change yearly.

### ~~9. Bulk "Add to Google Calendar"~~ ✅
~~**What:** Let users add an entire race weekend or series season to their calendar in one click.~~
~~**How:** CalendarExport dropdown now has "All sessions (.ics)" for the current event weekend and "Full season (.ics)" for the entire series. Uses `downloadSeriesIcs()` in `src/lib/ical.ts`.~~

### 10. Spoiler-free mode
**What:** A toggle that hides race results by default. Users who record races and watch later don't want to see "Winner: Antonelli" when they open the app to check tomorrow's schedule.
**How:**
- Add a toggle in the header or settings (eye icon). Store preference in localStorage key `race-grid:spoiler-free`.
- When enabled: hide the `RaceResult` component entirely on the day detail page. Show a blurred/hidden placeholder with a "Tap to reveal" button.
- When disabled (default): show results normally as today.
- The toggle should be global — not per-event. Users who want spoiler-free mode want it everywhere.
- Add i18n strings for "Spoiler-free mode", "Tap to reveal results", etc.

### 11. Season progress tracker
**What:** Show "Round 3 of 22" with a visual progress bar for each series, so users understand where we are in each championship season.
**How:**
- In the series filter dropdown or as a small indicator on each series chip in the calendar, show `Rd. X/Y` where X = last completed round, Y = total rounds.
- Calculate from the calendar data: count events with `round` property, find the latest event whose last session `startUtc + durationMinutes` is in the past.
- Could also show this on the day detail page next to the series badge.
- Simple inline progress bar using CSS (colored bar matching series color, proportional width).

---

## New Pages

### 12. Standings page (`/standings`)
**What:** Championship standings for drivers and constructors/manufacturers, with year and series selectors.
**How:**
- Create `src/app/standings/page.tsx`.
- Data structure: create `src/data/standings/` directory with files like `f1-2026.ts`, `nascar-2026.ts`, etc. Each file exports driver standings and constructor/manufacturer standings as arrays:
  ```typescript
  export const f1Standings2026 = {
    drivers: [
      { position: 1, driver: 'Antonelli', team: 'Mercedes', points: 57, wins: 2 },
      { position: 2, driver: 'Russell', team: 'Mercedes', points: 45, wins: 1 },
      // ...
    ],
    constructors: [
      { position: 1, team: 'Mercedes', points: 102, wins: 3 },
      // ...
    ],
  }
  ```
- UI: Two tabs (Drivers / Constructors). Series selector dropdown at top (reuse series chips). Year selector (once multi-year data exists).
- Update standings alongside results when running `/update-results`. Add a step to the `docs/UPDATE-RESULTS.md` runbook.
- For series with class-based championships (WEC, IMSA, GTWC), show standings per class.
- Default view: current year, F1 (most popular series). Persist last-viewed series in localStorage.
- Link to standings page from the header navigation.

### 13. Circuits page (`/circuits`)
**What:** A browsable directory of all circuits used across all series, with metadata and historical context.
**How:**
- Create `src/app/circuits/page.tsx`.
- Show all circuits from `src/data/circuits.ts` in a searchable, filterable grid/list.
- Each circuit card shows: name, country (with flag), length, turns, type (permanent/street/oval), and which series race there.
- Clicking a circuit opens a detail view (could be a modal or a `/circuits/[slug]` page) showing:
  - All events at this circuit across all series and years
  - Past results at this venue (once historical data exists)
  - Circuit type, length, turns
- Cross-reference: find which series use each circuit by scanning all calendar data files.
- Filter by: country, circuit type, series.
- No track layout images needed initially (would require licensing). Text-based info is sufficient.

---

## Historical Data (Long-term)

### 14. Multi-year support & historical backfill
**What:** Support multiple seasons. Start with 2025 backfill, then 2024. Users can browse past seasons and see who won each race.
**How:**
- The file structure already supports this: `f1-2026.ts`, `f1-2025.ts`, etc.
- Add a year selector to the calendar (header or near month navigation). Default to current year.
- For the backfill:
  1. **2025 season first.** Create `src/data/<series>-2025.ts` files for all 14 series with the full calendar and session times. Create corresponding `src/data/results/<series>-2025.ts` files with results for every completed session.
  2. **Then 2024.** Same process.
  3. Use WebSearch + official sources to gather historical calendars and results. Follow the same data structure as 2026 files.
- Update `src/data/series-registry.ts` to support multiple years. Options:
  - Add a `years` map: `events: { 2026: f12026, 2025: f12025 }` instead of a flat array.
  - Or keep the current structure and add a year-selection layer that swaps which data file is active.
- The standings page benefits most from this — users can select 2025 and see that year's champions.
- Historical data also enables the circuits page to show "past winners at this venue."
- **Scope warning:** This is a large effort. Each year × 14 series = significant data entry. Prioritize the most popular series first (F1, NASCAR, IndyCar, WEC, WRC) and backfill others later.

---

## Not Planned

These ideas were considered and intentionally deferred:

- **User accounts / authentication** — No server-side state needed yet. localStorage handles all preferences. Revisit only if cross-device sync or user-generated content becomes necessary.
- **Paid features / monetization** — Focus on growing the user base on race-grid.com first. The app should remain free and ad-free. A tip jar / "buy me a coffee" link is fine.
- **Native mobile apps** — The PWA works well across platforms. One codebase > two native apps.
- **Live timing / telemetry** — Data licensing makes this impossible for an independent app.
- **News feed** — Would compete with Motorsport.com and dilute the app's focus.
- **Social features / comments** — Race Grid is a utility, not a social network.
- **Fantasy / predictions** — Crowded market, high backend complexity.
- **"My Schedule" / favorites** — The series filter + upcoming races panel already serve this purpose without added complexity.
- **"At a glance" hero card** — The upcoming races collapsible section and day detail view already cover this. Adding another summary view would duplicate existing UI.
