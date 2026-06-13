import type { SeasonStandings } from './types'

// IMSA Michelin Pilot Challenge 2024 final standings — GS (primary) + TCR
// Verified 2026-06-08 after the season finale at Road Atlanta (Oct 11)
// Sources:
//   - en.wikipedia.org/wiki/2024_Michelin_Pilot_Challenge (top-10 drivers in each class)
//   - imsa.com/news/2024/10/11/kellymoss-races-to-gs-win-tgm-takes-title-at-michelin-raceway-road-atlanta-finale/
//   - dailysportscar.com/2024/10/11/team-tgm-and-jdc-miller-take-pilot-challenge-titles-in-road-atlanta.html
//
// 2024 GS champion: Matt Plumb (Team TGM, #46 Aston Martin Vantage GT4)
// 2024 TCR champions: Mikey Taylor / Chris Miller (Unitronic JDC-Miller MotorSports, #17 Audi RS3 LMS TCR)
//
// Per runbook convention: list the first-named driver from each crew.
// Constructors arrays left empty — IMPC manufacturer points not published on Wikipedia.
export const impcStandings2024: SeasonStandings = {
  className: 'GS',
  drivers: [
    { position: 1, driverId: 'plumb', teamId: 'team-tgm', points: 2770, wins: 2 },
    { position: 2, driverId: 'hindman', teamId: 'rennsport1', points: 2590, wins: 2 },
    { position: 3, driverId: 'holton', teamId: 'team-tgm', points: 2470, wins: 1 },
    { position: 4, driverId: 'van-der-steur', teamId: 'van-der-steur-racing', points: 2360, wins: 0 },
    { position: 5, driverId: 'machavern', teamId: 'turner-motorsport', points: 2360, wins: 0 },
    { position: 6, driverId: 'dickinson', teamId: 'kellymoss', points: 2350, wins: 2 },
    { position: 7, driverId: 'ward', teamId: 'winward-racing', points: 2250, wins: 0 },
    { position: 8, driverId: 'coleman-t', teamId: 'archangel-motorsports', points: 2220, wins: 1 },
    { position: 9, driverId: 'foley', teamId: 'turner-motorsport', points: 2180, wins: 0 },
    { position: 10, driverId: 'depew', teamId: 'rebel-rock-racing', points: 2170, wins: 1 },
  ],
  constructors: [],
  otherClasses: [
    {
      className: 'TCR',
      // Source: en.wikipedia.org/wiki/2024_Michelin_Pilot_Challenge — final top-10 TCR drivers
      drivers: [
        { position: 1, driverId: 'miller-c', teamId: 'unitronic-jdc-miller-motorsports', points: 2680, wins: 4 },
        { position: 2, driverId: 'gottsacker', teamId: 'bryan-herta-autosport', points: 2570, wins: 1 },
        { position: 3, driverId: 'filippi', teamId: 'bryan-herta-autosport', points: 2490, wins: 2 },
        { position: 4, driverId: 'tally', teamId: 'kmw-motorsports', points: 2350, wins: 1 },
        { position: 5, driverId: 'wittmer-k', teamId: 'mmg', points: 2320, wins: 1 },
        { position: 6, driverId: 'brown-p', teamId: 'bryan-herta-autosport', points: 2280, wins: 1 },
        { position: 7, driverId: 'hagler', teamId: 'bryan-herta-autosport', points: 2240, wins: 0 },
        { position: 8, driverId: 'montour', teamId: 'mmg', points: 2200, wins: 0 },
        // Pos 9 Tazio Ottis / Daniel Wu — driver IDs not in drivers.ts; skipped
        { position: 10, driverId: 'lally', teamId: 'starcom-racing', points: 1650, wins: 0 },
      ],
      constructors: [],
    },
  ],
}
