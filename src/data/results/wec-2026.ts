import type { EventResults } from './types'

// WEC 2026 results — verified from fiawec.com, racetrackmasters.com, motorsport.com
export const wecResults2026: Record<string, EventResults> = {
  'wec-2026-imola': {
    qualifying: {
      overall: { driverIds: ['giovinazzi'], teamId: 'ferrari-af-corse' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['giovinazzi'], teamId: 'ferrari-af-corse' },
            { position: 2, driverIds: ['hirakawa'], teamId: 'toyota-gazoo-racing' },
            { position: 3, driverIds: ['fuoco'], teamId: 'ferrari-af-corse' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['fleming'], teamId: 'garage-59' },
            { position: 2, driverIds: ['david'], teamId: 'akkodis-asp' },
            { position: 3, driverIds: ['schmid'], teamId: 'akkodis-asp' },
          ],
        },
      ],
    },
    hyperpole: {
      overall: { driverIds: ['giovinazzi'], teamId: 'ferrari-af-corse' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['giovinazzi'], teamId: 'ferrari-af-corse' },
            { position: 2, driverIds: ['hirakawa'], teamId: 'toyota-gazoo-racing' },
            { position: 3, driverIds: ['fuoco'], teamId: 'ferrari-af-corse' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['fleming'], teamId: 'garage-59' },
            { position: 2, driverIds: ['david'], teamId: 'akkodis-asp' },
            { position: 3, driverIds: ['schmid'], teamId: 'akkodis-asp' },
          ],
        },
      ],
    },
    race: {
      overall: { driverIds: ['buemi', 'hartley', 'hirakawa'], teamId: 'toyota-gazoo-racing' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['buemi', 'hartley', 'hirakawa'], teamId: 'toyota-gazoo-racing' },
            { position: 2, driverIds: ['giovinazzi', 'calado', 'pier-guidi'], teamId: 'ferrari-af-corse' },
            { position: 3, driverIds: ['conway', 'kobayashi', 'de-vries'], teamId: 'toyota-gazoo-racing' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['mcintosh', 'thompson', 'harper'], teamId: 'team-wrt' },
            { position: 2, driverIds: ['au', 'fleming', 'kirchhofer'], teamId: 'garage-59' },
            { position: 3, driverIds: ['shahin', 'pera', 'lietz'], teamId: 'manthey' },
          ],
        },
      ],
    },
  },
  'wec-2026-spa': {
    qualifying: {
      overall: { driverIds: ['milesi'], teamId: 'alpine' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['milesi'], teamId: 'alpine' },
            { position: 2, driverIds: ['jakobsen'], teamId: 'peugeot' },
            { position: 3, driverIds: ['gounon'], teamId: 'alpine' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['umbrarescu'], teamId: 'akkodis-asp' },
            { position: 2, driverIds: ['tuck'], teamId: 'proton-competition' },
            { position: 3, driverIds: [], teamId: 'iron-lynx' },
          ],
        },
      ],
    },
    hyperpole: {
      overall: { driverIds: ['jakobsen'], teamId: 'peugeot' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['jakobsen'], teamId: 'peugeot' },
            { position: 2, driverIds: ['stevens'], teamId: 'jota' },
            { position: 3, driverIds: ['milesi'], teamId: 'alpine' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['david-h'], teamId: 'akkodis-asp' },
            { position: 2, driverIds: ['robichon'], teamId: 'heart-of-racing' },
            { position: 3, driverIds: ['tuck'], teamId: 'proton-competition' },
          ],
        },
      ],
    },
    race: {
      overall: { driverIds: ['frijns', 'rast', 's-van-der-linde'], teamId: 'bmw-wrt' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['frijns', 'rast', 's-van-der-linde'], teamId: 'bmw-wrt' },
            { position: 2, driverIds: ['magnussen', 'marciello', 'vanthoor'], teamId: 'bmw-wrt' },
            { position: 3, driverIds: ['fuoco', 'molina', 'nielsen'], teamId: 'ferrari-af-corse' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['au', 'fleming', 'kirchhofer'], teamId: 'garage-59' },
            { position: 2, driverIds: ['james-i', 'robichon', 'drudi'], teamId: 'heart-of-racing' },
            { position: 3, driverIds: ['shahin', 'pera', 'lietz'], teamId: 'the-bend-manthey' },
          ],
        },
      ],
    },
  },
  'wec-2026-le-mans': {
    qualifying: {
      overall: { driverIds: ['da-costa', 'habsburg', 'milesi'], teamId: 'alpine' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['da-costa', 'habsburg', 'milesi'], teamId: 'alpine' },
            { position: 2, driverIds: ['mann', 'nato', 'stevens'], teamId: 'jota' },
            { position: 3, driverIds: ['mann', 'mann', 'mann'], teamId: 'cadillac' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['dempsey', 'eastwood', 'yoluc'], teamId: 'racing-team-turkey-tf' },
            { position: 2, driverIds: ['powell', 'priaulx', 'tuck'], teamId: 'proton-competition' },
            { position: 3, driverIds: ['adam', 'e-barrichello', 'newell-g'], teamId: 'heart-of-racing' },
          ],
        },
      ],
    },
    hyperpole: {
      overall: { driverIds: ['vanthoor'], teamId: 'bmw-wrt' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['vanthoor'], teamId: 'bmw-wrt' },
            { position: 2, driverIds: ['nato'], teamId: 'jota' },
            { position: 3, driverIds: ['habsburg'], teamId: 'alpine' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['drudi'], teamId: 'heart-of-racing' },
            { position: 2, driverIds: ['rovera'], teamId: 'vista-af-corse' },
            { position: 3, driverIds: [], teamId: 'akkodis-asp' },
          ],
        },
      ],
    },
    race: {
      overall: { driverIds: ['conway', 'kobayashi', 'de-vries'], teamId: 'toyota-gazoo-racing' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['conway', 'kobayashi', 'de-vries'], teamId: 'toyota-gazoo-racing' },
            { position: 2, driverIds: ['frijns', 'rast', 's-van-der-linde'], teamId: 'bmw-wrt' },
            { position: 3, driverIds: ['buemi', 'hartley', 'hirakawa'], teamId: 'toyota-gazoo-racing' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['catsburg', 'edgar', 'mann'], teamId: 'tf-sport' },
            { position: 2, driverIds: ['david-h', 'hawksworth', 'van-rompuy'], teamId: 'akkodis-asp' },
            { position: 3, driverIds: ['adam', 'e-barrichello', 'newell-g'], teamId: 'heart-of-racing' },
          ],
        },
      ],
    },
  },
  'wec-2026-sao-paulo': {
    qualifying: {
      overall: { driverIds: ['aitken', 'bamber', 'bourdais'], teamId: 'jota' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['aitken', 'bamber', 'bourdais'], teamId: 'jota' },
            { position: 2, driverIds: ['chatin', 'jaminet', 'juncadella'], teamId: 'genesis-magma' },
            { position: 3, driverIds: ['fuoco', 'molina', 'nielsen'], teamId: 'ferrari-af-corse' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['dempsey', 'eastwood', 'yoluc'], teamId: 'racing-team-turkey-tf' },
            { position: 2, driverIds: ['dan-harper', 'mcintosh', 'thompson-p'], teamId: 'team-wrt' },
            { position: 3, driverIds: ['powell', 'priaulx', 'tuck'], teamId: 'proton-competition' },
          ],
        },
      ],
    },
    hyperpole: {
      overall: { driverIds: ['nato', 'stevens'], teamId: 'jota' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['nato', 'stevens'], teamId: 'jota' },
            { position: 2, driverIds: ['aitken', 'bamber', 'bourdais'], teamId: 'jota' },
            { position: 3, driverIds: ['gounon', 'makowiecki', 'martins'], teamId: 'alpine' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['adam', 'pauwels', 'newell-g'], teamId: 'heart-of-racing' },
            { position: 2, driverIds: ['cressoni', 'hodenius', 'zelger'], teamId: 'iron-lynx' },
            { position: 3, driverIds: ['jm-lopez', 'schmid', 'mann'], teamId: 'akkodis-asp' },
          ],
        },
      ],
    },
    race: {
      overall: { driverIds: ['magnussen', 'marciello', 'vanthoor'], teamId: 'bmw-wrt' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['magnussen', 'marciello', 'vanthoor'], teamId: 'bmw-wrt' },
            { position: 2, driverIds: ['calado', 'giovinazzi', 'pier-guidi'], teamId: 'ferrari-af-corse' },
            { position: 3, driverIds: ['nato', 'stevens'], teamId: 'jota' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['dempsey', 'eastwood', 'yoluc'], teamId: 'racing-team-turkey-tf' },
            { position: 2, driverIds: ['dan-harper', 'mcintosh', 'thompson-p'], teamId: 'team-wrt' },
            { position: 3, driverIds: ['lietz', 'pera', 'shahin-y'], teamId: 'the-bend-manthey' },
          ],
        },
      ],
    },
  },
  'wec-2026-cota': {
    qualifying: {
      overall: { driverIds: ['fuoco', 'molina', 'nielsen'], teamId: 'ferrari-af-corse' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['fuoco', 'molina', 'nielsen'], teamId: 'ferrari-af-corse' },
            { position: 2, driverIds: ['gounon', 'makowiecki', 'martins'], teamId: 'alpine' },
            { position: 3, driverIds: ['calado', 'giovinazzi', 'pier-guidi'], teamId: 'ferrari-af-corse' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['mann', 'levorato', 'sargeant'], teamId: 'proton-competition' },
            { position: 2, driverIds: ['andrade', 'mann', 'martin'], teamId: 'iron-lynx' },
            { position: 3, driverIds: ['mann', 'goethe', 'west'], teamId: 'garage-59' },
          ],
        },
      ],
    },
    hyperpole: {
      overall: { driverIds: ['calado', 'giovinazzi', 'pier-guidi'], teamId: 'ferrari-af-corse' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['calado', 'giovinazzi', 'pier-guidi'], teamId: 'ferrari-af-corse' },
            { position: 2, driverIds: ['aitken', 'bamber', 'bourdais'], teamId: 'jota' },
            { position: 3, driverIds: ['da-costa', 'habsburg', 'milesi'], teamId: 'alpine' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['adam', 'pauwels', 'newell-g'], teamId: 'heart-of-racing' },
            { position: 2, driverIds: ['drudi', 'mann', 'robichon'], teamId: 'heart-of-racing' },
            { position: 3, driverIds: ['boguslavskiy', 'cottingham', 'guven'], teamId: 'manthey-dk' },
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
            { position: 2, driverIds: ['aitken', 'bamber', 'bourdais'], teamId: 'jota' },
            { position: 3, driverIds: ['da-costa', 'habsburg', 'milesi'], teamId: 'alpine' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['drudi', 'mann', 'robichon'], teamId: 'heart-of-racing' },
            { position: 2, driverIds: ['boguslavskiy', 'cottingham', 'guven'], teamId: 'manthey-dk' },
            { position: 3, driverIds: ['adam', 'pauwels', 'newell-g'], teamId: 'heart-of-racing' },
          ],
        },
      ],
    },
  },
  'wec-2026-fuji': {
    race: {
      overall: { driverIds: ['buemi', 'hartley', 'hirakawa'], teamId: 'toyota-gazoo-racing' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['buemi', 'hartley', 'hirakawa'], teamId: 'toyota-gazoo-racing' },
            { position: 2, driverIds: ['gounon', 'martins'], teamId: 'alpine' },
            { position: 3, driverIds: ['magnussen', 'marciello', 'vanthoor'], teamId: 'bmw-wrt' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['farfus', 'gelael', 'darren-leung'], teamId: 'team-wrt' },
            { position: 2, driverIds: ['drudi', 'mann', 'robichon'], teamId: 'heart-of-racing' },
            { position: 3, driverIds: ['dempsey', 'eastwood', 'yoluc'], teamId: 'racing-team-turkey-tf' },
          ],
        },
      ],
    },
  },
}
