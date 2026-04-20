import type { SeasonStandings } from './types'

// ELMS 2026 LMP2 standings — verified from autohebdof1.com, europeanlemansseries.com (after Round 1 Barcelona)
export const elmsStandings2026: SeasonStandings = {
  className: 'LMP2',
  drivers: [
    { position: 1, driverId: 'masson', teamId: 'forestier-racing-panis', points: 25, wins: 1 },
    { position: 2, driverId: 'garg', teamId: 'inter-europol', points: 19, wins: 0 },
    { position: 3, driverId: 'hanley', teamId: 'united-autosports', points: 15, wins: 0 },
    { position: 4, driverId: 'chadwick', teamId: 'idec-sport', points: 12, wins: 0 },
    { position: 5, driverId: 'smiechowski', teamId: 'inter-europol', points: 10, wins: 0 },
    { position: 6, driverId: 'p-fittipaldi', teamId: 'vector-sport-rlr', points: 8, wins: 0 },
    { position: 7, driverId: 'pearson-e', teamId: 'nielsen-racing', points: 6, wins: 0 },
    { position: 8, driverId: 'closmenil', teamId: 'clx-motorsport', points: 4, wins: 0 },
    { position: 9, driverId: 'jake-hughes', teamId: 'algarve-pro', points: 2, wins: 0 },
    { position: 10, driverId: 'van-uitert', teamId: 'idec-sport', points: 1, wins: 0 },
  ],
  constructors: [],
}
