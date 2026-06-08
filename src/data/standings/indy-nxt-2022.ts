import type { SeasonStandings } from './types'

// Indy Lights 2022 final standings
// Sources: Wikipedia "2022 Indy Lights", indylights.com archives,
// indymotorspeedway.com/22_IndyLites_Points.html, racer.com season summaries.
// Verified 2026-06-07. Spec Dallara IL-15 chassis — no constructors championship;
// the Teams' Championship is listed in the constructors array for display purposes
// (Andretti Autosport, 1st).
// Champion: Linus Lundqvist (HMD Motorsports with Dale Coyne Racing) — 5 wins.
export const indyNxtStandings2022: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'lundqvist', teamId: 'hmd-dale-coyne', points: 575, wins: 5 },
    { position: 2, driverId: 'robb', teamId: 'andretti-autosport', points: 483, wins: 1 },
    { position: 3, driverId: 'brabham-m', teamId: 'andretti-autosport', points: 471, wins: 2 },
    { position: 4, driverId: 'mcelrea', teamId: 'andretti-autosport', points: 460, wins: 2 },
    { position: 5, driverId: 'pedersen-b', teamId: 'global-racing-group', points: 444, wins: 1 },
    { position: 6, driverId: 'rasmussen', teamId: 'andretti-autosport', points: 440, wins: 2 },
    { position: 7, driverId: 'frost', teamId: 'hmd-dale-coyne', points: 382, wins: 1 },
    { position: 8, driverId: 'abel', teamId: 'abel-motorsports', points: 355, wins: 0 },
    { position: 9, driverId: 'simpson', teamId: 'hmd-dale-coyne', points: 312, wins: 0 },
    { position: 10, driverId: 'francis-jr', teamId: 'force-indy', points: 299, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'andretti-autosport', points: 454, wins: 7 },
    { position: 2, teamId: 'hmd-dale-coyne', points: 406, wins: 6 },
    { position: 3, teamId: 'global-racing-group', points: 237, wins: 1 },
    { position: 4, teamId: 'abel-motorsports', points: 163, wins: 0 },
    { position: 5, teamId: 'force-indy', points: 119, wins: 0 },
  ],
}
