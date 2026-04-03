import type { SeasonStandings } from './types'

// WRC 2025 final standings — verified from wrc.com, Wikipedia
export const wrcStandings2025: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'ogier', teamId: 'toyota-wrt', points: 293, wins: 6 },
    { position: 2, driverId: 'evans', teamId: 'toyota-wrt', points: 289, wins: 2 },
    { position: 3, driverId: 'rovanpera', teamId: 'toyota-wrt', points: 256, wins: 3 },
    { position: 4, driverId: 'tanak', teamId: 'hyundai-wrt', points: 216, wins: 1 },
    { position: 5, driverId: 'neuville', teamId: 'hyundai-wrt', points: 194, wins: 1 },
    { position: 6, driverId: 'katsuta', teamId: 'toyota-wrt', points: 122, wins: 0 },
    { position: 7, driverId: 'fourmaux', teamId: 'hyundai-wrt', points: 115, wins: 0 },
    { position: 8, driverId: 'pajari', teamId: 'toyota-wrt', points: 107, wins: 0 },
    { position: 9, driverId: 'solberg', teamId: 'toyota-wrt', points: 71, wins: 1 },
    { position: 10, driverId: 'munster', teamId: 'm-sport-ford', points: 40, wins: 0 },
    { position: 11, driverId: 'mcerlean', teamId: 'm-sport-ford', points: 28, wins: 0 },
    { position: 12, driverId: 'sesks', teamId: 'm-sport-ford', points: 16, wins: 0 },
    { position: 13, driverId: 'serderidis', teamId: 'm-sport-ford', points: 4, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'toyota-wrt', points: 735, wins: 12 },
    { position: 2, teamId: 'hyundai-wrt', points: 511, wins: 2 },
    { position: 3, teamId: 'm-sport-ford', points: 205, wins: 0 },
  ],
}
