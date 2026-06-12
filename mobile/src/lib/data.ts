// Data service: bundled repo data (instant, offline) overlaid with the latest
// calendar fetched from the race-grid MCP server (kept in AsyncStorage).
//
// Bundled layer — imported straight from the web app's src/ via the @/ alias:
//   - series metadata, groups, families (series-registry)
//   - the current season's events (eagerly loaded in the registry)
//   - circuits and recorded results
// Remote layer — `search_races` for the whole year refreshes calendars,
// `get_race_results` fills in results newer than the bundled snapshot.

import {
  AVAILABLE_YEARS,
  SERIES_META,
  getSeriesForYear,
  isSeriesVisible,
} from '@/data/series-registry'
import { getResult } from '@/data/results'
import type { RaceEvent, RaceResult, SeriesConfig, Session, SessionType } from '@/lib/types'
import type { CalendarEntry, RemoteSessionResult } from '~/lib/mcp'

/** The season the app shows — newest year with bundled data. */
export const SEASON = AVAILABLE_YEARS[0]

/** Per-web conventions a session without a duration is assumed to run 2h. */
export const DEFAULT_SESSION_MINUTES = 120

export function sessionEndMs(session: Session): number {
  return (
    new Date(session.startUtc).getTime() +
    (session.durationMinutes || DEFAULT_SESSION_MINUTES) * 60_000
  )
}

/** TBA convention from the web app's DayDetail: explicit flag or a bare-midnight placeholder. */
export function isTba(session: Session): boolean {
  return Boolean(session.tba) || session.startUtc.endsWith('T00:00:00Z')
}

// ───────── Calendar overlay ─────────

/** Convert MCP calendar entries to the bundled RaceEvent shape, keyed by series. */
export function entriesToEvents(entries: CalendarEntry[]): Record<string, RaceEvent[]> {
  const bySeries: Record<string, RaceEvent[]> = {}
  for (const entry of entries) {
    const event: RaceEvent = {
      id: entry.eventId,
      round: entry.round,
      name: entry.name,
      circuitId: entry.circuitId,
      sessions: entry.sessions.map((s) => ({
        type: s.type,
        label: s.label,
        startUtc: s.startUtc,
        durationMinutes: s.durationMinutes,
        tba: s.tba,
      })),
    }
    ;(bySeries[entry.seriesId] ??= []).push(event)
  }
  return bySeries
}

/**
 * Build the season's series list. When a refreshed calendar overlay exists it
 * wins per series; bundled data fills any series the overlay is missing.
 */
export function buildSeriesList(overlay?: Record<string, RaceEvent[]> | null): SeriesConfig[] {
  const bundled = getSeriesForYear(SEASON)
  if (!overlay) return bundled
  const bundledById = new Map(bundled.map((s) => [s.id, s]))
  return SERIES_META.filter((meta) => isSeriesVisible(meta.id))
    .map((meta) => ({
      ...meta,
      events: overlay[meta.id] ?? bundledById.get(meta.id)?.events ?? [],
    }))
    .filter((s) => s.events.length > 0)
}

export interface EventRef {
  series: SeriesConfig
  event: RaceEvent
}

export function buildEventIndex(seriesList: SeriesConfig[]): Map<string, EventRef> {
  const index = new Map<string, EventRef>()
  for (const series of seriesList) {
    for (const event of series.events) {
      index.set(event.id, { series, event })
    }
  }
  return index
}

// ───────── Results ─────────

/** Order in which result-bearing session types are shown (web EventCard). */
export const RESULT_TYPES: SessionType[] = [
  'race',
  'endurance',
  'sprint',
  'sprint_qualifying',
  'qualifying',
  'hyperpole',
  'stage',
]

export interface SessionResultPair {
  session: Session
  result: RaceResult
}

/**
 * Results for an event's finished sessions. The remote overlay (latest
 * deployed data) wins over the bundled snapshot baked in at build time.
 * Mirrors the dedup logic in the web EventCard: one result per session type,
 * only for sessions that have ended.
 */
export function collectEventResults(
  event: RaceEvent,
  now: number,
  remote?: RemoteSessionResult[] | null,
): SessionResultPair[] {
  const remoteByType = new Map<SessionType, RaceResult>()
  for (const r of remote ?? []) {
    remoteByType.set(r.sessionType, {
      overall: r.overall,
      classes: r.classes,
      fastestLap: r.fastestLap,
    })
  }

  const seen = new Set<SessionType>()
  const pairs: SessionResultPair[] = []
  const sessions = [...event.sessions].sort(
    (a, b) => new Date(a.startUtc).getTime() - new Date(b.startUtc).getTime(),
  )
  for (const session of sessions) {
    if (!RESULT_TYPES.includes(session.type)) continue
    if (now < sessionEndMs(session)) continue
    if (seen.has(session.type)) continue
    const result = remoteByType.get(session.type) ?? getResult(event.id, session.type) ?? null
    if (!result) continue
    seen.add(session.type)
    pairs.push({ session, result })
  }
  return pairs
}

/** True when at least one result-bearing session of the event has ended. */
export function hasFinishedResultSession(event: RaceEvent, now: number): boolean {
  return event.sessions.some(
    (s) => RESULT_TYPES.includes(s.type) && now >= sessionEndMs(s) && !isTba(s),
  )
}
