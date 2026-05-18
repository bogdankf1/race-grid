import type { SeasonStandings } from './types'

// IGTC 2026 standings — after Round 2 (24h Nürburgring)
// Source: pitdebrief.com, intercontinentalgtchallenge.com
export const igtcStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'engel', teamId: 'mercedes-amg', points: 50, wins: 2 },
    { position: 2, driverId: 'martin', teamId: 'mercedes-amg', points: 50, wins: 2 },
    { position: 3, driverId: 'stolz', teamId: 'mercedes-amg', points: 33, wins: 1 },
    { position: 4, driverId: 'hesse-m', teamId: 'bmw-m', points: 30, wins: 0 },
    { position: 5, driverId: 'grenier', teamId: 'mercedes-amg', points: 25, wins: 1 },
    { position: 6, driverId: 'schiller', teamId: 'mercedes-amg', points: 25, wins: 1 },
    { position: 7, driverId: 'buus', teamId: 'porsche-motorsport', points: 22, wins: 0 },
    { position: 8, driverId: 'heinrich', teamId: 'porsche-motorsport', points: 21, wins: 0 },
    { position: 9, driverId: 'feller', teamId: 'porsche-motorsport', points: 21, wins: 0 },
    { position: 10, driverId: 'boccolacci', teamId: 'porsche-motorsport', points: 18, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'mercedes-amg', points: 64, wins: 2 },
    { position: 2, teamId: 'porsche-motorsport', points: 55, wins: 0 },
    { position: 3, teamId: 'bmw-m', points: 53, wins: 0 },
    { position: 4, teamId: 'ferrari', points: 10, wins: 0 },
    { position: 5, teamId: 'ford-multimatic', points: 10, wins: 0 },
  ],
}
