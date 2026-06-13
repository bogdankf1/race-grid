import type { SeasonStandings } from './types'

// IndyCar 2026 standings — verified from indycar.com, Wikipedia "2026 IndyCar Series" (after Round 9 Gateway/WWTR)
// Wins counted from race results data.
export const indycarStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'palou', teamId: 'chip-ganassi-racing', points: 342, wins: 4 },
    { position: 2, driverId: 'kirkwood', teamId: 'andretti-global', points: 293, wins: 1 },
    { position: 3, driverId: 'malukas', teamId: 'team-penske', points: 274, wins: 0 },
    { position: 4, driverId: 'lundgaard', teamId: 'arrow-mclaren', points: 246, wins: 1 },
    { position: 5, driverId: 'oward', teamId: 'arrow-mclaren', points: 239, wins: 0 },
    { position: 6, driverId: 'newgarden', teamId: 'team-penske', points: 238, wins: 2 },
    { position: 7, driverId: 'mclaughlin', teamId: 'team-penske', points: 222, wins: 0 },
    { position: 8, driverId: 'rosenqvist', teamId: 'meyer-shank-racing', points: 221, wins: 1 },
    { position: 9, driverId: 'ericsson', teamId: 'andretti-global', points: 196, wins: 0 },
    { position: 10, driverId: 'armstrong', teamId: 'meyer-shank-racing', points: 196, wins: 0 },
    { position: 11, driverId: 'rahal', teamId: 'rahal-letterman-lanigan', points: 193, wins: 0 },
    { position: 12, driverId: 'dixon', teamId: 'chip-ganassi-racing', points: 192, wins: 0 },
    { position: 13, driverId: 'veekay', teamId: 'juncos-hollinger', points: 175, wins: 0 },
    { position: 14, driverId: 'rossi', teamId: 'ed-carpenter-racing', points: 152, wins: 0 },
    { position: 15, driverId: 'simpson', teamId: 'chip-ganassi-racing', points: 147, wins: 0 },
  ],
  constructors: [],
}
