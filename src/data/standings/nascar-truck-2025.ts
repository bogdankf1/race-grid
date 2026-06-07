import type { SeasonStandings } from './types'

// NASCAR Craftsman Truck Series 2025 final standings — after Round 25 Phoenix Championship Race (2025-10-31)
// Sources: en.wikipedia.org/wiki/2025_NASCAR_Craftsman_Truck_Series, nascar.com/standings/nascar-craftsman-truck-series,
// pressroom.toyota.com (Toyota's 14th Truck Manufacturers' title clinched Oct 24 after Martinsville).
// Champion: Corey Heim (Tricon Garage) — record-setting season with 12 wins and 1,627 laps led.
// Manufacturer title: Toyota with 14 wins (925 points per Wikipedia summary). Chevrolet finished 2nd
// (6 wins) and Ford 3rd (5 wins); Chev/Ford point totals are not publicly archived in a verifiable form.
// Following the same convention as nascar-2025 and nascar-xfinity-2025, constructors is left empty.
export const nascarTruckStandings2025: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'heim', teamId: 'tricon-garage', points: 4040, wins: 12 },
    { position: 2, driverId: 'majeski', teamId: 'thorsport-racing', points: 4035, wins: 0 },
    { position: 3, driverId: 'kaden-honeycutt', teamId: 'niece-motorsports', points: 4034, wins: 0 },
    { position: 4, driverId: 'ankrum', teamId: 'mcanally-hilgemann-racing', points: 4023, wins: 1 },
    { position: 5, driverId: 'layne-riggs', teamId: 'front-row-motorsports', points: 2297, wins: 3 },
    { position: 6, driverId: 'caruth', teamId: 'spire-motorsports', points: 2237, wins: 1 },
    { position: 7, driverId: 'enfinger', teamId: 'cr7-motorsports', points: 2198, wins: 0 },
    { position: 8, driverId: 'chandler-smith', teamId: 'front-row-motorsports', points: 2179, wins: 2 },
    { position: 9, driverId: 'hemric', teamId: 'mcanally-hilgemann-racing', points: 2177, wins: 1 },
    { position: 10, driverId: 'garcia-jake', teamId: 'thorsport-racing', points: 2148, wins: 0 },
  ],
  constructors: [],
}
