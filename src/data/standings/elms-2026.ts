import type { SeasonStandings } from './types'

// ELMS 2026 — LMP2, LMP3, LMGT3 standings — verified from autohebdof1.com and europeanlemansseries.com (after Round 2 Le Castellet)
// One representative driver per crew (first listed when verified in entries/results; otherwise first teammate present in entries).
// Team standings preserve the source's per-car positions; duplicates of the same operator are skipped with a comment.
export const elmsStandings2026: SeasonStandings = {
  className: 'LMP2',
  drivers: [
    { position: 1, driverId: 'hanley', teamId: 'united-autosports', points: 40, wins: 1 },
    { position: 2, driverId: 'garg', teamId: 'inter-europol', points: 37, wins: 0 },
    { position: 3, driverId: 'masson', teamId: 'forestier-racing-panis', points: 26, wins: 1 },
    { position: 4, driverId: 'chadwick', teamId: 'idec-sport', points: 24, wins: 0 },
    { position: 5, driverId: 'p-fittipaldi', teamId: 'vector-sport-rlr', points: 18, wins: 0 },
    { position: 6, driverId: 'van-uitert', teamId: 'idec-sport', points: 16, wins: 0 },
    { position: 7, driverId: 'smiechowski', teamId: 'inter-europol', points: 16, wins: 0 },
    { position: 8, driverId: 'closmenil', teamId: 'clx-motorsport', points: 12, wins: 0 },
    { position: 9, driverId: 'yelloly', teamId: 'algarve-pro', points: 10, wins: 0 },
    { position: 10, driverId: 'pearson-e', teamId: 'nielsen-racing', points: 8, wins: 0 },
  ],
  constructors: [],
  otherClasses: [
    {
      className: 'LMP3',
      // Source: autohebdof1.com — after Round 2 Le Castellet 2026
      // Skipped driver rows (no pairing verified in elms-2026 entries or results):
      //   P2 Rodella/Cautela/Pedersen (Rinaldi #5), P3 Michal/Schwarze/Provost (R-ace GP #85),
      //   P4 Adcock/Antonel/Imbourg (M Racing #68), P5 Rammo/Favre/Brichacek (DKR #4),
      //   P6 Fecury/Gravlund/Woodward (Ultimate #35 — team ID also missing),
      //   P7 Nogales/Stern/Quintarelli (Team Virage #8 — Nogales/Stern IDs also missing),
      //   P8 Dedecker/Bell/Van der Snel (EuroInternational #11 — team ID also missing),
      //   P9 Jacoby/Ribeiro/Lanchère (CLX Motorsport #17 — Ribeiro/Lanchère IDs also missing),
      //   P10 De Sybourg/Reid/Meichtry (Racing Spirit of Léman #31 — Meichtry/this Reid IDs missing).
      drivers: [
        { position: 1, driverId: 'bukhantsov', teamId: 'inter-europol', points: 40, wins: 1 },
      ],
      // Skipped team rows (team IDs not in repo): Ultimate (P6), EuroInternational (P8).
      constructors: [
        { position: 1, teamId: 'inter-europol', points: 40, wins: 1 },
        { position: 2, teamId: 'rinaldi-racing', points: 31, wins: 1 },
        { position: 3, teamId: 'r-ace-gp', points: 31, wins: 0 },
        { position: 4, teamId: 'm-racing', points: 18, wins: 0 },
        { position: 5, teamId: 'dkr-engineering', points: 18, wins: 0 },
        { position: 6, teamId: 'team-virage', points: 14, wins: 0 },
        { position: 7, teamId: 'clx-motorsport', points: 12, wins: 0 },
        { position: 8, teamId: 'racing-spirit-of-leman', points: 8, wins: 0 },
      ],
    },
    {
      className: 'LMGT3',
      // Source: autohebdof1.com — after Round 2 Le Castellet 2026
      // Representative driver swapped to first teammate present in elms-2026 entries when the source's first listed name is not in the repo:
      //   P2 first-listed Kurzejewski -> lietz; P5 first-listed Perel -> cameron-d; P7 first-listed Samani -> rigon.
      // Skipped driver rows (no pairing verified in entries or results):
      //   P3 Patterson/Birch (United Autosports #23 — no LMGT3 entry on this team in elms-2026 entries),
      //   P8 Al-Khelaifi crew (Team Qatar by Iron Lynx #62 — team not in elms-2026 entries),
      //   P9 Christodoulou crew (team not specified in source),
      //   P10 Bankcy crew (team not specified in source).
      drivers: [
        { position: 1, driverId: 'serra', teamId: 'kessel-racing', points: 40, wins: 1 },
        { position: 2, driverId: 'lietz', teamId: 'proton-competition', points: 29, wins: 1 },
        { position: 3, driverId: 'udell', teamId: 'tf-sport', points: 18, wins: 0 },
        { position: 4, driverId: 'cameron-d', teamId: 'spirit-of-race', points: 18, wins: 0 },
        { position: 5, driverId: 'hanafin', teamId: 'gr-racing', points: 15, wins: 0 },
        { position: 6, driverId: 'rigon', teamId: 'af-corse', points: 14, wins: 0 },
      ],
      // Skipped team rows: P9 Proton Competition #77 (same operator as P2 row, would duplicate teamId 'proton-competition').
      constructors: [
        { position: 1, teamId: 'kessel-racing', points: 40, wins: 1 },
        { position: 2, teamId: 'proton-competition', points: 29, wins: 1 },
        { position: 3, teamId: 'united-autosports', points: 18, wins: 0 },
        { position: 4, teamId: 'tf-sport', points: 18, wins: 0 },
        { position: 5, teamId: 'spirit-of-race', points: 18, wins: 0 },
        { position: 6, teamId: 'gr-racing', points: 15, wins: 0 },
        { position: 7, teamId: 'af-corse', points: 14, wins: 0 },
        { position: 8, teamId: 'team-qatar-iron-lynx', points: 14, wins: 0 },
        { position: 9, teamId: 'iron-lynx', points: 12, wins: 0 },
      ],
    },
  ],
}
