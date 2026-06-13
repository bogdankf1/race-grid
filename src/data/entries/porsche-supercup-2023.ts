import type { EntryItem } from './types'

// Porsche Mobil 1 Supercup 2023 permanent entries
// Source: Wikipedia "2023 Porsche Supercup", racing.porsche.com
// Lists drivers who held the regular seat for most/all of the season.
// Round-by-round guest drivers (multiple per car) are not enumerated here.
export const porscheSupercupEntries2023: EntryItem[] = [
  // BWT Lechner Racing
  { driverId: 'buus', teamId: 'bwt-lechner-racing', carNumber: 1 },
  { driverId: 'harri-jones', teamId: 'bwt-lechner-racing', carNumber: 2 },
  { driverId: 'harry-king', teamId: 'bwt-lechner-racing', carNumber: 3 },
  // Fach Auto Tech
  { driverId: 'schuring', teamId: 'fach-auto-tech', carNumber: 4 },
  { driverId: 'alexander-fach', teamId: 'fach-auto-tech', carNumber: 5 },
  { driverId: 'burton-g', teamId: 'fach-auto-tech', carNumber: 6 },
  // Huber Racing
  { driverId: 'kohler', teamId: 'huber-racing', carNumber: 7 },
  { driverId: 'iaquinta', teamId: 'huber-racing', carNumber: 8 },
  // Team Huber Racing
  { driverId: 'jorge-lorenzo', teamId: 'huber-racing', carNumber: 9 },
  { driverId: 'otero', teamId: 'huber-racing', carNumber: 10 },
  // CLRT
  { driverId: 'boccolacci', teamId: 'clrt', carNumber: 11 },
  { driverId: 'paque', teamId: 'clrt', carNumber: 12 },
  { driverId: 'verhagen-m', teamId: 'clrt', carNumber: 13 },
  // Dinamic GT
  { driverId: 'jaap-van-lagen', teamId: 'dinamic-gt', carNumber: 14 },
  { driverId: 'amati', teamId: 'dinamic-gt', carNumber: 15 },
  { driverId: 'quaresmini', teamId: 'dinamic-gt', carNumber: 16 },
  // Ombra Racing
  { driverId: 'vukov', teamId: 'ombra-racing', carNumber: 17 },
  { driverId: 'masters-k', teamId: 'ombra-racing', carNumber: 18 },
  { driverId: 'pera-r', teamId: 'ombra-racing', carNumber: 19 },
  // Martinet by Alméras
  { driverId: 'lindland', teamId: 'martinet-by-almeras', carNumber: 20 },
  { driverId: 'baltas', teamId: 'martinet-by-almeras', carNumber: 21 },
  { driverId: 'ghiretti', teamId: 'martinet-by-almeras', carNumber: 22 },
  { driverId: 'honkavuori', teamId: 'martinet-by-almeras', carNumber: 23 },
  // Team GP Elite
  { driverId: 'hartog', teamId: 'gp-elite', carNumber: 24 },
  { driverId: 'ten-voorde', teamId: 'gp-elite', carNumber: 25 },
  { driverId: 'groeneveld', teamId: 'gp-elite', carNumber: 26 },
  // GP Elite (separate satellite entry)
  { driverId: 'cordeel-g', teamId: 'gp-elite', carNumber: 27 },
  { driverId: 'van-eijndhoven', teamId: 'gp-elite', carNumber: 28 },
]
