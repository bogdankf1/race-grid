import type { RaceEvent } from '@/lib/types'

import { f12024 } from '../f1-2024'
import { indycar2024 } from '../indycar-2024'
import { nascar2024 } from '../nascar-2024'
import { wec2024 } from '../wec-2024'
import { imsa2024 } from '../imsa-2024'
import { wrc2024 } from '../wrc-2024'
import { dtm2024 } from '../dtm-2024'
import { gtwc2024 } from '../gtwc-2024'
import { nls2024 } from '../nls-2024'
import { supergt2024 } from '../supergt-2024'
import { elms2024 } from '../elms-2024'
import { igtc2024 } from '../igtc-2024'
import { superformula2024 } from '../superformula-2024'
import { supercars2024 } from '../supercars-2024'
import { f22024 } from '../f2-2024'
import { f32024 } from '../f3-2024'
import { dakar2024 } from '../dakar-2024'
import { motogp2024 } from '../motogp-2024'
import { fe2024 } from '../fe-2024'
import { mlmc2024 } from '../mlmc-2024'
import { gtwcam2024 } from '../gtwcam-2024'
import { britgt2024 } from '../britgt-2024'
import { gtwcau2024 } from '../gtwcau-2024'
import { gtwcasia2024 } from '../gtwcasia-2024'
import { twentyfourh2024 } from '../24h-2024'
import { special2024 } from '../special-2024'
import { wrx2024 } from '../wrx-2024'
import { porscheSupercup2024 } from '../porsche-supercup-2024'
import { f1Academy2024 } from '../f1-academy-2024'
import { moto22024 } from '../moto2-2024'
import { moto32024 } from '../moto3-2024'
import { indyNxt2024 } from '../indy-nxt-2024'
import { nascarXfinity2024 } from '../nascar-xfinity-2024'
import { nascarTruck2024 } from '../nascar-truck-2024'
import { impc2024 } from '../impc-2024'

export const events2024: Record<string, RaceEvent[]> = {
  'f1': f12024,
  'indycar': indycar2024,
  'nascar': nascar2024,
  'wec': wec2024,
  'imsa': imsa2024,
  'wrc': wrc2024,
  'dtm': dtm2024,
  'gtwc': gtwc2024,
  'nls': nls2024,
  'supergt': supergt2024,
  'elms': elms2024,
  'igtc': igtc2024,
  'superformula': superformula2024,
  'supercars': supercars2024,
  'f2': f22024,
  'f3': f32024,
  'dakar': dakar2024,
  'motogp': motogp2024,
  'fe': fe2024,
  'mlmc': mlmc2024,
  'gtwcam': gtwcam2024,
  'britgt': britgt2024,
  'gtwcau': gtwcau2024,
  'gtwcasia': gtwcasia2024,
  '24h': twentyfourh2024,
  'special': special2024,
  'wrx': wrx2024,
  'porsche-supercup': porscheSupercup2024,
  'f1-academy': f1Academy2024,
  'moto2': moto22024,
  'moto3': moto32024,
  'indy-nxt': indyNxt2024,
  'nascar-xfinity': nascarXfinity2024,
  'nascar-truck': nascarTruck2024,
  'impc': impc2024,
}
