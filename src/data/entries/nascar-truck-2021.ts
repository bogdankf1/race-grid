import type { EntryItem } from './types'

// NASCAR Camping World Truck Series 2021 full-season entries
// Source: en.wikipedia.org/wiki/2021_NASCAR_Camping_World_Truck_Series team & driver chart
// Verified 2026-06-07.
// Only full-season regulars are listed; part-time guest entries (e.g. Kyle Busch / Martin Truex Jr. /
// Christian Eckes / Ryan Preece / Chase Elliott in KBM #51, GMS #24 etc.) appear only in results.
export const nascarTruckEntries2021: EntryItem[] = [
  // AM Racing (Chevrolet)
  { driverId: 'self-aw', teamId: 'am-racing', carNumber: 22 },
  // GMS Racing (Chevrolet)
  { driverId: 'creed', teamId: 'gms-racing', carNumber: 2 },
  { driverId: 'smith', teamId: 'gms-racing', carNumber: 21 },
  { driverId: 'purdy', teamId: 'gms-racing', carNumber: 23 },
  { driverId: 'ankrum', teamId: 'gms-racing', carNumber: 26 },
  // Jordan Anderson Racing (Chevrolet)
  { driverId: 'anderson-j', teamId: 'jordan-anderson-racing', carNumber: 3 },
  // Niece Motorsports (Chevrolet)
  { driverId: 'truex-r', teamId: 'niece-motorsports', carNumber: 40 },
  { driverId: 'hocevar', teamId: 'niece-motorsports', carNumber: 42 },
  { driverId: 'moffitt', teamId: 'niece-motorsports', carNumber: 45 },
  // Young's Motorsports (Chevrolet)
  { driverId: 'wright-kris', teamId: 'youngs-motorsports', carNumber: 2 },
  { driverId: 'fogleman', teamId: 'youngs-motorsports', carNumber: 12 },
  { driverId: 'boyd-spencer', teamId: 'youngs-motorsports', carNumber: 20 },
  // David Gilliland Racing (Ford)
  { driverId: 'deegan-h', teamId: 'david-gilliland-racing', carNumber: 1 },
  { driverId: 'gray-tanner', teamId: 'david-gilliland-racing', carNumber: 15 },
  // Front Row Motorsports (Ford)
  { driverId: 'gilliland', teamId: 'front-row-motorsports', carNumber: 38 },
  // Halmar Friesen Racing (Toyota)
  { driverId: 'friesen', teamId: 'halmar-friesen-racing', carNumber: 52 },
  // Hattori Racing Enterprises (Toyota)
  { driverId: 'austin-hill', teamId: 'hattori-racing-enterprises', carNumber: 16 },
  // Kyle Busch Motorsports (Toyota)
  { driverId: 'nemechek', teamId: 'kyle-busch-motorsports', carNumber: 4 },
  { driverId: 'chandler-smith', teamId: 'kyle-busch-motorsports', carNumber: 18 },
  { driverId: 'dollar-d', teamId: 'kyle-busch-motorsports', carNumber: 51 },
  // McAnally-Hilgemann Racing (Toyota)
  { driverId: 'kraus', teamId: 'mcanally-hilgemann-racing', carNumber: 19 },
  // On Point Motorsports (Toyota)
  { driverId: 'bohn', teamId: 'on-point-motorsports', carNumber: 30 },
  // ThorSport Racing (Toyota)
  { driverId: 'sauter', teamId: 'thorsport-racing', carNumber: 13 },
  { driverId: 'matt-crafton', teamId: 'thorsport-racing', carNumber: 88 },
  { driverId: 'enfinger', teamId: 'thorsport-racing', carNumber: 98 },
  { driverId: 'rhodes-b', teamId: 'thorsport-racing', carNumber: 99 },
]
