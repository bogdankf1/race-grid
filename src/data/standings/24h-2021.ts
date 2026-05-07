import type { SeasonStandings } from './types'

// 24H Series 2021 standings
// Source: 24hseries.com, Wikipedia
export const twentyfourhStandings2021: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'chandler-hull', teamId: 'st-racing', points: 120, wins: 2 },
    { position: 2, driverId: 'jon-miller-24h', teamId: 'st-racing', points: 120, wins: 2 },
    { position: 3, driverId: 'samantha-tan', teamId: 'st-racing', points: 120, wins: 2 },
    { position: 4, driverId: 'alfred-renauer', teamId: 'herberth-motorsport', points: 105, wins: 1 },
    { position: 5, driverId: 'ralf-bohn', teamId: 'herberth-motorsport', points: 98, wins: 1 },
    { position: 6, driverId: 'van-splunteren-j', teamId: 'gp-elite', points: 85, wins: 1 },
    { position: 7, driverId: 'muller-j', teamId: 'herberth-motorsport', points: 78, wins: 0 },
    { position: 8, driverId: 'hartog-d', teamId: 'gp-elite', points: 72, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'st-racing', points: 120, wins: 2 },
    { position: 2, teamId: 'herberth-motorsport', points: 105, wins: 1 },
    { position: 3, teamId: 'gp-elite', points: 85, wins: 1 },
    { position: 4, teamId: 'racing-one', points: 60, wins: 0 },
    { position: 5, teamId: 'cp-racing', points: 48, wins: 0 },
  ],
  className: 'GT3',
}
