import type { SeasonStandings } from './types'

// Formula E Season 12 (2025-26) standings — after Monaco E-Prix doubleheader (Rounds 9-10)
// Source: racingnews365.com, fiaformulae.com
export const feStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'm-evans', teamId: 'jaguar-racing', points: 128, wins: 2 },
    { position: 2, driverId: 'rowland', teamId: 'nissan-fe', points: 109, wins: 1 },
    { position: 3, driverId: 'mortara', teamId: 'mahindra-racing', points: 103, wins: 0 },
    { position: 4, driverId: 'wehrlein', teamId: 'porsche-fe', points: 101, wins: 1 },
    { position: 5, driverId: 'n-muller', teamId: 'porsche-fe', points: 81, wins: 1 },
    { position: 6, driverId: 'da-costa', teamId: 'jaguar-racing', points: 80, wins: 2 },
    { position: 7, driverId: 'j-dennis', teamId: 'andretti-fe', points: 74, wins: 1 },
    { position: 8, driverId: 'n-cassidy', teamId: 'citroen-racing-fe', points: 71, wins: 1 },
    { position: 9, driverId: 'buemi', teamId: 'envision-racing', points: 65, wins: 0 },
    { position: 10, driverId: 'de-vries', teamId: 'mahindra-racing', points: 41, wins: 1 },
  ],
  constructors: [
    { position: 1, teamId: 'jaguar-racing', points: 208, wins: 4 },
    { position: 2, teamId: 'porsche-fe', points: 182, wins: 2 },
    { position: 3, teamId: 'mahindra-racing', points: 144, wins: 1 },
    { position: 4, teamId: 'nissan-fe', points: 120, wins: 1 },
    { position: 5, teamId: 'andretti-fe', points: 106, wins: 1 },
  ],
}
