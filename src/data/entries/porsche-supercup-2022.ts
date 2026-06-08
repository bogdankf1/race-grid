import type { EntryItem } from './types'

// Porsche Mobil 1 Supercup 2022 permanent entries
// Source: Wikipedia "2022 Porsche Supercup", racing.porsche.com
// Lists drivers who held the regular seat for most/all of the season.
// Round-by-round guest drivers (multiple per car) are not enumerated here.
export const porscheSupercupEntries2022: EntryItem[] = [
  // BWT Lechner Racing
  { driverId: 'pereira', teamId: 'bwt-lechner-racing', carNumber: 1 },
  { driverId: 'harry-king', teamId: 'bwt-lechner-racing', carNumber: 2 },
  { driverId: 'buus', teamId: 'bwt-lechner-racing', carNumber: 3 },
  // Team GP Elite
  { driverId: 'ten-voorde', teamId: 'gp-elite', carNumber: 24 },
  { driverId: 'van-splunteren', teamId: 'gp-elite', carNumber: 25 },
  { driverId: 'van-kuijk-j', teamId: 'gp-elite', carNumber: 23 },
  // SSR Huber Racing
  { driverId: 'heinrich', teamId: 'ssr-huber-racing', carNumber: 27 },
  { driverId: 'ammermuller', teamId: 'ssr-huber-racing', carNumber: 26 },
  { driverId: 'freymuth', teamId: 'ssr-huber-racing', carNumber: 28 },
  // CLRT
  { driverId: 'marvin-klein', teamId: 'clrt', carNumber: 10 },
  { driverId: 'mateu', teamId: 'clrt', carNumber: 11 },
  // Martinet by Alméras
  { driverId: 'boccolacci', teamId: 'martinet-by-almeras', carNumber: 19 },
  { driverId: 'jaap-van-lagen', teamId: 'martinet-by-almeras', carNumber: 20 },
  { driverId: 'lindland', teamId: 'martinet-by-almeras', carNumber: 21 },
  // Ombra Racing
  { driverId: 'hartog', teamId: 'ombra-racing', carNumber: 18 },
  { driverId: 'quaresmini', teamId: 'ombra-racing', carNumber: 17 },
  // Fach Auto Tech
  { driverId: 'hanafin', teamId: 'fach-auto-tech', carNumber: 6 },
  // Dinamic Motorsport
  { driverId: 'iaquinta', teamId: 'dinamic-motorsport', carNumber: 16 },
  { driverId: 'sager', teamId: 'dinamic-motorsport', carNumber: 15 },
]
