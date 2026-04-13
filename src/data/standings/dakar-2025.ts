import type { SeasonStandings } from './types'

// Dakar 2025 standings — final overall Cars classification
// Source: motorsport.com, dakar.com, redbull.com
export const dakarStandings2025: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'y-al-rajhi', teamId: 'overdrive-racing', points: 0, wins: 1 },
    { position: 2, driverId: 'h-lategan', teamId: 'toyota-gazoo-racing', points: 0, wins: 0 },
    { position: 3, driverId: 'm-ekstrom', teamId: 'm-sport-ford-dakar', points: 0, wins: 0 },
    { position: 4, driverId: 'al-attiyah', teamId: 'dacia-sandriders', points: 0, wins: 0 },
    { position: 5, driverId: 'm-guthrie', teamId: 'm-sport-ford-dakar', points: 0, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'overdrive-racing', points: 0, wins: 1 },
    { position: 2, teamId: 'toyota-gazoo-racing', points: 0, wins: 0 },
    { position: 3, teamId: 'm-sport-ford-dakar', points: 0, wins: 0 },
  ],
  className: 'Cars',
}
