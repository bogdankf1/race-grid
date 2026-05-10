import type { SeasonStandings } from './types'

// NLS 2022 SP9/Speed-Trophy standings
// Detailed top-10 SP9 driver points tables aren't consistently published; team rankings
// derived from verified overall wins in src/data/results/nls-2022.ts. Driver list reflects
// SP9 overall-race winners. Scherer Sport PHX dominated with 4 overall victories.
export const nlsStandings2022: SeasonStandings = {
  className: 'SP9 (GT3)',
  drivers: [
    // Top SP9 race winners verified via nls-2022 results
    { position: 1, driverId: 'giermaziak', teamId: 'scherer-sport-phx', points: 0, wins: 4 },
    { position: 2, driverId: 'schramm', teamId: 'scherer-sport-phx', points: 0, wins: 2 },
    { position: 3, driverId: 'rast', teamId: 'scherer-sport-phx', points: 0, wins: 1 },
    { position: 4, driverId: 'engstler', teamId: 'scherer-sport-phx', points: 0, wins: 1 },
    { position: 5, driverId: 'k-van-der-linde', teamId: 'scherer-sport-phx', points: 0, wins: 1 },
    { position: 6, driverId: 'muller', teamId: 'falken-motorsports', points: 0, wins: 2 },
    { position: 7, driverId: 'eriksson', teamId: 'falken-motorsports', points: 0, wins: 2 },
    { position: 8, driverId: 'evans-j', teamId: 'falken-motorsports', points: 0, wins: 1 },
    { position: 9, driverId: 'picariello', teamId: 'falken-motorsports', points: 0, wins: 1 },
    { position: 10, driverId: 'l-vanthoor', teamId: 'manthey', points: 0, wins: 1 },
  ],
  constructors: [
    // Speed-Trophy approximation by overall wins (verified in results file)
    { position: 1, teamId: 'scherer-sport-phx', points: 0, wins: 4 },
    { position: 2, teamId: 'falken-motorsports', points: 0, wins: 2 },
    { position: 3, teamId: 'manthey', points: 0, wins: 1 },
    { position: 4, teamId: 'rowe-racing', points: 0, wins: 1 },
  ],
}
