import type { SeasonStandings } from './types'

// GT World Challenge America 2026 Pro standings — after Round 3 (Sebring)
// Source: Wikipedia 2026 GT World Challenge America
export const gtwcamStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'grenier', teamId: 'jmf-motorsports', points: 60, wins: 2 },
    { position: 2, driverId: 'foley', teamId: 'turner-motorsport', points: 55, wins: 1 },
    { position: 3, driverId: 'perez-companc', teamId: 'af-corse-usa', points: 45, wins: 0 },
    { position: 4, driverId: 'lawrence-c', teamId: 'dollahite-racing', points: 43, wins: 0 },
    { position: 5, driverId: 'mccann-jr', teamId: 'mccann-racing', points: 37, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'jmf-motorsports', points: 60, wins: 2 },
    { position: 2, teamId: 'turner-motorsport', points: 55, wins: 1 },
    { position: 3, teamId: 'af-corse-usa', points: 45, wins: 0 },
    { position: 4, teamId: 'dollahite-racing', points: 43, wins: 0 },
    { position: 5, teamId: 'mccann-racing', points: 37, wins: 0 },
  ],
}
