import type { EntryItem } from './types'

// Indy Lights presented by Cooper Tires 2022 entry list — first season under
// IndyCar/Penske Entertainment ownership (rebranded to Indy NXT for 2023).
// Source: Wikipedia "2022 Indy Lights", indylights.com archives, motorsport.com/indylights/season/2022.
// Verified 2026-06-07. Spec chassis: Dallara IL-15.
export const indyNxtEntries2022: EntryItem[] = [
  // Andretti Autosport
  { driverId: 'robb', teamId: 'andretti-autosport', carNumber: 2 },
  { driverId: 'mcelrea', teamId: 'andretti-autosport', carNumber: 27 },
  { driverId: 'rasmussen', teamId: 'andretti-autosport', carNumber: 28 },
  { driverId: 'brabham-m', teamId: 'andretti-autosport', carNumber: 83 },
  // HMD Motorsports with Dale Coyne Racing
  { driverId: 'bogle', teamId: 'hmd-dale-coyne', carNumber: 7 },
  { driverId: 'serravalle', teamId: 'hmd-dale-coyne', carNumber: 11 },
  { driverId: 'roe', teamId: 'hmd-dale-coyne', carNumber: 11 },
  { driverId: 'siegel', teamId: 'hmd-dale-coyne', carNumber: 11 },
  { driverId: 'simpson', teamId: 'hmd-dale-coyne', carNumber: 21 },
  { driverId: 'lundqvist', teamId: 'hmd-dale-coyne', carNumber: 26 },
  { driverId: 'frost', teamId: 'hmd-dale-coyne', carNumber: 68 },
  // Global Racing Group with HMD Motorsports
  { driverId: 'pedersen-b', teamId: 'global-racing-group', carNumber: 24 },
  // Abel Motorsports
  { driverId: 'serravalle', teamId: 'abel-motorsports', carNumber: 11 },
  { driverId: 'lazier', teamId: 'abel-motorsports', carNumber: 15 },
  { driverId: 'abel', teamId: 'abel-motorsports', carNumber: 51 },
  { driverId: 'phinny', teamId: 'abel-motorsports', carNumber: 61 },
  // Force Indy
  { driverId: 'francis-jr', teamId: 'force-indy', carNumber: 99 },
  // TJ Speed Motorsports
  { driverId: 'roe', teamId: 'tj-speed', carNumber: 12 },
  { driverId: 'simpson', teamId: 'tj-speed', carNumber: 21 },
]
