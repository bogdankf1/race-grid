import type { SeasonStandings } from './types'
// ELMS 2023 final LMP2 standings — verified from europeanlemansseries.com, Wikipedia
// Champions: Allen/Lynn/Simpson (Algarve Pro Racing)
export const elmsStandings2023: SeasonStandings = {
  className: 'LMP2',
  drivers: [
    { position: 1, driverId: 'j-allen', teamId: 'algarve-pro', points: 113, wins: 3 },
    { position: 2, driverId: 'hanson', teamId: 'united-autosports', points: 85, wins: 1 },
    { position: 3, driverId: 'chatin', teamId: 'idec-sport', points: 72, wins: 1 },
  ],
  constructors: [],
}
