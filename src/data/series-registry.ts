import { SeriesConfig, RaceEvent } from '@/lib/types'

// Only 2026 is eagerly loaded — historical years are lazy-loaded on demand
import { f12026 } from './f1-2026'
import { indycar2026 } from './indycar-2026'
import { nascar2026 } from './nascar-2026'
import { wec2026 } from './wec-2026'
import { imsa2026 } from './imsa-2026'
import { wrc2026 } from './wrc-2026'
import { dtm2026 } from './dtm-2026'
import { gtwc2026 } from './gtwc-2026'
import { nls2026 } from './nls-2026'
import { supergt2026 } from './supergt-2026'
import { elms2026 } from './elms-2026'
import { igtc2026 } from './igtc-2026'
import { superformula2026 } from './superformula-2026'
import { supercars2026 } from './supercars-2026'
import { f22026 } from './f2-2026'
import { f32026 } from './f3-2026'
import { dakar2026 } from './dakar-2026'
import { motogp2026 } from './motogp-2026'
import { fe2026 } from './fe-2026'
import { mlmc2026 } from './mlmc-2026'
import { gtwcam2026 } from './gtwcam-2026'
import { gtwcasia2026 } from './gtwcasia-2026'
import { britgt2026 } from './britgt-2026'
import { gtwcau2026 } from './gtwcau-2026'

interface SeriesMeta {
  id: string
  name: string
  shortName: string
  color: string
  textColor: string
  logoBgWhite?: boolean
}

export const SERIES_META: SeriesMeta[] = [
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
  { id: 'f2', name: 'FIA Formula 2', shortName: 'F2', color: '#0090D0', textColor: '#fff' },
  { id: 'f3', name: 'FIA Formula 3', shortName: 'F3', color: '#00B050', textColor: '#fff' },
  { id: 'dakar', name: 'Dakar Rally', shortName: 'DAKAR', color: '#D7263D', textColor: '#fff' },
  { id: 'motogp', name: 'MotoGP', shortName: 'MGP', color: '#BE0F34', textColor: '#fff' },
  { id: 'fe', name: 'Formula E', shortName: 'FE', color: '#1E90FF', textColor: '#fff' },
  { id: 'mlmc', name: 'Michelin Le Mans Cup', shortName: 'MLMC', color: '#234B8A', textColor: '#fff' },
  { id: 'gtwcam', name: 'GT World Challenge America', shortName: 'GTWCA', color: '#D4A843', textColor: '#000' },
  { id: 'gtwcasia', name: 'GT World Challenge Asia', shortName: 'GTWCAS', color: '#C73E3A', textColor: '#fff' },
  { id: 'britgt', name: 'British GT Championship', shortName: 'BGT', color: '#1B3C6D', textColor: '#fff' },
  { id: 'gtwcau', name: 'GT World Challenge Australia', shortName: 'GTWCAU', color: '#00843D', textColor: '#fff' },
]

// 2026 events — eagerly loaded (current year, used by 95%+ of users)
const EVENTS_2026: Record<string, RaceEvent[]> = {
  f1: f12026, indycar: indycar2026, nascar: nascar2026, wec: wec2026,
  imsa: imsa2026, wrc: wrc2026, dtm: dtm2026, gtwc: gtwc2026,
  nls: nls2026, supergt: supergt2026, elms: elms2026, igtc: igtc2026,
  superformula: superformula2026, supercars: supercars2026,
  f2: f22026, f3: f32026, dakar: dakar2026, motogp: motogp2026,
  fe: fe2026, mlmc: mlmc2026, gtwcam: gtwcam2026, gtwcasia: gtwcasia2026,
  britgt: britgt2026, gtwcau: gtwcau2026,
}

// Cache for lazily loaded historical years
const yearCache = new Map<number, Record<string, RaceEvent[]>>()
yearCache.set(2026, EVENTS_2026)

export const AVAILABLE_YEARS = [2026, 2025, 2024, 2023, 2022, 2021]

export interface SeriesGroup {
  labelKey: string
  ids: string[]
}

export const SERIES_GROUPS: SeriesGroup[] = [
  { labelKey: 'group.openwheel', ids: ['f1', 'f2', 'f3', 'fe', 'indycar', 'superformula'] },
  { labelKey: 'group.endurance', ids: ['wec', 'elms', 'mlmc', 'imsa', 'igtc'] },
  { labelKey: 'group.gt', ids: ['dtm', 'gtwc', 'gtwcam', 'gtwcasia', 'gtwcau', 'britgt', 'supergt', 'nls', 'supercars'] },
  { labelKey: 'group.stock', ids: ['nascar'] },
  { labelKey: 'group.rally', ids: ['wrc', 'dakar'] },
  { labelKey: 'group.motorcycle', ids: ['motogp'] },
]

/**
 * Load a historical year's event data into the cache.
 * Returns immediately if already loaded. No-op for 2026.
 */
export async function loadYear(year: number): Promise<void> {
  if (yearCache.has(year)) return

  let data: Record<string, RaceEvent[]>
  switch (year) {
    case 2025: data = (await import('./events/year-2025')).events2025; break
    case 2024: data = (await import('./events/year-2024')).events2024; break
    case 2023: data = (await import('./events/year-2023')).events2023; break
    case 2022: data = (await import('./events/year-2022')).events2022; break
    case 2021: data = (await import('./events/year-2021')).events2021; break
    default: return
  }
  yearCache.set(year, data)
}

/**
 * Get series configs for a given year. Returns data from cache.
 * For 2026, always available. For other years, call loadYear() first.
 */
export function getSeriesForYear(year: number): SeriesConfig[] {
  const events = yearCache.get(year)
  if (!events) return []
  return SERIES_META.map(meta => ({
    ...meta,
    events: events[meta.id] ?? [],
  })).filter(s => s.events.length > 0)
}

/**
 * Check if a year's data has been loaded.
 */
export function isYearLoaded(year: number): boolean {
  return yearCache.has(year)
}

// Backward-compatible default — 2026 is always available
export const ALL_SERIES: SeriesConfig[] = getSeriesForYear(2026)
