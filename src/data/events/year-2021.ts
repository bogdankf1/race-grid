import type { RaceEvent } from '@/lib/types'

import { f12021 } from '../f1-2021'
import { indycar2021 } from '../indycar-2021'
import { nascar2021 } from '../nascar-2021'
import { wec2021 } from '../wec-2021'
import { imsa2021 } from '../imsa-2021'
import { wrc2021 } from '../wrc-2021'
import { dtm2021 } from '../dtm-2021'
import { gtwc2021 } from '../gtwc-2021'
import { nls2021 } from '../nls-2021'
import { supergt2021 } from '../supergt-2021'
import { elms2021 } from '../elms-2021'
import { igtc2021 } from '../igtc-2021'
import { superformula2021 } from '../superformula-2021'
import { supercars2021 } from '../supercars-2021'
import { f22021 } from '../f2-2021'
import { f32021 } from '../f3-2021'
import { dakar2021 } from '../dakar-2021'
import { motogp2021 } from '../motogp-2021'
import { fe2021 } from '../fe-2021'
import { mlmc2021 } from '../mlmc-2021'
import { gtwcam2021 } from '../gtwcam-2021'
import { britgt2021 } from '../britgt-2021'
import { gtwcau2021 } from '../gtwcau-2021'

export const events2021: Record<string, RaceEvent[]> = {
  'f1': f12021,
  'indycar': indycar2021,
  'nascar': nascar2021,
  'wec': wec2021,
  'imsa': imsa2021,
  'wrc': wrc2021,
  'dtm': dtm2021,
  'gtwc': gtwc2021,
  'nls': nls2021,
  'supergt': supergt2021,
  'elms': elms2021,
  'igtc': igtc2021,
  'superformula': superformula2021,
  'supercars': supercars2021,
  'f2': f22021,
  'f3': f32021,
  'dakar': dakar2021,
  'motogp': motogp2021,
  'fe': fe2021,
  'mlmc': mlmc2021,
  'gtwcam': gtwcam2021,
  'britgt': britgt2021,
  'gtwcau': gtwcau2021,
}
