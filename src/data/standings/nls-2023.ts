import type { SeasonStandings } from './types'

// NLS 2023 SP9/Speed-Trophy standings
// Walkenhorst BMW dominated with 5 overall victories (Giermaziak/Krognes pairing).
// Detailed top-10 SP9 driver points tables aren't consistently published; rankings here
// are derived from verified overall wins in src/data/results/nls-2023.ts.
export const nlsStandings2023: SeasonStandings = {
  className: 'SP9 (GT3)',
  drivers: [
    // Top SP9 race winners verified via nls-2023 results
    { position: 1, driverId: 'giermaziak', teamId: 'walkenhorst', points: 0, wins: 5 },
    { position: 2, driverId: 'krognes', teamId: 'walkenhorst', points: 0, wins: 4 },
    { position: 3, driverId: 'j-krohn', teamId: 'walkenhorst', points: 0, wins: 1 },
    { position: 4, driverId: 'vanthoor', teamId: 'rowe-racing', points: 0, wins: 1 },
    { position: 5, driverId: 'martin', teamId: 'rowe-racing', points: 0, wins: 1 },
    { position: 6, driverId: 'dan-harper', teamId: 'rowe-racing', points: 0, wins: 1 },
    { position: 7, driverId: 'hesse-m', teamId: 'rowe-racing', points: 0, wins: 1 },
    { position: 8, driverId: 'verhagen', teamId: 'rowe-racing', points: 0, wins: 1 },
    { position: 9, driverId: 'pittard', teamId: 'falken-motorsports', points: 0, wins: 1 },
    { position: 10, driverId: 'eriksson', teamId: 'falken-motorsports', points: 0, wins: 1 },
  ],
  constructors: [
    // Speed-Trophy approximation by overall wins (verified in results file)
    { position: 1, teamId: 'walkenhorst', points: 0, wins: 5 },
    { position: 2, teamId: 'rowe-racing', points: 0, wins: 2 },
    { position: 3, teamId: 'falken-motorsports', points: 0, wins: 1 },
    { position: 4, teamId: 'scherer-sport-phx', points: 0, wins: 1 },
  ],
}
