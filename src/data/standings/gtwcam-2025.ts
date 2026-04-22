import type { SeasonStandings } from './types'

// GT World Challenge America 2025 standings — final (after Indianapolis 8H)
// Source: Wikipedia / gt-world-challenge-america.com
export const gtwcamStandings2025: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'de-phillippi', teamId: 'random-vandals-racing', points: 283.5, wins: 6 },
    { position: 2, driverId: 'grenier', teamId: 'jmf-motorsports', points: 248.5, wins: 3 },
    { position: 3, driverId: 'heylen', teamId: 'rs1', points: 236, wins: 2 },
    { position: 4, driverId: 'auberlen', teamId: 'random-vandals-racing', points: 177, wins: 0 },
    { position: 5, driverId: 'foley', teamId: 'turner-motorsport', points: 260, wins: 5 },
    { position: 6, driverId: 'bell-m', teamId: 'dxdt-racing', points: 195, wins: 3 },
    { position: 7, driverId: 'burton-j', teamId: 'regulator-racing', points: 156.5, wins: 2 },
    { position: 8, driverId: 'newell-g', teamId: 'heart-of-racing', points: 144, wins: 0 },
    { position: 9, driverId: 'sargent-t', teamId: 'gmg-racing', points: 134, wins: 0 },
    { position: 10, driverId: 'coleman-t', teamId: 'archangel-motorsports', points: 119, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'random-vandals-racing', points: 296.5, wins: 6 },
    { position: 2, teamId: 'jmf-motorsports', points: 253, wins: 3 },
    { position: 3, teamId: 'rs1', points: 243.5, wins: 2 },
    { position: 4, teamId: 'turner-motorsport', points: 260, wins: 5 },
    { position: 5, teamId: 'dxdt-racing', points: 195, wins: 3 },
  ],
}
