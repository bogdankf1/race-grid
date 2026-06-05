import type { SeasonStandings } from './types'

// GTWC Europe Endurance Cup 2026 standings — verified from pitdebrief.com (after Round 3 Monza)
// Pro Cup is the primary class. Sub-cup data sourced from:
//   https://www.pitdebrief.com/post/2026-gtwc-europe-standings-after-round-3-at-monza
export const gtwcStandings2026: SeasonStandings = {
  className: 'Pro',
  drivers: [
    { position: 1, driverId: 'engel', teamId: 'mann-filter', points: 43, wins: 0 },
    { position: 2, driverId: 'thiim', teamId: 'comtoyou-racing', points: 33, wins: 1 },
    { position: 3, driverId: 'levi-a', teamId: 'tresor-attempto', points: 25, wins: 1 },
    { position: 4, driverId: 'prette', teamId: 'garage-59', points: 19, wins: 0 },
  ],
  constructors: [],
  otherClasses: [
    // Gold Cup skipped: only 2 of top 3 driver crews have verifiable IDs
    // (Gachet missing; Louis Prette / Fleming pair maps ambiguously) — < 3 verifiable rows.
    // Silver Cup skipped: top 2 driver crews (Montenegro/Lismont, Nesov/Malykhin) lack lead-driver IDs
    // and Pure Rxcing team ID is missing — < 3 verifiable rows.
    {
      className: 'Bronze Cup',
      drivers: [
        { position: 1, driverId: 'patrese', teamId: 'kessel-racing', points: 37, wins: 0 },
        { position: 2, driverId: 'hartog', teamId: 'rutronik-racing', points: 33, wins: 0 },
        // Row 3 skipped: Kellett/Leung — 'kellett' driver ID missing.
        // Row 4 skipped: Piana/Dienst/Salikhov — 'piana' and 'salikhov' IDs missing.
      ],
      constructors: [
        { position: 1, teamId: 'kessel-racing', points: 37, wins: 0 },
        { position: 2, teamId: 'rutronik-racing', points: 33, wins: 0 },
        { position: 3, teamId: 'paradine-competition', points: 29, wins: 0 },
        { position: 4, teamId: 'winward-racing', points: 25, wins: 0 },
        { position: 5, teamId: 'century-motorsport', points: 24, wins: 0 },
      ],
    },
  ],
}
