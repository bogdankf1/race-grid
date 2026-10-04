import type { SeasonStandings } from './types'

// GT World Challenge Asia 2026 standings — verified from gt-world-challenge-asia.com/standings (after Round 5 Beijing; Shanghai finale still to run).
// Primary = GT3 overall drivers/teams championship; Pro-Am, Silver, Silver-Am and Am driver tables in otherClasses.
// First-listed driver per crew where the source ties crew members. Wins counted from race results (overall race wins; class wins for the sub-classes).
export const gtwcasiaStandings2026: SeasonStandings = {
  className: 'Overall',
  drivers: [
    { position: 1, driverId: 'lu-wei', teamId: 'origine-motorsport', points: 106, wins: 2 },
    { position: 2, driverId: 'huang-ruohan', teamId: 'absolute-racing', points: 84, wins: 2 },
    { position: 3, driverId: 'xu-liu', teamId: 'phantom-global-racing', points: 84, wins: 1 },
    { position: 4, driverId: 'cheng-congfu', teamId: 'faw-audi-phantom', points: 83, wins: 2 },
    { position: 5, driverId: 'heinrich', teamId: 'origine-motorsport', points: 70, wins: 1 },
    { position: 6, driverId: 'pato', teamId: 'faw-audi-phantom', points: 66, wins: 1 },
  ],
  constructors: [
    { position: 1, teamId: 'faw-audi-phantom', points: 150, wins: 3 },
    { position: 2, teamId: 'absolute-racing', points: 124, wins: 2 },
    { position: 3, teamId: 'origine-motorsport', points: 108, wins: 2 },
    { position: 4, teamId: 'team-krc', points: 91, wins: 0 },
    { position: 5, teamId: 'phantom-global-racing', points: 84, wins: 1 },
    { position: 6, teamId: 'winhere-harmony-racing', points: 72, wins: 2 },
    { position: 7, teamId: 'team-5zigen', points: 54, wins: 0 },
    { position: 8, teamId: 'lm-corsa', points: 26, wins: 0 },
  ],
  otherClasses: [
    {
      className: 'Pro-Am',
      drivers: [
        { position: 1, driverId: 'lu-wei', teamId: 'origine-motorsport', points: 139, wins: 2 },
        { position: 2, driverId: 'xu-liu', teamId: 'phantom-global-racing', points: 114, wins: 2 },
        { position: 3, driverId: 'huang-ruohan', teamId: 'absolute-racing', points: 112, wins: 2 },
        { position: 4, driverId: 'ruan-cunfan', teamId: 'team-krc', points: 97, wins: 1 },
        { position: 5, driverId: 'pato', teamId: 'faw-audi-phantom', points: 97, wins: 2 },
        { position: 6, driverId: 'heinrich', teamId: 'origine-motorsport', points: 79, wins: 1 },
      ],
      constructors: [],
    },
    {
      className: 'Silver',
      drivers: [
        { position: 1, driverId: 'cheng-congfu', teamId: 'faw-audi-phantom', points: 143, wins: 3 },
        { position: 2, driverId: 'liu-kaishun', teamId: 'winhere-harmony-racing', points: 130, wins: 4 },
        { position: 3, driverId: 'aoki-t', teamId: 'team-5zigen', points: 130, wins: 1 },
        { position: 4, driverId: 'nandy', teamId: 'absolute-racing', points: 115, wins: 2 },
        { position: 5, driverId: 'miyake', teamId: 'team-5zigen', points: 103, wins: 1 },
        { position: 6, driverId: 'weian', teamId: 'winhere-harmony-racing', points: 77, wins: 2 },
        { position: 7, driverId: 'deng-yi', teamId: 'winhere-harmony-racing', points: 53, wins: 1 },
      ],
      constructors: [],
    },
    {
      className: 'Silver-Am',
      drivers: [
        { position: 1, driverId: 'lee-b', teamId: 'team-krc', points: 150, wins: 6 },
        { position: 2, driverId: 'liang-jiatong', teamId: 'craft-bamboo', points: 140, wins: 3 },
        { position: 3, driverId: 'uchiyama', teamId: 'porsche-okazaki', points: 106, wins: 1 },
        { position: 4, driverId: 'li-lichao', teamId: 'climax-racing', points: 106, wins: 0 },
        { position: 5, driverId: 'chen-yuhao', teamId: 'craft-bamboo', points: 77, wins: 3 },
      ],
      constructors: [],
    },
    {
      className: 'Am',
      drivers: [
        { position: 1, driverId: 'liu-hangcheng', teamId: 'origine-motorsport', points: 166, wins: 4 },
        { position: 2, driverId: 'zhou-b', teamId: 'climax-racing', points: 156, wins: 4 },
        { position: 3, driverId: 'porter-b', teamId: 'amac-motorsport', points: 111, wins: 2 },
        { position: 4, driverId: 'tjiptobiantoro', teamId: 'climax-racing', points: 66, wins: 0 },
      ],
      constructors: [],
    },
  ],
}
