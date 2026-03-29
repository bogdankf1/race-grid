/**
 * Generate static .ics subscription feeds at build time.
 * Creates public/calendar/<series-id>.ics + public/calendar/all.ics
 *
 * Run: npx tsx scripts/generate-ics.ts
 */
import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

// Use relative imports since this runs outside Next.js
import { ALL_SERIES } from '../src/data/series-registry'
import { generateSeriesIcs, generateAllSeriesIcs } from '../src/lib/ical'

const outDir = join(process.cwd(), 'public', 'calendar')
mkdirSync(outDir, { recursive: true })

// Generate per-series .ics files
for (const series of ALL_SERIES) {
  const ics = generateSeriesIcs(series.events, series.name)
  const path = join(outDir, `${series.id}.ics`)
  writeFileSync(path, ics, 'utf-8')
  console.log(`  Generated ${series.id}.ics (${series.events.length} events)`)
}

// Generate all-series combined .ics
const allIcs = generateAllSeriesIcs(
  ALL_SERIES.map(s => ({ name: s.name, events: s.events }))
)
writeFileSync(join(outDir, 'all.ics'), allIcs, 'utf-8')
console.log(`  Generated all.ics (${ALL_SERIES.reduce((n, s) => n + s.events.length, 0)} events)`)

console.log('Done.')
