import type { SeasonStandings } from './types'

// Formula E Season 8 (2021-22) final standings — verified from fiaformulae.com, Wikipedia
// Champion: Stoffel Vandoorne (Mercedes-EQ)
export const feStandings2022: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'vandoorne', teamId: 'mercedes-fe', points: 213, wins: 2 },
  ],
  constructors: [],
}
