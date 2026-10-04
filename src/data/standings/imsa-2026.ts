import type { SeasonStandings } from './types'

// IMSA WeatherTech 2026 standings — GTP, GTD Pro, GTD — verified from en.wikipedia.org/wiki/2026_IMSA_SportsCar_Championship (after Round 10 Petit Le Mans, 3 Oct 2026; season complete).
// imsa.com/weathertech/standings only showed totals through Round 9 (Indianapolis) at the time of writing (Petit Le Mans column still 0), so the full-season figures come from Wikipedia.
// One first-listed driver per crew per runbook convention (crews with identical points are merged in the source). Top 10 per class.
// Wins counted from race results data (class wins).
export const imsaStandings2026: SeasonStandings = {
  className: 'GTP',
  drivers: [
    { position: 1, driverId: 'aitken', teamId: 'whelen-engineering', points: 3020, wins: 2 },
    { position: 2, driverId: 'heinrich', teamId: 'jdc-miller', points: 2859, wins: 3 },
    { position: 3, driverId: 'yelloly', teamId: 'meyer-shank-racing', points: 2723, wins: 1 },
    { position: 4, driverId: 'estre', teamId: 'porsche-penske', points: 2709, wins: 1 },
    { position: 5, driverId: 'bamber', teamId: 'whelen-engineering', points: 2672, wins: 2 },
    { position: 6, driverId: 's-van-der-linde', teamId: 'bmw-wrt', points: 2650, wins: 1 },
    { position: 7, driverId: 'andlauer', teamId: 'porsche-penske', points: 2638, wins: 2 },
    { position: 8, driverId: 'deletraz', teamId: 'wayne-taylor-racing', points: 2556, wins: 0 },
    { position: 9, driverId: 'van-der-helm', teamId: 'jdc-miller', points: 2525, wins: 1 },
    { position: 10, driverId: 'blomqvist', teamId: 'meyer-shank-racing', points: 2465, wins: 0 },
  ],
  constructors: [],
  otherClasses: [
    {
      className: 'GTD Pro',
      drivers: [
        { position: 1, driverId: 'de-phillippi', teamId: 'paul-miller-racing', points: 3012, wins: 1 },
        { position: 2, driverId: 'caldarelli', teamId: 'pfaff-motorsports', points: 2979, wins: 2 },
        { position: 3, driverId: 'catsburg', teamId: 'corvette-racing', points: 2949, wins: 0 },
        { position: 4, driverId: 'harry-king', teamId: 'ao-racing', points: 2921, wins: 0 },
        { position: 5, driverId: 'mies', teamId: 'ford-multimatic', points: 2825, wins: 1 },
        { position: 6, driverId: 'barker', teamId: 'ford-multimatic', points: 2821, wins: 1 },
        { position: 7, driverId: 'barnicoat', teamId: 'vasser-sullivan', points: 2779, wins: 2 },
        { position: 8, driverId: 'garcia', teamId: 'corvette-racing', points: 2776, wins: 1 },
        { position: 9, driverId: 'esterson', teamId: 'rll-team-mclaren', points: 2392, wins: 0 },
        { position: 10, driverId: 'bachler', teamId: 'manthey', points: 1379, wins: 0 },
      ],
      constructors: [],
    },
    {
      className: 'GTD',
      drivers: [
        { position: 1, driverId: 'ellis-p', teamId: 'winward-racing', points: 3078, wins: 5 },
        { position: 2, driverId: 'foley', teamId: 'turner-motorsport', points: 2843, wins: 1 },
        { position: 3, driverId: 'e-barrichello', teamId: 'heart-of-racing', points: 2742, wins: 0 },
        { position: 4, driverId: 'pedersen-b', teamId: 'vasser-sullivan', points: 2677, wins: 0 },
        { position: 5, driverId: 'm-bell', teamId: '13-autosport', points: 2414, wins: 0 },
        { position: 6, driverId: 'iribe', teamId: 'inception-racing', points: 2398, wins: 0 },
        { position: 7, driverId: 'adelson', teamId: 'wright-motorsports', points: 2387, wins: 0 },
        { position: 8, driverId: 'costa-a', teamId: 'conquest-racing', points: 2363, wins: 0 },
        { position: 9, driverId: 'schandorff', teamId: 'inception-racing', points: 2268, wins: 0 },
        { position: 10, driverId: 'gamble', teamId: 'heart-of-racing', points: 2217, wins: 0 },
      ],
      constructors: [],
    },
  ],
}
