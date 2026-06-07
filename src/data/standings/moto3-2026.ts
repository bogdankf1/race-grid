import type { SeasonStandings } from './types'

// Moto3 2026 standings — after Round 7 Italian GP at Mugello (2026-05-31)
// Sources: motogp.com, motorsport.com, Wikipedia "2026 Moto3 World Championship"
export const moto3Standings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'quiles', teamId: 'aspar-moto3', points: 170, wins: 4 },
    { position: 2, driverId: 'carpe', teamId: 'red-bull-ktm-ajo-moto3', points: 111, wins: 0 },
    { position: 3, driverId: 'morelli-m', teamId: 'aspar-moto3', points: 77, wins: 0 },
    { position: 4, driverId: 'almansa', teamId: 'intact-gp-moto3', points: 76, wins: 1 },
    { position: 5, driverId: 'uriarte-b', teamId: 'red-bull-ktm-ajo-moto3', points: 72, wins: 1 },
    { position: 6, driverId: 'pratama-v', teamId: 'honda-team-asia-moto3', points: 71, wins: 0 },
    { position: 7, driverId: 'perrone', teamId: 'red-bull-ktm-tech3-moto3', points: 60, wins: 0 },
    { position: 8, driverId: 'munoz-da', teamId: 'intact-gp-moto3', points: 52, wins: 0 },
    { position: 9, driverId: 'pini', teamId: 'leopard-racing', points: 48, wins: 1 },
    { position: 10, driverId: 'danish', teamId: 'mt-helmets-msi-moto3', points: 48, wins: 0 },
  ],
  constructors: [
    // Chassis manufacturer standings — 2026 Moto3 grid uses only KTM and Honda
    // Sources: Wikipedia "2026 Moto3 World Championship"
    { position: 1, teamId: 'ktm', points: 165, wins: 6 },
    { position: 2, teamId: 'honda', points: 73, wins: 1 },
  ],
}
