import type { SeasonStandings } from './types'
import { f1Standings2021 } from './f1-2021'
import { f1Standings2022 } from './f1-2022'
import { f1Standings2023 } from './f1-2023'
import { f1Standings2024 } from './f1-2024'
import { f1Standings2025 } from './f1-2025'
import { f1Standings2026 } from './f1-2026'
import { indycarStandings2021 } from './indycar-2021'
import { indycarStandings2022 } from './indycar-2022'
import { indycarStandings2023 } from './indycar-2023'
import { indycarStandings2024 } from './indycar-2024'
import { indycarStandings2025 } from './indycar-2025'
import { indycarStandings2026 } from './indycar-2026'
import { nascarStandings2021 } from './nascar-2021'
import { nascarStandings2022 } from './nascar-2022'
import { nascarStandings2023 } from './nascar-2023'
import { nascarStandings2024 } from './nascar-2024'
import { nascarStandings2025 } from './nascar-2025'
import { nascarStandings2026 } from './nascar-2026'
import { wecStandings2021 } from './wec-2021'
import { wecStandings2022 } from './wec-2022'
import { wecStandings2023 } from './wec-2023'
import { wecStandings2024 } from './wec-2024'
import { wecStandings2025 } from './wec-2025'
import { wecStandings2026 } from './wec-2026'
import { wrcStandings2021 } from './wrc-2021'
import { wrcStandings2022 } from './wrc-2022'
import { wrcStandings2023 } from './wrc-2023'
import { wrcStandings2024 } from './wrc-2024'
import { wrcStandings2025 } from './wrc-2025'
import { wrcStandings2026 } from './wrc-2026'
import { imsaStandings2021 } from './imsa-2021'
import { imsaStandings2022 } from './imsa-2022'
import { imsaStandings2023 } from './imsa-2023'
import { imsaStandings2024 } from './imsa-2024'
import { imsaStandings2025 } from './imsa-2025'
import { imsaStandings2026 } from './imsa-2026'
import { gtwcStandings2021 } from './gtwc-2021'
import { gtwcStandings2022 } from './gtwc-2022'
import { gtwcStandings2023 } from './gtwc-2023'
import { gtwcStandings2024 } from './gtwc-2024'
import { gtwcStandings2025 } from './gtwc-2025'
import { igtcStandings2021 } from './igtc-2021'
import { igtcStandings2022 } from './igtc-2022'
import { igtcStandings2023 } from './igtc-2023'
import { igtcStandings2024 } from './igtc-2024'
import { igtcStandings2025 } from './igtc-2025'
import { dtmStandings2021 } from './dtm-2021'
import { dtmStandings2022 } from './dtm-2022'
import { dtmStandings2023 } from './dtm-2023'
import { dtmStandings2024 } from './dtm-2024'
import { dtmStandings2025 } from './dtm-2025'
import { superformulaStandings2021 } from './superformula-2021'
import { superformulaStandings2022 } from './superformula-2022'
import { superformulaStandings2023 } from './superformula-2023'
import { superformulaStandings2024 } from './superformula-2024'
import { superformulaStandings2025 } from './superformula-2025'
import { supergtStandings2021 } from './supergt-2021'
import { supergtStandings2022 } from './supergt-2022'
import { supergtStandings2023 } from './supergt-2023'
import { supergtStandings2024 } from './supergt-2024'
import { supergtStandings2025 } from './supergt-2025'
import { supercarsStandings2021 } from './supercars-2021'
import { supercarsStandings2022 } from './supercars-2022'
import { supercarsStandings2023 } from './supercars-2023'
import { supercarsStandings2024 } from './supercars-2024'
import { supercarsStandings2025 } from './supercars-2025'
import { supercarsStandings2026 } from './supercars-2026'
import { superformulaStandings2026 } from './superformula-2026'
import { gtwcStandings2026 } from './gtwc-2026'
import { supergtStandings2026 } from './supergt-2026'
import { igtcStandings2026 } from './igtc-2026'
import { elmsStandings2021 } from './elms-2021'
import { elmsStandings2022 } from './elms-2022'
import { elmsStandings2023 } from './elms-2023'
import { elmsStandings2024 } from './elms-2024'
import { elmsStandings2025 } from './elms-2025'
import { elmsStandings2026 } from './elms-2026'
import { f2Standings2021 } from './f2-2021'
import { f2Standings2022 } from './f2-2022'
import { f2Standings2023 } from './f2-2023'
import { f2Standings2024 } from './f2-2024'
import { f2Standings2025 } from './f2-2025'
import { f2Standings2026 } from './f2-2026'
import { f3Standings2021 } from './f3-2021'
import { f3Standings2022 } from './f3-2022'
import { f3Standings2023 } from './f3-2023'
import { f3Standings2024 } from './f3-2024'
import { f3Standings2025 } from './f3-2025'
import { f3Standings2026 } from './f3-2026'
import { dakarStandings2021 } from './dakar-2021'
import { dakarStandings2022 } from './dakar-2022'
import { dakarStandings2023 } from './dakar-2023'
import { dakarStandings2024 } from './dakar-2024'
import { dakarStandings2025 } from './dakar-2025'
import { dakarStandings2026 } from './dakar-2026'
import { motogpStandings2021 } from './motogp-2021'
import { motogpStandings2022 } from './motogp-2022'
import { motogpStandings2023 } from './motogp-2023'
import { motogpStandings2024 } from './motogp-2024'
import { motogpStandings2025 } from './motogp-2025'
import { motogpStandings2026 } from './motogp-2026'
import { feStandings2021 } from './fe-2021'
import { feStandings2022 } from './fe-2022'
import { feStandings2023 } from './fe-2023'
import { feStandings2024 } from './fe-2024'
import { feStandings2025 } from './fe-2025'
import { feStandings2026 } from './fe-2026'
import { mlmcStandings2021 } from './mlmc-2021'
import { mlmcStandings2022 } from './mlmc-2022'
import { mlmcStandings2023 } from './mlmc-2023'
import { mlmcStandings2024 } from './mlmc-2024'
import { mlmcStandings2025 } from './mlmc-2025'
import { mlmcStandings2026 } from './mlmc-2026'

const ALL_STANDINGS: Record<string, SeasonStandings> = {
  'f1-2021': f1Standings2021,
  'f1-2022': f1Standings2022,
  'f1-2023': f1Standings2023,
  'f1-2024': f1Standings2024,
  'f1-2025': f1Standings2025,
  'f1-2026': f1Standings2026,
  'indycar-2021': indycarStandings2021,
  'indycar-2022': indycarStandings2022,
  'indycar-2023': indycarStandings2023,
  'indycar-2024': indycarStandings2024,
  'indycar-2025': indycarStandings2025,
  'indycar-2026': indycarStandings2026,
  'nascar-2021': nascarStandings2021,
  'nascar-2022': nascarStandings2022,
  'nascar-2023': nascarStandings2023,
  'nascar-2024': nascarStandings2024,
  'nascar-2025': nascarStandings2025,
  'nascar-2026': nascarStandings2026,
  'wec-2021': wecStandings2021,
  'wec-2022': wecStandings2022,
  'wec-2023': wecStandings2023,
  'wec-2024': wecStandings2024,
  'wec-2025': wecStandings2025,
  'wec-2026': wecStandings2026,
  'wrc-2021': wrcStandings2021,
  'wrc-2022': wrcStandings2022,
  'wrc-2023': wrcStandings2023,
  'wrc-2024': wrcStandings2024,
  'wrc-2025': wrcStandings2025,
  'wrc-2026': wrcStandings2026,
  'imsa-2021': imsaStandings2021,
  'imsa-2022': imsaStandings2022,
  'imsa-2023': imsaStandings2023,
  'imsa-2024': imsaStandings2024,
  'imsa-2025': imsaStandings2025,
  'imsa-2026': imsaStandings2026,
  'gtwc-2021': gtwcStandings2021,
  'gtwc-2022': gtwcStandings2022,
  'gtwc-2023': gtwcStandings2023,
  'gtwc-2024': gtwcStandings2024,
  'gtwc-2025': gtwcStandings2025,
  'igtc-2021': igtcStandings2021,
  'igtc-2022': igtcStandings2022,
  'igtc-2023': igtcStandings2023,
  'igtc-2024': igtcStandings2024,
  'igtc-2025': igtcStandings2025,
  'dtm-2021': dtmStandings2021,
  'dtm-2022': dtmStandings2022,
  'dtm-2023': dtmStandings2023,
  'dtm-2024': dtmStandings2024,
  'dtm-2025': dtmStandings2025,
  'superformula-2021': superformulaStandings2021,
  'superformula-2022': superformulaStandings2022,
  'superformula-2023': superformulaStandings2023,
  'superformula-2024': superformulaStandings2024,
  'superformula-2025': superformulaStandings2025,
  'supergt-2021': supergtStandings2021,
  'supergt-2022': supergtStandings2022,
  'supergt-2023': supergtStandings2023,
  'supergt-2024': supergtStandings2024,
  'supergt-2025': supergtStandings2025,
  'supercars-2021': supercarsStandings2021,
  'supercars-2022': supercarsStandings2022,
  'supercars-2023': supercarsStandings2023,
  'supercars-2024': supercarsStandings2024,
  'supercars-2025': supercarsStandings2025,
  'supercars-2026': supercarsStandings2026,
  'superformula-2026': superformulaStandings2026,
  'gtwc-2026': gtwcStandings2026,
  'supergt-2026': supergtStandings2026,
  'igtc-2026': igtcStandings2026,
  'elms-2021': elmsStandings2021,
  'elms-2022': elmsStandings2022,
  'elms-2023': elmsStandings2023,
  'elms-2024': elmsStandings2024,
  'elms-2025': elmsStandings2025,
  'elms-2026': elmsStandings2026,
  'f2-2021': f2Standings2021,
  'f2-2022': f2Standings2022,
  'f2-2023': f2Standings2023,
  'f2-2024': f2Standings2024,
  'f2-2025': f2Standings2025,
  'f2-2026': f2Standings2026,
  'f3-2021': f3Standings2021,
  'f3-2022': f3Standings2022,
  'f3-2023': f3Standings2023,
  'f3-2024': f3Standings2024,
  'f3-2025': f3Standings2025,
  'f3-2026': f3Standings2026,
  'dakar-2021': dakarStandings2021,
  'dakar-2022': dakarStandings2022,
  'dakar-2023': dakarStandings2023,
  'dakar-2024': dakarStandings2024,
  'dakar-2025': dakarStandings2025,
  'dakar-2026': dakarStandings2026,
  'motogp-2021': motogpStandings2021,
  'motogp-2022': motogpStandings2022,
  'motogp-2023': motogpStandings2023,
  'motogp-2024': motogpStandings2024,
  'motogp-2025': motogpStandings2025,
  'motogp-2026': motogpStandings2026,
  'fe-2021': feStandings2021,
  'fe-2022': feStandings2022,
  'fe-2023': feStandings2023,
  'fe-2024': feStandings2024,
  'fe-2025': feStandings2025,
  'fe-2026': feStandings2026,
  'mlmc-2021': mlmcStandings2021,
  'mlmc-2022': mlmcStandings2022,
  'mlmc-2023': mlmcStandings2023,
  'mlmc-2024': mlmcStandings2024,
  'mlmc-2025': mlmcStandings2025,
  'mlmc-2026': mlmcStandings2026,
}

export function getStandings(seriesId: string, year: number): SeasonStandings | null {
  return ALL_STANDINGS[`${seriesId}-${year}`] ?? null
}

export function hasStandings(seriesId: string, year: number): boolean {
  return `${seriesId}-${year}` in ALL_STANDINGS
}
