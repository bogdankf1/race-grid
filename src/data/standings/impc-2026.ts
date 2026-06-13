import type { SeasonStandings } from './types'

// IMSA Michelin Pilot Challenge 2026 standings — GS (primary) + TCR
// Verified 2026-06-08 after Round 4 Mid-Ohio
// Source: en.wikipedia.org/wiki/2026_Michelin_Pilot_Challenge (top-10 driver standings table)
//
// Per runbook convention: list the first-named driver from each crew.
// Constructors arrays left empty — IMPC manufacturer points not published on Wikipedia.
export const impcStandings2026: SeasonStandings = {
  className: 'GS',
  drivers: [
    { position: 1, driverId: 'machavern', teamId: 'turner-motorsport', points: 930, wins: 1 },
    { position: 2, driverId: 'arrow', teamId: 'winward-racing', points: 900, wins: 0 },
    { position: 3, driverId: 'cicero', teamId: 'mccumbee-mcaleer-racing', points: 780, wins: 0 },
    { position: 4, driverId: 'krainz', teamId: 'mccumbee-mcaleer-racing', points: 770, wins: 0 },
    { position: 5, driverId: 'cooper', teamId: 'ibiza-farm-motorsport', points: 700, wins: 2 },
    { position: 6, driverId: 'burkhard', teamId: 'czabok-simpson-racing', points: 640, wins: 0 },
    { position: 7, driverId: 'liefooghe', teamId: 'stephen-cameron-racing', points: 620, wins: 0 },
    { position: 8, driverId: 'grisham', teamId: 'hattori-motorsports', points: 580, wins: 0 },
    // Pos 9 Caio Chaves — driver ID not in drivers.ts (would conflict with existing 'chaves' = Henrique Chaves); skipped
    { position: 10, driverId: 'auberlen', teamId: 'random-vandals-racing', points: 530, wins: 0 },
  ],
  constructors: [],
  otherClasses: [
    {
      className: 'TCR',
      // Source: en.wikipedia.org/wiki/2026_Michelin_Pilot_Challenge — top-10 TCR drivers after Round 4 Mid-Ohio
      drivers: [
        { position: 1, driverId: 'filippi', teamId: 'bryan-herta-autosport', points: 950, wins: 1 },
        { position: 2, driverId: 'brown-p', teamId: 'bryan-herta-autosport', points: 840, wins: 1 },
        { position: 3, driverId: 'aust-m', teamId: 'bryan-herta-autosport', points: 810, wins: 0 },
        { position: 4, driverId: 'girolami', teamId: 'victor-gonzalez-racing', points: 800, wins: 1 },
        { position: 5, driverId: 'bergstein', teamId: 'bryan-herta-autosport', points: 790, wins: 0 },
        { position: 6, driverId: 'lewis-tim', teamId: 'kmw-motorsports', points: 770, wins: 0 },
        { position: 7, driverId: 'montour', teamId: 'mmg', points: 730, wins: 1 },
        { position: 8, driverId: 'baker-s', teamId: 'racers-edge', points: 720, wins: 0 },
        { position: 9, driverId: 'gou-eddie', teamId: 'lap-motorsports', points: 650, wins: 0 },
        { position: 10, driverId: 'baker-d', teamId: 'unitronic-jdc-miller-motorsports', points: 620, wins: 0 },
      ],
      constructors: [],
    },
  ],
}
