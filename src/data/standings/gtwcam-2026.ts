import type { SeasonStandings } from './types'

// GT World Challenge America 2026 standings — after Round 3 (Sebring)
// Pro Cup is the primary class. Sub-cup data sourced from:
//   https://www.pitdebrief.com/post/2026-gtwc-america-standings-after-round-3-sebring/
//   https://en.wikipedia.org/wiki/2026_GT_World_Challenge_America
export const gtwcamStandings2026: SeasonStandings = {
  className: 'Pro',
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
  otherClasses: [
    {
      className: 'Pro-Am',
      drivers: [
        { position: 1, driverId: 'washington-k', teamId: 'gmg-racing', points: 62, wins: 0 },
        { position: 2, driverId: 'musial-jr', teamId: 'wright-motorsports', points: 55, wins: 0 },
        { position: 3, driverId: 'heylen', teamId: 'rs1', points: 48, wins: 0 },
        { position: 4, driverId: 'lahlouh', teamId: 'wright-motorsports', points: 32, wins: 0 },
        { position: 5, driverId: 'agostini', teamId: 'triarsi-competizione', points: 18, wins: 0 },
        { position: 6, driverId: 'daskalos', teamId: 'jmf-motorsports', points: 17, wins: 0 },
        // Row 7 skipped: Andy Lee / Slade Stewart (Riley Technologies) — driver IDs 'andy-lee'/'slade-stewart' missing and 'riley-technologies' team ID missing.
        { position: 8, driverId: 'braun', teamId: 'kellymoss', points: 14, wins: 0 },
      ],
      constructors: [
        { position: 1, teamId: 'gmg-racing', points: 65, wins: 0 },
        { position: 2, teamId: 'wright-motorsports', points: 55, wins: 0 },
        { position: 3, teamId: 'rs1', points: 51, wins: 0 },
        { position: 4, teamId: 'kellymoss', points: 24, wins: 0 },
        { position: 5, teamId: 'jmf-motorsports', points: 21, wins: 0 },
      ],
    },
    // Am Cup skipped: only 2 driver crews are classified (Schreibman/Negri Jr. and Austin/Golan)
    // and only 1 has verifiable lead-driver ID — < 3 verifiable rows for both drivers and teams.
  ],
}
