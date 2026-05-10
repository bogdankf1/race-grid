import type { SeasonStandings } from './types'

// NLS 2024 SP9/Speed-Trophy standings
// Falken Motorsports won the Speed-Trophy with the #4 Porsche, 5 overall victories.
// Manthey EMA finished 2nd in Speed-Trophy (only 2 points behind), HRT Mercedes 3rd.
// Detailed top-10 SP9 driver points tables aren't published; rankings here reflect
// season win counts derived from per-race reports (motorsport-total.com, dailysportscar.com,
// nuerburgring-langstrecken-serie.de). Falken drivers rotated through #3/#4/#44 entries.
export const nlsStandings2024: SeasonStandings = {
  className: 'SP9 (GT3)',
  drivers: [
    // Top SP9 drivers ranked by overall victories from public race reports
    { position: 1, driverId: 'menzel', teamId: 'falken-motorsports', points: 0, wins: 2 },
    { position: 2, driverId: 'muller', teamId: 'falken-motorsports', points: 0, wins: 2 },
    { position: 3, driverId: 'eriksson', teamId: 'falken-motorsports', points: 0, wins: 1 },
    { position: 4, driverId: 'heinemann', teamId: 'falken-motorsports', points: 0, wins: 1 },
    { position: 5, driverId: 'andlauer', teamId: 'falken-motorsports', points: 0, wins: 1 },
    { position: 6, driverId: 'bachler', teamId: 'falken-motorsports', points: 0, wins: 1 },
    { position: 7, driverId: 'picariello', teamId: 'falken-motorsports', points: 0, wins: 1 },
    { position: 8, driverId: 'auer', teamId: 'mercedes-amg-team-landgraf', points: 0, wins: 1 },
    { position: 9, driverId: 'grenier', teamId: 'mercedes-amg-team-landgraf', points: 0, wins: 1 },
    { position: 10, driverId: 'owega', teamId: 'haupt-racing', points: 0, wins: 1 },
  ],
  constructors: [
    // NLS Speed-Trophy — verified order from motorsport-total.com final report
    { position: 1, teamId: 'falken-motorsports', points: 0, wins: 5 },
    { position: 2, teamId: 'manthey', points: 0, wins: 1 },
    { position: 3, teamId: 'haupt-racing', points: 0, wins: 1 },
    { position: 4, teamId: 'mercedes-amg-team-landgraf', points: 0, wins: 1 },
  ],
}
