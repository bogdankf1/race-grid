import type { EntryItem } from './types'

// F1 Academy 2023 entries — 15 permanent drivers across 5 teams (3 cars each).
// Inaugural season of the F1 Academy championship.
// Source: Wikipedia "2023 F1 Academy season", f1academy.com 2023 grid.
//
// Team note: Rodin Carlin was the 2023 entrant name (the Carlin operation
// rebranded to Rodin Motorsport for 2024). The `rodin-carlin` team id is
// distinct from `rodin-motorsport` (used 2024+) to preserve historical
// accuracy.
export const f1AcademyEntries2023: EntryItem[] = [
  // Campos Racing
  { driverId: 'marti-n', teamId: 'campos-racing', carNumber: 1 },
  { driverId: 'lovinfosse', teamId: 'campos-racing', carNumber: 2 },
  { driverId: 'caceres', teamId: 'campos-racing', carNumber: 3 },
  // MP Motorsport
  { driverId: 'al-qubaisi-h', teamId: 'mp-motorsport', carNumber: 4 },
  { driverId: 'de-heus', teamId: 'mp-motorsport', carNumber: 5 },
  { driverId: 'al-qubaisi-a', teamId: 'mp-motorsport', carNumber: 6 },
  // ART Grand Prix
  { driverId: 'buhler-l', teamId: 'art-grand-prix', carNumber: 7 },
  { driverId: 'schreiner', teamId: 'art-grand-prix', carNumber: 8 },
  { driverId: 'grant-c', teamId: 'art-grand-prix', carNumber: 9 },
  // Rodin Carlin
  { driverId: 'pulling', teamId: 'rodin-carlin', carNumber: 10 },
  { driverId: 'edgar-j', teamId: 'rodin-carlin', carNumber: 11 },
  { driverId: 'gilkes', teamId: 'rodin-carlin', carNumber: 12 },
  // PREMA Racing
  { driverId: 'chong', teamId: 'prema-racing', carNumber: 14 },
  { driverId: 'garcia-marta', teamId: 'prema-racing', carNumber: 15 },
  { driverId: 'bustamante', teamId: 'prema-racing', carNumber: 16 },
]
