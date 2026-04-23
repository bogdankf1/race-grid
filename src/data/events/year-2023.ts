import type { RaceEvent } from '@/lib/types'

import { f12023 } from '../f1-2023'
import { indycar2023 } from '../indycar-2023'
import { nascar2023 } from '../nascar-2023'
import { wec2023 } from '../wec-2023'
import { imsa2023 } from '../imsa-2023'
import { wrc2023 } from '../wrc-2023'
import { dtm2023 } from '../dtm-2023'
import { gtwc2023 } from '../gtwc-2023'
import { nls2023 } from '../nls-2023'
import { supergt2023 } from '../supergt-2023'
import { elms2023 } from '../elms-2023'
import { igtc2023 } from '../igtc-2023'
import { superformula2023 } from '../superformula-2023'
import { supercars2023 } from '../supercars-2023'
import { f22023 } from '../f2-2023'
import { f32023 } from '../f3-2023'
import { dakar2023 } from '../dakar-2023'
import { motogp2023 } from '../motogp-2023'
import { fe2023 } from '../fe-2023'
import { mlmc2023 } from '../mlmc-2023'
import { gtwcam2023 } from '../gtwcam-2023'
import { britgt2023 } from '../britgt-2023'
import { gtwcau2023 } from '../gtwcau-2023'
import { gtwcasia2023 } from '../gtwcasia-2023'

export const events2023: Record<string, RaceEvent[]> = {
  'f1': f12023,
  'indycar': indycar2023,
  'nascar': nascar2023,
  'wec': wec2023,
  'imsa': imsa2023,
  'wrc': wrc2023,
  'dtm': dtm2023,
  'gtwc': gtwc2023,
  'nls': nls2023,
  'supergt': supergt2023,
  'elms': elms2023,
  'igtc': igtc2023,
  'superformula': superformula2023,
  'supercars': supercars2023,
  'f2': f22023,
  'f3': f32023,
  'dakar': dakar2023,
  'motogp': motogp2023,
  'fe': fe2023,
  'mlmc': mlmc2023,
  'gtwcam': gtwcam2023,
  'britgt': britgt2023,
  'gtwcau': gtwcau2023,
  'gtwcasia': gtwcasia2023,
}
