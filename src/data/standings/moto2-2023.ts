import type { SeasonStandings } from './types'

// Moto2 2023 final standings — verified from Wikipedia "2023 Moto2 season", motogp.com final standings
// Champion: Pedro Acosta (Red Bull KTM Ajo) — youngest intermediate-class champion since Pedrosa;
//   title sealed at Sepang (Round 18) with two rounds to spare. Acosta took 7 wins, Aldeguer 5.
// Kalex extended its run of consecutive constructors' titles (10th in a row).
export const moto2Standings2023: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'acosta', teamId: 'red-bull-ktm-ajo', points: 332.5, wins: 7 },
    { position: 2, driverId: 'arbolino', teamId: 'marc-vds-moto2', points: 249.5, wins: 3 },
    { position: 3, driverId: 'aldeguer', teamId: 'speed-up-racing', points: 212, wins: 5 },
    { position: 4, driverId: 'dixon-j', teamId: 'aspar-moto2', points: 204, wins: 2 },
    { position: 5, driverId: 'canet', teamId: 'pons-wegow-los40', points: 195, wins: 0 },
    { position: 6, driverId: 'chantra', teamId: 'honda-team-asia', points: 173.5, wins: 1 },
    { position: 7, driverId: 'lopez-a', teamId: 'speed-up-racing', points: 150, wins: 0 },
    { position: 8, driverId: 'gonzalez-m', teamId: 'correos-yamaha-vr46-moto2', points: 145.5, wins: 0 },
    { position: 9, driverId: 'ogura', teamId: 'honda-team-asia', points: 137.5, wins: 0 },
    { position: 10, driverId: 'vietti', teamId: 'fantic-racing', points: 116, wins: 1 },
  ],
  constructors: [
    // Chassis manufacturer standings — Kalex's 11th consecutive constructors' title (sealed at
    //   Motegi). Boscoscuro continued to close the gap with 6 wins from Aldeguer.
    { position: 1, teamId: 'kalex', points: 482, wins: 15 },
    { position: 2, teamId: 'boscoscuro', points: 332, wins: 5 },
    { position: 3, teamId: 'forward', points: 24, wins: 0 },
  ],
}
