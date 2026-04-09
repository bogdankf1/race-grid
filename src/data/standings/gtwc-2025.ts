import type { SeasonStandings } from './types'

// GTWC Europe 2025 overall standings — verified from gt-world-challenge-europe.com, press.bmwgroup.com
// Champions: K. van der Linde & Weerts (Team WRT BMW)
export const gtwcStandings2025: SeasonStandings = {
  className: 'Overall (Pro)',
  drivers: [
    { position: 1, driverId: 'k-van-der-linde', teamId: 'team-wrt', points: 134, wins: 3 },
    { position: 2, driverId: 'engstler', teamId: 'grasser-racing', points: 115, wins: 4 },
    { position: 3, driverId: 'kirchhofer', teamId: 'garage-59', points: 108, wins: 2 },
    { position: 4, driverId: 'rovera', teamId: 'ferrari-af-corse', points: 96, wins: 2 },
    { position: 5, driverId: 'engel', teamId: 'mann-filter', points: 85, wins: 1 },
  ],
  constructors: [
    { position: 1, teamId: 'team-wrt', points: 168, wins: 4 },
    { position: 2, teamId: 'grasser-racing', points: 145, wins: 5 },
    { position: 3, teamId: 'garage-59', points: 132, wins: 3 },
    { position: 4, teamId: 'mann-filter', points: 110, wins: 1 },
    { position: 5, teamId: 'ferrari-af-corse', points: 96, wins: 2 },
  ],
}
