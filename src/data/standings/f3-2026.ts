import type { SeasonStandings } from './types'

// FIA Formula 3 2026 standings — verified from fiaformula3.com, Wikipedia (after Round 2 Monaco)
// Wins (feature + sprint) counted from race results data.
export const f3Standings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'ugochukwu', teamId: 'campos-racing', points: 43, wins: 2 },
    { position: 2, driverId: 'del-pino', teamId: 'van-amersfoort-racing', points: 35, wins: 0 },
    { position: 3, driverId: 'slater', teamId: 'trident', points: 34, wins: 0 },
    { position: 4, driverId: 'badoer', teamId: 'rodin-motorsport', points: 28, wins: 1 },
    { position: 5, driverId: 'nael', teamId: 'campos-racing', points: 22, wins: 0 },
    { position: 6, driverId: 'kato', teamId: 'art-grand-prix', points: 16, wins: 0 },
    { position: 7, driverId: 'clerot', teamId: 'rodin-motorsport', points: 16, wins: 0 },
    { position: 8, driverId: 'giusti', teamId: 'mp-motorsport', points: 13, wins: 0 },
    { position: 9, driverId: 'gladysz', teamId: 'art-grand-prix', points: 13, wins: 0 },
    { position: 10, driverId: 'xie', teamId: 'dams', points: 12, wins: 1 },
  ],
  constructors: [
    { position: 1, teamId: 'campos-racing', points: 75, wins: 2 },
    { position: 2, teamId: 'van-amersfoort-racing', points: 47, wins: 0 },
    { position: 3, teamId: 'rodin-motorsport', points: 44, wins: 1 },
    { position: 4, teamId: 'trident', points: 43, wins: 0 },
    { position: 5, teamId: 'art-grand-prix', points: 31, wins: 0 },
    { position: 6, teamId: 'mp-motorsport', points: 14, wins: 0 },
    { position: 7, teamId: 'dams', points: 12, wins: 1 },
    { position: 8, teamId: 'hitech', points: 6, wins: 0 },
    { position: 9, teamId: 'aix-racing', points: 6, wins: 0 },
    { position: 10, teamId: 'prema-racing', points: 1, wins: 0 },
  ],
}
