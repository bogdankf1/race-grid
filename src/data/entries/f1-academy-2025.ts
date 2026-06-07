import type { EntryItem } from './types'

// F1 Academy 2025 entries — 18 permanent drivers across 6 teams (3 cars each)
// Source: Wikipedia "2025 F1 Academy season", f1academy.com 2025 grid
export const f1AcademyEntries2025: EntryItem[] = [
  // PREMA Racing
  { driverId: 'pin', teamId: 'prema-racing', carNumber: 28 },
  { driverId: 'gademan', teamId: 'prema-racing', carNumber: 3 },
  { driverId: 'hausmann', teamId: 'prema-racing', carNumber: 78 },
  // Campos Racing
  { driverId: 'chambers', teamId: 'campos-racing', carNumber: 14 },
  { driverId: 'palmowski', teamId: 'campos-racing', carNumber: 21 },
  { driverId: 'ferreira-r', teamId: 'campos-racing', carNumber: 18 },
  // MP Motorsport
  { driverId: 'weug', teamId: 'mp-motorsport', carNumber: 64 },
  { driverId: 'hurup-larsen', teamId: 'mp-motorsport', carNumber: 12 },
  { driverId: 'ciconte', teamId: 'mp-motorsport', carNumber: 25 },
  // Rodin Motorsport
  { driverId: 'felbermayr', teamId: 'rodin-motorsport', carNumber: 5 },
  { driverId: 'lloyd-e', teamId: 'rodin-motorsport', carNumber: 20 },
  { driverId: 'chong', teamId: 'rodin-motorsport', carNumber: 27 },
  // ART Grand Prix
  { driverId: 'crone', teamId: 'art-grand-prix', carNumber: 7 },
  { driverId: 'nobels', teamId: 'art-grand-prix', carNumber: 22 },
  { driverId: 'block-l', teamId: 'art-grand-prix', carNumber: 57 },
  // Hitech TGR
  { driverId: 'havrda', teamId: 'hitech', carNumber: 2 },
  { driverId: 'anagnostiadis', teamId: 'hitech', carNumber: 11 },
  { driverId: 'bruce-m', teamId: 'hitech', carNumber: 9 },
]
