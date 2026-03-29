import { EventResults } from './types'

// WEC 2025 results — verified from fiawec.com, en.wikipedia.org, motorsport.com
export const wecResults2025: Record<string, EventResults> = {
  'wec-2025-qatar': {
    hyperpole: {
      overall: { drivers: ['Giovinazzi', 'Calado', 'Pier Guidi'], team: 'Ferrari AF Corse' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, drivers: ['Giovinazzi', 'Calado', 'Pier Guidi'], team: 'Ferrari AF Corse #51' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, drivers: ['Edgar', 'Juncadella', 'Keating'], team: 'TF Sport Corvette #33' },
          ],
        },
      ],
    },
    endurance: {
      overall: { drivers: ['Fuoco', 'Molina', 'Nielsen'], team: 'Ferrari AF Corse #50' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, drivers: ['Fuoco', 'Molina', 'Nielsen'], team: 'Ferrari AF Corse #50' },
            { position: 2, drivers: ['Ye', 'Kubica', 'Hanson'], team: 'AF Corse Ferrari #83' },
            { position: 3, drivers: ['Pier Guidi', 'Calado', 'Giovinazzi'], team: 'Ferrari AF Corse #51' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, drivers: ['Edgar', 'Juncadella', 'Keating'], team: 'TF Sport Corvette #33' },
            { position: 2, drivers: ['Al Harthy', 'Sherwood', 'Sherwood'], team: 'United Autosports McLaren #59' },
            { position: 3, drivers: ['Shahin', 'Boguslavskiy', 'Farfus'], team: 'Team WRT BMW #31' },
          ],
        },
      ],
    },
  },
  'wec-2025-imola': {
    hyperpole: {
      overall: { drivers: ['Giovinazzi', 'Calado', 'Pier Guidi'], team: 'Ferrari AF Corse' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, drivers: ['Giovinazzi', 'Calado', 'Pier Guidi'], team: 'Ferrari AF Corse #51' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, drivers: ['van der Linde', 'Rossi', 'Al Harthy'], team: 'Team WRT BMW #46' },
          ],
        },
      ],
    },
    endurance: {
      overall: { drivers: ['Calado', 'Giovinazzi', 'Pier Guidi'], team: 'Ferrari AF Corse #51' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, drivers: ['Calado', 'Giovinazzi', 'Pier Guidi'], team: 'Ferrari AF Corse #51' },
            { position: 2, drivers: ['Frijns', 'Rast', 'van der Linde'], team: 'BMW M Team WRT #20' },
            { position: 3, drivers: ['Schumacher', 'Gounon', 'Makowiecki'], team: 'Alpine Endurance Team #36' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, drivers: ['Hardwick', 'Lietz', 'Pera'], team: 'Manthey Porsche #92' },
            { position: 2, drivers: ['van der Linde', 'Rossi', 'Al Harthy'], team: 'Team WRT BMW #46' },
            { position: 3, drivers: ['Gehrsitz', 'Robin', 'Barnicoat'], team: 'Akkodis ASP Lexus #78' },
          ],
        },
      ],
    },
  },
  'wec-2025-spa': {
    hyperpole: {
      overall: { drivers: ['Fuoco', 'Molina', 'Nielsen'], team: 'Ferrari AF Corse' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, drivers: ['Fuoco', 'Molina', 'Nielsen'], team: 'Ferrari AF Corse #50' },
          ],
        },
      ],
    },
    endurance: {
      overall: { drivers: ['Calado', 'Giovinazzi', 'Pier Guidi'], team: 'Ferrari AF Corse #51' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, drivers: ['Calado', 'Giovinazzi', 'Pier Guidi'], team: 'Ferrari AF Corse #51' },
            { position: 2, drivers: ['Fuoco', 'Molina', 'Nielsen'], team: 'Ferrari AF Corse #50' },
            { position: 3, drivers: ['Schumacher', 'Makowiecki', 'Gounon'], team: 'Alpine Endurance Team #36' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, drivers: ['Heriau', 'Mann', 'Rovera'], team: 'Vista AF Corse Ferrari #21' },
            { position: 2, drivers: ['Olsen', 'Levorato', 'Gattuso'], team: 'Proton Competition Ford #88' },
            { position: 3, drivers: ['Rigon'], team: 'Vista AF Corse Ferrari #54' },
          ],
        },
      ],
    },
  },
  'wec-2025-le-mans': {
    hyperpole: {
      overall: { drivers: ['Lynn', 'Nato', 'Stevens'], team: 'Cadillac Hertz Team Jota' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, drivers: ['Lynn', 'Nato', 'Stevens'], team: 'Cadillac Hertz Team Jota #12' },
          ],
        },
      ],
    },
    endurance: {
      overall: { drivers: ['Hanson', 'Kubica', 'Ye'], team: 'AF Corse Ferrari #83' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, drivers: ['Hanson', 'Kubica', 'Ye'], team: 'AF Corse Ferrari #83' },
            { position: 2, drivers: ['Estre', 'Vanthoor', 'Campbell'], team: 'Porsche Penske Motorsport #6' },
            { position: 3, drivers: ['Pier Guidi', 'Calado', 'Giovinazzi'], team: 'Ferrari AF Corse #51' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, drivers: ['Hardwick', 'Lietz', 'Pera'], team: 'Manthey Porsche #92' },
            { position: 2, drivers: ['Heriau', 'Mann', 'Rovera'], team: 'Vista AF Corse Ferrari #21' },
            { position: 3, drivers: ['Eastwood', 'Andrade', 'Van Rompuy'], team: 'TF Sport Corvette #81' },
          ],
        },
      ],
    },
  },
  'wec-2025-sao-paulo': {
    hyperpole: {
      overall: { drivers: ['Lynn', 'Nato', 'Stevens'], team: 'Cadillac Hertz Team Jota' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, drivers: ['Lynn', 'Nato', 'Stevens'], team: 'Cadillac Hertz Team Jota #12' },
          ],
        },
      ],
    },
    endurance: {
      overall: { drivers: ['Lynn', 'Nato', 'Stevens'], team: 'Cadillac Hertz Team Jota #12' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, drivers: ['Lynn', 'Nato', 'Stevens'], team: 'Cadillac Hertz Team Jota #12' },
            { position: 2, drivers: ['Bamber', 'Bourdais', 'Button'], team: 'Cadillac Hertz Team Jota #38' },
            { position: 3, drivers: ['Andlauer', 'Christensen'], team: 'Porsche Penske Motorsport #5' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, drivers: ['Lopez', 'Schmid', 'Umbrarescu'], team: 'Akkodis ASP Lexus #87' },
            { position: 2, drivers: ['Eastwood', 'Andrade', 'Van Rompuy'], team: 'TF Sport Corvette #81' },
            { position: 3, drivers: ['Barrichello', 'Ruberti', 'Roda'], team: 'Racing Spirit of Leman Aston Martin #10' },
          ],
        },
      ],
    },
  },
  'wec-2025-cota': {
    hyperpole: {
      overall: { drivers: ['Kubica', 'Hanson', 'Ye'], team: 'AF Corse Ferrari' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, drivers: ['Kubica', 'Hanson', 'Ye'], team: 'AF Corse Ferrari #83' },
          ],
        },
      ],
    },
    endurance: {
      overall: { drivers: ['Estre', 'Vanthoor', 'Campbell'], team: 'Porsche Penske Motorsport #6' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, drivers: ['Estre', 'Vanthoor', 'Campbell'], team: 'Porsche Penske Motorsport #6' },
            { position: 2, drivers: ['Fuoco', 'Molina', 'Nielsen'], team: 'Ferrari AF Corse #50' },
            { position: 3, drivers: ['Jakobsen', 'Vergne', 'di Resta'], team: 'Peugeot TotalEnergies #94' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, drivers: ['Gelael', 'Leung', 'Sato'], team: 'United Autosports McLaren #95' },
            { position: 2, drivers: ['van der Linde', 'Rossi', 'Al Harthy'], team: 'Team WRT BMW #46' },
            { position: 3, drivers: ['Rigon'], team: 'Vista AF Corse Ferrari #54' },
          ],
        },
      ],
    },
  },
  'wec-2025-fuji': {
    hyperpole: {
      overall: { drivers: ['Lynn', 'Nato', 'Stevens'], team: 'Cadillac Hertz Team Jota' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, drivers: ['Lynn', 'Nato', 'Stevens'], team: 'Cadillac Hertz Team Jota #12' },
          ],
        },
      ],
    },
    endurance: {
      overall: { drivers: ['Chatin', 'Habsburg', 'Milesi'], team: 'Alpine Endurance Team #35' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, drivers: ['Chatin', 'Habsburg', 'Milesi'], team: 'Alpine Endurance Team #35' },
            { position: 2, drivers: ['di Resta', 'Jensen', 'Vergne'], team: 'Peugeot TotalEnergies #93' },
            { position: 3, drivers: ['Estre', 'Vanthoor'], team: 'Porsche Penske Motorsport #6' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, drivers: ['Van Rompuy', 'Andrade', 'Eastwood'], team: 'TF Sport Corvette #81' },
            { position: 2, drivers: ['Heriau', 'Mann', 'Rovera'], team: 'Vista AF Corse Ferrari #21' },
            { position: 3, drivers: ['Shahin', 'Boguslavskiy', 'Farfus'], team: 'Team WRT BMW #31' },
          ],
        },
      ],
    },
  },
  'wec-2025-bahrain': {
    hyperpole: {
      overall: { drivers: ['Kobayashi', 'Conway', 'de Vries'], team: 'Toyota Gazoo Racing' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, drivers: ['Kobayashi', 'Conway', 'de Vries'], team: 'Toyota Gazoo Racing #7' },
          ],
        },
      ],
    },
    endurance: {
      overall: { drivers: ['Kobayashi', 'Conway', 'de Vries'], team: 'Toyota Gazoo Racing #7' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, drivers: ['Kobayashi', 'Conway', 'de Vries'], team: 'Toyota Gazoo Racing #7' },
            { position: 2, drivers: ['Buemi', 'Hartley', 'Hirakawa'], team: 'Toyota Gazoo Racing #8' },
            { position: 3, drivers: ['Fuoco', 'Molina', 'Nielsen'], team: 'Ferrari AF Corse #50' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, drivers: ['Lopez', 'Schmid', 'Umbrarescu'], team: 'Akkodis ASP Lexus #87' },
            { position: 2, drivers: ['Martin', 'Hodenius', 'Berry'], team: 'Iron Lynx Mercedes-AMG #61' },
            { position: 3, drivers: ['Drudi', 'James', 'Robichon'], team: 'Heart of Racing Aston Martin #27' },
          ],
        },
      ],
    },
  },
}
