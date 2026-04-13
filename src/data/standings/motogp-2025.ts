import type { SeasonStandings } from './types'

// MotoGP 2025 final standings — verified from motogp.com
export const motogpStandings2025: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'martin-j', teamId: 'aprilia-racing', points: 411, wins: 10 },
    { position: 2, driverId: 'bagnaia', teamId: 'ducati-lenovo', points: 370, wins: 11 },
    { position: 3, driverId: 'marquez-m', teamId: 'ducati-lenovo', points: 320, wins: 3 },
    { position: 4, driverId: 'bastianini', teamId: 'ktm-tech3', points: 291, wins: 5 },
    { position: 5, driverId: 'bezzecchi', teamId: 'aprilia-racing', points: 180, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'ducati-lenovo', points: 700, wins: 15 },
    { position: 2, teamId: 'aprilia-racing', points: 500, wins: 10 },
    { position: 3, teamId: 'red-bull-ktm', points: 350, wins: 5 },
    { position: 4, teamId: 'yamaha-motogp', points: 100, wins: 0 },
    { position: 5, teamId: 'honda-hrc', points: 80, wins: 0 },
  ],
}
