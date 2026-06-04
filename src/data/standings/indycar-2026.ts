import type { SeasonStandings } from './types'

// IndyCar 2026 standings — verified from indycar.com, motorsport.com, autohebdof1.com (after Round 8 Detroit GP)
export const indycarStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'palou', teamId: 'chip-ganassi-racing', points: 327, wins: 4 },
    { position: 2, driverId: 'kirkwood', teamId: 'andretti-global', points: 265, wins: 1 },
    { position: 3, driverId: 'malukas', teamId: 'team-penske', points: 248, wins: 0 },
    { position: 4, driverId: 'lundgaard', teamId: 'arrow-mclaren', points: 226, wins: 1 },
    { position: 5, driverId: 'oward', teamId: 'arrow-mclaren', points: 220, wins: 0 },
    { position: 6, driverId: 'rosenqvist', teamId: 'meyer-shank-racing', points: 205, wins: 1 },
    { position: 7, driverId: 'mclaughlin', teamId: 'team-penske', points: 192, wins: 0 },
    { position: 8, driverId: 'newgarden', teamId: 'team-penske', points: 187, wins: 1 },
    { position: 9, driverId: 'rahal', teamId: 'rahal-letterman-lanigan', points: 186, wins: 0 },
    { position: 10, driverId: 'armstrong', teamId: 'meyer-shank-racing', points: 174, wins: 0 },
  ],
  constructors: [],
}
