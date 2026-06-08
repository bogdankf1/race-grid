import type { SeasonStandings } from './types'

// Moto2 2021 final standings — verified from Wikipedia "2021 Moto2 season"; motogp.com final standings
// Champion: Remy Gardner (Red Bull KTM Ajo) — title sealed at Valencia (Round 18) by 4 points over
//   teammate Raúl Fernández. Gardner had 5 wins, Fernández 8.
// Kalex extended its run of consecutive constructors' titles (every year since 2014).
export const moto2Standings2021: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'gardner-r', teamId: 'red-bull-ktm-ajo', points: 311, wins: 5 },
    { position: 2, driverId: 'fernandez-r', teamId: 'red-bull-ktm-ajo', points: 307, wins: 8 },
    { position: 3, driverId: 'bezzecchi', teamId: 'sky-vr46-moto2', points: 214, wins: 1 },
    { position: 4, driverId: 'lowes', teamId: 'marc-vds-moto2', points: 190, wins: 3 },
    { position: 5, driverId: 'fernandez-a', teamId: 'marc-vds-moto2', points: 174, wins: 0 },
    { position: 6, driverId: 'canet', teamId: 'aspar-moto2', points: 164, wins: 0 },
    { position: 7, driverId: 'di-giannantonio', teamId: 'gresini-moto2', points: 161, wins: 1 },
    { position: 8, driverId: 'ogura', teamId: 'honda-team-asia', points: 120, wins: 0 },
    { position: 9, driverId: 'navarro-j', teamId: 'speed-up-racing', points: 106, wins: 0 },
    { position: 10, driverId: 'schrotter', teamId: 'intact-gp', points: 98, wins: 0 },
  ],
  constructors: [
    // Chassis manufacturer standings — Kalex took all 18 wins in 2021 (8th consecutive title).
    //   Boscoscuro (Speed Up factory-rebranded) and MV Agusta Forward scored without victories.
    { position: 1, teamId: 'kalex', points: 450, wins: 18 },
    { position: 2, teamId: 'boscoscuro', points: 199, wins: 0 },
    { position: 3, teamId: 'mv-agusta-forward', points: 0, wins: 0 },
  ],
}
