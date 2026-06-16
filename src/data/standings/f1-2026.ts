import type { SeasonStandings } from './types'

// F1 2026 standings — verified from formula1.com/en/results/2026, racingnews365.com (after Round 7 Barcelona)
// Reflects the Monaco P3 appeal outcome (Gasly reinstated to P3, Hadjar to P4) plus the Barcelona round.
export const f1Standings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'antonelli', teamId: 'mercedes', points: 156, wins: 5 },
    { position: 2, driverId: 'hamilton', teamId: 'ferrari', points: 115, wins: 1 },
    { position: 3, driverId: 'russell', teamId: 'mercedes', points: 106, wins: 1 },
    { position: 4, driverId: 'leclerc', teamId: 'ferrari', points: 75, wins: 0 },
    { position: 5, driverId: 'norris', teamId: 'mclaren', points: 73, wins: 0 },
    { position: 6, driverId: 'piastri', teamId: 'mclaren', points: 68, wins: 0 },
    { position: 7, driverId: 'verstappen', teamId: 'red-bull-racing', points: 55, wins: 0 },
    { position: 8, driverId: 'gasly', teamId: 'alpine', points: 41, wins: 0 },
    { position: 9, driverId: 'hadjar', teamId: 'red-bull-racing', points: 34, wins: 0 },
    { position: 10, driverId: 'lawson', teamId: 'racing-bulls', points: 28, wins: 0 },
    { position: 11, driverId: 'bearman', teamId: 'haas', points: 18, wins: 0 },
    { position: 12, driverId: 'colapinto', teamId: 'alpine', points: 16, wins: 0 },
    { position: 13, driverId: 'lindblad', teamId: 'racing-bulls', points: 13, wins: 0 },
    { position: 14, driverId: 'sainz', teamId: 'williams', points: 6, wins: 0 },
    { position: 15, driverId: 'albon', teamId: 'williams', points: 5, wins: 0 },
    { position: 16, driverId: 'ocon', teamId: 'haas', points: 3, wins: 0 },
    { position: 17, driverId: 'bortoleto', teamId: 'audi', points: 2, wins: 0 },
    { position: 18, driverId: 'alonso', teamId: 'aston-martin', points: 1, wins: 0 },
    { position: 19, driverId: 'hulkenberg', teamId: 'audi', points: 0, wins: 0 },
    { position: 20, driverId: 'bottas', teamId: 'cadillac', points: 0, wins: 0 },
    { position: 21, driverId: 'perez', teamId: 'cadillac', points: 0, wins: 0 },
    { position: 22, driverId: 'stroll', teamId: 'aston-martin', points: 0, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'mercedes', points: 262, wins: 6 },
    { position: 2, teamId: 'ferrari', points: 190, wins: 1 },
    { position: 3, teamId: 'mclaren', points: 141, wins: 0 },
    { position: 4, teamId: 'red-bull-racing', points: 89, wins: 0 },
    { position: 5, teamId: 'alpine', points: 57, wins: 0 },
    { position: 6, teamId: 'racing-bulls', points: 41, wins: 0 },
    { position: 7, teamId: 'haas', points: 21, wins: 0 },
    { position: 8, teamId: 'williams', points: 11, wins: 0 },
    { position: 9, teamId: 'audi', points: 2, wins: 0 },
    { position: 10, teamId: 'aston-martin', points: 1, wins: 0 },
    { position: 11, teamId: 'cadillac', points: 0, wins: 0 },
  ],
}
