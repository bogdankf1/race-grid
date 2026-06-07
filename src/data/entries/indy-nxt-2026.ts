import type { EntryItem } from './types'

// Indy NXT by Firestone 2026 full-season entry list — 24 drivers across 8 teams
// Source: Wikipedia "2026 Indy NXT", feederseries.net/2026/02/24/indy-nxt-2026-season-guide/, indynxt.com/Drivers
// Spec chassis: Dallara IL-15 (no constructors championship)
export const indyNxtEntries2026: EntryItem[] = [
  // Andretti Global
  { driverId: 'hughes-l', teamId: 'andretti-global', carNumber: 26 },
  { driverId: 'murray-s', teamId: 'andretti-global', carNumber: 27 },
  { driverId: 'm-taylor', teamId: 'andretti-global', carNumber: 28 },
  { driverId: 'pierson', teamId: 'andretti-global', carNumber: 29 },
  // HMD Motorsports
  { driverId: 'de-alba', teamId: 'hmd-motorsports', carNumber: 17 },
  { driverId: 'j-beeton', teamId: 'hmd-motorsports', carNumber: 45 },
  { driverId: 'e-fittipaldi', teamId: 'hmd-motorsports', carNumber: 67 },
  { driverId: 'kucharczyk', teamId: 'hmd-motorsports', carNumber: 71 },
  // Abel Motorsports
  { driverId: 'garcia-m', teamId: 'abel-motorsports', carNumber: 12 },
  { driverId: 'missig', teamId: 'abel-motorsports', carNumber: 48 },
  { driverId: 'kaminsky-c', teamId: 'abel-motorsports', carNumber: 57 },
  { driverId: 'rowe', teamId: 'abel-motorsports', carNumber: 99 },
  // Chip Ganassi Racing
  { driverId: 'roe', teamId: 'chip-ganassi-racing', carNumber: 8 },
  { driverId: 'b-aron', teamId: 'chip-ganassi-racing', carNumber: 9 },
  { driverId: 'koolen', teamId: 'chip-ganassi-racing', carNumber: 10 },
  { driverId: 'etter', teamId: 'chip-ganassi-racing', carNumber: 11 },
  // Cape Motorsports (with Ed Carpenter Racing)
  { driverId: 'nannini', teamId: 'cape-motorsports', carNumber: 20 },
  { driverId: 'nikita-johnson', teamId: 'cape-motorsports', carNumber: 21 },
  // A.J. Foyt Enterprises
  { driverId: 'monteiro-n', teamId: 'a-j-foyt-enterprises', carNumber: 4 },
  { driverId: 'de-tullio', teamId: 'a-j-foyt-enterprises', carNumber: 14 },
  // Cusick Morgan Motorsports
  { driverId: 'stati', teamId: 'cusick-morgan-motorsports', carNumber: 15 },
  { driverId: 'correa', teamId: 'cusick-morgan-motorsports', carNumber: 68 },
  // Juncos Hollinger Racing
  { driverId: 'escotto', teamId: 'juncos-hollinger', carNumber: 76 },
  { driverId: 'koreiba', teamId: 'juncos-hollinger', carNumber: 75 },
]
