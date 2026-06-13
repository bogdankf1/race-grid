import type { EventResults } from './types'

// Indy NXT 2024 results — full season (14 rounds)
// Sources: indynxt.com/Results, Wikipedia "2024 Indy NXT", motorsport.com/indylights/results/2024.
// Verified 2026-06-07. Only race podiums and pole sitters are recorded.
export const indyNxtResults2024: Record<string, EventResults> = {
  'indy-nxt-2024-st-petersburg': {
    qualifying: {
      // Siegel takes pole on his Indy NXT debut weekend
      overall: { driverIds: ['siegel'], teamId: 'hmd-motorsports' },
    },
    race: {
      overall: { driverIds: ['siegel'], teamId: 'hmd-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['siegel'], teamId: 'hmd-motorsports' },
          { position: 2, driverIds: ['abel'], teamId: 'abel-motorsports' },
          { position: 3, driverIds: ['foster'], teamId: 'andretti-global' },
        ],
      }],
    },
  },
  'indy-nxt-2024-barber': {
    qualifying: {
      overall: { driverIds: ['abel'], teamId: 'abel-motorsports' },
    },
    race: {
      overall: { driverIds: ['abel'], teamId: 'abel-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['abel'], teamId: 'abel-motorsports' },
          { position: 2, driverIds: ['siegel'], teamId: 'hmd-motorsports' },
          { position: 3, driverIds: ['roe'], teamId: 'andretti-global' },
        ],
      }],
    },
  },
  'indy-nxt-2024-indianapolis-gp-1': {
    qualifying: {
      // Single qualifying session sets the grid for both Indy GP races (Abel sweeps poles)
      overall: { driverIds: ['abel'], teamId: 'abel-motorsports' },
    },
    race: {
      overall: { driverIds: ['abel'], teamId: 'abel-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['abel'], teamId: 'abel-motorsports' },
          { position: 2, driverIds: ['collet'], teamId: 'hmd-motorsports' },
          { position: 3, driverIds: ['chadwick'], teamId: 'andretti-global' },
        ],
      }],
    },
  },
  'indy-nxt-2024-indianapolis-gp-2': {
    race: {
      // Foster's first win of the season
      overall: { driverIds: ['foster'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['foster'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['abel'], teamId: 'abel-motorsports' },
          { position: 3, driverIds: ['collet'], teamId: 'hmd-motorsports' },
        ],
      }],
    },
  },
  'indy-nxt-2024-detroit': {
    qualifying: {
      overall: { driverIds: ['foster'], teamId: 'andretti-global' },
    },
    race: {
      overall: { driverIds: ['foster'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['foster'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['hedge'], teamId: 'hmd-motorsports' },
          { position: 3, driverIds: ['rowe'], teamId: 'hmd-force-indy' },
        ],
      }],
    },
  },
  'indy-nxt-2024-road-america': {
    qualifying: {
      // Chadwick takes maiden NXT pole and converts to first win
      overall: { driverIds: ['chadwick'], teamId: 'andretti-global' },
    },
    race: {
      overall: { driverIds: ['chadwick'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chadwick'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['foster'], teamId: 'andretti-global' },
          { position: 3, driverIds: ['abel'], teamId: 'abel-motorsports' },
        ],
      }],
    },
  },
  'indy-nxt-2024-laguna-seca-1': {
    qualifying: {
      // Foster sweeps both Laguna poles
      overall: { driverIds: ['foster'], teamId: 'andretti-global' },
    },
    race: {
      overall: { driverIds: ['foster'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['foster'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['collet'], teamId: 'hmd-motorsports' },
          { position: 3, driverIds: ['abel'], teamId: 'abel-motorsports' },
        ],
      }],
    },
  },
  'indy-nxt-2024-laguna-seca-2': {
    race: {
      overall: { driverIds: ['foster'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['foster'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['collet'], teamId: 'hmd-motorsports' },
          { position: 3, driverIds: ['b-aron'], teamId: 'andretti-global' },
        ],
      }],
    },
  },
  'indy-nxt-2024-mid-ohio': {
    qualifying: {
      overall: { driverIds: ['collet'], teamId: 'hmd-motorsports' },
    },
    race: {
      // Collet maiden NXT win from pole; Foster recovers to 2nd
      overall: { driverIds: ['collet'], teamId: 'hmd-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['collet'], teamId: 'hmd-motorsports' },
          { position: 2, driverIds: ['foster'], teamId: 'andretti-global' },
          { position: 3, driverIds: ['abel'], teamId: 'abel-motorsports' },
        ],
      }],
    },
  },
  'indy-nxt-2024-iowa': {
    qualifying: {
      overall: { driverIds: ['roe'], teamId: 'andretti-global' },
    },
    race: {
      overall: { driverIds: ['foster'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['foster'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['roe'], teamId: 'andretti-global' },
          { position: 3, driverIds: ['de-alba'], teamId: 'andretti-cape' },
        ],
      }],
    },
  },
  'indy-nxt-2024-wwtr': {
    qualifying: {
      // Foster sets a track record on the 1.25-mile oval
      overall: { driverIds: ['foster'], teamId: 'andretti-global' },
    },
    race: {
      overall: { driverIds: ['foster'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['foster'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['abel'], teamId: 'abel-motorsports' },
          { position: 3, driverIds: ['sundaramoorthy'], teamId: 'abel-motorsports' },
        ],
      }],
    },
  },
  'indy-nxt-2024-portland': {
    qualifying: {
      overall: { driverIds: ['foster'], teamId: 'andretti-global' },
    },
    race: {
      // Abel wins the final road-course round of the season
      overall: { driverIds: ['abel'], teamId: 'abel-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['abel'], teamId: 'abel-motorsports' },
          { position: 2, driverIds: ['foster'], teamId: 'andretti-global' },
          { position: 3, driverIds: ['b-aron'], teamId: 'andretti-global' },
        ],
      }],
    },
  },
  'indy-nxt-2024-milwaukee': {
    qualifying: {
      overall: { driverIds: ['foster'], teamId: 'andretti-global' },
    },
    race: {
      // Foster clinches the 2024 title with one race to spare
      overall: { driverIds: ['foster'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['foster'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['abel'], teamId: 'abel-motorsports' },
          { position: 3, driverIds: ['de-alba'], teamId: 'andretti-cape' },
        ],
      }],
    },
  },
  'indy-nxt-2024-nashville': {
    qualifying: {
      overall: { driverIds: ['foster'], teamId: 'andretti-global' },
    },
    race: {
      // Foster's eighth win — series record for the season; Brooks first NXT podium
      overall: { driverIds: ['foster'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['foster'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['sundaramoorthy'], teamId: 'abel-motorsports' },
          { position: 3, driverIds: ['brooks-c'], teamId: 'hmd-motorsports' },
        ],
      }],
    },
  },
}
