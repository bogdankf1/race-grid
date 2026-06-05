import type { EntryItem } from './types'

// Intercontinental GT Challenge 2026 — key manufacturer entries
// All entries tagged as 'Overall' (primary IGTC class). Independent Cup is a sub-classification
// scored separately for FIA Bronze-graded drivers within the same races.
export const igtcEntries2026: EntryItem[] = [
  // BMW — Rowe Racing
  { driverId: 'farfus', teamId: 'rowe-racing', class: 'Overall' },
  { driverId: 'marciello', teamId: 'rowe-racing', class: 'Overall' },
  { driverId: 'pepper', teamId: 'rowe-racing', class: 'Overall' },
  { driverId: 'k-van-der-linde', teamId: 'rowe-racing', class: 'Overall' },
  { driverId: 'dan-harper', teamId: 'rowe-racing', class: 'Overall' },
  { driverId: 'hesse-m', teamId: 'rowe-racing', class: 'Overall' },
  { driverId: 'vanthoor', teamId: 'rowe-racing', class: 'Overall' },
  { driverId: 's-van-der-linde', teamId: 'rowe-racing', class: 'Overall' },
  // BMW — Schubert Motorsport
  { driverId: 'eng', teamId: 'schubert-motorsport', class: 'Overall' },
  { driverId: 'frijns', teamId: 'schubert-motorsport', class: 'Overall' },
  { driverId: 'weerts', teamId: 'schubert-motorsport', class: 'Overall' },
  { driverId: 'wittmann', teamId: 'schubert-motorsport', class: 'Overall' },
  // BMW — Team WRT
  { driverId: 'rossi', teamId: 'team-wrt', class: 'Overall' },
  // Mercedes-AMG — Team Verstappen Racing
  { driverId: 'verstappen', teamId: 'mercedes-amg-team-verstappen', class: 'Overall' },
  { driverId: 'gounon', teamId: 'mercedes-amg-team-verstappen', class: 'Overall' },
  { driverId: 'juncadella', teamId: 'mercedes-amg-team-verstappen', class: 'Overall' },
  { driverId: 'auer', teamId: 'mercedes-amg-team-verstappen', class: 'Overall' },
  // Mercedes-AMG — GetSpeed
  { driverId: 'engel', teamId: 'getspeed', class: 'Overall' },
  { driverId: 'martin', teamId: 'getspeed', class: 'Overall' },
  { driverId: 'schiller', teamId: 'getspeed', class: 'Overall' },
  { driverId: 'stolz', teamId: 'getspeed', class: 'Overall' },
  // Ferrari — Arise Racing GT
  { driverId: 'evans-j', teamId: 'arise-racing-gt', class: 'Overall' },
  { driverId: 'rigon', teamId: 'arise-racing-gt', class: 'Overall' },
  // Porsche — Absolute Racing
  { driverId: 'buus', teamId: 'absolute-racing', class: 'Overall' },
  { driverId: 'campbell', teamId: 'absolute-racing', class: 'Overall' },
  { driverId: 'picariello', teamId: 'absolute-racing', class: 'Overall' },
  // Porsche — Manthey
  { driverId: 'estre', teamId: 'manthey', class: 'Overall' },
  { driverId: 'guven', teamId: 'manthey', class: 'Overall' },
  { driverId: 'preining', teamId: 'manthey', class: 'Overall' },
  // Ford — HRT Ford Racing
  { driverId: 'feeney', teamId: 'hrt-ford', class: 'Overall' },
  { driverId: 'mies', teamId: 'hrt-ford', class: 'Overall' },
  { driverId: 'olsen', teamId: 'hrt-ford', class: 'Overall' },
]
