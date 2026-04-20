import type { SeasonStandings } from './types'

// IndyCar 2021 final standings — verified from indycar.com, Wikipedia
// Champion: Álex Palou (Chip Ganassi Racing)
export const indycarStandings2021: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'palou', teamId: 'chip-ganassi-racing', points: 549, wins: 3 },
    { position: 2, driverId: 'newgarden', teamId: 'team-penske', points: 511, wins: 2 },
    { position: 3, driverId: 'oward', teamId: 'arrow-mclaren', points: 487, wins: 2 },
    { position: 4, driverId: 'dixon', teamId: 'chip-ganassi-racing', points: 481, wins: 1 },
    { position: 5, driverId: 'herta', teamId: 'andretti-autosport', points: 455, wins: 3 },
    { position: 6, driverId: 'ericsson', teamId: 'chip-ganassi-racing', points: 435, wins: 2 },
    { position: 7, driverId: 'rahal', teamId: 'rahal-letterman-lanigan', points: 389, wins: 0 },
    { position: 8, driverId: 'power', teamId: 'team-penske', points: 357, wins: 1 },
    { position: 9, driverId: 'rossi', teamId: 'andretti-autosport', points: 332, wins: 0 },
    { position: 10, driverId: 'castroneves', teamId: 'meyer-shank-racing', points: 246, wins: 1 },
  ],
  constructors: [],
}
