import type { SeasonStandings } from './types'

// IndyCar 2024 final standings — verified from indycar.com, nbcsports.com
// Champion: Álex Palou (Chip Ganassi Racing) — 3rd title, back-to-back
export const indycarStandings2024: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'palou', teamId: 'chip-ganassi-racing', points: 544, wins: 2 },
    { position: 2, driverId: 'herta', teamId: 'andretti-global', points: 513, wins: 2 },
    { position: 3, driverId: 'mclaughlin', teamId: 'team-penske', points: 499, wins: 3 },
    { position: 4, driverId: 'power', teamId: 'team-penske', points: 489, wins: 3 },
    { position: 5, driverId: 'newgarden', teamId: 'team-penske', points: 478, wins: 2 },
    { position: 6, driverId: 'oward', teamId: 'arrow-mclaren', points: 475, wins: 3 },
    { position: 7, driverId: 'dixon', teamId: 'chip-ganassi-racing', points: 453, wins: 2 },
    { position: 8, driverId: 'rosenqvist', teamId: 'meyer-shank-racing', points: 306, wins: 0 },
    { position: 9, driverId: 'kirkwood', teamId: 'andretti-global', points: 302, wins: 0 },
    { position: 10, driverId: 'veekay', teamId: 'ed-carpenter-racing', points: 300, wins: 0 },
  ],
  constructors: [],
}
