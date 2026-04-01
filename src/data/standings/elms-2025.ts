import type { SeasonStandings } from './types'

// ELMS 2025 final LMP2 standings — verified from speedsport-magazine.com
// Champions: Milesi / Masson / Gray (VDS Panis Racing)
export const elmsStandings2025: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'milesi', teamId: 'vds-panis', points: 106, wins: 3 },
    { position: 2, driverId: 'dillmann', teamId: 'inter-europol', points: 92, wins: 0 },
    { position: 3, driverId: 'juncadella', teamId: 'idec-sport', points: 90, wins: 3 },
    { position: 4, driverId: 'deletraz', teamId: 'iron-lynx', points: 46, wins: 0 },
  ],
  constructors: [],
}
