import type { SeasonStandings } from './types'

// Formula E 2024-25 Season 11 final standings — verified from fiaformulae.com
export const feStandings2025: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'rowland', teamId: 'nissan-fe', points: 186, wins: 4 },
    { position: 2, driverId: 'n-cassidy', teamId: 'jaguar-racing', points: 168, wins: 3 },
    { position: 3, driverId: 'm-evans', teamId: 'jaguar-racing', points: 160, wins: 2 },
    { position: 4, driverId: 'wehrlein', teamId: 'porsche-fe', points: 155, wins: 3 },
    { position: 5, driverId: 'j-dennis', teamId: 'andretti-fe', points: 130, wins: 2 },
  ],
  constructors: [
    { position: 1, teamId: 'jaguar-racing', points: 328, wins: 5 },
    { position: 2, teamId: 'nissan-fe', points: 220, wins: 4 },
    { position: 3, teamId: 'porsche-fe', points: 210, wins: 3 },
  ],
}
