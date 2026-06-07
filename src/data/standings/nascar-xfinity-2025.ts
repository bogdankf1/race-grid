import type { SeasonStandings } from './types'

// NASCAR Xfinity Series 2025 final standings — after Round 33 Phoenix Championship Race (2025-11-01)
// Sources: en.wikipedia.org/wiki/2025_NASCAR_Xfinity_Series, nascar.com/standings/nascar-xfinity-series
// Champion: Jesse Love (Richard Childress Racing). Regular Season champion: Connor Zilisch (10 wins).
export const nascarXfinityStandings2025: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'jesse-love', teamId: 'richard-childress-racing', points: 4040, wins: 2 },
    { position: 2, driverId: 'zilisch', teamId: 'jr-motorsports', points: 4034, wins: 10 },
    { position: 3, driverId: 'allgaier', teamId: 'jr-motorsports', points: 4032, wins: 3 },
    { position: 4, driverId: 'kvapil', teamId: 'jr-motorsports', points: 4024, wins: 0 },
    { position: 5, driverId: 'jones-brandon', teamId: 'joe-gibbs-racing', points: 2240, wins: 2 },
    { position: 6, driverId: 'austin-hill', teamId: 'richard-childress-racing', points: 2230, wins: 4 },
    { position: 7, driverId: 'gray-taylor', teamId: 'joe-gibbs-racing', points: 2228, wins: 1 },
    { position: 8, driverId: 'smith-sammy', teamId: 'jr-motorsports', points: 2222, wins: 1 },
    { position: 9, driverId: 'creed', teamId: 'haas-factory-team', points: 2218, wins: 0 },
    { position: 10, driverId: 'mayer-sam', teamId: 'haas-factory-team', points: 2204, wins: 1 },
    { position: 11, driverId: 'sanchez-n', teamId: 'big-machine-racing', points: 2198, wins: 1 },
    { position: 12, driverId: 'burton-h', teamId: 'am-racing', points: 2163, wins: 0 },
    { position: 13, driverId: 'eckes', teamId: 'kaulig-racing', points: 784, wins: 0 },
    { position: 14, driverId: 'burton-jeb', teamId: 'jordan-anderson-racing', points: 719, wins: 0 },
    { position: 15, driverId: 'sieg-r', teamId: 'rss-racing', points: 691, wins: 0 },
    { position: 16, driverId: 'thompson-d', teamId: 'sam-hunt-racing', points: 690, wins: 0 },
  ],
  // Manufacturer championship: Chevrolet won its 27th Xfinity Series manufacturer title (record 26 wins).
  // Official final point totals not publicly archived; leaving empty per the convention used by nascar-2025.
  constructors: [],
}
