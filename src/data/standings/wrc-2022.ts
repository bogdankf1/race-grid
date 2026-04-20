import type { SeasonStandings } from './types'
// WRC 2022 final standings — verified from wrc.com, Wikipedia
// Champion: Kalle Rovanperä (Toyota Gazoo Racing) — youngest WRC champion at 22
export const wrcStandings2022: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'rovanpera', teamId: 'toyota-gazoo-racing', points: 265, wins: 8 },
  ],
  constructors: [
    { position: 1, teamId: 'toyota-gazoo-racing', points: 524, wins: 11 },
  ],
}
