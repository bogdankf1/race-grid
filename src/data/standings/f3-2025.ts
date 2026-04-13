import type { SeasonStandings } from './types'

// FIA Formula 3 2025 final standings — verified from fiaformula3.com
// Slater won the championship
export const f3Standings2025: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'slater', teamId: 'prema-racing', points: 149, wins: 3 },
    { position: 2, driverId: 'de-palo', teamId: 'trident', points: 114, wins: 2 },
    { position: 3, driverId: 'ugochukwu', teamId: 'art-grand-prix', points: 103, wins: 1 },
  ],
  constructors: [
    { position: 1, teamId: 'prema-racing', points: 250, wins: 5 },
    { position: 2, teamId: 'trident', points: 180, wins: 3 },
    { position: 3, teamId: 'art-grand-prix', points: 170, wins: 2 },
  ],
}
