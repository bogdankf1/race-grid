// Pure agenda construction: the season's events for followed series, grouped
// by race week (Mon–Sun, web convention `weekStartsOn: 1`) in the user's
// timezone. No React/RN imports — covered by scripts/smoke-test.ts.

import { getCircuit } from '@/data/circuits'
import { getLocalDate } from '@/lib/timezone'
import type { RaceEvent, SeriesConfig, Session, SessionType } from '@/lib/types'
import { DEFAULT_SESSION_MINUTES, sessionEndMs } from '~/lib/data'

/** Session types that count as the headline "race" of an event (web UpcomingRaces). */
export const RACE_TYPES = new Set(['race', 'endurance', 'sprint', 'stage'])

export type EventStatus = 'upcoming' | 'live' | 'finished'

export interface AgendaEvent {
  key: string
  seriesId: string
  seriesShortName: string
  seriesColor: string
  seriesTextColor: string
  event: RaceEvent
  /** First/last session boundaries in UTC ms. */
  startMs: number
  endMs: number
  /** Local (user-tz) ISO dates of the first and last session. */
  startDate: string
  endDate: string
  circuitName: string
  countryCode: string
  /** First race-type session, if any — the headline session of the weekend. */
  mainSession: Session | null
  status: EventStatus
}

export interface WeekGroup {
  /** ISO date of the Monday that starts this week, in the user's timezone. */
  weekKey: string
  events: AgendaEvent[]
}

export interface Agenda {
  past: WeekGroup[]
  current: WeekGroup[]
}

/** Monday of the week containing the given local ISO date. */
export function weekKeyOf(localDate: string): string {
  const d = new Date(localDate + 'T12:00:00Z')
  const sinceMonday = (d.getUTCDay() + 6) % 7
  d.setUTCDate(d.getUTCDate() - sinceMonday)
  return d.toISOString().slice(0, 10)
}

export function eventStatus(event: RaceEvent, now: number): EventStatus {
  let allFinished = true
  for (const s of event.sessions) {
    const startMs = new Date(s.startUtc).getTime()
    const endMs = startMs + (s.durationMinutes || DEFAULT_SESSION_MINUTES) * 60_000
    if (now >= startMs && now < endMs) return 'live'
    if (now < endMs) allFinished = false
  }
  return allFinished ? 'finished' : 'upcoming'
}

export function toAgendaEvent(
  series: SeriesConfig,
  event: RaceEvent,
  timezone: string,
  now: number,
  visibleTypes?: SessionType[],
): AgendaEvent | null {
  const sessions = visibleTypes
    ? event.sessions.filter((s) => visibleTypes.includes(s.type))
    : event.sessions
  if (sessions.length === 0) return null
  const sorted = [...sessions].sort(
    (a, b) => new Date(a.startUtc).getTime() - new Date(b.startUtc).getTime(),
  )
  const startMs = new Date(sorted[0].startUtc).getTime()
  const endMs = Math.max(...sorted.map(sessionEndMs))
  const mainSession = sorted.find((s) => RACE_TYPES.has(s.type)) ?? null
  return {
    key: `${series.id}:${event.id}`,
    seriesId: series.id,
    seriesShortName: series.shortName,
    seriesColor: series.color,
    seriesTextColor: series.textColor,
    event,
    startMs,
    endMs,
    startDate: getLocalDate(sorted[0].startUtc, timezone),
    endDate: getLocalDate(sorted[sorted.length - 1].startUtc, timezone),
    circuitName: getCircuit(event.circuitId)?.name ?? event.circuitId,
    countryCode: getCircuit(event.circuitId)?.countryCode ?? '',
    mainSession,
    status: eventStatus(event, now),
  }
}

/**
 * Build the agenda: every event of the followed series, grouped by week and
 * split into `past` (week ended before the current one) and `current` (this
 * week and later). Weeks ascending, events within a week by start time.
 */
export function buildAgenda(
  seriesList: SeriesConfig[],
  followedIds: string[],
  timezone: string,
  now: number,
  visibleTypes?: SessionType[],
): Agenda {
  const followed = new Set(followedIds)
  const events: AgendaEvent[] = []
  for (const series of seriesList) {
    if (!followed.has(series.id)) continue
    for (const event of series.events) {
      const agendaEvent = toAgendaEvent(series, event, timezone, now, visibleTypes)
      if (agendaEvent) events.push(agendaEvent)
    }
  }
  events.sort((a, b) => a.startMs - b.startMs || a.key.localeCompare(b.key))

  const groups = new Map<string, AgendaEvent[]>()
  for (const ev of events) {
    const key = weekKeyOf(ev.startDate)
    const group = groups.get(key)
    if (group) group.push(ev)
    else groups.set(key, [ev])
  }

  const thisWeek = weekKeyOf(getLocalDate(new Date(now).toISOString(), timezone))
  const past: WeekGroup[] = []
  const current: WeekGroup[] = []
  for (const [weekKey, weekEvents] of [...groups.entries()].sort(([a], [b]) =>
    a.localeCompare(b),
  )) {
    ;(weekKey < thisWeek ? past : current).push({ weekKey, events: weekEvents })
  }
  return { past, current }
}
