import type { SeasonStandings } from './types'

// NASCAR Camping World Truck Series 2021 final standings — after Round 22 Lucas Oil 150 at Phoenix (2021-11-05)
// Sources: en.wikipedia.org/wiki/2021_NASCAR_Camping_World_Truck_Series, driveraverages.com 2021 standings,
// espn.com/racing/standings/_/series/truck/year/2021, nascar.com archives.
// Verified 2026-06-07.
// Champion: Ben Rhodes (ThorSport Racing) — first career Truck Series championship; clinched at Phoenix.
// Regular-season champion: John Hunter Nemechek (Kyle Busch Motorsports). Rookie of the Year: Chandler Smith.
// Manufacturer title: Toyota.
// Following the same convention as other NASCAR Truck seasons, constructors is left empty since per-team
// Truck Owner standings are tracked separately from manufacturer standings.
export const nascarTruckStandings2021: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'rhodes-b', teamId: 'thorsport-racing', points: 4034, wins: 2 },
    { position: 2, driverId: 'smith', teamId: 'gms-racing', points: 4032, wins: 1 },
    { position: 3, driverId: 'nemechek', teamId: 'kyle-busch-motorsports', points: 4030, wins: 5 },
    { position: 4, driverId: 'matt-crafton', teamId: 'thorsport-racing', points: 4025, wins: 0 },
    { position: 5, driverId: 'creed', teamId: 'gms-racing', points: 2325, wins: 3 },
    { position: 6, driverId: 'friesen', teamId: 'halmar-friesen-racing', points: 2275, wins: 0 },
    { position: 7, driverId: 'gilliland', teamId: 'front-row-motorsports', points: 2262, wins: 1 },
    { position: 8, driverId: 'chandler-smith', teamId: 'kyle-busch-motorsports', points: 2230, wins: 2 },
    { position: 9, driverId: 'austin-hill', teamId: 'hattori-racing-enterprises', points: 2210, wins: 2 },
    { position: 10, driverId: 'hocevar', teamId: 'niece-motorsports', points: 2204, wins: 0 },
  ],
  constructors: [],
}
