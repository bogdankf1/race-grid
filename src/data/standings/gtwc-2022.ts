import type { SeasonStandings } from './types'
// GTWC Europe 2022 final standings — verified from gt-world-challenge-europe.com, Wikipedia
// Overall Champion: Raffaele Marciello (Akkodis ASP)
export const gtwcStandings2022: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'marciello', teamId: 'akkodis-asp', points: 156, wins: 4 },
    { position: 2, driverId: 'vanthoor', teamId: 'team-wrt', points: 130, wins: 3 },
  ],
  constructors: [
    { position: 1, teamId: 'akkodis-asp', points: 156, wins: 4 },
    { position: 2, teamId: 'team-wrt', points: 130, wins: 3 },
  ],
}
