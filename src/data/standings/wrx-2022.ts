import type { SeasonStandings } from './types'

// FIA World Rallycross 2022 final standings — RX1e (electric)
// Source: Wikipedia 2022 FIA World Rallycross Championship — verified May 2026
// Champion: Johan Kristoffersson (Kristoffersson Motorsport) — 5th title.
export const wrxStandings2022: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'kristoffersson', teamId: 'kristoffersson-motorsport', points: 183, wins: 6 },
    { position: 2, driverId: 'timmy-hansen', teamId: 'hansen-world-rx', points: 136, wins: 1 },
    { position: 3, driverId: 'n-gronholm', teamId: 'ce-dealer-team', points: 130, wins: 1 },
    { position: 4, driverId: 'veiby', teamId: 'kristoffersson-motorsport', points: 124, wins: 0 },
    { position: 5, driverId: 'kevin-hansen', teamId: 'hansen-world-rx', points: 122, wins: 0 },
    { position: 6, driverId: 'g-bergstrom', teamId: 'kristoffersson-motorsport', points: 107, wins: 0 },
    { position: 7, driverId: 'k-andersson', teamId: 'ce-dealer-team', points: 102, wins: 0 },
    { position: 8, driverId: 'munnich', teamId: 'all-inkl-munnich', points: 78, wins: 0 },
    { position: 9, driverId: 'marklund', teamId: 'all-inkl-munnich', points: 8, wins: 0 },
    { position: 10, driverId: 'chicherit', teamId: 'gck-exclusive', points: 7, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'kristoffersson-motorsport', points: 306, wins: 6 },
    { position: 2, teamId: 'hansen-world-rx', points: 259, wins: 1 },
    { position: 3, teamId: 'ce-dealer-team', points: 232, wins: 1 },
  ],
}
