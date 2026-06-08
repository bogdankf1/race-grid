import type { SeasonStandings } from './types'

// Porsche Mobil 1 Supercup 2021 final standings
// Sources:
//   - Wikipedia: 2021 Porsche Supercup
//   - racing.porsche.com results archive
// Verified: June 2026 (season concluded 12 September 2021)
// Champion: Larry ten Voorde (Team GP Elite) — second consecutive title.
// One-make championship — no constructors' title.
export const porscheSupercupStandings2021: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'ten-voorde', teamId: 'gp-elite', points: 155, wins: 4 },
    { position: 2, driverId: 'evans-j', teamId: 'martinet-by-almeras', points: 111, wins: 1 },
    { position: 3, driverId: 'guven', teamId: 'bwt-lechner-racing', points: 110, wins: 1 },
    { position: 4, driverId: 'heinrich', teamId: 'nebulus-racing-huber', points: 110, wins: 1 },
    { position: 5, driverId: 'kohler', teamId: 'nebulus-racing-huber', points: 91, wins: 0 },
    { position: 6, driverId: 'boccolacci', teamId: 'martinet-by-almeras', points: 81, wins: 0 },
    { position: 7, driverId: 'pereira', teamId: 'bwt-lechner-racing', points: 71, wins: 1 },
    { position: 8, driverId: 'latorre-f', teamId: 'clrt', points: 61, wins: 0 },
    { position: 9, driverId: 'van-splunteren', teamId: 'gp-elite', points: 56, wins: 0 },
    { position: 10, driverId: 'zoechling', teamId: 'fach-auto-tech', points: 50, wins: 0 },
  ],
  constructors: [],
}
