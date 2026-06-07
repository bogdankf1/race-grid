import type { SeasonStandings } from './types'

// Indy NXT by Firestone 2025 final standings
// Sources: indynxt.com/Standings, Wikipedia "2025 Indy NXT",
// indymotorspeedway.com/25_IndyLites_Points.html
// No constructors championship — series uses spec Dallara IL-15 chassis.
export const indyNxtStandings2025: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'hauger', teamId: 'andretti-global', points: 599, wins: 6 },
    { position: 2, driverId: 'collet', teamId: 'hmd-motorsports', points: 527, wins: 3 },
    { position: 3, driverId: 'hughes-l', teamId: 'andretti-global', points: 466, wins: 2 },
    { position: 4, driverId: 'rowe', teamId: 'abel-force-indy', points: 458, wins: 2 },
    { position: 5, driverId: 'de-alba', teamId: 'andretti-global', points: 418, wins: 1 },
    { position: 6, driverId: 'pierson', teamId: 'hmd-motorsports', points: 378, wins: 0 },
    { position: 7, driverId: 'hedge', teamId: 'abel-motorsports', points: 358, wins: 0 },
    { position: 8, driverId: 'koolen', teamId: 'chip-ganassi-racing', points: 288, wins: 0 },
    { position: 9, driverId: 'missig', teamId: 'abel-motorsports', points: 273, wins: 0 },
    { position: 10, driverId: 'miller-jw', teamId: 'abel-miller-vinatieri', points: 266, wins: 0 },
  ],
  constructors: [],
}
