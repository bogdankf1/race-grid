import type { SeasonStandings } from './types'

// FIA Formula 3 2026 standings — verified from fiaformula3.com, Wikipedia (after Round 1 Melbourne)
export const f3Standings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'ugochukwu', teamId: 'campos-racing', points: 33, wins: 1 },
    { position: 2, driverId: 'del-pino', teamId: 'van-amersfoort-racing', points: 22, wins: 0 },
    { position: 3, driverId: 'slater', teamId: 'trident', points: 20, wins: 0 },
    { position: 4, driverId: 'kato', teamId: 'art-grand-prix', points: 18, wins: 0 },
    { position: 5, driverId: 'deligny', teamId: 'van-amersfoort-racing', points: 12, wins: 0 },
    { position: 6, driverId: 'gladysz', teamId: 'art-grand-prix', points: 10, wins: 0 },
    { position: 7, driverId: 'benavides', teamId: 'aix-racing', points: 6, wins: 0 },
    { position: 8, driverId: 'clerot', teamId: 'rodin-motorsport', points: 4, wins: 0 },
    { position: 9, driverId: 'badoer', teamId: 'rodin-motorsport', points: 3, wins: 0 },
    { position: 10, driverId: 'stromsted', teamId: 'trident', points: 2, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'van-amersfoort-racing', points: 30, wins: 0 },
    { position: 2, teamId: 'campos-racing', points: 27, wins: 1 },
    { position: 3, teamId: 'art-grand-prix', points: 26, wins: 0 },
    { position: 4, teamId: 'trident', points: 20, wins: 0 },
    { position: 5, teamId: 'rodin-motorsport', points: 7, wins: 0 },
    { position: 6, teamId: 'aix-racing', points: 6, wins: 0 },
  ],
}
