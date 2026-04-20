import type { SeasonStandings } from './types'

// IndyCar 2022 final standings — verified from indycar.com, Wikipedia
// Champion: Will Power (Team Penske) — 2nd title, won on consistency
export const indycarStandings2022: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'power', teamId: 'team-penske', points: 560, wins: 1 },
    { position: 2, driverId: 'newgarden', teamId: 'team-penske', points: 544, wins: 5 },
    { position: 3, driverId: 'dixon', teamId: 'chip-ganassi-racing', points: 521, wins: 2 },
    { position: 4, driverId: 'mclaughlin', teamId: 'team-penske', points: 510, wins: 3 },
    { position: 5, driverId: 'palou', teamId: 'chip-ganassi-racing', points: 510, wins: 1 },
    { position: 6, driverId: 'ericsson', teamId: 'chip-ganassi-racing', points: 506, wins: 1 },
    { position: 7, driverId: 'oward', teamId: 'arrow-mclaren', points: 480, wins: 2 },
    { position: 8, driverId: 'rosenqvist', teamId: 'arrow-mclaren', points: 393, wins: 0 },
    { position: 9, driverId: 'rossi', teamId: 'andretti-autosport', points: 381, wins: 1 },
    { position: 10, driverId: 'herta', teamId: 'andretti-autosport', points: 381, wins: 1 },
  ],
  constructors: [],
}
