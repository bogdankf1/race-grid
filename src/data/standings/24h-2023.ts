import type { SeasonStandings } from './types'

// 24H Series 2023 standings
// Source: 24hseries.com, Wikipedia
export const twentyfourhStandings2023: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'mathieu-detry', teamId: 'haas-rt', points: 130, wins: 3 },
    { position: 2, driverId: 'alfred-renauer', teamId: 'herberth-motorsport', points: 112, wins: 1 },
    { position: 3, driverId: 'ralf-bohn', teamId: 'herberth-motorsport', points: 105, wins: 1 },
    { position: 4, driverId: 'fumanelli', teamId: 'kessel-racing', points: 92, wins: 1 },
    { position: 5, driverId: 'pierre-kaffer', teamId: 'haas-rt', points: 85, wins: 0 },
    { position: 6, driverId: 'elia-erhart', teamId: 'haas-rt', points: 80, wins: 0 },
    { position: 7, driverId: 'david-perel', teamId: 'kessel-racing', points: 72, wins: 0 },
    { position: 8, driverId: 'daniel-allemann', teamId: 'herberth-motorsport', points: 65, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'haas-rt', points: 130, wins: 3 },
    { position: 2, teamId: 'herberth-motorsport', points: 112, wins: 1 },
    { position: 3, teamId: 'kessel-racing', points: 92, wins: 1 },
    { position: 4, teamId: 'cp-racing', points: 68, wins: 0 },
    { position: 5, teamId: 'gp-elite', points: 55, wins: 0 },
  ],
  className: 'GT3',
}
