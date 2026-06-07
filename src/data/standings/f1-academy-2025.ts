import type { SeasonStandings } from './types'

// F1 Academy 2025 final standings — verified from Wikipedia "2025 F1 Academy season",
// f1academy.com and motorsport.com.
// Doriane Pin (Prema Racing) crowned 2025 F1 Academy champion at the Las Vegas finale.
// Prema Racing secured their third consecutive teams' championship.
export const f1AcademyStandings2025: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'pin', teamId: 'prema-racing', points: 172, wins: 4 },
    { position: 2, driverId: 'weug', teamId: 'mp-motorsport', points: 157, wins: 3 },
    { position: 3, driverId: 'chambers', teamId: 'campos-racing', points: 127, wins: 2 },
    { position: 4, driverId: 'lloyd-e', teamId: 'rodin-motorsport', points: 109, wins: 1 },
    { position: 5, driverId: 'palmowski', teamId: 'campos-racing', points: 91, wins: 1 },
    { position: 6, driverId: 'gademan', teamId: 'prema-racing', points: 74, wins: 1 },
    { position: 7, driverId: 'hurup-larsen', teamId: 'mp-motorsport', points: 70, wins: 0 },
    { position: 8, driverId: 'hausmann', teamId: 'prema-racing', points: 50, wins: 0 },
    { position: 9, driverId: 'block-l', teamId: 'art-grand-prix', points: 37, wins: 1 },
    { position: 10, driverId: 'felbermayr', teamId: 'rodin-motorsport', points: 37, wins: 1 },
  ],
  constructors: [
    { position: 1, teamId: 'prema-racing', points: 296, wins: 5 },
    { position: 2, teamId: 'campos-racing', points: 236, wins: 3 },
    { position: 3, teamId: 'mp-motorsport', points: 235, wins: 3 },
    { position: 4, teamId: 'rodin-motorsport', points: 164, wins: 2 },
    { position: 5, teamId: 'art-grand-prix', points: 57, wins: 1 },
    { position: 6, teamId: 'hitech', points: 20, wins: 0 },
  ],
}
