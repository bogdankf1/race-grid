import type { SeasonStandings } from './types'

// Moto2 2025 final standings — verified from Wikipedia "2025 Moto2 World Championship"
// Champion: Diogo Moreira (Italtrans Racing Team) — first Brazilian motorcycle GP world champion
// Kalex clinched the constructors' title for the 12th consecutive season
export const moto2Standings2025: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'moreira', teamId: 'italtrans-racing', points: 287, wins: 5 },
    { position: 2, driverId: 'gonzalez-m', teamId: 'intact-gp', points: 257, wins: 4 },
    { position: 3, driverId: 'baltus', teamId: 'fantic-racing', points: 232, wins: 0 },
    { position: 4, driverId: 'canet', teamId: 'fantic-racing', points: 227, wins: 1 },
    { position: 5, driverId: 'dixon-j', teamId: 'marc-vds-moto2', points: 225, wins: 3 },
    { position: 6, driverId: 'holgado', teamId: 'aspar-moto2', points: 208, wins: 3 },
    { position: 7, driverId: 'vietti', teamId: 'speedrs-team', points: 157, wins: 1 },
    { position: 8, driverId: 'arenas', teamId: 'gresini-moto2', points: 156, wins: 0 },
    { position: 9, driverId: 'alonso-d', teamId: 'aspar-moto2', points: 153, wins: 1 },
    { position: 10, driverId: 'agius', teamId: 'intact-gp', points: 149, wins: 1 },
  ],
  constructors: [
    // Chassis manufacturer standings — Wikipedia 2025 Moto2 World Championship
    { position: 1, teamId: 'kalex', points: 518, wins: 17 },
    { position: 2, teamId: 'boscoscuro', points: 342, wins: 5 },
    { position: 3, teamId: 'forward', points: 28, wins: 0 },
  ],
}
