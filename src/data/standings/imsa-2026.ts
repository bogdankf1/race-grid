import type { SeasonStandings } from './types'

// IMSA WeatherTech GTP 2026 standings — verified from autohebdof1.com (after Round 2 Sebring)
export const imsaStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'nasr', teamId: 'porsche-penske', points: 755, wins: 2 },
    { position: 2, driverId: 'bamber', teamId: 'whelen-engineering', points: 675, wins: 0 },
    { position: 3, driverId: 'estre', teamId: 'porsche-penske', points: 654, wins: 0 },
    { position: 4, driverId: 'vanthoor', teamId: 'bmw-rahal', points: 606, wins: 0 },
    { position: 5, driverId: 'yelloly', teamId: 'meyer-shank-racing', points: 567, wins: 0 },
    { position: 6, driverId: 'blomqvist', teamId: 'meyer-shank-racing', points: 560, wins: 0 },
    { position: 7, driverId: 'herta', teamId: 'wayne-taylor-racing', points: 548, wins: 0 },
    { position: 8, driverId: 'wittmann', teamId: 'bmw-rahal', points: 482, wins: 0 },
  ],
  constructors: [],
}
