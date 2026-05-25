import type { SeasonStandings } from './types'

// FIA Formula 2 2026 standings — after Round 3 (Montreal, Feature Race)
// Source: fiaformula2.com/Standings, pitdebrief.com
export const f2Standings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'mini', teamId: 'mp-motorsport', points: 57, wins: 1 },
    { position: 2, driverId: 'camara', teamId: 'invicta-racing', points: 36, wins: 0 },
    { position: 3, driverId: 'tsolov', teamId: 'campos-racing', points: 35, wins: 2 },
    { position: 4, driverId: 'stenshorne', teamId: 'rodin-motorsport', points: 35, wins: 1 },
    { position: 5, driverId: 'leon-n', teamId: 'campos-racing', points: 33, wins: 1 },
    { position: 6, driverId: 'van-hoepen', teamId: 'trident', points: 33, wins: 0 },
    { position: 7, driverId: 'dunne', teamId: 'rodin-motorsport', points: 30, wins: 0 },
    { position: 8, driverId: 'beganovic', teamId: 'dams', points: 24, wins: 0 },
    { position: 9, driverId: 'miyata', teamId: 'hitech', points: 22, wins: 0 },
    { position: 10, driverId: 'durksen', teamId: 'invicta-racing', points: 16, wins: 1 },
    { position: 11, driverId: 'montoya-s', teamId: 'prema-racing', points: 16, wins: 0 },
    { position: 12, driverId: 'herta', teamId: 'hitech', points: 16, wins: 0 },
    { position: 13, driverId: 'varrone', teamId: 'van-amersfoort-racing', points: 14, wins: 0 },
    { position: 14, driverId: 'k-maini', teamId: 'art-grand-prix', points: 14, wins: 0 },
    { position: 15, driverId: 'inthraphuvasak', teamId: 'art-grand-prix', points: 13, wins: 0 },
    { position: 16, driverId: 'goethe-o', teamId: 'mp-motorsport', points: 12, wins: 0 },
    { position: 17, driverId: 'shields', teamId: 'aix-racing', points: 10, wins: 0 },
    { position: 18, driverId: 'boya', teamId: 'prema-racing', points: 10, wins: 0 },
    { position: 19, driverId: 'fittipaldi-jr', teamId: 'aix-racing', points: 4, wins: 0 },
    { position: 20, driverId: 'bilinski', teamId: 'dams', points: 2, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'mp-motorsport', points: 69, wins: 1 },
    { position: 2, teamId: 'campos-racing', points: 68, wins: 3 },
    { position: 3, teamId: 'rodin-motorsport', points: 65, wins: 1 },
    { position: 4, teamId: 'invicta-racing', points: 52, wins: 1 },
    { position: 5, teamId: 'hitech', points: 38, wins: 0 },
    { position: 6, teamId: 'trident', points: 33, wins: 0 },
    { position: 7, teamId: 'art-grand-prix', points: 27, wins: 0 },
    { position: 8, teamId: 'dams', points: 26, wins: 0 },
    { position: 9, teamId: 'prema-racing', points: 26, wins: 0 },
    { position: 10, teamId: 'aix-racing', points: 14, wins: 0 },
    { position: 11, teamId: 'van-amersfoort-racing', points: 14, wins: 0 },
  ],
}
