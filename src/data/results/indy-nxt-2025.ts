import type { EventResults } from './types'

// Indy NXT 2025 results — full season (14 rounds)
// Sources: indynxt.com/Results, Wikipedia "2025 Indy NXT", motorsport.com/indylights/results/2025
// Only race podiums and pole sitters are recorded — qualifying top-3 beyond pole was not
// reliably reported in season archives.
export const indyNxtResults2025: Record<string, EventResults> = {
  'indy-nxt-2025-st-petersburg': {
    qualifying: {
      overall: { driverIds: ['hauger'], teamId: 'andretti-global' },
    },
    race: {
      overall: { driverIds: ['hauger'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hauger'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['hughes-l'], teamId: 'andretti-global' },
          { position: 3, driverIds: ['collet'], teamId: 'hmd-motorsports' },
        ],
      }],
    },
  },
  'indy-nxt-2025-barber': {
    qualifying: {
      overall: { driverIds: ['hauger'], teamId: 'andretti-global' },
    },
    race: {
      // Papasavvas runner-up on Indy NXT debut at Barber
      overall: { driverIds: ['hauger'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hauger'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['papasavvas'], teamId: 'hmd-motorsports' },
          { position: 3, driverIds: ['hughes-l'], teamId: 'andretti-global' },
        ],
      }],
    },
  },
  'indy-nxt-2025-indianapolis-gp-1': {
    qualifying: {
      // Single qualifying session sets the grid for both Indy GP races
      overall: { driverIds: ['hughes-l'], teamId: 'andretti-global' },
    },
    race: {
      // Hughes converts pole to maiden NXT win
      overall: { driverIds: ['hughes-l'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hughes-l'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['collet'], teamId: 'hmd-motorsports' },
          { position: 3, driverIds: ['rowe'], teamId: 'abel-force-indy' },
        ],
      }],
    },
  },
  'indy-nxt-2025-indianapolis-gp-2': {
    race: {
      overall: { driverIds: ['hauger'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hauger'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['hughes-l'], teamId: 'andretti-global' },
          { position: 3, driverIds: ['rowe'], teamId: 'abel-force-indy' },
        ],
      }],
    },
  },
  'indy-nxt-2025-detroit': {
    qualifying: {
      overall: { driverIds: ['hauger'], teamId: 'andretti-global' },
    },
    race: {
      // Correa first podium on his US open-wheel debut weekend
      overall: { driverIds: ['hauger'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hauger'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['collet'], teamId: 'hmd-motorsports' },
          { position: 3, driverIds: ['correa'], teamId: 'hmd-motorsports' },
        ],
      }],
    },
  },
  'indy-nxt-2025-wwtr': {
    qualifying: {
      overall: { driverIds: ['hauger'], teamId: 'andretti-global' },
    },
    race: {
      // Hughes wins on Gateway oval
      overall: { driverIds: ['hughes-l'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hughes-l'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['rowe'], teamId: 'abel-force-indy' },
          { position: 3, driverIds: ['collet'], teamId: 'hmd-motorsports' },
        ],
      }],
    },
  },
  'indy-nxt-2025-road-america': {
    qualifying: {
      overall: { driverIds: ['hauger'], teamId: 'andretti-global' },
    },
    race: {
      // Collet maiden NXT win
      overall: { driverIds: ['collet'], teamId: 'hmd-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['collet'], teamId: 'hmd-motorsports' },
          { position: 2, driverIds: ['hauger'], teamId: 'andretti-global' },
          { position: 3, driverIds: ['hughes-l'], teamId: 'andretti-global' },
        ],
      }],
    },
  },
  'indy-nxt-2025-mid-ohio': {
    qualifying: {
      overall: { driverIds: ['hauger'], teamId: 'andretti-global' },
    },
    race: {
      overall: { driverIds: ['hauger'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hauger'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['collet'], teamId: 'hmd-motorsports' },
          { position: 3, driverIds: ['hughes-l'], teamId: 'andretti-global' },
        ],
      }],
    },
  },
  'indy-nxt-2025-iowa': {
    qualifying: {
      // Qualifying cancelled due to storms; pole awarded to Hauger on championship points
      overall: { driverIds: ['hauger'], teamId: 'andretti-global' },
    },
    race: {
      // Rowe becomes first Black driver to win in Indy NXT
      overall: { driverIds: ['rowe'], teamId: 'abel-force-indy' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rowe'], teamId: 'abel-force-indy' },
          { position: 2, driverIds: ['hauger'], teamId: 'andretti-global' },
          { position: 3, driverIds: ['de-alba'], teamId: 'andretti-global' },
        ],
      }],
    },
  },
  'indy-nxt-2025-laguna-seca-1': {
    qualifying: {
      // Collet sweeps both Laguna poles
      overall: { driverIds: ['collet'], teamId: 'hmd-motorsports' },
    },
    race: {
      overall: { driverIds: ['collet'], teamId: 'hmd-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['collet'], teamId: 'hmd-motorsports' },
          { position: 2, driverIds: ['hauger'], teamId: 'andretti-global' },
          { position: 3, driverIds: ['pierson'], teamId: 'hmd-motorsports' },
        ],
      }],
    },
  },
  'indy-nxt-2025-laguna-seca-2': {
    race: {
      // Collet wins again from pole — back-to-back Laguna victories
      overall: { driverIds: ['collet'], teamId: 'hmd-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['collet'], teamId: 'hmd-motorsports' },
          { position: 2, driverIds: ['hauger'], teamId: 'andretti-global' },
          { position: 3, driverIds: ['hedge'], teamId: 'abel-motorsports' },
        ],
      }],
    },
  },
  'indy-nxt-2025-portland': {
    qualifying: {
      overall: { driverIds: ['collet'], teamId: 'hmd-motorsports' },
    },
    race: {
      overall: { driverIds: ['hauger'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hauger'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['collet'], teamId: 'hmd-motorsports' },
          { position: 3, driverIds: ['rowe'], teamId: 'abel-force-indy' },
        ],
      }],
    },
  },
  'indy-nxt-2025-milwaukee': {
    qualifying: {
      overall: { driverIds: ['hauger'], teamId: 'andretti-global' },
    },
    race: {
      // de Alba maiden NXT win; Hauger clinches the title with one race to spare
      overall: { driverIds: ['de-alba'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['de-alba'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['hauger'], teamId: 'andretti-global' },
          { position: 3, driverIds: ['hughes-l'], teamId: 'andretti-global' },
        ],
      }],
    },
  },
  'indy-nxt-2025-nashville': {
    qualifying: {
      overall: { driverIds: ['de-alba'], teamId: 'andretti-global' },
    },
    race: {
      // Rowe takes second win of the season in the Nashville finale
      overall: { driverIds: ['rowe'], teamId: 'abel-force-indy' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rowe'], teamId: 'abel-force-indy' },
          { position: 2, driverIds: ['de-alba'], teamId: 'andretti-global' },
          { position: 3, driverIds: ['hauger'], teamId: 'andretti-global' },
        ],
      }],
    },
  },
}
