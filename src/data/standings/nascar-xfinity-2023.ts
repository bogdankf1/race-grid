import type { SeasonStandings } from './types'

// NASCAR Xfinity Series 2023 final standings — after Round 33 Phoenix Championship Race (2023-11-04)
// Sources: en.wikipedia.org/wiki/2023_NASCAR_Xfinity_Series, en.wikipedia.org/wiki/2023_NASCAR_Xfinity_Series_Championship_Race,
// nascar.com/standings/nascar-xfinity-series, racing-reference.info, tobychristie.com season recaps.
// Champion: Cole Custer (Stewart-Haas Racing) — his first NXS title, won the championship race at Phoenix.
// Regular Season champion: Austin Hill (Richard Childress Racing).
// Rookie of the Year: Sammy Smith.
// Note: Custer finished only 3 wins yet beat 7-win Nemechek by Custer winning the title race; classic playoff outcome.
// Verification date: 2026-06-08.
export const nascarXfinityStandings2023: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'custer', teamId: 'stewart-haas-racing', points: 4040, wins: 3 },
    { position: 2, driverId: 'allgaier', teamId: 'jr-motorsports', points: 4034, wins: 4 },
    { position: 3, driverId: 'mayer-sam', teamId: 'jr-motorsports', points: 4032, wins: 4 },
    { position: 4, driverId: 'nemechek', teamId: 'joe-gibbs-racing', points: 4009, wins: 7 },
    { position: 5, driverId: 'austin-hill', teamId: 'richard-childress-racing', points: 2273, wins: 4 },
    { position: 6, driverId: 'smith-sammy', teamId: 'joe-gibbs-racing', points: 2248, wins: 1 },
    { position: 7, driverId: 'creed', teamId: 'richard-childress-racing', points: 2225, wins: 0 },
    { position: 8, driverId: 'hemric', teamId: 'kaulig-racing', points: 2224, wins: 0 },
    { position: 9, driverId: 'chandler-smith', teamId: 'kaulig-racing', points: 2219, wins: 1 },
    { position: 10, driverId: 'kligerman', teamId: 'big-machine-racing', points: 2209, wins: 0 },
    { position: 11, driverId: 'berry', teamId: 'jr-motorsports', points: 2172, wins: 0 },
    { position: 12, driverId: 'burton-jeb', teamId: 'jordan-anderson-racing', points: 2126, wins: 1 },
  ],
  // Manufacturer championship: Chevrolet won the 2023 Xfinity Series manufacturer title.
  // Official final point totals not publicly archived in the same format as Cup; leaving empty per the convention
  // used by other NXS seasons.
  constructors: [],
}
