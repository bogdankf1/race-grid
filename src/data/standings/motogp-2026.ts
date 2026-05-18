import type { SeasonStandings } from './types'

// MotoGP 2026 standings — after Round 6 Catalan GP at Barcelona
// Source: crash.net, motogp.com, autohebdof1.com
export const motogpStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'bezzecchi', teamId: 'aprilia-racing', points: 142, wins: 2 },
    { position: 2, driverId: 'martin-j', teamId: 'aprilia-racing', points: 127, wins: 2 },
    { position: 3, driverId: 'di-giannantonio', teamId: 'vr46-racing', points: 116, wins: 1 },
    { position: 4, driverId: 'acosta', teamId: 'red-bull-ktm', points: 92, wins: 0 },
    { position: 5, driverId: 'ogura', teamId: 'trackhouse-motogp', points: 77, wins: 0 },
    { position: 6, driverId: 'fernandez-r', teamId: 'trackhouse-motogp', points: 68, wins: 0 },
    { position: 7, driverId: 'marquez-a', teamId: 'gresini-racing', points: 67, wins: 1 },
    { position: 8, driverId: 'bagnaia', teamId: 'ducati-lenovo', points: 63, wins: 0 },
    { position: 9, driverId: 'marquez-m', teamId: 'ducati-lenovo', points: 57, wins: 0 },
    { position: 10, driverId: 'aldeguer', teamId: 'gresini-racing', points: 47, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'aprilia-racing', points: 185, wins: 4 },
    { position: 2, teamId: 'ducati-lenovo', points: 145, wins: 1 },
    { position: 3, teamId: 'red-bull-ktm', points: 92, wins: 0 },
    { position: 4, teamId: 'honda-hrc', points: 43, wins: 0 },
    { position: 5, teamId: 'yamaha-motogp', points: 12, wins: 0 },
  ],
}
