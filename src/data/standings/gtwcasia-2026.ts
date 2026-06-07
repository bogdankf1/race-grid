import type { SeasonStandings } from './types'

// GT World Challenge Asia 2026 standings — after Round 2 (Mandalika)
// Sub-cup data sourced from:
//   https://www.pitdebrief.com/post/2026-gtwc-asia-standings-after-mandalika-round-2/
//   https://en.wikipedia.org/wiki/2026_GT_World_Challenge_Asia
//   https://www.gt-world-challenge-asia.com/standings
export const gtwcasiaStandings2026: SeasonStandings = {
  className: 'Pro',
  drivers: [
    { position: 1, driverId: 'ghiretti', teamId: 'absolute-racing', points: 55, wins: 1 },
    { position: 2, driverId: 'cheng-congfu', teamId: 'faw-audi-phantom', points: 40, wins: 0 },
    { position: 3, driverId: 'lu-wei', teamId: 'origine-motorsport', points: 34, wins: 1 },
    { position: 4, driverId: 'xu-liu', teamId: 'phantom-global-racing', points: 28, wins: 0 },
    { position: 5, driverId: 'nandy', teamId: 'absolute-racing', points: 25, wins: 0 },
    { position: 6, driverId: 'evans-j', teamId: 'faw-audi-phantom', points: 24, wins: 0 },
    { position: 7, driverId: 'kondo-t', teamId: 'porsche-okazaki', points: 16, wins: 0 },
    { position: 8, driverId: 'li-lichao', teamId: 'climax-racing', points: 13, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'absolute-racing', points: 80, wins: 1 },
    { position: 2, teamId: 'faw-audi-phantom', points: 64, wins: 0 },
    { position: 3, teamId: 'origine-motorsport', points: 34, wins: 1 },
    { position: 4, teamId: 'phantom-global-racing', points: 28, wins: 1 },
    { position: 5, teamId: 'craft-bamboo', points: 22, wins: 0 },
  ],
  otherClasses: [
    {
      className: 'Pro-Am',
      drivers: [
        { position: 1, driverId: 'ghiretti', teamId: 'absolute-racing', points: 76, wins: 0 },
        { position: 2, driverId: 'xu-liu', teamId: 'phantom-global-racing', points: 65, wins: 0 },
        { position: 3, driverId: 'lu-wei', teamId: 'origine-motorsport', points: 60, wins: 0 },
        // Row 4 skipped: "Andres Pato" & Jaxon Evans (Audi Sport Asia Team Phantom) — lead driver 'pato' ID missing.
        // Using evans-j to keep the row would invert the pair's lead — skipping per "no new IDs" constraint.
        { position: 5, driverId: 'ruan-cunfan', teamId: 'team-krc', points: 38, wins: 0 },
        { position: 6, driverId: 'boccolacci', teamId: 'phantom-global-racing', points: 36, wins: 0 },
        { position: 7, driverId: 'song-jiajun', teamId: 'winhere-harmony-racing', points: 33, wins: 0 },
        { position: 8, driverId: 'hartog', teamId: 'phantom-global-racing', points: 29, wins: 0 },
        { position: 9, driverId: 'inthraphuvasak', teamId: 'absolute-racing', points: 27, wins: 0 },
        // Row 10 skipped: Klaus Bachler — team affiliation for GTWC Asia 2026 not verified in sources; 'bachler' driver ID exists but team unclear.
        { position: 11, driverId: 'verhagen', teamId: 'team-krc', points: 20, wins: 0 },
        // Row 12 skipped: "Andy Tan" & Thierry Vermeulen — lead driver 'andy-tan' ID missing and team affiliation unverified.
        // Row 13 skipped: Jesse Krohn — existing 'krohn' ID maps to "Nick Krohn" not Jesse; risk of misattribution.
        { position: 14, driverId: 'yamaguchi', teamId: 'bmw-team-studie', points: 14, wins: 0 },
        { position: 15, driverId: 'nagai', teamId: 'porsche-okazaki', points: 10, wins: 0 },
        { position: 16, driverId: 'buus', teamId: 'absolute-racing', points: 7, wins: 0 },
        { position: 17, driverId: 'kotaka', teamId: 'porsche-okazaki', points: 6, wins: 0 },
        // Row 18 skipped: Yuichi Nakayama — team affiliation in GTWC Asia 2026 not verified in sources.
      ],
      constructors: [],
    },
    {
      className: 'Silver',
      drivers: [
        { position: 1, driverId: 'nandy', teamId: 'absolute-racing', points: 86, wins: 0 },
        { position: 2, driverId: 'cheng-congfu', teamId: 'faw-audi-phantom', points: 67, wins: 0 },
        { position: 3, driverId: 'aoki-t', teamId: 'team-5zigen', points: 60, wins: 0 },
        { position: 4, driverId: 'deng-yi', teamId: 'winhere-harmony-racing', points: 55, wins: 0 },
        { position: 5, driverId: 'miyake', teamId: 'team-5zigen', points: 30, wins: 0 },
      ],
      constructors: [],
    },
    {
      className: 'Silver-Am',
      drivers: [
        { position: 1, driverId: 'chen-yuhao', teamId: 'craft-bamboo', points: 77, wins: 0 },
        { position: 2, driverId: 'kondo-t', teamId: 'porsche-okazaki', points: 70, wins: 0 },
        { position: 3, driverId: 'li-lichao', teamId: 'climax-racing', points: 61, wins: 0 },
        { position: 4, driverId: 'oosten', teamId: 'team-krc', points: 50, wins: 0 },
        { position: 5, driverId: 'fong', teamId: '33r-harmony-racing', points: 42, wins: 0 },
      ],
      constructors: [],
    },
    {
      className: 'Am',
      drivers: [
        { position: 1, driverId: 'liu-hangcheng', teamId: 'origine-motorsport', points: 86, wins: 0 },
        { position: 2, driverId: 'zhou-b', teamId: 'climax-racing', points: 70, wins: 0 },
        { position: 3, driverId: 'macpherson-a', teamId: 'amac-motorsport', points: 67, wins: 0 },
        { position: 4, driverId: 'colombo-c', teamId: 'garage-75', points: 33, wins: 0 },
      ],
      constructors: [],
    },
  ],
}
