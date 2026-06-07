import type { EntryItem } from './types'

// Porsche Mobil 1 Supercup 2026 entries — 28 permanent entries + 1 guest (Villeneuve, #911)
// Source: Wikipedia "2026 Porsche Supercup", racing.porsche.com, newsroom.porsche.com
// Guest drivers per round are not included (entries list focuses on permanent + announced guests).
export const porscheSupercupEntries2026: EntryItem[] = [
  // BWT Lechner Racing
  { driverId: 'robert-de-haan', teamId: 'bwt-lechner-racing', carNumber: 1 },
  { driverId: 'amand', teamId: 'bwt-lechner-racing', carNumber: 2 },
  { driverId: 'sumich', teamId: 'bwt-lechner-racing', carNumber: 3 },
  // Proton Competition
  { driverId: 'masters-k', teamId: 'proton-competition', carNumber: 4 },
  { driverId: 'pfister-k', teamId: 'proton-competition', carNumber: 5 },
  { driverId: 'younessi', teamId: 'proton-competition', carNumber: 6 },
  // Dinamic Motorsport
  { driverId: 'bristot', teamId: 'dinamic-motorsport', carNumber: 7 },
  { driverId: 'mezzetti', teamId: 'dinamic-motorsport', carNumber: 8 },
  { driverId: 'pisani-e', teamId: 'dinamic-motorsport', carNumber: 9 },
  // Schumacher CLRT
  { driverId: 'kieffer', teamId: 'schumacher-clrt', carNumber: 11 },
  { driverId: 'flynt-schuring', teamId: 'schumacher-clrt', carNumber: 12 },
  // RGB Racing
  { driverId: 'ramirez-j', teamId: 'rgb-racing', carNumber: 13 },
  { driverId: 'vega-dieppa', teamId: 'rgb-racing', carNumber: 14 },
  // Martinet by Alméras
  { driverId: 'oeverhaus', teamId: 'martinet-by-almeras', carNumber: 15 },
  { driverId: 'cauhaupe', teamId: 'martinet-by-almeras', carNumber: 16 },
  { driverId: 'jaap-van-lagen', teamId: 'martinet-by-almeras', carNumber: 17 },
  // Ombra Racing
  { driverId: 'mcneilly', teamId: 'ombra-racing', carNumber: 18 },
  { driverId: 'martinez-l', teamId: 'ombra-racing', carNumber: 19 },
  { driverId: 'ugran', teamId: 'ombra-racing', carNumber: 20 },
  // Looping by CarTech
  { driverId: 'watarai', teamId: 'looping-by-cartech', carNumber: 21 },
  { driverId: 'honkavuori', teamId: 'looping-by-cartech', carNumber: 22 },
  // Team GP Elite
  { driverId: 'samer-shahin', teamId: 'gp-elite', carNumber: 23 },
  { driverId: 'greif', teamId: 'gp-elite', carNumber: 24 },
  { driverId: 'boerekamps', teamId: 'gp-elite', carNumber: 25 },
  { driverId: 'burton-g', teamId: 'gp-elite', carNumber: 26 },
  { driverId: 'ferreira-m', teamId: 'gp-elite', carNumber: 27 },
  // Target Competition
  { driverId: 'festante', teamId: 'target-competition', carNumber: 28 },
  { driverId: 'young-j', teamId: 'target-competition', carNumber: 29 },
  // Porsche Motorsport (guest)
  { driverId: 'jacques-villeneuve', teamId: 'porsche-motorsport', carNumber: 911 },
]
