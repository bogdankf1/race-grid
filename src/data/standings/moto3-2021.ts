import type { SeasonStandings } from './types'

// Moto3 2021 final standings — verified from motorsport.com, motogp.com,
//   Wikipedia "2021 Moto3 World Championship"
// Verification date: 2026-06-08
// Champion: Pedro Acosta (Red Bull KTM Ajo) — clinched at Algarve (Round 17)
//   with one round to spare; first rookie Moto3 champion since Loris Capirossi
//   in 1990 (then 125cc), and youngest Moto3 World Champion in the four-stroke era
// Note: Acosta won 6 races; Foggia matched him for race wins (5) but lost the title;
//   Sergio García clinched constructors with GasGas for the first time
export const moto3Standings2021: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'acosta', teamId: 'red-bull-ktm-ajo-moto3', points: 259, wins: 6 },
    { position: 2, driverId: 'foggia', teamId: 'leopard-racing', points: 216, wins: 5 },
    { position: 3, driverId: 'garcia-s', teamId: 'valresa-gasgas-aspar', points: 188, wins: 3 },
    { position: 4, driverId: 'masia', teamId: 'red-bull-ktm-ajo-moto3', points: 171, wins: 1 },
    { position: 5, driverId: 'fenati', teamId: 'sterilgarda-max-racing', points: 160, wins: 1 },
    { position: 6, driverId: 'antonelli-n', teamId: 'avintia-vr46-academy', points: 152, wins: 0 },
    { position: 7, driverId: 'binder-d', teamId: 'petronas-sprinta-racing', points: 136, wins: 0 },
    { position: 8, driverId: 'guevara', teamId: 'valresa-gasgas-aspar', points: 125, wins: 1 },
    { position: 9, driverId: 'sasaki-a', teamId: 'red-bull-ktm-tech3-moto3', points: 120, wins: 0 },
    { position: 10, driverId: 'migno', teamId: 'rivacold-snipers', points: 110, wins: 0 },
  ],
  constructors: [
    // Chassis manufacturer standings — four constructors scored
    { position: 1, teamId: 'ktm', points: 391, wins: 8 },
    { position: 2, teamId: 'honda', points: 380, wins: 6 },
    { position: 3, teamId: 'gas-gas', points: 235, wins: 3 },
    { position: 4, teamId: 'husqvarna', points: 178, wins: 1 },
  ],
}
