import type { SeasonStandings } from './types'
// GTWC Europe 2023 final standings — verified from gt-world-challenge-europe.com, Wikipedia
// Overall Champions: Boguslavskiy/Marciello (Akkodis ASP)
export const gtwcStandings2023: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'marciello', teamId: 'akkodis-asp', points: 148, wins: 3 },
    { position: 2, driverId: 'weerts', teamId: 'team-wrt', points: 125, wins: 2 },
  ],
  constructors: [
    { position: 1, teamId: 'akkodis-asp', points: 148, wins: 3 },
    { position: 2, teamId: 'team-wrt', points: 125, wins: 2 },
  ],
}
