import type { SeasonStandings } from './types'

// Super GT 2025 GT500 final standings — verified from Wikipedia, dailysportscar.com
// Champions: Sho Tsuboi / Kenta Yamashita (TGR Team au TOM'S)
export const supergtStandings2025: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'tsuboi', teamId: 'tgr-au-toms', points: 80, wins: 3 },
    { position: 2, driverId: 'yamamoto', teamId: 'stanley-kunimitsu', points: 63, wins: 1 },
    { position: 3, driverId: 'ishiura', teamId: 'keeper-cerumo', points: 56, wins: 1 },
    { position: 4, driverId: 'fukuzumi', teamId: 'tgr-eneos-rookie', points: 54, wins: 1 },
    { position: 5, driverId: 'sasahara', teamId: 'tgr-deloitte-toms', points: 49, wins: 1 },
    { position: 6, driverId: 'matsuda', teamId: 'nismo', points: 49, wins: 1 },
    { position: 7, driverId: 'otsu', teamId: 'arta-mugen', points: 32, wins: 0 },
  ],
  constructors: [],
}
