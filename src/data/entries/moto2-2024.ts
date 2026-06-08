import type { EntryItem } from './types'

// Moto2 2024 full-season entry list — 30+ riders across 15 teams over the season
// Source: Wikipedia "2024 Moto2 World Championship", motogp.com entry list
// All teams use Triumph 765cc 3-cylinder engines and Pirelli control tyres
// Chassis mapping for 2024 — Boscoscuro: MT Helmets MSi, Sync SpeedUp;
//   Forward: Klint Forward Factory Team; Kalex: all others
// Note: Several teams used substitutes / wildcards mid-season; listed only the full-season regulars
//   (and the main partial-season subs who scored points).
export const moto2Entries2024: EntryItem[] = [
  // MT Helmets - MSi (Boscoscuro) — Ai Ogura's championship team
  { driverId: 'garcia-s', teamId: 'mt-helmets-msi-moto2', carNumber: 3 },
  { driverId: 'ogura', teamId: 'mt-helmets-msi-moto2', carNumber: 79 },
  // Sync SpeedUp Racing (Boscoscuro)
  { driverId: 'lopez-a', teamId: 'speed-up-racing', carNumber: 21 },
  { driverId: 'aldeguer', teamId: 'speed-up-racing', carNumber: 54 },
  // Klint Forward Factory Team (Forward)
  { driverId: 'escrig', teamId: 'klint-forward-factory', carNumber: 11 },
  { driverId: 'artigas', teamId: 'klint-forward-factory', carNumber: 43 },
  // CFMoto Inde Aspar Team (Kalex)
  { driverId: 'guevara', teamId: 'aspar-moto2', carNumber: 28 },
  { driverId: 'dixon-j', teamId: 'aspar-moto2', carNumber: 96 },
  // Elf Marc VDS Racing Team (Kalex)
  { driverId: 'salac', teamId: 'marc-vds-moto2', carNumber: 12 },
  { driverId: 'arbolino', teamId: 'marc-vds-moto2', carNumber: 14 },
  // Fantic Racing (Kalex)
  { driverId: 'cardelus', teamId: 'fantic-racing', carNumber: 20 },
  { driverId: 'canet', teamId: 'fantic-racing', carNumber: 44 },
  // Idemitsu Honda Team Asia (Kalex)
  { driverId: 'aji', teamId: 'honda-team-asia', carNumber: 34 },
  { driverId: 'chantra', teamId: 'honda-team-asia', carNumber: 35 },
  // Italtrans Racing Team (Kalex)
  { driverId: 'moreira', teamId: 'italtrans-racing', carNumber: 10 },
  { driverId: 'foggia', teamId: 'italtrans-racing', carNumber: 71 },
  // Liqui Moly Husqvarna Intact GP (Kalex)
  { driverId: 'binder-d', teamId: 'husqvarna-intact-gp', carNumber: 15 },
  { driverId: 'agius', teamId: 'husqvarna-intact-gp', carNumber: 81 },
  // OnlyFans American Racing Team (Kalex)
  { driverId: 'roberts-j', teamId: 'american-racing-moto2', carNumber: 16 },
  { driverId: 'ramirez-m', teamId: 'american-racing-moto2', carNumber: 24 },
  // Pertamina Mandalika Gas Up Team (Kalex)
  { driverId: 'masia', teamId: 'mandalika-gas-up', carNumber: 5 },
  { driverId: 'bendsneyder', teamId: 'mandalika-gas-up', carNumber: 64 },
  // QJmotor Gresini Moto2 (Kalex)
  { driverId: 'gonzalez-m', teamId: 'qjmotor-gresini-moto2', carNumber: 18 },
  { driverId: 'arenas', teamId: 'qjmotor-gresini-moto2', carNumber: 75 },
  // Red Bull KTM Ajo (Kalex)
  { driverId: 'vietti', teamId: 'red-bull-ktm-ajo', carNumber: 13 },
  { driverId: 'oncu', teamId: 'red-bull-ktm-ajo', carNumber: 53 },
  // RW-Idrofoglia Racing GP (Kalex)
  { driverId: 'baltus', teamId: 'rw-racing-moto2', carNumber: 7 },
  { driverId: 'van-den-goorbergh', teamId: 'rw-racing-moto2', carNumber: 84 },
  // Yamaha VR46 Master Camp Team (Kalex)
  { driverId: 'sasaki-a', teamId: 'yamaha-vr46-master-camp-moto2', carNumber: 22 },
  { driverId: 'alcoba', teamId: 'yamaha-vr46-master-camp-moto2', carNumber: 52 },
]
