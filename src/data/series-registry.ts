import { SeriesConfig, RaceEvent } from '@/lib/types'
import { f12021 } from './f1-2021'
import { f12022 } from './f1-2022'
import { f12023 } from './f1-2023'
import { f12024 } from './f1-2024'
import { f12025 } from './f1-2025'
import { f12026 } from './f1-2026'
import { indycar2021 } from './indycar-2021'
import { indycar2022 } from './indycar-2022'
import { indycar2023 } from './indycar-2023'
import { indycar2024 } from './indycar-2024'
import { indycar2025 } from './indycar-2025'
import { indycar2026 } from './indycar-2026'
import { nascar2021 } from './nascar-2021'
import { nascar2022 } from './nascar-2022'
import { nascar2023 } from './nascar-2023'
import { nascar2024 } from './nascar-2024'
import { nascar2025 } from './nascar-2025'
import { nascar2026 } from './nascar-2026'
import { wec2021 } from './wec-2021'
import { wec2022 } from './wec-2022'
import { wec2023 } from './wec-2023'
import { wec2024 } from './wec-2024'
import { wec2025 } from './wec-2025'
import { wec2026 } from './wec-2026'
import { imsa2021 } from './imsa-2021'
import { imsa2022 } from './imsa-2022'
import { imsa2023 } from './imsa-2023'
import { imsa2024 } from './imsa-2024'
import { imsa2025 } from './imsa-2025'
import { imsa2026 } from './imsa-2026'
import { wrc2021 } from './wrc-2021'
import { wrc2022 } from './wrc-2022'
import { wrc2023 } from './wrc-2023'
import { wrc2024 } from './wrc-2024'
import { wrc2025 } from './wrc-2025'
import { wrc2026 } from './wrc-2026'
import { dtm2021 } from './dtm-2021'
import { dtm2022 } from './dtm-2022'
import { dtm2023 } from './dtm-2023'
import { dtm2024 } from './dtm-2024'
import { dtm2025 } from './dtm-2025'
import { dtm2026 } from './dtm-2026'
import { gtwc2021 } from './gtwc-2021'
import { gtwc2022 } from './gtwc-2022'
import { gtwc2023 } from './gtwc-2023'
import { gtwc2024 } from './gtwc-2024'
import { gtwc2025 } from './gtwc-2025'
import { gtwc2026 } from './gtwc-2026'
import { nls2021 } from './nls-2021'
import { nls2022 } from './nls-2022'
import { nls2023 } from './nls-2023'
import { nls2024 } from './nls-2024'
import { nls2025 } from './nls-2025'
import { nls2026 } from './nls-2026'
import { supergt2021 } from './supergt-2021'
import { supergt2022 } from './supergt-2022'
import { supergt2023 } from './supergt-2023'
import { supergt2024 } from './supergt-2024'
import { supergt2025 } from './supergt-2025'
import { supergt2026 } from './supergt-2026'
import { elms2021 } from './elms-2021'
import { elms2022 } from './elms-2022'
import { elms2023 } from './elms-2023'
import { elms2024 } from './elms-2024'
import { elms2025 } from './elms-2025'
import { elms2026 } from './elms-2026'
import { igtc2021 } from './igtc-2021'
import { igtc2022 } from './igtc-2022'
import { igtc2023 } from './igtc-2023'
import { igtc2024 } from './igtc-2024'
import { igtc2025 } from './igtc-2025'
import { igtc2026 } from './igtc-2026'
import { superformula2021 } from './superformula-2021'
import { superformula2022 } from './superformula-2022'
import { superformula2023 } from './superformula-2023'
import { superformula2024 } from './superformula-2024'
import { superformula2025 } from './superformula-2025'
import { superformula2026 } from './superformula-2026'
import { supercars2021 } from './supercars-2021'
import { supercars2022 } from './supercars-2022'
import { supercars2023 } from './supercars-2023'
import { supercars2024 } from './supercars-2024'
import { supercars2025 } from './supercars-2025'
import { supercars2026 } from './supercars-2026'
import { f22021 } from './f2-2021'
import { f22022 } from './f2-2022'
import { f22023 } from './f2-2023'
import { f22024 } from './f2-2024'
import { f22025 } from './f2-2025'
import { f22026 } from './f2-2026'
import { f32021 } from './f3-2021'
import { f32022 } from './f3-2022'
import { f32023 } from './f3-2023'
import { f32024 } from './f3-2024'
import { f32025 } from './f3-2025'
import { f32026 } from './f3-2026'
import { dakar2021 } from './dakar-2021'
import { dakar2022 } from './dakar-2022'
import { dakar2023 } from './dakar-2023'
import { dakar2024 } from './dakar-2024'
import { dakar2025 } from './dakar-2025'
import { dakar2026 } from './dakar-2026'
import { motogp2021 } from './motogp-2021'
import { motogp2022 } from './motogp-2022'
import { motogp2023 } from './motogp-2023'
import { motogp2024 } from './motogp-2024'
import { motogp2025 } from './motogp-2025'
import { motogp2026 } from './motogp-2026'
import { fe2021 } from './fe-2021'
import { fe2022 } from './fe-2022'
import { fe2023 } from './fe-2023'
import { fe2024 } from './fe-2024'
import { fe2025 } from './fe-2025'
import { fe2026 } from './fe-2026'
import { mlmc2021 } from './mlmc-2021'
import { mlmc2022 } from './mlmc-2022'
import { mlmc2023 } from './mlmc-2023'
import { mlmc2024 } from './mlmc-2024'
import { mlmc2025 } from './mlmc-2025'
import { mlmc2026 } from './mlmc-2026'

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
]

// Per-series, per-year event data
const SERIES_EVENTS: Record<string, Record<number, RaceEvent[]>> = {
  f1: { 2021: f12021, 2022: f12022, 2023: f12023, 2024: f12024, 2025: f12025, 2026: f12026 },
  indycar: { 2021: indycar2021, 2022: indycar2022, 2023: indycar2023, 2024: indycar2024, 2025: indycar2025, 2026: indycar2026 },
  nascar: { 2021: nascar2021, 2022: nascar2022, 2023: nascar2023, 2024: nascar2024, 2025: nascar2025, 2026: nascar2026 },
  wec: { 2021: wec2021, 2022: wec2022, 2023: wec2023, 2024: wec2024, 2025: wec2025, 2026: wec2026 },
  imsa: { 2021: imsa2021, 2022: imsa2022, 2023: imsa2023, 2024: imsa2024, 2025: imsa2025, 2026: imsa2026 },
  wrc: { 2021: wrc2021, 2022: wrc2022, 2023: wrc2023, 2024: wrc2024, 2025: wrc2025, 2026: wrc2026 },
  dtm: { 2021: dtm2021, 2022: dtm2022, 2023: dtm2023, 2024: dtm2024, 2025: dtm2025, 2026: dtm2026 },
  gtwc: { 2021: gtwc2021, 2022: gtwc2022, 2023: gtwc2023, 2024: gtwc2024, 2025: gtwc2025, 2026: gtwc2026 },
  nls: { 2021: nls2021, 2022: nls2022, 2023: nls2023, 2024: nls2024, 2025: nls2025, 2026: nls2026 },
  supergt: { 2021: supergt2021, 2022: supergt2022, 2023: supergt2023, 2024: supergt2024, 2025: supergt2025, 2026: supergt2026 },
  elms: { 2021: elms2021, 2022: elms2022, 2023: elms2023, 2024: elms2024, 2025: elms2025, 2026: elms2026 },
  igtc: { 2021: igtc2021, 2022: igtc2022, 2023: igtc2023, 2024: igtc2024, 2025: igtc2025, 2026: igtc2026 },
  superformula: { 2021: superformula2021, 2022: superformula2022, 2023: superformula2023, 2024: superformula2024, 2025: superformula2025, 2026: superformula2026 },
  supercars: { 2021: supercars2021, 2022: supercars2022, 2023: supercars2023, 2024: supercars2024, 2025: supercars2025, 2026: supercars2026 },
  f2: { 2021: f22021, 2022: f22022, 2023: f22023, 2024: f22024, 2025: f22025, 2026: f22026 },
  f3: { 2021: f32021, 2022: f32022, 2023: f32023, 2024: f32024, 2025: f32025, 2026: f32026 },
  dakar: { 2021: dakar2021, 2022: dakar2022, 2023: dakar2023, 2024: dakar2024, 2025: dakar2025, 2026: dakar2026 },
  motogp: { 2021: motogp2021, 2022: motogp2022, 2023: motogp2023, 2024: motogp2024, 2025: motogp2025, 2026: motogp2026 },
  fe: { 2021: fe2021, 2022: fe2022, 2023: fe2023, 2024: fe2024, 2025: fe2025, 2026: fe2026 },
  mlmc: { 2021: mlmc2021, 2022: mlmc2022, 2023: mlmc2023, 2024: mlmc2024, 2025: mlmc2025, 2026: mlmc2026 },
}

export const AVAILABLE_YEARS = [2026, 2025, 2024, 2023, 2022, 2021]

export interface SeriesGroup {
  labelKey: string
  ids: string[]
}

export const SERIES_GROUPS: SeriesGroup[] = [
  { labelKey: 'group.openwheel', ids: ['f1', 'f2', 'f3', 'fe', 'indycar', 'superformula'] },
  { labelKey: 'group.endurance', ids: ['wec', 'elms', 'mlmc', 'imsa', 'igtc'] },
  { labelKey: 'group.gt', ids: ['dtm', 'gtwc', 'supergt', 'nls', 'supercars'] },
  { labelKey: 'group.stock', ids: ['nascar'] },
  { labelKey: 'group.rally', ids: ['wrc', 'dakar'] },
  { labelKey: 'group.motorcycle', ids: ['motogp'] },
]

export function getSeriesForYear(year: number): SeriesConfig[] {
  return SERIES_META.map(meta => ({
    ...meta,
    events: SERIES_EVENTS[meta.id]?.[year] ?? [],
  })).filter(s => s.events.length > 0)
}

// Backward-compatible default — used by all existing consumers
export const ALL_SERIES: SeriesConfig[] = getSeriesForYear(2026)
