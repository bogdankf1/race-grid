import type { SeasonStandings } from './types'

// Formula E Season 12 (2025-26) standings — verified from fiaformulae.com (after Round 6 Madrid)
export const feStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'wehrlein', teamId: 'porsche-fe', points: 83, wins: 1 },
    { position: 2, driverId: 'mortara', teamId: 'mahindra-racing', points: 72, wins: 0 },
    { position: 3, driverId: 'm-evans', teamId: 'jaguar-racing', points: 65, wins: 1 },
    { position: 4, driverId: 'da-costa', teamId: 'jaguar-racing', points: 64, wins: 2 },
    { position: 5, driverId: 'n-cassidy', teamId: 'citroen-racing-fe', points: 51, wins: 1 },
    { position: 6, driverId: 'n-muller', teamId: 'porsche-fe', points: 50, wins: 0 },
    { position: 7, driverId: 'rowland', teamId: 'nissan-fe', points: 49, wins: 0 },
    { position: 8, driverId: 'j-dennis', teamId: 'andretti-fe', points: 47, wins: 1 },
    { position: 9, driverId: 'buemi', teamId: 'envision-racing', points: 43, wins: 0 },
    { position: 10, driverId: 'ticktum', teamId: 'cupra-kiro', points: 22, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'porsche-fe', points: 133, wins: 1 },
    { position: 2, teamId: 'jaguar-racing', points: 129, wins: 3 },
    { position: 3, teamId: 'mahindra-racing', points: 84, wins: 0 },
    { position: 4, teamId: 'envision-racing', points: 62, wins: 0 },
    { position: 5, teamId: 'citroen-racing-fe', points: 61, wins: 1 },
  ],
}
