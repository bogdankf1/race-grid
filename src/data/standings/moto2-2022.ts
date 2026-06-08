import type { SeasonStandings } from './types'

// Moto2 2022 final standings — verified from Wikipedia "2022 Moto2 season", motogp.com final standings
// Champion: Augusto Fernández (Red Bull KTM Ajo) — title sealed at Valencia (Round 20) by 9.5 points
//   over Ai Ogura. Fernández took 4 wins, Ogura 3.
// Kalex extended its run of consecutive constructors' titles (9th in a row).
export const moto2Standings2022: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'fernandez-a', teamId: 'red-bull-ktm-ajo', points: 271.5, wins: 4 },
    { position: 2, driverId: 'ogura', teamId: 'honda-team-asia', points: 262, wins: 3 },
    { position: 3, driverId: 'canet', teamId: 'flexbox-hp40', points: 200, wins: 0 },
    { position: 4, driverId: 'arbolino', teamId: 'marc-vds-moto2', points: 191.5, wins: 3 },
    { position: 5, driverId: 'acosta', teamId: 'red-bull-ktm-ajo', points: 177, wins: 3 },
    { position: 6, driverId: 'dixon-j', teamId: 'aspar-moto2', points: 168.5, wins: 0 },
    { position: 7, driverId: 'vietti', teamId: 'mooney-vr46-moto2', points: 165, wins: 3 },
    { position: 8, driverId: 'lopez-a', teamId: 'speed-up-racing', points: 155.5, wins: 2 },
    { position: 9, driverId: 'roberts-j', teamId: 'italtrans-racing', points: 131, wins: 1 },
    { position: 10, driverId: 'chantra', teamId: 'honda-team-asia', points: 128, wins: 1 },
  ],
  constructors: [
    // Chassis manufacturer standings — Kalex 18 wins, Boscoscuro 2 wins (Alonso López at
    //   San Marino and Australia)
    { position: 1, teamId: 'kalex', points: 478, wins: 18 },
    { position: 2, teamId: 'boscoscuro', points: 211, wins: 2 },
    { position: 3, teamId: 'mv-agusta-forward', points: 5, wins: 0 },
  ],
}
