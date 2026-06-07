# Race Grid — Claude Code Instructions

## Project overview

Race Grid is a motorsport calendar web app (Next.js 15, static export) showing race schedules for 34 racing series with session times in the user's local timezone. Data accuracy is critical — real users rely on this for planning.

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

## Skills (use proactively)

Always invoke the matching project skill when the task fits its trigger — do not improvise an equivalent workflow when a skill already encodes it. One skill per task type:

- **`/update-results`** — whenever the user asks to add/refresh race results, catch up on a weekend, or backfill a series/year. Runs the `docs/UPDATE-RESULTS.md` runbook.
- **`/update-standings`** — whenever championship/driver/constructor standings need updating (typically alongside `/update-results`). Runs `docs/UPDATE-STANDINGS.md`.
- **`/support-year`** — when adding a brand-new season year with full calendar data for all series.
- **`/add-series`** — when adding a new racing series end-to-end (calendar, entries, results, standings, broadcasts, pages).

Invoke via the Skill tool. If the user describes a task that matches a skill but doesn't name it, still use the skill rather than ad-hoc steps.

## Runbooks

### Mid-season data verification
**When:** A race is canceled/rescheduled, geopolitical event affects a host country, monthly routine check, or user reports an error.
**How:** Follow `docs/VERIFY-SEASON-DATA.md` — it walks through checking all 34 series against official sources and fixing discrepancies.
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

- **Open Wheel:** F1, F1 Academy, IndyCar, Indy NXT, Super Formula
- **Endurance:** WEC, ELMS, MLMC, IMSA, IGTC, 24H Series
- **GT / Touring:** DTM, GTWC, GTWC America, GTWC Asia, GTWC Australia, British GT, Super GT, NLS, Supercars, Porsche Supercup
- **Stock Car:** NASCAR Cup, NASCAR Xfinity, NASCAR Truck
- **Motorcycle:** MotoGP, Moto2, Moto3
- **Rally:** WRC, Dakar, FIA Rallycross (id: `wrx` — World RX 2021–2025, Euro RX from 2026)
- **Special Events:** Goodwood Festival of Speed, Goodwood Revival, Goodwood Members' Meeting, Pikes Peak, Le Mans Classic, Monaco Historique, Race of Champions (id: `special`)
