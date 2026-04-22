import type { SeasonStandings } from './types'

// British GT Championship 2025 standings — final GT3 (after Donington R9)
// Source: Wikipedia / britishgt.com
export const britgtStandings2025: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'dawson', teamId: 'two-seas-motorsport', points: 173.5, wins: 3 },
    { position: 2, driverId: 'cook-h', teamId: 'barwell-motorsport', points: 144, wins: 0 },
    { position: 3, driverId: 'gotz', teamId: 'two-seas-motorsport', points: 141.5, wins: 3 },
    { position: 4, driverId: 'martin-a', teamId: 'barwell-motorsport', points: 139, wins: 1 },
    { position: 5, driverId: 'collard', teamId: 'barwell-motorsport', points: 132, wins: 0 },
    { position: 6, driverId: 'adam-j', teamId: 'blackthorn-racing', points: 130, wins: 1 },
    { position: 7, driverId: 'kirchhofer', teamId: 'optimum-motorsport', points: 127, wins: 0 },
    { position: 8, driverId: 'mitchell-s', teamId: 'barwell-motorsport', points: 107.5, wins: 0 },
    { position: 9, driverId: 'clutton', teamId: 'orange-racing', points: 64, wins: 0 },
    { position: 10, driverId: 'howard-a', teamId: 'beechdean-motorsport', points: 58, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'two-seas-motorsport', points: 0, wins: 6 },
    { position: 2, teamId: 'barwell-motorsport', points: 0, wins: 2 },
    { position: 3, teamId: 'optimum-motorsport', points: 0, wins: 0 },
  ],
  className: 'GT3',
}
