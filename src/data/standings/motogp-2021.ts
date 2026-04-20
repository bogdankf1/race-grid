import type { SeasonStandings } from './types'
// MotoGP 2021 final standings — verified from motogp.com, Wikipedia
// Champion: Fabio Quartararo (Yamaha) — first French MotoGP champion
export const motogpStandings2021: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'quartararo', teamId: 'yamaha-motogp', points: 278, wins: 5 },
  ],
  constructors: [],
}
