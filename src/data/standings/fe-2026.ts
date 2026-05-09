import type { SeasonStandings } from './types'

// Formula E Season 12 (2025-26) standings — verified from racingnews365.com, fiaformulae.com (after Round 8 Berlin)
export const feStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'wehrlein', teamId: 'porsche-fe', points: 101, wins: 1 },
    { position: 2, driverId: 'm-evans', teamId: 'jaguar-racing', points: 98, wins: 2 },
    { position: 3, driverId: 'mortara', teamId: 'mahindra-racing', points: 93, wins: 0 },
    { position: 4, driverId: 'rowland', teamId: 'nissan-fe', points: 83, wins: 0 },
    { position: 5, driverId: 'n-muller', teamId: 'porsche-fe', points: 75, wins: 1 },
    { position: 6, driverId: 'n-cassidy', teamId: 'citroen-racing-fe', points: 69, wins: 1 },
    { position: 7, driverId: 'j-dennis', teamId: 'andretti-fe', points: 66, wins: 1 },
    { position: 8, driverId: 'da-costa', teamId: 'jaguar-racing', points: 65, wins: 2 },
    { position: 9, driverId: 'buemi', teamId: 'envision-racing', points: 55, wins: 0 },
    { position: 10, driverId: 'p-marti', teamId: 'cupra-kiro', points: 25, wins: 0 },
    { position: 11, driverId: 'ticktum', teamId: 'cupra-kiro', points: 22, wins: 0 },
    { position: 12, driverId: 'eriksson', teamId: 'envision-racing', points: 20, wins: 0 },
    { position: 13, driverId: 'barnard', teamId: 'ds-penske', points: 18, wins: 0 },
    { position: 14, driverId: 'de-vries', teamId: 'mahindra-racing', points: 14, wins: 0 },
    { position: 15, driverId: 'vergne', teamId: 'citroen-racing-fe', points: 14, wins: 0 },
    { position: 16, driverId: 'nato', teamId: 'nissan-fe', points: 11, wins: 0 },
    { position: 17, driverId: 'gunther', teamId: 'ds-penske', points: 8, wins: 0 },
    { position: 18, driverId: 'drugovich', teamId: 'andretti-fe', points: 2, wins: 0 },
    { position: 19, driverId: 'maloney', teamId: 'lola-yamaha-abt', points: 1, wins: 0 },
    { position: 20, driverId: 'di-grassi', teamId: 'lola-yamaha-abt', points: 0, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'porsche-fe', points: 176, wins: 2 },
    { position: 2, teamId: 'jaguar-racing', points: 163, wins: 4 },
    { position: 3, teamId: 'mahindra-racing', points: 107, wins: 0 },
    { position: 4, teamId: 'nissan-fe', points: 94, wins: 0 },
    { position: 5, teamId: 'citroen-racing-fe', points: 83, wins: 1 },
    { position: 6, teamId: 'envision-racing', points: 75, wins: 0 },
    { position: 7, teamId: 'andretti-fe', points: 68, wins: 1 },
    { position: 8, teamId: 'cupra-kiro', points: 47, wins: 0 },
    { position: 9, teamId: 'ds-penske', points: 26, wins: 0 },
    { position: 10, teamId: 'lola-yamaha-abt', points: 1, wins: 0 },
  ],
}
