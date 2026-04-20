import type { SeasonStandings } from './types'
// WRC 2023 final standings — verified from wrc.com, Wikipedia
// Champion: Kalle Rovanperä (Toyota Gazoo Racing) — back-to-back
export const wrcStandings2023: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'rovanpera', teamId: 'toyota-gazoo-racing', points: 196, wins: 4 },
  ],
  constructors: [
    { position: 1, teamId: 'toyota-gazoo-racing', points: 479, wins: 9 },
  ],
}
