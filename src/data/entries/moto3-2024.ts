import type { EntryItem } from './types'

// Moto3 2024 full-season entry list — 25 riders across 13 teams
// Sources: Wikipedia "2024 Moto3 World Championship", motogp.com entry list
// Verification date: 2026-06-07
// Chassis manufacturers (5): KTM, GasGas, Husqvarna (all Pierer Mobility RC4 platforms),
//   plus CFMoto (Pierer-derived RC250GP) and Honda NSF250RW
// Note: several rider/team IDs new for 2024 are sensible slugs (suzuki-t, zurutuza, farioli,
//   red-bull-gasgas-tech3-moto3, intact-gp-husqvarna-moto3, mlav-racing, boe-motorsports,
//   mt-helmets-msi) — see summary for the exact entries to add to drivers.ts / teams.ts
export const moto3Entries2024: EntryItem[] = [
  // CFMoto Aspar Team (CFMoto)
  { driverId: 'alonso-d', teamId: 'aspar-moto3', carNumber: 80 },
  { driverId: 'esteban-j', teamId: 'aspar-moto3', carNumber: 78 },
  // Red Bull GasGas Tech3 (GasGas)
  { driverId: 'holgado', teamId: 'red-bull-gasgas-tech3-moto3', carNumber: 96 },
  { driverId: 'roulstone', teamId: 'red-bull-gasgas-tech3-moto3', carNumber: 12 },
  // Honda Team Asia (Honda)
  { driverId: 'buasri', teamId: 'honda-team-asia-moto3', carNumber: 5 },
  { driverId: 'furusato', teamId: 'honda-team-asia-moto3', carNumber: 93 },
  // Leopard Racing (Honda)
  { driverId: 'fernandez-ad', teamId: 'leopard-racing', carNumber: 31 },
  { driverId: 'piqueras', teamId: 'leopard-racing', carNumber: 36 },
  // MLav Racing (Honda)
  { driverId: 'ogden', teamId: 'mlav-racing', carNumber: 19 },
  // Rivacold Snipers Team (Honda)
  { driverId: 'bertelle', teamId: 'rivacold-snipers', carNumber: 18 },
  { driverId: 'almansa', teamId: 'rivacold-snipers', carNumber: 22 },
  // Sic58 Squadra Corse (Honda)
  { driverId: 'farioli', teamId: 'sic58-squadra-corse', carNumber: 7 },
  { driverId: 'lunetta', teamId: 'sic58-squadra-corse', carNumber: 57 },
  // Liqui Moly Husqvarna Intact GP (Husqvarna)
  { driverId: 'suzuki-t', teamId: 'intact-gp-husqvarna-moto3', carNumber: 24 },
  { driverId: 'veijer', teamId: 'intact-gp-husqvarna-moto3', carNumber: 95 },
  // Boé Motorsports (KTM)
  { driverId: 'munoz-da', teamId: 'boe-motorsports', carNumber: 64 },
  { driverId: 'kelso', teamId: 'boe-motorsports', carNumber: 66 },
  // CIP Green Power (KTM)
  { driverId: 'rossi-r', teamId: 'cip-green-power', carNumber: 54 },
  { driverId: 'dettwiler', teamId: 'cip-green-power', carNumber: 55 },
  // LevelUp – MTA (KTM)
  { driverId: 'carraro', teamId: 'levelup-mta', carNumber: 10 },
  { driverId: 'nepa-s', teamId: 'levelup-mta', carNumber: 82 },
  // MT Helmets – MSi (KTM)
  { driverId: 'yamanaka-r', teamId: 'mt-helmets-msi', carNumber: 6 },
  { driverId: 'ortola', teamId: 'mt-helmets-msi', carNumber: 48 },
  // Red Bull KTM Ajo (KTM)
  { driverId: 'zurutuza', teamId: 'red-bull-ktm-ajo-moto3', carNumber: 85 },
  { driverId: 'rueda-ja', teamId: 'red-bull-ktm-ajo-moto3', carNumber: 99 },
]
