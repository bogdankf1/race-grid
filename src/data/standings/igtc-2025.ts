import type { SeasonStandings } from './types'

// IGTC 2025 final standings — verified from intercontinentalgtchallenge.com, press.bmwgroup.com
// Champion: Kelvin van der Linde (BMW / Team WRT)
export const igtcStandings2025: SeasonStandings = {
  className: 'Overall',
  drivers: [
    { position: 1, driverId: 'k-van-der-linde', teamId: 'team-wrt', points: 109, wins: 4 },
    { position: 2, driverId: 'marciello', teamId: 'team-wrt', points: 80, wins: 2 },
    { position: 3, driverId: 'farfus', teamId: 'rowe-racing', points: 74, wins: 2 },
    { position: 4, driverId: 'engstler', teamId: 'grasser-racing', points: 52, wins: 1 },
    { position: 5, driverId: 'kirchhofer', teamId: 'garage-59', points: 44, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'team-wrt', points: 150, wins: 3 },
    { position: 2, teamId: 'rowe-racing', points: 95, wins: 1 },
    { position: 3, teamId: 'grasser-racing', points: 70, wins: 1 },
  ],
}
