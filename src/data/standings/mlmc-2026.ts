import type { SeasonStandings } from './types'

// Michelin Le Mans Cup 2026 multi-class standings after Round 2 (Le Castellet)
// Source: lemanscup.com classification — verified June 2026
// Primary class: LMP3. Additional class: GT3.
export const mlmcStandings2026: SeasonStandings = {
  className: 'LMP3',
  drivers: [
    { position: 1, driverId: 'frost-d', teamId: 'r-ace-gp', points: 44, wins: 1 },
    { position: 1, driverId: 'peugeot-e', teamId: 'r-ace-gp', points: 44, wins: 1 },
    { position: 3, driverId: 'maschio', teamId: '23events-racing', points: 43, wins: 1 },
    { position: 3, driverId: 'queen', teamId: '23events-racing', points: 43, wins: 1 },
  ],
  constructors: [],
  otherClasses: [
    {
      className: 'GT3',
      drivers: [
        { position: 1, driverId: 'sager', teamId: 'racing-spirit-leman', points: 40, wins: 1 },
        { position: 1, driverId: 'hasse-clot', teamId: 'racing-spirit-leman', points: 40, wins: 1 },
        { position: 3, driverId: 'cozzi', teamId: 'af-corse', points: 28, wins: 0 },
        { position: 3, driverId: 'donno', teamId: 'af-corse', points: 28, wins: 0 },
        { position: 5, driverId: 'fumanelli', teamId: 'kessel-racing', points: 25, wins: 1 },
        { position: 5, driverId: 'innocenti', teamId: 'kessel-racing', points: 25, wins: 1 },
        { position: 7, driverId: 'de-andres-martin', teamId: 'smc-motorsport', points: 25, wins: 0 },
        { position: 7, driverId: 'simmenauer', teamId: 'smc-motorsport', points: 25, wins: 0 },
        { position: 9, driverId: 'krahn', teamId: 'dinamic-gt', points: 24, wins: 0 },
        { position: 9, driverId: 'cressoni', teamId: 'dinamic-gt', points: 24, wins: 0 },
        { position: 11, driverId: 'ryndziewicz', teamId: 'kessel-racing', points: 20, wins: 0 },
        { position: 12, driverId: 'bonanomi', teamId: 'af-corse', points: 16, wins: 0 },
        { position: 12, driverId: 'acosta-iii', teamId: 'af-corse', points: 16, wins: 0 },
        { position: 14, driverId: 'bovet', teamId: 'blackthorn', points: 8, wins: 0 },
        { position: 14, driverId: 'canning', teamId: 'blackthorn', points: 8, wins: 0 },
        { position: 16, driverId: 'mayola-comadira', teamId: 'biogas-motorsport', points: 2, wins: 0 },
        { position: 16, driverId: 'carol-ybarra', teamId: 'biogas-motorsport', points: 2, wins: 0 },
        // Skipped rows (source: lemanscup.com classification, verified June 2026):
        // - GT3 #21 pos 8 (12 pts) "Lorenzo Ferrari" — no matching driver ID in drivers.ts; not in entries/results either.
        // - GT3 unnamed entry pos 9 (8 pts) — no driver/team mapping available.
        // - GT3 #11 Code Racing Development partial entries — fractional pole points only; no full driver/team row to map cleanly.
      ],
      constructors: [
        // MLMC teams' championship is contested per-car; this table collapses to lead entry per teamId.
        // AF Corse has #51 (28 pts) + #88 (16 pts); Kessel Racing has #17 (25 pts) + #21 (20 pts).
        { position: 1, teamId: 'racing-spirit-leman', points: 40, wins: 1 },
        { position: 2, teamId: 'af-corse', points: 28, wins: 0 },
        { position: 3, teamId: 'kessel-racing', points: 25, wins: 1 },
        { position: 4, teamId: 'smc-motorsport', points: 25, wins: 0 },
        { position: 5, teamId: 'dinamic-gt', points: 24, wins: 0 },
        { position: 6, teamId: 'blackthorn', points: 8, wins: 0 },
      ],
    },
  ],
}
