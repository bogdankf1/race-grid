import type { SeasonStandings } from './types'
// MotoGP 2023 final standings — verified from motogp.com, Wikipedia
// Champion: Francesco Bagnaia (Ducati Lenovo Team) — back-to-back
export const motogpStandings2023: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'bagnaia', teamId: 'ducati-lenovo', points: 467, wins: 7 },
  ],
  constructors: [],
}
