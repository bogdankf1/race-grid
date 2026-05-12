// Adapter over race-grid's data layer. The MCP tools call into this module
// only, never into `@/data/...` directly — so if the underlying schema shifts,
// this is the single file to fix.

import {
  SERIES_META,
  SERIES_GROUPS,
  AVAILABLE_YEARS,
  getSeriesForYear,
  loadYear,
} from '@/data/series-registry'
import { getCircuit } from '@/data/circuits'
import { getResult } from '@/data/results'
import { getStandings } from '@/data/standings'
import { getDriver } from '@/data/drivers'
import { getTeam } from '@/data/teams'
import type { RaceEvent, Session, SessionType } from '@/lib/types'

// One-time eager load of all historical years. Returns a singleton promise so
// concurrent requests on a cold serverless instance share the same boot work.
let bootPromise: Promise<void> | null = null
export function ensureLoaded(): Promise<void> {
  if (!bootPromise) {
    bootPromise = Promise.all(AVAILABLE_YEARS.map((y) => loadYear(y))).then(() => {})
  }
  return bootPromise
}

// ───────── Series ─────────

export interface SeriesSummary {
  id: string
  name: string
  shortName: string
  group: string | null
  color: string
  wikipedia?: string
}

const GROUP_LABEL: Record<string, string> = {
  'group.openwheel': 'Open Wheel',
  'group.endurance': 'Endurance',
  'group.gt': 'GT / Touring',
  'group.stock': 'Stock Car',
  'group.rally': 'Rally',
  'group.motorcycle': 'Motorcycle',
  'group.special': 'Special Events',
}

function groupForSeries(seriesId: string): string | null {
  for (const g of SERIES_GROUPS) {
    if (g.ids.includes(seriesId)) return GROUP_LABEL[g.labelKey] ?? g.labelKey
  }
  return null
}

export function listSeries(): SeriesSummary[] {
  return SERIES_META.map((s) => ({
    id: s.id,
    name: s.name,
    shortName: s.shortName,
    group: groupForSeries(s.id),
    color: s.color,
    wikipedia: s.wikipedia,
  }))
}

export function getSeriesMeta(seriesId: string): SeriesSummary | null {
  return listSeries().find((s) => s.id === seriesId) ?? null
}

export function listAvailableYears(): number[] {
  return [...AVAILABLE_YEARS].sort((a, b) => a - b)
}

// ───────── Calendar ─────────

export interface CalendarEntry {
  eventId: string
  round?: number
  name: string
  seriesId: string
  circuitId: string
  circuitName: string
  country: string
  countryCode: string
  startUtc: string
  endUtc: string
  sessions: Array<{
    type: SessionType
    label: string
    startUtc: string
    durationMinutes?: number
    tba?: boolean
  }>
}

function sessionEnd(s: Session): string {
  if (!s.durationMinutes) return s.startUtc
  return new Date(new Date(s.startUtc).getTime() + s.durationMinutes * 60_000).toISOString()
}

function eventToEntry(seriesId: string, ev: RaceEvent): CalendarEntry {
  const circuit = getCircuit(ev.circuitId)
  const starts = ev.sessions.map((s) => new Date(s.startUtc).getTime())
  const ends = ev.sessions.map((s) => new Date(sessionEnd(s)).getTime())
  return {
    eventId: ev.id,
    round: ev.round,
    name: ev.name,
    seriesId,
    circuitId: ev.circuitId,
    circuitName: circuit?.name ?? ev.circuitId,
    country: circuit?.country ?? 'Unknown',
    countryCode: circuit?.countryCode ?? '',
    startUtc: new Date(Math.min(...starts)).toISOString(),
    endUtc: new Date(Math.max(...ends)).toISOString(),
    sessions: ev.sessions.map((s) => ({
      type: s.type,
      label: s.label,
      startUtc: s.startUtc,
      durationMinutes: s.durationMinutes,
      tba: s.tba,
    })),
  }
}

export function getCalendar(seriesId: string, year: number): CalendarEntry[] {
  const series = getSeriesForYear(year).find((s) => s.id === seriesId)
  if (!series) return []
  return series.events.map((ev) => eventToEntry(seriesId, ev))
}

export function getAllCalendars(year: number): CalendarEntry[] {
  return getSeriesForYear(year).flatMap((s) => s.events.map((ev) => eventToEntry(s.id, ev)))
}

// ───────── Next race ─────────

export function findNextRace(now: Date, seriesId?: string): CalendarEntry | null {
  const year = now.getUTCFullYear()
  const candidates = (seriesId ? getCalendar(seriesId, year) : getAllCalendars(year))
    .filter((e) => new Date(e.endUtc).getTime() > now.getTime())
    .sort((a, b) => new Date(a.startUtc).getTime() - new Date(b.startUtc).getTime())
  return candidates[0] ?? null
}

// ───────── Results ─────────

const ALL_SESSION_TYPES: SessionType[] = [
  'race',
  'qualifying',
  'sprint',
  'sprint_qualifying',
  'hyperpole',
  'practice',
  'warmup',
  'stage',
  'shakedown',
  'endurance',
]

export interface SessionResult {
  sessionType: SessionType
  overall: { drivers: string[]; team: string }
  classes?: Array<{
    className: string
    podium: Array<{ position: number; drivers: string[]; team: string }>
  }>
  fastestLap?: string
}

export function getEventResults(eventId: string): SessionResult[] {
  const out: SessionResult[] = []
  for (const t of ALL_SESSION_TYPES) {
    const r = getResult(eventId, t)
    if (!r) continue
    out.push({
      sessionType: t,
      overall: r.overall,
      classes: r.classes,
      fastestLap: r.fastestLap,
    })
  }
  return out
}

export function getSeasonResults(seriesId: string, year: number): Array<{
  eventId: string
  name: string
  round?: number
  results: SessionResult[]
}> {
  return getCalendar(seriesId, year)
    .map((ev) => ({
      eventId: ev.eventId,
      name: ev.name,
      round: ev.round,
      results: getEventResults(ev.eventId),
    }))
    .filter((e) => e.results.length > 0)
}

// ───────── Standings ─────────

export interface StandingRow {
  position: number
  name: string
  team: string
  points: number
  wins: number
}

export interface ConstructorRow {
  position: number
  team: string
  points: number
  wins: number
}

export interface ChampionshipStandings {
  seriesId: string
  year: number
  className?: string
  drivers: StandingRow[]
  constructors: ConstructorRow[]
}

export function getChampionshipStandings(
  seriesId: string,
  year: number,
): ChampionshipStandings | null {
  const s = getStandings(seriesId, year)
  if (!s) return null
  return {
    seriesId,
    year,
    className: s.className,
    drivers: s.drivers.map((d) => ({
      position: d.position,
      name: getDriver(d.driverId)?.shortName ?? d.driverId,
      team: getTeam(d.teamId)?.name ?? d.teamId,
      points: d.points,
      wins: d.wins,
    })),
    constructors: s.constructors.map((c) => ({
      position: c.position,
      team: getTeam(c.teamId)?.name ?? c.teamId,
      points: c.points,
      wins: c.wins,
    })),
  }
}

// ───────── Circuit ─────────

export interface CircuitInfo {
  id: string
  name: string
  country: string
  countryCode: string
  length: string
  turns: number
  type: 'permanent' | 'street' | 'oval' | 'mixed'
  lapRecord?: string
  wikipedia?: string
}

export function getCircuitInfo(circuitId: string): CircuitInfo | null {
  const c = getCircuit(circuitId)
  if (!c) return null
  return {
    id: c.id,
    name: c.name,
    country: c.country,
    countryCode: c.countryCode,
    length: c.length,
    turns: c.turns,
    type: c.type,
    lapRecord: c.lapRecord,
    wikipedia: c.wikipedia,
  }
}

// ───────── Search ─────────

export interface SearchFilters {
  fromDate: string // ISO date (YYYY-MM-DD or full ISO)
  toDate: string
  country?: string
  countryCode?: string
  seriesIds?: string[]
}

export function searchRaces(filters: SearchFilters): CalendarEntry[] {
  const from = new Date(filters.fromDate).getTime()
  const to = new Date(filters.toDate).getTime()
  const wantCountry = filters.country?.toLowerCase()
  const wantCode = filters.countryCode?.toUpperCase()
  const wantSeries = filters.seriesIds && new Set(filters.seriesIds)

  const years = new Set<number>()
  const fromYear = new Date(from).getUTCFullYear()
  const toYear = new Date(to).getUTCFullYear()
  for (let y = fromYear; y <= toYear; y++) years.add(y)

  const all: CalendarEntry[] = []
  for (const y of years) all.push(...getAllCalendars(y))

  return all
    .filter((e) => {
      const start = new Date(e.startUtc).getTime()
      if (start < from || start > to) return false
      if (wantCountry && e.country.toLowerCase() !== wantCountry) return false
      if (wantCode && e.countryCode !== wantCode) return false
      if (wantSeries && !wantSeries.has(e.seriesId)) return false
      return true
    })
    .sort((a, b) => new Date(a.startUtc).getTime() - new Date(b.startUtc).getTime())
}
