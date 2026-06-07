import type { SeasonStandings } from './types'

// GT World Challenge Australia 2026 standings — after Round 1 (Phillip Island, 2 races)
// Sub-cup data sourced from:
//   https://www.pitdebrief.com/post/2026-gtwc-australia-standings-after-phillip-island-round-1/
//   https://en.wikipedia.org/wiki/2026_GT_World_Challenge_Australia
//   https://www.gt-world-challenge-australia.com/standings
// Class structure: Pro-Am (headline), Trophy, Am, SRO GT Academy.
// Am Cup skipped — only one crew classified (Koundouris brothers), below the 3-row threshold.
// SRO GT Academy skipped — single-driver award within Pro-Am, not a crew-based sub-cup.
export const gtwcauStandings2026: SeasonStandings = {
  className: 'Pro-Am',
  drivers: [
    { position: 1, driverId: 'feeney', teamId: 'team-mpc', points: 30, wins: 1 },
    { position: 2, driverId: 'evans-j', teamId: 'arise-racing-gt', points: 28, wins: 0 },
    { position: 3, driverId: 'lucchitti', teamId: 'move-my-wheels-tigani', points: 26, wins: 1 },
    { position: 4, driverId: 'brooks', teamId: 'wolfbrook-motorsport', points: 23, wins: 0 },
    { position: 5, driverId: 'targett', teamId: 'kollosche-tigani', points: 18, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'tigani-motorsport', points: 44, wins: 1 },
    { position: 2, teamId: 'team-mpc', points: 38, wins: 1 },
    { position: 3, teamId: 'arise-racing-gt', points: 30, wins: 0 },
    { position: 4, teamId: 'castrol-team-brm', points: 30, wins: 0 },
    { position: 5, teamId: 'volante-rosso', points: 16, wins: 0 },
  ],
  otherClasses: [
    {
      className: 'Trophy',
      drivers: [
        { position: 1, driverId: 'gardner-a', teamId: 'volante-rosso', points: 44, wins: 1 },
        { position: 2, driverId: 'stoupas', teamId: 'kfc-team-mpc', points: 34, wins: 0 },
        { position: 3, driverId: 'halstead-n2', teamId: 'aed-tigani', points: 25, wins: 1 },
      ],
      constructors: [],
    },
  ],
}
