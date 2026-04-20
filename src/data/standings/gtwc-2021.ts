import type { SeasonStandings } from './types'
// GTWC Europe 2021 final standings — verified from gt-world-challenge-europe.com, Wikipedia
// Overall Champions: Dries Vanthoor / Charles Weerts (Team WRT)
export const gtwcStandings2021: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'vanthoor', teamId: 'team-wrt', points: 182, wins: 6 },
    { position: 2, driverId: 'marciello', teamId: 'akkodis-asp', points: 140, wins: 3 },
  ],
  constructors: [
    { position: 1, teamId: 'team-wrt', points: 182, wins: 6 },
    { position: 2, teamId: 'akkodis-asp', points: 140, wins: 3 },
  ],
}
