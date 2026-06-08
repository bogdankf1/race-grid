import type { SeasonStandings } from './types'

// Indy Lights 2021 final standings
// Sources: Wikipedia "2021 Indy Lights", indylights.com archives,
// indymotorspeedway.com/21_IndyLites_Points.html. Verified 2026-06-07.
// Spec Dallara IL-15 chassis — no constructors championship; the Teams' Championship
// is listed in the constructors array for display purposes (HMD Motorsports, 1st).
// Champion: Kyle Kirkwood (Andretti Autosport) — 10 wins, also Rookie of the Year.
export const indyNxtStandings2021: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'kirkwood', teamId: 'andretti-autosport', points: 537, wins: 10 },
    { position: 2, driverId: 'malukas', teamId: 'hmd-motorsports', points: 524, wins: 6 },
    { position: 3, driverId: 'lundqvist', teamId: 'global-racing-group', points: 449, wins: 3 },
    { position: 4, driverId: 'pedersen-b', teamId: 'global-racing-group', points: 356, wins: 0 },
    { position: 5, driverId: 'frost', teamId: 'andretti-autosport', points: 338, wins: 0 },
    { position: 6, driverId: 'defrancesco', teamId: 'andretti-steinbrenner', points: 326, wins: 0 },
    { position: 7, driverId: 'megennis', teamId: 'andretti-autosport', points: 319, wins: 0 },
    { position: 8, driverId: 'robb', teamId: 'juncos-racing', points: 249, wins: 0 },
    { position: 9, driverId: 'sowery-t', teamId: 'juncos-racing', points: 236, wins: 0 },
    { position: 10, driverId: 'peroni', teamId: 'carlin', points: 228, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'hmd-motorsports', points: 665, wins: 6 },
    { position: 2, teamId: 'andretti-autosport', points: 622, wins: 10 },
    { position: 3, teamId: 'juncos-racing', points: 324, wins: 0 },
    { position: 4, teamId: 'carlin', points: 249, wins: 0 },
    { position: 5, teamId: 'pserra-racing', points: 118, wins: 0 },
  ],
}
