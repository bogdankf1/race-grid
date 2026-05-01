import type { SeasonStandings } from './types'

// British GT Championship 2026 standings — after Round 1 (Silverstone 500)
// Source: Wikipedia, britishgt.com
export const britgtStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'beeson', teamId: 'century-motorsport', points: 37.5, wins: 0 },
    { position: 2, driverId: 'clutton', teamId: 'orange-racing', points: 27, wins: 0 },
    { position: 3, driverId: 'martin-a', teamId: 'barwell-motorsport', points: 22.5, wins: 0 },
    { position: 4, driverId: 'howard-a', teamId: 'beechdean-motorsport', points: 18, wins: 0 },
    { position: 5, driverId: 'barnicoat', teamId: 'optimum-motorsport', points: 15, wins: 0 },
    { position: 6, driverId: 'gilbert-a', teamId: 'two-seas-motorsport', points: 12, wins: 0 },
    { position: 7, driverId: 'plowman', teamId: 'paddock-motorsport', points: 9, wins: 0 },
    { position: 8, driverId: 'lake-s', teamId: 'mahiki-racing', points: 6, wins: 0 },
    { position: 9, driverId: 'cameron-d', teamId: 'barwell-motorsport', points: 3, wins: 0 },
    { position: 10, driverId: 'brown-j', teamId: 'optimum-motorsport', points: 1.5, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'century-motorsport', points: 37.5, wins: 0 },
    { position: 2, teamId: 'orange-racing', points: 27, wins: 0 },
    { position: 3, teamId: 'barwell-motorsport', points: 22.5, wins: 0 },
    { position: 4, teamId: 'beechdean-motorsport', points: 18, wins: 0 },
    { position: 5, teamId: 'optimum-motorsport', points: 15, wins: 0 },
  ],
}
