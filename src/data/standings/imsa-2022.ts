import type { SeasonStandings } from './types'

// IMSA 2022 DPi final standings — verified from nbcsports.com, racer.com
// Champions: Tom Blomqvist / Oliver Jarvis (Meyer Shank Racing, Acura)
export const imsaStandings2022: SeasonStandings = {
  className: 'DPi',
  drivers: [
    { position: 1, driverId: 'blomqvist', teamId: 'meyer-shank-racing', points: 3350, wins: 2 },
    { position: 1, driverId: 'jarvis', teamId: 'meyer-shank-racing', points: 3350, wins: 2 },
    { position: 3, driverId: 'albuquerque', teamId: 'wayne-taylor-racing', points: 3290, wins: 3 },
    { position: 3, driverId: 'r-taylor', teamId: 'wayne-taylor-racing', points: 3290, wins: 3 },
  ],
  constructors: [],
}
