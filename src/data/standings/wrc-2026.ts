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
    { position: 8, driverId: 'lappi', teamId: 'hyundai-wrt', points: 21, wins: 0 },
    { position: 9, driverId: 'virves', teamId: 'skoda', points: 10, wins: 0 },
    { position: 10, driverId: 'greensmith', teamId: 'toyota-wrt', points: 8, wins: 0 },
    { position: 11, driverId: 'l-rossel', teamId: 'citroen', points: 8, wins: 0 },
    { position: 12, driverId: 'zaldivar', teamId: 'skoda', points: 6, wins: 0 },
    { position: 13, driverId: 'y-rossel', teamId: 'lancia', points: 6, wins: 0 },
    { position: 14, driverId: 'mikkelsen', teamId: 'hyundai-wrt', points: 4, wins: 0 },
    { position: 15, driverId: 'dapra', teamId: 'skoda', points: 4, wins: 0 },
    { position: 16, driverId: 'armstrong', teamId: 'm-sport-ford', points: 4, wins: 0 },
    { position: 17, driverId: 'dominguez', teamId: 'toyota-wrt', points: 2, wins: 0 },
    { position: 18, driverId: 'pelamourgues', teamId: 'hyundai-wrt', points: 2, wins: 0 },
    { position: 19, driverId: 'mcerlean', teamId: 'm-sport-ford', points: 2, wins: 0 },
    { position: 20, driverId: 'fontana', teamId: 'm-sport-ford', points: 2, wins: 0 },
    { position: 21, driverId: 'korhonen', teamId: 'toyota-wrt', points: 1, wins: 0 },
    { position: 22, driverId: 'camilli', teamId: 'skoda', points: 1, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'toyota-wrt', points: 117, wins: 3 },
    { position: 2, teamId: 'hyundai-wrt', points: 66, wins: 0 },
    { position: 3, teamId: 'toyota-wrt-2', points: 18, wins: 0 },
    { position: 4, teamId: 'm-sport-ford', points: 14, wins: 0 },
  ],
}
