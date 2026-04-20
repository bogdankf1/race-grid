import type { SeasonStandings } from './types'

// WEC 2024 Hypercar final standings — verified from porsche.com, fia.com, racefans.net
// Champions: Estre/Lotterer/Vanthoor (Porsche Penske #6)
export const wecStandings2024: SeasonStandings = {
  className: 'Hypercar',
  drivers: [
    { position: 1, driverId: 'estre', teamId: 'porsche-penske', points: 152, wins: 2 },
    { position: 2, driverId: 'fuoco', teamId: 'ferrari-af-corse', points: 115, wins: 1 },
    { position: 3, driverId: 'kobayashi', teamId: 'toyota-gazoo-racing', points: 113, wins: 1 },
    { position: 4, driverId: 'buemi', teamId: 'toyota-gazoo-racing', points: 109, wins: 2 },
    { position: 5, driverId: 'campbell', teamId: 'porsche-penske', points: 100, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'toyota-gazoo-racing', points: 190, wins: 3 },
    { position: 2, teamId: 'porsche-penske', points: 184, wins: 2 },
    { position: 3, teamId: 'ferrari-af-corse', points: 160, wins: 2 },
  ],
}
