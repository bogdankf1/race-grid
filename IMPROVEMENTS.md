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

## ~~UX Improvements~~ (Done)

- ~~**11. Broadcast fallback** — Fixed: shows "Check your local listings" when country not supported~~
- ~~**12. Swipe gestures** — Fixed: swipe left/right on calendar grid (month/week) and day view. Ignores iOS edge swipes (<30px). Slide animation with fade transition.~~
- ~~**13. Back-to-calendar highlight** — Fixed: day cell flashes blue glow for 2s when returning~~
- ~~**14. Dim past events** — Fixed: finished sessions show 50% opacity + "Finished" label~~
- ~~**15. LIVE badge** — Fixed: pulsing red "LIVE" badge on running sessions, red left border on row~~
- ~~**16. Empty week message** — Fixed: shows "No races this week" below empty week grid~~

---

## ~~Performance~~ (Done)

- ~~**18. Conditional hooks** — Fixed: unified `useViewEvents` hook only computes events for the active view mode~~
- ~~**19. Search index** — Fixed: full index built once (memoized on timezone), filtered by series at search time~~
- ~~**20. SW notifications** — Fixed: extracted `sendSchedule()`, called on prefs change + `visibilitychange` listener reschedules when page becomes visible~~

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

## ~~Infrastructure~~ (Done)

- ~~**33. Static generation range** — Fixed: `generateStaticParams` now derives date range from actual session data across all series (earliest − 7 days to latest + 7 days). Automatically adapts when new seasons are added.~~
