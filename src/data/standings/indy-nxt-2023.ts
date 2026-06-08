import type { SeasonStandings } from './types'

// Indy NXT by Firestone 2023 final standings
// Sources: Wikipedia "2023 Indy NXT", indynxt.com archives,
// indymotorspeedway.com/23_IndyNXT_Points.html, racer.com season summaries.
// Verified 2026-06-07. Spec Dallara IL-15 chassis — no constructors championship;
// the Teams' Championship is listed in the constructors array for display purposes
// (HMD Motorsports with Dale Coyne Racing, 1st).
// Champion: Christian Rasmussen (HMD Motorsports with Dale Coyne Racing) — 5 wins.
export const indyNxtStandings2023: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'rasmussen', teamId: 'hmd-dale-coyne', points: 539, wins: 5 },
    { position: 2, driverId: 'mcelrea', teamId: 'andretti-autosport', points: 474, wins: 2 },
    { position: 3, driverId: 'siegel', teamId: 'hmd-dale-coyne', points: 415, wins: 2 },
    { position: 4, driverId: 'foster', teamId: 'andretti-autosport', points: 410, wins: 2 },
    { position: 5, driverId: 'abel', teamId: 'abel-motorsports', points: 397, wins: 0 },
    { position: 6, driverId: 'frost', teamId: 'hmd-dale-coyne', points: 361, wins: 1 },
    { position: 7, driverId: 'roe', teamId: 'andretti-autosport', points: 335, wins: 0 },
    { position: 8, driverId: 'gold-r', teamId: 'hmd-dale-coyne', points: 334, wins: 1 },
    { position: 9, driverId: 'francis-jr', teamId: 'hmd-force-indy', points: 300, wins: 0 },
    { position: 10, driverId: 'simpson', teamId: 'hmd-motorsports', points: 283, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'hmd-dale-coyne', points: 433, wins: 9 },
    { position: 2, teamId: 'andretti-autosport', points: 364, wins: 4 },
    { position: 3, teamId: 'abel-motorsports', points: 184, wins: 0 },
    { position: 4, teamId: 'juncos-hollinger', points: 144, wins: 1 },
    { position: 5, teamId: 'hmd-motorsports', points: 133, wins: 0 },
  ],
}
