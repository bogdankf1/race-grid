import type { SeasonStandings } from './types'
import { f1Standings2022 } from './f1-2022'
import { f1Standings2023 } from './f1-2023'
import { f1Standings2024 } from './f1-2024'
import { f1Standings2025 } from './f1-2025'
import { f1Standings2026 } from './f1-2026'
import { indycarStandings2025 } from './indycar-2025'
import { indycarStandings2026 } from './indycar-2026'
import { nascarStandings2025 } from './nascar-2025'
import { nascarStandings2026 } from './nascar-2026'
import { wecStandings2025 } from './wec-2025'
import { wecStandings2026 } from './wec-2026'
import { wrcStandings2025 } from './wrc-2025'
import { wrcStandings2026 } from './wrc-2026'
import { imsaStandings2025 } from './imsa-2025'
import { imsaStandings2026 } from './imsa-2026'
import { gtwcStandings2025 } from './gtwc-2025'
import { igtcStandings2025 } from './igtc-2025'
import { dtmStandings2025 } from './dtm-2025'
import { superformulaStandings2025 } from './superformula-2025'
import { supergtStandings2025 } from './supergt-2025'
import { supercarsStandings2025 } from './supercars-2025'
import { supercarsStandings2026 } from './supercars-2026'
import { superformulaStandings2026 } from './superformula-2026'
import { gtwcStandings2026 } from './gtwc-2026'
import { supergtStandings2026 } from './supergt-2026'
import { igtcStandings2026 } from './igtc-2026'
import { elmsStandings2025 } from './elms-2025'
import { elmsStandings2026 } from './elms-2026'
import { f2Standings2025 } from './f2-2025'
import { f2Standings2026 } from './f2-2026'
import { f3Standings2025 } from './f3-2025'
import { f3Standings2026 } from './f3-2026'
import { dakarStandings2025 } from './dakar-2025'
import { dakarStandings2026 } from './dakar-2026'
import { motogpStandings2025 } from './motogp-2025'
import { motogpStandings2026 } from './motogp-2026'
import { feStandings2025 } from './fe-2025'
import { feStandings2026 } from './fe-2026'
import { mlmcStandings2026 } from './mlmc-2026'

const ALL_STANDINGS: Record<string, SeasonStandings> = {
  'f1-2022': f1Standings2022,
  'f1-2023': f1Standings2023,
  'f1-2024': f1Standings2024,
  'f1-2025': f1Standings2025,
  'f1-2026': f1Standings2026,
  'indycar-2025': indycarStandings2025,
  'indycar-2026': indycarStandings2026,
  'nascar-2025': nascarStandings2025,
  'nascar-2026': nascarStandings2026,
  'wec-2025': wecStandings2025,
  'wec-2026': wecStandings2026,
  'wrc-2025': wrcStandings2025,
  'wrc-2026': wrcStandings2026,
  'imsa-2025': imsaStandings2025,
  'imsa-2026': imsaStandings2026,
  'gtwc-2025': gtwcStandings2025,
  'igtc-2025': igtcStandings2025,
  'dtm-2025': dtmStandings2025,
  'superformula-2025': superformulaStandings2025,
  'supergt-2025': supergtStandings2025,
  'supercars-2025': supercarsStandings2025,
  'supercars-2026': supercarsStandings2026,
  'superformula-2026': superformulaStandings2026,
  'gtwc-2026': gtwcStandings2026,
  'supergt-2026': supergtStandings2026,
  'igtc-2026': igtcStandings2026,
  'elms-2025': elmsStandings2025,
  'elms-2026': elmsStandings2026,
  'f2-2025': f2Standings2025,
  'f2-2026': f2Standings2026,
  'f3-2025': f3Standings2025,
  'f3-2026': f3Standings2026,
  'dakar-2025': dakarStandings2025,
  'dakar-2026': dakarStandings2026,
  'motogp-2025': motogpStandings2025,
  'motogp-2026': motogpStandings2026,
  'fe-2025': feStandings2025,
  'fe-2026': feStandings2026,
  'mlmc-2026': mlmcStandings2026,
}

export function getStandings(seriesId: string, year: number): SeasonStandings | null {
  return ALL_STANDINGS[`${seriesId}-${year}`] ?? null
}

export function hasStandings(seriesId: string, year: number): boolean {
  return `${seriesId}-${year}` in ALL_STANDINGS
}
