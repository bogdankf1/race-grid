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

export interface ClassStandings {
  className: string
  drivers: DriverStandingEntry[]
  constructors: TeamStandingEntry[]
}

export interface SeasonStandings {
  drivers: DriverStandingEntry[]
  constructors: TeamStandingEntry[]
  /** Class name displayed for multi-class series (e.g., "Hypercar", "GTP", "GT500"). Optional for single-class series. */
  className?: string
  /** Additional class tables for multi-class series. The top-level drivers/constructors represent the primary class. */
  otherClasses?: ClassStandings[]
}
