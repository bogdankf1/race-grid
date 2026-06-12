# Race Grid Mobile

Native mobile companion for [race-grid.app](https://race-grid.app) — Expo (managed workflow) + Expo Router + TypeScript + NativeWind.

## Architecture

The app **reuses the web app's non-visual layer directly** from the repo's `src/` — nothing is copied:

| Shared module (via `@/` alias)   | Used for                                            |
| -------------------------------- | --------------------------------------------------- |
| `@/lib/types`                    | Session/RaceEvent/SeriesConfig types                 |
| `@/data/series-registry`         | 35 series, colors, groups, families, season events   |
| `@/data/circuits`                | Circuit metadata                                     |
| `@/data/results`                 | Bundled race results snapshot                        |
| `@/lib/timezone`                 | Timezone-correct formatting (Hermes has full Intl)   |
| `@/lib/i18n`                     | EN/UK strings (`tm()` in `~/lib/strings` adds mobile-only keys) |
| `@/lib/theme`                    | The `--rg-*` palette, applied via NativeWind `vars()` |

The view layer is 100% React Native primitives styled with NativeWind classes
(`bg-rg-surface`, `text-rg-text3`, …) backed by the same CSS variables the web
app uses, so light/dark themes match exactly.

Alias wiring lives in `metro.config.js` (custom resolver: `@/` → `<repo>/src`,
`~/` → `mobile/src`) and `tsconfig.json`. Two Expo experiments are disabled in
`app.json` because the shared code lives outside the project root:
`tsconfigPaths` (its rewrite breaks out-of-root mappings) and
`onDemandFilesystem` (scoped to the project root, hides `../src`).

### Data flow

1. **Bundled snapshot** — the current season's calendars/results are compiled
   into the JS bundle, so the app opens instantly and works fully offline.
2. **MCP refresh** — the public [race-grid MCP server](../mcp) is queried over
   stateless streamable-HTTP JSON-RPC (`~/lib/mcp.ts`): `search_races` refreshes
   the whole year's calendar (≤ twice a day, or pull-to-refresh), and
   `get_race_results` fills in results newer than the snapshot.
3. **AsyncStorage cache** — refreshed data is cached under `race-grid:cache:*`
   and overlaid on the bundled snapshot at startup; remote wins per series.

Settings persist under the same keys the web app uses in localStorage
(`race-grid:series`, `race-grid:timezone`, `race-grid:theme`,
`race-grid:locale`, `race-grid:spoiler-free`, `race-grid:notify`).

### Screens

- **Schedule** — season agenda grouped by race week (Mon–Sun, user timezone),
  per-series color coding, live/finished states, countdowns, pull-to-refresh,
  collapsed earlier weeks.
- **Series** — follow/unfollow series, grouped like the web filter dropdown.
- **Settings** — theme, language (EN/UK), timezone picker, spoiler-free mode,
  notification reminders (lead time 15/30/60 min, per-series), data refresh.
- **race/[id]** — sessions with local-tz times grouped by day, circuit info,
  results behind the web's exact spoiler guard ("Tap to reveal results").

### Notifications

Local-only (`expo-notifications`, no push backend). Reminders are spoiler-safe
and match the web service-worker wording: `F1: Qualifying` / `Barcelona-
Catalunya Grand Prix — starts in 30 min`. The soonest 60 sessions are scheduled
(iOS caps at 64) and re-planned on pref/data changes and app foreground.

## Development

```bash
cd mobile
npm install
npx expo start        # scan the QR code with Expo Go
```

Checks:

```bash
npm run typecheck     # tsc --noEmit
npm run smoke-test    # pure-logic tests against the real season data
npx expo export -p ios -p android --output-dir dist-export   # full Metro bundle
```

Note: local notifications need a real device; in Expo Go on Android they are
limited — use `npx expo run:android`/`run:ios` (or a dev build) for full
notification behavior.

## Roadmap

Planned phases, in priority order. Items in the second group exist on the web
and were intentionally not ported yet.

### 1. iPad / tablet adaptive layouts

Today the app is a single-column phone layout and `ios.supportsTablet` is off
(iPads run it as a scaled iPhone app). The tablet phase should leverage the
extra space rather than stretch the phone UI:

- Enable `ios.supportsTablet` and size against `useWindowDimensions`
  breakpoints (≥768pt = tablet).
- **Schedule**: two-pane master–detail — agenda list on the left, the selected
  race's detail (sessions/circuit/results) on the right, no navigation push.
- **Series / Circuits / Standings**: multi-column grids instead of one card
  per row; standings tables can show drivers and constructors side by side.
- **Settings**: split view (section list left, active section right).
- Landscape support on tablets only (phones stay portrait-locked).

### 2. Not yet ported from the web app

- Driver and team detail pages (`/drivers/[id]`, `/teams/[id]`) — standings
  rows would link to them.
- Month-grid calendar view — the agenda list is a deliberate mobile design
  swap, but a compact month grid could return as an optional view mode.
- `webcal://` season subscription (auto-updating calendar feed) — device
  calendar insert covers the one-shot case today.
- `.ics` file share (expo-sharing) as an alternative to direct calendar
  insert.
- PWA-only features (install prompt, service worker) — N/A for native.
