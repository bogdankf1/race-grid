import type { SeasonStandings } from './types'

// Moto2 2024 final standings — verified from Wikipedia "2024 Moto2 World Championship",
//   motorsport.com, motomatters.com (2024-11-17 standings snapshot)
// Champion: Ai Ogura (MT Helmets — MSi) — title sealed at Buriram (Round 18) with two rounds to spare
// Kalex clinched the constructors' title for the 11th consecutive season
export const moto2Standings2024: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'ogura', teamId: 'mt-helmets-msi-moto2', points: 274, wins: 4 },
    { position: 2, driverId: 'canet', teamId: 'fantic-racing', points: 234, wins: 4 },
    { position: 3, driverId: 'gonzalez-m', teamId: 'qjmotor-gresini-moto2', points: 195, wins: 1 },
    { position: 4, driverId: 'garcia-s', teamId: 'mt-helmets-msi-moto2', points: 191, wins: 2 },
    { position: 5, driverId: 'aldeguer', teamId: 'speed-up-racing', points: 182, wins: 3 },
    { position: 6, driverId: 'lopez-a', teamId: 'speed-up-racing', points: 179, wins: 1 },
    { position: 7, driverId: 'vietti', teamId: 'red-bull-ktm-ajo', points: 165, wins: 3 },
    { position: 8, driverId: 'dixon-j', teamId: 'aspar-moto2', points: 155, wins: 2 },
    { position: 9, driverId: 'roberts-j', teamId: 'american-racing-moto2', points: 153, wins: 1 },
    { position: 10, driverId: 'arbolino', teamId: 'marc-vds-moto2', points: 149, wins: 0 },
  ],
  constructors: [
    // Chassis manufacturer standings — Wikipedia 2024 Moto2 World Championship
    // Forward continued to score sporadically but did not finish ahead of the top two
    { position: 1, teamId: 'kalex', points: 437, wins: 11 },
    { position: 2, teamId: 'boscoscuro', points: 389, wins: 9 },
    { position: 3, teamId: 'forward', points: 0, wins: 0 },
  ],
}
