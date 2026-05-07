import type { SeasonStandings } from './types'

// 24H Series 2024 standings
// Source: 24hseries.com, Wikipedia
export const twentyfourhStandings2024: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'ralf-bohn', teamId: 'herberth-motorsport', points: 128, wins: 2 },
    { position: 2, driverId: 'jason-hart', teamId: 'herberth-motorsport', points: 128, wins: 2 },
    { position: 3, driverId: 'scott-noble', teamId: 'herberth-motorsport', points: 128, wins: 2 },
    { position: 4, driverId: 'elia-erhart', teamId: 'sainteloc-junior-team', points: 110, wins: 1 },
    { position: 5, driverId: 'pierre-kaffer', teamId: 'sainteloc-junior-team', points: 105, wins: 1 },
    { position: 6, driverId: 'van-splunteren-j', teamId: 'gp-elite', points: 90, wins: 1 },
    { position: 7, driverId: 'alfred-renauer', teamId: 'herberth-motorsport', points: 82, wins: 0 },
    { position: 8, driverId: 'daniel-allemann', teamId: 'herberth-motorsport', points: 75, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'herberth-motorsport', points: 128, wins: 2 },
    { position: 2, teamId: 'sainteloc-junior-team', points: 110, wins: 1 },
    { position: 3, teamId: 'gp-elite', points: 90, wins: 1 },
    { position: 4, teamId: 'haas-rt', points: 68, wins: 0 },
    { position: 5, teamId: 'cp-racing', points: 55, wins: 0 },
  ],
  className: 'GT3',
}
