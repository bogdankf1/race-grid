import type { SeasonStandings } from './types'

// 24H Series 2025 standings
// Source: 24hseries.com, Wikipedia
export const twentyfourhStandings2025: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'bachler', teamId: 'herberth-motorsport', points: 118, wins: 2 },
    { position: 2, driverId: 'joerg-dreisow', teamId: 'herberth-motorsport', points: 118, wins: 2 },
    { position: 3, driverId: 'manuel-lauck', teamId: 'herberth-motorsport', points: 118, wins: 2 },
    { position: 4, driverId: 'berton-a', teamId: 'ebimotors', points: 100, wins: 1 },
    { position: 5, driverId: 'fischbaum-r', teamId: 'ziggo-tempesta', points: 92, wins: 1 },
    { position: 6, driverId: 'pierre-kaffer', teamId: 'sainteloc-junior-team', points: 82, wins: 0 },
    { position: 7, driverId: 'elia-erhart', teamId: 'sainteloc-junior-team', points: 78, wins: 0 },
    { position: 8, driverId: 'ralf-bohn', teamId: 'herberth-motorsport', points: 70, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'herberth-motorsport', points: 118, wins: 2 },
    { position: 2, teamId: 'ebimotors', points: 100, wins: 1 },
    { position: 3, teamId: 'ziggo-tempesta', points: 92, wins: 1 },
    { position: 4, teamId: 'sainteloc-junior-team', points: 82, wins: 0 },
    { position: 5, teamId: 'cp-racing', points: 60, wins: 0 },
  ],
  className: 'GT3',
}
