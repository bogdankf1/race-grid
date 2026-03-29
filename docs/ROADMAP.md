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

### ~~8. Expand broadcast data~~ ✅
~~**What:** Add broadcast/streaming info for 7 new countries to "Where to Watch".~~
~~**How:** Added UK, Germany, Poland, Australia, Brazil, Japan, Colombia (GB, DE, PL, AU, BR, JP, CO) to `broadcasts.ts` for all 14 series. Fixed timezone-to-country detection to distinguish US from Latin American timezones. Verified against official 2026 broadcast deals.~~

### ~~9. Bulk "Add to Google Calendar"~~ ✅
~~**What:** Let users add an entire race weekend or series season to their calendar in one click.~~
~~**How:** CalendarExport dropdown now has "All sessions (.ics)" for the current event weekend and "Full season (.ics)" for the entire series. Uses `downloadSeriesIcs()` in `src/lib/ical.ts`.~~

### ~~10. Spoiler-free mode~~ ✅
~~**What:** A toggle that hides race results by default. Users who record races and watch later don't want to see spoilers.~~
~~**How:** Eye icon toggle in header, stores preference in `race-grid:spoiler-free` localStorage. When enabled, results are hidden behind a "Tap to reveal results" button per event. Toggle highlights when active (blue border + icon).~~

### ~~11. Season progress tracker~~ ✅
~~**What:** Show "Round 3 of 22" with a visual progress bar for each series, so users understand where we are in each championship season.~~
~~**How:** Added progress bar per series in the filter dropdown (colored bar + X/Y counter) and "Rd. X of Y" label on the day detail page next to the series chip.~~

---

## New Pages

### ~~12. Unified settings modal~~ ✅
~~**What:** Consolidate language toggle, theme toggle, timezone picker, and spoiler-free toggle into a single settings gear icon that opens a modal.~~
~~**How:** Gear icon in header opens a bottom sheet (mobile) / centered modal (desktop) with theme, language, spoiler-free toggles and embedded timezone picker. Swipe down to dismiss on mobile. Header reduced from 6 controls to 3 (filter, install, settings).~~

### 14. Series pages (`/series`, `/series/[id]`)
**What:** A hub page for each racing series — the central place to explore everything about a championship. Browse all 14 series, then drill into any one to see its full calendar, circuits, drivers, teams, and standings for a given year.
**How:**
- **Phase 1 — Series index & hub (use existing data):**
  - Create `src/app/series/page.tsx` — grid of all 14 series cards with logo, name, season progress bar, next upcoming event, and total rounds.
  - Create `src/app/series/[id]/page.tsx` — series detail hub with tabs/sections:
    - **Calendar:** Full season schedule with round numbers, dates, circuits, and results (reuse existing calendar data + results).
    - **Circuits:** All circuits this series visits, linking to `/circuits/[slug]` (item 16).
    - **Standings:** Embed standings table (item 15's data) once available.
  - Year selector (once multi-year data exists, item 17).
  - Link to series pages from header navigation and from series chips throughout the app.
- **Phase 2 — Drivers & teams (new data required):**
  - Create `src/data/drivers/` directory with per-series files (e.g., `f1-2026.ts`). Each file exports an array:
    ```typescript
    export const f1Drivers2026 = [
      { id: 'antonelli', name: 'Andrea Kimi Antonelli', number: 12, team: 'mercedes', nationality: 'IT' },
      // ...
    ]
    ```
  - Create `src/data/teams/` directory with per-series files:
    ```typescript
    export const f1Teams2026 = [
      { id: 'mercedes', name: 'Mercedes-AMG Petronas', drivers: ['antonelli', 'russell'], color: '#27F4D2' },
      // ...
    ]
    ```
  - Add **Drivers** and **Teams** tabs to the series hub page, showing entry lists with links to detail pages.
  - Create `src/app/drivers/[id]/page.tsx` — driver profile showing: bio, current team, series, season results, career stats (as data grows).
  - Create `src/app/teams/[id]/page.tsx` — team profile showing: drivers, series entered, season results.
  - Cross-link everything: series → drivers → teams → circuits → results.
- **Phase 3 — Rich integration:**
  - Series hub becomes the "home" for each championship — fans bookmark `/series/f1` as their entry point.
  - Driver/team pages show historical results once multi-year data exists (item 17).
  - SEO benefit: deep internal linking between series, circuits, drivers, teams, and results pages.
- **Scope warning:** Phase 1 uses existing data and is achievable quickly. Phase 2 requires significant new data entry (drivers + teams for 14 series). Prioritize F1, NASCAR, IndyCar, WEC, WRC first.

### 15. Standings integration (`/standings`, embedded in series pages)
**What:** Championship standings for drivers and constructors/manufacturers. Standalone page + embedded in series hub pages (item 14).
**How:**
- Create `src/data/standings/` directory with files like `f1-2026.ts`, `nascar-2026.ts`, etc. Each file exports driver standings and constructor/manufacturer standings as arrays:
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
- Create `src/app/standings/page.tsx` as a standalone page (quick access from header nav).
- Also embed standings as a tab/section in `/series/[id]` (item 14).
- UI: Two tabs (Drivers / Constructors). Series selector on standalone page. Year selector (once multi-year data exists).
- Update standings alongside results when running `/update-results`. Add a step to the `docs/UPDATE-RESULTS.md` runbook.
- For series with class-based championships (WEC, IMSA, GTWC), show standings per class.
- Default view: current year, F1 (most popular series). Persist last-viewed series in localStorage.
- Driver names link to `/drivers/[id]` and team names link to `/teams/[id]` once those pages exist (item 14 phase 2).

### 16. Circuits page (`/circuits`, `/circuits/[slug]`)
**What:** A browsable directory of all circuits used across all series, with metadata and cross-links to series and event pages.
**How:**
- Create `src/app/circuits/page.tsx` — searchable, filterable grid/list of all circuits from `src/data/circuits.ts`.
- Each circuit card shows: name, country (with flag), length, turns, type (permanent/street/oval), and which series race there.
- Create `src/app/circuits/[slug]/page.tsx` — circuit detail page showing:
  - Circuit metadata: type, length, turns, country.
  - All events at this circuit across all series and years, linking to day detail pages.
  - Past results at this venue (once historical data exists).
  - Which series visit this circuit, linking to `/series/[id]` (item 14).
- Cross-reference: find which series use each circuit by scanning all calendar data files.
- Filter by: country, circuit type, series.
- Linked from: series hub pages (item 14), day detail page circuit info section.
- No track layout images needed initially (would require licensing). Text-based info is sufficient.

---

## Historical Data (Long-term)

### ~~17. Multi-year support & historical backfill~~ ✅ (2025 done)
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
