import type { SeasonStandings } from './types'

// FIA World Rallycross 2023 final standings — RX1e
// Source: Wikipedia 2023 FIA World Rallycross Championship — verified May 2026
// Champion: Johan Kristoffersson (Volkswagen Dealerteam BAUHAUS) — 6th title.
export const wrxStandings2023: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'kristoffersson', teamId: 'vw-dealerteam-bauhaus', points: 141, wins: 4 },
    { position: 2, driverId: 'kevin-hansen', teamId: 'hansen-world-rx', points: 104, wins: 1 },
    { position: 3, driverId: 'n-gronholm', teamId: 'ce-dealer-team', points: 94, wins: 0 },
    { position: 4, driverId: 't-scheider', teamId: 'all-inkl-munnich', points: 89, wins: 0 },
    { position: 5, driverId: 'veiby', teamId: 'vw-dealerteam-bauhaus', points: 82, wins: 0 },
    { position: 6, driverId: 'timmy-hansen', teamId: 'hansen-world-rx', points: 78, wins: 0 },
    { position: 7, driverId: 'k-andersson', teamId: 'ce-dealer-team', points: 71, wins: 0 },
    { position: 8, driverId: 'munnich', teamId: 'all-inkl-munnich', points: 30, wins: 0 },
    { position: 9, driverId: 's-loeb', teamId: 'special-one-racing', points: 29, wins: 0 },
    { position: 10, driverId: 'chicherit', teamId: 'special-one-racing', points: 27, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'vw-dealerteam-bauhaus', points: 104, wins: 4 },
    { position: 2, teamId: 'ce-dealer-team', points: 72, wins: 0 },
    { position: 3, teamId: 'hansen-world-rx', points: 71, wins: 1 },
    { position: 4, teamId: 'special-one-racing', points: 46, wins: 0 },
  ],
}
