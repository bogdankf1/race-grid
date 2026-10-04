import type { EventResults } from './types'

// GT World Challenge America 2026 results
export const gtwcamResults2026: Record<string, EventResults> = {
  'gtwcam-2026-cota': {
    qualifying: {
      overall: { driverIds: ['stephens', 'grenier'], teamId: 'jmf-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['stephens', 'grenier'], teamId: 'jmf-motorsports' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['musial-jr', 'yardley'], teamId: 'wright-motorsports' },
      classes: [{
        className: 'Pro',
        podium: [
          { position: 1, driverIds: ['stephens', 'grenier'], teamId: 'jmf-motorsports' },
          { position: 2, driverIds: ['foley', 'rothberg'], teamId: 'turner-motorsport' },
          { position: 3, driverIds: ['vanier', 'mccann-jr'], teamId: 'mccann-racing' },
        ],
      }, {
        className: 'Pro-Am',
        podium: [
          { position: 1, driverIds: ['musial-jr', 'yardley'], teamId: 'wright-motorsports' },
          { position: 2, driverIds: ['merrill', 'lahlouh'], teamId: 'wright-motorsports' },
          { position: 3, driverIds: ['martinez-j', 'heylen'], teamId: 'rs1' },
        ],
      }, {
        className: 'Am',
        podium: [
          { position: 1, driverIds: ['negri-jr', 'schreibman'], teamId: 'af-corse-usa' },
        ],
      }],
    },
  },
  'gtwcam-2026-sonoma': {
    qualifying: {
      overall: { driverIds: ['stephens', 'grenier'], teamId: 'jmf-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['stephens', 'grenier'], teamId: 'jmf-motorsports' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['stephens', 'grenier'], teamId: 'jmf-motorsports' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['stephens', 'grenier'], teamId: 'jmf-motorsports' },
          { position: 2, driverIds: ['perez-companc', 'schandorff'], teamId: 'af-corse-usa' },
          { position: 3, driverIds: ['washington-k', 'sargent-t'], teamId: 'gmg-racing' },
        ],
      }],
    },
  },
  'gtwcam-2026-sebring': {
    qualifying: {
      overall: { driverIds: ['grenier', 'stephens'], teamId: 'jmf-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['grenier', 'stephens'], teamId: 'jmf-motorsports' },
          { position: 2, driverIds: ['schandorff', 'perez-companc'], teamId: 'af-corse-usa' },
          { position: 3, driverIds: [], teamId: 'turner-motorsport' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['foley', 'rothberg'], teamId: 'turner-motorsport' },
      classes: [{
        className: 'Pro',
        podium: [
          { position: 1, driverIds: ['foley', 'rothberg'], teamId: 'turner-motorsport' },
          { position: 2, driverIds: ['lawrence-c', 'sedgwick'], teamId: 'dollahite-racing' },
          { position: 3, driverIds: ['schandorff', 'perez-companc'], teamId: 'af-corse-usa' },
        ],
      }, {
        className: 'Pro-Am',
        podium: [
          { position: 1, driverIds: ['washington-k', 'sargent-t'], teamId: 'gmg-racing' },
        ],
      }, {
        className: 'Am',
        podium: [
          { position: 1, driverIds: ['negri-jr', 'schreibman'], teamId: 'af-corse-usa' },
        ],
      }],
    },
  },
  'gtwcam-2026-road-atlanta': {
    qualifying: {
      overall: { driverIds: ['perez-companc', 'schandorff'], teamId: 'af-corse-usa' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['perez-companc', 'schandorff'], teamId: 'af-corse-usa' },
          { position: 2, driverIds: ['stephens', 'grenier'], teamId: 'jmf-motorsports' },
          { position: 3, driverIds: ['rothberg', 'foley'], teamId: 'turner-motorsport' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['daskalos', 'ellis-p'], teamId: 'jmf-motorsports' },
      classes: [
        {
          className: 'Overall',
          podium: [
            { position: 1, driverIds: ['daskalos', 'ellis-p'], teamId: 'jmf-motorsports' },
            { position: 2, driverIds: ['perez-companc', 'schandorff'], teamId: 'af-corse-usa' },
            { position: 3, driverIds: ['coleman-t', 'telitz'], teamId: 'archangel-motorsports' },
          ],
        },
        {
          className: 'Pro',
          podium: [
            { position: 1, driverIds: ['perez-companc', 'schandorff'], teamId: 'af-corse-usa' },
          ],
        },
        {
          className: 'Pro-Am',
          podium: [
            { position: 1, driverIds: ['daskalos', 'ellis-p'], teamId: 'jmf-motorsports' },
          ],
        },
        {
          className: 'Am',
          podium: [
            { position: 1, driverIds: ['schreibman', 'simonsen'], teamId: 'af-corse-usa' },
          ],
        },
      ],
    },
  },
  'gtwcam-2026-road-america': {
    qualifying: {
      overall: { driverIds: ['perez-companc', 'molina'], teamId: 'af-corse-usa' },
      classes: [
        {
          className: 'Top 3',
          podium: [
            { position: 1, driverIds: ['perez-companc', 'molina'], teamId: 'af-corse-usa' },
            { position: 2, driverIds: ['rothberg', 'foley'], teamId: 'turner-motorsport' },
            { position: 3, driverIds: ['mascaro', 'agostini'], teamId: 'triarsi-competizione' },
          ],
        },
      ],
    },
    endurance: {
      overall: { driverIds: ['rothberg', 'foley'], teamId: 'turner-motorsport' },
      classes: [
        {
          className: 'Overall',
          podium: [
            { position: 1, driverIds: ['rothberg', 'foley'], teamId: 'turner-motorsport' },
            { position: 2, driverIds: ['stephens', 'grenier'], teamId: 'jmf-motorsports' },
            { position: 3, driverIds: ['williams-b', 'morad-d'], teamId: 'tr3-racing' },
          ],
        },
        {
          className: 'Pro',
          podium: [
            { position: 1, driverIds: ['rothberg', 'foley'], teamId: 'turner-motorsport' },
          ],
        },
        {
          className: 'Pro-Am',
          podium: [
            { position: 1, driverIds: ['williams-b', 'morad-d'], teamId: 'tr3-racing' },
          ],
        },
        {
          className: 'Am',
          podium: [
            { position: 1, driverIds: ['m-green', 'j-morley'], teamId: 'scuderia-corsa' },
          ],
        },
      ],
    },
  },
  'gtwcam-2026-barber': {
    qualifying: {
      overall: { driverIds: ['perez-companc', 'schandorff'], teamId: 'af-corse-usa' },
      classes: [
        {
          className: 'Top 3',
          podium: [
            { position: 1, driverIds: ['perez-companc', 'schandorff'], teamId: 'af-corse-usa' },
            { position: 2, driverIds: ['stephens', 'grenier'], teamId: 'jmf-motorsports' },
            { position: 3, driverIds: ['rothberg', 'foley'], teamId: 'turner-motorsport' },
          ],
        },
      ],
    },
    endurance: {
      overall: { driverIds: ['perez-companc', 'schandorff'], teamId: 'af-corse-usa' },
      classes: [
        {
          className: 'Overall',
          podium: [
            { position: 1, driverIds: ['perez-companc', 'schandorff'], teamId: 'af-corse-usa' },
            { position: 2, driverIds: ['stephens', 'grenier'], teamId: 'jmf-motorsports' },
            { position: 3, driverIds: ['coleman-t', 'telitz'], teamId: 'archangel-motorsports' },
          ],
        },
        {
          className: 'Pro',
          podium: [
            { position: 1, driverIds: ['perez-companc', 'schandorff'], teamId: 'af-corse-usa' },
          ],
        },
        {
          className: 'Pro-Am',
          podium: [
            { position: 1, driverIds: ['coleman-t', 'telitz'], teamId: 'archangel-motorsports' },
          ],
        },
        {
          className: 'Am',
          podium: [
            { position: 1, driverIds: ['negri-jr', 'schreibman'], teamId: 'af-corse-usa' },
          ],
        },
      ],
    },
  },
}
