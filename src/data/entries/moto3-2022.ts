import type { EntryItem } from './types'

// Moto3 2022 full-season entry list — 26 regular riders across 13 teams
// Sources: Wikipedia "2022 Moto3 World Championship", motogp.com entry list,
//   crash.net per-round entry pages and motorsport.com season previews
// Verification date: 2026-06-08
// Chassis manufacturers: KTM, Honda, GasGas, Husqvarna and CFMoto (CFMoto's debut season)
// Note: Aspar's team name carried both "Valresa" (early rounds) and "Gaviota" (later)
//   sponsorship — we use one consolidated slug `gaviota-gasgas-aspar` for 2022
// Note: new IDs introduced for 2022 — riders alonso-d, farioli, holgado, surra-a,
//   ortola, munoz-da, ana-carrasco, almansa, bartolini, bertelle, ogden, whatley,
//   azman, riu-g, salvador, kelso, aji, furusato; and teams gaviota-gasgas-aspar,
//   angeluss-mta, finetwork-team-boe, qjmotor-avintia, cfmoto-racing-prustelgp,
//   visiontrack-racing, mt-helmets-msi-22. See PR consolidated summary for the
//   exact entries to add to drivers.ts / teams.ts
export const moto3Entries2022: EntryItem[] = [
  // Red Bull KTM Ajo (KTM)
  { driverId: 'masia', teamId: 'red-bull-ktm-ajo-moto3', carNumber: 5 },
  { driverId: 'holgado', teamId: 'red-bull-ktm-ajo-moto3', carNumber: 96 },
  // Red Bull KTM Tech3 (KTM)
  { driverId: 'fernandez-ad', teamId: 'red-bull-ktm-tech3-moto3', carNumber: 31 },
  { driverId: 'oncu', teamId: 'red-bull-ktm-tech3-moto3', carNumber: 53 },
  // Leopard Racing (Honda)
  { driverId: 'foggia', teamId: 'leopard-racing', carNumber: 7 },
  { driverId: 'suzuki-t', teamId: 'leopard-racing', carNumber: 24 },
  // Gaviota GasGas Aspar Team (GasGas)
  { driverId: 'garcia-s', teamId: 'gaviota-gasgas-aspar', carNumber: 11 },
  { driverId: 'guevara', teamId: 'gaviota-gasgas-aspar', carNumber: 28 },
  // Honda Team Asia (Honda)
  { driverId: 'aji', teamId: 'honda-team-asia-moto3', carNumber: 64 },
  { driverId: 'furusato', teamId: 'honda-team-asia-moto3', carNumber: 72 },
  // Rivacold Snipers Team (Honda)
  { driverId: 'migno', teamId: 'rivacold-snipers', carNumber: 16 },
  { driverId: 'surra-a', teamId: 'rivacold-snipers', carNumber: 67 },
  // Sterilgarda Husqvarna Max Racing (Husqvarna)
  { driverId: 'mcphee', teamId: 'sterilgarda-max-racing', carNumber: 17 },
  { driverId: 'sasaki-a', teamId: 'sterilgarda-max-racing', carNumber: 71 },
  // Angeluss MTA Team (KTM)
  { driverId: 'ortola', teamId: 'angeluss-mta', carNumber: 48 },
  { driverId: 'nepa-s', teamId: 'angeluss-mta', carNumber: 82 },
  // Finetwork Team Boé (KTM)
  { driverId: 'carrasco', teamId: 'finetwork-team-boe', carNumber: 22 },
  { driverId: 'munoz-da', teamId: 'finetwork-team-boe', carNumber: 44 },
  // CIP Green Power (KTM)
  { driverId: 'toba', teamId: 'cip-green-power', carNumber: 27 },
  { driverId: 'kelso', teamId: 'cip-green-power', carNumber: 66 },
  // MT Helmets – MSi (KTM)
  { driverId: 'yamanaka-r', teamId: 'mt-helmets-msi-moto3', carNumber: 6 },
  { driverId: 'moreira', teamId: 'mt-helmets-msi-moto3', carNumber: 10 },
  // QJmotor Avintia Racing Team (KTM)
  { driverId: 'bertelle', teamId: 'qjmotor-avintia', carNumber: 18 },
  { driverId: 'bartolini', teamId: 'qjmotor-avintia', carNumber: 23 },
  // Sic58 Squadra Corse (Honda)
  { driverId: 'rossi-r', teamId: 'sic58-squadra-corse', carNumber: 29 },
  { driverId: 'fellon', teamId: 'sic58-squadra-corse', carNumber: 54 },
  // CFMoto Racing PrüstelGP (CFMoto)
  { driverId: 'artigas', teamId: 'cfmoto-racing-prustelgp', carNumber: 43 },
  { driverId: 'tatay', teamId: 'cfmoto-racing-prustelgp', carNumber: 99 },
  // VisionTrack Racing Team (Husqvarna/KTM)
  { driverId: 'ogden', teamId: 'visiontrack-racing', carNumber: 19 },
  { driverId: 'whatley', teamId: 'visiontrack-racing', carNumber: 70 },
]
