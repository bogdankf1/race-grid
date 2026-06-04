import type { SeasonStandings } from './types'

// WRC 2026 standings — after Round 7 (Rally Japan)
// Source: motorsport.com, autohebdof1.com, wrc.com
export const wrcStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'evans', teamId: 'toyota-wrt', points: 151, wins: 3 },
    { position: 2, driverId: 'katsuta', teamId: 'toyota-wrt', points: 131, wins: 2 },
    { position: 3, driverId: 'solberg', teamId: 'toyota-wrt', points: 102, wins: 1 },
    { position: 4, driverId: 'pajari', teamId: 'toyota-wrt-2', points: 96, wins: 0 },
    { position: 5, driverId: 'ogier', teamId: 'toyota-wrt', points: 90, wins: 1 },
    { position: 6, driverId: 'fourmaux', teamId: 'hyundai-wrt', points: 79, wins: 0 },
    { position: 7, driverId: 'neuville', teamId: 'hyundai-wrt', points: 65, wins: 1 },
    { position: 8, driverId: 'lappi', teamId: 'hyundai-wrt', points: 21, wins: 0 },
    { position: 9, driverId: 'y-rossel', teamId: 'lancia', points: 20, wins: 0 },
    { position: 10, driverId: 'l-rossel', teamId: 'citroen', points: 18, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'toyota-wrt', points: 374, wins: 6 },
    { position: 2, teamId: 'hyundai-wrt', points: 233, wins: 1 },
    { position: 3, teamId: 'toyota-wrt-2', points: 104, wins: 0 },
    { position: 4, teamId: 'm-sport-ford', points: 71, wins: 0 },
  ],
}
