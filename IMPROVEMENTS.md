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

### 11. Show fallback for unsupported broadcast countries
The "Where to watch" section only supports US and UA. Users in other countries see nothing — no section at all, which is confusing.

**Fix:** When `detectCountry()` returns `null`, show a generic message like "Check your local listings" or "Broadcast info not available for your region". Add i18n strings for both locales.

### 12. Swipe gestures on mobile calendar
On touch devices, swiping left/right on the calendar grid should navigate to the next/previous month (or week in week view). This is the natural mobile interaction pattern.

**Fix:** Add touch event handlers (`touchstart`/`touchend`) to the calendar grid container. Detect horizontal swipe (threshold ~50px) and call `goToNext`/`goToPrev`. Consider a lightweight library like `use-gesture` or implement manually.

### 13. Smoother "Back to calendar" navigation
When returning from the day view to the calendar, the correct month is shown (via URL param), but there's no visual indication of which day you came from.

**Fix:** Pass the date as a query param when navigating back. On the calendar page, briefly highlight the day cell you returned from (similar to the search highlight on the day view).

### 14. Dim past events
Events and sessions that have already happened look the same as upcoming ones. Users have to mentally filter what's relevant.

**Fix:** In `DayDetail.tsx`, compare `session.startUtc + durationMinutes` against `Date.now()`. If a session has ended, apply reduced opacity and a "Finished" label. In the calendar grid, dim past day cells slightly (less than the out-of-month dimming).

### 15. "LIVE" badge for running sessions
When a session is currently in progress (now is between startUtc and startUtc + durationMinutes), show a pulsing "LIVE" indicator on the session row.

**Fix:** In `DayDetail.tsx`, add a check: `const isLive = now >= start && now < start + duration`. Show a small red "LIVE" badge with a CSS pulse animation next to the session time. Also show it on the calendar day cell if any session is live that day.

### 16. Empty week message
In week view, a week with no races shows 7 empty cells which looks broken.

**Fix:** After rendering the grid, check if the week has zero events. If so, show a centered message below the grid: "No races this week" / "Цього тижня немає гонок". Keep the empty cells visible so the grid structure is maintained.

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

## Code Quality

### 21. Extract hardcoded logo padding list
The array `['wec', 'nls', 'wrc', 'imsa', 'dtm']` (series needing white background behind logos) appears in `DayDetail.tsx` and potentially other files. Adding a new series requires finding all instances.

**Fix:** Add a `logoBgWhite: boolean` property to `SeriesConfig` in `types.ts`. Set it per series in `series-registry.ts`. Replace all hardcoded checks with `series.logoBgWhite`.

### 22. Deduplicate event hooks
`useCalendarEvents.ts` and `useWeekEvents.ts` share 90% of their logic (scanning series, matching dates, building the Map). Only the date filtering differs.

**Fix:** Extract a shared `buildEventMap(selectedSeries, timezone, dateFilter: (date: string) => boolean)` function. Both hooks call it with different filter predicates. This also enables the conditional execution from item 18.

### 23. Remove unused SeriesSelector component
`src/components/SeriesSelector.tsx` exists but is not imported or used anywhere in the app.

**Fix:** Delete the file. If it's needed in the future (e.g., onboarding flow), it can be recreated from git history.

### 24. Add error boundaries
A malformed date string, missing circuit data, or corrupt localStorage value can crash the entire page with no recovery.

**Fix:** Create a reusable `ErrorBoundary` component that catches React errors and shows a friendly fallback ("Something went wrong — try refreshing"). Wrap `CalendarGrid` and `DayDetail` with it. Add try-catch in `useLocalStorage` initialization for corrupt JSON.

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
