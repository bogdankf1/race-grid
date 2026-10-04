import type { SeasonStandings } from './types'

// GT World Challenge Australia 2026 standings — verified from gt-world-challenge-australia.com/standings (after Round 5 Sydney, 20 Sep 2026; Adelaide Grand Final 26-29 Nov still to run).
// Pro-Am (headline), Teams, Trophy and SRO GT Academy tables. First-listed driver per crew where the source ties crew members. Wins counted from race results (overall race wins; Trophy class wins).
export const gtwcauStandings2026: SeasonStandings = {
  className: 'Pro-Am',
  drivers: [
    { position: 1, driverId: 'feeney', teamId: 'team-mpc', points: 146, wins: 3 },
    { position: 2, driverId: 'rosser', teamId: 'castrol-team-brm', points: 132, wins: 1 },
    { position: 3, driverId: 'leitch', teamId: 'geyer-valmont-tigani', points: 119, wins: 2 },
    { position: 4, driverId: 'ojeda', teamId: 'move-my-wheels-tigani', points: 106, wins: 2 },
  ],
  constructors: [
    { position: 1, teamId: 'tigani-motorsport', points: 215, wins: 5 },
    { position: 2, teamId: 'team-mpc', points: 170, wins: 3 },
    { position: 3, teamId: 'castrol-team-brm', points: 170, wins: 1 },
    { position: 4, teamId: 'argt', points: 115, wins: 0 },
    { position: 5, teamId: 'onlyfans-racing', points: 104, wins: 1 },
    { position: 6, teamId: 'zagame-autosport', points: 84, wins: 0 },
    { position: 7, teamId: 'wall-racing', points: 54, wins: 0 },
  ],
  otherClasses: [
    {
      className: 'Trophy',
      // Skipped: P6 Gary Higgon (36 pts) — team not identifiable from the sources.
      drivers: [
        { position: 1, driverId: 'stokell', teamId: 'kfc-team-mpc', points: 216, wins: 5 },
        { position: 2, driverId: 'halstead-n2', teamId: 'aed-tigani', points: 191, wins: 4 },
        { position: 3, driverId: 'stoupas', teamId: 'kfc-team-mpc', points: 180, wins: 5 },
        { position: 4, driverId: 'gardner-a', teamId: 'volante-rosso', points: 77, wins: 1 },
        { position: 5, driverId: 'stibbs', teamId: 'volante-rosso', points: 44, wins: 1 },
      ],
      constructors: [],
    },
    {
      className: 'SRO GT Academy',
      drivers: [
        { position: 1, driverId: 'targett', teamId: 'kollosche-tigani', points: 345, wins: 0 },
        { position: 2, driverId: 'astuti', teamId: 'team-mpc', points: 285, wins: 0 },
        { position: 3, driverId: 'gardner-a', teamId: 'volante-rosso', points: 84, wins: 0 },
      ],
      constructors: [],
    },
  ],
}
