import type { EventResults } from './types'

// GT World Challenge Australia 2025 results
export const gtwcauResults2025: Record<string, EventResults> = {
  'gtwcau-2025-phillip-island': {
    race: {
      overall: { driverIds: ['schumacher-b', 'feeney'], teamId: 'team-mpc' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['schumacher-b', 'feeney'], teamId: 'team-mpc' },
          { position: 2, driverIds: ['talbot', 'fraser'], teamId: 'volante-rosso' },
          { position: 3, driverIds: ['evans-j', 'schutte'], teamId: 'arise-racing-gt' },
        ],
      }],
    },
  },
  'gtwcau-2025-sydney': {
    race: {
      overall: { driverIds: ['evans-j', 'schutte'], teamId: 'arise-racing-gt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['evans-j', 'schutte'], teamId: 'arise-racing-gt' },
          { position: 2, driverIds: ['brooks', 'wood'], teamId: 'team-mpc' },
          { position: 3, driverIds: ['feeney', 'schumacher-b'], teamId: 'team-mpc' },
        ],
      }],
    },
  },
  'gtwcau-2025-queensland': {
    race: {
      overall: { driverIds: ['peroni', 'rosser'], teamId: 'team-brm' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['peroni', 'rosser'], teamId: 'team-brm' },
          { position: 2, driverIds: ['leitch', 'miles-t'], teamId: 'team-mpc' },
          { position: 3, driverIds: ['feeney', 'schumacher-b'], teamId: 'team-mpc' },
        ],
      }],
    },
  },
  'gtwcau-2025-sandown': {
    race: {
      overall: { driverIds: ['talbot', 'day'], teamId: 'volante-rosso' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['talbot', 'day'], teamId: 'volante-rosso' },
          { position: 2, driverIds: ['donaldson', 'currie'], teamId: 'one-eleven-racing' },
          { position: 3, driverIds: ['schoots', 'woodman'], teamId: 'black-wolf-motorsport' },
        ],
      }],
    },
  },
  'gtwcau-2025-the-bend': {
    race: {
      overall: { driverIds: ['ojeda', 'lucchitti'], teamId: 'tigani-motorsport' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['ojeda', 'lucchitti'], teamId: 'tigani-motorsport' },
          { position: 2, driverIds: ['brooks', 'wood'], teamId: 'team-mpc' },
          { position: 3, driverIds: ['feeney', 'schumacher-b'], teamId: 'team-mpc' },
        ],
      }],
    },
  },
  'gtwcau-2025-hampton-downs': {
    race: {
      overall: { driverIds: ['feeney', 'schumacher-b'], teamId: 'team-mpc' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['feeney', 'schumacher-b'], teamId: 'team-mpc' },
          { position: 2, driverIds: ['wood', 'brooks'], teamId: 'team-mpc' },
          { position: 3, driverIds: ['ojeda', 'lucchitti'], teamId: 'tigani-motorsport' },
        ],
      }],
    },
  },
}
