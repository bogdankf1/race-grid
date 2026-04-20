import type { SeasonStandings } from './types'

// WEC 2026 Hypercar standings — verified from fiawec.com, racetrackmasters.com (after Round 1 Imola)
export const wecStandings2026: SeasonStandings = {
  className: 'Hypercar',
  drivers: [
    { position: 1, driverId: 'buemi', teamId: 'toyota-gazoo-racing', points: 38, wins: 1 },
    { position: 2, driverId: 'pier-guidi', teamId: 'ferrari-af-corse', points: 27, wins: 0 },
    { position: 3, driverId: 'conway', teamId: 'toyota-gazoo-racing', points: 23, wins: 0 },
    { position: 4, driverId: 'da-costa', teamId: 'alpine', points: 19, wins: 0 },
    { position: 5, driverId: 'frijns', teamId: 'bmw-wrt', points: 15, wins: 0 },
    { position: 6, driverId: 'fuoco', teamId: 'ferrari-af-corse', points: 12, wins: 0 },
    { position: 7, driverId: 'magnussen', teamId: 'bmw-wrt', points: 9, wins: 0 },
    { position: 8, driverId: 'bamber', teamId: 'jota', points: 6, wins: 0 },
    { position: 9, driverId: 'tincknell', teamId: 'aston-martin', points: 4, wins: 0 },
    { position: 10, driverId: 'ye', teamId: 'ferrari-af-corse', points: 2, wins: 0 },
    { position: 11, driverId: 'makowiecki', teamId: 'alpine', points: 1, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'toyota-gazoo-racing', points: 61, wins: 1 },
    { position: 2, teamId: 'ferrari-af-corse', points: 41, wins: 0 },
    { position: 3, teamId: 'bmw-wrt', points: 24, wins: 0 },
    { position: 4, teamId: 'alpine', points: 20, wins: 0 },
    { position: 5, teamId: 'jota', points: 6, wins: 0 },
    { position: 6, teamId: 'aston-martin', points: 4, wins: 0 },
    { position: 7, teamId: 'peugeot', points: 0, wins: 0 },
  ],
}
