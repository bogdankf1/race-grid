import type { SeasonStandings } from './types'

// Moto3 2023 final standings — verified from motorsport.com, motogp.com,
//   Wikipedia "2023 Moto3 World Championship" and per-rider Wikipedia pages,
//   crash.net, bikesportnews.com
// Verification date: 2026-06-08
// Champion: Jaume Masià (Leopard Racing, Honda) — clinched at Qatar (Round 19)
//   by winning the race; Leopard Racing's fourth Moto3 riders' title in nine
//   seasons (Kent 2015, Mir 2017, Foggia/Dalla Porta 2019, Masià 2023 — Acosta
//   in 2021 was with KTM Ajo)
// Note: Moto3 Rookie of the Year was David Alonso (GasGas Aspar Team); the
//   Teams' Championship was won by Liqui Moly Husqvarna Intact GP (Sasaki/Veijer)
export const moto3Standings2023: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'masia', teamId: 'leopard-racing', points: 274, wins: 4 },
    { position: 2, driverId: 'sasaki-a', teamId: 'intact-gp-husqvarna-moto3', points: 268, wins: 1 },
    { position: 3, driverId: 'alonso-d', teamId: 'gasgas-aspar-team', points: 245, wins: 4 },
    { position: 4, driverId: 'oncu', teamId: 'red-bull-ktm-ajo-moto3', points: 223, wins: 3 },
    { position: 5, driverId: 'holgado', teamId: 'red-bull-ktm-tech3-moto3', points: 220, wins: 3 },
    { position: 6, driverId: 'ortola', teamId: 'angeluss-mta', points: 187, wins: 2 },
    { position: 7, driverId: 'veijer', teamId: 'intact-gp-husqvarna-moto3', points: 149, wins: 1 },
    { position: 8, driverId: 'moreira', teamId: 'mt-helmets-msi-moto3', points: 131, wins: 1 },
    { position: 9, driverId: 'rueda-ja', teamId: 'red-bull-ktm-ajo-moto3', points: 121, wins: 0 },
    { position: 10, driverId: 'munoz-da', teamId: 'boe-motorsports', points: 113, wins: 0 },
  ],
  constructors: [
    // Chassis manufacturer standings — five constructors scored. Each constructor
    //   is awarded points equal to its best-placed rider in every race.
    { position: 1, teamId: 'ktm', points: 394, wins: 9 },
    { position: 2, teamId: 'honda', points: 327, wins: 5 },
    { position: 3, teamId: 'husqvarna', points: 307, wins: 2 },
    { position: 4, teamId: 'gas-gas', points: 270, wins: 4 },
    { position: 5, teamId: 'cfmoto', points: 113, wins: 0 },
  ],
}
