import type { SeasonStandings } from './types'

// Porsche Mobil 1 Supercup 2023 final standings
// Sources:
//   - Wikipedia: 2023 Porsche Supercup
//   - racing.porsche.com results archive
// Verified: June 2026 (season concluded 3 September 2023)
// Champion: Bastian Buus (BWT Lechner Racing) — Porsche Junior; youngest Supercup champion at age 20.
// One-make championship — no constructors' title.
export const porscheSupercupStandings2023: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'buus', teamId: 'bwt-lechner-racing', points: 122, wins: 1 },
    { position: 2, driverId: 'ten-voorde', teamId: 'gp-elite', points: 117, wins: 0 },
    { position: 3, driverId: 'harry-king', teamId: 'bwt-lechner-racing', points: 108, wins: 3 },
    { position: 4, driverId: 'schuring', teamId: 'fach-auto-tech', points: 103, wins: 2 },
    { position: 5, driverId: 'boccolacci', teamId: 'clrt', points: 79, wins: 0 },
    { position: 6, driverId: 'hartog', teamId: 'gp-elite', points: 75, wins: 1 },
    { position: 7, driverId: 'ghiretti', teamId: 'martinet-by-almeras', points: 64, wins: 0 },
    { position: 8, driverId: 'alexander-fach', teamId: 'fach-auto-tech', points: 63, wins: 1 },
    { position: 9, driverId: 'harri-jones', teamId: 'bwt-lechner-racing', points: 63, wins: 0 },
    { position: 10, driverId: 'masters-k', teamId: 'ombra-racing', points: 45, wins: 0 },
  ],
  constructors: [],
}
