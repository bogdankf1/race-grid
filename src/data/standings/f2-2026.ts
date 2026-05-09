import type { SeasonStandings } from './types'

// FIA Formula 2 2026 standings — after Round 2 (Miami, Feature Race)
// Source: pitdebrief.com, Wikipedia, fiaformula2.com
export const f2Standings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'tsolov', teamId: 'campos-racing', points: 35, wins: 2 },
    { position: 2, driverId: 'camara', teamId: 'invicta-racing', points: 34, wins: 0 },
    { position: 3, driverId: 'mini', teamId: 'mp-motorsport', points: 34, wins: 1 },
    { position: 4, driverId: 'van-hoepen', teamId: 'trident', points: 26, wins: 0 },
    { position: 5, driverId: 'miyata', teamId: 'hitech', points: 22, wins: 0 },
    { position: 6, driverId: 'beganovic', teamId: 'dams', points: 21, wins: 0 },
    { position: 7, driverId: 'leon-n', teamId: 'campos-racing', points: 20, wins: 0 },
    { position: 8, driverId: 'durksen', teamId: 'invicta-racing', points: 16, wins: 1 },
    { position: 9, driverId: 'inthraphuvasak', teamId: 'art-grand-prix', points: 13, wins: 0 },
    { position: 10, driverId: 'goethe-o', teamId: 'mp-motorsport', points: 12, wins: 0 },
    { position: 11, driverId: 'k-maini', teamId: 'art-grand-prix', points: 12, wins: 0 },
    { position: 12, driverId: 'dunne', teamId: 'rodin-motorsport', points: 12, wins: 0 },
    { position: 13, driverId: 'herta', teamId: 'hitech', points: 10, wins: 0 },
    { position: 14, driverId: 'boya', teamId: 'aix-racing', points: 6, wins: 0 },
    { position: 15, driverId: 'varrone', teamId: 'trident', points: 5, wins: 0 },
    { position: 16, driverId: 'montoya-s', teamId: 'prema-racing', points: 4, wins: 0 },
    { position: 17, driverId: 'stenshorne', teamId: 'rodin-motorsport', points: 4, wins: 0 },
    { position: 18, driverId: 'bilinski', teamId: 'van-amersfoort-racing', points: 1, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'campos-racing', points: 55, wins: 2 },
    { position: 2, teamId: 'invicta-racing', points: 50, wins: 1 },
    { position: 3, teamId: 'mp-motorsport', points: 46, wins: 1 },
    { position: 4, teamId: 'hitech', points: 32, wins: 0 },
    { position: 5, teamId: 'trident', points: 26, wins: 0 },
    { position: 6, teamId: 'art-grand-prix', points: 25, wins: 0 },
    { position: 7, teamId: 'dams', points: 22, wins: 0 },
    { position: 8, teamId: 'rodin-motorsport', points: 16, wins: 0 },
    { position: 9, teamId: 'prema-racing', points: 10, wins: 0 },
    { position: 10, teamId: 'van-amersfoort-racing', points: 5, wins: 0 },
    { position: 11, teamId: 'aix-racing', points: 0, wins: 0 },
  ],
}
