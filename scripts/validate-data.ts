/**
 * Data validation script — checks referential integrity across all data files.
 * Run: npx tsx scripts/validate-data.ts
 */

import { getDriver, getAllDrivers } from '@/data/drivers'
import { getTeam, getAllTeams } from '@/data/teams'
import { getCircuit } from '@/data/circuits'
import { getSeriesForYear, AVAILABLE_YEARS, SERIES_META } from '@/data/series-registry'
import { getEntries } from '@/data/entries'
import { getStandings } from '@/data/standings'

let errors = 0
let warnings = 0

function error(msg: string) {
  console.error(`  ❌ ${msg}`)
  errors++
}

function warn(msg: string) {
  console.warn(`  ⚠️  ${msg}`)
  warnings++
}

// 1. Validate circuit references in calendar data
console.log('\n🔍 Checking circuit references...')
for (const year of AVAILABLE_YEARS) {
  for (const series of getSeriesForYear(year)) {
    for (const event of series.events) {
      if (!getCircuit(event.circuitId)) {
        error(`${series.id}-${year}: event "${event.name}" references unknown circuit "${event.circuitId}"`)
      }
    }
  }
}

// 2. Validate entry references
console.log('🔍 Checking entry references...')
for (const seriesMeta of SERIES_META) {
  for (const year of AVAILABLE_YEARS) {
    const entries = getEntries(seriesMeta.id, year)
    for (const entry of entries) {
      if (!getDriver(entry.driverId)) {
        error(`${seriesMeta.id}-${year} entries: unknown driver "${entry.driverId}"`)
      }
      if (!getTeam(entry.teamId)) {
        error(`${seriesMeta.id}-${year} entries: unknown team "${entry.teamId}"`)
      }
    }
  }
}

// 3. Validate standings references
console.log('🔍 Checking standings references...')
for (const seriesMeta of SERIES_META) {
  for (const year of AVAILABLE_YEARS) {
    const standings = getStandings(seriesMeta.id, year)
    if (!standings) continue
    for (const d of standings.drivers) {
      if (!getDriver(d.driverId)) {
        error(`${seriesMeta.id}-${year} standings: unknown driver "${d.driverId}"`)
      }
      if (!getTeam(d.teamId)) {
        error(`${seriesMeta.id}-${year} standings: unknown team "${d.teamId}"`)
      }
    }
    for (const c of standings.constructors) {
      if (!getTeam(c.teamId)) {
        error(`${seriesMeta.id}-${year} standings constructors: unknown team "${c.teamId}"`)
      }
    }
  }
}

// 4. Check for duplicate driver IDs (same name, different ID)
console.log('🔍 Checking for potential duplicate drivers...')
const driversByName = new Map<string, string[]>()
for (const driver of getAllDrivers()) {
  const existing = driversByName.get(driver.name) || []
  existing.push(driver.id)
  driversByName.set(driver.name, existing)
}
for (const [name, ids] of driversByName) {
  if (ids.length > 1) {
    warn(`Duplicate driver name "${name}" has IDs: ${ids.join(', ')}`)
  }
}

// 5. Check for duplicate team IDs (same name, different ID)
console.log('🔍 Checking for potential duplicate teams...')
const teamsByName = new Map<string, string[]>()
for (const team of getAllTeams()) {
  const existing = teamsByName.get(team.name) || []
  existing.push(team.id)
  teamsByName.set(team.name, existing)
}
for (const [name, ids] of teamsByName) {
  if (ids.length > 1) {
    warn(`Duplicate team name "${name}" has IDs: ${ids.join(', ')}`)
  }
}

// 6. Check session types are valid
console.log('🔍 Checking session types...')
const validTypes = new Set(['race', 'qualifying', 'sprint', 'sprint_qualifying', 'hyperpole', 'practice', 'warmup', 'stage', 'shakedown', 'endurance'])
for (const year of AVAILABLE_YEARS) {
  for (const series of getSeriesForYear(year)) {
    for (const event of series.events) {
      for (const session of event.sessions) {
        if (!validTypes.has(session.type)) {
          error(`${series.id}-${year}: event "${event.name}" has invalid session type "${session.type}"`)
        }
      }
    }
  }
}

// Summary
console.log('\n' + '─'.repeat(50))
if (errors === 0 && warnings === 0) {
  console.log('✅ All data validation checks passed!')
} else {
  console.log(`\n${errors} error(s), ${warnings} warning(s)`)
  if (errors > 0) process.exit(1)
}
