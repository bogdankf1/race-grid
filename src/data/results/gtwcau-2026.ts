import type { EventResults } from './types'

// GT World Challenge Australia 2026 results
export const gtwcauResults2026: Record<string, EventResults> = {
  'gtwcau-2026-phillip-island': {
    qualifying: {
      // Race 1 pole — Jayden Ojeda in the wet
      overall: { driverIds: ['ojeda'], teamId: 'move-my-wheels-tigani' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ojeda'], teamId: 'move-my-wheels-tigani' },
          { position: 2, driverIds: ['evans-j'], teamId: 'argt' },
          { position: 3, driverIds: ['leitch'], teamId: 'geyer-valmont-tigani' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['ojeda', 'lucchitti'], teamId: 'move-my-wheels-tigani' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['ojeda', 'lucchitti'], teamId: 'move-my-wheels-tigani' },
          { position: 2, driverIds: ['evans-j', 'schutte'], teamId: 'arise-racing-gt' },
          { position: 3, driverIds: ['wood', 'brooks'], teamId: 'wolfbrook-motorsport' },
        ],
      }],
    },
  },
  'gtwcau-2026-the-bend': {
    qualifying: {
      overall: { driverIds: ['pires-s', 'leitch'], teamId: 'geyer-valmont-tigani' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pires-s', 'leitch'], teamId: 'geyer-valmont-tigani' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['leitch', 'pires-s'], teamId: 'geyer-valmont-tigani' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['leitch', 'pires-s'], teamId: 'geyer-valmont-tigani' },
          { position: 2, driverIds: ['randle', 'rosser'], teamId: 'castrol-team-brm' },
          { position: 3, driverIds: ['evans-j', 'schutte'], teamId: 'argt' },
        ],
      }],
    },
  },
  // Queensland: Race 1 (13 Jun) recorded; Race 2 runs 14 Jun. Qualifying = Race 1 pole.
  'gtwcau-2026-queensland': {
    qualifying: {
      // Race 1 pole — Targett/Tigani, Tigani Motorsport's debut GTWCA pole
      overall: { driverIds: ['targett', 'tigani'], teamId: 'tigani-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['targett', 'tigani'], teamId: 'tigani-motorsport' },
        ],
      }],
    },
    race: {
      // Race 1 — Gracie first woman to win a GTWCA race outright
      overall: { driverIds: ['davison', 'gracie'], teamId: 'onlyfans-racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['davison', 'gracie'], teamId: 'onlyfans-racing' },
          { position: 2, driverIds: ['targett', 'tigani'], teamId: 'tigani-motorsport' },
          { position: 3, driverIds: ['halstead', 'youlden'], teamId: 'tigani-motorsport' },
        ],
      }],
    },
  },
  'gtwcau-2026-darwin': {
    qualifying: {
      overall: { driverIds: ['buchan'], teamId: 'zagame-autosport' },
      classes: [
        {
          className: 'Qualifying 1',
          podium: [
            { position: 1, driverIds: ['buchan'], teamId: 'zagame-autosport' },
            { position: 2, driverIds: ['wood'], teamId: 'wolfbrook-motorsport' },
            { position: 3, driverIds: ['feeney'], teamId: 'team-mpc' },
          ],
        },
        {
          className: 'Qualifying 2',
          podium: [
            { position: 1, driverIds: ['schumacher-b'], teamId: 'team-mpc' },
            { position: 2, driverIds: ['rosser'], teamId: 'castrol-team-brm' },
            { position: 3, driverIds: ['pires-s'], teamId: 'geyer-valmont-tigani' },
          ],
        },
      ],
    },
    race: {
      overall: { driverIds: ['peroni', 'rosser'], teamId: 'castrol-team-brm' },
      classes: [
        {
          className: 'Race 1',
          podium: [
            { position: 1, driverIds: ['peroni', 'rosser'], teamId: 'castrol-team-brm' },
            { position: 2, driverIds: ['ojeda', 'lucchitti'], teamId: 'move-my-wheels-tigani' },
            { position: 3, driverIds: ['davison', 'gracie-r'], teamId: 'onlyfans-racing' },
          ],
        },
        {
          className: 'Race 1 · Trophy',
          podium: [
            { position: 1, driverIds: ['stokell', 'stoupas'], teamId: 'kfc-team-mpc' },
          ],
        },
        {
          className: 'Race 2',
          podium: [
            { position: 1, driverIds: ['feeney', 'schumacher-b'], teamId: 'team-mpc' },
            { position: 2, driverIds: ['wood', 'brooks'], teamId: 'wolfbrook-motorsport' },
            { position: 3, driverIds: ['buchan', 'c-campbell'], teamId: 'zagame-autosport' },
          ],
        },
        {
          className: 'Race 2 · Trophy',
          podium: [
            { position: 1, driverIds: ['youlden', 'halstead-n2'], teamId: 'aed-tigani' },
          ],
        },
      ],
    },
  },
  'gtwcau-2026-sydney': {
    qualifying: {
      overall: { driverIds: ['peroni'], teamId: 'castrol-team-brm' },
      classes: [
        {
          className: 'Qualifying 1',
          podium: [
            { position: 1, driverIds: ['peroni'], teamId: 'castrol-team-brm' },
            { position: 2, driverIds: ['wood'], teamId: 'wolfbrook-motorsport' },
            { position: 3, driverIds: ['ojeda'], teamId: 'move-my-wheels-tigani' },
          ],
        },
        {
          className: 'Qualifying 2',
          podium: [
            { position: 1, driverIds: ['smollen'], teamId: 'kollosche-tigani' },
            { position: 2, driverIds: ['pires-s'], teamId: 'geyer-valmont-tigani' },
            { position: 3, driverIds: ['lucchitti'], teamId: 'move-my-wheels-tigani' },
          ],
        },
      ],
    },
    race: {
      overall: { driverIds: ['targett', 'smollen'], teamId: 'kollosche-tigani' },
      classes: [
        {
          className: 'Race 1',
          podium: [
            { position: 1, driverIds: ['targett', 'smollen'], teamId: 'kollosche-tigani' },
            { position: 2, driverIds: ['peroni', 'rosser'], teamId: 'castrol-team-brm' },
            { position: 3, driverIds: ['wood', 'brooks'], teamId: 'wolfbrook-motorsport' },
          ],
        },
        {
          className: 'Race 1 · Trophy',
          podium: [
            { position: 1, driverIds: ['stokell', 'stoupas'], teamId: 'kfc-team-mpc' },
          ],
        },
        {
          className: 'Race 2',
          podium: [
            { position: 1, driverIds: ['feeney', 'schumacher-b'], teamId: 'team-mpc' },
            { position: 2, driverIds: ['leitch', 'pires-s'], teamId: 'geyer-valmont-tigani' },
            { position: 3, driverIds: ['astuti', 'currie'], teamId: 'team-mpc' },
          ],
        },
        {
          className: 'Race 2 · Trophy',
          podium: [
            { position: 1, driverIds: ['stokell', 'stoupas'], teamId: 'kfc-team-mpc' },
          ],
        },
      ],
    },
  },
}
