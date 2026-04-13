import type { SeasonStandings } from './types'

// FIA Formula 2 2026 standings — verified from autohebdof1.com, fiaformula2.com (after Round 1 Melbourne)
export const f2Standings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'tsolov', teamId: 'campos-racing', points: 25, wins: 1 },
    { position: 2, driverId: 'camara', teamId: 'invicta-racing', points: 18, wins: 0 },
    { position: 3, driverId: 'van-hoepen', teamId: 'trident', points: 18, wins: 0 },
    { position: 4, driverId: 'miyata', teamId: 'hitech', points: 14, wins: 0 },
    { position: 5, driverId: 'inthraphuvasak', teamId: 'art-grand-prix', points: 13, wins: 0 },
    { position: 6, driverId: 'goethe-o', teamId: 'mp-motorsport', points: 12, wins: 0 },
    { position: 7, driverId: 'durksen', teamId: 'invicta-racing', points: 11, wins: 1 },
    { position: 8, driverId: 'leon-n', teamId: 'campos-racing', points: 8, wins: 0 },
    { position: 9, driverId: 'mini', teamId: 'mp-motorsport', points: 7, wins: 0 },
    { position: 10, driverId: 'dunne', teamId: 'rodin-motorsport', points: 7, wins: 0 },
    { position: 11, driverId: 'herta', teamId: 'hitech', points: 6, wins: 0 },
    { position: 12, driverId: 'montoya-s', teamId: 'prema-racing', points: 2, wins: 0 },
    { position: 13, driverId: 'beganovic', teamId: 'dams', points: 2, wins: 0 },
    { position: 14, driverId: 'bilinski', teamId: 'dams', points: 1, wins: 0 },
    { position: 15, driverId: 'stenshorne', teamId: 'rodin-motorsport', points: 1, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'campos-racing', points: 33, wins: 1 },
    { position: 2, teamId: 'invicta-racing', points: 29, wins: 1 },
    { position: 3, teamId: 'hitech', points: 20, wins: 0 },
    { position: 4, teamId: 'mp-motorsport', points: 19, wins: 0 },
    { position: 5, teamId: 'trident', points: 18, wins: 0 },
    { position: 6, teamId: 'art-grand-prix', points: 13, wins: 0 },
    { position: 7, teamId: 'rodin-motorsport', points: 8, wins: 0 },
    { position: 8, teamId: 'dams', points: 3, wins: 0 },
    { position: 9, teamId: 'prema-racing', points: 2, wins: 0 },
  ],
}
