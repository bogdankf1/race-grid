import type { EntryItem } from './types'

// F1 Academy 2026 entries — 17 permanent drivers across 6 teams + 3 round-specific wildcards
// Source: Wikipedia "2026 F1 Academy season", f1academy.com lineup announcements
// Format: 6 teams × 3 cars (with one team running 2 + 1 wildcard slot per round)
// Wildcards: Shi Wei (Round 1, Hitech), Autumn Fisher (Round 2, Hitech), Zoe Florescu (Round 4, Hitech)
export const f1AcademyEntries2026: EntryItem[] = [
  // MP Motorsport
  { driverId: 'gademan', teamId: 'mp-motorsport', carNumber: 3 },
  { driverId: 'hurup-larsen', teamId: 'mp-motorsport', carNumber: 12 },
  { driverId: 'kosterman', teamId: 'mp-motorsport', carNumber: 32 },
  // Campos Racing
  { driverId: 'bruce-m', teamId: 'campos-racing', carNumber: 4 },
  { driverId: 'ferreira-r', teamId: 'campos-racing', carNumber: 18 },
  { driverId: 'palmowski', teamId: 'campos-racing', carNumber: 21 },
  // Rodin Motorsport
  { driverId: 'felbermayr', teamId: 'rodin-motorsport', carNumber: 5 },
  { driverId: 'lloyd-e', teamId: 'rodin-motorsport', carNumber: 20 },
  { driverId: 'stevens-e', teamId: 'rodin-motorsport', carNumber: 28 },
  // PREMA Racing
  { driverId: 'paatz', teamId: 'prema-racing', carNumber: 8 },
  { driverId: 'westcott', teamId: 'prema-racing', carNumber: 9 },
  { driverId: 'granada', teamId: 'prema-racing', carNumber: 19 },
  // ART Grand Prix
  { driverId: 'billard', teamId: 'art-grand-prix', carNumber: 14 },
  { driverId: 'countryman', teamId: 'art-grand-prix', carNumber: 91 },
  { driverId: 'jacquet', teamId: 'art-grand-prix', carNumber: 95 },
  // Hitech Grand Prix
  { driverId: 'dobson', teamId: 'hitech', carNumber: 55 },
  { driverId: 'robertson-r', teamId: 'hitech', carNumber: 56 },
  // Wildcards (Hitech-run)
  { driverId: 'shi-wei', teamId: 'hitech' },
  { driverId: 'fisher-a', teamId: 'hitech' },
  { driverId: 'florescu', teamId: 'hitech' },
]
