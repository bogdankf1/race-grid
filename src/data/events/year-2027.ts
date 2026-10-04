import type { RaceEvent } from '@/lib/types'

// 2027 season — only series whose 2027 calendar has been published are included.
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
}
