import type { SeasonStandings } from './types'

// F1 Academy 2026 standings — verified from f1academy.com, motorsport.com, Wikipedia
// As of 2026-06-07: After Round 2 Montreal (2/6 rounds complete).
// Alisha Palmowski leads with 78 points after 3 wins in Montreal.
export const f1AcademyStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'palmowski', teamId: 'campos-racing', points: 78, wins: 3 },
    { position: 2, driverId: 'felbermayr', teamId: 'rodin-motorsport', points: 53, wins: 1 },
    { position: 3, driverId: 'bruce-m', teamId: 'campos-racing', points: 37, wins: 0 },
    { position: 4, driverId: 'westcott', teamId: 'prema-racing', points: 36, wins: 0 },
    { position: 5, driverId: 'paatz', teamId: 'prema-racing', points: 35, wins: 1 },
    { position: 6, driverId: 'gademan', teamId: 'mp-motorsport', points: 30, wins: 1 },
    { position: 7, driverId: 'ferreira-r', teamId: 'campos-racing', points: 27, wins: 0 },
    { position: 8, driverId: 'lloyd-e', teamId: 'rodin-motorsport', points: 23, wins: 0 },
    { position: 9, driverId: 'hurup-larsen', teamId: 'mp-motorsport', points: 23, wins: 0 },
    { position: 10, driverId: 'granada', teamId: 'prema-racing', points: 17, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'campos-racing', points: 142, wins: 3 },
    { position: 2, teamId: 'prema-racing', points: 88, wins: 1 },
    { position: 3, teamId: 'rodin-motorsport', points: 80, wins: 1 },
    { position: 4, teamId: 'mp-motorsport', points: 53, wins: 1 },
    { position: 5, teamId: 'art-grand-prix', points: 26, wins: 0 },
    { position: 6, teamId: 'hitech', points: 1, wins: 0 },
  ],
}
