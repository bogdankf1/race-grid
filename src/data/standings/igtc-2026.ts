import type { SeasonStandings } from './types'

// IGTC 2026 standings — after Round 2 (24h Nürburgring)
// Multi-class: Overall (primary) + Independent Cup (sub-classification for FIA Bronze-graded drivers)
// Source: pitdebrief.com, intercontinentalgtchallenge.com
export const igtcStandings2026: SeasonStandings = {
  className: 'Overall',
  drivers: [
    { position: 1, driverId: 'engel', teamId: 'mercedes-amg', points: 50, wins: 2 },
    { position: 2, driverId: 'martin', teamId: 'mercedes-amg', points: 50, wins: 2 },
    { position: 3, driverId: 'stolz', teamId: 'mercedes-amg', points: 33, wins: 1 },
    { position: 4, driverId: 'hesse-m', teamId: 'bmw-m', points: 30, wins: 0 },
    { position: 5, driverId: 'grenier', teamId: 'mercedes-amg', points: 25, wins: 1 },
    { position: 6, driverId: 'schiller', teamId: 'mercedes-amg', points: 25, wins: 1 },
    { position: 7, driverId: 'buus', teamId: 'porsche-motorsport', points: 22, wins: 0 },
    { position: 8, driverId: 'heinrich', teamId: 'porsche-motorsport', points: 21, wins: 0 },
    { position: 9, driverId: 'feller', teamId: 'porsche-motorsport', points: 21, wins: 0 },
    { position: 10, driverId: 'boccolacci', teamId: 'porsche-motorsport', points: 18, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'mercedes-amg', points: 64, wins: 2 },
    { position: 2, teamId: 'porsche-motorsport', points: 55, wins: 0 },
    { position: 3, teamId: 'bmw-m', points: 53, wins: 0 },
    { position: 4, teamId: 'ferrari', points: 10, wins: 0 },
    { position: 5, teamId: 'ford-multimatic', points: 10, wins: 0 },
  ],
  otherClasses: [
    {
      className: 'Independent Cup',
      // Source: https://www.intercontinentalgtchallenge.com/standings?filter_igtcstandingtype_id=7
      // Sources: pitdebrief.com Round 2 standings article; intercontinentalgtchallenge.com news 1942
      // Skipped rows:
      //  - P6 Johannes Zelger (Tsunami RT, Porsche, 8 pts) — no team ID for Tsunami RT
      //  - P7 Adrian D'Silva (0 pts, has not competed yet — team unknown)
      // Note: IGTC 2026 has no Silver/Pro-Am/Am sub-cups; the only sub-classification is Independent Cup.
      drivers: [
        { position: 1, driverId: 'li-kerong', teamId: 'high-class-racing', points: 50, wins: 2 },
        { position: 2, driverId: 'habul', teamId: 'sunenergy1-racing', points: 18, wins: 0 },
        { position: 3, driverId: 'jonathan-hui', teamId: 'ziggo-tempesta', points: 15, wins: 0 },
        { position: 4, driverId: 'ralf-bohn', teamId: 'herberth-motorsport', points: 12, wins: 0 },
        { position: 5, driverId: 'jefri-ibrahim', teamId: 'jmr-motorsports', points: 10, wins: 0 },
      ],
      constructors: [],
    },
  ],
}
