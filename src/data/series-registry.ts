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
import { twentyfourh2026 } from './24h-2026'
import { special2026 } from './special-2026'
import { wrx2026 } from './wrx-2026'
import { porscheSupercup2026 } from './porsche-supercup-2026'
import { f1Academy2026 } from './f1-academy-2026'
import { moto22026 } from './moto2-2026'
import { moto32026 } from './moto3-2026'
import { indyNxt2026 } from './indy-nxt-2026'
import { nascarXfinity2026 } from './nascar-xfinity-2026'

interface SeriesMeta {
  id: string
  name: string
  shortName: string
  color: string
  textColor: string
  logoBgWhite?: boolean
  wikipedia?: string
}

export const SERIES_META: SeriesMeta[] = [
  { id: 'f1', name: 'Formula 1', shortName: 'F1', color: '#FF1801', textColor: '#fff', wikipedia: 'Formula_One' },
  { id: 'indycar', name: 'IndyCar Series', shortName: 'INDY', color: '#002F6C', textColor: '#fff', wikipedia: 'IndyCar_Series' },
  { id: 'nascar', name: 'NASCAR Cup Series', shortName: 'NASCAR', color: '#007AC2', textColor: '#fff', wikipedia: 'NASCAR_Cup_Series' },
  { id: 'wec', name: 'FIA World Endurance Championship', shortName: 'WEC', color: '#0066CC', textColor: '#fff', logoBgWhite: true, wikipedia: 'FIA_World_Endurance_Championship' },
  { id: 'imsa', name: 'IMSA WeatherTech SportsCar', shortName: 'IMSA', color: '#CF171F', textColor: '#fff', logoBgWhite: true, wikipedia: 'IMSA_SportsCar_Championship' },
  { id: 'wrc', name: 'FIA World Rally Championship', shortName: 'WRC', color: '#FFD100', textColor: '#000', logoBgWhite: true, wikipedia: 'World_Rally_Championship' },
  { id: 'dtm', name: 'DTM', shortName: 'DTM', color: '#1E1E50', textColor: '#fff', logoBgWhite: true, wikipedia: 'Deutsche_Tourenwagen_Masters' },
  { id: 'gtwc', name: 'GT World Challenge Europe', shortName: 'GTWC', color: '#E8A520', textColor: '#000', wikipedia: 'GT_World_Challenge_Europe' },
  { id: 'nls', name: 'Nurburgring Langstrecken-Serie', shortName: 'NLS', color: '#009B3A', textColor: '#fff', logoBgWhite: true, wikipedia: 'Nürburgring_Endurance_Series' },
  { id: 'supergt', name: 'Super GT', shortName: 'SGT', color: '#E60012', textColor: '#fff', wikipedia: 'Super_GT' },
  { id: 'elms', name: 'European Le Mans Series', shortName: 'ELMS', color: '#00529B', textColor: '#fff', wikipedia: 'European_Le_Mans_Series' },
  { id: 'igtc', name: 'Intercontinental GT Challenge', shortName: 'IGTC', color: '#C8102E', textColor: '#fff', wikipedia: 'Intercontinental_GT_Challenge' },
  { id: 'superformula', name: 'Super Formula', shortName: 'SF', color: '#1A1A6E', textColor: '#fff', wikipedia: 'Super_Formula' },
  { id: 'supercars', name: 'Supercars Championship', shortName: 'SC', color: '#E31937', textColor: '#fff', wikipedia: 'Supercars_Championship' },
  { id: 'f2', name: 'FIA Formula 2', shortName: 'F2', color: '#0090D0', textColor: '#fff', wikipedia: 'FIA_Formula_2_Championship' },
  { id: 'f3', name: 'FIA Formula 3', shortName: 'F3', color: '#00B050', textColor: '#fff', wikipedia: 'FIA_Formula_3_Championship' },
  { id: 'dakar', name: 'Dakar Rally', shortName: 'DAKAR', color: '#D7263D', textColor: '#fff', wikipedia: 'Dakar_Rally' },
  { id: 'motogp', name: 'MotoGP', shortName: 'MGP', color: '#BE0F34', textColor: '#fff', wikipedia: 'MotoGP' },
  { id: 'fe', name: 'Formula E', shortName: 'FE', color: '#1E90FF', textColor: '#fff', wikipedia: 'Formula_E' },
  { id: 'mlmc', name: 'Michelin Le Mans Cup', shortName: 'MLMC', color: '#234B8A', textColor: '#fff', wikipedia: 'Michelin_Le_Mans_Cup' },
  { id: 'gtwcam', name: 'GT World Challenge America', shortName: 'GTWCA', color: '#D4A843', textColor: '#000', wikipedia: 'GT_World_Challenge_America' },
  { id: 'gtwcasia', name: 'GT World Challenge Asia', shortName: 'GTWCAS', color: '#C73E3A', textColor: '#fff', wikipedia: 'GT_World_Challenge_Asia' },
  { id: 'britgt', name: 'British GT Championship', shortName: 'BGT', color: '#1B3C6D', textColor: '#fff', wikipedia: 'British_GT_Championship' },
  { id: 'gtwcau', name: 'GT World Challenge Australia', shortName: 'GTWCAU', color: '#00843D', textColor: '#fff', wikipedia: 'GT_World_Challenge_Australia' },
  { id: '24h', name: 'Michelin 24H Series', shortName: '24H', color: '#1A2B4A', textColor: '#fff', wikipedia: '24H_Series' },
  { id: 'special', name: 'Special Events', shortName: 'SPEC', color: '#6B2C91', textColor: '#fff' },
  { id: 'wrx', name: 'FIA Rallycross', shortName: 'WRX', color: '#0E5BA8', textColor: '#fff', wikipedia: 'World_Rallycross_Championship' },
  { id: 'porsche-supercup', name: 'Porsche Mobil 1 Supercup', shortName: 'PSC', color: '#D5001C', textColor: '#fff', wikipedia: 'Porsche_Supercup' },
  { id: 'f1-academy', name: 'F1 Academy', shortName: 'F1A', color: '#FF6B9D', textColor: '#fff', wikipedia: 'F1_Academy' },
  { id: 'moto2', name: 'Moto2', shortName: 'M2', color: '#0066CC', textColor: '#fff', wikipedia: 'Moto2' },
  { id: 'moto3', name: 'Moto3', shortName: 'M3', color: '#FF6900', textColor: '#fff', wikipedia: 'Moto3' },
  { id: 'indy-nxt', name: 'Indy NXT by Firestone', shortName: 'NXT', color: '#A6CE39', textColor: '#000', wikipedia: 'Indy_NXT' },
  { id: 'nascar-xfinity', name: 'NASCAR Xfinity Series', shortName: 'XFIN', color: '#FFCD00', textColor: '#000', wikipedia: 'NASCAR_Xfinity_Series' },
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
  '24h': twentyfourh2026,
  special: special2026,
  wrx: wrx2026,
  'porsche-supercup': porscheSupercup2026,
  'f1-academy': f1Academy2026,
  moto2: moto22026,
  moto3: moto32026,
  'indy-nxt': indyNxt2026,
  'nascar-xfinity': nascarXfinity2026,
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
  { labelKey: 'group.openwheel', ids: ['f1', 'f2', 'f3', 'f1-academy', 'fe', 'indycar', 'indy-nxt', 'superformula'] },
  { labelKey: 'group.endurance', ids: ['wec', 'elms', 'mlmc', 'imsa', 'igtc', '24h'] },
  { labelKey: 'group.gt', ids: ['dtm', 'gtwc', 'gtwcam', 'gtwcasia', 'gtwcau', 'britgt', 'supergt', 'nls', 'supercars', 'porsche-supercup'] },
  { labelKey: 'group.stock', ids: ['nascar', 'nascar-xfinity'] },
  { labelKey: 'group.rally', ids: ['wrc', 'dakar', 'wrx'] },
  { labelKey: 'group.motorcycle', ids: ['motogp', 'moto2', 'moto3'] },
  { labelKey: 'group.special', ids: ['special'] },
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
