import { getSeriesForYear, SERIES_META } from './series-registry'
import { getCircuit } from './circuits'
import { getResult } from './results'
import { getDriverEntries, getTeamEntries } from './entries'
import { getDriver } from './drivers'
import { getTeam } from './teams'

export interface DriverResultInfo {
  seriesId: string
  seriesShortName: string
  seriesColor: string
  seriesTextColor: string
  year: number
  eventId: string
  eventName: string
  circuitId: string
  circuitName: string
  raceDate: string
  round?: number
  sessionType: string
  position?: number
  teamId: string
}

export interface DriverSeasonSummary {
  seriesId: string
  seriesName: string
  seriesShortName: string
  seriesColor: string
  seriesTextColor: string
  year: number
  teamId: string
  teamName: string
  results: DriverResultInfo[]
  wins: number
  podiums: number
}

export function getDriverResults(driverId: string): DriverSeasonSummary[] {
  const entries = getDriverEntries(driverId)
  if (entries.length === 0) return []

  const summaries: DriverSeasonSummary[] = []

  for (const entry of entries) {
    const meta = SERIES_META.find(s => s.id === entry.seriesId)
    if (!meta) continue
    const team = getTeam(entry.teamId)

    const seriesData = getSeriesForYear(entry.year).find(s => s.id === entry.seriesId)
    if (!seriesData) continue

    const results: DriverResultInfo[] = []
    let wins = 0
    let podiums = 0

    for (const event of seriesData.events) {
      const circuit = getCircuit(event.circuitId)
      const lastSession = event.sessions[event.sessions.length - 1]
      const raceDate = lastSession ? lastSession.startUtc.slice(0, 10) : ''

      for (const type of ['race', 'endurance', 'sprint', 'stage'] as const) {
        const result = getResult(event.id, type)
        if (!result) continue

        // Check if this driver is in the results
        let position: number | undefined
        if (result.classes) {
          for (const cls of result.classes) {
            for (const entry of cls.podium) {
              // We need to check the normalized result — but getResult returns resolved names
              // So we check by short name
              const driver = getDriver(driverId)
              if (driver && entry.drivers.includes(driver.shortName)) {
                position = entry.position
              }
            }
          }
        }
        if (!position && result.overall) {
          const driver = getDriver(driverId)
          if (driver && result.overall.drivers.includes(driver.shortName)) {
            position = 1
          }
        }

        if (position !== undefined) {
          if (position === 1) wins++
          if (position <= 3) podiums++
          results.push({
            seriesId: entry.seriesId,
            seriesShortName: meta.shortName,
            seriesColor: meta.color,
            seriesTextColor: meta.textColor,
            year: entry.year,
            eventId: event.id,
            eventName: event.name,
            circuitId: event.circuitId,
            circuitName: circuit?.name ?? event.circuitId,
            raceDate,
            round: event.round,
            sessionType: type,
            position,
            teamId: entry.teamId,
          })
        }
      }
    }

    summaries.push({
      seriesId: entry.seriesId,
      seriesName: meta.name,
      seriesShortName: meta.shortName,
      seriesColor: meta.color,
      seriesTextColor: meta.textColor,
      year: entry.year,
      teamId: entry.teamId,
      teamName: team?.name ?? entry.teamId,
      results,
      wins,
      podiums,
    })
  }

  // Sort: newest year first, then by series
  return summaries.sort((a, b) => b.year - a.year || a.seriesName.localeCompare(b.seriesName))
}

export interface TeamResultInfo {
  eventId: string
  eventName: string
  circuitName: string
  raceDate: string
  round?: number
  sessionType: string
  winnerDrivers: string // resolved display string
  position: number
}

export interface TeamSeasonSummary {
  seriesId: string
  seriesName: string
  seriesShortName: string
  seriesColor: string
  seriesTextColor: string
  year: number
  driverIds: string[]
  driverNames: string[]
  wins: number
  results: TeamResultInfo[]
}

export function getTeamResults(teamId: string): TeamSeasonSummary[] {
  const entries = getTeamEntries(teamId)
  if (entries.length === 0) return []

  const summaries: TeamSeasonSummary[] = []
  const team = getTeam(teamId)

  for (const entry of entries) {
    const meta = SERIES_META.find(s => s.id === entry.seriesId)
    if (!meta) continue

    const driverNames = entry.driverIds.map(id => getDriver(id)?.name ?? id)

    const seriesData = getSeriesForYear(entry.year).find(s => s.id === entry.seriesId)
    let wins = 0
    const results: TeamResultInfo[] = []

    if (seriesData && team) {
      for (const event of seriesData.events) {
        const circuit = getCircuit(event.circuitId)
        const lastSession = event.sessions[event.sessions.length - 1]
        const raceDate = lastSession ? lastSession.startUtc.slice(0, 10) : ''

        for (const type of ['race', 'endurance', 'sprint', 'stage'] as const) {
          const result = getResult(event.id, type)
          if (!result) continue

          // Check if team is in results (overall or podium)
          let position: number | undefined
          let winnerDrivers = ''

          if (result.overall.team === team.name) {
            position = 1
            winnerDrivers = result.overall.drivers.join(', ')
            wins++
          } else if (result.classes) {
            for (const cls of result.classes) {
              for (const p of cls.podium) {
                if (p.team === team.name) {
                  position = p.position
                  winnerDrivers = p.drivers.join(', ')
                }
              }
            }
          }

          if (position !== undefined) {
            results.push({
              eventId: event.id,
              eventName: event.name,
              circuitName: circuit?.name ?? event.circuitId,
              raceDate,
              round: event.round,
              sessionType: type,
              winnerDrivers,
              position,
            })
          }
        }
      }
    }

    summaries.push({
      seriesId: entry.seriesId,
      seriesName: meta.name,
      seriesShortName: meta.shortName,
      seriesColor: meta.color,
      seriesTextColor: meta.textColor,
      year: entry.year,
      driverIds: entry.driverIds,
      driverNames,
      wins,
      results,
    })
  }

  return summaries.sort((a, b) => b.year - a.year || a.seriesName.localeCompare(b.seriesName))
}
