import type { SeasonStandings } from './types'

// MotoGP 2026 standings — after Round 8 Hungarian GP at Balaton Park (2026-06-07)
// Points: Wikipedia "2026 MotoGP World Championship" + crash.net post-Balaton standings.
// Wins: counted from race results data (race winners through Round 8).
export const motogpStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'bezzecchi', teamId: 'aprilia-racing', points: 180, wins: 3 },
    { position: 2, driverId: 'martin-j', teamId: 'aprilia-racing', points: 160, wins: 2 },
    { position: 3, driverId: 'di-giannantonio', teamId: 'vr46-racing', points: 138, wins: 1 },
    { position: 4, driverId: 'acosta', teamId: 'red-bull-ktm', points: 132, wins: 0 },
    { position: 5, driverId: 'marquez-m', teamId: 'ducati-lenovo', points: 108, wins: 1 },
    { position: 6, driverId: 'ogura', teamId: 'trackhouse-motogp', points: 105, wins: 0 },
    { position: 7, driverId: 'bagnaia', teamId: 'ducati-lenovo', points: 99, wins: 0 },
    { position: 8, driverId: 'fernandez-r', teamId: 'trackhouse-motogp', points: 93, wins: 0 },
    { position: 9, driverId: 'marquez-a', teamId: 'gresini-racing', points: 67, wins: 1 },
    { position: 10, driverId: 'aldeguer', teamId: 'gresini-racing', points: 64, wins: 0 },
    { position: 11, driverId: 'marini', teamId: 'honda-hrc', points: 57, wins: 0 },
    { position: 12, driverId: 'bastianini', teamId: 'ktm-tech3', points: 48, wins: 0 },
    { position: 13, driverId: 'binder', teamId: 'red-bull-ktm', points: 48, wins: 0 },
    { position: 14, driverId: 'morbidelli', teamId: 'vr46-racing', points: 40, wins: 0 },
    { position: 15, driverId: 'quartararo', teamId: 'yamaha-motogp', points: 37, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'aprilia-racing', points: 238, wins: 5 },
    { position: 2, teamId: 'ducati-lenovo', points: 225, wins: 3 },
    { position: 3, teamId: 'red-bull-ktm', points: 154, wins: 0 },
    { position: 4, teamId: 'honda-hrc', points: 84, wins: 0 },
    { position: 5, teamId: 'yamaha-motogp', points: 49, wins: 0 },
  ],
}
