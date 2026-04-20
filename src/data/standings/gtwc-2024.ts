import type { SeasonStandings } from './types'
// GTWC Europe 2024 final standings — verified from gt-world-challenge-europe.com, Wikipedia
// Overall Champions: Lucas Auer / Maro Engel (Winward Racing)
export const gtwcStandings2024: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'auer', teamId: 'winward-racing', points: 137, wins: 3 },
    { position: 2, driverId: 'weerts', teamId: 'team-wrt', points: 121, wins: 2 },
  ],
  constructors: [
    { position: 1, teamId: 'team-wrt', points: 156, wins: 4 },
    { position: 2, teamId: 'winward-racing', points: 137, wins: 3 },
  ],
}
