export interface DriverStandingEntry {
  position: number
  driverId: string
  teamId: string
  points: number
  wins: number
}

export interface TeamStandingEntry {
  position: number
  teamId: string
  points: number
  wins: number
}

export interface SeasonStandings {
  drivers: DriverStandingEntry[]
  constructors: TeamStandingEntry[]
}
