import type { RaceResult, SessionType } from '@/lib/types'
import type { EventResults } from './types'
import { resolveResult } from './resolve'
import { f1Results2022 } from './f1-2022'
import { f1Results2023 } from './f1-2023'
import { f1Results2024 } from './f1-2024'
import { f1Results2025 } from './f1-2025'
import { f1Results2026 } from './f1-2026'
import { nascarResults2025 } from './nascar-2025'
import { nascarResults2026 } from './nascar-2026'
import { indycarResults2025 } from './indycar-2025'
import { indycarResults2026 } from './indycar-2026'
import { wecResults2025 } from './wec-2025'
import { wrcResults2025 } from './wrc-2025'
import { wrcResults2026 } from './wrc-2026'
import { imsaResults2025 } from './imsa-2025'
import { dtmResults2025 } from './dtm-2025'
import { gtwcResults2025 } from './gtwc-2025'
import { nlsResults2025 } from './nls-2025'
import { supergtResults2025 } from './supergt-2025'
import { elmsResults2025 } from './elms-2025'
import { igtcResults2025 } from './igtc-2025'
import { superformulaResults2025 } from './superformula-2025'
import { supercarsResults2025 } from './supercars-2025'
import { nlsResults2026 } from './nls-2026'
import { imsaResults2026 } from './imsa-2026'
import { igtcResults2026 } from './igtc-2026'
import { supercarsResults2026 } from './supercars-2026'
import { dtmResults2026 } from './dtm-2026'
import { elmsResults2026 } from './elms-2026'
import { gtwcResults2026 } from './gtwc-2026'
import { superformulaResults2026 } from './superformula-2026'
import { supergtResults2026 } from './supergt-2026'
import { wecResults2026 } from './wec-2026'
import { f2Results2025 } from './f2-2025'
import { f2Results2026 } from './f2-2026'
import { f3Results2025 } from './f3-2025'
import { f3Results2026 } from './f3-2026'
import { dakarResults2025 } from './dakar-2025'
import { dakarResults2026 } from './dakar-2026'
import { motogpResults2025 } from './motogp-2025'
import { motogpResults2026 } from './motogp-2026'
import { feResults2025 } from './fe-2025'
import { feResults2026 } from './fe-2026'
import { mlmcResults2026 } from './mlmc-2026'

const ALL_RESULTS: Record<string, EventResults> = {
  ...f1Results2022,
  ...f1Results2023,
  ...f1Results2024,
  ...f1Results2025,
  ...f1Results2026,
  ...nascarResults2025,
  ...nascarResults2026,
  ...indycarResults2025,
  ...indycarResults2026,
  ...wecResults2025,
  ...wrcResults2025,
  ...wrcResults2026,
  ...imsaResults2025,
  ...dtmResults2025,
  ...gtwcResults2025,
  ...nlsResults2025,
  ...supergtResults2025,
  ...elmsResults2025,
  ...igtcResults2025,
  ...superformulaResults2025,
  ...supercarsResults2025,
  ...nlsResults2026,
  ...imsaResults2026,
  ...igtcResults2026,
  ...supercarsResults2026,
  ...dtmResults2026,
  ...elmsResults2026,
  ...gtwcResults2026,
  ...superformulaResults2026,
  ...supergtResults2026,
  ...wecResults2026,
  ...f2Results2025,
  ...f2Results2026,
  ...f3Results2025,
  ...f3Results2026,
  ...dakarResults2025,
  ...dakarResults2026,
  ...motogpResults2025,
  ...motogpResults2026,
  ...feResults2025,
  ...feResults2026,
  ...mlmcResults2026,
}

export function getResult(eventId: string, sessionType: SessionType): RaceResult | null {
  const normalized = ALL_RESULTS[eventId]?.[sessionType]
  if (!normalized) return null
  return resolveResult(normalized)
}
