import type { SeasonStandings } from './types'

// GT World Challenge Asia 2026 standings — after Round 1 (Sepang, 2 races)
// Source: gt-world-challenge-asia.com / pitdebrief.com
export const gtwcasiaStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'ghiretti', teamId: 'absolute-racing', points: 40, wins: 1 },
    { position: 2, driverId: 'lu-wei', teamId: 'origine-motorsport', points: 33, wins: 1 },
    { position: 3, driverId: 'boccolacci', teamId: 'phantom-global-racing', points: 28, wins: 0 },
    { position: 4, driverId: 'nandy', teamId: 'absolute-racing', points: 19, wins: 0 },
    { position: 5, driverId: 'cheng-congfu', teamId: 'faw-audi-phantom', points: 15, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'absolute-racing', points: 59, wins: 1 },
    { position: 2, teamId: 'origine-motorsport', points: 33, wins: 1 },
    { position: 3, teamId: 'phantom-global-racing', points: 28, wins: 0 },
    { position: 4, teamId: 'team-krc', points: 22, wins: 0 },
    { position: 5, teamId: 'faw-audi-phantom', points: 15, wins: 0 },
  ],
}
