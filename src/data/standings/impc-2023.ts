import type { SeasonStandings } from './types'

// IMSA Michelin Pilot Challenge 2023 standings — GS (primary) + TCR
// Verified 2026-06-08 (final season standings after Round 11 Road Atlanta)
// Sources:
//   - en.wikipedia.org/wiki/2023_Michelin_Pilot_Challenge (championship standings)
//   - harrygottsackerracing.com — Gottsacker/Wickens TCR title confirmation
//   - bryanhertaautosport.com — Filippi/Wilkins runners-up, Gottsacker/Wickens champions
//   - racer.com / imsa.com news — title clinch and final-round narrative
//
// Per runbook convention: list the first-named driver from each crew.
// Constructors arrays left empty — IMPC manufacturer points not published on Wikipedia.
//
// GS Champions: Vincent Barletta / Robby Foley (#96 Turner Motorsport) — 2,430 pts, 3 wins
// TCR Champions: Harry Gottsacker / Robert Wickens (#33 Bryan Herta Autosport with Curb-Agajanian)
//   — entered finale with a 20-point lead over #17, finished 4th in finale to clinch
//   the title with a 60-point margin over teammates Filippi / Wilkins; 0 wins, 7 podiums.
export const impcStandings2023: SeasonStandings = {
  className: 'GS',
  drivers: [
    { position: 1, driverId: 'barletta', teamId: 'turner-motorsport', points: 2430, wins: 3 },
    { position: 2, driverId: 'depew', teamId: 'rebel-rock-racing', points: 2420, wins: 2 },
    { position: 3, driverId: 'murillo', teamId: 'murillo-racing', points: 2390, wins: 1 },
    { position: 4, driverId: 'filgueiras', teamId: 'rs1', points: 2180, wins: 0 },
    { position: 5, driverId: 'adelson', teamId: 'wright-motorsports', points: 2180, wins: 0 },
    { position: 6, driverId: 'collingwood', teamId: 'bgb-motorsports', points: 2000, wins: 0 },
    { position: 7, driverId: 'altzman', teamId: 'mccumbee-mcaleer-racing', points: 1880, wins: 0 },
    { position: 8, driverId: 'plumb-h', teamId: 'team-tgm', points: 1880, wins: 0 },
    { position: 9, driverId: 'mcalister-s', teamId: 'carbahn-peregrine', points: 1870, wins: 0 },
    { position: 10, driverId: 'morad-d', teamId: 'winward-racing', points: 1850, wins: 2 },
  ],
  constructors: [],
  otherClasses: [
    {
      className: 'TCR',
      // Multiple independent sources (Bryan Herta Autosport, Harry Gottsacker Racing,
      // RACER, IMSA) confirm Gottsacker/Wickens won the 2023 TCR Drivers Championship.
      // Points order below reflects that title order.
      drivers: [
        { position: 1, driverId: 'gottsacker', teamId: 'bryan-herta-autosport', points: 2630, wins: 0 },
        { position: 2, driverId: 'filippi', teamId: 'bryan-herta-autosport', points: 2570, wins: 3 },
        { position: 3, driverId: 'miller-c', teamId: 'unitronic-jdc-miller-motorsports', points: 2530, wins: 3 },
        { position: 4, driverId: 'block', teamId: 'kmw-motorsports', points: 2490, wins: 3 },
        { position: 5, driverId: 'brown-p', teamId: 'atlanta-speedwerks', points: 2310, wins: 0 },
        { position: 6, driverId: 'hagler', teamId: 'bryan-herta-autosport', points: 2220, wins: 0 },
        { position: 7, driverId: 'deily', teamId: 'copeland-motorsports', points: 2150, wins: 0 },
        { position: 8, driverId: 'dupont', teamId: 'bryan-herta-autosport', points: 2130, wins: 0 },
        { position: 9, driverId: 'bigham', teamId: 'kmw-motorsports', points: 2100, wins: 0 },
        { position: 10, driverId: 'gonzalez-v', teamId: 'victor-gonzalez-racing', points: 2050, wins: 0 },
      ],
      constructors: [],
    },
  ],
}
