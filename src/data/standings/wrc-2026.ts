import type { SeasonStandings } from './types'

// WRC 2026 standings — after Round 6 (Rally Portugal)
// Source: motorsport.com, autohebdof1.com, wrc.com
export const wrcStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'evans', teamId: 'toyota-wrt', points: 123, wins: 2 },
    { position: 2, driverId: 'katsuta', teamId: 'toyota-wrt', points: 111, wins: 2 },
    { position: 3, driverId: 'solberg', teamId: 'toyota-wrt', points: 92, wins: 1 },
    { position: 4, driverId: 'fourmaux', teamId: 'hyundai-wrt', points: 79, wins: 0 },
    { position: 5, driverId: 'pajari', teamId: 'toyota-wrt-2', points: 78, wins: 0 },
    { position: 6, driverId: 'ogier', teamId: 'toyota-wrt', points: 67, wins: 1 },
    { position: 7, driverId: 'neuville', teamId: 'hyundai-wrt', points: 65, wins: 1 },
    { position: 8, driverId: 'lappi', teamId: 'hyundai-wrt', points: 21, wins: 0 },
    { position: 9, driverId: 'y-rossel', teamId: 'lancia', points: 20, wins: 0 },
    { position: 10, driverId: 'l-rossel', teamId: 'citroen', points: 18, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'toyota-wrt', points: 311, wins: 5 },
    { position: 2, teamId: 'hyundai-wrt', points: 218, wins: 1 },
    { position: 3, teamId: 'toyota-wrt-2', points: 86, wins: 0 },
    { position: 4, teamId: 'm-sport-ford', points: 71, wins: 0 },
  ],
}
