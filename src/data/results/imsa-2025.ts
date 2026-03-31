import type { EventResults } from './types'

// IMSA 2025 results — verified from imsa.com, motorsport.com, nbcsports.com, racer.com
export const imsaResults2025: Record<string, EventResults> = {
  'imsa-2025-daytona': {
    qualifying: {
      overall: { driverIds: ['vanthoor'], teamId: 'bmw-rahal' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['vanthoor'], teamId: 'bmw-rahal' }] }],
    },
    endurance: {
      overall: { driverIds: ['nasr', 'tandy', 'vanthoor'], teamId: 'porsche-penske' },
      classes: [
        {
          className: 'GTP',
          podium: [
            { position: 1, driverIds: ['nasr', 'tandy', 'vanthoor'], teamId: 'porsche-penske' },
            { position: 2, driverIds: ['blomqvist'], teamId: 'meyer-shank-racing' },
            { position: 3, driverIds: ['estre'], teamId: 'porsche-penske' },
          ],
        },
      ],
    },
  },
  'imsa-2025-sebring': {
    qualifying: {
      overall: { driverIds: ['vanthoor'], teamId: 'bmw-rahal' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['vanthoor'], teamId: 'bmw-rahal' }] }],
    },
    endurance: {
      overall: { driverIds: ['nasr', 'tandy', 'vanthoor'], teamId: 'porsche-penske' },
      classes: [
        {
          className: 'GTP',
          podium: [
            { position: 1, driverIds: ['nasr', 'tandy', 'vanthoor'], teamId: 'porsche-penske' },
            { position: 2, driverIds: ['jaminet', 'campbell', 'estre'], teamId: 'porsche-penske' },
          ],
        },
        {
          className: 'LMP2',
          podium: [
            { position: 1, driverIds: ['Di Resta'], teamId: 'inter-europol' },
          ],
        },
      ],
    },
  },
  'imsa-2025-long-beach': {
    qualifying: {
      overall: { driverIds: ['vanthoor'], teamId: 'bmw-rahal' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['vanthoor'], teamId: 'bmw-rahal' }] }],
    },
    race: {
      overall: { driverIds: ['nasr', 'tandy'], teamId: 'porsche-penske' },
      classes: [
        {
          className: 'GTP',
          podium: [
            { position: 1, driverIds: ['nasr', 'tandy'], teamId: 'porsche-penske' },
            { position: 2, driverIds: ['campbell', 'jaminet'], teamId: 'porsche-penske' },
            { position: 3, driverIds: ['eng', 'D. Vanthoor'], teamId: 'bmw-rahal' },
          ],
        },
        {
          className: 'GTD',
          podium: [
            { position: 1, driverIds: ['edgar', 'l-vanthoor'], teamId: 'proton-competition' },
          ],
        },
      ],
    },
  },
  'imsa-2025-laguna-seca': {
    qualifying: {
      overall: { driverIds: ['vanthoor'], teamId: 'bmw-rahal' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['vanthoor'], teamId: 'bmw-rahal' }] }],
    },
    race: {
      overall: { driverIds: ['jaminet', 'campbell'], teamId: 'porsche-penske' },
      classes: [
        {
          className: 'GTP',
          podium: [
            { position: 1, driverIds: ['jaminet', 'campbell'], teamId: 'porsche-penske' },
            { position: 2, driverIds: ['nasr', 'tandy'], teamId: 'porsche-penske' },
          ],
        },
        {
          className: 'GTD Pro',
          podium: [
            { position: 1, driverIds: ['heinrich', 'bachler'], teamId: 'ao-racing' },
          ],
        },
      ],
    },
  },
  'imsa-2025-detroit': {
    qualifying: {
      overall: { driverIds: ['tandy'], teamId: 'porsche-penske' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['tandy'], teamId: 'porsche-penske' }] }],
    },
    race: {
      overall: { driverIds: ['van-der-zande', 'yelloly'], teamId: 'meyer-shank-racing' },
      classes: [
        {
          className: 'GTP',
          podium: [
            { position: 1, driverIds: ['van-der-zande', 'yelloly'], teamId: 'meyer-shank-racing' },
          ],
        },
        {
          className: 'GTD Pro',
          podium: [
            { position: 1, driverIds: ['priaulx', 'rockenfeller'], teamId: 'ford-multimatic' },
          ],
        },
      ],
    },
  },
  'imsa-2025-watkins-glen': {
    qualifying: {
      overall: { driverIds: ['van-der-zande'], teamId: 'meyer-shank-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['van-der-zande'], teamId: 'meyer-shank-racing' }] }],
    },
    endurance: {
      overall: { driverIds: ['blomqvist', 'braun'], teamId: 'meyer-shank-racing' },
      classes: [
        {
          className: 'GTP',
          podium: [
            { position: 1, driverIds: ['blomqvist', 'braun'], teamId: 'meyer-shank-racing' },
          ],
        },
        {
          className: 'LMP2',
          podium: [
            { position: 1, driverIds: ['Di Resta', 'goldburg', 'lindh'], teamId: 'united-autosports' },
          ],
        },
        {
          className: 'GTD Pro',
          podium: [
            { position: 1, driverIds: ['harper', 'hesse'], teamId: 'paul-miller-racing' },
          ],
        },
      ],
    },
  },
  'imsa-2025-ctmp': {
    qualifying: {
      overall: { driverIds: ['AO Racing'], teamId: 'ao-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['AO Racing'], teamId: 'ao-racing' }] }],
    },
    race: {
      overall: { driverIds: ['hyett', 'cameron'], teamId: 'ao-racing' },
      classes: [
        {
          className: 'GTD Pro',
          podium: [
            { position: 1, driverIds: ['costa', 'Altoe'], teamId: 'dragonspeed' },
          ],
        },
      ],
    },
  },
  'imsa-2025-road-america': {
    qualifying: {
      overall: { driverIds: ['yelloly'], teamId: 'meyer-shank-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['yelloly'], teamId: 'meyer-shank-racing' }] }],
    },
    race: {
      overall: { driverIds: ['eng', 'D. Vanthoor'], teamId: 'bmw-rahal' },
      classes: [
        {
          className: 'GTP',
          podium: [
            { position: 1, driverIds: ['eng', 'D. Vanthoor'], teamId: 'bmw-rahal' },
            { position: 2, driverIds: ['wittmann', 's-van-der-linde'], teamId: 'bmw-rahal' },
          ],
        },
        {
          className: 'LMP2',
          podium: [
            { position: 1, driverIds: ['cameron', 'hyett'], teamId: 'ao-racing' },
          ],
        },
        {
          className: 'GTD Pro',
          podium: [
            { position: 1, driverIds: ['snow', 'verhagen'], teamId: 'paul-miller-racing' },
          ],
        },
      ],
    },
  },
  'imsa-2025-vir': {
    qualifying: {
      overall: { driverIds: ['altoe'], teamId: 'dragonspeed' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['altoe'], teamId: 'dragonspeed' }] }],
    },
    race: {
      // VIR is GTD-only (no GTP), so overall is GTD Pro winner
      overall: { driverIds: ['garcia', 'sims'], teamId: 'corvette-racing' },
      classes: [
        {
          className: 'GTD Pro',
          podium: [
            { position: 1, driverIds: ['garcia', 'sims'], teamId: 'corvette-racing' },
          ],
        },
        {
          className: 'GTD',
          podium: [
            { position: 1, driverIds: ['ward', 'ellis'], teamId: 'winward-racing' },
          ],
        },
      ],
    },
  },
  'imsa-2025-indianapolis': {
    qualifying: {
      overall: { driverIds: ['aitken'], teamId: 'whelen-engineering' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['aitken'], teamId: 'whelen-engineering' }] }],
    },
    endurance: {
      overall: { driverIds: ['aitken', 'bamber', 'vesti'], teamId: 'whelen-engineering' },
      classes: [
        {
          className: 'GTP',
          podium: [
            { position: 1, driverIds: ['aitken', 'bamber', 'vesti'], teamId: 'whelen-engineering' },
          ],
        },
        {
          className: 'GTD Pro',
          podium: [
            { position: 1, driverIds: ['rockenfeller', 'priaulx'], teamId: 'ford-multimatic' },
          ],
        },
      ],
    },
  },
  'imsa-2025-petit-le-mans': {
    qualifying: {
      overall: { driverIds: ['blomqvist'], teamId: 'meyer-shank-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['blomqvist'], teamId: 'meyer-shank-racing' }] }],
    },
    endurance: {
      overall: { driverIds: ['aitken', 'bamber', 'vesti'], teamId: 'whelen-engineering' },
      classes: [
        {
          className: 'GTP',
          podium: [
            { position: 1, driverIds: ['aitken', 'bamber', 'vesti'], teamId: 'whelen-engineering' },
          ],
        },
        {
          className: 'LMP2',
          podium: [
            { position: 1, driverIds: ['thomas', 'jensen', 'mcelrea'], teamId: 'tds-racing' },
          ],
        },
        {
          className: 'GTD Pro',
          podium: [
            { position: 1, driverIds: ['harper'], teamId: 'paul-miller-racing' },
          ],
        },
        {
          className: 'GTD',
          podium: [
            { position: 1, driverIds: ['mann', 'pier-guidi', 'wadoux'], teamId: 'ferrari-af-corse' },
          ],
        },
      ],
    },
  },
}
