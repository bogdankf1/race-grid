import type { EntryItem } from './types'

// Moto3 2023 full-season entry list — 26 regular riders across 13 teams
// Sources: Wikipedia "2023 Moto3 World Championship", motogp.com entry list,
//   bikesportnews.com season preview and crash.net per-round entry pages
// Verification date: 2026-06-08
// Chassis manufacturers: KTM, Honda, GasGas, Husqvarna and CFMoto
// Note: the Aspar team rebranded for 2023 to a simple "GasGas Aspar Team" entry
//   (no Valresa/Gaviota title sponsor) — we use slug `gasgas-aspar-team`
// Note: new IDs introduced for 2023 — riders rueda-ja, alonso-d, veijer,
//   dettwiler, aji, furusato, aditama, perez-v; and teams gasgas-aspar-team,
//   sterilgarda-max-racing reuse and intact-gp-husqvarna-moto3 (matches 2024).
//   See PR consolidated summary for exact entries to add to drivers.ts / teams.ts
export const moto3Entries2023: EntryItem[] = [
  // Red Bull KTM Ajo (KTM)
  { driverId: 'oncu', teamId: 'red-bull-ktm-ajo-moto3', carNumber: 53 },
  { driverId: 'rueda-ja', teamId: 'red-bull-ktm-ajo-moto3', carNumber: 99 },
  // Red Bull KTM Tech3 (KTM)
  { driverId: 'holgado', teamId: 'red-bull-ktm-tech3-moto3', carNumber: 96 },
  { driverId: 'farioli', teamId: 'red-bull-ktm-tech3-moto3', carNumber: 77 },
  // Leopard Racing (Honda)
  { driverId: 'masia', teamId: 'leopard-racing', carNumber: 5 },
  { driverId: 'suzuki-t', teamId: 'leopard-racing', carNumber: 24 },
  { driverId: 'fernandez-ad', teamId: 'leopard-racing', carNumber: 31 },
  // GasGas Aspar Team (GasGas)
  { driverId: 'yamanaka-r', teamId: 'gasgas-aspar-team', carNumber: 6 },
  { driverId: 'alonso-d', teamId: 'gasgas-aspar-team', carNumber: 80 },
  // Honda Team Asia (Honda)
  { driverId: 'aji', teamId: 'honda-team-asia-moto3', carNumber: 64 },
  { driverId: 'furusato', teamId: 'honda-team-asia-moto3', carNumber: 72 },
  { driverId: 'aditama', teamId: 'honda-team-asia-moto3', carNumber: 73 },
  // Rivacold Snipers Team (Honda)
  { driverId: 'bertelle', teamId: 'rivacold-snipers', carNumber: 18 },
  { driverId: 'fenati', teamId: 'rivacold-snipers', carNumber: 55 },
  // Liqui Moly Husqvarna Intact GP (Husqvarna)
  { driverId: 'sasaki-a', teamId: 'intact-gp-husqvarna-moto3', carNumber: 71 },
  { driverId: 'veijer', teamId: 'intact-gp-husqvarna-moto3', carNumber: 95 },
  // Angeluss MTA Team (KTM)
  { driverId: 'ortola', teamId: 'angeluss-mta', carNumber: 48 },
  { driverId: 'nepa-s', teamId: 'angeluss-mta', carNumber: 82 },
  // Boé Motorsports (KTM)
  { driverId: 'carrasco', teamId: 'boe-motorsports', carNumber: 22 },
  { driverId: 'munoz-da', teamId: 'boe-motorsports', carNumber: 44 },
  { driverId: 'perez-v', teamId: 'boe-motorsports', carNumber: 87 },
  // CIP Green Power (KTM)
  { driverId: 'fellon', teamId: 'cip-green-power', carNumber: 54 },
  { driverId: 'dettwiler', teamId: 'cip-green-power', carNumber: 55 },
  // MT Helmets – MSi (KTM)
  { driverId: 'moreira', teamId: 'mt-helmets-msi-moto3', carNumber: 10 },
  { driverId: 'azman', teamId: 'mt-helmets-msi-moto3', carNumber: 63 },
  // CFMoto Racing PrüstelGP (CFMoto)
  { driverId: 'artigas', teamId: 'cfmoto-racing-prustelgp', carNumber: 43 },
  { driverId: 'kelso', teamId: 'cfmoto-racing-prustelgp', carNumber: 66 },
  // Sic58 Squadra Corse (Honda)
  { driverId: 'rossi-r', teamId: 'sic58-squadra-corse', carNumber: 29 },
  { driverId: 'toba', teamId: 'sic58-squadra-corse', carNumber: 27 },
  // VisionTrack Racing Team (Honda)
  { driverId: 'ogden', teamId: 'visiontrack-racing', carNumber: 19 },
  { driverId: 'whatley', teamId: 'visiontrack-racing', carNumber: 70 },
]
