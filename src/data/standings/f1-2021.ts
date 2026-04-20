import type { SeasonStandings } from './types'

// F1 2021 final standings — verified from formula1.com, formulaonehistory.com
// Champion: Max Verstappen (Red Bull) — first title, won on last lap of last race
export const f1Standings2021: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'verstappen', teamId: 'red-bull-racing', points: 395.5, wins: 10 },
    { position: 2, driverId: 'hamilton', teamId: 'mercedes', points: 387.5, wins: 8 },
    { position: 3, driverId: 'bottas', teamId: 'mercedes', points: 226, wins: 1 },
    { position: 4, driverId: 'perez', teamId: 'red-bull-racing', points: 190, wins: 1 },
    { position: 5, driverId: 'sainz', teamId: 'ferrari', points: 164.5, wins: 0 },
    { position: 6, driverId: 'norris', teamId: 'mclaren', points: 160, wins: 0 },
    { position: 7, driverId: 'leclerc', teamId: 'ferrari', points: 159, wins: 0 },
    { position: 8, driverId: 'ricciardo', teamId: 'mclaren', points: 115, wins: 1 },
    { position: 9, driverId: 'gasly', teamId: 'alphatauri', points: 110, wins: 0 },
    { position: 10, driverId: 'alonso', teamId: 'alpine', points: 81, wins: 0 },
    { position: 11, driverId: 'ocon', teamId: 'alpine', points: 74, wins: 1 },
    { position: 12, driverId: 'vettel', teamId: 'aston-martin', points: 43, wins: 0 },
    { position: 13, driverId: 'stroll', teamId: 'aston-martin', points: 34, wins: 0 },
    { position: 14, driverId: 'tsunoda', teamId: 'alphatauri', points: 32, wins: 0 },
    { position: 15, driverId: 'russell', teamId: 'williams', points: 16, wins: 0 },
    { position: 16, driverId: 'raikkonen', teamId: 'alfa-romeo', points: 10, wins: 0 },
    { position: 17, driverId: 'latifi', teamId: 'williams', points: 7, wins: 0 },
    { position: 18, driverId: 'giovinazzi', teamId: 'alfa-romeo', points: 3, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'mercedes', points: 613.5, wins: 9 },
    { position: 2, teamId: 'red-bull-racing', points: 585.5, wins: 11 },
    { position: 3, teamId: 'ferrari', points: 323.5, wins: 0 },
    { position: 4, teamId: 'mclaren', points: 275, wins: 1 },
    { position: 5, teamId: 'alpine', points: 155, wins: 1 },
    { position: 6, teamId: 'alphatauri', points: 142, wins: 0 },
    { position: 7, teamId: 'aston-martin', points: 77, wins: 0 },
    { position: 8, teamId: 'williams', points: 23, wins: 0 },
    { position: 9, teamId: 'alfa-romeo', points: 13, wins: 0 },
    { position: 10, teamId: 'haas', points: 0, wins: 0 },
  ],
}
