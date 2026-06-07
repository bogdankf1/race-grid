import type { EntryItem } from './types'

// NASCAR Craftsman Truck Series 2026 full-season entries
// Source: Wikipedia "2026 NASCAR Craftsman Truck Series", jayski.com 2026 team & driver chart
// Only full-season regulars are listed; rotational entries (e.g., Tricon Garage #1 "All-Star" piloted by
// Corey Heim / Kyle Busch / Christopher Bell) are omitted.
export const nascarTruckEntries2026: EntryItem[] = [
  // Front Row Motorsports (Ford)
  { driverId: 'layne-riggs', teamId: 'front-row-motorsports', carNumber: 34 },
  { driverId: 'chandler-smith', teamId: 'front-row-motorsports', carNumber: 38 },
  // ThorSport Racing (Ford)
  { driverId: 'butcher-cole', teamId: 'thorsport-racing', carNumber: 13 },
  { driverId: 'majeski', teamId: 'thorsport-racing', carNumber: 88 },
  { driverId: 'garcia-jake', teamId: 'thorsport-racing', carNumber: 98 },
  { driverId: 'rhodes-b', teamId: 'thorsport-racing', carNumber: 99 },
  // Tricon Garage (Toyota)
  { driverId: 'kaden-honeycutt', teamId: 'tricon-garage', carNumber: 11 },
  { driverId: 'gray-tanner', teamId: 'tricon-garage', carNumber: 15 },
  { driverId: 'ruggiero', teamId: 'tricon-garage', carNumber: 17 },
  // Halmar Friesen Racing (Toyota)
  { driverId: 'friesen', teamId: 'halmar-friesen-racing', carNumber: 52 },
  { driverId: 'nemechek', teamId: 'halmar-friesen-racing', carNumber: 62 },
  // Spire Motorsports (Chevrolet)
  { driverId: 'mcdowell', teamId: 'spire-motorsports', carNumber: 7 },
  { driverId: 'hocevar', teamId: 'spire-motorsports', carNumber: 77 },
  // McAnally-Hilgemann Racing (Chevrolet)
  { driverId: 'ankrum', teamId: 'mcanally-hilgemann-racing', carNumber: 18 },
  { driverId: 'hemric', teamId: 'mcanally-hilgemann-racing', carNumber: 19 },
  { driverId: 'wright-kris', teamId: 'mcanally-hilgemann-racing', carNumber: 81 },
  { driverId: 'eckes', teamId: 'mcanally-hilgemann-racing', carNumber: 91 },
  // Niece Motorsports (Chevrolet)
  { driverId: 'reif', teamId: 'niece-motorsports', carNumber: 42 },
  { driverId: 'perez-de-lara', teamId: 'niece-motorsports', carNumber: 44 },
  { driverId: 'lewis-landen', teamId: 'niece-motorsports', carNumber: 45 },
  // CR7 Motorsports (Chevrolet)
  { driverId: 'enfinger', teamId: 'cr7-motorsports', carNumber: 9 },
  // Freedom Racing Enterprises (Chevrolet)
  { driverId: 'boyd-spencer', teamId: 'freedom-racing-enterprises', carNumber: 76 },
  // Rackley W.A.R. (Chevrolet)
  { driverId: 'sutton-d', teamId: 'rackley-war', carNumber: 26 },
  // Kaulig Racing (Ram)
  { driverId: 'dye-d', teamId: 'kaulig-racing', carNumber: 10 },
  { driverId: 'queen-b', teamId: 'kaulig-racing', carNumber: 12 },
  { driverId: 'tyrrell', teamId: 'kaulig-racing', carNumber: 14 },
  { driverId: 'haley', teamId: 'kaulig-racing', carNumber: 16 },
  { driverId: 'stewart-tony', teamId: 'kaulig-racing', carNumber: 25 },
  // Reaume Brothers Racing (Ford)
  { driverId: 'white-jason', teamId: 'team-reaume-bros-racing', carNumber: 2 },
  { driverId: 'reaume-josh', teamId: 'team-reaume-bros-racing', carNumber: 22 },
  { driverId: 'muniz', teamId: 'team-reaume-bros-racing', carNumber: 33 },
]
