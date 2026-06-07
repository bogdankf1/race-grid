import type { SeasonStandings } from './types'

// Indy NXT by Firestone 2026 standings — after Round 7 Detroit GP (2026-05-31)
// Sources: indynxt.com/Standings, Wikipedia "2026 Indy NXT"
// No constructors championship — series uses spec Dallara IL-15 chassis
export const indyNxtStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'e-fittipaldi', teamId: 'hmd-motorsports', points: 266, wins: 2 },
    { position: 2, driverId: 'nikita-johnson', teamId: 'cape-motorsports', points: 259, wins: 2 },
    { position: 3, driverId: 'kucharczyk', teamId: 'hmd-motorsports', points: 258, wins: 1 },
    { position: 4, driverId: 'm-taylor', teamId: 'andretti-global', points: 228, wins: 1 },
    { position: 5, driverId: 'hughes-l', teamId: 'andretti-global', points: 176, wins: 0 },
    { position: 6, driverId: 'de-tullio', teamId: 'a-j-foyt-enterprises', points: 171, wins: 1 },
    { position: 7, driverId: 'rowe', teamId: 'abel-motorsports', points: 159, wins: 0 },
    { position: 8, driverId: 'correa', teamId: 'cusick-morgan-motorsports', points: 156, wins: 0 },
    { position: 9, driverId: 'murray-s', teamId: 'andretti-global', points: 148, wins: 0 },
    { position: 10, driverId: 'missig', teamId: 'abel-motorsports', points: 140, wins: 0 },
  ],
  constructors: [],
}
