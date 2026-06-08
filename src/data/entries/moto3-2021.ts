import type { EntryItem } from './types'

// Moto3 2021 full-season entry list — 28 riders across 14 teams
// Sources: Wikipedia "2021 Moto3 World Championship", motogp.com entry list, motorsport.com
// Verification date: 2026-06-08
// Chassis manufacturers: KTM, Honda, Husqvarna, GasGas
// Note: new IDs introduced for 2021 — riders fenati, antonelli-n, migno, mcphee,
//   rodrigo-g, fellon, dupasquier, toba, kofler, tatay, surra, izdihar; and teams
//   valresa-gasgas-aspar, sterilgarda-max-racing, petronas-sprinta-racing,
//   avintia-vr46-academy, boe-owlride, carxpert-prustelgp, indonesian-racing-gresini.
//   See consolidated summary in PR for exact entries to add to drivers.ts / teams.ts
// Note: Jason Dupasquier tragically died from injuries sustained at the Italian GP (May 29);
//   Yuki Kunii was replaced by Takuma Matsuyama (matsuyama) from the Italian round
export const moto3Entries2021: EntryItem[] = [
  // Red Bull KTM Ajo (KTM)
  { driverId: 'masia', teamId: 'red-bull-ktm-ajo-moto3', carNumber: 5 },
  { driverId: 'acosta', teamId: 'red-bull-ktm-ajo-moto3', carNumber: 37 },
  // Leopard Racing (Honda)
  { driverId: 'foggia', teamId: 'leopard-racing', carNumber: 7 },
  { driverId: 'artigas', teamId: 'leopard-racing', carNumber: 43 },
  // Sterilgarda Max Racing Team (Husqvarna)
  { driverId: 'fernandez-ad', teamId: 'sterilgarda-max-racing', carNumber: 31 },
  { driverId: 'fenati', teamId: 'sterilgarda-max-racing', carNumber: 55 },
  // Valresa GasGas Aspar Team (GasGas)
  { driverId: 'garcia-s', teamId: 'valresa-gasgas-aspar', carNumber: 11 },
  { driverId: 'guevara', teamId: 'valresa-gasgas-aspar', carNumber: 28 },
  // Avintia VR46 Academy (KTM)
  { driverId: 'antonelli-n', teamId: 'avintia-vr46-academy', carNumber: 23 },
  { driverId: 'tatay', teamId: 'avintia-vr46-academy', carNumber: 22 },
  // Petronas Sprinta Racing (Honda)
  { driverId: 'mcphee', teamId: 'petronas-sprinta-racing', carNumber: 17 },
  { driverId: 'binder-d', teamId: 'petronas-sprinta-racing', carNumber: 40 },
  // Red Bull KTM Tech3 (KTM)
  { driverId: 'oncu', teamId: 'red-bull-ktm-tech3-moto3', carNumber: 53 },
  { driverId: 'sasaki-a', teamId: 'red-bull-ktm-tech3-moto3', carNumber: 71 },
  // Rivacold Snipers Team (Honda)
  { driverId: 'salac', teamId: 'rivacold-snipers', carNumber: 12 },
  { driverId: 'migno', teamId: 'rivacold-snipers', carNumber: 16 },
  // Boé Owlride (KTM)
  { driverId: 'rossi-r', teamId: 'boe-owlride', carNumber: 54 },
  { driverId: 'nepa-s', teamId: 'boe-owlride', carNumber: 82 },
  // CarXpert PrüstelGP (KTM)
  { driverId: 'yamanaka-r', teamId: 'carxpert-prustelgp', carNumber: 6 },
  { driverId: 'dupasquier', teamId: 'carxpert-prustelgp', carNumber: 50 },
  // SIC58 Squadra Corse (Honda)
  { driverId: 'fellon', teamId: 'sic58-squadra-corse', carNumber: 20 },
  { driverId: 'suzuki-t', teamId: 'sic58-squadra-corse', carNumber: 24 },
  // CIP Green Power (KTM)
  { driverId: 'toba', teamId: 'cip-green-power', carNumber: 27 },
  { driverId: 'kofler', teamId: 'cip-green-power', carNumber: 73 },
  // Indonesian Racing Gresini Moto3 (Honda)
  { driverId: 'rodrigo-g', teamId: 'indonesian-racing-gresini', carNumber: 95 },
  { driverId: 'alcoba', teamId: 'indonesian-racing-gresini', carNumber: 52 },
  // Honda Team Asia (Honda)
  { driverId: 'izdihar', teamId: 'honda-team-asia-moto3', carNumber: 92 },
  { driverId: 'kunii', teamId: 'honda-team-asia-moto3', carNumber: 32 },
]
