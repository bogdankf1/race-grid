import type { RaceResult, SessionType } from '@/lib/types'
import type { EventResults } from './types'
import { resolveResult } from './resolve'
import { f1Results2021 } from './f1-2021'
import { f1Results2022 } from './f1-2022'
import { f1Results2023 } from './f1-2023'
import { f1Results2024 } from './f1-2024'
import { f1Results2025 } from './f1-2025'
import { f1Results2026 } from './f1-2026'
import { nascarResults2021 } from './nascar-2021'
import { nascarResults2022 } from './nascar-2022'
import { nascarResults2023 } from './nascar-2023'
import { nascarResults2024 } from './nascar-2024'
import { nascarResults2025 } from './nascar-2025'
import { nascarResults2026 } from './nascar-2026'
import { indycarResults2021 } from './indycar-2021'
import { indycarResults2022 } from './indycar-2022'
import { indycarResults2023 } from './indycar-2023'
import { indycarResults2024 } from './indycar-2024'
import { indycarResults2025 } from './indycar-2025'
import { indycarResults2026 } from './indycar-2026'
import { wecResults2021 } from './wec-2021'
import { wecResults2022 } from './wec-2022'
import { wecResults2023 } from './wec-2023'
import { wecResults2024 } from './wec-2024'
import { wecResults2025 } from './wec-2025'
import { wrcResults2021 } from './wrc-2021'
import { wrcResults2022 } from './wrc-2022'
import { wrcResults2023 } from './wrc-2023'
import { wrcResults2024 } from './wrc-2024'
import { wrcResults2025 } from './wrc-2025'
import { wrcResults2026 } from './wrc-2026'
import { imsaResults2021 } from './imsa-2021'
import { imsaResults2022 } from './imsa-2022'
import { imsaResults2023 } from './imsa-2023'
import { imsaResults2024 } from './imsa-2024'
import { imsaResults2025 } from './imsa-2025'
import { dtmResults2021 } from './dtm-2021'
import { dtmResults2022 } from './dtm-2022'
import { dtmResults2023 } from './dtm-2023'
import { dtmResults2024 } from './dtm-2024'
import { dtmResults2025 } from './dtm-2025'
import { gtwcResults2021 } from './gtwc-2021'
import { gtwcResults2022 } from './gtwc-2022'
import { gtwcResults2023 } from './gtwc-2023'
import { gtwcResults2024 } from './gtwc-2024'
import { gtwcResults2025 } from './gtwc-2025'
import { nlsResults2021 } from './nls-2021'
import { nlsResults2022 } from './nls-2022'
import { nlsResults2023 } from './nls-2023'
import { nlsResults2024 } from './nls-2024'
import { nlsResults2025 } from './nls-2025'
import { supergtResults2021 } from './supergt-2021'
import { supergtResults2022 } from './supergt-2022'
import { supergtResults2023 } from './supergt-2023'
import { supergtResults2024 } from './supergt-2024'
import { supergtResults2025 } from './supergt-2025'
import { elmsResults2021 } from './elms-2021'
import { elmsResults2022 } from './elms-2022'
import { elmsResults2023 } from './elms-2023'
import { elmsResults2024 } from './elms-2024'
import { elmsResults2025 } from './elms-2025'
import { igtcResults2021 } from './igtc-2021'
import { igtcResults2022 } from './igtc-2022'
import { igtcResults2023 } from './igtc-2023'
import { igtcResults2024 } from './igtc-2024'
import { igtcResults2025 } from './igtc-2025'
import { superformulaResults2021 } from './superformula-2021'
import { superformulaResults2022 } from './superformula-2022'
import { superformulaResults2023 } from './superformula-2023'
import { superformulaResults2024 } from './superformula-2024'
import { superformulaResults2025 } from './superformula-2025'
import { supercarsResults2021 } from './supercars-2021'
import { supercarsResults2022 } from './supercars-2022'
import { supercarsResults2023 } from './supercars-2023'
import { supercarsResults2024 } from './supercars-2024'
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
import { f2Results2021 } from './f2-2021'
import { f2Results2022 } from './f2-2022'
import { f2Results2023 } from './f2-2023'
import { f2Results2024 } from './f2-2024'
import { f2Results2025 } from './f2-2025'
import { f2Results2026 } from './f2-2026'
import { f3Results2021 } from './f3-2021'
import { f3Results2022 } from './f3-2022'
import { f3Results2023 } from './f3-2023'
import { f3Results2024 } from './f3-2024'
import { f3Results2025 } from './f3-2025'
import { f3Results2026 } from './f3-2026'
import { dakarResults2021 } from './dakar-2021'
import { dakarResults2022 } from './dakar-2022'
import { dakarResults2023 } from './dakar-2023'
import { dakarResults2024 } from './dakar-2024'
import { dakarResults2025 } from './dakar-2025'
import { dakarResults2026 } from './dakar-2026'
import { motogpResults2021 } from './motogp-2021'
import { motogpResults2022 } from './motogp-2022'
import { motogpResults2023 } from './motogp-2023'
import { motogpResults2024 } from './motogp-2024'
import { motogpResults2025 } from './motogp-2025'
import { motogpResults2026 } from './motogp-2026'
import { feResults2021 } from './fe-2021'
import { feResults2022 } from './fe-2022'
import { feResults2023 } from './fe-2023'
import { feResults2024 } from './fe-2024'
import { feResults2025 } from './fe-2025'
import { feResults2026 } from './fe-2026'
import { mlmcResults2021 } from './mlmc-2021'
import { mlmcResults2022 } from './mlmc-2022'
import { mlmcResults2023 } from './mlmc-2023'
import { mlmcResults2024 } from './mlmc-2024'
import { mlmcResults2025 } from './mlmc-2025'
import { mlmcResults2026 } from './mlmc-2026'

const ALL_RESULTS: Record<string, EventResults> = {
  ...f1Results2021,
  ...f1Results2022,
  ...f1Results2023,
  ...f1Results2024,
  ...f1Results2025,
  ...f1Results2026,
  ...nascarResults2021,
  ...nascarResults2022,
  ...nascarResults2023,
  ...nascarResults2024,
  ...nascarResults2025,
  ...nascarResults2026,
  ...indycarResults2021,
  ...indycarResults2022,
  ...indycarResults2023,
  ...indycarResults2024,
  ...indycarResults2025,
  ...indycarResults2026,
  ...wecResults2021,
  ...wecResults2022,
  ...wecResults2023,
  ...wecResults2024,
  ...wecResults2025,
  ...wrcResults2021,
  ...wrcResults2022,
  ...wrcResults2023,
  ...wrcResults2024,
  ...wrcResults2025,
  ...wrcResults2026,
  ...imsaResults2021,
  ...imsaResults2022,
  ...imsaResults2023,
  ...imsaResults2024,
  ...imsaResults2025,
  ...dtmResults2021,
  ...dtmResults2022,
  ...dtmResults2023,
  ...dtmResults2024,
  ...dtmResults2025,
  ...gtwcResults2021,
  ...gtwcResults2022,
  ...gtwcResults2023,
  ...gtwcResults2024,
  ...gtwcResults2025,
  ...nlsResults2021,
  ...nlsResults2022,
  ...nlsResults2023,
  ...nlsResults2024,
  ...nlsResults2025,
  ...supergtResults2021,
  ...supergtResults2022,
  ...supergtResults2023,
  ...supergtResults2024,
  ...supergtResults2025,
  ...elmsResults2021,
  ...elmsResults2022,
  ...elmsResults2023,
  ...elmsResults2024,
  ...elmsResults2025,
  ...igtcResults2021,
  ...igtcResults2022,
  ...igtcResults2023,
  ...igtcResults2024,
  ...igtcResults2025,
  ...superformulaResults2021,
  ...superformulaResults2022,
  ...superformulaResults2023,
  ...superformulaResults2024,
  ...superformulaResults2025,
  ...supercarsResults2021,
  ...supercarsResults2022,
  ...supercarsResults2023,
  ...supercarsResults2024,
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
  ...f2Results2021,
  ...f2Results2022,
  ...f2Results2023,
  ...f2Results2024,
  ...f2Results2025,
  ...f2Results2026,
  ...f3Results2021,
  ...f3Results2022,
  ...f3Results2023,
  ...f3Results2024,
  ...f3Results2025,
  ...f3Results2026,
  ...dakarResults2021,
  ...dakarResults2022,
  ...dakarResults2023,
  ...dakarResults2024,
  ...dakarResults2025,
  ...dakarResults2026,
  ...motogpResults2021,
  ...motogpResults2022,
  ...motogpResults2023,
  ...motogpResults2024,
  ...motogpResults2025,
  ...motogpResults2026,
  ...feResults2021,
  ...feResults2022,
  ...feResults2023,
  ...feResults2024,
  ...feResults2025,
  ...feResults2026,
  ...mlmcResults2021,
  ...mlmcResults2022,
  ...mlmcResults2023,
  ...mlmcResults2024,
  ...mlmcResults2025,
  ...mlmcResults2026,
}

export function getResult(eventId: string, sessionType: SessionType): RaceResult | null {
  const normalized = ALL_RESULTS[eventId]?.[sessionType]
  if (!normalized) return null
  return resolveResult(normalized)
}
