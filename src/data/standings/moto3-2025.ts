import type { SeasonStandings } from './types'

// Moto3 2025 final standings — verified from motorsport.com, motogp.com,
//   Wikipedia "2025 Moto3 World Championship", BikeSport News
// Champion: José Antonio Rueda (Red Bull KTM Ajo) — title clinched at Indonesia (R18)
//   with four races to spare; Rueda missed Portugal (R21) and Valencia (R22) due to
//   injuries sustained in a sighting-lap crash at Malaysia
// Note: Adrián Fernández's Malaysia P3 (Round 20) was disqualified for a non-homologated
//   electronics map, promoting David Almansa to the podium; points reflect the DQ
// Manufacturer (constructor) standings: KTM record-setting 540 pts and 20 of 22 wins
export const moto3Standings2025: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'rueda-ja', teamId: 'red-bull-ktm-ajo-moto3', points: 365, wins: 10 },
    { position: 2, driverId: 'piqueras', teamId: 'frinsa-mt-helmets-msi', points: 281, wins: 4 },
    { position: 3, driverId: 'quiles', teamId: 'aspar-moto3', points: 274, wins: 3 },
    { position: 4, driverId: 'carpe', teamId: 'red-bull-ktm-ajo-moto3', points: 215, wins: 0 },
    { position: 5, driverId: 'munoz-da', teamId: 'intact-gp-moto3', points: 197, wins: 3 },
    { position: 6, driverId: 'kelso', teamId: 'levelup-mta', points: 193, wins: 0 },
    { position: 7, driverId: 'fernandez-ad', teamId: 'leopard-racing', points: 179, wins: 1 },
    { position: 8, driverId: 'furusato', teamId: 'honda-team-asia-moto3', points: 172, wins: 1 },
    { position: 9, driverId: 'yamanaka-r', teamId: 'frinsa-mt-helmets-msi', points: 136, wins: 0 },
    { position: 10, driverId: 'perrone', teamId: 'red-bull-ktm-tech3-moto3', points: 134, wins: 0 },
  ],
  constructors: [
    // Chassis manufacturer standings — 2025 Moto3 grid had only KTM (Pierer Mobility,
    //   including CFMOTO-badged bikes) and Honda
    { position: 1, teamId: 'ktm', points: 540, wins: 20 },
    { position: 2, teamId: 'honda', points: 308, wins: 2 },
  ],
}
