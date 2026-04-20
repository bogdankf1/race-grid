import type { SeasonStandings } from './types'
// WRC 2021 final standings — verified from wrc.com, Wikipedia
// Champion: Sébastien Ogier (Toyota Gazoo Racing)
export const wrcStandings2021: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'ogier', teamId: 'toyota-gazoo-racing', points: 230, wins: 7 },
  ],
  constructors: [
    { position: 1, teamId: 'toyota-gazoo-racing', points: 524, wins: 9 },
  ],
}
