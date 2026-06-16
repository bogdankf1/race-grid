# iPad / tablet adaptive layouts — design

**Date:** 2026-06-16
**Branch:** `feat/expo-mobile-app`
**Status:** Approved (ready for implementation plan)

## Context

The Expo mobile app (`mobile/`) is at near web-parity but ships a single-column
phone layout. `ios.supportsTablet` is off, so iPads run it as a scaled-up
iPhone app. This is roadmap item #1 in `mobile/README.md` — make the app adapt
to the larger iPad canvas instead of stretching the phone UI.

## Scope

**In scope (this iteration — full roadmap area #1):**

- Shared responsive foundation (breakpoint hook, `ios.supportsTablet`, tablet landscape).
- Schedule → two-pane master-detail.
- Series / Circuits → multi-column grids.
- Standings → drivers + constructors side by side.
- Settings → split view (section list + active section).

**Out of scope:**

- Android tablets / foldables (phone layout continues to apply there).
- Replacing the bottom tab bar with a sidebar.
- Any change to phone layouts (must remain byte-for-byte behavior-identical).
- PWA-only features (N/A to native).

## Decisions (resolved during brainstorming)

1. **Device target:** iPad only (iOS). Android tablets keep the phone layout.
2. **Iteration size:** Full roadmap area #1 (all four screen groups + foundation).
3. **Navigation model:** **Hybrid** — split panes only where the content fits
   (Schedule, Settings). Series / Circuits become full-width multi-column grids
   that **push** to a full-screen detail; Standings shows two tables side by
   side. Rejected the "uniform master-detail on every tab" model because it
   crams the grids and the two standings tables into a narrow rail.
4. **Breakpoint:** `width >= 768pt` = tablet, via `useWindowDimensions()`.
   Width-based (not device-type), so it reacts live to rotation and iPad Split
   View. iPad Mini portrait (744pt) and narrow Split View fall back to the phone
   layout — accepted as correct, graceful behavior.
5. **Orientation:** phones stay portrait-locked; iPad gets landscape. Implemented
   with `expo-screen-orientation` (new dependency) + `app.json` orientation
   `"default"`, locking portrait at runtime when not a tablet.
6. **Empty Schedule pane:** auto-select the nearest upcoming race; fall back to a
   "Select a race" placeholder when there is none.

## Architecture

### Foundation (shared responsive layer)

- **`mobile/src/lib/use-is-tablet.ts`** — new. Exports `TABLET_BREAKPOINT = 768`
  and `useIsTablet()` returning `useWindowDimensions().width >= TABLET_BREAKPOINT`.
  Single source of truth for the responsive switch across all screens.
- **`app.json`** — set `ios.supportsTablet: true`; change top-level
  `"orientation": "portrait"` → `"orientation": "default"`.
- **Orientation control** — add `expo-screen-orientation`. In the root layout
  (`src/app/_layout.tsx`), an effect locks `PORTRAIT_UP` when `!isTablet` and
  unlocks (allows all) when tablet, re-running on dimension changes. This keeps
  iPhone portrait-only while letting iPad rotate.
- The bottom tab bar (`(tabs)/_layout.tsx`) is unchanged.

### `SplitView` layout primitive

- **`mobile/src/components/SplitView.tsx`** — new, lightweight. Renders a
  left rail (fixed/proportional width) + vertical divider + right pane (fills
  remaining space, scrollable). Used by both Schedule and Settings so the
  two-pane chrome (rail width, divider color via `--rg-*`, padding) is defined
  once. Not a generic data abstraction — purely the layout shell. Props roughly:
  `left: ReactNode`, `right: ReactNode`, `railWidth?: number`.

### Schedule → two-pane master-detail

- **`mobile/src/components/RaceDetail.tsx`** — new. Extracted verbatim from the
  body of `(tabs)/race/[id].tsx`. Takes `id: string` as a **prop** instead of
  reading `useLocalSearchParams`. The `useScreenTitle(...)` call stays in the
  route wrapper, not the component (panes have no stack header).
- **`(tabs)/race/[id].tsx`** — becomes a thin wrapper:
  `<RaceDetail id={useLocalSearchParams().id} />` plus the `useScreenTitle`. The
  full-screen route keeps working everywhere (notification taps, deep links,
  phone navigation). The pane is purely additive.
- **`(tabs)/index.tsx`** — on tablet, wrap in `SplitView`: left = the existing
  agenda/month list; right = `<RaceDetail id={selectedEventId} />` or the
  placeholder. A `selectedEventId` local state (initialized to nearest upcoming
  race) drives the pane. On phone: unchanged (`router.push`).
- **`mobile/src/components/AgendaCard.tsx`** — add an optional `onPress?:
  () => void` prop. When provided (tablet), it calls that instead of navigating;
  when absent (phone), behavior is unchanged.

### Series / Circuits → multi-column grids

- **`(tabs)/series.tsx`** and **`(tabs)/circuits.tsx`** — on tablet, render each
  group's items in a wrapping grid: **2 columns** in portrait, **3** in
  landscape, derived from width. Implementation: on tablet, swap the
  `SectionList` for a `ScrollView` of per-group `flex-row flex-wrap` grids (item
  width `~ (100/cols)%`); the existing row/card markup is reused. Tapping a card
  still `router.push`-es the full-screen detail. Phone: unchanged `SectionList`.

### Standings → side-by-side

- **`(tabs)/standings.tsx`** — on tablet, when the active class has constructors,
  drop the Drivers/Constructors **toggle** and render two columns side by side
  (Drivers | Constructors), each the existing row list. Single-class /
  no-constructor series render the drivers table alone (wider, centered). Rows
  still `router.push` to driver/team detail. Year/series/class pickers stay
  full-width on top. Phone: unchanged toggle + single `FlatList`.

### Settings → split view

- **`(tabs)/settings.tsx`** — refactor the single scroll into a keyed section
  list: `display` (theme / language / timezone), `spoiler`, `sessions`,
  `notifications`, `data`, `support`. Each section's body becomes an addressable
  render (e.g. a `SETTINGS_SECTIONS` array of `{ id, labelKey, render }`).
  - On tablet: `SplitView` with left = selectable section names, right = active
    section content (a `selectedSection` local state).
  - On phone: unchanged — render all sections stacked in the existing
    `ScrollView`. The `<Section>` / `<Row>` / `<Segmented>` / `TimezonePicker`
    building blocks are reused as-is.

## Data flow

No data-layer changes. All state additions are local component state
(`selectedEventId`, `selectedSection`) plus the `useIsTablet()` reactive width.
Persisted settings, the data provider, notification scheduling, and the MCP
refresh path are untouched.

## Files

**New:**

- `mobile/src/lib/use-is-tablet.ts`
- `mobile/src/components/SplitView.tsx`
- `mobile/src/components/RaceDetail.tsx`

**Modified:**

- `app.json` (supportsTablet, orientation)
- `package.json` (+ `expo-screen-orientation`)
- `src/app/_layout.tsx` (orientation lock effect)
- `src/app/(tabs)/index.tsx` (Schedule two-pane)
- `src/app/(tabs)/race/[id].tsx` (thin wrapper around `RaceDetail`)
- `src/components/AgendaCard.tsx` (optional `onPress`)
- `src/app/(tabs)/series.tsx` (tablet grid)
- `src/app/(tabs)/circuits.tsx` (tablet grid)
- `src/app/(tabs)/standings.tsx` (tablet side-by-side)
- `src/app/(tabs)/settings.tsx` (tablet split view)

## Edge cases

- **Breakpoint flip mid-session** (rotation, Split View resize): `useIsTablet()`
  is reactive, so layouts re-render. Local selection state (`selectedEventId`,
  `selectedSection`) persists across the flip; on phone it's simply unused.
- **Empty Schedule** (no followed series): the existing empty state renders;
  the pane shows the placeholder.
- **Standings with no constructors:** drivers-only column, no empty second pane.
- **Deep link / notification tap to `/race/[id]`:** always opens the full-screen
  route on every device — never tries to drive the Schedule pane.

## Testing / verification

- `npm run typecheck` — clean.
- `npm run smoke-test` — pure-logic tests stay green (unaffected).
- `npx expo export -p ios` — production bundle builds.
- Manual on **iPhone** via Expo Go — confirm phone layout is unchanged.
- Manual on **iPad** (physical via Expo Go; iOS Simulator needs Xcode setup that
  wasn't present) — both orientations, breakpoint flip, Schedule selection,
  Series/Circuits grids, Standings side-by-side, Settings split.

## Risks / notes

- `expo-screen-orientation` is the only piece that may need a dev build rather
  than plain Expo Go if Expo Go quirks appear; the rest is JS-only and
  Expo-Go-testable.
- Phone-layout regression is the main risk — every change is gated behind
  `isTablet`, so the phone path must remain the existing code path untouched.
