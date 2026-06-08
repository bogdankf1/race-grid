import type { EntryItem } from './types'

// F1 Academy 2024 entries — 15 permanent drivers across 5 teams (3 cars each).
// Inaugural season as an official F1 support series.
// Source: Wikipedia "2024 F1 Academy season", f1academy.com 2024 grid.
export const f1AcademyEntries2024: EntryItem[] = [
  // Rodin Motorsport (formerly Rodin Carlin in early 2024)
  { driverId: 'pulling', teamId: 'rodin-motorsport', carNumber: 9 },
  { driverId: 'edgar-j', teamId: 'rodin-motorsport', carNumber: 17 },
  { driverId: 'lovinfosse', teamId: 'rodin-motorsport', carNumber: 3 },
  // PREMA Racing
  { driverId: 'pin', teamId: 'prema-racing', carNumber: 28 },
  { driverId: 'weug', teamId: 'prema-racing', carNumber: 64 },
  { driverId: 'hausmann', teamId: 'prema-racing', carNumber: 19 },
  // Campos Racing
  { driverId: 'marti-n', teamId: 'campos-racing', carNumber: 30 },
  { driverId: 'chambers', teamId: 'campos-racing', carNumber: 14 },
  { driverId: 'schreiner', teamId: 'campos-racing', carNumber: 15 },
  // MP Motorsport
  { driverId: 'al-qubaisi-h', teamId: 'mp-motorsport', carNumber: 8 },
  { driverId: 'de-heus', teamId: 'mp-motorsport', carNumber: 7 },
  { driverId: 'al-qubaisi-a', teamId: 'mp-motorsport', carNumber: 88 },
  // ART Grand Prix
  { driverId: 'bustamante', teamId: 'art-grand-prix', carNumber: 16 },
  { driverId: 'block-l', teamId: 'art-grand-prix', carNumber: 57 },
  { driverId: 'nobels', teamId: 'art-grand-prix', carNumber: 22 },
]
