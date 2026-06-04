import type { SeasonStandings } from './types'

// MotoGP 2026 standings — after Round 7 Italian GP at Mugello
// Source: crash.net, motogp.com, autohebdof1.com
export const motogpStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'bezzecchi', teamId: 'aprilia-racing', points: 173, wins: 3 },
    { position: 2, driverId: 'martin-j', teamId: 'aprilia-racing', points: 156, wins: 2 },
    { position: 3, driverId: 'di-giannantonio', teamId: 'vr46-racing', points: 134, wins: 1 },
    { position: 4, driverId: 'acosta', teamId: 'red-bull-ktm', points: 103, wins: 0 },
    { position: 5, driverId: 'fernandez-r', teamId: 'trackhouse-motogp', points: 88, wins: 0 },
    { position: 6, driverId: 'ogura', teamId: 'trackhouse-motogp', points: 90, wins: 0 },
    { position: 7, driverId: 'bagnaia', teamId: 'ducati-lenovo', points: 79, wins: 0 },
    { position: 8, driverId: 'marquez-a', teamId: 'gresini-racing', points: 76, wins: 1 },
    { position: 9, driverId: 'marquez-m', teamId: 'ducati-lenovo', points: 57, wins: 0 },
    { position: 10, driverId: 'aldeguer', teamId: 'gresini-racing', points: 54, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'aprilia-racing', points: 230, wins: 5 },
    { position: 2, teamId: 'ducati-lenovo', points: 162, wins: 1 },
    { position: 3, teamId: 'red-bull-ktm', points: 103, wins: 0 },
    { position: 4, teamId: 'honda-hrc', points: 43, wins: 0 },
    { position: 5, teamId: 'yamaha-motogp', points: 12, wins: 0 },
  ],
}
