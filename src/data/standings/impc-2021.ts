import type { SeasonStandings } from './types'

// IMSA Michelin Pilot Challenge 2021 standings — GS (primary) + TCR
// Verified 2026-06-08 — full-season final standings after Round 10 Road Atlanta (Nov 12, 2021)
// Sources:
//   - en.wikipedia.org/wiki/2021_Michelin_Pilot_Challenge (GS top-15 drivers table verified)
//   - bryanhertaautosport.com / hyundainews.com / racer.com / porschesport.com title-clinching reports
//   - tcr-series.com Hagler-Lewis TCR champions confirmation
//
// 2021 GS champion: Jan Heylen (#16 Wright Motorsports Porsche 718 Cayman GT4)
// 2021 TCR champion: Taylor Hagler / Michael Lewis (#77 Bryan Herta Autosport Hyundai Elantra N TCR)
//
// Per runbook convention: list the first-named driver from each crew (Wikipedia's
// GS table credited drivers individually where season co-driver pairings differed).
// Constructors arrays left empty — manufacturer point totals not reproduced here.
export const impcStandings2021: SeasonStandings = {
  className: 'GS',
  drivers: [
    { position: 1, driverId: 'heylen', teamId: 'wright-motorsports', points: 2680, wins: 3 },
    { position: 2, driverId: 'auberlen', teamId: 'turner-motorsport', points: 2490, wins: 1 },
    { position: 3, driverId: 'brynjolfsson', teamId: 'volt-racing', points: 2340, wins: 0 },
    { position: 4, driverId: 'barletta', teamId: 'turner-motorsport', points: 2340, wins: 0 },
    { position: 5, driverId: 'wittmer-kuno', teamId: 'awa-racing', points: 2240, wins: 0 },
    { position: 6, driverId: 'monk', teamId: 'motorsports-in-action', points: 2240, wins: 0 },
    { position: 7, driverId: 'davis-a', teamId: 'mccann-racing', points: 2210, wins: 0 },
    { position: 8, driverId: 'foss', teamId: 'murillo-racing', points: 2130, wins: 1 },
    { position: 9, driverId: 'plumb-h', teamId: 'team-tgm', points: 2070, wins: 0 },
    { position: 10, driverId: 'hardwick-r', teamId: 'wright-motorsports', points: 2010, wins: 2 },
  ],
  constructors: [],
  otherClasses: [
    {
      className: 'TCR',
      // 2021 TCR top-10 drivers — Hagler/Lewis confirmed champions by official press
      // (Bryan Herta Autosport / Hyundai / TCR Hub / Racer.com). Subsequent positions
      // and points sourced from the Wikipedia TCR standings table; points totals reflect
      // the per-pair championship point ledger.
      drivers: [
        { position: 1, driverId: 'hagler', teamId: 'bryan-herta-autosport', points: 2870, wins: 1 },
        { position: 2, driverId: 'miller-c', teamId: 'unitronic-jdc-miller-motorsports', points: 2590, wins: 3 },
        { position: 3, driverId: 'block', teamId: 'kmw-motorsports', points: 2340, wins: 2 },
        { position: 4, driverId: 'gottsacker', teamId: 'bryan-herta-autosport', points: 2240, wins: 1 },
        { position: 5, driverId: 'chase-p', teamId: 'bryan-herta-autosport', points: 2210, wins: 1 },
        { position: 6, driverId: 'gonzalez-t', teamId: 'copeland-motorsports', points: 2010, wins: 0 },
        { position: 7, driverId: 'filippi', teamId: 'copeland-motorsports', points: 1880, wins: 0 },
        { position: 8, driverId: 'henderson-b', teamId: 'atlanta-speedwerks', points: 1620, wins: 1 },
        { position: 9, driverId: 'eversley', teamId: 'atlanta-speedwerks', points: 1450, wins: 1 },
        { position: 10, driverId: 'johnson-m', teamId: 'michael-johnson-racing', points: 1420, wins: 0 },
      ],
      constructors: [],
    },
  ],
}
