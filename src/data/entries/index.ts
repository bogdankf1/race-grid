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
