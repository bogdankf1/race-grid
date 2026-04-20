import type { SeasonStandings } from './types'
// NASCAR Cup 2021 final standings — verified from nascar.com, Wikipedia
// Champion: Kyle Larson (Hendrick Motorsports)
export const nascarStandings2021: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'larson', teamId: 'hendrick-motorsports', points: 5040, wins: 10 },
  ],
  constructors: [],
}
