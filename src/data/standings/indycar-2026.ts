import type { SeasonStandings } from './types'

// IndyCar 2026 standings — verified from indycar.com, motorsport.com (after Round 7 Indianapolis 500)
export const indycarStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'palou', teamId: 'chip-ganassi-racing', points: 273, wins: 3 },
    { position: 2, driverId: 'malukas', teamId: 'team-penske', points: 236, wins: 0 },
    { position: 3, driverId: 'kirkwood', teamId: 'andretti-global', points: 224, wins: 1 },
    { position: 4, driverId: 'lundgaard', teamId: 'arrow-mclaren', points: 195, wins: 1 },
    { position: 5, driverId: 'oward', teamId: 'arrow-mclaren', points: 188, wins: 0 },
    { position: 6, driverId: 'mclaughlin', teamId: 'team-penske', points: 181, wins: 0 },
    { position: 7, driverId: 'rosenqvist', teamId: 'meyer-shank-racing', points: 176, wins: 1 },
    { position: 8, driverId: 'newgarden', teamId: 'team-penske', points: 167, wins: 1 },
    { position: 9, driverId: 'dixon', teamId: 'chip-ganassi-racing', points: 167, wins: 0 },
    { position: 10, driverId: 'armstrong', teamId: 'meyer-shank-racing', points: 154, wins: 0 },
  ],
  constructors: [],
}
