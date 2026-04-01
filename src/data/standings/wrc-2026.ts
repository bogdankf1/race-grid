import type { SeasonStandings } from './types'

// WRC 2026 standings — verified from autohebdof1.com, wrc.com (after Round 3 Kenya)
export const wrcStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'evans', teamId: 'toyota-wrt', points: 66, wins: 1 },
    { position: 2, driverId: 'solberg', teamId: 'toyota-wrt', points: 58, wins: 1 },
    { position: 3, driverId: 'katsuta', teamId: 'toyota-wrt', points: 55, wins: 1 },
    { position: 4, driverId: 'fourmaux', teamId: 'hyundai-wrt', points: 47, wins: 0 },
    { position: 5, driverId: 'pajari', teamId: 'toyota-wrt', points: 32, wins: 0 },
    { position: 6, driverId: 'ogier', teamId: 'toyota-wrt', points: 26, wins: 0 },
    { position: 7, driverId: 'neuville', teamId: 'hyundai-wrt', points: 25, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'toyota-wrt', points: 117, wins: 3 },
    { position: 2, teamId: 'hyundai-wrt', points: 66, wins: 0 },
  ],
}
