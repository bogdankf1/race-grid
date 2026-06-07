import type { EntryItem } from './types'

// NASCAR Craftsman Truck Series 2025 full-season entries
// Source: en.wikipedia.org/wiki/2025_NASCAR_Craftsman_Truck_Series, jayski.com 2025 team & driver chart
// Only full-season regulars are listed; part-time guest entries (Kyle Busch / Kyle Larson / William Byron
// in Spire #7 & #07, Christopher Bell, Corey Day, Brent Crews, etc.) appear only in results.
export const nascarTruckEntries2025: EntryItem[] = [
  // CR7 Motorsports (Chevrolet)
  { driverId: 'enfinger', teamId: 'cr7-motorsports', carNumber: 9 },
  // Freedom Racing Enterprises (Chevrolet)
  { driverId: 'boyd-spencer', teamId: 'freedom-racing-enterprises', carNumber: 76 },
  // McAnally-Hilgemann Racing (Chevrolet)
  { driverId: 'ankrum', teamId: 'mcanally-hilgemann-racing', carNumber: 18 },
  { driverId: 'hemric', teamId: 'mcanally-hilgemann-racing', carNumber: 19 },
  { driverId: 'mosack', teamId: 'mcanally-hilgemann-racing', carNumber: 81 },
  // Niece Motorsports (Chevrolet)
  { driverId: 'mills-m', teamId: 'niece-motorsports', carNumber: 42 },
  { driverId: 'currey', teamId: 'niece-motorsports', carNumber: 44 },
  { driverId: 'kaden-honeycutt', teamId: 'niece-motorsports', carNumber: 45 },
  // Rackley W.A.R. (Chevrolet)
  { driverId: 'sutton-d', teamId: 'rackley-war', carNumber: 26 },
  // Spire Motorsports (Chevrolet)
  { driverId: 'caruth', teamId: 'spire-motorsports', carNumber: 71 },
  { driverId: 'perez-de-lara', teamId: 'spire-motorsports', carNumber: 77 },
  // Young's Motorsports (Chevrolet)
  { driverId: 'byrd-nathan', teamId: 'youngs-motorsports', carNumber: 2 },
  // Front Row Motorsports (Ford)
  { driverId: 'layne-riggs', teamId: 'front-row-motorsports', carNumber: 34 },
  { driverId: 'chandler-smith', teamId: 'front-row-motorsports', carNumber: 38 },
  // Reaume Brothers Racing (Ford)
  { driverId: 'reaume-josh', teamId: 'team-reaume-bros-racing', carNumber: 2 },
  { driverId: 'white-jason', teamId: 'team-reaume-bros-racing', carNumber: 22 },
  { driverId: 'muniz', teamId: 'team-reaume-bros-racing', carNumber: 33 },
  // ThorSport Racing (Ford)
  { driverId: 'garcia-jake', teamId: 'thorsport-racing', carNumber: 13 },
  { driverId: 'matt-crafton', teamId: 'thorsport-racing', carNumber: 88 },
  { driverId: 'majeski', teamId: 'thorsport-racing', carNumber: 98 },
  { driverId: 'rhodes-b', teamId: 'thorsport-racing', carNumber: 99 },
  // Halmar Friesen Racing (Toyota)
  { driverId: 'friesen', teamId: 'halmar-friesen-racing', carNumber: 52 },
  // Tricon Garage (Toyota)
  { driverId: 'sawalich', teamId: 'tricon-garage', carNumber: 1 },
  { driverId: 'breidinger', teamId: 'tricon-garage', carNumber: 5 },
  { driverId: 'heim', teamId: 'tricon-garage', carNumber: 11 },
  { driverId: 'gray-tanner', teamId: 'tricon-garage', carNumber: 15 },
  { driverId: 'ruggiero', teamId: 'tricon-garage', carNumber: 17 },
]
