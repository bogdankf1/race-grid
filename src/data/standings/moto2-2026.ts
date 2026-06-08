import type { SeasonStandings } from './types'

// Moto2 2026 standings — after Round 8 Hungarian GP at Balaton Park (2026-06-07)
// Points: Wikipedia "2026 Moto2 World Championship", crash.net/gpblog post-Balaton.
// Wins: counted from race results data (race winners through Round 8).
export const moto2Standings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'gonzalez-m', teamId: 'intact-gp', points: 154.5, wins: 4 },
    { position: 2, driverId: 'guevara', teamId: 'pramac-yamaha-moto2', points: 105, wins: 1 },
    { position: 3, driverId: 'vietti', teamId: 'speedrs-team', points: 102, wins: 0 },
    { position: 4, driverId: 'agius', teamId: 'intact-gp', points: 94, wins: 2 },
    { position: 5, driverId: 'holgado', teamId: 'aspar-moto2', points: 76, wins: 1 },
    { position: 6, driverId: 'alonso-d', teamId: 'aspar-moto2', points: 71, wins: 0 },
    { position: 7, driverId: 'lopez-a', teamId: 'gresini-moto2', points: 57.5, wins: 0 },
    { position: 8, driverId: 'ortola', teamId: 'qjmotor-msi', points: 52.5, wins: 0 },
    { position: 9, driverId: 'salac', teamId: 'american-racing-moto2', points: 50, wins: 0 },
    { position: 10, driverId: 'munoz-d', teamId: 'italtrans-racing', points: 41, wins: 0 },
    { position: 11, driverId: 'arbolino', teamId: 'fantic-racing', points: 37.5, wins: 0 },
    { position: 12, driverId: 'veijer', teamId: 'red-bull-ktm-ajo', points: 36.5, wins: 0 },
    { position: 13, driverId: 'escrig', teamId: 'klint-racing', points: 30, wins: 0 },
    { position: 14, driverId: 'baltus', teamId: 'fantic-racing', points: 28, wins: 0 },
    { position: 15, driverId: 'roberts-j', teamId: 'american-racing-moto2', points: 19, wins: 0 },
  ],
  constructors: [
    // Chassis manufacturer standings
    { position: 1, teamId: 'kalex', points: 182.5, wins: 7 },
    { position: 2, teamId: 'boscoscuro', points: 126, wins: 1 },
    { position: 3, teamId: 'forward', points: 30, wins: 0 },
  ],
}
