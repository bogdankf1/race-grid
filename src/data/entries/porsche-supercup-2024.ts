import type { EntryItem } from './types'

// Porsche Mobil 1 Supercup 2024 permanent entries
// Source: Wikipedia "2024 Porsche Supercup", racing.porsche.com
// Lists drivers who held the regular seat for most/all of the season.
// Round-by-round guest drivers (multiple per car) are not enumerated here.
export const porscheSupercupEntries2024: EntryItem[] = [
  // BWT Lechner Racing
  { driverId: 'harry-king', teamId: 'bwt-lechner-racing', carNumber: 1 },
  { driverId: 'robert-de-haan', teamId: 'bwt-lechner-racing', carNumber: 2 },
  { driverId: 'oeverhaus', teamId: 'bwt-lechner-racing', carNumber: 3 },
  // Dinamic Motorsport
  { driverId: 'festante', teamId: 'dinamic-motorsport', carNumber: 7 },
  { driverId: 'braschi', teamId: 'dinamic-motorsport', carNumber: 8 },
  { driverId: 'jaap-van-lagen', teamId: 'dinamic-motorsport', carNumber: 9 },
  // Schumacher CLRT
  { driverId: 'marvin-klein', teamId: 'schumacher-clrt', carNumber: 10 },
  { driverId: 'ghiretti', teamId: 'schumacher-clrt', carNumber: 11 },
  { driverId: 'ten-voorde', teamId: 'schumacher-clrt', carNumber: 12 },
  // Martinet by Alméras
  { driverId: 'jaubert-m', teamId: 'martinet-by-almeras', carNumber: 16 },
  { driverId: 'bernier-v', teamId: 'martinet-by-almeras', carNumber: 17 },
  // Ombra Racing
  { driverId: 'masters-k', teamId: 'ombra-racing', carNumber: 18 },
  { driverId: 'zendeli', teamId: 'ombra-racing', carNumber: 19 },
  // Universer by Team GP Elite
  { driverId: 'samer-shahin', teamId: 'gp-elite', carNumber: 22 },
  { driverId: 'van-eijndhoven', teamId: 'gp-elite', carNumber: 23 },
  { driverId: 'haverkort', teamId: 'gp-elite', carNumber: 24 },
  { driverId: 'levi-a', teamId: 'gp-elite', carNumber: 25 },
]
