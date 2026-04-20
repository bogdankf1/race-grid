import type { SeasonStandings } from './types'

// IMSA 2021 DPi final standings — verified from indymotorspeedway.com, nbcsports.com
// Champions: Felipe Nasr / Pipo Derani (Whelen Engineering Racing, Cadillac)
export const imsaStandings2021: SeasonStandings = {
  className: 'DPi',
  drivers: [
    { position: 1, driverId: 'nasr', teamId: 'whelen-engineering', points: 3407, wins: 4 },
    { position: 1, driverId: 'derani', teamId: 'whelen-engineering', points: 3407, wins: 4 },
    { position: 3, driverId: 'albuquerque', teamId: 'wayne-taylor-racing', points: 3396, wins: 2 },
    { position: 3, driverId: 'r-taylor', teamId: 'wayne-taylor-racing', points: 3396, wins: 2 },
    { position: 5, driverId: 'jarvis', teamId: 'meyer-shank-racing', points: 3264, wins: 1 },
  ],
  constructors: [],
}
