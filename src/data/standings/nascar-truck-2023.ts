import type { SeasonStandings } from './types'

// NASCAR Craftsman Truck Series 2023 final standings — after Round 23 Craftsman 150 at Phoenix (2023-11-03)
// Sources: en.wikipedia.org/wiki/2023_NASCAR_Craftsman_Truck_Series, driveraverages.com 2023 standings,
// espn.com/racing/standings/_/series/truck/year/2023, nascar.com archives, tobychristie.com 2023 point standings.
// Verified 2026-06-08.
// Champion: Ben Rhodes (ThorSport Racing) — second career Truck Series championship; clinched at Phoenix
// finishing 5th. Fifth driver to win multiple Truck Series titles (joining Ron Hornaday Jr., Matt Crafton,
// Jack Sprague, Todd Bodine).
// Regular-season champion: Corey Heim (Tricon Garage). Rookie of the Year: Nick Sanchez (Rev Racing).
// Manufacturer title: Chevrolet.
// Following the same convention as other NASCAR Truck seasons, constructors is left empty since per-team
// Truck Owner standings are tracked separately from manufacturer standings.
export const nascarTruckStandings2023: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'rhodes-b', teamId: 'thorsport-racing', points: 4032, wins: 1 },
    { position: 2, driverId: 'enfinger', teamId: 'gms-racing', points: 4029, wins: 3 },
    { position: 3, driverId: 'hocevar', teamId: 'niece-motorsports', points: 4028, wins: 4 },
    { position: 4, driverId: 'heim', teamId: 'tricon-garage', points: 4023, wins: 3 },
    { position: 5, driverId: 'eckes', teamId: 'mcanally-hilgemann-racing', points: 2316, wins: 4 },
    { position: 6, driverId: 'sanchez-n', teamId: 'rev-racing', points: 2272, wins: 0 },
    { position: 7, driverId: 'smith', teamId: 'front-row-motorsports', points: 2262, wins: 2 },
    { position: 8, driverId: 'majeski', teamId: 'thorsport-racing', points: 2236, wins: 1 },
    { position: 9, driverId: 'matt-crafton', teamId: 'thorsport-racing', points: 2225, wins: 0 },
    { position: 10, driverId: 'dibenedetto', teamId: 'rackley-war', points: 627, wins: 0 },
  ],
  constructors: [],
}
