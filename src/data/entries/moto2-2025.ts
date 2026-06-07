import type { EntryItem } from './types'

// Moto2 2025 full-season entry list — 28 riders across 14 teams
// Source: Wikipedia "2025 Moto2 World Championship", motogp.com entry list, bikesportnews.com
// All teams use Triumph 765cc 3-cylinder engines and Pirelli control tyres
// Note: chassis mapping for 2025 — Boscoscuro: Pramac Yamaha, Marc VDS, QJMotor, SpeedRS;
//   Forward: Klint; Kalex: all others
export const moto2Entries2025: EntryItem[] = [
  // BLU CRU Pramac Yamaha Moto2 (Boscoscuro)
  { driverId: 'arbolino', teamId: 'pramac-yamaha-moto2', carNumber: 14 },
  { driverId: 'guevara', teamId: 'pramac-yamaha-moto2', carNumber: 28 },
  // Elf Marc VDS Racing Team (Boscoscuro)
  { driverId: 'salac', teamId: 'marc-vds-moto2', carNumber: 12 },
  { driverId: 'dixon-j', teamId: 'marc-vds-moto2', carNumber: 96 },
  // QJMOTOR - FRINSA - MSI (Boscoscuro)
  { driverId: 'ortola', teamId: 'qjmotor-msi', carNumber: 3 },
  { driverId: 'garcia-s', teamId: 'qjmotor-msi', carNumber: 66 },
  // Beta Tools SpeedRS Team (Boscoscuro)
  { driverId: 'vietti', teamId: 'speedrs-team', carNumber: 13 },
  { driverId: 'lopez-a', teamId: 'speedrs-team', carNumber: 21 },
  // Klint Racing Team (Forward)
  { driverId: 'navarro-j', teamId: 'klint-racing', carNumber: 9 },
  { driverId: 'escrig', teamId: 'klint-racing', carNumber: 11 },
  // CFMOTO Inde Aspar Team (Kalex)
  { driverId: 'holgado', teamId: 'aspar-moto2', carNumber: 27 },
  { driverId: 'alonso-d', teamId: 'aspar-moto2', carNumber: 80 },
  // Reds Fantic Racing (Kalex)
  { driverId: 'baltus', teamId: 'fantic-racing', carNumber: 7 },
  { driverId: 'canet', teamId: 'fantic-racing', carNumber: 44 },
  // Idemitsu Honda Team Asia (Kalex)
  { driverId: 'aji', teamId: 'honda-team-asia', carNumber: 64 },
  { driverId: 'kunii', teamId: 'honda-team-asia', carNumber: 92 },
  // Italjet Gresini Moto2 (Kalex)
  { driverId: 'binder-d', teamId: 'gresini-moto2', carNumber: 15 },
  { driverId: 'arenas', teamId: 'gresini-moto2', carNumber: 75 },
  // Italtrans Racing Team (Kalex)
  { driverId: 'moreira', teamId: 'italtrans-racing', carNumber: 10 },
  { driverId: 'huertas', teamId: 'italtrans-racing', carNumber: 99 },
  // Liqui Moly Dynavolt Intact GP (Kalex)
  { driverId: 'gonzalez-m', teamId: 'intact-gp', carNumber: 18 },
  { driverId: 'agius', teamId: 'intact-gp', carNumber: 81 },
  // OnlyFans American Racing Team (Kalex)
  { driverId: 'roberts-j', teamId: 'american-racing-moto2', carNumber: 16 },
  { driverId: 'ramirez-m', teamId: 'american-racing-moto2', carNumber: 24 },
  // Red Bull KTM Ajo (Kalex)
  { driverId: 'oncu', teamId: 'red-bull-ktm-ajo', carNumber: 53 },
  { driverId: 'veijer', teamId: 'red-bull-ktm-ajo', carNumber: 95 },
  // Momoven Idrofoglia RW Racing Team (Kalex)
  { driverId: 'sasaki-a', teamId: 'rw-racing-moto2', carNumber: 71 },
  { driverId: 'van-den-goorbergh', teamId: 'rw-racing-moto2', carNumber: 84 },
]
