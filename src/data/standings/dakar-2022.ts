import type { SeasonStandings } from './types'
// Dakar 2022 Cars final standings — verified from dakar.com, Wikipedia
// Champion: Nasser Al-Attiyah (Toyota Gazoo Racing)
export const dakarStandings2022: SeasonStandings = {
  className: 'Cars',
  drivers: [
    { position: 1, driverId: 'al-attiyah', teamId: 'toyota-gazoo-racing', points: 1, wins: 1 },
  ],
  constructors: [],
}
