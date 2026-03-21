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

export interface SeriesConfig {
  id: string
  name: string
  shortName: string
  color: string
  textColor: string
  events: RaceEvent[]
}
