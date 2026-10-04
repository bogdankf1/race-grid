import type { EventResults } from './types'

export const gtwcResults2026: Record<string, EventResults> = {
  'gtwc-2026-brands-hatch': {
    qualifying: {
      overall: { driverIds: ['buus', 'feller'], teamId: 'lionspeed' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['buus', 'feller'], teamId: 'lionspeed' },
        ],
      }],
    },
    // Race 1: Buus/Feller (Lionspeed), Race 2: Buus/Feller (Lionspeed)
    race: {
      overall: { driverIds: ['buus', 'feller'], teamId: 'lionspeed' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['buus', 'feller'], teamId: 'lionspeed' },
          { position: 2, driverIds: ['buus', 'feller'], teamId: 'lionspeed' },
        ],
      }],
    },
  },
  // Monza 3 Hours — pole to #64 HRT Ford (Drouet/Maini/Scherer); shock overall win
  // by #66 Tresor Attempto Audi from 29th on the grid after Turn 1 pile-up.
  'gtwc-2026-monza': {
    qualifying: {
      overall: { driverIds: ['drouet', 'maini', 'scherer'], teamId: 'hrt-ford' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['drouet', 'maini', 'scherer'], teamId: 'hrt-ford' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['levi-a', 'ogaard', 'mazzola'], teamId: 'tresor-attempto' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['levi-a', 'ogaard', 'mazzola'], teamId: 'tresor-attempto' },
        ],
      }],
    },
  },
  'gtwc-2026-paul-ricard': {
    qualifying: {
      overall: { driverIds: ['stolz'], teamId: 'mann-filter' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['stolz'], teamId: 'mann-filter' },
          { position: 2, driverIds: ['drudi'], teamId: 'comtoyou-racing' },
          { position: 3, driverIds: ['loake'], teamId: 'garage-59' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['sorensen', 'thiim', 'drudi'], teamId: 'comtoyou-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sorensen', 'thiim', 'drudi'], teamId: 'comtoyou-racing' },
          { position: 2, driverIds: ['engel', 'stolz', 'auer'], teamId: 'mann-filter' },
          { position: 3, driverIds: ['goethe', 'prette', 'fleming'], teamId: 'garage-59' },
        ],
      }],
    },
  },
  'gtwc-2026-spa-24h': {
    qualifying: {
      overall: { driverIds: ['rovera', 'mosca', 'nielsen'], teamId: 'af-corse' },
      classes: [
        {
          className: 'Super Pole',
          podium: [
            { position: 1, driverIds: ['rovera', 'mosca', 'nielsen'], teamId: 'af-corse' },
            { position: 2, driverIds: ['fleming', 'l-prette', 'goethe'], teamId: 'garage-59' },
            { position: 3, driverIds: ['juncadella', 'lulham', 'gounon'], teamId: 'mercedes-amg-team-verstappen' },
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
        {
          className: 'Gold',
          podium: [
            { position: 1, driverIds: ['u-de-wilde', 'tramnitz', 'klingmann'], teamId: 'rowe-racing' },
          ],
        },
        {
          className: 'Silver',
          podium: [
            { position: 1, driverIds: ['duran', 'medler', 'balzan', 'david-perel'], teamId: 'rinaldi-racing' },
          ],
        },
        {
          className: 'Bronze',
          podium: [
            { position: 1, driverIds: ['d-blattner', 'tuck', 'jaubert-m', 'marschall'], teamId: 'kessel-racing' },
          ],
        },
        {
          className: 'Pro-Am',
          podium: [
            { position: 1, driverIds: ['jefri-ibrahim', 'prince-abu-bakar', 'love-j', 'green-b'], teamId: 'jmr-motorsports' },
          ],
        },
      ],
    },
  },
  'gtwc-2026-misano': {
    qualifying: {
      overall: { driverIds: ['rossi', 'hesse-m'], teamId: 'team-wrt' },
      classes: [
        {
          className: 'Qualifying 1',
          podium: [
            { position: 1, driverIds: ['rossi', 'hesse-m'], teamId: 'team-wrt' },
            { position: 2, driverIds: ['frassineti', 'levi-a'], teamId: 'tresor-attempto' },
            { position: 3, driverIds: ['feller', 'buus'], teamId: 'lionspeed' },
          ],
        },
        {
          className: 'Qualifying 2',
          podium: [
            { position: 1, driverIds: ['juncadella', 'gounon'], teamId: 'mercedes-amg-team-verstappen' },
            { position: 2, driverIds: ['weerts', 'k-van-der-linde'], teamId: 'team-wrt' },
            { position: 3, driverIds: ['thiim', 'pauwels'], teamId: 'comtoyou-racing' },
          ],
        },
      ],
    },
    race: {
      overall: { driverIds: ['weerts', 'k-van-der-linde'], teamId: 'team-wrt' },
      classes: [
        {
          className: 'Race 1',
          podium: [
            { position: 1, driverIds: ['weerts', 'k-van-der-linde'], teamId: 'team-wrt' },
            { position: 2, driverIds: ['feller', 'buus'], teamId: 'lionspeed' },
            { position: 3, driverIds: ['auer', 'engel'], teamId: 'winward-racing' },
          ],
        },
        {
          className: 'Race 1 · Gold',
          podium: [
            { position: 1, driverIds: ['pereira', 'aka'], teamId: 'tresor-attempto' },
          ],
        },
        {
          className: 'Race 1 · Silver',
          podium: [
            { position: 1, driverIds: ['lismont', 'montenegro'], teamId: 'team-wrt' },
          ],
        },
        {
          className: 'Race 1 · Bronze',
          podium: [
            { position: 1, driverIds: ['schiller', 'rindone'], teamId: 'getspeed-team-dubai' },
          ],
        },
        {
          className: 'Race 2',
          podium: [
            { position: 1, driverIds: ['weerts', 'k-van-der-linde'], teamId: 'team-wrt' },
            { position: 2, driverIds: ['juncadella', 'gounon'], teamId: 'mercedes-amg-team-verstappen' },
            { position: 3, driverIds: ['auer', 'engel'], teamId: 'winward-racing' },
          ],
        },
        {
          className: 'Race 2 · Gold',
          podium: [
            { position: 1, driverIds: ['pereira', 'aka'], teamId: 'tresor-attempto' },
          ],
        },
        {
          className: 'Race 2 · Silver',
          podium: [
            { position: 1, driverIds: ['bartone', 'panis'], teamId: 'getspeed-team-bartone-bros' },
          ],
        },
        {
          className: 'Race 2 · Bronze',
          podium: [
            { position: 1, driverIds: ['dienst', 'salikhov'], teamId: 'winward-racing' },
          ],
        },
      ],
    },
  },
  'gtwc-2026-magny-cours': {
    qualifying: {
      overall: { driverIds: ['gounon', 'juncadella'], teamId: 'mercedes-amg-team-verstappen' },
      classes: [
        {
          className: 'Qualifying 1',
          podium: [
            { position: 1, driverIds: ['gounon', 'juncadella'], teamId: 'mercedes-amg-team-verstappen' },
            { position: 2, driverIds: ['jewiss', 'dawson'], teamId: '2seas-motorsport' },
            { position: 3, driverIds: ['hesse-m', 'rossi'], teamId: 'team-wrt' },
          ],
        },
        {
          className: 'Qualifying 2',
          podium: [
            { position: 1, driverIds: ['pauwels', 'thiim'], teamId: 'comtoyou-racing' },
            { position: 2, driverIds: ['reicher', 'haase'], teamId: 'eastalent-racing' },
            { position: 3, driverIds: ['macdonald-d', 'kirchhofer'], teamId: 'garage-59' },
          ],
        },
      ],
    },
    race: {
      overall: { driverIds: ['gounon', 'juncadella'], teamId: 'mercedes-amg-team-verstappen' },
      classes: [
        {
          className: 'Race 1',
          podium: [
            { position: 1, driverIds: ['gounon', 'juncadella'], teamId: 'mercedes-amg-team-verstappen' },
            { position: 2, driverIds: ['auer', 'a-leclerc'], teamId: 'af-corse' },
            { position: 3, driverIds: ['pauwels', 'thiim'], teamId: 'comtoyou-racing' },
          ],
        },
        {
          className: 'Race 1 · Gold',
          podium: [
            { position: 1, driverIds: ['magnus', 'knutsson'], teamId: 'boutsen-vds' },
          ],
        },
        {
          className: 'Race 1 · Silver',
          podium: [
            { position: 1, driverIds: ['lismont', 'montenegro'], teamId: 'team-wrt' },
          ],
        },
        {
          className: 'Race 1 · Bronze',
          podium: [
            { position: 1, driverIds: ['dienst', 'salikhov'], teamId: 'winward-racing' },
          ],
        },
        {
          className: 'Race 2',
          podium: [
            { position: 1, driverIds: ['buus', 'feller'], teamId: 'lionspeed' },
            { position: 2, driverIds: ['lismont', 'montenegro'], teamId: 'team-wrt' },
            { position: 3, driverIds: ['engstler', 'niederhauser'], teamId: 'rutronik-racing' },
          ],
        },
        {
          className: 'Race 2 · Gold',
          podium: [
            { position: 1, driverIds: ['kell', 'rougier'], teamId: 'csa-racing' },
          ],
        },
        {
          className: 'Race 2 · Silver',
          podium: [
            { position: 1, driverIds: ['lismont', 'montenegro'], teamId: 'team-wrt' },
          ],
        },
        {
          className: 'Race 2 · Bronze',
          podium: [
            { position: 1, driverIds: ['farfus', 'darren-leung'], teamId: 'paradine-competition' },
          ],
        },
      ],
    },
  },
  'gtwc-2026-nurburgring': {
    qualifying: {
      overall: { driverIds: ['drudi', 'sorensen', 'thiim'], teamId: 'comtoyou-racing' },
      classes: [
        {
          className: 'Qualifying',
          podium: [
            { position: 1, driverIds: ['drudi', 'sorensen', 'thiim'], teamId: 'comtoyou-racing' },
            { position: 2, driverIds: ['martin', 'gotz', 'schiller'], teamId: 'getspeed' },
            { position: 3, driverIds: ['feller', 'preining', 'buus'], teamId: 'lionspeed' },
          ],
        },
      ],
    },
    endurance: {
      overall: { driverIds: ['drudi', 'sorensen', 'thiim'], teamId: 'comtoyou-racing' },
      classes: [
        {
          className: 'Overall',
          podium: [
            { position: 1, driverIds: ['drudi', 'sorensen', 'thiim'], teamId: 'comtoyou-racing' },
            { position: 2, driverIds: ['k-van-der-linde', 'pepper', 'weerts'], teamId: 'team-wrt' },
            { position: 3, driverIds: ['juncadella', 'lulham', 'gounon'], teamId: 'mercedes-amg-team-verstappen' },
          ],
        },
        {
          className: 'Gold',
          podium: [
            { position: 1, driverIds: ['pereira', 'frassineti', 'aka'], teamId: 'tresor-attempto' },
          ],
        },
        {
          className: 'Silver',
          podium: [
            { position: 1, driverIds: ['kalus', 'baert', 'coseteng'], teamId: 'hrt-ford' },
          ],
        },
        {
          className: 'Bronze',
          podium: [
            { position: 1, driverIds: ['jewiss', 'dawson', 'barr'], teamId: '2seas-motorsport' },
          ],
        },
      ],
    },
  },
  'gtwc-2026-zandvoort': {
    qualifying: {
      overall: { driverIds: ['schuring', 'boccolacci'], teamId: 'boutsen-vds' },
      classes: [
        {
          className: 'Qualifying 1',
          podium: [
            { position: 1, driverIds: ['schuring', 'boccolacci'], teamId: 'boutsen-vds' },
            { position: 2, driverIds: ['fleming', 'l-prette'], teamId: 'garage-59' },
            { position: 3, driverIds: ['mosca', 'zagazeta'], teamId: 'af-corse' },
          ],
        },
        {
          className: 'Qualifying 2',
          podium: [
            { position: 1, driverIds: ['cairoli', 'lappalainen'], teamId: 'emil-frey-racing' },
            { position: 2, driverIds: ['fleming', 'l-prette'], teamId: 'garage-59' },
            { position: 3, driverIds: ['vermeulen', 'green-b'], teamId: 'emil-frey-racing' },
          ],
        },
      ],
    },
    race: {
      overall: { driverIds: ['fleming', 'l-prette'], teamId: 'garage-59' },
      classes: [
        {
          className: 'Race 1',
          podium: [
            { position: 1, driverIds: ['fleming', 'l-prette'], teamId: 'garage-59' },
            { position: 2, driverIds: ['schuring', 'boccolacci'], teamId: 'boutsen-vds' },
            { position: 3, driverIds: ['vermeulen', 'green-b'], teamId: 'emil-frey-racing' },
          ],
        },
        {
          className: 'Race 1 · Gold',
          podium: [
            { position: 1, driverIds: ['fleming', 'l-prette'], teamId: 'garage-59' },
          ],
        },
        {
          className: 'Race 1 · Silver',
          podium: [
            { position: 1, driverIds: ['lismont', 'montenegro'], teamId: 'team-wrt' },
          ],
        },
        {
          className: 'Race 1 · Bronze',
          podium: [
            { position: 1, driverIds: ['cheever', 'dempsey'], teamId: 'ziggo-tempesta' },
          ],
        },
        {
          className: 'Race 2',
          podium: [
            { position: 1, driverIds: ['vermeulen', 'green-b'], teamId: 'emil-frey-racing' },
            { position: 2, driverIds: ['buus', 'feller'], teamId: 'lionspeed' },
            { position: 3, driverIds: ['cairoli', 'lappalainen'], teamId: 'emil-frey-racing' },
          ],
        },
        {
          className: 'Race 2 · Gold',
          podium: [
            { position: 1, driverIds: ['mosca', 'zagazeta'], teamId: 'af-corse' },
          ],
        },
        {
          className: 'Race 2 · Silver',
          podium: [
            { position: 1, driverIds: ['dorison', 'soderstrom'], teamId: 'comtoyou-racing' },
          ],
        },
        {
          className: 'Race 2 · Bronze',
          podium: [
            { position: 1, driverIds: ['cheever', 'dempsey'], teamId: 'ziggo-tempesta' },
          ],
        },
      ],
    },
  },
  'gtwc-2026-barcelona': {
    qualifying: {
      overall: { driverIds: ['buus', 'feller'], teamId: 'lionspeed' },
      classes: [
        {
          className: 'Top 3',
          podium: [
            { position: 1, driverIds: ['buus', 'feller'], teamId: 'lionspeed' },
            { position: 2, driverIds: ['jewiss', 'dawson'], teamId: '2seas-motorsport' },
            { position: 3, driverIds: ['schiller', 'rindone'], teamId: 'getspeed-team-dubai' },
          ],
        },
      ],
    },
    race: {
      overall: { driverIds: ['pereira', 'aka'], teamId: 'tresor-attempto' },
      classes: [
        {
          className: 'Race 1',
          podium: [
            { position: 1, driverIds: ['pereira', 'aka'], teamId: 'tresor-attempto' },
            { position: 2, driverIds: ['buus', 'feller'], teamId: 'lionspeed' },
            { position: 3, driverIds: ['niederhauser', 'engstler'], teamId: 'rutronik-racing' },
          ],
        },
        {
          className: 'Race 1 · Gold',
          podium: [
            { position: 1, driverIds: ['pereira', 'aka'], teamId: 'tresor-attempto' },
          ],
        },
        {
          className: 'Race 1 · Silver',
          podium: [
            { position: 1, driverIds: ['porter', 'g-oliveira'], teamId: 'optimum-motorsport' },
          ],
        },
        {
          className: 'Race 1 · Bronze',
          podium: [
            { position: 1, driverIds: ['cheever', 'dempsey'], teamId: 'ziggo-tempesta' },
          ],
        },
      ],
    },
  },
}
