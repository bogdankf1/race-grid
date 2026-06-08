import type { EntryItem } from './types'

// Moto2 2022 full-season entry list — 11 main teams with 22 full-season riders
// Source: Wikipedia "2022 Moto2 World Championship", motogp.com entry list archive
// All teams used Triumph 765cc 3-cylinder engines; chassis: Boscoscuro (Speed Up only) /
//   MV Agusta (Forward only) / Kalex (all others)
// Champion: Augusto Fernández (Red Bull KTM Ajo)
export const moto2Entries2022: EntryItem[] = [
  // Red Bull KTM Ajo (Kalex) — championship team
  { driverId: 'fernandez-a', teamId: 'red-bull-ktm-ajo', carNumber: 37 },
  { driverId: 'acosta', teamId: 'red-bull-ktm-ajo', carNumber: 51 },
  // Elf Marc VDS Racing Team (Kalex)
  { driverId: 'arbolino', teamId: 'marc-vds-moto2', carNumber: 14 },
  { driverId: 'lowes', teamId: 'marc-vds-moto2', carNumber: 22 },
  // Mooney VR46 Racing Team (Kalex)
  { driverId: 'vietti', teamId: 'mooney-vr46-moto2', carNumber: 13 },
  { driverId: 'antonelli-n', teamId: 'mooney-vr46-moto2', carNumber: 28 },
  // Idemitsu Honda Team Asia (Kalex)
  { driverId: 'chantra', teamId: 'honda-team-asia', carNumber: 35 },
  { driverId: 'ogura', teamId: 'honda-team-asia', carNumber: 79 },
  // Italtrans Racing Team (Kalex)
  { driverId: 'roberts-j', teamId: 'italtrans-racing', carNumber: 16 },
  { driverId: 'dalla-porta', teamId: 'italtrans-racing', carNumber: 19 },
  // Liqui Moly Intact GP (Kalex)
  { driverId: 'schrotter', teamId: 'intact-gp', carNumber: 23 },
  { driverId: 'alcoba', teamId: 'intact-gp', carNumber: 52 },
  // Flexbox HP40 (Kalex)
  { driverId: 'navarro-j', teamId: 'flexbox-hp40', carNumber: 9 },
  { driverId: 'canet', teamId: 'flexbox-hp40', carNumber: 40 },
  // GasGas Aspar Team (Kalex)
  { driverId: 'arenas', teamId: 'aspar-moto2', carNumber: 75 },
  { driverId: 'dixon-j', teamId: 'aspar-moto2', carNumber: 96 },
  // Gresini Racing Moto2 (Kalex)
  { driverId: 'salac', teamId: 'gresini-moto2', carNumber: 12 },
  { driverId: 'zaccone', teamId: 'gresini-moto2', carNumber: 61 },
  // American Racing (Kalex)
  { driverId: 'kelly-sd', teamId: 'american-racing-moto2', carNumber: 4 },
  { driverId: 'beaubier', teamId: 'american-racing-moto2', carNumber: 6 },
  // Speed Up Racing / Beta Tools Speed Up (Boscoscuro)
  // Romano Fenati raced rounds 1-6 (#5), replaced by Alonso López from Round 7 (#21)
  { driverId: 'fenati', teamId: 'speed-up-racing', carNumber: 5 },
  { driverId: 'lopez-a', teamId: 'speed-up-racing', carNumber: 21 },
  { driverId: 'aldeguer', teamId: 'speed-up-racing', carNumber: 54 },
  // Pertamina Mandalika SAG Team (Kalex)
  { driverId: 'rodrigo-g', teamId: 'pertamina-mandalika-sag', carNumber: 2 },
  { driverId: 'bendsneyder', teamId: 'pertamina-mandalika-sag', carNumber: 64 },
  // RW Racing GP (Kalex)
  { driverId: 'baltus', teamId: 'rw-racing-moto2', carNumber: 7 },
  { driverId: 'van-den-goorbergh', teamId: 'rw-racing-moto2', carNumber: 84 },
  // Yamaha VR46 Master Camp Team (Kalex)
  { driverId: 'gonzalez-m', teamId: 'yamaha-vr46-master-camp-moto2', carNumber: 18 },
  { driverId: 'kubo', teamId: 'yamaha-vr46-master-camp-moto2', carNumber: 81 },
  // MV Agusta Forward Racing (MV Agusta)
  { driverId: 'corsi', teamId: 'mv-agusta-forward', carNumber: 24 },
  { driverId: 'ramirez-m', teamId: 'mv-agusta-forward', carNumber: 42 },
]
