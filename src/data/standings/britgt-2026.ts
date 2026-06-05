import type { SeasonStandings } from './types'

// British GT Championship 2026 standings — after Round 1 (Silverstone 500)
// Source: Wikipedia, britishgt.com
// GT4 + GT3 sub-cup tables sourced from:
//   https://en.wikipedia.org/wiki/2026_British_GT_Championship
//   https://www.britishgt.com/standings
export const britgtStandings2026: SeasonStandings = {
  className: 'GT3',
  drivers: [
    { position: 1, driverId: 'beeson', teamId: 'century-motorsport', points: 37.5, wins: 0 },
    { position: 2, driverId: 'clutton', teamId: 'orange-racing', points: 27, wins: 0 },
    { position: 3, driverId: 'martin-a', teamId: 'barwell-motorsport', points: 22.5, wins: 0 },
    { position: 4, driverId: 'howard-a', teamId: 'beechdean-motorsport', points: 18, wins: 0 },
    { position: 5, driverId: 'barnicoat', teamId: 'optimum-motorsport', points: 15, wins: 0 },
    { position: 6, driverId: 'gilbert-a', teamId: 'two-seas-motorsport', points: 12, wins: 0 },
    { position: 7, driverId: 'plowman', teamId: 'paddock-motorsport', points: 9, wins: 0 },
    { position: 8, driverId: 'lake-s', teamId: 'mahiki-racing', points: 6, wins: 0 },
    { position: 9, driverId: 'cameron-d', teamId: 'barwell-motorsport', points: 3, wins: 0 },
    { position: 10, driverId: 'brown-j', teamId: 'optimum-motorsport', points: 1.5, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'century-motorsport', points: 37.5, wins: 0 },
    { position: 2, teamId: 'orange-racing', points: 27, wins: 0 },
    { position: 3, teamId: 'barwell-motorsport', points: 22.5, wins: 0 },
    { position: 4, teamId: 'beechdean-motorsport', points: 18, wins: 0 },
    { position: 5, teamId: 'optimum-motorsport', points: 15, wins: 0 },
  ],
  otherClasses: [
    {
      className: 'GT4',
      drivers: [
        { position: 1, driverId: 'holland-t', teamId: 'innovation-racing', points: 67.5, wins: 0 },
        { position: 2, driverId: 'hawkins', teamId: 'mk-racing', points: 63, wins: 0 },
        { position: 3, driverId: 'collins-jack', teamId: 'century-motorsport', points: 55, wins: 0 },
        { position: 4, driverId: 'turner-d', teamId: 'grange-racing-fsr', points: 31, wins: 0 },
        { position: 5, driverId: 'mitchell-jack', teamId: 'toro-verde-gt', points: 25, wins: 0 },
        { position: 6, driverId: 'hopkinson', teamId: 'optimum-motorsport', points: 22.5, wins: 0 },
        { position: 7, driverId: 'angliss', teamId: 'mahiki-racing', points: 22, wins: 0 },
        { position: 8, driverId: 'hartshorne', teamId: 'gbr-stratton', points: 20, wins: 0 },
        { position: 9, driverId: 'bradshaw', teamId: 'toro-verde-gt', points: 18, wins: 0 },
        { position: 10, driverId: 'graham-e', teamId: 'wsr-flexifly', points: 13, wins: 0 },
        { position: 11, driverId: 'townsend', teamId: 'townsend-fox', points: 12, wins: 0 },
      ],
      // GT4 teams' standings not separately tabulated in available sources — derived team table omitted to avoid fabrication.
      constructors: [],
    },
    {
      className: 'GT3 Pro-Am',
      drivers: [
        { position: 1, driverId: 'howard-a', teamId: 'beechdean-motorsport', points: 63, wins: 0 },
        { position: 2, driverId: 'barnicoat', teamId: 'optimum-motorsport', points: 57.5, wins: 0 },
        { position: 3, driverId: 'clutton', teamId: 'orange-racing', points: 53.5, wins: 0 },
        { position: 4, driverId: 'plowman', teamId: 'paddock-motorsport', points: 39, wins: 0 },
        { position: 5, driverId: 'collard', teamId: 'barwell-motorsport', points: 37, wins: 0 },
        { position: 6, driverId: 'cameron-d', teamId: 'barwell-motorsport', points: 31, wins: 0 },
        { position: 7, driverId: 'green-b', teamId: 'two-seas-motorsport', points: 27, wins: 0 },
      ],
      constructors: [],
    },
    {
      className: 'GT3 Silver-Am',
      drivers: [
        { position: 1, driverId: 'martin-a', teamId: 'barwell-motorsport', points: 70, wins: 0 },
        { position: 2, driverId: 'beeson', teamId: 'century-motorsport', points: 67.5, wins: 0 },
        { position: 3, driverId: 'brown-j', teamId: 'optimum-motorsport', points: 58, wins: 0 },
        { position: 4, driverId: 'walker-a', teamId: 'two-seas-motorsport', points: 46.5, wins: 0 },
        { position: 5, driverId: 'loggie', teamId: 'two-seas-motorsport', points: 24, wins: 0 },
        { position: 6, driverId: 'gilbert-a', teamId: 'two-seas-motorsport', points: 22.5, wins: 0 },
        { position: 7, driverId: 'lake-s', teamId: 'mahiki-racing', points: 18, wins: 0 },
      ],
      constructors: [],
    },
  ],
}
