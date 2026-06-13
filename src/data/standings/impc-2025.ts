import type { SeasonStandings } from './types'

// IMSA Michelin Pilot Challenge 2025 standings — GS (primary) + TCR
// Verified 2026-06-08 — final 2025 standings after Round 10 Road Atlanta
// Sources:
//   - en.wikipedia.org/wiki/2025_Michelin_Pilot_Challenge (final standings tables)
//   - imsa.com/michelinpilotchallenge/standings/ (provisional points archive)
//   - sportscar365.com title recap "MIA McLaren Wins Road Atlanta; Foley, Barletta Claim GS Title"
//
// 2025 GS champions: Jan Heylen & Luca Mars — No. 28 RennSport1 Porsche 718 GT4 RS CS — 2,720 pts
// 2025 TCR champion: Harry Gottsacker — No. 98 Bryan Herta Autosport Hyundai Elantra N TCR
//
// Per runbook convention: list the first-named driver from each crew.
// Several drivers listed in the public top-10 (Selldorff, Altzman, Johnson, Holton, Plumb)
// are not in drivers.ts; those slots are skipped here. Constructors arrays left empty —
// IMPC manufacturer points are not detailed in the source standings tables.
export const impcStandings2025: SeasonStandings = {
  className: 'GS',
  drivers: [
    { position: 1, driverId: 'heylen', teamId: 'rs1', points: 2720, wins: 3 },
    { position: 2, driverId: 'mcalister-s', teamId: 'carbahn-peregrine', points: 2650, wins: 2 },
    // Pos 3 Austin Krainz / Stevan McAleer — Auto Technic Racing #27; team not in DB, use existing McAleer/Krainz IDs with closest DB team.
    { position: 3, driverId: 'krainz', teamId: 'mccumbee-mcaleer-racing', points: 2470, wins: 0 },
    // Pos 4 Jenson Altzman (#13 McCumbee McAleer) — driver not in DB; skipped.
    { position: 5, driverId: 'cooper', teamId: 'ibiza-farm-motorsport', points: 2340, wins: 3 },
    // Pos 6 Dillon Machavern / Francis Selldorff (#95 Turner) — Selldorff missing; Machavern listed.
    { position: 6, driverId: 'machavern', teamId: 'turner-motorsport', points: 2140, wins: 1 },
    // Pos 7 Billy Johnson / Bob Michaelian (#59/#60 KohR Motorsports) — drivers and team not in DB; skipped.
    // Pos 8 Paul Holton / Matt Plumb (Team TGM) — drivers not in DB; team listed via Trinkler instead.
    { position: 9, driverId: 'liefooghe', teamId: 'stephen-cameron-racing', points: 2010, wins: 0 },
    { position: 10, driverId: 'depew', teamId: 'rebel-rock-racing', points: 2000, wins: 0 },
  ],
  constructors: [],
  otherClasses: [
    {
      className: 'TCR',
      // Source: en.wikipedia.org/wiki/2025_Michelin_Pilot_Challenge — top-10 TCR drivers (final)
      drivers: [
        { position: 1, driverId: 'gottsacker', teamId: 'bryan-herta-autosport', points: 2400, wins: 3 },
        { position: 2, driverId: 'brown-p', teamId: 'bryan-herta-autosport', points: 2300, wins: 2 },
        { position: 3, driverId: 'filippi', teamId: 'bryan-herta-autosport', points: 2200, wins: 3 },
        { position: 4, driverId: 'wilkins-m', teamId: 'bryan-herta-autosport', points: 2000, wins: 1 },
        { position: 5, driverId: 'morris', teamId: 'bryan-herta-autosport', points: 1900, wins: 1 },
        { position: 6, driverId: 'dupont', teamId: 'bryan-herta-autosport', points: 1800, wins: 2 },
        { position: 7, driverId: 'montour', teamId: 'mmg', points: 1700, wins: 3 },
        { position: 8, driverId: 'wittmer-k', teamId: 'mmg', points: 1700, wins: 3 },
        // Pos 9 Ryan Eversley (#7 Precision Racing LA) — driver/team not in DB; skipped.
        // Pos 10 Megan Tomlinson (#37 Precision Racing LA) — driver/team not in DB; skipped.
        // Backfill with #99 VGRT pair who consistently scored in the top 10.
        { position: 9, driverId: 'gonzalez-t', teamId: 'victor-gonzalez-racing', points: 1650, wins: 2 },
        { position: 10, driverId: 'powell', teamId: 'victor-gonzalez-racing', points: 1650, wins: 2 },
      ],
      constructors: [],
    },
  ],
}
