import { SeriesConfig, RaceEvent } from '@/lib/types'
import { f12025 } from './f1-2025'
import { f12026 } from './f1-2026'
import { indycar2025 } from './indycar-2025'
import { indycar2026 } from './indycar-2026'
import { nascar2025 } from './nascar-2025'
import { nascar2026 } from './nascar-2026'
import { wec2025 } from './wec-2025'
import { wec2026 } from './wec-2026'
import { imsa2025 } from './imsa-2025'
import { imsa2026 } from './imsa-2026'
import { wrc2025 } from './wrc-2025'
import { wrc2026 } from './wrc-2026'
import { dtm2025 } from './dtm-2025'
import { dtm2026 } from './dtm-2026'
import { gtwc2025 } from './gtwc-2025'
import { gtwc2026 } from './gtwc-2026'
import { nls2025 } from './nls-2025'
import { nls2026 } from './nls-2026'
import { supergt2025 } from './supergt-2025'
import { supergt2026 } from './supergt-2026'
import { elms2025 } from './elms-2025'
import { elms2026 } from './elms-2026'
import { igtc2025 } from './igtc-2025'
import { igtc2026 } from './igtc-2026'
import { superformula2025 } from './superformula-2025'
import { superformula2026 } from './superformula-2026'
import { supercars2025 } from './supercars-2025'
import { supercars2026 } from './supercars-2026'

interface SeriesMeta {
  id: string
  name: string
  shortName: string
  color: string
  textColor: string
  logoBgWhite?: boolean
}

const SERIES_META: SeriesMeta[] = [
  { id: 'f1', name: 'Formula 1', shortName: 'F1', color: '#FF1801', textColor: '#fff' },
  { id: 'indycar', name: 'IndyCar Series', shortName: 'INDY', color: '#002F6C', textColor: '#fff' },
  { id: 'nascar', name: 'NASCAR Cup Series', shortName: 'NASCAR', color: '#007AC2', textColor: '#fff' },
  { id: 'wec', name: 'FIA World Endurance Championship', shortName: 'WEC', color: '#0066CC', textColor: '#fff', logoBgWhite: true },
  { id: 'imsa', name: 'IMSA WeatherTech SportsCar', shortName: 'IMSA', color: '#CF171F', textColor: '#fff', logoBgWhite: true },
  { id: 'wrc', name: 'FIA World Rally Championship', shortName: 'WRC', color: '#FFD100', textColor: '#000', logoBgWhite: true },
  { id: 'dtm', name: 'DTM', shortName: 'DTM', color: '#1E1E50', textColor: '#fff', logoBgWhite: true },
  { id: 'gtwc', name: 'GT World Challenge Europe', shortName: 'GTWC', color: '#E8A520', textColor: '#000' },
  { id: 'nls', name: 'Nurburgring Langstrecken-Serie', shortName: 'NLS', color: '#009B3A', textColor: '#fff', logoBgWhite: true },
  { id: 'supergt', name: 'Super GT', shortName: 'SGT', color: '#E60012', textColor: '#fff' },
  { id: 'elms', name: 'European Le Mans Series', shortName: 'ELMS', color: '#00529B', textColor: '#fff' },
  { id: 'igtc', name: 'Intercontinental GT Challenge', shortName: 'IGTC', color: '#C8102E', textColor: '#fff' },
  { id: 'superformula', name: 'Super Formula', shortName: 'SF', color: '#1A1A6E', textColor: '#fff' },
  { id: 'supercars', name: 'Supercars Championship', shortName: 'SC', color: '#E31937', textColor: '#fff' },
]

// Per-series, per-year event data
const SERIES_EVENTS: Record<string, Record<number, RaceEvent[]>> = {
  f1: { 2025: f12025, 2026: f12026 },
  indycar: { 2025: indycar2025, 2026: indycar2026 },
  nascar: { 2025: nascar2025, 2026: nascar2026 },
  wec: { 2025: wec2025, 2026: wec2026 },
  imsa: { 2025: imsa2025, 2026: imsa2026 },
  wrc: { 2025: wrc2025, 2026: wrc2026 },
  dtm: { 2025: dtm2025, 2026: dtm2026 },
  gtwc: { 2025: gtwc2025, 2026: gtwc2026 },
  nls: { 2025: nls2025, 2026: nls2026 },
  supergt: { 2025: supergt2025, 2026: supergt2026 },
  elms: { 2025: elms2025, 2026: elms2026 },
  igtc: { 2025: igtc2025, 2026: igtc2026 },
  superformula: { 2025: superformula2025, 2026: superformula2026 },
  supercars: { 2025: supercars2025, 2026: supercars2026 },
}

export const AVAILABLE_YEARS = [2026, 2025]

export function getSeriesForYear(year: number): SeriesConfig[] {
  return SERIES_META.map(meta => ({
    ...meta,
    events: SERIES_EVENTS[meta.id]?.[year] ?? [],
  })).filter(s => s.events.length > 0)
}

// Backward-compatible default — used by all existing consumers
export const ALL_SERIES: SeriesConfig[] = getSeriesForYear(2026)
