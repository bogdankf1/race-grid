import type { SeasonStandings } from './types'

// F1 Academy 2024 final standings — verified from Wikipedia "2024 F1 Academy season",
// f1academy.com and motorsport.com.
// Abbi Pulling (Rodin Motorsport) crowned the inaugural full-season F1 Academy
// champion at Abu Dhabi with a record nine wins. PREMA Racing secured a second
// consecutive teams' championship in the season finale's Race 3.
export const f1AcademyStandings2024: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'pulling', teamId: 'rodin-motorsport', points: 338, wins: 9 },
    { position: 2, driverId: 'pin', teamId: 'prema-racing', points: 217, wins: 3 },
    { position: 3, driverId: 'weug', teamId: 'prema-racing', points: 177, wins: 1 },
    { position: 4, driverId: 'marti-n', teamId: 'campos-racing', points: 136, wins: 0 },
    { position: 5, driverId: 'al-qubaisi-h', teamId: 'mp-motorsport', points: 133, wins: 0 },
    { position: 6, driverId: 'chambers', teamId: 'campos-racing', points: 122, wins: 1 },
    { position: 7, driverId: 'bustamante', teamId: 'art-grand-prix', points: 73, wins: 0 },
    { position: 8, driverId: 'block-l', teamId: 'art-grand-prix', points: 44, wins: 0 },
    { position: 9, driverId: 'schreiner', teamId: 'campos-racing', points: 34, wins: 0 },
    { position: 10, driverId: 'hausmann', teamId: 'prema-racing', points: 31, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'prema-racing', points: 423, wins: 4 },
    { position: 2, teamId: 'rodin-motorsport', points: 393, wins: 9 },
    { position: 3, teamId: 'campos-racing', points: 290, wins: 1 },
    { position: 4, teamId: 'mp-motorsport', points: 176, wins: 0 },
    { position: 5, teamId: 'art-grand-prix', points: 144, wins: 0 },
  ],
}
