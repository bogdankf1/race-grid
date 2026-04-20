import type { SeasonStandings } from './types'
// Dakar 2021 Cars final standings — verified from dakar.com, Wikipedia
// Champion: Stéphane Peterhansel (X-raid MINI JCW Team)
export const dakarStandings2021: SeasonStandings = {
  className: 'Cars',
  drivers: [
    { position: 1, driverId: 'peterhansel', teamId: 'x-raid-mini', points: 1, wins: 1 },
  ],
  constructors: [],
}
