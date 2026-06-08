import type { EntryItem } from './types'

// Indy NXT by Firestone 2024 entry list — full and part-season cars across the season
// Source: Wikipedia "2024 Indy NXT", indynxt.com team rosters, feederseries.net/2024/03/05/indy-nxt-2024-season-guide.
// Verified 2026-06-07. Spec chassis: Dallara IL-15 (no constructors championship — but a team championship is awarded).
export const indyNxtEntries2024: EntryItem[] = [
  // Andretti Global
  { driverId: 'foster', teamId: 'andretti-global', carNumber: 26 },
  { driverId: 'b-aron', teamId: 'andretti-global', carNumber: 27 },
  { driverId: 'chadwick', teamId: 'andretti-global', carNumber: 28 },
  { driverId: 'roe', teamId: 'andretti-global', carNumber: 29 },
  // Andretti Cape Indy NXT (technical partnership with Cape Motorsports)
  { driverId: 'de-alba', teamId: 'andretti-cape', carNumber: 2 },
  { driverId: 'd-orlando', teamId: 'andretti-cape', carNumber: 3 },
  // Abel Motorsports
  { driverId: 'mason-j', teamId: 'abel-motorsports', carNumber: 21 },
  { driverId: 'missig', teamId: 'abel-motorsports', carNumber: 21 },
  { driverId: 'sundaramoorthy', teamId: 'abel-motorsports', carNumber: 22 },
  { driverId: 'abel', teamId: 'abel-motorsports', carNumber: 51 },
  { driverId: 'ferns', teamId: 'abel-motorsports', carNumber: 55 },
  // HMD Motorsports
  { driverId: 'bogle', teamId: 'hmd-motorsports', carNumber: 7 },
  { driverId: 'gold-r', teamId: 'hmd-motorsports', carNumber: 10 },
  { driverId: 'siegel', teamId: 'hmd-motorsports', carNumber: 11 },
  { driverId: 'pierson', teamId: 'hmd-motorsports', carNumber: 14 },
  { driverId: 'hedge', teamId: 'hmd-motorsports', carNumber: 17 },
  { driverId: 'collet', teamId: 'hmd-motorsports', carNumber: 18 },
  { driverId: 'browne-j', teamId: 'hmd-motorsports', carNumber: 23 },
  { driverId: 'koolen', teamId: 'hmd-motorsports', carNumber: 33 },
  { driverId: 'jones-jg', teamId: 'hmd-motorsports', carNumber: 33 },
  { driverId: 'porto', teamId: 'hmd-motorsports', carNumber: 39 },
  { driverId: 'brooks-c', teamId: 'hmd-motorsports', carNumber: 39 },
  // HMD Motorsports with Force Indy
  { driverId: 'rowe', teamId: 'hmd-force-indy', carNumber: 99 },
  // Juncos Hollinger Racing
  { driverId: 'escotto', teamId: 'juncos-hollinger', carNumber: 75 },
  { driverId: 'brewer', teamId: 'juncos-hollinger', carNumber: 76 },
  // Miller Vinatieri Racing
  { driverId: 'miller-jw', teamId: 'miller-vinatieri-racing', carNumber: 40 },
]
