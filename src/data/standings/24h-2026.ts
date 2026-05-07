import type { SeasonStandings } from './types'

// 24H Series 2026 standings — after 2 rounds
// Source: 24hseries.com
export const twentyfourhStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'pierre-kaffer', teamId: 'sainteloc-junior-team', points: 50, wins: 1 },
    { position: 2, driverId: 'elia-erhart', teamId: 'sainteloc-junior-team', points: 50, wins: 1 },
    { position: 3, driverId: 'sherwood', teamId: 'optimum-motorsport', points: 40, wins: 1 },
    { position: 4, driverId: 'ralf-bohn', teamId: 'herberth-motorsport', points: 36, wins: 0 },
    { position: 5, driverId: 'alfred-renauer', teamId: 'herberth-motorsport', points: 32, wins: 0 },
    { position: 6, driverId: 'bachler', teamId: 'herberth-motorsport', points: 28, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'sainteloc-junior-team', points: 50, wins: 1 },
    { position: 2, teamId: 'optimum-motorsport', points: 40, wins: 1 },
    { position: 3, teamId: 'herberth-motorsport', points: 36, wins: 0 },
    { position: 4, teamId: 'ebimotors', points: 22, wins: 0 },
    { position: 5, teamId: 'cp-racing', points: 18, wins: 0 },
  ],
  className: 'GT3',
}
