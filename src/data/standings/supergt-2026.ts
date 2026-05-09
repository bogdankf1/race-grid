import type { SeasonStandings } from './types'

// Super GT 2026 GT500 standings — verified from supergt.net (after Round 2 Fuji)
export const supergtStandings2026: SeasonStandings = {
  className: 'GT500',
  drivers: [
    { position: 1, driverId: 'tsuboi', teamId: 'tgr-au-toms', points: 40, wins: 1 },
    { position: 1, driverId: 'yamashita', teamId: 'tgr-au-toms', points: 40, wins: 1 },
    { position: 3, driverId: 'fukuzumi', teamId: 'tgr-eneos-rookie', points: 24, wins: 0 },
    { position: 3, driverId: 'oshima', teamId: 'tgr-eneos-rookie', points: 24, wins: 0 },
    { position: 5, driverId: 'oyu', teamId: 'keeper-cerumo', points: 16, wins: 1 },
    { position: 5, driverId: 'r-kobayashi', teamId: 'keeper-cerumo', points: 16, wins: 1 },
    { position: 7, driverId: 'hiramine', teamId: 'team-impul', points: 15, wins: 0 },
    { position: 7, driverId: 'baguette', teamId: 'team-impul', points: 15, wins: 0 },
    { position: 9, driverId: 'chiyo', teamId: 'nismo', points: 14, wins: 0 },
    { position: 9, driverId: 'takaboshi', teamId: 'nismo', points: 14, wins: 0 },
  ],
  constructors: [],
}
