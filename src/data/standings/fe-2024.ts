import type { SeasonStandings } from './types'

// Formula E Season 10 (2023-24) final standings — verified from fiaformulae.com, Wikipedia
// Champion: Pascal Wehrlein (Porsche)
export const feStandings2024: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'wehrlein', teamId: 'porsche-fe', points: 198, wins: 3 },
  ],
  constructors: [],
}
