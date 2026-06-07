import type { SeasonStandings } from './types'

// NASCAR Xfinity (NASCAR O'Reilly Auto Parts Series) 2026 standings — after Round 16 Nashville (2026-05-30)
// Sources: Wikipedia "2026 NASCAR O'Reilly Auto Parts Series", nascar.com/standings/nascar-xfinity-series/
// Top 16 represent the projected playoff field (Chase cut-line).
export const nascarXfinityStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'allgaier', teamId: 'jr-motorsports', points: 770, wins: 4 },
    { position: 2, driverId: 'jesse-love', teamId: 'richard-childress-racing', points: 591, wins: 0 },
    { position: 3, driverId: 'corey-day', teamId: 'hendrick-motorsports', points: 574, wins: 2 },
    { position: 4, driverId: 'creed', teamId: 'haas-factory-team', points: 532, wins: 1 },
    { position: 5, driverId: 'jones-brandon', teamId: 'joe-gibbs-racing', points: 512, wins: 0 },
    { position: 6, driverId: 'austin-hill', teamId: 'richard-childress-racing', points: 499, wins: 1 },
    { position: 7, driverId: 'kvapil', teamId: 'jr-motorsports', points: 493, wins: 0 },
    { position: 8, driverId: 'smith-sammy', teamId: 'jr-motorsports', points: 482, wins: 0 },
    { position: 9, driverId: 'sawalich', teamId: 'joe-gibbs-racing', points: 429, wins: 1 },
    { position: 10, driverId: 'retzlaff', teamId: 'viking-motorsports', points: 416, wins: 0 },
    { position: 11, driverId: 'mayer-sam', teamId: 'haas-factory-team', points: 413, wins: 0 },
    { position: 12, driverId: 'gray-taylor', teamId: 'joe-gibbs-racing', points: 399, wins: 1 },
    { position: 13, driverId: 'caruth', teamId: 'jr-motorsports', points: 387, wins: 0 },
    { position: 14, driverId: 'crews-brent', teamId: 'joe-gibbs-racing', points: 384, wins: 0 },
    { position: 15, driverId: 'sieg-r', teamId: 'rss-racing', points: 384, wins: 0 },
    { position: 16, driverId: 'poole-b', teamId: 'alpha-prime-racing', points: 309, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'chevrolet', points: 839, wins: 14 },
    { position: 2, teamId: 'toyota', points: 539, wins: 2 },
    { position: 3, teamId: 'ford', points: 188, wins: 0 },
  ],
}
