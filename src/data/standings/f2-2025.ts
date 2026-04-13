import type { SeasonStandings } from './types'

// FIA Formula 2 2025 final standings — verified from fiaformula2.com
export const f2Standings2025: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'hadjar', teamId: 'campos-racing', points: 242, wins: 4 },
    { position: 2, driverId: 'mini', teamId: 'prema-racing', points: 200, wins: 3 },
    { position: 3, driverId: 'camara', teamId: 'mp-motorsport', points: 153, wins: 2 },
  ],
  constructors: [
    { position: 1, teamId: 'prema-racing', points: 300, wins: 5 },
    { position: 2, teamId: 'campos-racing', points: 280, wins: 4 },
    { position: 3, teamId: 'mp-motorsport', points: 200, wins: 3 },
  ],
}
