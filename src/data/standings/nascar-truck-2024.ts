import type { SeasonStandings } from './types'

// NASCAR Craftsman Truck Series 2024 final standings — after Round 23 Phoenix Championship Race (2024-11-08)
// Sources: en.wikipedia.org/wiki/2024_NASCAR_Craftsman_Truck_Series,
// tobychristie.com/point-standings/2024-nascar-craftsman-truck-series-driver-point-standings,
// nascar.com/standings/nascar-craftsman-truck-series, espn.com/racing/standings/_/series/truck/year/2024.
// Verified 2026-06-07.
// Champion: Ty Majeski (ThorSport Racing) — first career Truck Series championship; won Phoenix finale.
// Regular-season champion: Christian Eckes. Rookie of the Year: Layne Riggs.
// Manufacturer title: Chevrolet (12 wins, 859 points) over Toyota (6 wins, 804) and Ford (5 wins, 780).
// Following the same convention as nascar-truck-2025, constructors is left empty since per-team Truck
// Owner standings are tracked separately from manufacturer standings.
export const nascarTruckStandings2024: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'majeski', teamId: 'thorsport-racing', points: 4040, wins: 3 },
    { position: 2, driverId: 'heim', teamId: 'tricon-garage', points: 4035, wins: 6 },
    { position: 3, driverId: 'eckes', teamId: 'mcanally-hilgemann-racing', points: 4034, wins: 4 },
    { position: 4, driverId: 'enfinger', teamId: 'cr7-motorsports', points: 4032, wins: 2 },
    { position: 5, driverId: 'sanchez-n', teamId: 'rev-racing', points: 2280, wins: 2 },
    { position: 6, driverId: 'gray-taylor', teamId: 'tricon-garage', points: 2247, wins: 0 },
    { position: 7, driverId: 'caruth', teamId: 'spire-motorsports', points: 2213, wins: 1 },
    { position: 8, driverId: 'ankrum', teamId: 'mcanally-hilgemann-racing', points: 2183, wins: 0 },
    { position: 9, driverId: 'rhodes-b', teamId: 'thorsport-racing', points: 2150, wins: 0 },
    { position: 10, driverId: 'dye-d', teamId: 'mcanally-hilgemann-racing', points: 2141, wins: 0 },
  ],
  constructors: [],
}
