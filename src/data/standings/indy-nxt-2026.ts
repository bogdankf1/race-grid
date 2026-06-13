import type { SeasonStandings } from './types'

// Indy NXT by Firestone 2026 standings — after Round 8 Gateway/WWTR
// Sources: indynxt.com/Standings, Wikipedia "2026 Indy NXT". Wins counted from race results data.
// No constructors championship — series uses spec Dallara IL-15 chassis
export const indyNxtStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'nikita-johnson', teamId: 'cape-motorsports', points: 285, wins: 2 },
    { position: 2, driverId: 'e-fittipaldi', teamId: 'hmd-motorsports', points: 283, wins: 2 },
    { position: 3, driverId: 'kucharczyk', teamId: 'hmd-motorsports', points: 280, wins: 1 },
    { position: 4, driverId: 'm-taylor', teamId: 'andretti-global', points: 258, wins: 1 },
    { position: 5, driverId: 'rowe', teamId: 'abel-motorsports', points: 212, wins: 1 },
    { position: 6, driverId: 'de-tullio', teamId: 'a-j-foyt-enterprises', points: 211, wins: 1 },
    { position: 7, driverId: 'hughes-l', teamId: 'andretti-global', points: 206, wins: 0 },
    { position: 8, driverId: 'correa', teamId: 'cusick-morgan-motorsports', points: 172, wins: 0 },
    { position: 9, driverId: 'murray-s', teamId: 'andretti-global', points: 166, wins: 0 },
    { position: 10, driverId: 'missig', teamId: 'abel-motorsports', points: 160, wins: 0 },
    { position: 11, driverId: 'pierson', teamId: 'andretti-global', points: 159, wins: 0 },
    { position: 12, driverId: 'garcia-m', teamId: 'abel-motorsports', points: 150, wins: 0 },
    { position: 13, driverId: 'j-beeton', teamId: 'hmd-motorsports', points: 140, wins: 0 },
    { position: 14, driverId: 'b-aron', teamId: 'chip-ganassi-racing', points: 131, wins: 0 },
    { position: 15, driverId: 'nannini', teamId: 'cape-motorsports', points: 129, wins: 0 },
  ],
  constructors: [],
}
