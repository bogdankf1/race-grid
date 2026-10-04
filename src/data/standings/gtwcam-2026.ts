import type { SeasonStandings } from './types'

// GT World Challenge America 2026 standings — verified from gt-world-challenge-america.com/standings (after Round 6 Barber, 27 Sep 2026; Indianapolis finale 8-11 Oct still to run).
// Pro is the primary class; Pro-Am and Am in otherClasses. Wins counted from class winners (official results / Wikipedia "2026 GT World Challenge America").
export const gtwcamStandings2026: SeasonStandings = {
  className: 'Pro',
  drivers: [
    { position: 1, driverId: 'stephens', teamId: 'jmf-motorsports', points: 114, wins: 2 },
    { position: 2, driverId: 'perez-companc', teamId: 'af-corse-usa', points: 105, wins: 2 },
    { position: 3, driverId: 'rothberg', teamId: 'turner-motorsport', points: 104, wins: 2 },
    { position: 4, driverId: 'schandorff', teamId: 'af-corse-usa', points: 95, wins: 2 },
    { position: 5, driverId: 'mccann-jr', teamId: 'mccann-racing', points: 79, wins: 0 },
    { position: 6, driverId: 'sedgwick', teamId: 'mccann-racing', points: 68, wins: 0 },
    { position: 7, driverId: 'molina', teamId: 'af-corse-usa', points: 10, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'jmf-motorsports', points: 114, wins: 2 },
    { position: 2, teamId: 'af-corse-usa', points: 105, wins: 2 },
    { position: 3, teamId: 'turner-motorsport', points: 104, wins: 2 },
    { position: 4, teamId: 'mccann-racing', points: 79, wins: 0 },
    { position: 5, teamId: 'dollahite-racing', points: 68, wins: 0 },
  ],
  otherClasses: [
    {
      className: 'Pro-Am',
      drivers: [
        { position: 1, driverId: 'washington-k', teamId: 'gmg-racing', points: 92, wins: 2 },
        { position: 2, driverId: 'musial-jr', teamId: 'wright-motorsports', points: 86, wins: 1 },
        { position: 3, driverId: 'heylen', teamId: 'rs1', points: 84, wins: 0 },
        { position: 4, driverId: 'daskalos', teamId: 'jmf-motorsports', points: 64, wins: 1 },
        { position: 5, driverId: 'martinez-j', teamId: 'rs1', points: 48, wins: 0 },
        { position: 6, driverId: 'ellis-p', teamId: 'jmf-motorsports', points: 47, wins: 1 },
        { position: 7, driverId: 'telitz', teamId: 'archangel-motorsports', points: 46, wins: 1 },
        { position: 8, driverId: 'lahlouh', teamId: 'rs1', points: 44, wins: 0 },
      ],
      constructors: [
        { position: 1, teamId: 'gmg-racing', points: 95, wins: 2 },
        { position: 2, teamId: 'rs1', points: 89, wins: 0 },
        { position: 3, teamId: 'wright-motorsports', points: 86, wins: 1 },
        { position: 4, teamId: 'jmf-motorsports', points: 70, wins: 1 },
        { position: 5, teamId: 'archangel-motorsports', points: 52, wins: 1 },
        { position: 6, teamId: 'tr3-racing', points: 45, wins: 1 },
        { position: 7, teamId: 'kellymoss', points: 45, wins: 0 },
        { position: 8, teamId: 'riley-motorsports', points: 33, wins: 0 },
      ],
    },
    {
      className: 'Am',
      drivers: [
        { position: 1, driverId: 'schreibman', teamId: 'af-corse-usa', points: 143, wins: 5 },
        { position: 2, driverId: 'negri-jr', teamId: 'af-corse-usa', points: 100, wins: 4 },
        { position: 3, driverId: 'simonsen', teamId: 'af-corse-usa', points: 43, wins: 1 },
        { position: 4, driverId: 'j-morley', teamId: 'scuderia-corsa', points: 25, wins: 1 },
        { position: 5, driverId: 'logan', teamId: 'lone-star-racing', points: 18, wins: 0 },
      ],
      constructors: [
        { position: 1, teamId: 'af-corse-usa', points: 143, wins: 5 },
        { position: 2, teamId: 'scuderia-corsa', points: 25, wins: 1 },
        { position: 3, teamId: 'lone-star-racing', points: 18, wins: 0 },
      ],
    },
  ],
}
