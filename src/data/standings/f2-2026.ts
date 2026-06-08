import type { SeasonStandings } from './types'

// FIA Formula 2 2026 standings — after Round 4 (Monaco, Feature Race)
// Points: fiaformula2.com/Standings, racingnews365.com. Wins (feature + sprint) counted from race results data.
export const f2Standings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'mini', teamId: 'mp-motorsport', points: 63, wins: 1 },
    { position: 2, driverId: 'tsolov', teamId: 'campos-racing', points: 62, wins: 3 },
    { position: 3, driverId: 'stenshorne', teamId: 'rodin-motorsport', points: 48, wins: 1 },
    { position: 4, driverId: 'dunne', teamId: 'rodin-motorsport', points: 48, wins: 0 },
    { position: 5, driverId: 'leon-n', teamId: 'campos-racing', points: 45, wins: 2 },
    { position: 6, driverId: 'beganovic', teamId: 'dams', points: 43, wins: 0 },
    { position: 7, driverId: 'camara', teamId: 'invicta-racing', points: 37, wins: 0 },
    { position: 8, driverId: 'van-hoepen', teamId: 'trident', points: 33, wins: 0 },
    { position: 9, driverId: 'miyata', teamId: 'hitech', points: 30, wins: 0 },
    { position: 10, driverId: 'k-maini', teamId: 'art-grand-prix', points: 28, wins: 0 },
    { position: 11, driverId: 'durksen', teamId: 'invicta-racing', points: 21, wins: 1 },
    { position: 12, driverId: 'montoya-s', teamId: 'prema-racing', points: 20, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'campos-racing', points: 107, wins: 5 },
    { position: 2, teamId: 'rodin-motorsport', points: 96, wins: 1 },
    { position: 3, teamId: 'mp-motorsport', points: 75, wins: 1 },
    { position: 4, teamId: 'invicta-racing', points: 58, wins: 1 },
    { position: 5, teamId: 'dams', points: 54, wins: 0 },
    { position: 6, teamId: 'hitech', points: 46, wins: 0 },
    { position: 7, teamId: 'art-grand-prix', points: 41, wins: 0 },
    { position: 8, teamId: 'trident', points: 33, wins: 0 },
    { position: 9, teamId: 'prema-racing', points: 30, wins: 0 },
    { position: 10, teamId: 'aix-racing', points: 20, wins: 0 },
    { position: 11, teamId: 'van-amersfoort-racing', points: 14, wins: 0 },
  ],
}
