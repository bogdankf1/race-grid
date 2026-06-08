import type { EntryItem } from './types'

// NASCAR Craftsman Truck Series 2023 full-season entries
// First season under the new "Craftsman" title sponsorship.
// Source: en.wikipedia.org/wiki/2023_NASCAR_Craftsman_Truck_Series team & driver chart
// Verified 2026-06-08.
// Only full-season regulars are listed; part-time guest entries (Kyle Busch / Joey Logano / Kyle Larson /
// William Byron / Ross Chastain / Travis Pastrana / Chase Elliott / Brett Moffitt etc.) appear only in results.
// Note: ThorSport Racing switched from Toyota to Ford for 2023.
export const nascarTruckEntries2023: EntryItem[] = [
  // CR7 Motorsports (Chevrolet)
  { driverId: 'howard-c', teamId: 'cr7-motorsports', carNumber: 9 },
  // GMS Racing (Chevrolet)
  { driverId: 'enfinger', teamId: 'gms-racing', carNumber: 23 },
  { driverId: 'caruth', teamId: 'gms-racing', carNumber: 24 },
  { driverId: 'dye-d', teamId: 'gms-racing', carNumber: 43 },
  // Kyle Busch Motorsports (Chevrolet — switched from Toyota for 2023)
  { driverId: 'purdy', teamId: 'kyle-busch-motorsports', carNumber: 4 },
  { driverId: 'wood-jack', teamId: 'kyle-busch-motorsports', carNumber: 51 },
  // McAnally-Hilgemann Racing (Chevrolet)
  { driverId: 'eckes', teamId: 'mcanally-hilgemann-racing', carNumber: 19 },
  // Niece Motorsports (Chevrolet)
  { driverId: 'hocevar', teamId: 'niece-motorsports', carNumber: 42 },
  { driverId: 'lawless-alan', teamId: 'niece-motorsports', carNumber: 45 },
  // Rev Racing (Chevrolet)
  { driverId: 'sanchez-n', teamId: 'rev-racing', carNumber: 2 },
  // Spire Motorsports (Chevrolet) — rotating drivers; Layne Riggs took the seat mid-season
  { driverId: 'layne-riggs', teamId: 'spire-motorsports', carNumber: 7 },
  // Front Row Motorsports (Ford)
  { driverId: 'smith', teamId: 'front-row-motorsports', carNumber: 38 },
  // Reaume Brothers Racing (Ford)
  { driverId: 'massey', teamId: 'team-reaume-bros-racing', carNumber: 33 },
  // ThorSport Racing (Ford — switched from Toyota for 2023)
  { driverId: 'deegan-h', teamId: 'thorsport-racing', carNumber: 13 },
  { driverId: 'matt-crafton', teamId: 'thorsport-racing', carNumber: 88 },
  { driverId: 'majeski', teamId: 'thorsport-racing', carNumber: 98 },
  { driverId: 'rhodes-b', teamId: 'thorsport-racing', carNumber: 99 },
  // Halmar Friesen Racing (Toyota)
  { driverId: 'friesen', teamId: 'halmar-friesen-racing', carNumber: 52 },
  // Hattori Racing Enterprises (Toyota)
  { driverId: 'ankrum', teamId: 'hattori-racing-enterprises', carNumber: 16 },
  // Hill Motorsports (Toyota)
  { driverId: 'hill-t', teamId: 'hill-motorsports', carNumber: 56 },
  // Tricon Garage (Toyota)
  { driverId: 'thompson-d', teamId: 'tricon-garage', carNumber: 5 },
  { driverId: 'heim', teamId: 'tricon-garage', carNumber: 11 },
  { driverId: 'gray-tanner', teamId: 'tricon-garage', carNumber: 15 },
  // Young's Motorsports (Chevrolet)
  { driverId: 'wright-kris', teamId: 'youngs-motorsports', carNumber: 2 },
  { driverId: 'boyd-spencer', teamId: 'youngs-motorsports', carNumber: 12 },
  { driverId: 'kraus', teamId: 'youngs-motorsports', carNumber: 20 },
]
