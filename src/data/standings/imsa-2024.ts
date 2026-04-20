import type { SeasonStandings } from './types'

// IMSA 2024 GTP final standings — verified from porsche.com, nbcsports.com
// Champions: Dane Cameron / Felipe Nasr (Porsche Penske Motorsport)
export const imsaStandings2024: SeasonStandings = {
  className: 'GTP',
  drivers: [
    { position: 1, driverId: 'cameron', teamId: 'porsche-penske', points: 3410, wins: 3 },
    { position: 1, driverId: 'nasr', teamId: 'porsche-penske', points: 3410, wins: 3 },
  ],
  constructors: [],
}
