import type { SeasonStandings } from './types'

// MotoGP 2026 standings — after Round 5 French GP Sprint at Le Mans
// Source: crash.net, motogp.com (race not yet run)
export const motogpStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'bezzecchi', teamId: 'aprilia-racing', points: 108, wins: 2 },
    { position: 2, driverId: 'martin-j', teamId: 'aprilia-racing', points: 102, wins: 1 },
    { position: 3, driverId: 'acosta', teamId: 'red-bull-ktm', points: 72, wins: 0 },
    { position: 4, driverId: 'di-giannantonio', teamId: 'vr46-racing', points: 71, wins: 0 },
    { position: 5, driverId: 'marquez-m', teamId: 'ducati-lenovo', points: 57, wins: 0 },
    { position: 6, driverId: 'marquez-a', teamId: 'gresini-racing', points: 55, wins: 1 },
    { position: 7, driverId: 'fernandez-r', teamId: 'trackhouse-motogp', points: 54, wins: 0 },
    { position: 8, driverId: 'ogura', teamId: 'trackhouse-motogp', points: 51, wins: 0 },
    { position: 9, driverId: 'bagnaia', teamId: 'ducati-lenovo', points: 43, wins: 0 },
    { position: 10, driverId: 'bastianini', teamId: 'ktm-tech3', points: 30, wins: 0 },
    { position: 11, driverId: 'binder-b', teamId: 'red-bull-ktm', points: 28, wins: 0 },
    { position: 12, driverId: 'marini', teamId: 'honda-hrc', points: 27, wins: 0 },
    { position: 13, driverId: 'morbidelli', teamId: 'vr46-racing', points: 25, wins: 0 },
    { position: 14, driverId: 'zarco', teamId: 'lcr-honda', points: 24, wins: 0 },
    { position: 15, driverId: 'aldeguer', teamId: 'gresini-racing', points: 20, wins: 0 },
    { position: 16, driverId: 'quartararo', teamId: 'yamaha-motogp', points: 16, wins: 0 },
    { position: 17, driverId: 'moreira', teamId: 'lcr-honda', points: 10, wins: 0 },
    { position: 18, driverId: 'mir', teamId: 'honda-hrc', points: 8, wins: 0 },
    { position: 19, driverId: 'rins', teamId: 'yamaha-motogp', points: 3, wins: 0 },
    { position: 20, driverId: 'razgatlioglu', teamId: 'pramac-yamaha', points: 1, wins: 0 },
  ],
  // Constructor standings: not verified post-sprint; will be updated after the French GP race
  constructors: [
    { position: 1, teamId: 'aprilia-racing', points: 125, wins: 3 },
    { position: 2, teamId: 'ducati-lenovo', points: 106, wins: 1 },
    { position: 3, teamId: 'red-bull-ktm', points: 72, wins: 0 },
    { position: 4, teamId: 'honda-hrc', points: 32, wins: 0 },
    { position: 5, teamId: 'yamaha-motogp', points: 12, wins: 0 },
  ],
}
