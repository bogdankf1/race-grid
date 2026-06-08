import type { EntryItem } from './types'

// NASCAR Camping World Truck Series 2022 full-season entries
// Source: en.wikipedia.org/wiki/2022_NASCAR_Camping_World_Truck_Series team & driver chart
// Verified 2026-06-07.
// Only full-season regulars are listed; part-time guest entries (Kyle Busch / William Byron / Ross Chastain /
// Joey Logano / Ryan Preece etc.) appear only in results.
export const nascarTruckEntries2022: EntryItem[] = [
  // CR7 Motorsports (Chevrolet)
  { driverId: 'perkins-blaine', teamId: 'cr7-motorsports', carNumber: 9 },
  // GMS Racing (Chevrolet)
  { driverId: 'enfinger', teamId: 'gms-racing', carNumber: 23 },
  { driverId: 'wood-jack', teamId: 'gms-racing', carNumber: 24 },
  // McAnally-Hilgemann Racing (Chevrolet)
  { driverId: 'kraus', teamId: 'mcanally-hilgemann-racing', carNumber: 19 },
  { driverId: 'howard-c', teamId: 'mcanally-hilgemann-racing', carNumber: 91 },
  // Niece Motorsports (Chevrolet)
  { driverId: 'thompson-d', teamId: 'niece-motorsports', carNumber: 40 },
  { driverId: 'hocevar', teamId: 'niece-motorsports', carNumber: 42 },
  { driverId: 'lawless-alan', teamId: 'niece-motorsports', carNumber: 45 },
  // David Gilliland Racing (Ford)
  { driverId: 'deegan-h', teamId: 'david-gilliland-racing', carNumber: 1 },
  { driverId: 'gray-tanner', teamId: 'david-gilliland-racing', carNumber: 15 },
  { driverId: 'herbst', teamId: 'david-gilliland-racing', carNumber: 17 },
  // Front Row Motorsports (Ford)
  { driverId: 'smith', teamId: 'front-row-motorsports', carNumber: 38 },
  // Halmar Friesen Racing (Toyota)
  { driverId: 'friesen', teamId: 'halmar-friesen-racing', carNumber: 52 },
  // Hattori Racing Enterprises (Toyota)
  { driverId: 'ankrum', teamId: 'hattori-racing-enterprises', carNumber: 16 },
  { driverId: 'purdy', teamId: 'hattori-racing-enterprises', carNumber: 61 },
  // Hill Motorsports (Toyota)
  { driverId: 'hill-t', teamId: 'hill-motorsports', carNumber: 56 },
  // Kyle Busch Motorsports (Toyota)
  { driverId: 'nemechek', teamId: 'kyle-busch-motorsports', carNumber: 4 },
  { driverId: 'chandler-smith', teamId: 'kyle-busch-motorsports', carNumber: 18 },
  { driverId: 'heim', teamId: 'kyle-busch-motorsports', carNumber: 51 },
  // ThorSport Racing (Toyota)
  { driverId: 'majeski', teamId: 'thorsport-racing', carNumber: 66 },
  { driverId: 'matt-crafton', teamId: 'thorsport-racing', carNumber: 88 },
  { driverId: 'rhodes-b', teamId: 'thorsport-racing', carNumber: 99 },
]
