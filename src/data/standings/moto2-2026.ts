import type { SeasonStandings } from './types'

// Moto2 2026 standings — after Round 7 Italian GP at Mugello (2026-05-31)
// Sources: motogp.com, motorsport.com, motomatters.com, gpblog.com, Wikipedia
export const moto2Standings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'gonzalez-m', teamId: 'intact-gp', points: 129.5, wins: 3 },
    { position: 2, driverId: 'guevara', teamId: 'pramac-yamaha-moto2', points: 95, wins: 1 },
    { position: 3, driverId: 'vietti', teamId: 'speedrs-team', points: 93, wins: 0 },
    { position: 4, driverId: 'agius', teamId: 'intact-gp', points: 78, wins: 2 },
    { position: 5, driverId: 'holgado', teamId: 'aspar-moto2', points: 65, wins: 1 },
    { position: 6, driverId: 'alonso-d', teamId: 'aspar-moto2', points: 58, wins: 0 },
    { position: 7, driverId: 'ortola', teamId: 'qjmotor-msi', points: 52.5, wins: 0 },
    { position: 8, driverId: 'lopez-a', teamId: 'gresini-moto2', points: 49.5, wins: 0 },
    { position: 9, driverId: 'munoz-d', teamId: 'italtrans-racing', points: 41, wins: 0 },
    { position: 10, driverId: 'veijer', teamId: 'red-bull-ktm-ajo', points: 36.5, wins: 0 },
  ],
  constructors: [
    // Chassis manufacturer standings — Wikipedia 2026 Moto2 World Championship
    { position: 1, teamId: 'kalex', points: 157.5, wins: 6 },
    { position: 2, teamId: 'boscoscuro', points: 116, wins: 1 },
    { position: 3, teamId: 'forward', points: 30, wins: 0 },
  ],
}
