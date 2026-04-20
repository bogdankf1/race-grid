import type { SeasonStandings } from './types'
// ELMS 2021 final LMP2 standings — verified from europeanlemansseries.com, Wikipedia
// Champions: Delétraz/Kubica/Ye (Team WRT)
export const elmsStandings2021: SeasonStandings = {
  className: 'LMP2',
  drivers: [
    { position: 1, driverId: 'deletraz', teamId: 'team-wrt', points: 118, wins: 3 },
    { position: 2, driverId: 'hanson', teamId: 'united-autosports', points: 86, wins: 0 },
    { position: 3, driverId: 'stevens', teamId: 'panis-racing', points: 74, wins: 1 },
  ],
  constructors: [],
}
