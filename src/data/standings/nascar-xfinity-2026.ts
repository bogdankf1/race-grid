import type { SeasonStandings } from './types'

// NASCAR Xfinity (NASCAR O'Reilly Auto Parts Series) 2026 standings — after Round 17 Pocono (2026-06-13)
// Sources: Wikipedia "2026 NASCAR O'Reilly Auto Parts Series", motorsport.com (post-Pocono), racingnews.co
// Top 16 represent the projected playoff field (Chase cut-line).
// NOTE: driver points re-sourced from official post-Pocono tables. Manufacturer (constructor)
// POINTS could not be re-verified for Pocono and are carried over from after-R16; only the
// verified Chevrolet manufacturer win count (14 -> 15, Allgaier's Pocono win) is updated.
export const nascarXfinityStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'allgaier', teamId: 'jr-motorsports', points: 842, wins: 5 },
    { position: 2, driverId: 'jesse-love', teamId: 'richard-childress-racing', points: 592, wins: 0 },
    { position: 3, driverId: 'corey-day', teamId: 'hendrick-motorsports', points: 575, wins: 2 },
    { position: 4, driverId: 'creed', teamId: 'haas-factory-team', points: 569, wins: 1 },
    { position: 5, driverId: 'jones-brandon', teamId: 'joe-gibbs-racing', points: 547, wins: 0 },
    { position: 6, driverId: 'austin-hill', teamId: 'richard-childress-racing', points: 523, wins: 1 },
    { position: 7, driverId: 'kvapil', teamId: 'jr-motorsports', points: 523, wins: 0 },
    { position: 8, driverId: 'smith-sammy', teamId: 'jr-motorsports', points: 504, wins: 0 },
    { position: 9, driverId: 'mayer-sam', teamId: 'haas-factory-team', points: 459, wins: 0 },
    { position: 10, driverId: 'retzlaff', teamId: 'viking-motorsports', points: 446, wins: 0 },
    { position: 11, driverId: 'sawalich', teamId: 'joe-gibbs-racing', points: 445, wins: 1 },
    { position: 12, driverId: 'crews-brent', teamId: 'joe-gibbs-racing', points: 432, wins: 0 },
    { position: 13, driverId: 'gray-taylor', teamId: 'joe-gibbs-racing', points: 429, wins: 2 },
    { position: 14, driverId: 'caruth', teamId: 'jr-motorsports', points: 424, wins: 0 },
    { position: 15, driverId: 'sieg-r', teamId: 'rss-racing', points: 395, wins: 0 },
    { position: 16, driverId: 'poole-b', teamId: 'alpha-prime-racing', points: 328, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'chevrolet', points: 839, wins: 15 },
    { position: 2, teamId: 'toyota', points: 539, wins: 2 },
    { position: 3, teamId: 'ford', points: 188, wins: 0 },
  ],
}
