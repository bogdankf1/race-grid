import type { SeasonStandings } from './types'

// GT World Challenge Australia 2025 standings — final (after Hampton Downs)
// Source: Wikipedia / gt-world-challenge-australia.com
export const gtwcauStandings2025: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'feeney', teamId: 'team-mpc', points: 211, wins: 3 },
    { position: 2, driverId: 'evans-j', teamId: 'arise-racing-gt', points: 207, wins: 4 },
    { position: 3, driverId: 'lucchitti', teamId: 'tigani-motorsport', points: 154, wins: 0 },
    { position: 4, driverId: 'brooks', teamId: 'team-mpc', points: 123, wins: 0 },
    { position: 5, driverId: 'talbot', teamId: 'volante-rosso', points: 117, wins: 1 },
    { position: 6, driverId: 'king-g', teamId: 'tigani-motorsport', points: 86, wins: 0 },
    { position: 7, driverId: 'wyatt', teamId: 'arise-racing-gt', points: 80, wins: 0 },
    { position: 8, driverId: 'peroni', teamId: 'team-brm', points: 78, wins: 2 },
    { position: 9, driverId: 'pires-s', teamId: 'tigani-motorsport', points: 64, wins: 0 },
    { position: 10, driverId: 'love-j', teamId: 'arise-racing-gt', points: 58, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'team-mpc', points: 237, wins: 3 },
    { position: 2, teamId: 'arise-racing-gt', points: 231, wins: 4 },
    { position: 3, teamId: 'tigani-motorsport', points: 183, wins: 0 },
    { position: 4, teamId: 'volante-rosso', points: 128, wins: 1 },
    { position: 5, teamId: 'team-brm', points: 104, wins: 2 },
  ],
}
