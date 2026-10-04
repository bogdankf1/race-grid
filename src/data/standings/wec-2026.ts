import type { SeasonStandings } from './types'

// WEC 2026 Hypercar and LMGT3 standings — verified from en.wikipedia.org/wiki/2026_FIA_World_Endurance_Championship (after Round 6 Fuji, 27 Sep 2026; fiawec.com has no scrapable standings page).
// Points scale: 25-18-15-12-10-8-6-4-2-1 (Le Mans double). One representative (first-listed) driver per crew per runbook convention; top 10.
// Wins counted from race results data. LMGT3 team table aggregates all cars of one operator (sum of car points).
export const wecStandings2026: SeasonStandings = {
  className: 'Hypercar',
  drivers: [
    { position: 1, driverId: 'buemi', teamId: 'toyota-gazoo-racing', points: 89, wins: 2 },
    { position: 2, driverId: 'conway', teamId: 'toyota-gazoo-racing', points: 79, wins: 1 },
    { position: 3, driverId: 'frijns', teamId: 'bmw-wrt', points: 75, wins: 1 },
    { position: 4, driverId: 'magnussen', teamId: 'bmw-wrt', points: 69, wins: 1 },
    { position: 5, driverId: 's-van-der-linde', teamId: 'bmw-wrt', points: 65, wins: 1 },
    { position: 6, driverId: 'vanthoor', teamId: 'bmw-wrt', points: 63, wins: 1 },
    { position: 7, driverId: 'calado', teamId: 'ferrari-af-corse', points: 59, wins: 0 },
    { position: 8, driverId: 'habsburg', teamId: 'alpine', points: 56, wins: 0 },
    { position: 9, driverId: 'fuoco', teamId: 'ferrari-af-corse', points: 54, wins: 1 },
    { position: 10, driverId: 'nato', teamId: 'jota', points: 50, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'toyota-gazoo-racing', points: 169, wins: 3 },
    { position: 2, teamId: 'bmw-wrt', points: 146, wins: 2 },
    { position: 3, teamId: 'ferrari-af-corse', points: 115, wins: 1 },
    { position: 4, teamId: 'alpine', points: 96, wins: 0 },
    { position: 5, teamId: 'cadillac', points: 96, wins: 0 },
    { position: 6, teamId: 'aston-martin', points: 54, wins: 0 },
    { position: 7, teamId: 'peugeot', points: 24, wins: 0 },
    { position: 8, teamId: 'genesis-magma', points: 12, wins: 0 },
  ],
  otherClasses: [
    {
      className: 'LMGT3',
      drivers: [
        { position: 1, driverId: 'edgar', teamId: 'tf-sport', points: 86, wins: 1 },
        { position: 2, driverId: 'catsburg', teamId: 'tf-sport', points: 82, wins: 1 },
        { position: 3, driverId: 'keating', teamId: 'tf-sport', points: 64, wins: 1 },
        { position: 4, driverId: 'drudi', teamId: 'heart-of-racing', points: 62, wins: 1 },
        { position: 5, driverId: 'dempsey', teamId: 'racing-team-turkey-tf', points: 58, wins: 1 },
        { position: 6, driverId: 'boguslavskiy', teamId: 'manthey-dk', points: 54, wins: 0 },
        { position: 7, driverId: 'heriau', teamId: 'vista-af-corse', points: 54, wins: 0 },
        { position: 8, driverId: 'dan-harper', teamId: 'team-wrt', points: 51, wins: 1 },
        { position: 9, driverId: 'lietz', teamId: 'the-bend-manthey', points: 49, wins: 0 },
        { position: 10, driverId: 'adam', teamId: 'heart-of-racing', points: 49, wins: 0 },
      ],
      constructors: [
        { position: 1, teamId: 'heart-of-racing', points: 111, wins: 1 },
        { position: 2, teamId: 'team-wrt', points: 98, wins: 2 },
        { position: 3, teamId: 'tf-sport', points: 86, wins: 1 },
        { position: 4, teamId: 'akkodis-asp', points: 76, wins: 0 },
        { position: 5, teamId: 'vista-af-corse', points: 67, wins: 0 },
        { position: 6, teamId: 'garage-59', points: 60, wins: 1 },
        { position: 7, teamId: 'racing-team-turkey-tf', points: 58, wins: 1 },
        { position: 8, teamId: 'manthey-dk', points: 54, wins: 0 },
        { position: 9, teamId: 'the-bend-manthey', points: 49, wins: 0 },
        { position: 10, teamId: 'proton-competition', points: 30, wins: 0 },
        { position: 11, teamId: 'iron-lynx', points: 23, wins: 0 },
      ],
    },
  ],
}
