import type { SeasonStandings } from './types'

// WEC 2026 Hypercar and LMGT3 standings — Hypercar verified from fiawec.com (after Round 3 Le Mans, double points).
// Points scale: 25-18-15-12-10-8-6-4-2-1 (per FIA WEC 2026 classification); Le Mans awards double.
// One representative (first-listed) driver per crew per runbook convention.
// NOTE: the LMGT3 otherClass below still reflects after-Round-2 Spa — the post-Le-Mans LMGT3
// championship points could not be reconciled to one-rep-per-crew (the available source
// double-listed same-car crews), so it is left at Spa pending a clean source. The Le Mans
// LMGT3 podium itself is recorded in results/wec-2026.ts.
export const wecStandings2026: SeasonStandings = {
  className: 'Hypercar',
  drivers: [
    { position: 1, driverId: 'conway', teamId: 'toyota-gazoo-racing', points: 75, wins: 1 },
    { position: 2, driverId: 'rast', teamId: 'bmw-wrt', points: 71, wins: 1 },
    { position: 3, driverId: 's-van-der-linde', teamId: 'bmw-wrt', points: 61, wins: 1 },
    { position: 4, driverId: 'buemi', teamId: 'toyota-gazoo-racing', points: 56, wins: 1 },
    { position: 5, driverId: 'pier-guidi', teamId: 'ferrari-af-corse', points: 39, wins: 0 },
    { position: 6, driverId: 'da-costa', teamId: 'alpine', points: 28, wins: 0 },
    { position: 7, driverId: 'deletraz', teamId: 'jota', points: 26, wins: 0 },
    { position: 8, driverId: 'magnussen', teamId: 'bmw-wrt', points: 25, wins: 0 },
    { position: 9, driverId: 'fuoco', teamId: 'ferrari-af-corse', points: 23, wins: 0 },
    { position: 10, driverId: 'tincknell', teamId: 'aston-martin', points: 22, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'toyota-gazoo-racing', points: 132, wins: 2 },
    { position: 2, teamId: 'bmw-wrt', points: 96, wins: 1 },
    { position: 3, teamId: 'ferrari-af-corse', points: 62, wins: 0 },
    { position: 4, teamId: 'alpine', points: 38, wins: 0 },
    { position: 5, teamId: 'cadillac', points: 32, wins: 0 },
    { position: 6, teamId: 'aston-martin', points: 26, wins: 0 },
    { position: 7, teamId: 'peugeot', points: 15, wins: 0 },
    { position: 8, teamId: 'genesis-magma', points: 6, wins: 0 },
  ],
  otherClasses: [
    {
      className: 'LMGT3',
      // Source: pitdebrief.com — after Round 2 Spa-Francorchamps 2026 (NOT yet updated for Le Mans — see note above)
      // One first-listed driver per crew per entries-file order; team standings aggregated by operator (matches Hypercar convention).
      // Skipped rows (driver/team IDs not in repo): none — all top-10 crew leaders and top-8 operators mapped.
      drivers: [
        { position: 1, driverId: 'lietz', teamId: 'the-bend-manthey', points: 30, wins: 0 },
        { position: 2, driverId: 'au', teamId: 'garage-59', points: 26, wins: 1 },
        { position: 3, driverId: 'dan-harper', teamId: 'team-wrt', points: 25, wins: 1 },
        { position: 4, driverId: 'catsburg', teamId: 'tf-sport', points: 22, wins: 0 },
        { position: 5, driverId: 'heriau', teamId: 'vista-af-corse', points: 20, wins: 0 },
        { position: 6, driverId: 'robichon', teamId: 'heart-of-racing', points: 18, wins: 0 },
        { position: 7, driverId: 'guven', teamId: 'manthey-dk', points: 18, wins: 0 },
        { position: 8, driverId: 'west', teamId: 'garage-59', points: 16, wins: 0 },
        { position: 9, driverId: 'farfus', teamId: 'team-wrt', points: 10, wins: 0 },
        { position: 10, driverId: 'schmid', teamId: 'akkodis-asp', points: 8, wins: 0 },
      ],
      constructors: [
        { position: 1, teamId: 'garage-59', points: 42, wins: 1 },
        { position: 2, teamId: 'team-wrt', points: 35, wins: 1 },
        { position: 3, teamId: 'the-bend-manthey', points: 30, wins: 0 },
        { position: 4, teamId: 'tf-sport', points: 22, wins: 0 },
        { position: 5, teamId: 'vista-af-corse', points: 20, wins: 0 },
        { position: 6, teamId: 'heart-of-racing', points: 20, wins: 0 },
        { position: 7, teamId: 'manthey-dk', points: 18, wins: 0 },
        { position: 8, teamId: 'akkodis-asp', points: 9, wins: 0 },
      ],
    },
  ],
}
