import type { SeasonStandings } from './types'

// NASCAR Xfinity Series 2021 final standings — after Round 33 Phoenix Championship Race (2021-11-06)
// Sources: en.wikipedia.org/wiki/2021_NASCAR_Xfinity_Series, espn.com/racing/standings/_/series/xfinity/year/2021, driveraverages.com
// Champion: Daniel Hemric (Joe Gibbs Racing) — his first career national series win came in the championship race itself.
// Regular Season champion: A. J. Allmendinger (Kaulig Racing) — five regular-season wins.
// Verification date: 2026-06-08.
export const nascarXfinityStandings2021: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'hemric', teamId: 'joe-gibbs-racing', points: 4040, wins: 1 },
    { position: 2, driverId: 'cindric', teamId: 'team-penske', points: 4035, wins: 5 },
    { position: 3, driverId: 'gragson', teamId: 'jr-motorsports', points: 4025, wins: 3 },
    { position: 4, driverId: 'allmendinger', teamId: 'kaulig-racing', points: 4023, wins: 5 },
    { position: 5, driverId: 'allgaier', teamId: 'jr-motorsports', points: 2300, wins: 2 },
    { position: 6, driverId: 'haley', teamId: 'kaulig-racing', points: 2244, wins: 1 },
    { position: 7, driverId: 'jones-brandon', teamId: 'joe-gibbs-racing', points: 2239, wins: 0 },
    { position: 8, driverId: 'burton-h', teamId: 'joe-gibbs-racing', points: 2194, wins: 0 },
    { position: 9, driverId: 'snider', teamId: 'richard-childress-racing', points: 2172, wins: 1 },
    { position: 10, driverId: 'burton-jeb', teamId: 'kaulig-racing', points: 2162, wins: 1 },
    { position: 11, driverId: 'herbst', teamId: 'stewart-haas-racing', points: 2157, wins: 0 },
    { position: 12, driverId: 'clements-jeremy', teamId: 'jeremy-clements-racing', points: 2126, wins: 0 },
    { position: 13, driverId: 'gibbs', teamId: 'joe-gibbs-racing', points: 663, wins: 4 },
    { position: 14, driverId: 'sieg-r', teamId: 'rss-racing', points: 643, wins: 0 },
    { position: 15, driverId: 'annett', teamId: 'jr-motorsports', points: 638, wins: 0 },
    { position: 16, driverId: 'brown-brandon', teamId: 'brandonbilt-motorsports', points: 620, wins: 1 },
  ],
  // Manufacturer championship: Chevrolet won the 2021 Xfinity Series manufacturer title (14 wins).
  // Official final point totals not publicly archived; leaving empty per the convention used by other NXS seasons.
  constructors: [],
}
