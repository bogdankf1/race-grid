import type { RaceEvent } from '@/lib/types'

import { f12022 } from '../f1-2022'
import { indycar2022 } from '../indycar-2022'
import { nascar2022 } from '../nascar-2022'
import { wec2022 } from '../wec-2022'
import { imsa2022 } from '../imsa-2022'
import { wrc2022 } from '../wrc-2022'
import { dtm2022 } from '../dtm-2022'
import { gtwc2022 } from '../gtwc-2022'
import { nls2022 } from '../nls-2022'
import { supergt2022 } from '../supergt-2022'
import { elms2022 } from '../elms-2022'
import { igtc2022 } from '../igtc-2022'
import { superformula2022 } from '../superformula-2022'
import { supercars2022 } from '../supercars-2022'
import { f22022 } from '../f2-2022'
import { f32022 } from '../f3-2022'
import { dakar2022 } from '../dakar-2022'
import { motogp2022 } from '../motogp-2022'
import { fe2022 } from '../fe-2022'
import { mlmc2022 } from '../mlmc-2022'
import { gtwcam2022 } from '../gtwcam-2022'
import { britgt2022 } from '../britgt-2022'
import { gtwcau2022 } from '../gtwcau-2022'
import { gtwcasia2022 } from '../gtwcasia-2022'

export const events2022: Record<string, RaceEvent[]> = {
  'f1': f12022,
  'indycar': indycar2022,
  'nascar': nascar2022,
  'wec': wec2022,
  'imsa': imsa2022,
  'wrc': wrc2022,
  'dtm': dtm2022,
  'gtwc': gtwc2022,
  'nls': nls2022,
  'supergt': supergt2022,
  'elms': elms2022,
  'igtc': igtc2022,
  'superformula': superformula2022,
  'supercars': supercars2022,
  'f2': f22022,
  'f3': f32022,
  'dakar': dakar2022,
  'motogp': motogp2022,
  'fe': fe2022,
  'mlmc': mlmc2022,
  'gtwcam': gtwcam2022,
  'britgt': britgt2022,
  'gtwcau': gtwcau2022,
  'gtwcasia': gtwcasia2022,
}
