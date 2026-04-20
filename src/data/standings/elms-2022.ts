import type { SeasonStandings } from './types'
// ELMS 2022 final LMP2 standings — verified from europeanlemansseries.com, Wikipedia
// Champion: Louis Delétraz (Prema Racing)
export const elmsStandings2022: SeasonStandings = {
  className: 'LMP2',
  drivers: [
    { position: 1, driverId: 'deletraz', teamId: 'prema-racing', points: 125, wins: 4 },
    { position: 2, driverId: 'chatin', teamId: 'idec-sport', points: 94, wins: 1 },
    { position: 3, driverId: 'colombo', teamId: 'prema-racing', points: 85, wins: 3 },
  ],
  constructors: [],
}
