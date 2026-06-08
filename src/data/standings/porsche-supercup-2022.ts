import type { SeasonStandings } from './types'

// Porsche Mobil 1 Supercup 2022 final standings
// Sources:
//   - Wikipedia: 2022 Porsche Supercup
//   - racing.porsche.com results archive
// Verified: June 2026 (season concluded 11 September 2022)
// Champion: Dylan Pereira (BWT Lechner Racing) — first Supercup title; 3 wins (Imola, Spielberg, Spa).
// One-make championship — no constructors' title.
export const porscheSupercupStandings2022: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'pereira', teamId: 'bwt-lechner-racing', points: 149, wins: 3 },
    { position: 2, driverId: 'ten-voorde', teamId: 'gp-elite', points: 139, wins: 1 },
    { position: 3, driverId: 'heinrich', teamId: 'ssr-huber-racing', points: 123, wins: 1 },
    { position: 4, driverId: 'buus', teamId: 'bwt-lechner-racing', points: 122, wins: 2 },
    { position: 5, driverId: 'harry-king', teamId: 'bwt-lechner-racing', points: 109, wins: 0 },
    { position: 6, driverId: 'marvin-klein', teamId: 'clrt', points: 78, wins: 1 },
    { position: 7, driverId: 'boccolacci', teamId: 'martinet-by-almeras', points: 59, wins: 0 },
    { position: 8, driverId: 'hartog', teamId: 'ombra-racing', points: 43, wins: 0 },
    { position: 9, driverId: 'hanafin', teamId: 'fach-auto-tech', points: 40, wins: 0 },
    { position: 10, driverId: 'iaquinta', teamId: 'dinamic-motorsport', points: 39, wins: 0 },
  ],
  constructors: [],
}
