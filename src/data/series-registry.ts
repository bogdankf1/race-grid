import { SeriesConfig } from '@/lib/types'
import { f12026 } from './f1-2026'
import { wec2026 } from './wec-2026'
import { indycar2026 } from './indycar-2026'
import { nascar2026 } from './nascar-2026'
import { nls2026 } from './nls-2026'
import { wrc2026 } from './wrc-2026'
import { imsa2026 } from './imsa-2026'
import { dtm2026 } from './dtm-2026'
import { gtwc2026 } from './gtwc-2026'
import { supergt2026 } from './supergt-2026'
import { elms2026 } from './elms-2026'
import { igtc2026 } from './igtc-2026'
import { superformula2026 } from './superformula-2026'
import { supercars2026 } from './supercars-2026'

export const ALL_SERIES: SeriesConfig[] = [
  {
    id: 'f1',
    name: 'Formula 1',
    shortName: 'F1',
    color: '#FF1801',
    textColor: '#fff',
    events: f12026,
  },
  {
    id: 'indycar',
    name: 'IndyCar Series',
    shortName: 'INDY',
    color: '#002F6C',
    textColor: '#fff',
    events: indycar2026,
  },
  {
    id: 'nascar',
    name: 'NASCAR Cup Series',
    shortName: 'NASCAR',
    color: '#007AC2',
    textColor: '#fff',
    events: nascar2026,
  },
  {
    id: 'wec',
    name: 'FIA World Endurance Championship',
    shortName: 'WEC',
    color: '#0066CC',
    textColor: '#fff',
    events: wec2026,
  },
  {
    id: 'imsa',
    name: 'IMSA WeatherTech SportsCar',
    shortName: 'IMSA',
    color: '#CF171F',
    textColor: '#fff',
    events: imsa2026,
  },
  {
    id: 'wrc',
    name: 'FIA World Rally Championship',
    shortName: 'WRC',
    color: '#FFD100',
    textColor: '#000',
    events: wrc2026,
  },
  {
    id: 'dtm',
    name: 'DTM',
    shortName: 'DTM',
    color: '#1E1E50',
    textColor: '#fff',
    events: dtm2026,
  },
  {
    id: 'gtwc',
    name: 'GT World Challenge Europe',
    shortName: 'GTWC',
    color: '#E8A520',
    textColor: '#000',
    events: gtwc2026,
  },
  {
    id: 'nls',
    name: 'Nurburgring Langstrecken-Serie',
    shortName: 'NLS',
    color: '#009B3A',
    textColor: '#fff',
    events: nls2026,
  },
  {
    id: 'supergt',
    name: 'Super GT',
    shortName: 'SGT',
    color: '#E60012',
    textColor: '#fff',
    events: supergt2026,
  },
  {
    id: 'elms',
    name: 'European Le Mans Series',
    shortName: 'ELMS',
    color: '#00529B',
    textColor: '#fff',
    events: elms2026,
  },
  {
    id: 'igtc',
    name: 'Intercontinental GT Challenge',
    shortName: 'IGTC',
    color: '#C8102E',
    textColor: '#fff',
    events: igtc2026,
  },
  {
    id: 'superformula',
    name: 'Super Formula',
    shortName: 'SF',
    color: '#1A1A6E',
    textColor: '#fff',
    events: superformula2026,
  },
  {
    id: 'supercars',
    name: 'Supercars Championship',
    shortName: 'SC',
    color: '#E31937',
    textColor: '#fff',
    events: supercars2026,
  },
]
