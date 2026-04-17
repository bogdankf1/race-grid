import type { SeasonStandings } from './types'

// Michelin Le Mans Cup 2026 standings after Round 1 (Barcelona)
// Source: lemanscup.com — verified April 2026
export const mlmcStandings2026: SeasonStandings = {
  className: 'LMP3',
  drivers: [
    { position: 1, driverId: 'frost-d', teamId: 'r-ace-gp', points: 26, wins: 1 },
    { position: 2, driverId: 'peugeot-e', teamId: 'r-ace-gp', points: 26, wins: 1 },
    { position: 3, driverId: 'maschio', teamId: '23events-racing', points: 18, wins: 0 },
    { position: 4, driverId: 'queen', teamId: '23events-racing', points: 18, wins: 0 },
    { position: 5, driverId: 'scoular', teamId: 'r-ace-gp', points: 15, wins: 0 },
    { position: 6, driverId: 'buhler', teamId: 'r-ace-gp', points: 15, wins: 0 },
  ],
  constructors: [],
}
