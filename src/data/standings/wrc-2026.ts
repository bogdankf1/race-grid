import type { SeasonStandings } from './types'

// WRC 2026 standings — after Round 5 (Canary Islands)
// Source: autohebdof1.com, wrc.com
export const wrcStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'evans', teamId: 'toyota-wrt', points: 101, wins: 0 },
    { position: 2, driverId: 'katsuta', teamId: 'toyota-wrt', points: 99, wins: 2 },
    { position: 3, driverId: 'pajari', teamId: 'toyota-wrt', points: 72, wins: 0 },
    { position: 4, driverId: 'solberg', teamId: 'toyota-wrt', points: 68, wins: 0 },
    { position: 5, driverId: 'fourmaux', teamId: 'hyundai-wrt', points: 59, wins: 0 },
    { position: 6, driverId: 'ogier', teamId: 'toyota-wrt', points: 58, wins: 1 },
    { position: 7, driverId: 'neuville', teamId: 'hyundai-wrt', points: 35, wins: 0 },
    { position: 8, driverId: 'lappi', teamId: 'hyundai-wrt', points: 21, wins: 0 },
    { position: 9, driverId: 'y-rossel', teamId: 'lancia', points: 20, wins: 0 },
    { position: 10, driverId: 'l-rossel', teamId: 'citroen', points: 18, wins: 0 },
    { position: 11, driverId: 'paddon', teamId: 'hyundai-wrt', points: 15, wins: 0 },
    { position: 12, driverId: 'virves', teamId: 'skoda', points: 10, wins: 0 },
    { position: 13, driverId: 'j-armstrong', teamId: 'm-sport-ford', points: 10, wins: 0 },
    { position: 14, driverId: 'greensmith', teamId: 'toyota-wrt', points: 8, wins: 0 },
    { position: 15, driverId: 'gryazin', teamId: 'lancia', points: 8, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'toyota-wrt', points: 265, wins: 5 },
    { position: 2, teamId: 'hyundai-wrt', points: 167, wins: 0 },
    { position: 3, teamId: 'toyota-wrt-2', points: 75, wins: 0 },
    { position: 4, teamId: 'm-sport-ford', points: 63, wins: 0 },
  ],
}
