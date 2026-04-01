import type { SeasonStandings } from './types'

// DTM 2025 final standings — verified from Wikipedia, dtm.com
// Champion: Ayhancan Güven (Manthey EMA Porsche)
export const dtmStandings2025: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'guven', teamId: 'manthey', points: 192, wins: 5 },
    { position: 2, driverId: 'auer', teamId: 'mercedes-amg-team-landgraf', points: 188, wins: 2 },
    { position: 3, driverId: 'engel', teamId: 'winward-racing', points: 184, wins: 0 },
    { position: 4, driverId: 'preining', teamId: 'manthey', points: 182, wins: 2 },
    { position: 5, driverId: 'wittmann', teamId: 'schubert-motorsport', points: 170, wins: 0 },
    { position: 6, driverId: 'rast', teamId: 'schubert-motorsport', points: 169, wins: 3 },
    { position: 7, driverId: 'pepper', teamId: 'grasser-racing', points: 164, wins: 1 },
    { position: 8, driverId: 'aitken', teamId: 'emil-frey-racing', points: 162, wins: 2 },
    { position: 9, driverId: 'gounon', teamId: 'mann-filter', points: 142, wins: 0 },
    { position: 10, driverId: 'vermeulen', teamId: 'emil-frey-racing', points: 102, wins: 0 },
    { position: 11, driverId: 'feller', teamId: 'land-motorsport', points: 100, wins: 1 },
    { position: 12, driverId: 'engstler', teamId: 'grasser-racing', points: 81, wins: 0 },
    { position: 13, driverId: 'green', teamId: 'emil-frey-racing', points: 79, wins: 0 },
  ],
  constructors: [],
}
