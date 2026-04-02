import { getAllDrivers } from './drivers'
import { getAllTeams } from './teams'

let _driverNameMap: Map<string, string> | null = null
let _teamNameMap: Map<string, string> | null = null

/** Reverse lookup: shortName → driverId */
export function getDriverIdByName(shortName: string): string | null {
  if (!_driverNameMap) {
    _driverNameMap = new Map()
    for (const d of getAllDrivers()) {
      _driverNameMap.set(d.shortName, d.id)
    }
  }
  return _driverNameMap.get(shortName) ?? null
}

/** Reverse lookup: team display name → teamId */
export function getTeamIdByName(name: string): string | null {
  if (!_teamNameMap) {
    _teamNameMap = new Map()
    for (const t of getAllTeams()) {
      _teamNameMap.set(t.name, t.id)
    }
  }
  return _teamNameMap.get(name) ?? null
}
