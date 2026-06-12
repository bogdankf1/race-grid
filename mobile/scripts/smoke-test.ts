// Logic smoke test — runs under Node (npx tsx scripts/smoke-test.ts) against
// the real bundled season data. Exercises the pure layer only: agenda
// grouping, overlay merging, results precedence, notification planning.

import { buildAgenda, eventStatus, weekKeyOf } from '../src/lib/agenda'
import {
  buildSeriesList,
  collectEventResults,
  entriesToEvents,
  SEASON,
} from '../src/lib/data'
import { formatWeekLabel } from '../src/lib/format'
import { planNotifications } from '../src/lib/notification-plan'
import type { CalendarEntry } from '../src/lib/mcp'

const assert = {
  ok(cond: unknown, msg?: string): void {
    if (!cond) throw new Error(msg ?? 'assertion failed')
  },
  equal(actual: unknown, expected: unknown, msg?: string) {
    if (actual !== expected) {
      throw new Error(msg ?? `expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`)
    }
  },
  deepEqual(actual: unknown, expected: unknown, msg?: string) {
    const a = JSON.stringify(actual)
    const b = JSON.stringify(expected)
    if (a !== b) throw new Error(msg ?? `deepEqual failed:\n  ${a}\n  ${b}`)
  },
  match(value: string, re: RegExp, msg?: string) {
    if (!re.test(value)) throw new Error(msg ?? `"${value}" does not match ${re}`)
  },
}

let passed = 0
function ok(name: string, fn: () => void) {
  fn()
  passed++
  console.log(`  ✓ ${name}`)
}

console.log(`Season under test: ${SEASON}`)

// ───────── weekKeyOf ─────────
ok('weekKeyOf maps any weekday to its Monday', () => {
  assert.equal(weekKeyOf('2026-06-08'), '2026-06-08') // Monday
  assert.equal(weekKeyOf('2026-06-12'), '2026-06-08') // Friday
  assert.equal(weekKeyOf('2026-06-14'), '2026-06-08') // Sunday
  assert.equal(weekKeyOf('2026-06-15'), '2026-06-15') // next Monday
})

ok('formatWeekLabel renders a Mon–Sun range', () => {
  const label = formatWeekLabel('2026-06-08', 'en')
  assert.match(label, /Jun 8/)
  assert.match(label, /Jun 14/)
})

// ───────── agenda ─────────
const seriesList = buildSeriesList()
assert.ok(seriesList.length > 20, `expected bundled series, got ${seriesList.length}`)
const f1 = seriesList.find((s) => s.id === 'f1')!
assert.ok(f1, 'f1 missing from bundled data')

// A fixed "now" mid-season: Friday of the Barcelona F1 weekend.
const NOW = new Date('2026-06-12T10:00:00Z').getTime()

ok('buildAgenda groups followed-series events by week, splits past/current', () => {
  const agenda = buildAgenda(seriesList, ['f1'], 'Europe/Kyiv', NOW)
  const all = [...agenda.past, ...agenda.current]
  assert.ok(all.length > 0, 'agenda is empty')
  for (const group of all) {
    for (const ev of group.events) {
      assert.equal(ev.seriesId, 'f1')
      assert.equal(weekKeyOf(ev.startDate), group.weekKey)
    }
  }
  // Weeks ascending and disjoint between past/current.
  const keys = all.map((g) => g.weekKey)
  assert.deepEqual(keys, [...keys].sort())
  for (const g of agenda.past) assert.ok(g.weekKey < '2026-06-08')
  for (const g of agenda.current) assert.ok(g.weekKey >= '2026-06-08')
  // The Barcelona weekend lands in the current week's group.
  const thisWeek = agenda.current[0]
  assert.equal(thisWeek.weekKey, '2026-06-08')
  assert.ok(thisWeek.events.some((e) => e.event.id === 'f1-2026-spain-barcelona'))
})

ok('eventStatus follows web live/finished thresholds (120 min default)', () => {
  const barcelona = f1.events.find((e) => e.id === 'f1-2026-spain-barcelona')!
  // During Friday practice 1 (11:30–12:30 UTC) the event is live.
  assert.equal(eventStatus(barcelona, new Date('2026-06-12T11:45:00Z').getTime()), 'live')
  // Before the weekend it is upcoming; long after the race it is finished.
  assert.equal(eventStatus(barcelona, new Date('2026-06-10T00:00:00Z').getTime()), 'upcoming')
  assert.equal(eventStatus(barcelona, new Date('2026-06-20T00:00:00Z').getTime()), 'finished')
})

// ───────── calendar overlay ─────────
ok('MCP overlay wins per series, bundled fills the rest', () => {
  const fake: CalendarEntry[] = [
    {
      eventId: 'f1-2026-test',
      round: 1,
      name: 'Overlay Test GP',
      seriesId: 'f1',
      circuitId: 'circuit-de-monaco',
      circuitName: 'Circuit de Monaco',
      country: 'Monaco',
      countryCode: 'MC',
      startUtc: '2026-07-01T10:00:00.000Z',
      endUtc: '2026-07-01T12:00:00.000Z',
      sessions: [
        { type: 'race', label: 'Race', startUtc: '2026-07-01T10:00:00Z', durationMinutes: 120 },
      ],
    },
  ]
  const merged = buildSeriesList(entriesToEvents(fake))
  const mergedF1 = merged.find((s) => s.id === 'f1')!
  assert.equal(mergedF1.events.length, 1)
  assert.equal(mergedF1.events[0].name, 'Overlay Test GP')
  // Untouched series keep their bundled calendars.
  const motogp = merged.find((s) => s.id === 'motogp')!
  const bundledMotogp = seriesList.find((s) => s.id === 'motogp')!
  assert.equal(motogp.events.length, bundledMotogp.events.length)
})

// ───────── results precedence ─────────
ok('collectEventResults: bundled results appear once per session type', () => {
  const australia = f1.events.find((e) => e.id === 'f1-2026-australia')!
  const pairs = collectEventResults(australia, NOW)
  assert.ok(pairs.length >= 2, 'expected qualifying + race results')
  const types = pairs.map((p) => p.session.type)
  assert.equal(new Set(types).size, types.length, 'duplicate session types')
})

ok('collectEventResults: remote overlay wins over bundled snapshot', () => {
  const australia = f1.events.find((e) => e.id === 'f1-2026-australia')!
  const pairs = collectEventResults(australia, NOW, [
    {
      sessionType: 'race',
      overall: { drivers: ['Remote Winner'], team: 'Remote Team' },
    },
  ])
  const race = pairs.find((p) => p.session.type === 'race')!
  assert.equal(race.result.overall.drivers[0], 'Remote Winner')
  // Qualifying still comes from the bundled snapshot.
  const quali = pairs.find((p) => p.session.type === 'qualifying')
  assert.ok(quali && quali.result.overall.drivers.length > 0)
})

// ───────── notification planning ─────────
ok('planNotifications matches web wording and respects lead/limit/TBA', () => {
  const prefs = { enabled: true, leadMinutes: 30 as const, seriesIds: ['f1'] }
  const plan = planNotifications(seriesList, ['f1'], prefs, NOW)
  assert.ok(plan.length > 0, 'empty plan')
  assert.ok(plan.length <= 60, 'exceeds iOS budget')
  for (const item of plan) {
    assert.match(item.title, /^F1: /)
    assert.match(item.body, /— starts in 30 min$/)
    assert.ok(item.triggerAt > NOW)
  }
  // Sorted soonest-first; first reminder is for the ongoing Barcelona weekend.
  const sorted = [...plan].sort((a, b) => a.triggerAt - b.triggerAt)
  assert.deepEqual(plan, sorted)
  assert.equal(plan[0].eventId, 'f1-2026-spain-barcelona')

  // Disabled prefs or unfollowed series produce nothing.
  assert.equal(planNotifications(seriesList, ['f1'], { ...prefs, enabled: false }, NOW).length, 0)
  assert.equal(planNotifications(seriesList, [], prefs, NOW).length, 0)
})

console.log(`\nAll ${passed} smoke tests passed.`)
