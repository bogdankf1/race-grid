import type { SeasonStandings } from './types'

// GT World Challenge Australia 2026 standings — after Round 3 (Queensland Raceway)
// Sources: Wikipedia "2026 GT World Challenge Australia", gt-world-challenge-australia.com/standings,
//   pitdebrief.com (post-Round-2). Class structure: Pro-Am (headline), Trophy, Am, SRO GT Academy.
// VERIFIED post-Queensland: Pro-Am top 3 (Leitch/Lucchitti/Feeney), Teams top 3 (Tigani/MPC/BRM),
//   Trophy top 2 (Stokell/Halstead). FLAGGED: Pro-Am P4-5, Teams P4-5 and Trophy P3 are carried
//   forward from the post-Round-2 table (no published post-Queensland figures) — treat as approximate.
export const gtwcauStandings2026: SeasonStandings = {
  className: 'Pro-Am',
  drivers: [
    { position: 1, driverId: 'leitch', teamId: 'geyer-valmont-tigani', points: 85, wins: 1 },
    { position: 2, driverId: 'lucchitti', teamId: 'move-my-wheels-tigani', points: 76, wins: 0 },
    { position: 3, driverId: 'feeney', teamId: 'team-mpc', points: 73, wins: 0 },
    { position: 4, driverId: 'evans-j', teamId: 'argt', points: 53, wins: 0 },
    { position: 5, driverId: 'randle', teamId: 'castrol-team-brm', points: 50, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'tigani-motorsport', points: 141, wins: 1 },
    { position: 2, teamId: 'team-mpc', points: 95, wins: 0 },
    { position: 3, teamId: 'team-brm', points: 93, wins: 0 },
    { position: 4, teamId: 'argt', points: 57, wins: 0 },
    { position: 5, teamId: 'volante-rosso', points: 30, wins: 0 },
  ],
  otherClasses: [
    {
      className: 'Trophy',
      drivers: [
        { position: 1, driverId: 'stokell', teamId: 'kfc-team-mpc', points: 121, wins: 1 },
        { position: 2, driverId: 'halstead-n2', teamId: 'aed-tigani', points: 110, wins: 1 },
        { position: 3, driverId: 'gardner-a', teamId: 'volante-rosso', points: 77, wins: 0 },
      ],
      constructors: [],
    },
  ],
}
