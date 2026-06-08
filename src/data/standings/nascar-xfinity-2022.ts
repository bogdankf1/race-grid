import type { SeasonStandings } from './types'

// NASCAR Xfinity Series 2022 final standings — after Round 33 Phoenix Championship Race (2022-11-05)
// Sources: en.wikipedia.org/wiki/2022_NASCAR_Xfinity_Series, espn.com/racing/standings/_/series/xfinity/year/2022
// Champion: Ty Gibbs (Joe Gibbs Racing) — won the championship race at Phoenix to clinch the title.
// Regular Season champion: A. J. Allmendinger (Kaulig Racing).
// Note: Noah Gragson won 8 races (a single-season record at the time) but lost the championship by 5 points.
// Verification date: 2026-06-08.
export const nascarXfinityStandings2022: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'gibbs', teamId: 'joe-gibbs-racing', points: 4040, wins: 7 },
    { position: 2, driverId: 'gragson', teamId: 'jr-motorsports', points: 4035, wins: 8 },
    { position: 3, driverId: 'allgaier', teamId: 'jr-motorsports', points: 4034, wins: 3 },
    { position: 4, driverId: 'berry', teamId: 'jr-motorsports', points: 4024, wins: 3 },
    { position: 5, driverId: 'allmendinger', teamId: 'kaulig-racing', points: 2333, wins: 5 },
    { position: 6, driverId: 'austin-hill', teamId: 'richard-childress-racing', points: 2273, wins: 2 },
    { position: 7, driverId: 'mayer-sam', teamId: 'jr-motorsports', points: 2239, wins: 0 },
    { position: 8, driverId: 'jones-brandon', teamId: 'joe-gibbs-racing', points: 2221, wins: 1 },
    { position: 9, driverId: 'hemric', teamId: 'kaulig-racing', points: 2220, wins: 0 },
    { position: 10, driverId: 'herbst', teamId: 'stewart-haas-racing', points: 2197, wins: 0 },
    { position: 11, driverId: 'sieg-r', teamId: 'rss-racing', points: 2126, wins: 0 },
    { position: 12, driverId: 'clements-jeremy', teamId: 'jeremy-clements-racing', points: 2069, wins: 1 },
    { position: 13, driverId: 'cassill', teamId: 'kaulig-racing', points: 779, wins: 0 },
    { position: 14, driverId: 'creed', teamId: 'richard-childress-racing', points: 751, wins: 0 },
    { position: 15, driverId: 'alfredo', teamId: 'our-motorsports', points: 633, wins: 0 },
    { position: 16, driverId: 'burton-jeb', teamId: 'jordan-anderson-racing', points: 560, wins: 0 },
  ],
  // Manufacturer championship: Toyota won the 2022 Xfinity Series manufacturer title.
  // Official final point totals not publicly archived; leaving empty per the convention used by other NXS seasons.
  constructors: [],
}
