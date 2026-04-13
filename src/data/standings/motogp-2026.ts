import type { SeasonStandings } from './types'

// MotoGP 2026 standings — after Round 3 (USA)
export const motogpStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'bezzecchi', teamId: 'aprilia-racing', points: 81, wins: 2 },
    { position: 2, driverId: 'martin-j', teamId: 'aprilia-racing', points: 77, wins: 1 },
    { position: 3, driverId: 'acosta', teamId: 'red-bull-ktm', points: 60, wins: 0 },
    { position: 4, driverId: 'di-giannantonio', teamId: 'vr46-racing', points: 50, wins: 0 },
    { position: 5, driverId: 'marquez-m', teamId: 'ducati-lenovo', points: 45, wins: 0 },
    { position: 6, driverId: 'fernandez-r', teamId: 'trackhouse-motogp', points: 40, wins: 0 },
    { position: 7, driverId: 'ogura', teamId: 'trackhouse-motogp', points: 37, wins: 0 },
    { position: 8, driverId: 'marquez-a', teamId: 'gresini-racing', points: 28, wins: 0 },
    { position: 9, driverId: 'bagnaia', teamId: 'ducati-lenovo', points: 25, wins: 0 },
    { position: 10, driverId: 'marini', teamId: 'honda-hrc', points: 23, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'aprilia-racing', points: 101, wins: 3 },
    { position: 2, teamId: 'ducati-lenovo', points: 69, wins: 0 },
    { position: 3, teamId: 'red-bull-ktm', points: 65, wins: 0 },
    { position: 4, teamId: 'honda-hrc', points: 28, wins: 0 },
    { position: 5, teamId: 'yamaha-motogp', points: 9, wins: 0 },
  ],
}
