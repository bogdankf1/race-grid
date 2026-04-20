import type { SeasonStandings } from './types'
// Dakar 2023 Cars final standings — verified from dakar.com, Wikipedia
// Champion: Nasser Al-Attiyah (Toyota Gazoo Racing) — back-to-back
export const dakarStandings2023: SeasonStandings = {
  className: 'Cars',
  drivers: [
    { position: 1, driverId: 'al-attiyah', teamId: 'toyota-gazoo-racing', points: 1, wins: 1 },
  ],
  constructors: [],
}
