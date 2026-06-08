import type { SeasonStandings } from './types'

// Moto3 2022 final standings — verified from motorsport.com, motogp.com,
//   Wikipedia "2022 Moto3 World Championship", crash.net, bikesportnews.com
// Verification date: 2026-06-08
// Champion: Izan Guevara (Gaviota GasGas Aspar Team) — clinched at Australia
//   (Round 18) with two rounds to spare; first World Championship for the
//   GasGas brand (Pierer Mobility) and first Aspar Moto3 Teams' title
// Note: Guevara took 7 race wins from 20 rounds (the 8th-credited Mugello win
//   was lost on track-limits penalty to team-mate García); rookie of the year
//   was Daniel Holgado who finished 10th with one podium at Aragon
// Note: Masià is listed with 2 wins (USA, France) per Wikipedia rider article
export const moto3Standings2022: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'guevara', teamId: 'gaviota-gasgas-aspar', points: 319, wins: 7 },
    { position: 2, driverId: 'garcia-s', teamId: 'gaviota-gasgas-aspar', points: 257, wins: 3 },
    { position: 3, driverId: 'foggia', teamId: 'leopard-racing', points: 246, wins: 4 },
    { position: 4, driverId: 'sasaki-a', teamId: 'sterilgarda-max-racing', points: 238, wins: 2 },
    { position: 5, driverId: 'oncu', teamId: 'red-bull-ktm-tech3-moto3', points: 200, wins: 0 },
    { position: 6, driverId: 'masia', teamId: 'red-bull-ktm-ajo-moto3', points: 177, wins: 2 },
    { position: 7, driverId: 'suzuki-t', teamId: 'leopard-racing', points: 130, wins: 0 },
    { position: 8, driverId: 'moreira', teamId: 'mt-helmets-msi-moto3', points: 112, wins: 0 },
    { position: 9, driverId: 'migno', teamId: 'rivacold-snipers', points: 103, wins: 1 },
    { position: 10, driverId: 'holgado', teamId: 'red-bull-ktm-ajo-moto3', points: 103, wins: 0 },
  ],
  constructors: [
    // Chassis manufacturer standings — five constructors scored (CFMoto's
    //   debut Moto3 season). Each constructor is awarded points equal to its
    //   best-placed rider in every race.
    { position: 1, teamId: 'gas-gas', points: 389, wins: 10 },
    { position: 2, teamId: 'honda', points: 330, wins: 5 },
    { position: 3, teamId: 'ktm', points: 323, wins: 2 },
    { position: 4, teamId: 'husqvarna', points: 279, wins: 3 },
    { position: 5, teamId: 'cfmoto', points: 130, wins: 0 },
  ],
}
