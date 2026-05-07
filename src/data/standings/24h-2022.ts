import type { SeasonStandings } from './types'

// 24H Series 2022 standings
// Source: 24hseries.com, Wikipedia
export const twentyfourhStandings2022: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'michael-doppelmayr', teamId: 'scherer-sport-phx', points: 125, wins: 2 },
    { position: 2, driverId: 'elia-erhart', teamId: 'scherer-sport-phx', points: 125, wins: 2 },
    { position: 3, driverId: 'pierre-kaffer', teamId: 'scherer-sport-phx', points: 125, wins: 2 },
    { position: 4, driverId: 'alfred-renauer', teamId: 'herberth-motorsport', points: 108, wins: 1 },
    { position: 5, driverId: 'ralf-bohn', teamId: 'herberth-motorsport', points: 100, wins: 1 },
    { position: 6, driverId: 'nicolai-m', teamId: 'cp-racing', points: 88, wins: 1 },
    { position: 7, driverId: 'daniel-allemann', teamId: 'herberth-motorsport', points: 80, wins: 0 },
    { position: 8, driverId: 'abril', teamId: 'cp-racing', points: 72, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'scherer-sport-phx', points: 125, wins: 2 },
    { position: 2, teamId: 'herberth-motorsport', points: 108, wins: 1 },
    { position: 3, teamId: 'cp-racing', points: 88, wins: 1 },
    { position: 4, teamId: 'gp-elite', points: 65, wins: 0 },
    { position: 5, teamId: 'racing-one', points: 52, wins: 0 },
  ],
  className: 'GT3',
}
