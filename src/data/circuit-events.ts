import { getSeriesForYear, AVAILABLE_YEARS, SERIES_META } from './series-registry'
import { getCircuit, getAllCircuits, type Circuit } from './circuits'
import { getResult } from './results'

export interface CircuitEventInfo {
  seriesId: string
  seriesName: string
  seriesShortName: string
  seriesColor: string
  seriesTextColor: string
  eventId: string
  eventName: string
  year: number
  round?: number
  totalRounds: number
  raceDate: string // yyyy-MM-dd of the last session
  raceSessionType?: string
  winnerDisplay?: string // resolved display string like "Norris (McLaren)"
}

export interface CircuitWithEvents extends Circuit {
  seriesIds: string[]
  events: CircuitEventInfo[]
}

function buildCircuitEventsMap(): Map<string, CircuitEventInfo[]> {
  const map = new Map<string, CircuitEventInfo[]>()

  for (const year of AVAILABLE_YEARS) {
    for (const series of getSeriesForYear(year)) {
      const totalRounds = Math.max(series.events.length, ...series.events.map(e => e.round ?? 0))
      for (const event of series.events) {
        const circuitId = event.circuitId
        if (!map.has(circuitId)) map.set(circuitId, [])

        // Find the last session date (race day)
        const lastSession = event.sessions[event.sessions.length - 1]
        const raceDate = lastSession ? lastSession.startUtc.slice(0, 10) : ''

        // Find race/endurance result for winner display
        let winnerDisplay: string | undefined
        let raceSessionType: string | undefined
        for (const type of ['race', 'endurance', 'stage'] as const) {
          const result = getResult(event.id, type)
          if (result) {
            raceSessionType = type
            const drivers = result.overall.drivers.join(', ')
            winnerDisplay = `${drivers} (${result.overall.team})`
            break
          }
        }

        map.get(circuitId)!.push({
          seriesId: series.id,
          seriesName: series.name,
          seriesShortName: series.shortName,
          seriesColor: series.color,
          seriesTextColor: series.textColor,
          eventId: event.id,
          eventName: event.name,
          year,
          round: event.round,
          totalRounds,
          raceDate,
          raceSessionType,
          winnerDisplay,
        })
      }
    }
  }

  return map
}

let _cache: Map<string, CircuitEventInfo[]> | null = null

function getCircuitEventsMap(): Map<string, CircuitEventInfo[]> {
  if (!_cache) _cache = buildCircuitEventsMap()
  return _cache
}

export function getCircuitEvents(circuitId: string): CircuitEventInfo[] {
  return getCircuitEventsMap().get(circuitId) ?? []
}

export function getCircuitWithEvents(circuitId: string): CircuitWithEvents | null {
  const circuit = getCircuit(circuitId)
  if (!circuit) return null
  const events = getCircuitEvents(circuitId)
  const seriesIds = [...new Set(events.map(e => e.seriesId))]
  return { ...circuit, seriesIds, events }
}

export function getAllCircuitsWithEvents(): CircuitWithEvents[] {
  const allCircuits = getAllCircuits()
  const eventsMap = getCircuitEventsMap()

  return allCircuits
    .map(circuit => {
      const events = eventsMap.get(circuit.id) ?? []
      const seriesIds = [...new Set(events.map(e => e.seriesId))]
      return { ...circuit, seriesIds, events }
    })
    .filter(c => c.events.length > 0)
    .sort((a, b) => a.name.localeCompare(b.name))
}

export function getSeriesMeta(seriesId: string) {
  return SERIES_META.find(s => s.id === seriesId) ?? null
}
