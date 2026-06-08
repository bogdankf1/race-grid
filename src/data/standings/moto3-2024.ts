import type { SeasonStandings } from './types'

// Moto3 2024 final standings — verified from motorsport.com, motogp.com,
//   Wikipedia "2024 Moto3 World Championship", BikeSport News, MotoMatters
// Verification date: 2026-06-07
// Champion: David Alonso (CFMoto Aspar Team) — clinched at Japan (Round 16) with
//   four races to spare; first Colombian World Champion in any Grand Prix class
// Records: 14 wins (single-season record across all GP classes), 421 points
// Manufacturer (chassis) standings: five constructors scored — CFMoto, GasGas,
//   Husqvarna, KTM (all Pierer Mobility platforms) and Honda
export const moto3Standings2024: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'alonso-d', teamId: 'aspar-moto3', points: 421, wins: 14 },
    { position: 2, driverId: 'holgado', teamId: 'red-bull-gasgas-tech3-moto3', points: 256, wins: 1 },
    { position: 3, driverId: 'veijer', teamId: 'intact-gp-husqvarna-moto3', points: 242, wins: 1 },
    { position: 4, driverId: 'ortola', teamId: 'mt-helmets-msi', points: 224, wins: 2 },
    { position: 5, driverId: 'munoz-da', teamId: 'boe-motorsports', points: 172, wins: 0 },
    { position: 6, driverId: 'fernandez-ad', teamId: 'leopard-racing', points: 158, wins: 0 },
    { position: 7, driverId: 'rueda-ja', teamId: 'red-bull-ktm-ajo-moto3', points: 157, wins: 1 },
    { position: 8, driverId: 'piqueras', teamId: 'leopard-racing', points: 153, wins: 1 },
    { position: 9, driverId: 'kelso', teamId: 'boe-motorsports', points: 138, wins: 0 },
    { position: 10, driverId: 'furusato', teamId: 'honda-team-asia-moto3', points: 137, wins: 0 },
  ],
  constructors: [
    // Chassis manufacturer standings — five Pierer/Honda platforms scored
    { position: 1, teamId: 'cfmoto', points: 485, wins: 14 },
    { position: 2, teamId: 'gas-gas', points: 357, wins: 1 },
    { position: 3, teamId: 'husqvarna', points: 333, wins: 1 },
    { position: 4, teamId: 'ktm', points: 324, wins: 3 },
    { position: 5, teamId: 'honda', points: 257, wins: 1 },
  ],
}
