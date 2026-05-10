import type { SeasonStandings } from './types'

// FIA World Rallycross 2021 final standings — RX1 (Supercar)
// Source: Wikipedia 2021 FIA World Rallycross Championship — verified May 2026
// Champion: Johan Kristoffersson (KYB EKS JC) — 4th title.
// Tied on points with Timmy Hansen (217), Kristoffersson took the title on countback.
export const wrxStandings2021: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'kristoffersson', teamId: 'kyb-eks-jc', points: 217, wins: 4 },
    { position: 2, driverId: 'timmy-hansen', teamId: 'hansen-world-rx', points: 217, wins: 3 },
    { position: 3, driverId: 'n-gronholm', teamId: 'grx-set', points: 197, wins: 3 },
    { position: 4, driverId: 'kevin-hansen', teamId: 'hansen-world-rx', points: 191, wins: 1 },
    { position: 5, driverId: 'k-szabo', teamId: 'grx-set', points: 162, wins: 0 },
    { position: 6, driverId: 'enzo-ide', teamId: 'kyb-eks-jc', points: 125, wins: 0 },
    { position: 7, driverId: 'abbring', teamId: 'unkorrupted', points: 97, wins: 0 },
    { position: 8, driverId: 't-scheider', teamId: 'all-inkl-munnich', points: 75, wins: 0 },
    { position: 9, driverId: 'j-rytkonen', teamId: 'juha-rytkonen-racing', points: 52, wins: 0 },
    { position: 10, driverId: 'm-ekstrom', teamId: 'all-inkl-munnich', points: 37, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'hansen-world-rx', points: 408, wins: 4 },
    { position: 2, teamId: 'grx-set', points: 359, wins: 3 },
    { position: 3, teamId: 'kyb-eks-jc', points: 342, wins: 4 },
  ],
}
