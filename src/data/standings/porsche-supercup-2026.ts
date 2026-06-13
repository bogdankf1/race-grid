import type { SeasonStandings } from './types'

// Porsche Mobil 1 Supercup 2026 standings — after Round 1 (Monaco)
// Source: newsroom.porsche.com (official finishing order P1-P5), racing.porsche.com, Wikipedia.
// One-make championship — no constructors' title. Top 5 shown (officially confirmed order).
export const porscheSupercupStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'oeverhaus', teamId: 'martinet-by-almeras', points: 25, wins: 1 },
    { position: 2, driverId: 'bristot', teamId: 'dinamic-motorsport', points: 20, wins: 0 },
    { position: 3, driverId: 'burton', teamId: 'gp-elite', points: 17, wins: 0 },
    { position: 4, driverId: 'robert-de-haan', teamId: 'bwt-lechner-racing', points: 14, wins: 0 },
    { position: 5, driverId: 'flynt-schuring', teamId: 'schumacher-clrt', points: 12, wins: 0 },
  ],
  constructors: [],
}
