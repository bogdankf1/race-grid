import type { SeasonStandings } from './types'

// WEC 2023 Hypercar final standings — verified from fiawec.com, fia.com
// Champions: Buemi/Hartley/Hirakawa (Toyota #8)
// First year of Ferrari 499P — won Le Mans on debut
export const wecStandings2023: SeasonStandings = {
  className: 'Hypercar',
  drivers: [
    { position: 1, driverId: 'buemi', teamId: 'toyota-gazoo-racing', points: 132, wins: 2 },
    { position: 2, driverId: 'conway', teamId: 'toyota-gazoo-racing', points: 116, wins: 4 },
    { position: 3, driverId: 'calado', teamId: 'ferrari-af-corse', points: 87, wins: 1 },
    { position: 4, driverId: 'fuoco', teamId: 'ferrari-af-corse', points: 73, wins: 0 },
    { position: 5, driverId: 'estre', teamId: 'porsche-penske', points: 68, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'toyota-gazoo-racing', points: 248, wins: 6 },
    { position: 2, teamId: 'ferrari-af-corse', points: 160, wins: 1 },
    { position: 3, teamId: 'porsche-penske', points: 113, wins: 0 },
  ],
}
