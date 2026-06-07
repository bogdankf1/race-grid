import type { EntryItem } from './types'

// Indy NXT by Firestone 2025 entry list — full-season cars across seven team entities
// Source: Wikipedia "2025 Indy NXT", feederseries.net/2025/02/25/indy-nxt-2025-season-guide,
// indynxt.com team rosters. Spec chassis: Dallara IL-15 (no constructors championship).
export const indyNxtEntries2025: EntryItem[] = [
  // Andretti Global
  { driverId: 'hauger', teamId: 'andretti-global', carNumber: 28 },
  { driverId: 'hughes-l', teamId: 'andretti-global', carNumber: 26 },
  { driverId: 'de-alba', teamId: 'andretti-global', carNumber: 27 },
  { driverId: 'roe', teamId: 'andretti-global', carNumber: 29 },
  // Andretti Cape (technical partnership with Cape Motorsports)
  { driverId: 'murray-s', teamId: 'andretti-cape', carNumber: 2 },
  { driverId: 'escotto', teamId: 'andretti-cape', carNumber: 3 },
  // HMD Motorsports
  { driverId: 'collet', teamId: 'hmd-motorsports', carNumber: 76 },
  { driverId: 'pierson', teamId: 'hmd-motorsports', carNumber: 14 },
  { driverId: 'smith-t', teamId: 'hmd-motorsports', carNumber: 16 },
  { driverId: 'allaer', teamId: 'hmd-motorsports', carNumber: 11 },
  { driverId: 'deegan-h', teamId: 'hmd-motorsports', carNumber: 38 },
  // Chip Ganassi Racing
  { driverId: 'koolen', teamId: 'chip-ganassi-racing', carNumber: 10 },
  { driverId: 'browne-j', teamId: 'chip-ganassi-racing', carNumber: 9 },
  // Abel Motorsports
  { driverId: 'hedge', teamId: 'abel-motorsports', carNumber: 17 },
  { driverId: 'missig', teamId: 'abel-motorsports', carNumber: 48 },
  // Abel with Force Indy (No. 99)
  { driverId: 'rowe', teamId: 'abel-force-indy', carNumber: 99 },
  // Abel with Miller Vinatieri Motorsports (No. 40)
  { driverId: 'miller-jw', teamId: 'abel-miller-vinatieri', carNumber: 40 },
]
