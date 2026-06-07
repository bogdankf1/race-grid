import type { RaceEvent } from '@/lib/types'

import { f12025 } from '../f1-2025'
import { indycar2025 } from '../indycar-2025'
import { nascar2025 } from '../nascar-2025'
import { wec2025 } from '../wec-2025'
import { imsa2025 } from '../imsa-2025'
import { wrc2025 } from '../wrc-2025'
import { dtm2025 } from '../dtm-2025'
import { gtwc2025 } from '../gtwc-2025'
import { nls2025 } from '../nls-2025'
import { supergt2025 } from '../supergt-2025'
import { elms2025 } from '../elms-2025'
import { igtc2025 } from '../igtc-2025'
import { superformula2025 } from '../superformula-2025'
import { supercars2025 } from '../supercars-2025'
import { f22025 } from '../f2-2025'
import { f32025 } from '../f3-2025'
import { dakar2025 } from '../dakar-2025'
import { motogp2025 } from '../motogp-2025'
import { fe2025 } from '../fe-2025'
import { mlmc2025 } from '../mlmc-2025'
import { gtwcam2025 } from '../gtwcam-2025'
import { britgt2025 } from '../britgt-2025'
import { gtwcau2025 } from '../gtwcau-2025'
import { gtwcasia2025 } from '../gtwcasia-2025'
import { twentyfourh2025 } from '../24h-2025'
import { special2025 } from '../special-2025'
import { wrx2025 } from '../wrx-2025'
import { porscheSupercup2025 } from '../porsche-supercup-2025'
import { f1Academy2025 } from '../f1-academy-2025'
import { moto22025 } from '../moto2-2025'
import { moto32025 } from '../moto3-2025'

export const events2025: Record<string, RaceEvent[]> = {
  'f1': f12025,
  'indycar': indycar2025,
  'nascar': nascar2025,
  'wec': wec2025,
  'imsa': imsa2025,
  'wrc': wrc2025,
  'dtm': dtm2025,
  'gtwc': gtwc2025,
  'nls': nls2025,
  'supergt': supergt2025,
  'elms': elms2025,
  'igtc': igtc2025,
  'superformula': superformula2025,
  'supercars': supercars2025,
  'f2': f22025,
  'f3': f32025,
  'dakar': dakar2025,
  'motogp': motogp2025,
  'fe': fe2025,
  'mlmc': mlmc2025,
  'gtwcam': gtwcam2025,
  'britgt': britgt2025,
  'gtwcau': gtwcau2025,
  'gtwcasia': gtwcasia2025,
  '24h': twentyfourh2025,
  'special': special2025,
  'wrx': wrx2025,
  'porsche-supercup': porscheSupercup2025,
  'f1-academy': f1Academy2025,
  'moto2': moto22025,
  'moto3': moto32025,
}
