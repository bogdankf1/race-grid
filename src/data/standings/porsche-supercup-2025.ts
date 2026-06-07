import type { SeasonStandings } from './types'

// Porsche Mobil 1 Supercup 2025 final standings
// Sources:
//   - racing.porsche.com/mobil-1-supercup/results-season-2025
//   - Wikipedia: 2025 Porsche Supercup
// Verified: June 2026 (season concluded September 2025)
// Champion: Alessandro Ghiretti (Schumacher CLRT)
// One-make championship — no constructors' title.
export const porscheSupercupStandings2025: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'ghiretti', teamId: 'schumacher-clrt', points: 130.5, wins: 4 },
    { position: 2, driverId: 'robert-de-haan', teamId: 'bwt-lechner-racing', points: 115.5, wins: 2 },
    { position: 3, driverId: 'flynt-schuring', teamId: 'schumacher-clrt', points: 103.5, wins: 0 },
    { position: 4, driverId: 'marvin-klein', teamId: 'bwt-lechner-racing', points: 78, wins: 1 },
    { position: 5, driverId: 'levi-a', teamId: 'gp-elite', points: 76, wins: 0 },
    { position: 6, driverId: 'van-eijndhoven', teamId: 'gp-elite', points: 71, wins: 0 },
    { position: 7, driverId: 'oeverhaus', teamId: 'proton-huber-competition', points: 68, wins: 1 },
    { position: 8, driverId: 'jaubert-m', teamId: 'martinet-by-almeras', points: 68, wins: 1 },
    { position: 9, driverId: 'boerekamps', teamId: 'gp-elite', points: 57, wins: 1 },
    { position: 10, driverId: 'stiak', teamId: 'target-competition', points: 46.5, wins: 0 },
  ],
  constructors: [],
}
