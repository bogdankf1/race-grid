# Race Grid — Claude Code Instructions

## Project overview

Race Grid is a motorsport calendar web app (Next.js 15, static export) showing race schedules for 24 racing series with session times in the user's local timezone. Data accuracy is critical — real users rely on this for planning.

## Architecture

- `src/data/<series>-2026.ts` — Calendar data per series (dates, circuits, sessions in UTC)
- `src/data/series-registry.ts` — Master list of all series with colors, names, events
- `src/data/circuits.ts` — Circuit metadata (length, turns, type)
- `src/data/broadcasts.ts` — "Where to watch" data per series per country (US, UA)
- `src/components/` — React components (DayDetail, CalendarGrid, Header, etc.)
- `src/lib/` — Utilities (timezone, i18n, ical, types, theme)
- `public/logos/` — Series logo SVGs
- `public/sw.js` — Service worker for push notifications
- `public/manifest.json` — PWA manifest

## Data integrity rules

**This is the most important section.** Race dates shown in the app must be 100% accurate.

- **Never fabricate or guess dates.** Always verify against official sources before adding or changing calendar data.
- **All session times are in UTC.** Convert carefully from local time — timezone math errors are the #1 source of bugs.
- **Circuit names must match** between calendar data files and `circuits.ts`.
- After any data change, run `npx next build` to verify.

## Runbooks

### Mid-season data verification
**When:** A race is canceled/rescheduled, geopolitical event affects a host country, monthly routine check, or user reports an error.
**How:** Follow `docs/VERIFY-SEASON-DATA.md` — it walks through checking all 20 series against official sources and fixing discrepancies.
**Command:** "Verify all race data" or "Check if calendar data is up to date"

### Race results update
**When:** Run manually whenever you want to catch up on results (e.g., after a race weekend or weekly).
**How:** Follow `docs/UPDATE-RESULTS.md` — finds finished sessions without results, fetches from official sources, updates per-series files in `src/data/results/`.
**Command:** "Update race results" or "Add results for last weekend"

### New season setup
**When:** Current season has concluded (December/January) and next season's calendars are being published.
**How:** Follow `docs/NEW-SEASON-SETUP.md` — it covers creating new data files, updating the registry, and handling series whose calendars aren't published yet.
**Command:** "Set up 2027 season" or "Prepare next season data"

## Code conventions

- Inline styles (no CSS modules) — the project uses CSS variables (`--rg-*`) for theming
- Ukrainian (`uk`) and English (`en`) locales — add i18n strings to `src/lib/i18n.ts` for both
- Series logos in `public/logos/` as SVG — use styled vectors, not plain text
- localStorage keys prefixed with `race-grid:`
- Session types: `race`, `qualifying`, `sprint`, `sprint_qualifying`, `hyperpole`, `practice`, `warmup`, `stage`, `shakedown`, `endurance`

## Series groups (for filter dropdown)

- **Open Wheel:** F1, IndyCar, Super Formula
- **Endurance:** WEC, ELMS, MLMC, IMSA, IGTC
- **GT / Touring:** DTM, GTWC, GTWC America, GTWC Asia, GTWC Australia, British GT, Super GT, NLS, Supercars
- **Stock Car:** NASCAR
- **Rally:** WRC
