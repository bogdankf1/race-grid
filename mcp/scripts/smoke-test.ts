import {
  ensureLoaded,
  listSeries,
  getCalendar,
  findNextRace,
  getEventResults,
  getChampionshipStandings,
  getCircuitInfo,
  searchRaces,
} from '../src/data-bridge'

async function main() {
  await ensureLoaded()
  const series = listSeries()
  console.log('series count:', series.length)
  console.log('first series:', series[0])

  const cal = getCalendar('f1', 2026)
  console.log('f1 2026 events:', cal.length, '— first:', cal[0]?.name, 'at', cal[0]?.circuitName)

  const next = findNextRace(new Date('2026-05-12T00:00:00Z'))
  console.log('next race after 2026-05-12:', next?.name, `(${next?.seriesId})`)

  const monacoF1 = getEventResults('f1-2024-monaco')
  console.log('f1-2024-monaco sessions:', monacoF1.length, '— race winner:', monacoF1.find(r => r.sessionType === 'race')?.overall?.drivers)

  const standings = getChampionshipStandings('f1', 2024)
  console.log('f1 2024 champion:', standings?.drivers[0]?.name, 'with', standings?.drivers[0]?.points, 'pts')

  const circuit = getCircuitInfo('circuit-de-monaco')
  console.log('monaco circuit:', circuit?.length, circuit?.turns, 'turns')

  const search = searchRaces({ fromDate: '2026-05-01', toDate: '2026-05-31' })
  console.log('races in May 2026:', search.length)
}

main().catch((e) => {
  console.error('SMOKE-ERR:', e)
  process.exit(1)
})
