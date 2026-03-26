import { RaceResult, SessionType } from '@/lib/types'
import { EventResults } from './types'
import { f1Results2026 } from './f1-2026'
import { nascarResults2026 } from './nascar-2026'
import { indycarResults2026 } from './indycar-2026'
import { wrcResults2026 } from './wrc-2026'
import { nlsResults2026 } from './nls-2026'
import { imsaResults2026 } from './imsa-2026'
import { igtcResults2026 } from './igtc-2026'
import { supercarsResults2026 } from './supercars-2026'

const ALL_RESULTS: Record<string, EventResults> = {
  ...f1Results2026,
  ...nascarResults2026,
  ...indycarResults2026,
  ...wrcResults2026,
  ...nlsResults2026,
  ...imsaResults2026,
  ...igtcResults2026,
  ...supercarsResults2026,
}

export function getResult(eventId: string, sessionType: SessionType): RaceResult | null {
  return ALL_RESULTS[eventId]?.[sessionType] ?? null
}
