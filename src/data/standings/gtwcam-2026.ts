import type { SeasonStandings } from './types'

// GT World Challenge America 2026 standings — after Round 2 (COTA)
// Source: Wikipedia, gt-world-challenge-america.com
export const gtwcamStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'grenier', teamId: 'jmf-motorsports', points: 50, wins: 2 },
    { position: 2, driverId: 'perez-companc', teamId: 'af-corse-usa', points: 30, wins: 0 },
    { position: 3, driverId: 'foley', teamId: 'turner-motorsport', points: 30, wins: 0 },
    { position: 4, driverId: 'lawrence-c', teamId: 'dollahite-racing', points: 25, wins: 0 },
    { position: 5, driverId: 'mccann-jr', teamId: 'mccann-racing', points: 25, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'jmf-motorsports', points: 50, wins: 2 },
    { position: 2, teamId: 'af-corse-usa', points: 30, wins: 0 },
    { position: 3, teamId: 'turner-motorsport', points: 30, wins: 0 },
    { position: 4, teamId: 'dollahite-racing', points: 25, wins: 0 },
    { position: 5, teamId: 'mccann-racing', points: 25, wins: 0 },
  ],
}
