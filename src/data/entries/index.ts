import type { EntryItem } from './types'
import { f1Entries2022 } from './f1-2022'
import { f1Entries2023 } from './f1-2023'
import { f1Entries2024 } from './f1-2024'
import { f1Entries2025 } from './f1-2025'
import { f1Entries2026 } from './f1-2026'
import { nascarEntries2025 } from './nascar-2025'
import { nascarEntries2026 } from './nascar-2026'
import { indycarEntries2025 } from './indycar-2025'
import { indycarEntries2026 } from './indycar-2026'
import { wecEntries2025 } from './wec-2025'
import { wrcEntries2025 } from './wrc-2025'
import { wrcEntries2026 } from './wrc-2026'
import { imsaEntries2025 } from './imsa-2025'
import { imsaEntries2026 } from './imsa-2026'
import { dtmEntries2025 } from './dtm-2025'
import { gtwcEntries2025 } from './gtwc-2025'
import { nlsEntries2025 } from './nls-2025'
import { nlsEntries2026 } from './nls-2026'
import { supergtEntries2025 } from './supergt-2025'
import { elmsEntries2025 } from './elms-2025'
import { igtcEntries2025 } from './igtc-2025'
import { igtcEntries2026 } from './igtc-2026'
import { superformulaEntries2025 } from './superformula-2025'
import { supercarsEntries2025 } from './supercars-2025'
import { supercarsEntries2026 } from './supercars-2026'
import { f2Entries2025 } from './f2-2025'
import { f2Entries2026 } from './f2-2026'
import { f3Entries2025 } from './f3-2025'
import { f3Entries2026 } from './f3-2026'
import { dakarEntries2025 } from './dakar-2025'
import { dakarEntries2026 } from './dakar-2026'
import { motogpEntries2025 } from './motogp-2025'
import { motogpEntries2026 } from './motogp-2026'
import { feEntries2025 } from './fe-2025'
import { feEntries2026 } from './fe-2026'
import { mlmcEntries2026 } from './mlmc-2026'
import { gtwcamEntries2026 } from './gtwcam-2026'
import { gtwcasiaEntries2026 } from './gtwcasia-2026'
import { britgtEntries2026 } from './britgt-2026'
import { gtwcauEntries2026 } from './gtwcau-2026'
import { wecEntries2026 } from './wec-2026'
import { dtmEntries2026 } from './dtm-2026'
import { gtwcEntries2026 } from './gtwc-2026'
import { supergtEntries2026 } from './supergt-2026'
import { elmsEntries2026 } from './elms-2026'
import { superformulaEntries2026 } from './superformula-2026'
// 2024 imports
import { indycarEntries2024 } from './indycar-2024'
import { nascarEntries2024 } from './nascar-2024'
import { wrcEntries2024 } from './wrc-2024'
import { supercarsEntries2024 } from './supercars-2024'
import { superformulaEntries2024 } from './superformula-2024'
import { supergtEntries2024 } from './supergt-2024'
import { dtmEntries2024 } from './dtm-2024'
import { f2Entries2024 } from './f2-2024'
import { f3Entries2024 } from './f3-2024'
import { feEntries2024 } from './fe-2024'
import { motogpEntries2024 } from './motogp-2024'
import { wecEntries2024 } from './wec-2024'
import { imsaEntries2024 } from './imsa-2024'
import { elmsEntries2024 } from './elms-2024'
import { gtwcEntries2024 } from './gtwc-2024'
import { igtcEntries2024 } from './igtc-2024'
import { nlsEntries2024 } from './nls-2024'
import { dakarEntries2024 } from './dakar-2024'
// 2023 imports
import { indycarEntries2023 } from './indycar-2023'
import { nascarEntries2023 } from './nascar-2023'
import { wrcEntries2023 } from './wrc-2023'
import { supercarsEntries2023 } from './supercars-2023'
import { motogpEntries2023 } from './motogp-2023'
import { feEntries2023 } from './fe-2023'
import { f2Entries2023 } from './f2-2023'
import { f3Entries2023 } from './f3-2023'
import { dtmEntries2023 } from './dtm-2023'
import { superformulaEntries2023 } from './superformula-2023'
import { supergtEntries2023 } from './supergt-2023'
import { wecEntries2023 } from './wec-2023'
import { dakarEntries2023 } from './dakar-2023'
import { imsaEntries2023 } from './imsa-2023'
import { elmsEntries2023 } from './elms-2023'
import { gtwcEntries2023 } from './gtwc-2023'
import { igtcEntries2023 } from './igtc-2023'
import { nlsEntries2023 } from './nls-2023'
// 2022 imports
import { dakarEntries2022 } from './dakar-2022'
import { dtmEntries2022 } from './dtm-2022'
import { elmsEntries2022 } from './elms-2022'
import { f2Entries2022 } from './f2-2022'
import { feEntries2022 } from './fe-2022'
import { gtwcEntries2022 } from './gtwc-2022'
import { igtcEntries2022 } from './igtc-2022'
import { imsaEntries2022 } from './imsa-2022'
import { indycarEntries2022 } from './indycar-2022'
import { motogpEntries2022 } from './motogp-2022'
import { nascarEntries2022 } from './nascar-2022'
import { nlsEntries2022 } from './nls-2022'
import { supercarsEntries2022 } from './supercars-2022'
import { superformulaEntries2022 } from './superformula-2022'
import { supergtEntries2022 } from './supergt-2022'
import { wecEntries2022 } from './wec-2022'
import { wrcEntries2022 } from './wrc-2022'
// 2021 imports
import { dakarEntries2021 } from './dakar-2021'
import { dtmEntries2021 } from './dtm-2021'
import { elmsEntries2021 } from './elms-2021'
import { f1Entries2021 } from './f1-2021'
import { f2Entries2021 } from './f2-2021'
import { f3Entries2021 } from './f3-2021'
import { feEntries2021 } from './fe-2021'
import { gtwcEntries2021 } from './gtwc-2021'
import { igtcEntries2021 } from './igtc-2021'
import { imsaEntries2021 } from './imsa-2021'
import { indycarEntries2021 } from './indycar-2021'
import { motogpEntries2021 } from './motogp-2021'
import { nascarEntries2021 } from './nascar-2021'
import { nlsEntries2021 } from './nls-2021'
import { supercarsEntries2021 } from './supercars-2021'
import { superformulaEntries2021 } from './superformula-2021'
import { supergtEntries2021 } from './supergt-2021'
import { wecEntries2021 } from './wec-2021'
import { wrcEntries2021 } from './wrc-2021'

const ALL_ENTRIES: Record<string, EntryItem[]> = {
  'f1-2022': f1Entries2022,
  'f1-2023': f1Entries2023,
  'f1-2024': f1Entries2024,
  'f1-2025': f1Entries2025,
  'f1-2026': f1Entries2026,
  'nascar-2025': nascarEntries2025,
  'nascar-2026': nascarEntries2026,
  'indycar-2025': indycarEntries2025,
  'indycar-2026': indycarEntries2026,
  'wec-2025': wecEntries2025,
  'wrc-2025': wrcEntries2025,
  'wrc-2026': wrcEntries2026,
  'imsa-2025': imsaEntries2025,
  'imsa-2026': imsaEntries2026,
  'dtm-2025': dtmEntries2025,
  'gtwc-2025': gtwcEntries2025,
  'nls-2025': nlsEntries2025,
  'nls-2026': nlsEntries2026,
  'supergt-2025': supergtEntries2025,
  'elms-2025': elmsEntries2025,
  'igtc-2025': igtcEntries2025,
  'igtc-2026': igtcEntries2026,
  'superformula-2025': superformulaEntries2025,
  'supercars-2025': supercarsEntries2025,
  'supercars-2026': supercarsEntries2026,
  'f2-2025': f2Entries2025,
  'f2-2026': f2Entries2026,
  'f3-2025': f3Entries2025,
  'f3-2026': f3Entries2026,
  'dakar-2025': dakarEntries2025,
  'dakar-2026': dakarEntries2026,
  'motogp-2025': motogpEntries2025,
  'motogp-2026': motogpEntries2026,
  'fe-2025': feEntries2025,
  'fe-2026': feEntries2026,
  'mlmc-2026': mlmcEntries2026,
  'gtwcam-2026': gtwcamEntries2026,
  'gtwcasia-2026': gtwcasiaEntries2026,
  'britgt-2026': britgtEntries2026,
  'gtwcau-2026': gtwcauEntries2026,
  'wec-2026': wecEntries2026,
  'dtm-2026': dtmEntries2026,
  'gtwc-2026': gtwcEntries2026,
  'supergt-2026': supergtEntries2026,
  'elms-2026': elmsEntries2026,
  'superformula-2026': superformulaEntries2026,
  // 2024
  'indycar-2024': indycarEntries2024,
  'nascar-2024': nascarEntries2024,
  'wrc-2024': wrcEntries2024,
  'supercars-2024': supercarsEntries2024,
  'superformula-2024': superformulaEntries2024,
  'supergt-2024': supergtEntries2024,
  'dtm-2024': dtmEntries2024,
  'f2-2024': f2Entries2024,
  'f3-2024': f3Entries2024,
  'fe-2024': feEntries2024,
  'motogp-2024': motogpEntries2024,
  'wec-2024': wecEntries2024,
  'imsa-2024': imsaEntries2024,
  'elms-2024': elmsEntries2024,
  'gtwc-2024': gtwcEntries2024,
  'igtc-2024': igtcEntries2024,
  'nls-2024': nlsEntries2024,
  'dakar-2024': dakarEntries2024,
  // 2023
  'indycar-2023': indycarEntries2023,
  'nascar-2023': nascarEntries2023,
  'wrc-2023': wrcEntries2023,
  'supercars-2023': supercarsEntries2023,
  'motogp-2023': motogpEntries2023,
  'fe-2023': feEntries2023,
  'f2-2023': f2Entries2023,
  'f3-2023': f3Entries2023,
  'dtm-2023': dtmEntries2023,
  'superformula-2023': superformulaEntries2023,
  'supergt-2023': supergtEntries2023,
  'wec-2023': wecEntries2023,
  'dakar-2023': dakarEntries2023,
  'imsa-2023': imsaEntries2023,
  'elms-2023': elmsEntries2023,
  'gtwc-2023': gtwcEntries2023,
  'igtc-2023': igtcEntries2023,
  'nls-2023': nlsEntries2023,
  // 2022
  'dakar-2022': dakarEntries2022,
  'dtm-2022': dtmEntries2022,
  'elms-2022': elmsEntries2022,
  'f2-2022': f2Entries2022,
  'fe-2022': feEntries2022,
  'gtwc-2022': gtwcEntries2022,
  'igtc-2022': igtcEntries2022,
  'imsa-2022': imsaEntries2022,
  'indycar-2022': indycarEntries2022,
  'motogp-2022': motogpEntries2022,
  'nascar-2022': nascarEntries2022,
  'nls-2022': nlsEntries2022,
  'supercars-2022': supercarsEntries2022,
  'superformula-2022': superformulaEntries2022,
  'supergt-2022': supergtEntries2022,
  'wec-2022': wecEntries2022,
  'wrc-2022': wrcEntries2022,
  // 2021
  'dakar-2021': dakarEntries2021,
  'dtm-2021': dtmEntries2021,
  'elms-2021': elmsEntries2021,
  'f1-2021': f1Entries2021,
  'f2-2021': f2Entries2021,
  'f3-2021': f3Entries2021,
  'fe-2021': feEntries2021,
  'gtwc-2021': gtwcEntries2021,
  'igtc-2021': igtcEntries2021,
  'imsa-2021': imsaEntries2021,
  'indycar-2021': indycarEntries2021,
  'motogp-2021': motogpEntries2021,
  'nascar-2021': nascarEntries2021,
  'nls-2021': nlsEntries2021,
  'supercars-2021': supercarsEntries2021,
  'superformula-2021': superformulaEntries2021,
  'supergt-2021': supergtEntries2021,
  'wec-2021': wecEntries2021,
  'wrc-2021': wrcEntries2021,
}

export function getEntries(seriesId: string, year: number): EntryItem[] {
  return ALL_ENTRIES[`${seriesId}-${year}`] ?? []
}

export function getDriverEntries(driverId: string): { seriesId: string, year: number, teamId: string }[] {
  const results: { seriesId: string, year: number, teamId: string }[] = []
  for (const [key, entries] of Object.entries(ALL_ENTRIES)) {
    const match = key.match(/^(.+)-(\d{4})$/)
    if (!match) continue
    const seriesId = match[1]
    const year = parseInt(match[2], 10)
    for (const entry of entries) {
      if (entry.driverId === driverId) {
        results.push({ seriesId, year, teamId: entry.teamId })
      }
    }
  }
  return results
}

export function getTeamEntries(teamId: string): { seriesId: string, year: number, driverIds: string[] }[] {
  const results: { seriesId: string, year: number, driverIds: string[] }[] = []
  for (const [key, entries] of Object.entries(ALL_ENTRIES)) {
    const match = key.match(/^(.+)-(\d{4})$/)
    if (!match) continue
    const seriesId = match[1]
    const year = parseInt(match[2], 10)
    const driverIds = entries
      .filter(e => e.teamId === teamId)
      .map(e => e.driverId)
    if (driverIds.length > 0) {
      results.push({ seriesId, year, driverIds })
    }
  }
  return results
}
