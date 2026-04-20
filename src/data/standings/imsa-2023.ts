import type { SeasonStandings } from './types'

// IMSA 2023 GTP final standings — verified from imsa.com, nbcsports.com
// Champions: Pipo Derani / Alexander Sims (Whelen Engineering / Action Express, Cadillac)
export const imsaStandings2023: SeasonStandings = {
  className: 'GTP',
  drivers: [
    { position: 1, driverId: 'derani', teamId: 'whelen-engineering', points: 3320, wins: 2 },
    { position: 1, driverId: 'sims', teamId: 'whelen-engineering', points: 3320, wins: 2 },
  ],
  constructors: [],
}
