import type { SeasonStandings } from './types'

// WEC 2026 Hypercar and LMGT3 standings — verified from fiawec.com and pitdebrief.com (after Round 2 Spa)
// Points scale: 25-18-15-12-10-8-6-4-2-1 (per FIA WEC 2026 classification)
// One representative (first-listed) driver per crew per runbook convention.
export const wecStandings2026: SeasonStandings = {
  className: 'Hypercar',
  drivers: [
    { position: 1, driverId: 'rast', teamId: 'bmw-wrt', points: 35, wins: 1 },
    { position: 2, driverId: 'buemi', teamId: 'toyota-gazoo-racing', points: 26, wins: 1 },
    { position: 3, driverId: 's-van-der-linde', teamId: 'bmw-wrt', points: 25, wins: 1 },
    { position: 4, driverId: 'conway', teamId: 'toyota-gazoo-racing', points: 25, wins: 0 },
    { position: 5, driverId: 'magnussen', teamId: 'bmw-wrt', points: 24, wins: 0 },
    { position: 6, driverId: 'fuoco', teamId: 'ferrari-af-corse', points: 23, wins: 0 },
    { position: 7, driverId: 'pier-guidi', teamId: 'ferrari-af-corse', points: 19, wins: 0 },
    { position: 8, driverId: 'vanthoor', teamId: 'bmw-wrt', points: 18, wins: 0 },
    { position: 9, driverId: 'tincknell', teamId: 'aston-martin', points: 14, wins: 0 },
    { position: 10, driverId: 'da-costa', teamId: 'alpine', points: 12, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'bmw-wrt', points: 59, wins: 1 },
    { position: 2, teamId: 'toyota-gazoo-racing', points: 52, wins: 1 },
    { position: 3, teamId: 'ferrari-af-corse', points: 42, wins: 0 },
    { position: 4, teamId: 'aston-martin', points: 14, wins: 0 },
    { position: 5, teamId: 'alpine', points: 14, wins: 0 },
    { position: 6, teamId: 'peugeot', points: 9, wins: 0 },
    { position: 7, teamId: 'cadillac', points: 8, wins: 0 },
    { position: 8, teamId: 'genesis-magma', points: 6, wins: 0 },
  ],
  otherClasses: [
    {
      className: 'LMGT3',
      // Source: pitdebrief.com — after Round 2 Spa-Francorchamps 2026
      // One first-listed driver per crew per entries-file order; team standings aggregated by operator (matches Hypercar convention).
      // Skipped rows (driver/team IDs not in repo): none — all top-10 crew leaders and top-8 operators mapped.
      drivers: [
        { position: 1, driverId: 'lietz', teamId: 'the-bend-manthey', points: 30, wins: 0 },
        { position: 2, driverId: 'au', teamId: 'garage-59', points: 26, wins: 1 },
        { position: 3, driverId: 'dan-harper', teamId: 'team-wrt', points: 25, wins: 1 },
        { position: 4, driverId: 'catsburg', teamId: 'tf-sport', points: 22, wins: 0 },
        { position: 5, driverId: 'heriau', teamId: 'vista-af-corse', points: 20, wins: 0 },
        { position: 6, driverId: 'james-i', teamId: 'heart-of-racing', points: 18, wins: 0 },
        { position: 7, driverId: 'guven', teamId: 'manthey-dk', points: 18, wins: 0 },
        { position: 8, driverId: 'west', teamId: 'garage-59', points: 16, wins: 0 },
        { position: 9, driverId: 'farfus', teamId: 'team-wrt', points: 10, wins: 0 },
        { position: 10, driverId: 'schmid-c', teamId: 'akkodis-asp', points: 8, wins: 0 },
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
