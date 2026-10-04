import type { RaceEvent } from '@/lib/types'

// 2027 season — only series whose 2027 calendar has been published are included.
// Not yet published (no file): WRC, F2, F3, F1 Academy, Porsche Supercup, Indy NXT, FIA Rallycross.
// Session times are placeholders flagged `tba: true` until the official timetables are released.
import { f12027 } from '../f1-2027'
import { indycar2027 } from '../indycar-2027'
import { wec2027 } from '../wec-2027'
import { imsa2027 } from '../imsa-2027'
import { gtwc2027 } from '../gtwc-2027'
import { igtc2027 } from '../igtc-2027'
import { gtwcam2027 } from '../gtwcam-2027'
import { gtwcasia2027 } from '../gtwcasia-2027'
import { gtwcau2027 } from '../gtwcau-2027'
import { motogp2027 } from '../motogp-2027'
import { moto22027 } from '../moto2-2027'
import { moto32027 } from '../moto3-2027'
import { fe2027 } from '../fe-2027'
import { nascar2027 } from '../nascar-2027'
import { nascarXfinity2027 } from '../nascar-xfinity-2027'
import { nascarTruck2027 } from '../nascar-truck-2027'
import { supergt2027 } from '../supergt-2027'
import { superformula2027 } from '../superformula-2027'
import { dtm2027 } from '../dtm-2027'
import { elms2027 } from '../elms-2027'
import { mlmc2027 } from '../mlmc-2027'
import { britgt2027 } from '../britgt-2027'
import { nls2027 } from '../nls-2027'
import { twentyfourh2027 } from '../24h-2027'
import { impc2027 } from '../impc-2027'
import { special2027 } from '../special-2027'
import { supercars2027 } from '../supercars-2027'
import { dakar2027 } from '../dakar-2027'

export const events2027: Record<string, RaceEvent[]> = {
  'f1': f12027,
  'indycar': indycar2027,
  'wec': wec2027,
  'imsa': imsa2027,
  'gtwc': gtwc2027,
  'igtc': igtc2027,
  'gtwcam': gtwcam2027,
  'gtwcasia': gtwcasia2027,
  'gtwcau': gtwcau2027,
  'motogp': motogp2027,
  'moto2': moto22027,
  'moto3': moto32027,
  'fe': fe2027,
  'nascar': nascar2027,
  'nascar-xfinity': nascarXfinity2027,
  'nascar-truck': nascarTruck2027,
  'supergt': supergt2027,
  'superformula': superformula2027,
  'dtm': dtm2027,
  'elms': elms2027,
  'mlmc': mlmc2027,
  'britgt': britgt2027,
  'nls': nls2027,
  '24h': twentyfourh2027,
  'impc': impc2027,
  'special': special2027,
  'supercars': supercars2027,
  'dakar': dakar2027,
}
