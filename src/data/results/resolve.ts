import type { RaceResult, PodiumEntry, ClassResult } from '@/lib/types'
import type { NormalizedRaceResult, NormalizedPodiumEntry, NormalizedClassResult } from './types'
import { getDriver } from '@/data/drivers'
import { getTeam } from '@/data/teams'

function resolveDriverName(id: string): string {
  return getDriver(id)?.shortName ?? id
}

function resolveTeamName(id: string): string {
  return getTeam(id)?.name ?? id
}

function resolvePodium(entry: NormalizedPodiumEntry): PodiumEntry {
  return {
    position: entry.position,
    drivers: entry.driverIds.map(resolveDriverName),
    team: resolveTeamName(entry.teamId),
  }
}

function resolveClass(cls: NormalizedClassResult): ClassResult {
  return {
    className: cls.className,
    podium: cls.podium.map(resolvePodium),
  }
}

export function resolveResult(normalized: NormalizedRaceResult): RaceResult {
  return {
    overall: {
      drivers: normalized.overall.driverIds.map(resolveDriverName),
      team: resolveTeamName(normalized.overall.teamId),
    },
    classes: normalized.classes?.map(resolveClass),
    fastestLap: normalized.fastestLapDriverId ? resolveDriverName(normalized.fastestLapDriverId) : undefined,
  }
}
