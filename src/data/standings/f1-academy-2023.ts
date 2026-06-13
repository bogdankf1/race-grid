import type { SeasonStandings } from './types'

// F1 Academy 2023 final standings — verified from Wikipedia
// "2023 F1 Academy season", f1academy.com (driver and team standings tables)
// and motorsport.com.
//
// Marta García (Prema Racing) crowned the inaugural F1 Academy champion at
// the Circuit of the Americas finale. PREMA Racing edged MP Motorsport to
// take the inaugural teams' championship by just eight points.
//
// Wins count below = race wins only (poles are not counted as wins here).
// García: R1 R1+R3, R2 R3, R5 R1, R6 R2+R3, R7 R1 = 7
// Hamda Al Qubaisi: R2 R1, R4 R1+R3, R7 R2 = 4
// Bühler: R3 R3, R5 R2 = 2
// Bustamante: R2 R2, R5 R3 = 2
// Amna Al Qubaisi: R1 R2, R3 R2 = 2
// Martí: R6 R1 = 1
// de Heus: R3 R1 = 1
// Edgar: R7 R3 = 1
// Schreiner: R4 R2 = 1 (not top 10 in standings)
export const f1AcademyStandings2023: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'garcia-marta', teamId: 'prema-racing', points: 278, wins: 7 },
    { position: 2, driverId: 'buhler-l', teamId: 'art-grand-prix', points: 222, wins: 2 },
    { position: 3, driverId: 'al-qubaisi-h', teamId: 'mp-motorsport', points: 207, wins: 4 },
    { position: 4, driverId: 'marti-n', teamId: 'campos-racing', points: 181, wins: 1 },
    { position: 5, driverId: 'pulling', teamId: 'rodin-carlin', points: 175, wins: 0 },
    { position: 6, driverId: 'al-qubaisi-a', teamId: 'mp-motorsport', points: 117, wins: 2 },
    { position: 7, driverId: 'bustamante', teamId: 'prema-racing', points: 116, wins: 2 },
    { position: 8, driverId: 'edgar-j', teamId: 'rodin-carlin', points: 114, wins: 1 },
    { position: 9, driverId: 'de-heus', teamId: 'mp-motorsport', points: 87, wins: 1 },
    { position: 10, driverId: 'lovinfosse', teamId: 'campos-racing', points: 65, wins: 0 },
  ],
  constructors: [],
}
