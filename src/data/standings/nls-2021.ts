import type { SeasonStandings } from './types'

// NLS 2021 SP9/Speed-Trophy standings
// NLS uses class-based scoring across ~25 classes; the headline narrative tracks
// SP9 (GT3) drivers and the Speed-Trophy team championship (ranked by overall finishes).
// Detailed top-10 SP9 driver points tables are not consistently published on Wikipedia
// or 51GT3 for this season; team rankings here are derived from verified overall race wins
// in src/data/results/nls-2021.ts. Driver list shows season-leading SP9 race winners.
export const nlsStandings2021: SeasonStandings = {
  className: 'SP9 (GT3)',
  drivers: [
    // Top SP9 race winners by overall victories (verified via nls-2021 results)
    { position: 1, driverId: 'dan-harper', teamId: 'rowe-racing', points: 0, wins: 2 },
    { position: 2, driverId: 'hesse-m', teamId: 'rowe-racing', points: 0, wins: 2 },
    { position: 3, driverId: 'verhagen', teamId: 'rowe-racing', points: 0, wins: 2 },
    { position: 4, driverId: 'estre', teamId: 'manthey', points: 0, wins: 2 },
    { position: 5, driverId: 'christensen', teamId: 'manthey', points: 0, wins: 2 },
    { position: 6, driverId: 'lars-kern', teamId: 'manthey', points: 0, wins: 1 },
    { position: 7, driverId: 'bamber', teamId: 'frikadelli-racing', points: 0, wins: 1 },
    { position: 8, driverId: 'jaminet', teamId: 'frikadelli-racing', points: 0, wins: 1 },
    { position: 9, driverId: 'krognes', teamId: 'walkenhorst', points: 0, wins: 1 },
    { position: 10, driverId: 'pittard', teamId: 'walkenhorst', points: 0, wins: 1 },
  ],
  constructors: [
    // NLS Speed-Trophy approximation by overall race wins (verified in results file)
    { position: 1, teamId: 'rowe-racing', points: 0, wins: 2 },
    { position: 2, teamId: 'manthey', points: 0, wins: 2 },
    { position: 3, teamId: 'frikadelli-racing', points: 0, wins: 1 },
    { position: 4, teamId: 'walkenhorst', points: 0, wins: 1 },
    { position: 5, teamId: 'aston-martin', points: 0, wins: 1 },
    { position: 6, teamId: 'scherer-sport-phx', points: 0, wins: 1 },
  ],
}
