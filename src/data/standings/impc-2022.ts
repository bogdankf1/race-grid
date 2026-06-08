import type { SeasonStandings } from './types'

// IMSA Michelin Pilot Challenge 2022 standings — GS (primary) + TCR
// Verified 2026-06-08 — final season standings after Round 10 Road Atlanta
// Source: en.wikipedia.org/wiki/2022_Michelin_Pilot_Challenge (top-10 driver standings table)
//
// Per runbook convention: list the first-named driver from each crew.
// Constructors arrays left empty — IMPC manufacturer points not published on Wikipedia.
export const impcStandings2022: SeasonStandings = {
  className: 'GS',
  drivers: [
    { position: 1, driverId: 'brynjolfsson', teamId: 'volt-racing', points: 2760, wins: 1 },
    { position: 2, driverId: 'foss', teamId: 'murillo-racing', points: 2590, wins: 3 },
    { position: 3, driverId: 'auberlen', teamId: 'turner-motorsport', points: 2190, wins: 2 },
    { position: 4, driverId: 'pesek', teamId: 'pf-racing', points: 2090, wins: 2 },
    { position: 5, driverId: 'liddell', teamId: 'rebel-rock-racing', points: 2070, wins: 1 },
    { position: 6, driverId: 'murillo', teamId: 'murillo-racing', points: 2070, wins: 0 },
    { position: 7, driverId: 'barletta', teamId: 'turner-motorsport', points: 2020, wins: 0 },
    { position: 8, driverId: 'marcelli', teamId: 'pf-racing', points: 1970, wins: 0 },
    { position: 9, driverId: 'depew', teamId: 'rebel-rock-racing', points: 1960, wins: 1 },
    { position: 10, driverId: 'liefooghe', teamId: 'stephen-cameron-racing', points: 1870, wins: 0 },
  ],
  constructors: [],
  otherClasses: [
    {
      className: 'TCR',
      // Source: en.wikipedia.org/wiki/2022_Michelin_Pilot_Challenge — final top-10 TCR drivers
      drivers: [
        { position: 1, driverId: 'wickens', teamId: 'bryan-herta-autosport', points: 2560, wins: 2 },
        { position: 2, driverId: 'hagler', teamId: 'bryan-herta-autosport', points: 2240, wins: 1 },
        { position: 3, driverId: 'gonzalez-v', teamId: 'victor-gonzalez-racing', points: 2150, wins: 2 },
        { position: 4, driverId: 'block', teamId: 'kmw-motorsports', points: 2080, wins: 3 },
        { position: 5, driverId: 'miller-c', teamId: 'unitronic-jdc-miller-motorsports', points: 1940, wins: 1 },
        { position: 6, driverId: 'filippi', teamId: 'bryan-herta-autosport', points: 1830, wins: 0 },
        { position: 7, driverId: 'chase-p', teamId: 'bryan-herta-autosport', points: 1800, wins: 1 },
        { position: 8, driverId: 'rockwell', teamId: 'belgard-techniseal-racing', points: 1750, wins: 0 },
        { position: 9, driverId: 'gonzalez-t', teamId: 'van-der-steur-racing', points: 1690, wins: 0 },
        { position: 10, driverId: 'eversley', teamId: 'la-honda-world-racing', points: 1650, wins: 0 },
      ],
      constructors: [],
    },
  ],
}
