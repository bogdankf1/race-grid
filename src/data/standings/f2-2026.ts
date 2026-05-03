import type { SeasonStandings } from './types'

// FIA Formula 2 2026 standings — after Round 2 (Miami)
// Source: Wikipedia, fiaformula2.com
export const f2Standings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'tsolov', teamId: 'campos-racing', points: 35, wins: 2 },
    { position: 2, driverId: 'van-hoepen', teamId: 'trident', points: 26, wins: 0 },
    { position: 3, driverId: 'camara', teamId: 'invicta-racing', points: 18, wins: 0 },
    { position: 4, driverId: 'durksen', teamId: 'invicta-racing', points: 15, wins: 1 },
    { position: 5, driverId: 'miyata', teamId: 'hitech', points: 14, wins: 0 },
    { position: 6, driverId: 'inthraphuvasak', teamId: 'art-grand-prix', points: 13, wins: 0 },
    { position: 7, driverId: 'dunne', teamId: 'rodin-motorsport', points: 12, wins: 0 },
    { position: 8, driverId: 'goethe-o', teamId: 'mp-motorsport', points: 12, wins: 0 },
    { position: 9, driverId: 'leon-n', teamId: 'campos-racing', points: 9, wins: 0 },
    { position: 10, driverId: 'mini', teamId: 'mp-motorsport', points: 9, wins: 0 },
    { position: 11, driverId: 'herta', teamId: 'hitech', points: 6, wins: 0 },
    { position: 12, driverId: 'varrone', teamId: 'trident', points: 5, wins: 0 },
    { position: 13, driverId: 'beganovic', teamId: 'dams', points: 4, wins: 0 },
    { position: 14, driverId: 'stenshorne', teamId: 'rodin-motorsport', points: 4, wins: 0 },
    { position: 15, driverId: 'montoya-s', teamId: 'prema-racing', points: 2, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'campos-racing', points: 44, wins: 2 },
    { position: 2, teamId: 'invicta-racing', points: 33, wins: 1 },
    { position: 3, teamId: 'trident', points: 26, wins: 0 },
    { position: 4, teamId: 'mp-motorsport', points: 21, wins: 0 },
    { position: 5, teamId: 'hitech', points: 20, wins: 0 },
    { position: 6, teamId: 'rodin-motorsport', points: 16, wins: 0 },
    { position: 7, teamId: 'art-grand-prix', points: 16, wins: 0 },
    { position: 8, teamId: 'van-amersfoort-racing', points: 5, wins: 0 },
    { position: 9, teamId: 'dams', points: 4, wins: 0 },
    { position: 10, teamId: 'prema-racing', points: 2, wins: 0 },
  ],
}
