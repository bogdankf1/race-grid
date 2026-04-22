import type { SeasonStandings } from './types'

// GT World Challenge Australia 2026 standings — after Round 1 (Phillip Island, 2 races)
// Source: gt-world-challenge-australia.com / pitdebrief.com
export const gtwcauStandings2026: SeasonStandings = {
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
}
