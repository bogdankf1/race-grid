export type SessionType =
  | 'race'
  | 'qualifying'
  | 'sprint'
  | 'sprint_qualifying'
  | 'hyperpole'
  | 'practice'
  | 'warmup'
  | 'stage'
  | 'shakedown'
  | 'endurance'

export interface Session {
  type: SessionType
  label: string
  startUtc: string
  durationMinutes?: number
}

export interface RaceEvent {
  id: string
  round?: number
  name: string
  circuit: string
  country: string
  countryCode: string
  sessions: Session[]
}

export interface PodiumEntry {
  position: number
  drivers: string[]
  team: string
}

export interface ClassResult {
  className: string
  podium: PodiumEntry[]
}

export interface RaceResult {
  overall: {
    drivers: string[]
    team: string
  }
  classes?: ClassResult[]
  fastestLap?: string
}

export interface SeriesConfig {
  id: string
  name: string
  shortName: string
  color: string
  textColor: string
  logoBgWhite?: boolean
  events: RaceEvent[]
}
