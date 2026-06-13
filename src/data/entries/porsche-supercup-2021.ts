import type { EntryItem } from './types'

// Porsche Mobil 1 Supercup 2021 permanent entries
// Source: Wikipedia "2021 Porsche Supercup", racing.porsche.com
// Lists drivers who held the regular seat for most/all of the season.
// Round-by-round guest drivers (multiple per car) are not enumerated here.
export const porscheSupercupEntries2021: EntryItem[] = [
  // BWT Lechner Racing
  { driverId: 'pereira', teamId: 'bwt-lechner-racing', carNumber: 3 },
  { driverId: 'guven', teamId: 'bwt-lechner-racing', carNumber: 2 },
  { driverId: 'simmenauer', teamId: 'bwt-lechner-racing', carNumber: 4 },
  // Team GP Elite
  { driverId: 'ten-voorde', teamId: 'gp-elite', carNumber: 25 },
  { driverId: 'van-splunteren', teamId: 'gp-elite', carNumber: 24 },
  { driverId: 'van-kuijk-j', teamId: 'gp-elite', carNumber: 23 },
  // Martinet by Alméras
  { driverId: 'evans-j', teamId: 'martinet-by-almeras', carNumber: 20 },
  { driverId: 'boccolacci', teamId: 'martinet-by-almeras', carNumber: 19 },
  // Nebulus Racing by Huber
  { driverId: 'heinrich', teamId: 'nebulus-racing-huber', carNumber: 29 },
  { driverId: 'kohler', teamId: 'nebulus-racing-huber', carNumber: 28 },
  { driverId: 'lindland', teamId: 'nebulus-racing-huber', carNumber: 30 },
  // CLRT
  { driverId: 'latorre-f', teamId: 'clrt', carNumber: 11 },
  { driverId: 'palette', teamId: 'clrt', carNumber: 10 },
  // Dinamic Motorsport
  { driverId: 'iaquinta', teamId: 'dinamic-motorsport', carNumber: 16 },
  { driverId: 'sager', teamId: 'dinamic-motorsport', carNumber: 15 },
  // Fach Auto Tech
  { driverId: 'zoechling', teamId: 'fach-auto-tech', carNumber: 6 },
  { driverId: 'ellinas', teamId: 'fach-auto-tech', carNumber: 7 },
  // momo-megatron Lechner Racing (guest team in 2021 — minor entries omitted)
]
