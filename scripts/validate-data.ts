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
import { iterateSessions } from '@/lib/iterate-sessions'

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
//    Historical seasons (year < 2025) reference defunct regional GT teams and
//    one-off drivers that aren't worth bloating the registry with. Treat those
//    as warnings. Current/future seasons (year >= 2025) stay as errors so real
//    typos in active data still fail the lint.
console.log('🔍 Checking entry references...')
for (const seriesMeta of SERIES_META) {
  for (const year of AVAILABLE_YEARS) {
    const entries = getEntries(seriesMeta.id, year)
    const report = year < 2025 ? warn : error
    for (const entry of entries) {
      if (!getDriver(entry.driverId)) {
        report(`${seriesMeta.id}-${year} entries: unknown driver "${entry.driverId}"`)
      }
      if (!getTeam(entry.teamId)) {
        report(`${seriesMeta.id}-${year} entries: unknown team "${entry.teamId}"`)
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
  for (const { series, event, session } of iterateSessions(getSeriesForYear(year))) {
    if (!validTypes.has(session.type)) {
      error(`${series.id}-${year}: event "${event.name}" has invalid session type "${session.type}"`)
    }
  }
}

// 7. ISO 8601 validity for session.startUtc
//    Each startUtc must parse via new Date() and round-trip equal itself
//    after toISOString normalization (catches typos like missing leading zero
//    or invalid month/day values).
console.log('🔍 Checking ISO 8601 validity of startUtc...')
for (const year of AVAILABLE_YEARS) {
  for (const { series, event, session } of iterateSessions(getSeriesForYear(year))) {
    const raw = session.startUtc
    const parsed = new Date(raw)
    if (Number.isNaN(parsed.getTime())) {
      error(`${series.id}-${year}: event "${event.name}" session "${session.label}" has unparseable startUtc "${raw}"`)
      continue
    }
    // Round-trip via toISOString to catch values like "2026-13-40T..." which
    // Date may silently coerce, or strings whose normalized form differs.
    const normalized = parsed.toISOString()
    // Allow both with-ms (".000Z") and without-ms ("Z") forms — strip ms before comparing.
    const stripMs = (s: string) => s.replace(/\.\d{3}Z$/, 'Z')
    if (stripMs(normalized) !== stripMs(raw)) {
      error(
        `${series.id}-${year}: event "${event.name}" session "${session.label}" startUtc "${raw}" is not canonical ISO 8601 (parsed as ${normalized})`
      )
    }
  }
}

// 8. Sane session durations: 0 < durationMinutes <= 2880 (48h covers Le Mans 24h).
//    Anything larger is almost certainly a typo or unit confusion.
console.log('🔍 Checking session durations...')
for (const year of AVAILABLE_YEARS) {
  for (const { series, event, session } of iterateSessions(getSeriesForYear(year))) {
    if (session.durationMinutes === undefined) continue // optional
    const d = session.durationMinutes
    if (!Number.isFinite(d) || d <= 0) {
      error(
        `${series.id}-${year}: event "${event.name}" session "${session.label}" has non-positive durationMinutes (${d})`
      )
    } else if (d > 2880) {
      error(
        `${series.id}-${year}: event "${event.name}" session "${session.label}" has durationMinutes ${d} (> 48h, suspicious)`
      )
    }
  }
}

// 9. Overlapping sessions within the same event.
//    Sort sessions by startUtc; for each consecutive pair, the previous session's
//    end (start + durationMinutes) must not exceed the next session's start.
//    Sessions without durationMinutes are treated as 0-length for this check
//    (they cannot meaningfully overlap a following session).
console.log('🔍 Checking for overlapping sessions within events...')
for (const year of AVAILABLE_YEARS) {
  for (const series of getSeriesForYear(year)) {
    for (const event of series.events) {
      const sorted = [...event.sessions]
        .map((s, idx) => ({ s, idx, start: new Date(s.startUtc).getTime() }))
        .filter(({ start }) => Number.isFinite(start))
        .sort((a, b) => a.start - b.start)

      for (let i = 1; i < sorted.length; i++) {
        const prev = sorted[i - 1]
        const next = sorted[i]
        const prevDuration = prev.s.durationMinutes ?? 0
        const prevEnd = prev.start + prevDuration * 60_000
        if (prevEnd > next.start) {
          const overlapMin = Math.round((prevEnd - next.start) / 60_000)
          error(
            `${series.id}-${year}: event "${event.name}" sessions overlap — "${prev.s.label}" (${prev.s.startUtc}, ${prevDuration}min) overruns "${next.s.label}" (${next.s.startUtc}) by ${overlapMin} min`
          )
        }
      }
    }
  }
}

// 10. Round numbers unique within a series-year.
//     Two events in the same series cannot share a `round` number.
console.log('🔍 Checking round numbers are unique within each series...')
for (const year of AVAILABLE_YEARS) {
  for (const series of getSeriesForYear(year)) {
    const seenRounds = new Map<number, string>() // round -> first event name
    for (const event of series.events) {
      if (event.round === undefined) continue // round is optional for some series
      const existing = seenRounds.get(event.round)
      if (existing !== undefined) {
        error(
          `${series.id}-${year}: round ${event.round} is assigned to both "${existing}" and "${event.name}"`
        )
      } else {
        seenRounds.set(event.round, event.name)
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
