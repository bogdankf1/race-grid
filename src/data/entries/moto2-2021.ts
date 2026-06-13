import type { EntryItem } from './types'

// Moto2 2021 full-season entry list — 11 main teams with regular full-season riders
// Source: Wikipedia "2021 Moto2 World Championship", motogp.com entry list archive
// All teams used Triumph 765cc 3-cylinder engines; chassis varied (Kalex / Boscoscuro / MV Agusta / NTS)
// Note: Only the canonical full-season pairings are listed. Mid-season substitutes (e.g. wildcards
//   and short-term injury fill-ins) are omitted to keep the list aligned with how 2024-2026 entries
//   files in this repo are structured.
// Champion: Remy Gardner (Red Bull KTM Ajo)
export const moto2Entries2021: EntryItem[] = [
  // Red Bull KTM Ajo (Kalex) — championship-winning team
  { driverId: 'gardner-r', teamId: 'red-bull-ktm-ajo', carNumber: 87 },
  { driverId: 'fernandez-r', teamId: 'red-bull-ktm-ajo', carNumber: 25 },
  // Elf Marc VDS Racing Team (Kalex)
  { driverId: 'lowes', teamId: 'marc-vds-moto2', carNumber: 22 },
  { driverId: 'fernandez-a', teamId: 'marc-vds-moto2', carNumber: 37 },
  // Sky Racing Team VR46 (Kalex)
  { driverId: 'bezzecchi', teamId: 'sky-vr46-moto2', carNumber: 72 },
  { driverId: 'vietti', teamId: 'sky-vr46-moto2', carNumber: 13 },
  // Inde Aspar Team (Boscoscuro)
  { driverId: 'canet', teamId: 'aspar-moto2', carNumber: 44 },
  { driverId: 'arenas', teamId: 'aspar-moto2', carNumber: 75 },
  // Federal Oil Gresini Moto2 (Kalex)
  { driverId: 'di-giannantonio', teamId: 'gresini-moto2', carNumber: 21 },
  { driverId: 'bulega', teamId: 'gresini-moto2', carNumber: 11 },
  // Flexbox HP40 (Kalex)
  { driverId: 'garzo', teamId: 'flexbox-hp40', carNumber: 40 },
  { driverId: 'manzi', teamId: 'flexbox-hp40', carNumber: 62 },
  // Liqui Moly Intact GP (Kalex)
  { driverId: 'arbolino', teamId: 'intact-gp', carNumber: 14 },
  { driverId: 'schrotter', teamId: 'intact-gp', carNumber: 23 },
  // Pertamina Mandalika SAG Team (Kalex)
  { driverId: 'luthi', teamId: 'pertamina-mandalika-sag', carNumber: 12 },
  { driverId: 'bendsneyder', teamId: 'pertamina-mandalika-sag', carNumber: 64 },
  // Petronas Sprinta Racing (Kalex)
  { driverId: 'dixon-j', teamId: 'petronas-sprinta', carNumber: 96 },
  { driverId: 'vierge', teamId: 'petronas-sprinta', carNumber: 97 },
  // Idemitsu Honda Team Asia (Kalex)
  { driverId: 'chantra', teamId: 'honda-team-asia', carNumber: 35 },
  { driverId: 'ogura', teamId: 'honda-team-asia', carNumber: 79 },
  // Italtrans Racing Team (Kalex)
  { driverId: 'roberts-j', teamId: 'italtrans-racing', carNumber: 16 },
  { driverId: 'dalla-porta', teamId: 'italtrans-racing', carNumber: 19 },
  // MB Conveyors Speed Up (Boscoscuro)
  { driverId: 'montella', teamId: 'speed-up-racing', carNumber: 5 },
  { driverId: 'navarro-j', teamId: 'speed-up-racing', carNumber: 9 },
  // American Racing (Kalex)
  { driverId: 'beaubier', teamId: 'american-racing-moto2', carNumber: 6 },
  { driverId: 'ramirez-m', teamId: 'american-racing-moto2', carNumber: 42 },
  // MV Agusta Forward Racing (MV Agusta)
  { driverId: 'baldassarri', teamId: 'mv-agusta-forward', carNumber: 7 },
  { driverId: 'cardelus', teamId: 'mv-agusta-forward', carNumber: 18 },
  // NTS RW Racing GP (NTS)
  { driverId: 'syahrin', teamId: 'rw-racing-moto2', carNumber: 55 },
  { driverId: 'baltus', teamId: 'rw-racing-moto2', carNumber: 70 },
]
