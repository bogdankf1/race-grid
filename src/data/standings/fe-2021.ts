import type { SeasonStandings } from './types'

// Formula E Season 7 (2020-21) final standings — verified from fiaformulae.com, Wikipedia
// Champion: Nyck de Vries (Mercedes-EQ)
export const feStandings2021: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'de-vries', teamId: 'mercedes-fe', points: 99, wins: 2 },
  ],
  constructors: [],
}
