import type { SeasonStandings } from './types'

// Indy NXT by Firestone 2024 final standings
// Sources: indynxt.com/Standings, Wikipedia "2024 Indy NXT",
// indymotorspeedway.com/24_IndyLites_Points.html. Verified 2026-06-07.
// Spec Dallara IL-15 chassis — no constructors championship; the Teams' Championship
// is listed in the constructors array for display purposes (Andretti Global, 1st).
export const indyNxtStandings2024: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'foster', teamId: 'andretti-global', points: 639, wins: 8 },
    { position: 2, driverId: 'abel', teamId: 'abel-motorsports', points: 517, wins: 3 },
    { position: 3, driverId: 'collet', teamId: 'hmd-motorsports', points: 436, wins: 1 },
    { position: 4, driverId: 'hedge', teamId: 'hmd-motorsports', points: 332, wins: 0 },
    { position: 5, driverId: 'de-alba', teamId: 'andretti-cape', points: 331, wins: 0 },
    { position: 6, driverId: 'roe', teamId: 'andretti-global', points: 316, wins: 0 },
    { position: 7, driverId: 'chadwick', teamId: 'andretti-global', points: 310, wins: 1 },
    { position: 8, driverId: 'sundaramoorthy', teamId: 'abel-motorsports', points: 309, wins: 0 },
    { position: 9, driverId: 'b-aron', teamId: 'andretti-global', points: 302, wins: 0 },
    { position: 10, driverId: 'gold-r', teamId: 'hmd-motorsports', points: 289, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'andretti-global', points: 428, wins: 10 },
    { position: 2, teamId: 'hmd-motorsports', points: 351, wins: 1 },
    { position: 3, teamId: 'abel-motorsports', points: 310, wins: 3 },
    { position: 4, teamId: 'andretti-cape', points: 167, wins: 0 },
    { position: 5, teamId: 'hmd-force-indy', points: 113, wins: 0 },
  ],
}
