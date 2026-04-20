import type { SeasonStandings } from './types'

// WEC 2022 Hypercar final standings — verified from fiawec.com, Wikipedia
// Champions: Buemi/Hartley/Hirakawa (Toyota #8)
export const wecStandings2022: SeasonStandings = {
  className: 'Hypercar',
  drivers: [
    { position: 1, driverId: 'buemi', teamId: 'toyota-gazoo-racing', points: 149, wins: 2 },
    { position: 2, driverId: 'negrao', teamId: 'alpine', points: 144, wins: 2 },
    { position: 3, driverId: 'conway', teamId: 'toyota-gazoo-racing', points: 127, wins: 2 },
  ],
  constructors: [
    { position: 1, teamId: 'toyota-gazoo-racing', points: 276, wins: 4 },
    { position: 2, teamId: 'alpine', points: 144, wins: 2 },
  ],
}
