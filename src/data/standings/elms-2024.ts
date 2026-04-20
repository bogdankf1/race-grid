import type { SeasonStandings } from './types'
// ELMS 2024 final LMP2 standings — verified from europeanlemansseries.com, autohebdof1.com
// Champions: Edgar/Kubica/Delétraz (AO by TF)
export const elmsStandings2024: SeasonStandings = {
  className: 'LMP2',
  drivers: [
    { position: 1, driverId: 'edgar', teamId: 'ao-by-tf', points: 106, wins: 1 },
    { position: 2, driverId: 'milesi', teamId: 'panis-racing', points: 95, wins: 2 },
    { position: 3, driverId: 'hanley', teamId: 'united-autosports', points: 78, wins: 1 },
  ],
  constructors: [],
}
