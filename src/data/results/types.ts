import type { SessionType } from '@/lib/types'

export interface NormalizedPodiumEntry {
  position: number
  driverIds: string[]
  teamId: string
}

export interface NormalizedClassResult {
  className: string
  podium: NormalizedPodiumEntry[]
}

export interface NormalizedRaceResult {
  overall: {
    driverIds: string[]
    teamId: string
  }
  classes?: NormalizedClassResult[]
  fastestLapDriverId?: string
}

export type EventResults = Partial<Record<SessionType, NormalizedRaceResult>>
