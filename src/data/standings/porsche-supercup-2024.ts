import type { SeasonStandings } from './types'

// Porsche Mobil 1 Supercup 2024 final standings
// Sources:
//   - Wikipedia: 2024 Porsche Supercup
//   - racing.porsche.com results archive
// Verified: June 2026 (season concluded 1 September 2024)
// Champion: Larry ten Voorde (Schumacher CLRT) — his fifth Porsche Supercup title.
// One-make championship — no constructors' title.
export const porscheSupercupStandings2024: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'ten-voorde', teamId: 'schumacher-clrt', points: 168, wins: 5 },
    { position: 2, driverId: 'harry-king', teamId: 'bwt-lechner-racing', points: 145, wins: 1 },
    { position: 3, driverId: 'marvin-klein', teamId: 'schumacher-clrt', points: 121, wins: 1 },
    { position: 4, driverId: 'masters-k', teamId: 'ombra-racing', points: 90, wins: 0 },
    { position: 5, driverId: 'ghiretti', teamId: 'schumacher-clrt', points: 85, wins: 1 },
    { position: 6, driverId: 'van-eijndhoven', teamId: 'gp-elite', points: 85, wins: 0 },
    { position: 7, driverId: 'robert-de-haan', teamId: 'bwt-lechner-racing', points: 76, wins: 0 },
    { position: 8, driverId: 'haverkort', teamId: 'gp-elite', points: 73, wins: 0 },
    { position: 9, driverId: 'jaap-van-lagen', teamId: 'dinamic-motorsport', points: 60, wins: 0 },
    { position: 10, driverId: 'jaubert-m', teamId: 'martinet-by-almeras', points: 41, wins: 0 },
  ],
  constructors: [],
}
