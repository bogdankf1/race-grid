import type { SeasonStandings } from './types'

// Supercars 2022 final standings — verified from supercars.com, Wikipedia
// Champion: Shane van Gisbergen (Triple Eight) — record 21 wins in a season
export const supercarsStandings2022: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'van-gisbergen', teamId: 'triple-eight', points: 3429, wins: 21 },
  ],
  constructors: [],
}
