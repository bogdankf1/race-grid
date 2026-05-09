import type { SeasonStandings } from './types'

// Michelin Le Mans Cup 2026 LMP3 standings after Round 2 (Le Castellet)
// Source: lemanscup.com — verified May 2026
export const mlmcStandings2026: SeasonStandings = {
  className: 'LMP3',
  drivers: [
    { position: 1, driverId: 'frost-d', teamId: 'r-ace-gp', points: 44, wins: 1 },
    { position: 1, driverId: 'peugeot-e', teamId: 'r-ace-gp', points: 44, wins: 1 },
    { position: 3, driverId: 'maschio', teamId: '23events-racing', points: 43, wins: 1 },
    { position: 3, driverId: 'queen', teamId: '23events-racing', points: 43, wins: 1 },
  ],
  constructors: [],
}
