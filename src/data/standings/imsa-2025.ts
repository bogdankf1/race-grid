import type { SeasonStandings } from './types'

// IMSA WeatherTech GTP 2025 final standings — verified from indymotorspeedway.com, imsa.com
// Points are cumulative IMSA-style (not F1-style)
export const imsaStandings2025: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'jaminet', teamId: 'porsche-penske', points: 2907, wins: 3 },
    { position: 2, driverId: 'aitken', teamId: 'whelen-engineering', points: 2720, wins: 2 },
    { position: 3, driverId: 'vanthoor', teamId: 'bmw-rahal', points: 2679, wins: 3 },
    { position: 4, driverId: 'yelloly', teamId: 'meyer-shank-racing', points: 2657, wins: 1 },
    { position: 5, driverId: 'blomqvist', teamId: 'meyer-shank-racing', points: 2602, wins: 1 },
    { position: 6, driverId: 'wittmann', teamId: 'bmw-rahal', points: 2469, wins: 0 },
    { position: 7, driverId: 'bamber', teamId: 'meyer-shank-racing', points: 2448, wins: 0 },
  ],
  constructors: [],
}
