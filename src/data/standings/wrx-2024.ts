import type { SeasonStandings } from './types'

// FIA World Rallycross 2024 final standings — mixed RX1 (ICE) and RX1e (EV)
// Source: Wikipedia 2024 FIA World Rallycross Championship — verified May 2026
// Champion: Johan Kristoffersson (KMS - HORSE Powertrain) — 7th title.
export const wrxStandings2024: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'kristoffersson', teamId: 'kms-horse-powertrain', points: 240, wins: 5 },
    { position: 2, driverId: 'kevin-hansen', teamId: 'hansen-world-rx', points: 197, wins: 1 },
    { position: 3, driverId: 'veiby', teamId: 'kms-horse-powertrain', points: 190, wins: 1 },
    { position: 4, driverId: 'timmy-hansen', teamId: 'hansen-world-rx', points: 181, wins: 1 },
    { position: 5, driverId: 'n-gronholm', teamId: 'ce-dealer-team', points: 177, wins: 1 },
    { position: 6, driverId: 'k-andersson', teamId: 'ce-dealer-team', points: 145, wins: 0 },
    { position: 7, driverId: 'munnich', teamId: 'all-inkl-munnich', points: 76, wins: 0 },
    { position: 8, driverId: 'pelfrene', teamId: 'jdm-raptor-racing', points: 71, wins: 0 },
    { position: 9, driverId: 'j-rytkonen', teamId: 'pgrx', points: 36, wins: 1 },
    { position: 10, driverId: 'g-bergstrom', teamId: 'kristoffersson-motorsport', points: 33, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'kms-horse-powertrain', points: 430, wins: 6 },
    { position: 2, teamId: 'hansen-world-rx', points: 378, wins: 2 },
    { position: 3, teamId: 'ce-dealer-team', points: 322, wins: 1 },
  ],
}
