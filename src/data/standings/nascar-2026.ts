import type { SeasonStandings } from './types'

// NASCAR Cup 2026 standings — after Round 15 (FireKeepers Casino 400, Michigan)
// Points: motorsport.com, beyondtheflag.com, racingnews.co (regular-season points).
// Wins counted from race results data.
export const nascarStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'reddick', teamId: '23xi-racing', points: 669, wins: 5 },
    { position: 2, driverId: 'hamlin', teamId: 'joe-gibbs-racing', points: 618, wins: 3 },
    { position: 3, driverId: 'blaney', teamId: 'team-penske', points: 512, wins: 1 },
    { position: 4, driverId: 'elliott', teamId: 'hendrick-motorsports', points: 482, wins: 1 },
    { position: 5, driverId: 'gibbs', teamId: 'joe-gibbs-racing', points: 470, wins: 1 },
    { position: 6, driverId: 'larson', teamId: 'hendrick-motorsports', points: 453, wins: 0 },
    { position: 7, driverId: 'hocevar', teamId: 'spire-motorsports', points: 428, wins: 1 },
    { position: 8, driverId: 'buescher', teamId: 'rfk-racing', points: 424, wins: 0 },
    { position: 9, driverId: 'suarez', teamId: 'spire-motorsports', points: 418, wins: 1 },
    { position: 10, driverId: 'bell', teamId: 'joe-gibbs-racing', points: 410, wins: 0 },
    { position: 11, driverId: 'wallace', teamId: '23xi-racing', points: 378, wins: 0 },
    { position: 12, driverId: 'byron', teamId: 'hendrick-motorsports', points: 377, wins: 0 },
    { position: 13, driverId: 'briscoe', teamId: 'joe-gibbs-racing', points: 370, wins: 0 },
    { position: 14, driverId: 'van-gisbergen', teamId: 'trackhouse-racing', points: 355, wins: 1 },
    { position: 15, driverId: 'keselowski', teamId: 'rfk-racing', points: 350, wins: 0 },
    { position: 16, driverId: 'cindric', teamId: 'team-penske', points: 332, wins: 0 },
  ],
  constructors: [],
}
