import type { SeasonStandings } from './types'

// NASCAR Xfinity Series 2024 final standings — after Round 33 Phoenix Championship Race (2024-11-09)
// Sources: en.wikipedia.org/wiki/2024_NASCAR_Xfinity_Series, nascar.com/standings/nascar-xfinity-series
// Champion: Justin Allgaier (JR Motorsports) — his first NXS title. Regular Season champion: Cole Custer.
// Verification date: 2026-06-07.
export const nascarXfinityStandings2024: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'allgaier', teamId: 'jr-motorsports', points: 4035, wins: 3 },
    { position: 2, driverId: 'custer', teamId: 'stewart-haas-racing', points: 4029, wins: 2 },
    { position: 3, driverId: 'allmendinger', teamId: 'kaulig-racing', points: 4028, wins: 1 },
    { position: 4, driverId: 'austin-hill', teamId: 'richard-childress-racing', points: 4027, wins: 4 },
    { position: 5, driverId: 'chandler-smith', teamId: 'joe-gibbs-racing', points: 2314, wins: 2 },
    { position: 6, driverId: 'creed', teamId: 'joe-gibbs-racing', points: 2264, wins: 0 },
    { position: 7, driverId: 'herbst', teamId: 'stewart-haas-racing', points: 2254, wins: 2 },
    { position: 8, driverId: 'jesse-love', teamId: 'richard-childress-racing', points: 2247, wins: 1 },
    { position: 9, driverId: 'mayer-sam', teamId: 'jr-motorsports', points: 2205, wins: 3 },
    { position: 10, driverId: 'kligerman', teamId: 'big-machine-racing', points: 2190, wins: 0 },
    { position: 11, driverId: 'smith-sammy', teamId: 'jr-motorsports', points: 2185, wins: 1 },
    { position: 12, driverId: 'van-gisbergen', teamId: 'kaulig-racing', points: 2157, wins: 3 },
    { position: 13, driverId: 'sieg-r', teamId: 'rss-racing', points: 856, wins: 0 },
    { position: 14, driverId: 'jones-brandon', teamId: 'jr-motorsports', points: 696, wins: 0 },
    { position: 15, driverId: 'alfredo', teamId: 'our-motorsports', points: 616, wins: 0 },
    { position: 16, driverId: 'poole-b', teamId: 'alpha-prime-racing', points: 572, wins: 0 },
  ],
  // Manufacturer championship: Chevrolet won the 2024 Xfinity Series manufacturer title (18 wins to Toyota's 9 and Ford's 6).
  // Official final point totals not publicly archived in the same format as Cup; leaving empty per the convention
  // used by nascar-xfinity-2025.ts.
  constructors: [],
}
