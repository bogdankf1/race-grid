# iPad / Tablet Adaptive Layouts Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the Expo mobile app adapt to the iPad canvas — two-pane Schedule, multi-column Series/Circuits grids, side-by-side Standings, split-view Settings, and tablet landscape — without changing any phone behavior.

**Architecture:** A single width-based switch (`useIsTablet()`, ≥768dp) gates every tablet layout; the phone code path is left untouched behind it. Pure width/selection helpers live in `responsive.ts` and `agenda.ts` (node-testable via the existing `tsx` smoke-test); the React-Native hook, a shared `SplitView` shell, and an extracted `RaceDetail` component support the screen changes.

**Tech Stack:** Expo SDK 56, Expo Router, React Native 0.85, NativeWind 4, `expo-screen-orientation` (new), TypeScript. Tests: `npm run typecheck` + `npm run smoke-test` (hand-rolled `tsx` runner); UI verified manually on device.

**Working directory:** All paths are relative to `mobile/` inside the `feat/expo-mobile-app` worktree. Run all commands from `mobile/`.

**Spec:** `docs/superpowers/specs/2026-06-16-ipad-tablet-layouts-design.md`

**Conventions to follow:** inline NativeWind classes with `--rg-*` theme tokens (`bg-rg-bg`, `text-rg-text3`, `border-rg-border`); `c('token')` from `useTheme()` for non-class colors; i18n via `t()` (`@/lib/i18n`) and `tm()` (`~/lib/strings`); `@/` → repo `src/`, `~/` → `mobile/src/`.

**Note on a refinement vs. the spec:** the spec named one new file `use-is-tablet.ts`. We split it into `responsive.ts` (pure, no RN imports → runs under the node smoke-test) + `use-is-tablet.ts` (the hook). Orientation locking uses a *device-based* check (`min(width,height) ≥ 768`) so a large phone held in landscape at launch is never mistaken for a tablet, while *layout* uses current width as the spec specifies.

---

## Task 1: Responsive foundation (pure helpers + hook)

**Files:**
- Create: `mobile/src/lib/responsive.ts`
- Create: `mobile/src/lib/use-is-tablet.ts`
- Test: `mobile/scripts/smoke-test.ts` (append cases)

- [ ] **Step 1: Write the failing tests** — append to `mobile/scripts/smoke-test.ts`. First add the import near the other `../src/lib/...` imports at the top:

```typescript
import { gridColumns, isTabletDevice, isTabletWidth } from '../src/lib/responsive'
```

Then append these test blocks at the end of the file, before any final summary `console.log` (if the file ends with a passed-count log, put these above it):

```typescript
// ───────── responsive ─────────
ok('isTabletWidth: phones below 768 are not tablet', () => {
  assert.equal(isTabletWidth(390), false)
  assert.equal(isTabletWidth(767), false)
  assert.equal(isTabletWidth(768), true)
  assert.equal(isTabletWidth(1024), true)
})

ok('gridColumns: 1 phone / 2 portrait tablet / 3 wide', () => {
  assert.equal(gridColumns(390), 1)
  assert.equal(gridColumns(768), 2)
  assert.equal(gridColumns(900), 2)
  assert.equal(gridColumns(1024), 3)
  assert.equal(gridColumns(1366), 3)
})

ok('isTabletDevice: uses the smaller dimension, so landscape phones stay phones', () => {
  assert.equal(isTabletDevice(932, 430), false) // iPhone Pro Max landscape
  assert.equal(isTabletDevice(430, 932), false) // iPhone Pro Max portrait
  assert.equal(isTabletDevice(820, 1180), true) // iPad 10.9 portrait
  assert.equal(isTabletDevice(1180, 820), true) // iPad 10.9 landscape
})
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `npm run smoke-test`
Expected: FAIL — `Cannot find module '../src/lib/responsive'` (module does not exist yet).

- [ ] **Step 3: Create `mobile/src/lib/responsive.ts`**

```typescript
// Pure responsive helpers — no React Native imports, so they run under the
// node smoke-test. The hook that consumes these lives in use-is-tablet.ts.

/** Window width (dp) at or above which we use the tablet (iPad) layout. */
export const TABLET_BREAKPOINT = 768

/** Window width (dp) at or above which tablet grids use 3 columns instead of 2. */
export const TABLET_WIDE_BREAKPOINT = 1024

/** True when the current window width warrants the tablet layout. */
export function isTabletWidth(width: number): boolean {
  return width >= TABLET_BREAKPOINT
}

/**
 * True when the physical device is a tablet, independent of orientation.
 * Uses the smaller screen dimension so a large phone in landscape (e.g. a
 * 932×430 Pro Max) is never classified as a tablet. Used for orientation
 * locking; layout decisions use isTabletWidth (current width) instead.
 */
export function isTabletDevice(width: number, height: number): boolean {
  return Math.min(width, height) >= TABLET_BREAKPOINT
}

/** Column count for tablet grids: 1 on phones, 2 in iPad portrait, 3 when wide. */
export function gridColumns(width: number): number {
  if (width >= TABLET_WIDE_BREAKPOINT) return 3
  if (width >= TABLET_BREAKPOINT) return 2
  return 1
}
```

- [ ] **Step 4: Run the tests to verify they pass**

Run: `npm run smoke-test`
Expected: PASS — the three new `✓` lines appear and the process exits 0.

- [ ] **Step 5: Create `mobile/src/lib/use-is-tablet.ts`**

```typescript
import { useWindowDimensions } from 'react-native'

import { gridColumns, isTabletWidth } from '~/lib/responsive'

/**
 * True when the current window width warrants the iPad layout. Reactive to
 * rotation and iPad Split View via useWindowDimensions.
 */
export function useIsTablet(): boolean {
  const { width } = useWindowDimensions()
  return isTabletWidth(width)
}

/** Current tablet grid column count (1 on phones). Reactive to width. */
export function useGridColumns(): number {
  const { width } = useWindowDimensions()
  return gridColumns(width)
}
```

- [ ] **Step 6: Typecheck**

Run: `npm run typecheck`
Expected: PASS — no errors.

- [ ] **Step 7: Commit**

```bash
git add src/lib/responsive.ts src/lib/use-is-tablet.ts scripts/smoke-test.ts
git commit -m "feat(mobile): responsive breakpoint helpers + useIsTablet hook"
```

---

## Task 2: iPad enablement + orientation lock

**Files:**
- Modify: `mobile/app.json`
- Modify: `mobile/package.json` (via `expo install`)
- Modify: `mobile/src/app/_layout.tsx`

- [ ] **Step 1: Install `expo-screen-orientation`**

Run: `npx expo install expo-screen-orientation`
Expected: adds an SDK-56-compatible version to `package.json` dependencies.

- [ ] **Step 2: Enable iPad + allow rotation in `app.json`**

In `mobile/app.json`, change the top-level orientation from `"portrait"` to `"default"`, and add `supportsTablet` under `ios`:

```json
    "orientation": "default",
    "ios": {
      "icon": "./assets/expo.icon",
      "supportsTablet": true
    },
```

(Leave every other field unchanged. The `ios` block currently only has `icon` — add the `supportsTablet` line to it.)

- [ ] **Step 3: Add the orientation-lock effect to `mobile/src/app/_layout.tsx`**

Add these imports alongside the existing imports:

```typescript
import * as ScreenOrientation from 'expo-screen-orientation'
import { useWindowDimensions } from 'react-native'

import { isTabletDevice } from '~/lib/responsive'
```

Add this component above `ThemedNavigator`:

```typescript
/** Phones stay portrait-locked; tablets (iPad) may rotate freely. */
function OrientationLock() {
  const { width, height } = useWindowDimensions()
  useEffect(() => {
    if (isTabletDevice(width, height)) {
      ScreenOrientation.unlockAsync().catch(() => {})
    } else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP).catch(() => {})
    }
  }, [width, height])
  return null
}
```

Render it inside `ThemedNavigator`, next to `<NotificationManager />`:

```tsx
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      <OrientationLock />
      <NotificationManager />
```

(`useEffect` and `AppState` are already imported in this file; only add what's listed above.)

- [ ] **Step 4: Typecheck**

Run: `npm run typecheck`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add app.json package.json package-lock.json src/app/_layout.tsx
git commit -m "feat(mobile): enable iPad support + tablet-only landscape"
```

---

## Task 3: `SplitView` layout primitive

**Files:**
- Create: `mobile/src/components/SplitView.tsx`

- [ ] **Step 1: Create `mobile/src/components/SplitView.tsx`**

```tsx
import type { ReactNode } from 'react'
import { View } from 'react-native'

/**
 * Two-pane tablet layout: a fixed-width left rail with a divider, and a right
 * pane that fills the remaining space. Used by Schedule and Settings on iPad.
 * Render this only when useIsTablet() is true; phones use their single-column
 * layout unchanged.
 */
export function SplitView({
  left,
  right,
  railWidth = 320,
}: {
  left: ReactNode
  right: ReactNode
  railWidth?: number
}) {
  return (
    <View className="flex-1 flex-row">
      <View style={{ width: railWidth }} className="flex-1 border-r border-rg-border">
        {left}
      </View>
      <View className="flex-1">{right}</View>
    </View>
  )
}
```

Note: the left rail uses both a fixed `width` (via style) and `flex-1` (via class) so its child list fills the full height. `flex-1` on a fixed-width box does not stretch the width — the `style.width` wins for the horizontal axis.

- [ ] **Step 2: Typecheck**

Run: `npm run typecheck`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/components/SplitView.tsx
git commit -m "feat(mobile): add SplitView two-pane primitive"
```

---

## Task 4: Extract `RaceDetail` from the race route

**Files:**
- Create: `mobile/src/components/RaceDetail.tsx`
- Modify: `mobile/src/app/(tabs)/race/[id].tsx`

Goal: make the race detail render from an `id` **prop** so it can be embedded in the Schedule pane, while the route screen keeps setting its stack title and working for deep links / notification taps.

- [ ] **Step 1: Create `mobile/src/components/RaceDetail.tsx`**

Move the entire body of the current `race/[id].tsx` into this component, with two changes: it takes `{ id }` as a prop instead of calling `useLocalSearchParams`, and it does **not** call `useScreenTitle` (that stays in the route wrapper). Full file:

```tsx
// Race detail body: every session of the weekend in the user's timezone,
// circuit info, and (spoiler-guarded) results once sessions have finished.
// Rendered both by the /race/[id] route and inline in the Schedule pane (iPad).

import { useEffect, useMemo, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'

import { getCircuit, getCircuitTypeLabel } from '@/data/circuits'
import { t } from '@/lib/i18n'
import { formatInTimezone, getLocalDate } from '@/lib/timezone'
import type { Session } from '@/lib/types'
import { isStale, readCache, writeCache } from '~/lib/cache'
import { collectEventResults, hasFinishedResultSession } from '~/lib/data'
import { useEventRef } from '~/lib/event-ref'
import { fetchEventResults, type RemoteSessionResult } from '~/lib/mcp'
import { tm } from '~/lib/strings'
import { AddToCalendar } from '~/components/AddToCalendar'
import { CountryCode } from '~/components/CountryCode'
import { ResultBlock } from '~/components/ResultBlock'
import { SeriesChip } from '~/components/SeriesChip'
import { SessionRow } from '~/components/SessionRow'
import { SpoilerGuard } from '~/components/SpoilerGuard'
import { WhereToWatch } from '~/components/WhereToWatch'
import { useSettings } from '~/state/settings'

const RESULTS_MAX_AGE_MS = 6 * 60 * 60 * 1000

export function RaceDetail({ id }: { id: string }) {
  const { timezone, locale, spoilerFree, visibleSessionTypes } = useSettings()

  const { ref, loading } = useEventRef(id)

  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const tick = setInterval(() => setNow(Date.now()), 30_000)
    return () => clearInterval(tick)
  }, [])

  // Results newer than the bundled snapshot, fetched once per event and cached.
  const [remoteResults, setRemoteResults] = useState<RemoteSessionResult[] | null>(null)
  useEffect(() => {
    if (!ref || !hasFinishedResultSession(ref.event, Date.now())) return
    let cancelled = false
    const cacheKey = `results:${ref.event.id}`
    readCache<RemoteSessionResult[]>(cacheKey).then(async (cached) => {
      if (cancelled) return
      if (cached) setRemoteResults(cached.value)
      if (isStale(cached, RESULTS_MAX_AGE_MS)) {
        try {
          const fresh = await fetchEventResults(ref.event.id)
          if (!cancelled && fresh.length > 0) {
            setRemoteResults(fresh)
            await writeCache(cacheKey, fresh)
          }
        } catch {
          // Offline — bundled results (if any) still render.
        }
      }
    })
    return () => {
      cancelled = true
    }
  }, [ref])

  const sessionsByDay = useMemo(() => {
    if (!ref) return []
    const sorted = ref.event.sessions
      .filter((s) => visibleSessionTypes.includes(s.type))
      .sort((a, b) => new Date(a.startUtc).getTime() - new Date(b.startUtc).getTime())
    const days = new Map<string, Session[]>()
    for (const session of sorted) {
      const day = getLocalDate(session.startUtc, timezone)
      const list = days.get(day)
      if (list) list.push(session)
      else days.set(day, [session])
    }
    return [...days.entries()]
  }, [ref, timezone, visibleSessionTypes])

  if (!ref) {
    return (
      <View className="flex-1 items-center justify-center bg-rg-bg px-8">
        {!loading && (
          <Text className="text-base text-rg-text2">{tm('detail.notFound', locale)}</Text>
        )}
      </View>
    )
  }

  const { series, event } = ref
  const circuit = getCircuit(event.circuitId)
  const maxRound = Math.max(series.events.length, ...series.events.map((e) => e.round ?? 0))
  const resultPairs = collectEventResults(event, now, remoteResults)

  return (
    <ScrollView
      className="flex-1 bg-rg-bg"
      contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
    >
      <View className="flex-row items-center gap-3">
        <SeriesChip
          shortName={series.shortName}
          color={series.color}
          textColor={series.textColor}
          size="md"
        />
        {event.round != null && (
          <View className="rounded-md border border-rg-border bg-rg-elevated px-2.5 py-1">
            <Text className="text-[11px] font-semibold text-rg-text3">
              {t('progress.roundFull', locale)} {event.round}/{maxRound}
            </Text>
          </View>
        )}
      </View>

      <Text className="mt-3 text-xl font-bold tracking-wide text-rg-text">{event.name}</Text>

      {circuit && (
        <View className="mt-3 rounded-2xl border border-rg-card-border bg-rg-surface p-4">
          <Text className="mb-1 text-xs font-bold uppercase tracking-widest text-rg-text3">
            {tm('detail.circuit', locale)}
          </Text>
          <View className="flex-row items-center gap-1.5">
            <CountryCode code={circuit.countryCode} />
            <Text className="flex-1 text-sm font-semibold text-rg-text">
              {circuit.name}, {circuit.country}
            </Text>
          </View>
          <Text className="mt-1 text-xs text-rg-text3">
            {circuit.length} · {circuit.turns} {tm('circuit.turns', locale)} ·{' '}
            {getCircuitTypeLabel(circuit.type, locale)}
          </Text>
          {circuit.lapRecord && (
            <Text className="mt-1 text-xs text-rg-text3">
              {tm('detail.lapRecord', locale)}: {circuit.lapRecord}
            </Text>
          )}
        </View>
      )}

      <Text className="mb-2 mt-5 text-xs font-bold uppercase tracking-widest text-rg-text3">
        {tm('detail.sessions', locale)}
      </Text>
      <View className="gap-3">
        {sessionsByDay.map(([day, sessions]) => (
          <View key={day}>
            <Text className="mb-1.5 text-xs font-semibold text-rg-text2">
              {formatInTimezone(sessions[0].startUtc, timezone, 'date', locale)}
            </Text>
            <View className="gap-1.5">
              {sessions.map((session) => (
                <SessionRow
                  key={`${session.type}-${session.startUtc}-${session.label}`}
                  session={session}
                  timezone={timezone}
                  locale={locale}
                  now={now}
                />
              ))}
            </View>
          </View>
        ))}
      </View>

      <WhereToWatch
        seriesId={series.id}
        seriesColor={series.color}
        timezone={timezone}
        locale={locale}
      />
      <AddToCalendar
        event={event}
        sessions={sessionsByDay.flatMap(([, sessions]) => sessions)}
        seriesId={series.id}
        seriesName={series.name}
        seriesEvents={series.events}
        locale={locale}
      />

      {resultPairs.length > 0 &&
        (spoilerFree ? (
          <SpoilerGuard results={resultPairs} locale={locale} />
        ) : (
          <ResultBlock results={resultPairs} locale={locale} />
        ))}
    </ScrollView>
  )
}
```

- [ ] **Step 2: Replace `mobile/src/app/(tabs)/race/[id].tsx` with the thin wrapper**

```tsx
// Race detail route: resolves the id from the URL, sets the stack title, and
// renders the shared RaceDetail body (also used inline in the Schedule pane).

import { useLocalSearchParams } from 'expo-router'

import { useEventRef } from '~/lib/event-ref'
import { useScreenTitle } from '~/lib/use-screen-title'
import { RaceDetail } from '~/components/RaceDetail'

export default function RaceDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const { ref } = useEventRef(id)
  useScreenTitle(ref?.series.shortName ?? '')
  return <RaceDetail id={id} />
}
```

(`useEventRef` is a memoized lookup over the loaded series, so calling it here and again inside `RaceDetail` is cheap and correct.)

- [ ] **Step 3: Typecheck**

Run: `npm run typecheck`
Expected: PASS.

- [ ] **Step 4: Smoke-test (must stay green — logic untouched)**

Run: `npm run smoke-test`
Expected: PASS.

- [ ] **Step 5: Manual sanity check (phone)**

In a running Expo Go session on the iPhone, open any race from the Schedule. Expected: detail screen looks and behaves exactly as before (title in the header, sessions, results, calendar/share). No visual change.

- [ ] **Step 6: Commit**

```bash
git add src/components/RaceDetail.tsx "src/app/(tabs)/race/[id].tsx"
git commit -m "refactor(mobile): extract RaceDetail body for reuse in panes"
```

---

## Task 5: Schedule two-pane master-detail

**Files:**
- Modify: `mobile/src/lib/agenda.ts` (add `firstUpcomingEventId`)
- Test: `mobile/scripts/smoke-test.ts` (append cases)
- Modify: `mobile/src/components/AgendaCard.tsx` (optional `onPress`)
- Modify: `mobile/src/app/(tabs)/index.tsx` (tablet SplitView)

- [ ] **Step 1: Write the failing tests for `firstUpcomingEventId`** — append to `mobile/scripts/smoke-test.ts`. Add to the existing agenda import line so it reads:

```typescript
import { buildAgenda, eventStatus, firstUpcomingEventId, weekKeyOf } from '../src/lib/agenda'
```

Then append:

```typescript
// ───────── firstUpcomingEventId ─────────
ok('firstUpcomingEventId picks the earliest non-finished event', () => {
  const groups = [
    {
      weekKey: 'w',
      events: [
        { event: { id: 'b' }, startMs: 200, status: 'upcoming' },
        { event: { id: 'a' }, startMs: 100, status: 'finished' },
        { event: { id: 'c' }, startMs: 300, status: 'upcoming' },
      ],
    },
  ] as never
  assert.equal(firstUpcomingEventId(groups), 'b')
})

ok('firstUpcomingEventId falls back to the earliest event when all finished', () => {
  const groups = [
    {
      weekKey: 'w',
      events: [
        { event: { id: 'x' }, startMs: 500, status: 'finished' },
        { event: { id: 'y' }, startMs: 400, status: 'finished' },
      ],
    },
  ] as never
  assert.equal(firstUpcomingEventId(groups), 'y')
})

ok('firstUpcomingEventId returns null for an empty agenda', () => {
  assert.equal(firstUpcomingEventId([]), null)
})
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `npm run smoke-test`
Expected: FAIL — `firstUpcomingEventId` is not exported from `../src/lib/agenda`.

- [ ] **Step 3: Add `firstUpcomingEventId` to `mobile/src/lib/agenda.ts`**

Append this exported function to the file (it uses the existing `WeekGroup` interface already defined there):

```typescript
/**
 * The event id to pre-select in the iPad Schedule detail pane: the earliest
 * non-finished event in the given week groups, falling back to the earliest
 * event overall, or null when there are no events.
 */
export function firstUpcomingEventId(groups: WeekGroup[]): string | null {
  const all = groups.flatMap((g) => g.events)
  if (all.length === 0) return null
  const pool = all.some((e) => e.status !== 'finished')
    ? all.filter((e) => e.status !== 'finished')
    : all
  return pool.reduce((min, e) => (e.startMs < min.startMs ? e : min)).event.id
}
```

- [ ] **Step 4: Run the tests to verify they pass**

Run: `npm run smoke-test`
Expected: PASS — three new `✓` lines.

- [ ] **Step 5: Add an optional `onPress` to `mobile/src/components/AgendaCard.tsx`**

Add `onPress` to the props interface:

```typescript
interface AgendaCardProps {
  item: AgendaEvent
  timezone: string
  locale: Locale
  now: number
  onPress?: () => void
}
```

Destructure it and use it in place of navigation when provided:

```typescript
export function AgendaCard({ item, timezone, locale, now, onPress }: AgendaCardProps) {
  const router = useRouter()
  const { c } = useTheme()
  const finished = item.status === 'finished'
  const main = item.mainSession

  return (
    <Pressable
      onPress={() => (onPress ? onPress() : router.push(`/race/${item.event.id}`))}
```

(Everything else in the file stays the same.)

- [ ] **Step 6: Make the Schedule screen two-pane on tablet** — edit `mobile/src/app/(tabs)/index.tsx`.

Add imports:

```typescript
import { firstUpcomingEventId } from '~/lib/agenda'
import { useIsTablet } from '~/lib/use-is-tablet'
import { RaceDetail } from '~/components/RaceDetail'
import { SplitView } from '~/components/SplitView'
```

(Adjust the existing `import { buildAgenda, toAgendaEvent, weekKeyOf, ... } from '~/lib/agenda'` line — `firstUpcomingEventId` may be added there instead of a separate line; either is fine.)

Inside `ScheduleScreen`, add the tablet flag and selection state near the other `useState` hooks:

```typescript
  const isTablet = useIsTablet()
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null)
```

After the `agenda` `useMemo`, add an effect that seeds/repairs the pane selection on tablet:

```typescript
  // On tablet, default the detail pane to the nearest upcoming race.
  useEffect(() => {
    if (isTablet && !selectedEventId) {
      setSelectedEventId(firstUpcomingEventId(agenda.current) ?? firstUpcomingEventId(agenda.past))
    }
  }, [isTablet, selectedEventId, agenda])
```

In both places that render `<AgendaCard ... />` (the month-mode `dayEvents.map` and the `SectionList` `renderItem`), pass the tablet press handler. For example the `SectionList` `renderItem` becomes:

```tsx
          renderItem={({ item }) => (
            <AgendaCard
              item={item}
              timezone={timezone}
              locale={locale}
              now={now}
              onPress={isTablet ? () => setSelectedEventId(item.event.id) : undefined}
            />
          )}
```

And the month-mode card:

```tsx
                dayEvents.map((item) => (
                  <AgendaCard
                    key={item.key}
                    item={item}
                    timezone={timezone}
                    locale={locale}
                    now={now}
                    onPress={isTablet ? () => setSelectedEventId(item.event.id) : undefined}
                  />
                ))
```

Finally, wrap the **list region** in a `SplitView` when on tablet. The current `return` renders, inside the `SafeAreaView`, a header `View` followed by the search bar and then the big `empty ? ... : viewMode === 'month' ? ... : <SectionList .../>` expression. Extract that trailing conditional into a `listRegion` variable just before the `return`:

```tsx
  const listRegion = empty ? (
    /* ...existing empty-state JSX... */
  ) : viewMode === 'month' ? (
    /* ...existing month ScrollView JSX... */
  ) : (
    /* ...existing SectionList JSX... */
  )
```

Then change the `return` so the header + search bar stay full-width on top, and the body is either the single list (phone) or the split (tablet):

```tsx
  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-rg-bg">
      {/* header View — unchanged */}
      {/* search bar block — unchanged */}
      {isTablet ? (
        <SplitView
          railWidth={360}
          left={listRegion}
          right={
            selectedEventId ? (
              <RaceDetail id={selectedEventId} />
            ) : (
              <View className="flex-1 items-center justify-center px-8">
                <Text className="text-sm text-rg-text3">{tm('agenda.selectRace', locale)}</Text>
              </View>
            )
          }
        />
      ) : (
        listRegion
      )}
    </SafeAreaView>
  )
```

Keep the existing `<MonthGrid>`/`<SectionList>`/empty JSX exactly as-is inside `listRegion` — only its placement moves.

- [ ] **Step 7: Add the `agenda.selectRace` string** — in `mobile/src/lib/strings.ts`, add the key for both locales next to the other `agenda.*` keys (match the file's existing structure — typically an `en` and a `uk` object):

```typescript
  // en
  'agenda.selectRace': 'Select a race to see details',
  // uk
  'agenda.selectRace': 'Оберіть гонку, щоб побачити деталі',
```

(If `strings.ts` stores locales as two separate maps, add the line to each; follow the exact shape already in the file.)

- [ ] **Step 8: Typecheck**

Run: `npm run typecheck`
Expected: PASS.

- [ ] **Step 9: Manual check**

Phone (Expo Go): Schedule looks unchanged; tapping a card pushes the race detail. iPad (Expo Go, if available): Schedule shows the agenda on the left and a race detail on the right; the nearest upcoming race is pre-selected; tapping a card swaps the right pane without a navigation push; month view still works on the left.

- [ ] **Step 10: Commit**

```bash
git add src/lib/agenda.ts scripts/smoke-test.ts src/components/AgendaCard.tsx "src/app/(tabs)/index.tsx" src/lib/strings.ts
git commit -m "feat(mobile): two-pane Schedule master-detail on iPad"
```

---

## Task 6: Series & Circuits multi-column grids

**Files:**
- Modify: `mobile/src/app/(tabs)/circuits.tsx`
- Modify: `mobile/src/app/(tabs)/series.tsx`

Approach: Circuits is a flat `FlatList` → use `numColumns`. Series is a grouped `SectionList` → chunk each group into rows of N. Phone path (1 column) stays exactly as today; the tablet branch is additive.

- [ ] **Step 1: Circuits grid** — edit `mobile/src/app/(tabs)/circuits.tsx`.

Add the import:

```typescript
import { useGridColumns } from '~/lib/use-is-tablet'
```

Inside `CircuitsScreen`, read the column count:

```typescript
  const cols = useGridColumns()
```

Change the `FlatList` to render in columns. Because `FlatList` requires a fresh `key` when `numColumns` changes, set `key={cols}`, and add a `columnWrapperStyle` when there is more than one column. Wrap each card in a flex cell so widths divide evenly:

```tsx
      <FlatList
        key={cols}
        data={rows}
        numColumns={cols}
        keyExtractor={(row) => row.circuit.id}
        columnWrapperStyle={cols > 1 ? { gap: 12 } : undefined}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        ListEmptyComponent={
          <Text className="pt-16 text-center text-sm text-rg-text3">
            {t('search.noResults', locale)}
          </Text>
        }
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(`/circuit/${item.circuit.id}`)}
            accessibilityRole="button"
            className="mb-1.5 rounded-xl border border-rg-card-border bg-rg-surface px-3 py-2.5"
            style={cols > 1 ? { flex: 1 / cols } : undefined}
          >
            {/* ...existing card inner JSX (country, name, length/turns, series chips) unchanged... */}
          </Pressable>
        )}
      />
```

Note: `style={{ flex: 1 / cols }}` makes each card take an equal share of the row; with `numColumns` RN lays out one row at a time, so a trailing partial row stays left-aligned (acceptable).

- [ ] **Step 2: Typecheck**

Run: `npm run typecheck`
Expected: PASS.

- [ ] **Step 3: Series grid** — edit `mobile/src/app/(tabs)/series.tsx`.

First, extract the row card into a `SeriesCard` component so both the phone list and the tablet grid reuse identical markup. At the bottom of the file (or above `SeriesScreen`), add:

```tsx
function SeriesCard({
  item,
  active,
  now,
  cWidth,
  onToggle,
  onOpen,
}: {
  item: SeriesConfig
  active: boolean
  now: number
  cWidth: ReturnType<typeof useTheme>['c']
  onToggle: () => void
  onOpen: () => void
}) {
  const progress = seasonProgress(item, now)
  return (
    <Pressable
      onPress={onOpen}
      accessibilityRole="button"
      className="mb-1.5 flex-row items-center gap-3 rounded-xl border border-rg-card-border bg-rg-surface px-3 py-2.5"
      style={{ opacity: active ? 1 : 0.55, borderLeftWidth: 4, borderLeftColor: item.color }}
    >
      <View className="w-14 items-center">
        <SeriesLogo seriesId={item.id} height={22} />
      </View>
      <View className="flex-1">
        <Text className="text-sm font-semibold text-rg-text" numberOfLines={1}>
          {item.name}
        </Text>
        <View className="mt-1 flex-row items-center gap-2">
          <View className="h-1 flex-1 overflow-hidden rounded-full bg-rg-elevated">
            <View
              className="h-1 rounded-full"
              style={{
                width: `${progress.total ? Math.round((progress.done / progress.total) * 100) : 0}%`,
                backgroundColor: item.color,
              }}
            />
          </View>
          <Text className="text-[10px] text-rg-text3">
            {progress.done}/{progress.total}
          </Text>
        </View>
      </View>
      <Switch
        value={active}
        onValueChange={onToggle}
        trackColor={{ true: item.color, false: cWidth('border') }}
        thumbColor="#fff"
      />
    </Pressable>
  )
}
```

In `SeriesScreen`, add:

```typescript
import { useGridColumns } from '~/lib/use-is-tablet'
// ...
  const cols = useGridColumns()
```

Replace the inline `renderItem` markup with the extracted card (phone path, 1 column — visually identical):

```tsx
        renderItem={({ item }) => (
          <SeriesCard
            item={item}
            active={followed.has(item.id)}
            now={now}
            cWidth={c}
            onToggle={() => toggleFollowedSeries(item.id)}
            onOpen={() => router.push(`/series/${item.id}`)}
          />
        )}
```

Then make the list grid on tablet. The simplest structural change that keeps section headers: when `cols > 1`, chunk each section's `data` into rows and render a row of cards. Add a `chunk` helper near the top of the file:

```typescript
function chunk<T>(arr: T[], size: number): T[][] {
  if (size <= 1) return arr.map((x) => [x])
  const out: T[][] = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}
```

Build display sections and switch the `SectionList` generics when on tablet. Keep the phone `SectionList` exactly as-is; render a separate grid `SectionList` when `cols > 1`:

```tsx
      {cols > 1 ? (
        <SectionList
          sections={sections.map((s) => ({ title: s.title, data: chunk(s.data, cols) }))}
          keyExtractor={(row: SeriesConfig[]) => row.map((s) => s.id).join('-')}
          stickySectionHeadersEnabled={false}
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
          ListEmptyComponent={
            <Text className="pt-16 text-center text-sm text-rg-text3">
              {t('search.noResults', locale)}
            </Text>
          }
          renderSectionHeader={({ section }) => (
            <Text className="mb-2 mt-4 text-xs font-bold uppercase tracking-widest text-rg-text3">
              {section.title}
            </Text>
          )}
          renderItem={({ item: row }: { item: SeriesConfig[] }) => (
            <View className="flex-row gap-3">
              {row.map((s) => (
                <View key={s.id} style={{ flex: 1 / cols }}>
                  <SeriesCard
                    item={s}
                    active={followed.has(s.id)}
                    now={now}
                    cWidth={c}
                    onToggle={() => toggleFollowedSeries(s.id)}
                    onOpen={() => router.push(`/series/${s.id}`)}
                  />
                </View>
              ))}
              {row.length < cols &&
                Array.from({ length: cols - row.length }).map((_, i) => (
                  <View key={`spacer-${i}`} style={{ flex: 1 / cols }} />
                ))}
            </View>
          )}
        />
      ) : (
        /* ...existing phone SectionList, unchanged... */
      )}
```

- [ ] **Step 4: Typecheck**

Run: `npm run typecheck`
Expected: PASS.

- [ ] **Step 5: Manual check**

Phone: Series and Circuits look unchanged (single column). iPad: both render 2 columns in portrait, 3 in landscape; tapping a card pushes its detail; section headers (Series) span the full width above each grid block.

- [ ] **Step 6: Commit**

```bash
git add "src/app/(tabs)/circuits.tsx" "src/app/(tabs)/series.tsx"
git commit -m "feat(mobile): multi-column Series & Circuits grids on iPad"
```

---

## Task 7: Standings drivers + constructors side by side

**Files:**
- Modify: `mobile/src/app/(tabs)/standings.tsx`

Approach: extract the per-tab row list into a small `StandingsColumn` so it can render once (phone, toggle) or twice (tablet, side by side). On tablet with constructors present, drop the toggle and show both columns.

- [ ] **Step 1: Refactor `standings.tsx` to compute rows per tab and render via a column component.**

Add the import:

```typescript
import { useIsTablet } from '~/lib/use-is-tablet'
```

The existing `rows` `useMemo` builds rows for the single `activeTab`. Generalize it into a helper that builds rows for a given tab, so both columns can be produced. Replace the `rows` memo with a `buildRows` callback plus the two derived lists:

```typescript
  const buildRows = useMemo(() => {
    return (which: 'drivers' | 'constructors'): Row[] => {
      if (!activeClass) return []
      const q = query.trim().toLowerCase()
      const list: Row[] =
        which === 'drivers'
          ? activeClass.drivers.map((d) => {
              const driver = getDriver(d.driverId)
              return {
                position: d.position,
                name: driver?.shortName ?? d.driverId,
                code: driver?.nationality ? countryCode(driver.nationality) : '',
                team: getTeam(d.teamId)?.name ?? d.teamId,
                points: d.points,
                wins: d.wins,
                href: `/driver/${d.driverId}`,
              }
            })
          : activeClass.constructors.map((cRow) => ({
              position: cRow.position,
              name: getTeam(cRow.teamId)?.name ?? cRow.teamId,
              code: '',
              team: '',
              points: cRow.points,
              wins: cRow.wins,
              href: `/team/${cRow.teamId}`,
            }))
      if (!q) return list
      return list.filter(
        (r) => r.name.toLowerCase().includes(q) || r.team.toLowerCase().includes(q),
      )
    }
  }, [activeClass, query])

  const isTablet = useIsTablet()
  const showBoth = isTablet && hasConstructors
```

Add a `StandingsColumn` component (above the screen component) that renders a list of rows — this is the existing `FlatList`'s `renderItem` markup lifted out:

```tsx
function StandingsColumn({
  rows,
  activeTab,
  meta,
  locale,
  c,
  onOpen,
}: {
  rows: Row[]
  activeTab: 'drivers' | 'constructors'
  meta: ReturnType<typeof getSeriesMeta>
  locale: Locale
  c: ReturnType<typeof useTheme>['c']
  onOpen: (href: string) => void
}) {
  return (
    <FlatList
      data={rows}
      keyExtractor={(r) => `${activeTab}-${r.position}-${r.name}`}
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
      ListEmptyComponent={
        <Text className="pt-16 text-center text-sm text-rg-text3">
          {t('error.noData', locale)}
        </Text>
      }
      renderItem={({ item }) => (
        <Pressable
          onPress={() => onOpen(item.href)}
          accessibilityRole="button"
          className="mb-1 flex-row items-center gap-3 rounded-xl border border-rg-card-border bg-rg-surface px-3 py-2.5"
          style={{
            backgroundColor: item.position <= 3 ? MEDAL_BG[item.position - 1] : undefined,
            borderLeftWidth: 3,
            borderLeftColor: meta?.color ?? c('border'),
          }}
        >
          <Text className="w-7 text-center text-sm font-bold text-rg-text2">{item.position}</Text>
          <View className="flex-1">
            <View className="flex-row items-center gap-1.5">
              {item.code ? <CountryCode code={item.code} /> : null}
              <Text className="flex-1 text-sm font-semibold text-rg-text" numberOfLines={1}>
                {item.name}
              </Text>
            </View>
            {item.team ? (
              <Text className="mt-0.5 text-xs text-rg-text3" numberOfLines={1}>
                {item.team}
              </Text>
            ) : null}
          </View>
          <View className="items-end">
            <Text className="text-sm font-bold text-rg-text">{item.points}</Text>
            <Text className="text-[10px] text-rg-text3">
              {tm('standings.wins', locale)}: {item.wins}
            </Text>
          </View>
        </Pressable>
      )}
    />
  )
}
```

(Add `type Locale` to the existing `@/lib/i18n` import: `import { t, type Locale } from '@/lib/i18n'`.)

- [ ] **Step 2: Render one column (phone) or two (tablet).**

Replace the Drivers/Constructors toggle `View` and the old single `FlatList` at the bottom of `StandingsScreen` with:

```tsx
      {!showBoth && (
        <View className="mx-4 mb-2 flex-row overflow-hidden rounded-lg border border-rg-border">
          {/* ...existing Drivers/Constructors toggle buttons, unchanged... */}
        </View>
      )}

      {showBoth ? (
        <View className="flex-1 flex-row">
          <View className="flex-1">
            <Text className="px-4 pb-1 text-xs font-bold uppercase tracking-widest text-rg-text3">
              {tm('standings.drivers', locale)}
            </Text>
            <StandingsColumn
              rows={buildRows('drivers')}
              activeTab="drivers"
              meta={meta}
              locale={locale}
              c={c}
              onOpen={(href) => router.push(href as Href)}
            />
          </View>
          <View className="flex-1 border-l border-rg-border">
            <Text className="px-4 pb-1 text-xs font-bold uppercase tracking-widest text-rg-text3">
              {tm('standings.constructors', locale)}
            </Text>
            <StandingsColumn
              rows={buildRows('constructors')}
              activeTab="constructors"
              meta={meta}
              locale={locale}
              c={c}
              onOpen={(href) => router.push(href as Href)}
            />
          </View>
        </View>
      ) : (
        <StandingsColumn
          rows={buildRows(activeTab)}
          activeTab={activeTab}
          meta={meta}
          locale={locale}
          c={c}
          onOpen={(href) => router.push(href as Href)}
        />
      )}
```

(The `ListEmptyComponent` previously varied by `query`; the extracted column always shows `error.noData`. If you want to keep the "no search results" copy, pass a `query` prop into `StandingsColumn` and branch the same way the original did — optional polish, not required for parity on the common path.)

- [ ] **Step 3: Typecheck**

Run: `npm run typecheck`
Expected: PASS.

- [ ] **Step 4: Manual check**

Phone: standings unchanged — year/series/class pickers, search, Drivers/Constructors toggle, single list. iPad: for a series with constructors (e.g. F1), the toggle is gone and Drivers + Constructors show side by side with labels; rows still open driver/team detail; single-class/no-constructor series show one column.

- [ ] **Step 5: Commit**

```bash
git add "src/app/(tabs)/standings.tsx"
git commit -m "feat(mobile): side-by-side Standings columns on iPad"
```

---

## Task 8: Settings split view

**Files:**
- Modify: `mobile/src/app/(tabs)/settings.tsx`

Approach: the existing screen renders six `<Section>` blocks in one `ScrollView`. Extract each block into a render function keyed by id. Phone renders them all (unchanged). Tablet renders a left section list + the active section on the right via `SplitView`.

- [ ] **Step 1: Key the sections.** In `mobile/src/app/(tabs)/settings.tsx`, add imports:

```typescript
import { useIsTablet } from '~/lib/use-is-tablet'
import { SplitView } from '~/components/SplitView'
```

Inside `SettingsScreen`, after the existing hooks, build a list of sections. Each `render` returns the existing `<Section>...</Section>` JSX block verbatim (cut from the current `ScrollView` body):

```tsx
  const isTablet = useIsTablet()
  const [activeSection, setActiveSection] = useState('display')

  const sections: Array<{ id: string; label: string; render: () => ReactNode }> = [
    {
      id: 'display',
      label: t('settings.theme', locale),
      render: () => (
        <Section title={t('settings.theme', locale)}>
          {/* theme / language / timezone Rows — existing JSX */}
        </Section>
      ),
    },
    {
      id: 'spoiler',
      label: t('spoiler.title', locale),
      render: () => (
        <Section title={t('spoiler.title', locale)}>{/* existing spoiler Row */}</Section>
      ),
    },
    {
      id: 'sessions',
      label: t('settings.sessions', locale),
      render: () => (
        <Section title={t('settings.sessions', locale)}>{/* existing sessions block */}</Section>
      ),
    },
    {
      id: 'notifications',
      label: t('notify.title', locale),
      render: () => (
        <Section title={t('notify.title', locale)}>{/* existing notifications block */}</Section>
      ),
    },
    {
      id: 'data',
      label: tm('settings.dataSync', locale),
      render: () => (
        <Section title={tm('settings.dataSync', locale)}>{/* existing data block */}</Section>
      ),
    },
    {
      id: 'support',
      label: t('footer.support', locale),
      render: () => (
        <Section title={t('footer.support', locale)}>{/* existing support block */}</Section>
      ),
    },
  ]
```

- [ ] **Step 2: Render phone (all stacked) vs tablet (split).** Replace the body of the `return`:

```tsx
  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-rg-bg">
      {isTablet ? (
        <>
          <Text className="px-4 pb-3 pt-3 text-xl font-extrabold tracking-widest text-rg-text">
            {t('settings.title', locale)}
          </Text>
          <SplitView
            railWidth={260}
            left={
              <ScrollView contentContainerStyle={{ padding: 12 }}>
                {sections.map((s) => (
                  <Pressable
                    key={s.id}
                    onPress={() => setActiveSection(s.id)}
                    accessibilityRole="button"
                    className={
                      activeSection === s.id
                        ? 'mb-1 rounded-xl bg-rg-elevated px-3 py-2.5'
                        : 'mb-1 rounded-xl px-3 py-2.5'
                    }
                  >
                    <Text
                      className={
                        activeSection === s.id
                          ? 'text-sm font-bold text-rg-text'
                          : 'text-sm font-semibold text-rg-text3'
                      }
                    >
                      {s.label}
                    </Text>
                  </Pressable>
                ))}
              </ScrollView>
            }
            right={
              <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 32, paddingTop: 8 }}>
                {sections.find((s) => s.id === activeSection)?.render()}
              </ScrollView>
            }
          />
        </>
      ) : (
        <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 32 }}>
          <Text className="pb-3 pt-3 text-xl font-extrabold tracking-widest text-rg-text">
            {t('settings.title', locale)}
          </Text>
          {sections.map((s) => (
            <View key={s.id}>{s.render()}</View>
          ))}
        </ScrollView>
      )}

      <TimezonePicker
        visible={tzPickerOpen}
        locale={locale}
        onClose={() => setTzPickerOpen(false)}
        onPick={settings.setTimezone}
      />
    </SafeAreaView>
  )
```

Note: the phone branch stacks the six section blocks in the same order as today, so it remains visually identical. `ReactNode` is already imported in this file.

- [ ] **Step 3: Typecheck**

Run: `npm run typecheck`
Expected: PASS.

- [ ] **Step 4: Manual check**

Phone: Settings looks and behaves exactly as before (one scroll, all sections, timezone modal works). iPad: left rail lists the six sections; tapping one shows it on the right; theme/language/timezone, notifications, etc. all work; the timezone modal still opens.

- [ ] **Step 5: Commit**

```bash
git add "src/app/(tabs)/settings.tsx"
git commit -m "feat(mobile): split-view Settings on iPad"
```

---

## Task 9: Final verification

**Files:** none (verification only)

- [ ] **Step 1: Full typecheck**

Run: `npm run typecheck`
Expected: PASS, no errors.

- [ ] **Step 2: Full smoke-test**

Run: `npm run smoke-test`
Expected: PASS — including the responsive and `firstUpcomingEventId` cases added in Tasks 1 and 5.

- [ ] **Step 3: Production bundle builds**

Run: `npx expo export -p ios --output-dir /tmp/rg-ipad-export`
Expected: completes without errors (Metro bundles the iOS JS). Delete `/tmp/rg-ipad-export` afterward.

- [ ] **Step 4: Manual device matrix**

- iPhone (Expo Go): every tab visually unchanged; portrait-locked (rotating the device does not rotate the app).
- iPad (Expo Go or dev build): rotates to landscape; Schedule two-pane with pre-selected race and tap-to-swap; Series/Circuits 2-col portrait / 3-col landscape; Standings side by side for F1; Settings split view; breakpoint flip when entering/leaving Split View.

- [ ] **Step 5: Final commit (if any docs/cleanup remain)**

```bash
git add -A
git commit -m "chore(mobile): iPad adaptive layouts verification pass" || echo "nothing to commit"
```

---

## Self-review notes

- **Spec coverage:** Foundation/breakpoint + `supportsTablet` + orientation (Tasks 1–2), `SplitView` (Task 3), Schedule two-pane incl. `RaceDetail` extraction + nearest-upcoming default (Tasks 4–5), Series/Circuits grids (Task 6), Standings side-by-side (Task 7), Settings split (Task 8), testing (Task 9). All spec sections map to a task.
- **Phone-safety:** every screen change is gated on `useIsTablet()`/`useGridColumns()`/`isTablet`, with the phone branch left as the existing code. `RaceDetail` and `SeriesCard`/`StandingsColumn` extractions render byte-identical markup on phone.
- **Type consistency:** `firstUpcomingEventId(WeekGroup[]) → string | null`, `gridColumns/useGridColumns → number`, `isTabletWidth/isTabletDevice/useIsTablet → boolean`, `RaceDetail({ id }: { id: string })`, `AgendaCard` `onPress?: () => void` — names match across tasks.
- **Known minor deviation from spec:** split `use-is-tablet.ts` into `responsive.ts` (pure) + `use-is-tablet.ts` (hook) for node testability; orientation uses device-based classification. Documented in the header.
