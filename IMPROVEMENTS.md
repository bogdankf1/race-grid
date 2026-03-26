# Race Grid — Improvements Backlog

Items for Claude Code to work through. Grouped by category, roughly prioritized within each group.

---

## ~~Bugs~~ (Done)

- ~~**1. DayCell hover state bug** — Fixed: skip hover for `isToday` cells~~
- ~~**2. Countdown memory leak** — Fixed: added `active` guard flag~~
- ~~**3. Search results key** — Fixed: uses `r.eventId` instead of array index~~
- ~~**4. Hardcoded green color** — Fixed: added `--rg-success` to theme system (dark/light)~~
- ~~**5. `formatInTimezone` locale** — Fixed: accepts locale param, Ukrainian uses 24h format~~

---

## UX Improvements

- ~~**11. Broadcast fallback** — Fixed: shows "Check your local listings" when country not supported~~
- **12. Swipe gestures on mobile calendar** — Not started
- ~~**13. Back-to-calendar highlight** — Fixed: day cell flashes blue glow for 2s when returning~~
- ~~**14. Dim past events** — Fixed: finished sessions show 50% opacity + "Finished" label~~
- ~~**15. LIVE badge** — Fixed: pulsing red "LIVE" badge on running sessions, red left border on row~~
- ~~**16. Empty week message** — Fixed: shows "No races this week" below empty week grid~~

---

## Performance

### 18. Conditional event hook execution
`page.tsx` calls both `useCalendarEvents` (for month) and `useWeekEvents` (for week) on every render, even though only one is used at a time.

**Fix:** Conditionally call only the active hook. Since React hooks can't be called conditionally, refactor into a single `useCalendarEvents` hook that accepts a `mode` parameter (`'month' | 'week'`) and a date reference, returning events for the appropriate range.

### 19. Search index rebuilds on every filter change
`CalendarSearch.tsx` rebuilds the full search index (`buildIndex`) every time `selectedSeriesIds` changes. With 14 series and hundreds of events, this is unnecessary work.

**Fix:** Memoize the full index (all series) once, then filter results by `selectedSeriesIds` at search time instead of rebuilding the index. The index rarely changes — only series selection does.

### 20. Service worker timers don't survive page close
Notification scheduling uses `setTimeout` inside the service worker. If the browser kills the SW (common on mobile), all scheduled notifications are lost.

**Fix:** On every page load, re-send the notification schedule to the SW (the `useNotifications` hook already does this on prefs change, but should also do it on mount). Add a `visibilitychange` listener to reschedule when the page becomes visible again. Consider using the `Notification Triggers API` if available.

---

## ~~Code Quality~~ (Done)

- ~~**21. Logo padding list** — Fixed: added `logoBgWhite` property to `SeriesConfig`, replaced all hardcoded checks~~
- ~~**22. Deduplicate hooks** — Fixed: extracted shared `buildEventMap()` function, both hooks use it with different filters~~
- ~~**23. SeriesSelector** — Fixed: deleted unused component~~
- ~~**24. Error boundaries** — Fixed: `ErrorBoundary` wraps `CalendarGrid` and `DayDetail`, shows friendly fallback with refresh button~~

---

## New Features

### 25. Race results
After a race, show the winner and podium finishers. Even a simple "Winner: Verstappen" adds significant value for users checking past race days.

**Implementation:**
- Create `src/data/results-2026.ts` with a `Record<string, { winner: string; second?: string; third?: string }>` keyed by event ID
- In `DayDetail.tsx`, look up results for past race sessions and display below the session row
- Results can be populated manually or via a verification runbook (add to `VERIFY-SEASON-DATA.md`)
- Add i18n strings: "Winner", "Podium", etc.

### 26. Favorites / "My series"
Let users mark certain series as favorites. Favorites float to the top of the day view and get a subtle star indicator on the calendar grid.

**Implementation:**
- Add `race-grid:favorites` localStorage key (string array of series IDs)
- In `DayDetail.tsx`, sort `dayEvents` with favorites first
- In `DayCell.tsx`, show a small star icon if any favorite series has an event that day
- Add a star/heart toggle button to the series filter dropdown next to each series checkbox

### 27. Upcoming races compact list
A "Next 5 races" widget showing the nearest upcoming events across all series, regardless of which month is displayed. Useful for quick at-a-glance info.

**Implementation:**
- Create `UpcomingRaces.tsx` component
- Scan all series events, find sessions where `startUtc > now`, sort, take first 5-10
- Show as a compact list: series chip + event name + date + countdown
- Place below the calendar grid or as a collapsible panel
- Each item links to the day view

### 28. Multi-language expansion
The i18n system is ready for more languages. Priority languages by motorsport audience: German (DTM, F1), Japanese (Super GT, Super Formula), Spanish (F1), Portuguese (F1 Brazil).

**Implementation:**
- Add new locale types to `Locale` union
- Add translation objects for each new language
- Update locale toggle to cycle through available languages (or use a dropdown instead of toggle)
- Auto-detect from `navigator.language` for all supported locales
- Race/circuit/series names stay in English (proper nouns)

### 29. Batch "Add all to Google Calendar"
Currently each session requires a separate Google Calendar link. Users want to add an entire race weekend with one action.

**Implementation:**
- Google Calendar URL API only supports one event per URL
- Option A: Open multiple tabs (bad UX)
- Option B: Generate a single `.ics` file with all sessions and offer "Open in Google Calendar" via the webcal: protocol
- Option C: Add a "Add all sessions" button that sequentially opens Google Calendar URLs with a small delay
- Recommend Option B: update `ical.ts` to support webcal: URL scheme, add a "Google Calendar (all sessions)" option in the `CalendarExport` dropdown

### 30. Dynamic OG share images
When sharing a day URL, generate a preview image showing which races are on that day. Makes links look much better in Telegram, iMessage, Twitter, etc.

**Implementation:**
- Create an OG image generation endpoint or build-time generation
- Since this is a static export (`output: 'export'`), build-time is the only option
- Use `@vercel/og` or a canvas-based approach during `generateStaticParams` to create a PNG per day
- Image shows: date, series chips, event names
- Add `og:image` meta tag pointing to the generated image
- Alternative: use a serverless function on Vercel for dynamic generation (would require removing `output: 'export'` or using Vercel's edge functions separately)

---

## Infrastructure

### 33. Static generation covers only 2026
`generateStaticParams` in `src/app/day/[date]/page.tsx` only generates Jan 1 – Dec 31 2026. Navigating to any 2027 date (or late 2025) would result in a 404.

**Fix:** Extend the date range to cover adjacent years or dynamically derive the range from the earliest and latest session dates across all series in the registry. This also matters when setting up a new season (see `docs/NEW-SEASON-SETUP.md`).
