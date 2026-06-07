import type { SeasonStandings } from './types'

// NASCAR Craftsman Truck Series 2026 standings — after Round 12 Michigan (2026-06-06)
// Sources: en.wikipedia.org/wiki/2026_NASCAR_Craftsman_Truck_Series, nascar.com/standings/nascar-craftsman-truck-series/
// Manufacturer wins: Toyota 5 (Heim x3, Bell x1, Honeycutt x1), Ford 4 (C. Smith x1, Riggs x3), Chevrolet 3 (Busch x2, Hocevar x1).
export const nascarTruckStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'layne-riggs', teamId: 'front-row-motorsports', points: 497, wins: 3 },
    { position: 2, driverId: 'kaden-honeycutt', teamId: 'tricon-garage', points: 471, wins: 1 },
    { position: 3, driverId: 'chandler-smith', teamId: 'front-row-motorsports', points: 407, wins: 1 },
    { position: 4, driverId: 'ruggiero', teamId: 'tricon-garage', points: 383, wins: 0 },
    { position: 5, driverId: 'eckes', teamId: 'mcanally-hilgemann-racing', points: 379, wins: 0 },
    { position: 6, driverId: 'rhodes-b', teamId: 'thorsport-racing', points: 316, wins: 0 },
    { position: 7, driverId: 'majeski', teamId: 'thorsport-racing', points: 312, wins: 0 },
    { position: 8, driverId: 'ankrum', teamId: 'mcanally-hilgemann-racing', points: 283, wins: 0 },
    { position: 9, driverId: 'hemric', teamId: 'mcanally-hilgemann-racing', points: 278, wins: 0 },
    { position: 10, driverId: 'garcia-jake', teamId: 'thorsport-racing', points: 278, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'toyota', points: 509, wins: 5 },
    { position: 2, teamId: 'ford', points: 479, wins: 4 },
    { position: 3, teamId: 'chevrolet', points: 468, wins: 3 },
    { position: 4, teamId: 'ram', points: 320, wins: 0 },
  ],
}
