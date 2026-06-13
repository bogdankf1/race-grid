import type { EntryItem } from './types'

// NASCAR Craftsman Truck Series 2024 full-season entries
// Source: en.wikipedia.org/wiki/2024_NASCAR_Craftsman_Truck_Series, jayski.com 2024 team & driver chart
// Verified 2026-06-07.
// Only full-season regulars are listed; part-time guest entries (e.g. Kyle Busch / Ross Chastain / Zane Smith
// in Spire #7 & #07, Connor Zilisch in Spire, Connor Mosack in Spire #7, etc.) appear only in results.
export const nascarTruckEntries2024: EntryItem[] = [
  // CR7 Motorsports (Chevrolet)
  { driverId: 'enfinger', teamId: 'cr7-motorsports', carNumber: 9 },
  // Freedom Racing Enterprises (Chevrolet)
  { driverId: 'boyd-spencer', teamId: 'freedom-racing-enterprises', carNumber: 76 },
  // McAnally-Hilgemann Racing (Chevrolet)
  { driverId: 'ankrum', teamId: 'mcanally-hilgemann-racing', carNumber: 18 },
  { driverId: 'eckes', teamId: 'mcanally-hilgemann-racing', carNumber: 19 },
  { driverId: 'dye-d', teamId: 'mcanally-hilgemann-racing', carNumber: 43 },
  // Niece Motorsports (Chevrolet)
  { driverId: 'currey', teamId: 'niece-motorsports', carNumber: 41 },
  { driverId: 'mills-m', teamId: 'niece-motorsports', carNumber: 42 },
  { driverId: 'sauter', teamId: 'niece-motorsports', carNumber: 45 },
  // Rackley W.A.R. (Chevrolet)
  { driverId: 'ty-dillon', teamId: 'rackley-war', carNumber: 25 },
  // Rev Racing (Chevrolet)
  { driverId: 'sanchez-n', teamId: 'rev-racing', carNumber: 2 },
  // Spire Motorsports (Chevrolet)
  { driverId: 'lajoie', teamId: 'spire-motorsports', carNumber: 7 },
  { driverId: 'caruth', teamId: 'spire-motorsports', carNumber: 71 },
  { driverId: 'purdy', teamId: 'spire-motorsports', carNumber: 77 },
  // Front Row Motorsports (Ford)
  { driverId: 'layne-riggs', teamId: 'front-row-motorsports', carNumber: 38 },
  // Reaume Brothers Racing (Ford)
  { driverId: 'white-jason', teamId: 'team-reaume-bros-racing', carNumber: 22 },
  { driverId: 'lawless-alan', teamId: 'team-reaume-bros-racing', carNumber: 33 },
  // ThorSport Racing (Ford)
  { driverId: 'garcia-jake', teamId: 'thorsport-racing', carNumber: 13 },
  { driverId: 'matt-crafton', teamId: 'thorsport-racing', carNumber: 88 },
  { driverId: 'majeski', teamId: 'thorsport-racing', carNumber: 98 },
  { driverId: 'rhodes-b', teamId: 'thorsport-racing', carNumber: 99 },
  // Halmar Friesen Racing (Toyota)
  { driverId: 'friesen', teamId: 'halmar-friesen-racing', carNumber: 52 },
  // Hill Motorsports (Toyota)
  { driverId: 'hill-t', teamId: 'hill-motorsports', carNumber: 56 },
  // Tricon Garage (Toyota)
  { driverId: 'breidinger', teamId: 'tricon-garage', carNumber: 1 },
  { driverId: 'thompson-d', teamId: 'tricon-garage', carNumber: 5 },
  { driverId: 'heim', teamId: 'tricon-garage', carNumber: 11 },
  { driverId: 'gray-tanner', teamId: 'tricon-garage', carNumber: 15 },
  { driverId: 'gray-taylor', teamId: 'tricon-garage', carNumber: 17 },
]
