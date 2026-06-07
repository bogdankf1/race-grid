import type { EntryItem } from './types'

// Moto3 2025 full-season entry list — 26 riders across 13 teams
// Sources: Wikipedia "2025 Moto3 World Championship", motogp.com entry list, bikesportnews.com
// Chassis manufacturers: Pierer Mobility RC4 (KTM/CFMOTO badging) and Honda NSF250RW
// Note: in standings, Pierer Mobility entries are grouped as KTM
export const moto3Entries2025: EntryItem[] = [
  // Red Bull KTM Ajo (KTM)
  { driverId: 'rueda-ja', teamId: 'red-bull-ktm-ajo-moto3', carNumber: 99 },
  { driverId: 'carpe', teamId: 'red-bull-ktm-ajo-moto3', carNumber: 83 },
  // Frinsa – MT Helmets – MSi (KTM)
  { driverId: 'piqueras', teamId: 'frinsa-mt-helmets-msi', carNumber: 36 },
  { driverId: 'yamanaka-r', teamId: 'frinsa-mt-helmets-msi', carNumber: 6 },
  // CFMoto Aspar Team (KTM)
  { driverId: 'quiles', teamId: 'aspar-moto3', carNumber: 28 },
  { driverId: 'foggia', teamId: 'aspar-moto3', carNumber: 71 },
  // Red Bull KTM Tech3 (KTM)
  { driverId: 'roulstone', teamId: 'red-bull-ktm-tech3-moto3', carNumber: 12 },
  { driverId: 'perrone', teamId: 'red-bull-ktm-tech3-moto3', carNumber: 73 },
  // Liqui Moly Dynavolt Intact GP (KTM)
  { driverId: 'munoz-da', teamId: 'intact-gp-moto3', carNumber: 64 },
  { driverId: 'pini', teamId: 'intact-gp-moto3', carNumber: 94 },
  // CIP Green Power (KTM)
  { driverId: 'ogden', teamId: 'cip-green-power', carNumber: 55 },
  { driverId: 'dettwiler', teamId: 'cip-green-power', carNumber: 11 },
  // Leopard Racing (Honda)
  { driverId: 'almansa', teamId: 'leopard-racing', carNumber: 22 },
  { driverId: 'fernandez-ad', teamId: 'leopard-racing', carNumber: 31 },
  // Sic58 Squadra Corse (Honda)
  { driverId: 'nepa-s', teamId: 'sic58-squadra-corse', carNumber: 82 },
  { driverId: 'lunetta', teamId: 'sic58-squadra-corse', carNumber: 48 },
  // Honda Team Asia (Honda)
  { driverId: 'furusato', teamId: 'honda-team-asia-moto3', carNumber: 72 },
  { driverId: 'buasri', teamId: 'honda-team-asia-moto3', carNumber: 93 },
  // Rivacold Snipers Team (Honda)
  { driverId: 'carraro', teamId: 'rivacold-snipers', carNumber: 2 },
  { driverId: 'rossi-r', teamId: 'rivacold-snipers', carNumber: 45 },
  // LevelUp – MTA (KTM)
  { driverId: 'kelso', teamId: 'levelup-mta', carNumber: 66 },
  { driverId: 'bertelle', teamId: 'levelup-mta', carNumber: 32 },
  // Denssi Racing – Boé (KTM)
  { driverId: 'buchanan', teamId: 'denssi-racing-boe', carNumber: 14 },
  { driverId: 'moodley', teamId: 'denssi-racing-boe', carNumber: 21 },
  // Gryd – MLav Racing (Honda)
  { driverId: 'o-shea', teamId: 'gryd-mlav-racing', carNumber: 8 },
  { driverId: 'uriarte-m', teamId: 'gryd-mlav-racing', carNumber: 89 },
]
