import type { SeasonStandings } from './types'

// NLS 2025 SP9/Speed-Trophy standings
// Falken Motorsports won the NLS Speed-Trophy with their Porsche 911 GT3 R, securing
// the team title via 4 overall victories and multiple 1-2 finishes (final-round NLS10
// 1-2 sealed it). Detailed top-10 SP9 driver points tables aren't consistently
// published; rankings here are derived from verified overall wins in the results file.
// (Note: the NLS overall driver title across all classes went to Wüstenhagen/Mijatovic
// in BMW M4 GT4 (FK Performance), not SP9.)
export const nlsStandings2025: SeasonStandings = {
  className: 'SP9 (GT3)',
  drivers: [
    // Top SP9 drivers ranked by overall victories (verified via nls-2025 results)
    { position: 1, driverId: 'muller', teamId: 'falken-motorsports', points: 0, wins: 2 },
    { position: 2, driverId: 'niederhauser', teamId: 'scherer-sport-phx', points: 0, wins: 2 },
    { position: 3, driverId: 'vanthoor', teamId: 'scherer-sport-phx', points: 0, wins: 2 },
    { position: 4, driverId: 'schuring', teamId: 'falken-motorsports', points: 0, wins: 1 },
    { position: 5, driverId: 'bachler', teamId: 'falken-motorsports', points: 0, wins: 1 },
    { position: 6, driverId: 'andlauer', teamId: 'falken-motorsports', points: 0, wins: 1 },
    { position: 7, driverId: 'sturm', teamId: 'falken-motorsports', points: 0, wins: 1 },
    { position: 8, driverId: 'boccolacci', teamId: 'falken-motorsports', points: 0, wins: 1 },
    { position: 9, driverId: 'menzel', teamId: 'falken-motorsports', points: 0, wins: 1 },
    { position: 10, driverId: 'preining', teamId: 'manthey', points: 0, wins: 1 },
  ],
  constructors: [
    // NLS Speed-Trophy — Falken champion (FALKEN press release confirmed)
    { position: 1, teamId: 'falken-motorsports', points: 0, wins: 4 },
    { position: 2, teamId: 'scherer-sport-phx', points: 0, wins: 2 },
    { position: 3, teamId: 'manthey', points: 0, wins: 1 },
    { position: 4, teamId: 'rowe-racing', points: 0, wins: 1 },
    { position: 5, teamId: 'haupt-racing', points: 0, wins: 1 },
    { position: 6, teamId: 'emil-frey-racing', points: 0, wins: 1 },
  ],
}
