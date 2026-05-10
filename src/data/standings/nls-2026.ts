import type { SeasonStandings } from './types'

// NLS 2026 partial standings — season started 14 March 2026, snapshot at 2026-05-10.
// Completed rounds so far: NLS2 (Mar 21, ROWE inherited after Verstappen DSQ),
// NLS3 (Apr 11, Schubert), NLS 24h-Quali Race 2 (Apr 25, Scherer Sport PHX).
// NLS1 (Mar 14) was cancelled due to weather; NLS 24h-Quali Race 1 (Apr 25) was
// cancelled after a fatal multi-car crash. The 24h Nürburgring race is on May 14.
// Detailed SP9 driver points tables aren't published mid-season; rankings here are
// derived from the verified overall race wins in src/data/results/nls-2026.ts.
export const nlsStandings2026: SeasonStandings = {
  className: 'SP9 (GT3)',
  drivers: [
    // SP9 drivers ranked by overall victories so far
    { position: 1, driverId: 'frijns', teamId: 'schubert-motorsport', points: 0, wins: 1 },
    { position: 2, driverId: 'eng', teamId: 'schubert-motorsport', points: 0, wins: 1 },
    { position: 3, driverId: 'wittmann', teamId: 'schubert-motorsport', points: 0, wins: 1 },
    { position: 4, driverId: 'harper', teamId: 'rowe-racing', points: 0, wins: 1 },
    { position: 5, driverId: 'pepper', teamId: 'rowe-racing', points: 0, wins: 1 },
    { position: 6, driverId: 'haase', teamId: 'scherer-sport-phx', points: 0, wins: 1 },
    { position: 7, driverId: 'green-b', teamId: 'scherer-sport-phx', points: 0, wins: 1 },
    { position: 8, driverId: 'sims', teamId: 'scherer-sport-phx', points: 0, wins: 1 },
  ],
  constructors: [
    // Speed-Trophy snapshot — three different teams have one win each so far
    { position: 1, teamId: 'rowe-racing', points: 0, wins: 1 },
    { position: 2, teamId: 'schubert-motorsport', points: 0, wins: 1 },
    { position: 3, teamId: 'scherer-sport-phx', points: 0, wins: 1 },
  ],
}
