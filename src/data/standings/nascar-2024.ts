import type { SeasonStandings } from './types'
// NASCAR Cup 2024 final standings — verified from nascar.com, Wikipedia
// Champion: Joey Logano (Team Penske) — 3rd title
export const nascarStandings2024: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'logano', teamId: 'team-penske', points: 5040, wins: 3 },
  ],
  constructors: [],
}
