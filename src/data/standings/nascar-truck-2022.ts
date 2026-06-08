import type { SeasonStandings } from './types'

// NASCAR Camping World Truck Series 2022 final standings — after Round 23 Lucas Oil 150 at Phoenix (2022-11-04)
// Sources: en.wikipedia.org/wiki/2022_NASCAR_Camping_World_Truck_Series, driveraverages.com 2022 standings,
// espn.com/racing/standings/_/series/truck/year/2022, nascar.com archives.
// Verified 2026-06-08.
// Champion: Zane Smith (Front Row Motorsports) — first career Truck Series championship; clinched at Phoenix
// winning the finale. Also won the regular-season championship — first driver since Brad Keselowski (2010)
// to sweep both titles in the same year.
// Rookie of the Year: Corey Heim (Kyle Busch Motorsports).
// Manufacturer title: Toyota. Final season of Camping World as title sponsor — Craftsman took over for 2023.
// Following the same convention as other NASCAR Truck seasons, constructors is left empty since per-team
// Truck Owner standings are tracked separately from manufacturer standings.
export const nascarTruckStandings2022: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'smith', teamId: 'front-row-motorsports', points: 4040, wins: 4 },
    { position: 2, driverId: 'rhodes-b', teamId: 'thorsport-racing', points: 4035, wins: 2 },
    { position: 3, driverId: 'chandler-smith', teamId: 'kyle-busch-motorsports', points: 4034, wins: 4 },
    { position: 4, driverId: 'majeski', teamId: 'thorsport-racing', points: 4017, wins: 2 },
    { position: 5, driverId: 'nemechek', teamId: 'kyle-busch-motorsports', points: 2285, wins: 4 },
    { position: 6, driverId: 'friesen', teamId: 'halmar-friesen-racing', points: 2276, wins: 1 },
    { position: 7, driverId: 'enfinger', teamId: 'gms-racing', points: 2266, wins: 1 },
    { position: 8, driverId: 'eckes', teamId: 'thorsport-racing', points: 2230, wins: 0 },
    { position: 9, driverId: 'matt-crafton', teamId: 'thorsport-racing', points: 2208, wins: 0 },
    { position: 10, driverId: 'hocevar', teamId: 'niece-motorsports', points: 2186, wins: 0 },
  ],
  constructors: [],
}
