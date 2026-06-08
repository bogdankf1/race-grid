import type { EntryItem } from './types'

// Moto2 2023 full-season entry list — 11 main teams with regular full-season riders
// Source: Wikipedia "2023 Moto2 World Championship", motogp.com entry list archive
// All teams use Triumph 765cc 3-cylinder engines; chassis: Boscoscuro (Speed Up) / Kalex (all others);
//   Forward continued with their own chassis. Bridgestone control tyres until 2024 — Dunlop in 2023.
// Champion: Pedro Acosta (Red Bull KTM Ajo) — sealed at Sepang (Round 18) with two rounds to spare
export const moto2Entries2023: EntryItem[] = [
  // Red Bull KTM Ajo (Kalex) — championship team
  { driverId: 'acosta', teamId: 'red-bull-ktm-ajo', carNumber: 37 },
  { driverId: 'arenas', teamId: 'red-bull-ktm-ajo', carNumber: 75 },
  // Elf Marc VDS Racing Team (Kalex)
  { driverId: 'arbolino', teamId: 'marc-vds-moto2', carNumber: 14 },
  { driverId: 'lowes', teamId: 'marc-vds-moto2', carNumber: 22 },
  // Fantic Racing (Kalex)
  { driverId: 'vietti', teamId: 'fantic-racing', carNumber: 13 },
  { driverId: 'gomez-b', teamId: 'fantic-racing', carNumber: 9 },
  // Idemitsu Honda Team Asia (Kalex)
  { driverId: 'chantra', teamId: 'honda-team-asia', carNumber: 35 },
  { driverId: 'ogura', teamId: 'honda-team-asia', carNumber: 79 },
  // Italtrans Racing Team (Kalex)
  { driverId: 'roberts-j', teamId: 'italtrans-racing', carNumber: 16 },
  { driverId: 'foggia', teamId: 'italtrans-racing', carNumber: 71 },
  // Liqui Moly Husqvarna Intact GP (Kalex)
  { driverId: 'tulovic', teamId: 'husqvarna-intact-gp', carNumber: 3 },
  { driverId: 'binder-d', teamId: 'husqvarna-intact-gp', carNumber: 15 },
  // Pons Wegow Los40 (Kalex)
  { driverId: 'garcia-s', teamId: 'pons-wegow-los40', carNumber: 11 },
  { driverId: 'canet', teamId: 'pons-wegow-los40', carNumber: 40 },
  // GasGas Aspar Team (Kalex)
  { driverId: 'guevara', teamId: 'aspar-moto2', carNumber: 28 },
  { driverId: 'dixon-j', teamId: 'aspar-moto2', carNumber: 96 },
  // QJmotor Gresini Moto2 (Kalex)
  { driverId: 'salac', teamId: 'qjmotor-gresini-moto2', carNumber: 12 },
  { driverId: 'alcoba', teamId: 'qjmotor-gresini-moto2', carNumber: 52 },
  // Correos Prepago Yamaha VR46 Team (Kalex)
  { driverId: 'nozane', teamId: 'correos-yamaha-vr46-moto2', carNumber: 5 },
  { driverId: 'gonzalez-m', teamId: 'correos-yamaha-vr46-moto2', carNumber: 18 },
  // Speed Up Racing / Beta Tools SpeedUp (Boscoscuro)
  { driverId: 'lopez-a', teamId: 'speed-up-racing', carNumber: 21 },
  { driverId: 'aldeguer', teamId: 'speed-up-racing', carNumber: 54 },
  // Pertamina Mandalika SAG Team (Kalex)
  { driverId: 'dalla-porta', teamId: 'pertamina-mandalika-sag', carNumber: 19 },
  { driverId: 'hada-t', teamId: 'pertamina-mandalika-sag', carNumber: 23 },
  // Forward Team (Forward chassis)
  { driverId: 'escrig', teamId: 'forward', carNumber: 17 },
  { driverId: 'ramirez-m', teamId: 'forward', carNumber: 24 },
  // American Racing (Kalex) — single full-season entry
  { driverId: 'skinner-r', teamId: 'american-racing-moto2', carNumber: 33 },
  // Fieten Olie Racing GP (Kalex)
  { driverId: 'baltus', teamId: 'fieten-olie-racing-gp', carNumber: 7 },
  { driverId: 'van-den-goorbergh', teamId: 'fieten-olie-racing-gp', carNumber: 84 },
]
