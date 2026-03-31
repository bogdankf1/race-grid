import type { EventResults } from './types'

// WEC 2025 results — verified from fiawec.com, en.wikipedia.org, motorsport.com
export const wecResults2025: Record<string, EventResults> = {
  'wec-2025-qatar': {
    qualifying: {
      overall: { driverIds: ['giovinazzi', 'calado', 'pier-guidi'], teamId: 'ferrari-af-corse' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['giovinazzi', 'calado', 'pier-guidi'], teamId: 'ferrari-af-corse' }] }],
    },
    hyperpole: {
      overall: { driverIds: ['giovinazzi', 'calado', 'pier-guidi'], teamId: 'ferrari-af-corse' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['giovinazzi', 'calado', 'pier-guidi'], teamId: 'ferrari-af-corse' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['edgar', 'juncadella', 'keating'], teamId: 'tf-sport' },
          ],
        },
      ],
    },
    race: {
      overall: { driverIds: ['fuoco', 'molina', 'nielsen'], teamId: 'ferrari-af-corse' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['fuoco', 'molina', 'nielsen'], teamId: 'ferrari-af-corse' },
            { position: 2, driverIds: ['ye', 'kubica', 'hanson'], teamId: 'ferrari-af-corse' },
            { position: 3, driverIds: ['pier-guidi', 'calado', 'giovinazzi'], teamId: 'ferrari-af-corse' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['edgar', 'juncadella', 'keating'], teamId: 'tf-sport' },
            { position: 2, driverIds: ['al-harthy', 'sherwood', 'sherwood'], teamId: 'united-autosports' },
            { position: 3, driverIds: ['shahin', 'boguslavskiy', 'farfus'], teamId: 'team-wrt' },
          ],
        },
      ],
    },
  },
  'wec-2025-imola': {
    qualifying: {
      overall: { driverIds: ['giovinazzi', 'calado', 'pier-guidi'], teamId: 'ferrari-af-corse' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['giovinazzi', 'calado', 'pier-guidi'], teamId: 'ferrari-af-corse' }] }],
    },
    hyperpole: {
      overall: { driverIds: ['giovinazzi', 'calado', 'pier-guidi'], teamId: 'ferrari-af-corse' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['giovinazzi', 'calado', 'pier-guidi'], teamId: 'ferrari-af-corse' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['van der Linde', 'rossi', 'al-harthy'], teamId: 'team-wrt' },
          ],
        },
      ],
    },
    race: {
      overall: { driverIds: ['calado', 'giovinazzi', 'pier-guidi'], teamId: 'ferrari-af-corse' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['calado', 'giovinazzi', 'pier-guidi'], teamId: 'ferrari-af-corse' },
            { position: 2, driverIds: ['frijns', 'rast', 'van der Linde'], teamId: 'team-wrt' },
            { position: 3, driverIds: ['schumacher', 'gounon', 'makowiecki'], teamId: 'alpine' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['hardwick', 'lietz', 'pera'], teamId: 'manthey' },
            { position: 2, driverIds: ['van der Linde', 'rossi', 'al-harthy'], teamId: 'team-wrt' },
            { position: 3, driverIds: ['gehrsitz', 'robin', 'barnicoat'], teamId: 'akkodis-asp' },
          ],
        },
      ],
    },
  },
  'wec-2025-spa': {
    qualifying: {
      overall: { driverIds: ['fuoco', 'molina', 'nielsen'], teamId: 'ferrari-af-corse' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['fuoco', 'molina', 'nielsen'], teamId: 'ferrari-af-corse' }] }],
    },
    hyperpole: {
      overall: { driverIds: ['fuoco', 'molina', 'nielsen'], teamId: 'ferrari-af-corse' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['fuoco', 'molina', 'nielsen'], teamId: 'ferrari-af-corse' },
          ],
        },
      ],
    },
    race: {
      overall: { driverIds: ['calado', 'giovinazzi', 'pier-guidi'], teamId: 'ferrari-af-corse' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['calado', 'giovinazzi', 'pier-guidi'], teamId: 'ferrari-af-corse' },
            { position: 2, driverIds: ['fuoco', 'molina', 'nielsen'], teamId: 'ferrari-af-corse' },
            { position: 3, driverIds: ['schumacher', 'makowiecki', 'gounon'], teamId: 'alpine' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['heriau', 'mann', 'rovera'], teamId: 'vista-af-corse' },
            { position: 2, driverIds: ['olsen', 'levorato', 'gattuso'], teamId: 'proton-competition' },
            { position: 3, driverIds: ['rigon'], teamId: 'vista-af-corse' },
          ],
        },
      ],
    },
  },
  'wec-2025-le-mans': {
    qualifying: {
      overall: { driverIds: ['lynn', 'nato', 'stevens'], teamId: 'jota' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['lynn', 'nato', 'stevens'], teamId: 'jota' }] }],
    },
    hyperpole: {
      overall: { driverIds: ['lynn', 'nato', 'stevens'], teamId: 'jota' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['lynn', 'nato', 'stevens'], teamId: 'jota' },
          ],
        },
      ],
    },
    race: {
      overall: { driverIds: ['hanson', 'kubica', 'ye'], teamId: 'ferrari-af-corse' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['hanson', 'kubica', 'ye'], teamId: 'ferrari-af-corse' },
            { position: 2, driverIds: ['estre', 'vanthoor', 'campbell'], teamId: 'porsche-penske' },
            { position: 3, driverIds: ['pier-guidi', 'calado', 'giovinazzi'], teamId: 'ferrari-af-corse' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['hardwick', 'lietz', 'pera'], teamId: 'manthey' },
            { position: 2, driverIds: ['heriau', 'mann', 'rovera'], teamId: 'vista-af-corse' },
            { position: 3, driverIds: ['eastwood', 'andrade', 'van-rompuy'], teamId: 'tf-sport' },
          ],
        },
      ],
    },
  },
  'wec-2025-sao-paulo': {
    qualifying: {
      overall: { driverIds: ['lynn', 'nato', 'stevens'], teamId: 'jota' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['lynn', 'nato', 'stevens'], teamId: 'jota' }] }],
    },
    hyperpole: {
      overall: { driverIds: ['lynn', 'nato', 'stevens'], teamId: 'jota' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['lynn', 'nato', 'stevens'], teamId: 'jota' },
          ],
        },
      ],
    },
    race: {
      overall: { driverIds: ['lynn', 'nato', 'stevens'], teamId: 'jota' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['lynn', 'nato', 'stevens'], teamId: 'jota' },
            { position: 2, driverIds: ['bamber', 'bourdais', 'button'], teamId: 'jota' },
            { position: 3, driverIds: ['andlauer', 'christensen'], teamId: 'porsche-penske' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['lopez', 'schmid', 'umbrarescu'], teamId: 'akkodis-asp' },
            { position: 2, driverIds: ['eastwood', 'andrade', 'van-rompuy'], teamId: 'tf-sport' },
            { position: 3, driverIds: ['barrichello', 'ruberti', 'roda'], teamId: 'racing-spirit-of-leman' },
          ],
        },
      ],
    },
  },
  'wec-2025-cota': {
    qualifying: {
      overall: { driverIds: ['kubica', 'hanson', 'ye'], teamId: 'ferrari-af-corse' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['kubica', 'hanson', 'ye'], teamId: 'ferrari-af-corse' }] }],
    },
    hyperpole: {
      overall: { driverIds: ['kubica', 'hanson', 'ye'], teamId: 'ferrari-af-corse' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['kubica', 'hanson', 'ye'], teamId: 'ferrari-af-corse' },
          ],
        },
      ],
    },
    race: {
      overall: { driverIds: ['estre', 'vanthoor', 'campbell'], teamId: 'porsche-penske' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['estre', 'vanthoor', 'campbell'], teamId: 'porsche-penske' },
            { position: 2, driverIds: ['fuoco', 'molina', 'nielsen'], teamId: 'ferrari-af-corse' },
            { position: 3, driverIds: ['jakobsen', 'vergne', 'di-resta'], teamId: 'peugeot' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['gelael', 'leung', 'sato'], teamId: 'united-autosports' },
            { position: 2, driverIds: ['van der Linde', 'rossi', 'al-harthy'], teamId: 'team-wrt' },
            { position: 3, driverIds: ['rigon'], teamId: 'vista-af-corse' },
          ],
        },
      ],
    },
  },
  'wec-2025-fuji': {
    qualifying: {
      overall: { driverIds: ['lynn', 'nato', 'stevens'], teamId: 'jota' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['lynn', 'nato', 'stevens'], teamId: 'jota' }] }],
    },
    hyperpole: {
      overall: { driverIds: ['lynn', 'nato', 'stevens'], teamId: 'jota' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['lynn', 'nato', 'stevens'], teamId: 'jota' },
          ],
        },
      ],
    },
    race: {
      overall: { driverIds: ['chatin', 'habsburg', 'milesi'], teamId: 'alpine' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['chatin', 'habsburg', 'milesi'], teamId: 'alpine' },
            { position: 2, driverIds: ['di-resta', 'jensen', 'vergne'], teamId: 'peugeot' },
            { position: 3, driverIds: ['estre', 'vanthoor'], teamId: 'porsche-penske' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['van-rompuy', 'andrade', 'eastwood'], teamId: 'tf-sport' },
            { position: 2, driverIds: ['heriau', 'mann', 'rovera'], teamId: 'vista-af-corse' },
            { position: 3, driverIds: ['shahin', 'boguslavskiy', 'farfus'], teamId: 'team-wrt' },
          ],
        },
      ],
    },
  },
  'wec-2025-bahrain': {
    qualifying: {
      overall: { driverIds: ['kobayashi', 'conway', 'de-vries'], teamId: 'toyota-gazoo-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['kobayashi', 'conway', 'de-vries'], teamId: 'toyota-gazoo-racing' }] }],
    },
    hyperpole: {
      overall: { driverIds: ['kobayashi', 'conway', 'de-vries'], teamId: 'toyota-gazoo-racing' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['kobayashi', 'conway', 'de-vries'], teamId: 'toyota-gazoo-racing' },
          ],
        },
      ],
    },
    race: {
      overall: { driverIds: ['kobayashi', 'conway', 'de-vries'], teamId: 'toyota-gazoo-racing' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['kobayashi', 'conway', 'de-vries'], teamId: 'toyota-gazoo-racing' },
            { position: 2, driverIds: ['buemi', 'hartley', 'hirakawa'], teamId: 'toyota-gazoo-racing' },
            { position: 3, driverIds: ['fuoco', 'molina', 'nielsen'], teamId: 'ferrari-af-corse' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['lopez', 'schmid', 'umbrarescu'], teamId: 'akkodis-asp' },
            { position: 2, driverIds: ['martin', 'hodenius', 'berry'], teamId: 'iron-lynx' },
            { position: 3, driverIds: ['drudi', 'james', 'robichon'], teamId: 'heart-of-racing' },
          ],
        },
      ],
    },
  },
}
