import type { EventResults } from './types'

// IGTC 2026 results — verified from bathurst12hour.com.au, motorsport.com
export const igtcResults2026: Record<string, EventResults> = {
  'igtc-2026-nurburgring': {
    qualifying: {
      // Top Qualifying 3 — Luca Engstler put the Red Bull Team ABT #84 Lamborghini on pole
      overall: { driverIds: ['engstler'], teamId: 'red-bull-abt' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['engstler'], teamId: 'red-bull-abt' },
        ],
      }],
    },
    endurance: {
      // Winward Racing Team Ravenol Mercedes-AMG #80
      overall: { driverIds: ['engel', 'stolz', 'schiller', 'martin'], teamId: 'winward-racing' },
      classes: [
        {
          className: 'Overall',
          podium: [
            { position: 1, driverIds: ['engel', 'stolz', 'schiller', 'martin'], teamId: 'winward-racing' },
            { position: 2, driverIds: ['bortolotti', 'niederhauser', 'engstler'], teamId: 'abt-sportsline' },
            { position: 3, driverIds: ['drudi', 'krognes', 'thiim'], teamId: 'walkenhorst' },
          ],
        },
      ],
    },
  },
  'igtc-2026-bathurst': {
    qualifying: {
      overall: { driverIds: ['marciello'], teamId: 'team-wrt' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['marciello'], teamId: 'team-wrt' },
          { position: 2, driverIds: ['engel'], teamId: 'gruppem-racing' },
          { position: 3, driverIds: ['pepper'], teamId: 'audi-sport' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['engel', 'martin', 'grenier'], teamId: 'gruppem-racing' },
      classes: [
        {
          className: 'Overall',
          podium: [
            { position: 1, driverIds: ['engel', 'martin', 'grenier'], teamId: 'gruppem-racing' },
            { position: 2, driverIds: ['boccolacci'], teamId: 'high-class-racing' },
            { position: 3, driverIds: ['farfus', 'marciello', 'rossi'], teamId: 'team-wrt' },
          ],
        },
      ],
    },
  },
  'igtc-2026-spa': {
    qualifying: {
      overall: { driverIds: ['rovera', 'mosca', 'nielsen'], teamId: 'af-corse' },
      classes: [
        {
          className: 'Super Pole',
          podium: [
            { position: 1, driverIds: ['rovera', 'mosca', 'nielsen'], teamId: 'af-corse' },
            { position: 2, driverIds: ['fleming', 'l-prette', 'goethe'], teamId: 'garage-59' },
            { position: 3, driverIds: ['juncadella', 'c-lulham', 'gounon'], teamId: 'mercedes-amg-team-verstappen' },
          ],
        },
      ],
    },
    endurance: {
      overall: { driverIds: ['feller', 'preining', 'buus'], teamId: 'lionspeed' },
      classes: [
        {
          className: 'Overall',
          podium: [
            { position: 1, driverIds: ['feller', 'preining', 'buus'], teamId: 'lionspeed' },
            { position: 2, driverIds: ['auer', 'stolz', 'engel'], teamId: 'mann-filter' },
            { position: 3, driverIds: ['rovera', 'mosca', 'nielsen'], teamId: 'af-corse' },
          ],
        },
      ],
    },
  },
  'igtc-2026-suzuka': {
    qualifying: {
      overall: { driverIds: ['mies', 'olsen', 'vervisch'], teamId: 'miedecke-motorsport-by-team-mpc' },
      classes: [
        {
          className: 'Top 3',
          podium: [
            { position: 1, driverIds: ['mies', 'olsen', 'vervisch'], teamId: 'miedecke-motorsport-by-team-mpc' },
            { position: 2, driverIds: ['nonaka', 'tadasuke-makino', 'shinohara'], teamId: 'ponos-racing' },
            { position: 3, driverIds: ['ghiretti', 'guven', 'boccolacci'], teamId: 'absolute-racing' },
          ],
        },
      ],
    },
    endurance: {
      overall: { driverIds: ['andlauer', 'heinrich', 'picariello'], teamId: 'absolute-racing' },
      classes: [
        {
          className: 'Overall',
          podium: [
            { position: 1, driverIds: ['andlauer', 'heinrich', 'picariello'], teamId: 'absolute-racing' },
            { position: 2, driverIds: ['mies', 'olsen', 'vervisch'], teamId: 'miedecke-motorsport-by-team-mpc' },
            { position: 3, driverIds: ['boccolacci', 'ghiretti', 'guven'], teamId: 'absolute-racing' },
          ],
        },
        {
          className: 'Bronze',
          podium: [
            { position: 1, driverIds: ['dan-harper', 'mcintosh', 'thompson-p'], teamId: 'team-wrt' },
          ],
        },
        {
          className: 'Pro-Am',
          podium: [
            { position: 1, driverIds: ['fisichella', 'wakisaka', 'nakanishi'], teamId: 'lm-corsa' },
          ],
        },
        {
          className: 'Am',
          podium: [
            { position: 1, driverIds: ['nishikawa', 'tanaka', 't-tanaka'], teamId: 'runup-sports' },
          ],
        },
      ],
    },
  },
}
