import type { SeasonStandings } from './types'

// Super GT 2026 standings — GT500 (primary) + GT300 (secondary)
// Verified from supergt.net after Round 2 (Fuji, May 4, 2026).
// Sources:
//   https://supergt.net/en/driver_ranking
//   https://supergt.net/en/team_ranking
//   https://supergt.net/en/driver_ranking?gt_class=gt300
//   https://supergt.net/en/team_ranking?gt_class=gt300
//   https://en.wikipedia.org/wiki/2026_Super_GT_Series
export const supergtStandings2026: SeasonStandings = {
  className: 'GT500',
  drivers: [
    { position: 1, driverId: 'tsuboi', teamId: 'tgr-au-toms', points: 40, wins: 1 },
    { position: 1, driverId: 'yamashita', teamId: 'tgr-au-toms', points: 40, wins: 1 },
    { position: 3, driverId: 'fukuzumi', teamId: 'tgr-eneos-rookie', points: 24, wins: 0 },
    { position: 3, driverId: 'oshima', teamId: 'tgr-eneos-rookie', points: 24, wins: 0 },
    { position: 5, driverId: 'oyu', teamId: 'keeper-cerumo', points: 16, wins: 1 },
    { position: 5, driverId: 'r-kobayashi', teamId: 'keeper-cerumo', points: 16, wins: 1 },
    { position: 7, driverId: 'hiramine', teamId: 'team-impul', points: 15, wins: 0 },
    { position: 7, driverId: 'baguette', teamId: 'team-impul', points: 15, wins: 0 },
    { position: 9, driverId: 'chiyo', teamId: 'nismo', points: 14, wins: 0 },
    { position: 9, driverId: 'takaboshi', teamId: 'nismo', points: 14, wins: 0 },
  ],
  constructors: [],
  otherClasses: [
    {
      className: 'GT300',
      // GT300 driver championship top 10 after Round 2 (Fuji).
      // Each crew shares points. Rows are kept only when BOTH driver and team IDs exist;
      // partial-crew rows are kept when the listed driver is mappable to their actual team.
      // Skipped rows (no compatible ID, to avoid fabrication):
      //   P1 #777 Charlie Fagg — no driver ID
      //   P3 #2 HYPER WATER Racing INGING — Yuui Tsutsumi, Kazuhisa Urabe (no driver IDs); team='inging' is correct
      //   P4 #65 K2 R&D LEON RACING — Naoya Gamou (id exists), Togo Suganami; no team ID
      //   P5 #56 KONDO RACING — Joao Paulo de Oliveira ('oliveira' in registry is Miguel Oliveira, MotoGP — different driver)
      //   P6 #4 GOODSMILE RACING & TeamUKYO — Nobuteru Taniguchi, Tatsuya Kataoka (no IDs); no team ID
      //   P7 #666 seven x seven Racing — Sven Müller (id 'muller'), Kiyoto Fujinami (id 'fujinami'); no team ID
      //   P9 #96 K-tunes Racing — Morio Nitta (id 'nitta'), Shinichi Takagi; no team ID
      //   P10 #52 SAITAMA Green Brave — Hiroki Yoshida, Seita Nonaka (id 'nonaka'); no team ID
      drivers: [
        { position: 1, driverId: 'fujii', teamId: 'd-station-racing', points: 70, wins: 1 },
        { position: 2, driverId: 'kotaka', teamId: 'apr', points: 64, wins: 0 },
        { position: 2, driverId: 'koyama', teamId: 'apr', points: 64, wins: 0 },
        { position: 5, driverId: 'kimura', teamId: 'kondo-racing', points: 54, wins: 1 },
        { position: 8, driverId: 'wurz', teamId: 'apr', points: 32, wins: 0 },
      ],
      // GT300 team championship top 8; rows kept only where team ID maps cleanly.
      // Skipped: K2 R&D LEON RACING (P4 — no team ID), GOODSMILE RACING & TeamUKYO (P6 — no team ID),
      //   seven x seven Racing (P7 — no team ID), SAITAMA Green Brave (P8 — no team ID).
      constructors: [
        { position: 1, teamId: 'd-station-racing', points: 70, wins: 1 },
        { position: 2, teamId: 'apr', points: 64, wins: 0 },
        { position: 3, teamId: 'inging', points: 62, wins: 0 },
        { position: 5, teamId: 'kondo-racing', points: 54, wins: 1 },
      ],
    },
  ],
}
