import type { SeasonStandings } from './types'

// Super Formula 2025 final standings — verified from Wikipedia, superformula.net
// Champion: Ayumu Iwasa (Team Mugen)
export const superformulaStandings2025: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'iwasa', teamId: 'team-mugen', points: 124, wins: 2 },
    { position: 2, driverId: 'tsuboi', teamId: 'vantelin-toms', points: 119, wins: 3 },
    { position: 3, driverId: 'ohta', teamId: 'docomo-dandelion', points: 118, wins: 2 },
    { position: 4, driverId: 'makino', teamId: 'docomo-dandelion', points: 113, wins: 2 },
    { position: 5, driverId: 'nojiri', teamId: 'team-mugen', points: 102, wins: 1 },
    { position: 6, driverId: 'fraga', teamId: 'nakajima-racing', points: 77, wins: 1 },
    { position: 7, driverId: 'fenestraz', teamId: 'vantelin-toms', points: 50, wins: 1 },
    { position: 8, driverId: 'fukuzumi', teamId: 'docomo-dandelion', points: 39, wins: 0 },
  ],
  constructors: [],
}
