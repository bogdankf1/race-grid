import type { SeasonStandings } from './types'

// Dakar 2026 standings — final overall Cars classification
// Source: motorsport.com, dakar.com
export const dakarStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'al-attiyah', teamId: 'dacia-sandriders', points: 0, wins: 1 },
    { position: 2, driverId: 'n-roma', teamId: 'm-sport-ford-dakar', points: 0, wins: 0 },
    { position: 3, driverId: 'm-ekstrom', teamId: 'm-sport-ford-dakar', points: 0, wins: 0 },
    { position: 4, driverId: 's-loeb', teamId: 'dacia-sandriders', points: 0, wins: 0 },
    { position: 5, driverId: 'c-sainz-sr', teamId: 'm-sport-ford-dakar', points: 0, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'dacia-sandriders', points: 0, wins: 1 },
    { position: 2, teamId: 'm-sport-ford-dakar', points: 0, wins: 0 },
  ],
  className: 'Cars',
}
