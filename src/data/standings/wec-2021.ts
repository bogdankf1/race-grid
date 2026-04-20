import type { SeasonStandings } from './types'

// WEC 2021 Hypercar final standings — verified from fiawec.com, Wikipedia
// Champions: Conway/Kobayashi/López (Toyota #7)
export const wecStandings2021: SeasonStandings = {
  className: 'Hypercar',
  drivers: [
    { position: 1, driverId: 'conway', teamId: 'toyota-gazoo-racing', points: 173, wins: 4 },
    { position: 2, driverId: 'buemi', teamId: 'toyota-gazoo-racing', points: 168, wins: 3 },
  ],
  constructors: [
    { position: 1, teamId: 'toyota-gazoo-racing', points: 173, wins: 6 },
  ],
}
