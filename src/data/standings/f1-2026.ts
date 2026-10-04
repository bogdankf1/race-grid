import type { SeasonStandings } from './types'

// F1 2026 standings — verified from formula1.com/en/results/2026/drivers and /team (after Round 16 Bahrain, 4 Oct 2026)
// Wins counted from race results data.
export const f1Standings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'antonelli', teamId: 'mercedes', points: 302, wins: 8 },
    { position: 2, driverId: 'russell', teamId: 'mercedes', points: 236, wins: 3 },
    { position: 3, driverId: 'hamilton', teamId: 'ferrari', points: 199, wins: 1 },
    { position: 4, driverId: 'norris', teamId: 'mclaren', points: 186, wins: 2 },
    { position: 5, driverId: 'leclerc', teamId: 'ferrari', points: 179, wins: 1 },
    { position: 6, driverId: 'verstappen', teamId: 'red-bull-racing', points: 163, wins: 1 },
    { position: 7, driverId: 'piastri', teamId: 'mclaren', points: 120, wins: 0 },
    { position: 8, driverId: 'hadjar', teamId: 'red-bull-racing', points: 86, wins: 0 },
    { position: 9, driverId: 'lawson', teamId: 'racing-bulls', points: 59, wins: 0 },
    { position: 10, driverId: 'gasly', teamId: 'alpine', points: 41, wins: 0 },
    { position: 11, driverId: 'lindblad', teamId: 'racing-bulls', points: 37, wins: 0 },
    { position: 12, driverId: 'colapinto', teamId: 'alpine', points: 27, wins: 0 },
    { position: 13, driverId: 'bearman', teamId: 'haas', points: 20, wins: 0 },
    { position: 14, driverId: 'bortoleto', teamId: 'audi', points: 10, wins: 0 },
    { position: 15, driverId: 'hulkenberg', teamId: 'audi', points: 7, wins: 0 },
    { position: 16, driverId: 'ocon', teamId: 'haas', points: 7, wins: 0 },
    { position: 17, driverId: 'sainz', teamId: 'williams', points: 7, wins: 0 },
    { position: 18, driverId: 'albon', teamId: 'williams', points: 5, wins: 0 },
    { position: 19, driverId: 'alonso', teamId: 'aston-martin', points: 3, wins: 0 },
    { position: 20, driverId: 'tsunoda', teamId: 'racing-bulls', points: 1, wins: 0 },
    { position: 21, driverId: 'stroll', teamId: 'aston-martin', points: 0, wins: 0 },
    { position: 22, driverId: 'bottas', teamId: 'cadillac', points: 0, wins: 0 },
    { position: 23, driverId: 'perez', teamId: 'cadillac', points: 0, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'mercedes', points: 556, wins: 11 },
    { position: 2, teamId: 'ferrari', points: 405, wins: 2 },
    { position: 3, teamId: 'mclaren', points: 316, wins: 2 },
    { position: 4, teamId: 'red-bull-racing', points: 298, wins: 1 },
    { position: 5, teamId: 'racing-bulls', points: 90, wins: 0 },
    { position: 6, teamId: 'alpine', points: 68, wins: 0 },
    { position: 7, teamId: 'haas', points: 27, wins: 0 },
    { position: 8, teamId: 'audi', points: 17, wins: 0 },
    { position: 9, teamId: 'williams', points: 12, wins: 0 },
    { position: 10, teamId: 'aston-martin', points: 7, wins: 0 },
    { position: 11, teamId: 'cadillac', points: 0, wins: 0 },
  ],
}
