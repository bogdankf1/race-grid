import type { SeasonStandings } from './types'

// ELMS 2026 LMP2 standings — verified from autohebdof1.com, europeanlemansseries.com (after Round 2 Le Castellet)
export const elmsStandings2026: SeasonStandings = {
  className: 'LMP2',
  drivers: [
    { position: 1, driverId: 'hanley', teamId: 'united-autosports', points: 40, wins: 1 },
    { position: 2, driverId: 'garg', teamId: 'inter-europol', points: 37, wins: 0 },
    { position: 3, driverId: 'masson', teamId: 'forestier-racing-panis', points: 26, wins: 1 },
    { position: 4, driverId: 'chadwick', teamId: 'idec-sport', points: 24, wins: 0 },
    { position: 5, driverId: 'p-fittipaldi', teamId: 'vector-sport-rlr', points: 18, wins: 0 },
    { position: 6, driverId: 'van-uitert', teamId: 'idec-sport', points: 16, wins: 0 },
    { position: 7, driverId: 'smiechowski', teamId: 'inter-europol', points: 16, wins: 0 },
    { position: 8, driverId: 'closmenil', teamId: 'clx-motorsport', points: 12, wins: 0 },
    { position: 9, driverId: 'yelloly', teamId: 'algarve-pro', points: 10, wins: 0 },
    { position: 10, driverId: 'pearson-e', teamId: 'nielsen-racing', points: 8, wins: 0 },
  ],
  constructors: [],
}
