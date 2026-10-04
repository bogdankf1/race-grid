import type { SeasonStandings } from './types'

// IGTC 2026 standings — verified from en.wikipedia.org/wiki/2026_Intercontinental_GT_Challenge (after Round 4 Suzuka 1000km, 5 Sep 2026; Indianapolis 8 Hour still to run).
// Multi-class: Overall (primary) + Independent Cup (sub-classification for FIA Bronze-graded drivers). Wins counted from race results.
export const igtcStandings2026: SeasonStandings = {
  className: 'Overall',
  drivers: [
    { position: 1, driverId: 'engel', teamId: 'mercedes-amg', points: 68, wins: 2 },
    { position: 2, driverId: 'stolz', teamId: 'mercedes-amg', points: 61, wins: 1 },
    { position: 3, driverId: 'martin', teamId: 'mercedes-amg', points: 60, wins: 2 },
    { position: 4, driverId: 'buus', teamId: 'porsche-motorsport', points: 47, wins: 1 },
    { position: 5, driverId: 'heinrich', teamId: 'porsche-motorsport', points: 46, wins: 1 },
    { position: 6, driverId: 'picariello', teamId: 'porsche-motorsport', points: 41, wins: 1 },
    { position: 7, driverId: 'boccolacci', teamId: 'porsche-motorsport', points: 39, wins: 0 },
    { position: 8, driverId: 'hesse-m', teamId: 'bmw-m', points: 38, wins: 0 },
    { position: 9, driverId: 'dan-harper', teamId: 'bmw-m', points: 32, wins: 0 },
    { position: 10, driverId: 'mies', teamId: 'ford-multimatic', points: 28, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'porsche-motorsport', points: 132, wins: 2 },
    { position: 2, teamId: 'mercedes-amg', points: 94, wins: 2 },
    { position: 3, teamId: 'bmw-m', points: 74, wins: 0 },
    { position: 4, teamId: 'ferrari', points: 47, wins: 0 },
    { position: 5, teamId: 'ford-multimatic', points: 32, wins: 0 },
  ],
  otherClasses: [
    {
      className: 'Independent Cup',
      // Source: en.wikipedia.org/wiki/2026_Intercontinental_GT_Challenge ("Independent Cup" table, after Suzuka).
      // Skipped rows:
      //  - P3 Johannes Zelger (Tsunami RT, Porsche, 33 pts) — no team ID for Tsunami RT
      //  - P7 Adrian D'Silva (8 pts) — team not identifiable
      drivers: [
        { position: 1, driverId: 'li-kerong', teamId: 'high-class-racing', points: 93, wins: 3 },
        { position: 2, driverId: 'jefri-ibrahim', teamId: 'jmr-motorsports', points: 50, wins: 1 },
        { position: 4, driverId: 'ralf-bohn', teamId: 'herberth-motorsport', points: 30, wins: 0 },
        { position: 5, driverId: 'jonathan-hui', teamId: 'ziggo-tempesta', points: 27, wins: 0 },
        { position: 6, driverId: 'habul', teamId: 'sunenergy1-racing', points: 18, wins: 0 },
      ],
      constructors: [],
    },
  ],
}
