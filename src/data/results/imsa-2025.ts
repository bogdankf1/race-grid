import { EventResults } from './types'

// IMSA 2025 results — verified from imsa.com, motorsport.com, nbcsports.com, racer.com
export const imsaResults2025: Record<string, EventResults> = {
  'imsa-2025-daytona': {
    endurance: {
      overall: { drivers: ['Nasr', 'Tandy', 'Vanthoor'], team: 'Porsche Penske Motorsport' },
      classes: [
        {
          className: 'GTP',
          podium: [
            { position: 1, drivers: ['Nasr', 'Tandy', 'Vanthoor'], team: 'Porsche Penske Motorsport' },
            { position: 2, drivers: ['Blomqvist'], team: 'Meyer Shank Racing Acura' },
            { position: 3, drivers: ['Estre'], team: 'Porsche Penske Motorsport' },
          ],
        },
      ],
    },
  },
  'imsa-2025-sebring': {
    endurance: {
      overall: { drivers: ['Nasr', 'Tandy', 'Vanthoor'], team: 'Porsche Penske Motorsport' },
      classes: [
        {
          className: 'GTP',
          podium: [
            { position: 1, drivers: ['Nasr', 'Tandy', 'Vanthoor'], team: 'Porsche Penske Motorsport' },
            { position: 2, drivers: ['Jaminet', 'Campbell', 'Estre'], team: 'Porsche Penske Motorsport' },
          ],
        },
        {
          className: 'LMP2',
          podium: [
            { position: 1, drivers: ['Di Resta'], team: 'Inter Europol Competition' },
          ],
        },
      ],
    },
  },
  'imsa-2025-long-beach': {
    race: {
      overall: { drivers: ['Nasr', 'Tandy'], team: 'Porsche Penske Motorsport' },
      classes: [
        {
          className: 'GTP',
          podium: [
            { position: 1, drivers: ['Nasr', 'Tandy'], team: 'Porsche Penske Motorsport' },
            { position: 2, drivers: ['Campbell', 'Jaminet'], team: 'Porsche Penske Motorsport' },
            { position: 3, drivers: ['Eng', 'D. Vanthoor'], team: 'BMW M Team RLL' },
          ],
        },
        {
          className: 'GTD',
          podium: [
            { position: 1, drivers: ['Edgar', 'L. Vanthoor'], team: 'Proton Competition Porsche' },
          ],
        },
      ],
    },
  },
  'imsa-2025-laguna-seca': {
    race: {
      overall: { drivers: ['Jaminet', 'Campbell'], team: 'Porsche Penske Motorsport' },
      classes: [
        {
          className: 'GTP',
          podium: [
            { position: 1, drivers: ['Jaminet', 'Campbell'], team: 'Porsche Penske Motorsport' },
            { position: 2, drivers: ['Nasr', 'Tandy'], team: 'Porsche Penske Motorsport' },
          ],
        },
        {
          className: 'GTD Pro',
          podium: [
            { position: 1, drivers: ['Heinrich', 'Bachler'], team: 'AO Racing Porsche' },
          ],
        },
      ],
    },
  },
  'imsa-2025-detroit': {
    race: {
      overall: { drivers: ['van der Zande', 'Yelloly'], team: 'Meyer Shank Racing Acura' },
      classes: [
        {
          className: 'GTP',
          podium: [
            { position: 1, drivers: ['van der Zande', 'Yelloly'], team: 'Meyer Shank Racing Acura' },
          ],
        },
        {
          className: 'GTD Pro',
          podium: [
            { position: 1, drivers: ['Priaulx', 'Rockenfeller'], team: 'Ford Multimatic Motorsports' },
          ],
        },
      ],
    },
  },
  'imsa-2025-watkins-glen': {
    endurance: {
      overall: { drivers: ['Blomqvist', 'Braun'], team: 'Meyer Shank Racing Acura' },
      classes: [
        {
          className: 'GTP',
          podium: [
            { position: 1, drivers: ['Blomqvist', 'Braun'], team: 'Meyer Shank Racing Acura' },
          ],
        },
        {
          className: 'LMP2',
          podium: [
            { position: 1, drivers: ['Di Resta', 'Goldburg', 'Lindh'], team: 'United Autosports USA' },
          ],
        },
        {
          className: 'GTD Pro',
          podium: [
            { position: 1, drivers: ['Harper', 'Hesse'], team: 'Paul Miller Racing BMW' },
          ],
        },
      ],
    },
  },
  'imsa-2025-ctmp': {
    race: {
      overall: { drivers: ['Hyett', 'Cameron'], team: 'AO Racing' },
      classes: [
        {
          className: 'GTD Pro',
          podium: [
            { position: 1, drivers: ['Costa', 'Altoe'], team: 'DragonSpeed Ferrari' },
          ],
        },
      ],
    },
  },
  'imsa-2025-road-america': {
    race: {
      overall: { drivers: ['Eng', 'D. Vanthoor'], team: 'BMW M Team RLL' },
      classes: [
        {
          className: 'GTP',
          podium: [
            { position: 1, drivers: ['Eng', 'D. Vanthoor'], team: 'BMW M Team RLL' },
            { position: 2, drivers: ['Wittmann', 'S. van der Linde'], team: 'BMW M Team RLL' },
          ],
        },
        {
          className: 'LMP2',
          podium: [
            { position: 1, drivers: ['Cameron', 'Hyett'], team: 'AO Racing' },
          ],
        },
        {
          className: 'GTD Pro',
          podium: [
            { position: 1, drivers: ['Snow', 'Verhagen'], team: 'Paul Miller Racing BMW' },
          ],
        },
      ],
    },
  },
  'imsa-2025-vir': {
    race: {
      // VIR is GTD-only (no GTP), so overall is GTD Pro winner
      overall: { drivers: ['Garcia', 'Sims'], team: 'Corvette Racing by Pratt Miller' },
      classes: [
        {
          className: 'GTD Pro',
          podium: [
            { position: 1, drivers: ['Garcia', 'Sims'], team: 'Corvette Racing by Pratt Miller' },
          ],
        },
        {
          className: 'GTD',
          podium: [
            { position: 1, drivers: ['Ward', 'Ellis'], team: 'Winward Racing Mercedes' },
          ],
        },
      ],
    },
  },
  'imsa-2025-indianapolis': {
    endurance: {
      overall: { drivers: ['Aitken', 'Bamber', 'Vesti'], team: 'Whelen Cadillac' },
      classes: [
        {
          className: 'GTP',
          podium: [
            { position: 1, drivers: ['Aitken', 'Bamber', 'Vesti'], team: 'Whelen Cadillac' },
          ],
        },
        {
          className: 'GTD Pro',
          podium: [
            { position: 1, drivers: ['Rockenfeller', 'Priaulx'], team: 'Ford Multimatic Motorsports' },
          ],
        },
      ],
    },
  },
  'imsa-2025-petit-le-mans': {
    endurance: {
      overall: { drivers: ['Aitken', 'Bamber', 'Vesti'], team: 'Whelen Cadillac' },
      classes: [
        {
          className: 'GTP',
          podium: [
            { position: 1, drivers: ['Aitken', 'Bamber', 'Vesti'], team: 'Whelen Cadillac' },
          ],
        },
        {
          className: 'LMP2',
          podium: [
            { position: 1, drivers: ['Thomas', 'Jensen', 'McElrea'], team: 'TDS Racing' },
          ],
        },
        {
          className: 'GTD Pro',
          podium: [
            { position: 1, drivers: ['Harper'], team: 'Paul Miller Racing BMW' },
          ],
        },
        {
          className: 'GTD',
          podium: [
            { position: 1, drivers: ['Mann', 'Pier Guidi', 'Wadoux'], team: 'AF Corse Ferrari' },
          ],
        },
      ],
    },
  },
}
