import type { SeasonStandings } from './types'

// FIA World Rallycross 2025 final standings — final World RX season
// Source: Wikipedia 2025 FIA World Rallycross Championship — verified May 2026
// Champion: Johan Kristoffersson (Kristoffersson Motorsport) — 8th and final title.
export const wrxStandings2025: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'kristoffersson', teamId: 'kristoffersson-motorsport', points: 144, wins: 3 },
    { position: 2, driverId: 'n-gronholm', teamId: 'ce-dealer-team', points: 121, wins: 1 },
    { position: 3, driverId: 'veiby', teamId: 'kristoffersson-motorsport', points: 120, wins: 2 },
    { position: 4, driverId: 'k-andersson', teamId: 'ce-dealer-team', points: 83, wins: 0 },
    { position: 5, driverId: 'timmy-hansen', teamId: 'hansen-world-rx', points: 70, wins: 0 },
    { position: 6, driverId: 'kevin-hansen', teamId: 'hansen-world-rx', points: 56, wins: 0 },
    { position: 7, driverId: 'j-rytkonen', teamId: 'pgrx', points: 56, wins: 0 },
    { position: 8, driverId: 'p-odonovan', teamId: 'team-rx-racing', points: 37, wins: 0 },
    { position: 9, driverId: 'g-bergstrom', teamId: 'kristoffersson-motorsport', points: 10, wins: 0 },
    { position: 10, driverId: 'pelfrene', teamId: 'gck', points: 9, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'kristoffersson-motorsport', points: 264, wins: 5 },
    { position: 2, teamId: 'ce-dealer-team', points: 204, wins: 1 },
    { position: 3, teamId: 'hansen-world-rx', points: 126, wins: 0 },
  ],
}
