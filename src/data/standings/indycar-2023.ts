import type { SeasonStandings } from './types'

// IndyCar 2023 final standings — verified from indycar.com, Wikipedia
// Champion: Álex Palou (Chip Ganassi Racing) — dominant 2nd title, 7 wins
export const indycarStandings2023: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'palou', teamId: 'chip-ganassi-racing', points: 656, wins: 7 },
    { position: 2, driverId: 'dixon', teamId: 'chip-ganassi-racing', points: 578, wins: 3 },
    { position: 3, driverId: 'mclaughlin', teamId: 'team-penske', points: 488, wins: 1 },
    { position: 4, driverId: 'oward', teamId: 'arrow-mclaren', points: 484, wins: 0 },
    { position: 5, driverId: 'newgarden', teamId: 'team-penske', points: 479, wins: 4 },
    { position: 6, driverId: 'ericsson', teamId: 'chip-ganassi-racing', points: 438, wins: 1 },
    { position: 7, driverId: 'power', teamId: 'team-penske', points: 425, wins: 0 },
    { position: 8, driverId: 'lundgaard', teamId: 'rahal-letterman-lanigan', points: 390, wins: 1 },
    { position: 9, driverId: 'rossi', teamId: 'arrow-mclaren', points: 375, wins: 0 },
    { position: 10, driverId: 'herta', teamId: 'andretti-autosport', points: 356, wins: 0 },
  ],
  constructors: [],
}
