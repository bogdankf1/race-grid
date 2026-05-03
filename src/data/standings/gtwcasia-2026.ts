import type { SeasonStandings } from './types'

// GT World Challenge Asia 2026 standings — after Round 2 (Mandalika)
// Source: Wikipedia, gt-world-challenge-asia.com
export const gtwcasiaStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'ghiretti', teamId: 'absolute-racing', points: 55, wins: 1 },
    { position: 2, driverId: 'cheng-congfu', teamId: 'faw-audi-phantom', points: 40, wins: 0 },
    { position: 3, driverId: 'lu-wei', teamId: 'origine-motorsport', points: 34, wins: 1 },
    { position: 4, driverId: 'xu-liu', teamId: 'phantom-global-racing', points: 28, wins: 0 },
    { position: 5, driverId: 'nandy', teamId: 'absolute-racing', points: 25, wins: 0 },
    { position: 6, driverId: 'evans-j', teamId: 'faw-audi-phantom', points: 24, wins: 0 },
    { position: 7, driverId: 'kondo-t', teamId: 'porsche-okazaki', points: 16, wins: 0 },
    { position: 8, driverId: 'li-lichao', teamId: 'climax-racing', points: 13, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'absolute-racing', points: 80, wins: 1 },
    { position: 2, teamId: 'faw-audi-phantom', points: 64, wins: 0 },
    { position: 3, teamId: 'origine-motorsport', points: 34, wins: 1 },
    { position: 4, teamId: 'phantom-global-racing', points: 28, wins: 1 },
    { position: 5, teamId: 'craft-bamboo', points: 22, wins: 0 },
  ],
}
