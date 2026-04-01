import type { SeasonStandings } from './types'

// WEC 2025 final Hypercar standings — verified from autohebdof1.com, fiawec.com
// Drivers entry uses first driver of crew as driverId; full crew in results data
export const wecStandings2025: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'pier-guidi', teamId: 'ferrari-af-corse', points: 133, wins: 3 },
    { position: 2, driverId: 'kubica', teamId: 'ferrari-af-corse', points: 117, wins: 1 },
    { position: 3, driverId: 'fuoco', teamId: 'ferrari-af-corse', points: 98, wins: 0 },
    { position: 4, driverId: 'estre', teamId: 'porsche-penske', points: 94, wins: 1 },
    { position: 5, driverId: 'nato', teamId: 'jota', points: 93, wins: 0 },
    { position: 6, driverId: 'kobayashi', teamId: 'toyota-gazoo-racing', points: 89, wins: 1 },
    { position: 7, driverId: 'hirakawa', teamId: 'toyota-gazoo-racing', points: 66, wins: 0 },
    { position: 8, driverId: 'campbell', teamId: 'porsche-penske', points: 65, wins: 0 },
    { position: 9, driverId: 'rast', teamId: 'team-wrt', points: 47, wins: 0 },
    { position: 10, driverId: 'bamber', teamId: 'jota', points: 46, wins: 0 },
    { position: 11, driverId: 'andlauer', teamId: 'porsche-penske', points: 46, wins: 0 },
    { position: 12, driverId: 'di-resta', teamId: 'peugeot', points: 44, wins: 0 },
    { position: 13, driverId: 'vergne', teamId: 'peugeot', points: 38, wins: 0 },
    { position: 14, driverId: 'milesi', teamId: 'alpine', points: 37, wins: 1 },
    { position: 15, driverId: 'frijns', teamId: 'team-wrt', points: 37, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'ferrari', points: 245, wins: 4 },
    { position: 2, teamId: 'toyota-gazoo-racing', points: 171, wins: 1 },
    { position: 3, teamId: 'porsche-penske', points: 165, wins: 1 },
    { position: 4, teamId: 'jota', points: 158, wins: 1 },
    { position: 5, teamId: 'team-wrt', points: 87, wins: 0 },
    { position: 6, teamId: 'alpine', points: 86, wins: 1 },
    { position: 7, teamId: 'peugeot', points: 84, wins: 0 },
    { position: 8, teamId: 'aston-martin', points: 24, wins: 0 },
  ],
}
