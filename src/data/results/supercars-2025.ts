import type { EventResults } from './types'

// Supercars 2025 results — verified from supercars.com, v8sleuth.com.au, speedcafe.com, motorsport.com
// Multiple races per event — overall shows the main/last race winner
export const supercarsResults2025: Record<string, EventResults> = {
  'sc-2025-sydney': {
    qualifying: {
      overall: { driverIds: ['waters'], teamId: 'monster-castrol-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['waters'], teamId: 'monster-castrol-racing' }] }],
    },
    // Race 1, 2, 3: All won by Cam Waters (clean sweep)
    race: {
      overall: { driverIds: ['waters'], teamId: 'monster-castrol-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['waters'], teamId: 'monster-castrol-racing' },
        ],
      }],
    },
  },
  'sc-2025-melbourne': {
    qualifying: {
      overall: { driverIds: ['feeney'], teamId: 'triple-eight' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['feeney'], teamId: 'triple-eight' }] }],
    },
    // Race 4: Feeney, Race 5: Hill, Race 6: Brown, Race 7: Abandoned (rain)
    race: {
      overall: { driverIds: ['brown'], teamId: 'red-bull-ampol-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['feeney'], teamId: 'triple-eight' },
          { position: 2, driverIds: ['hill'], teamId: 'matt-stone-racing' },
          { position: 3, driverIds: ['brown'], teamId: 'red-bull-ampol-racing' },
        ],
      }],
    },
  },
  'sc-2025-taupo': {
    qualifying: {
      overall: { driverIds: ['payne'], teamId: 'grove-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['payne'], teamId: 'grove-racing' }] }],
    },
    // Matt Payne won the event (Jason Richards Trophy)
    race: {
      overall: { driverIds: ['payne'], teamId: 'grove-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['payne'], teamId: 'grove-racing' },
        ],
      }],
    },
  },
  'sc-2025-tasmania': {
    qualifying: {
      overall: { driverIds: ['randle'], teamId: 'tickford-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['randle'], teamId: 'tickford-racing' }] }],
    },
    // Race 11: Feeney, Race 12: Feeney, Race 13: Payne
    race: {
      overall: { driverIds: ['feeney'], teamId: 'triple-eight' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['feeney'], teamId: 'triple-eight' },
          { position: 2, driverIds: ['payne'], teamId: 'grove-racing' },
        ],
      }],
    },
  },
  'sc-2025-perth': {
    qualifying: {
      overall: { driverIds: ['mostert'], teamId: 'mobil-1-optus-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['mostert'], teamId: 'mobil-1-optus-racing' }] }],
    },
    // Race 14: Wood (maiden win), Race 15/16: Feeney
    race: {
      overall: { driverIds: ['wood'], teamId: 'walkinshaw-andretti-united' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['wood'], teamId: 'walkinshaw-andretti-united' },
          { position: 2, driverIds: ['feeney'], teamId: 'triple-eight' },
        ],
      }],
    },
  },
  'sc-2025-darwin': {
    qualifying: {
      overall: { driverIds: ['feeney'], teamId: 'triple-eight' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['feeney'], teamId: 'triple-eight' }] }],
    },
    // Feeney won all three races — Darwin Triple Crown
    race: {
      overall: { driverIds: ['feeney'], teamId: 'triple-eight' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['feeney'], teamId: 'triple-eight' },
        ],
      }],
    },
  },
  'sc-2025-townsville': {
    qualifying: {
      overall: { driverIds: ['kostecki'], teamId: 'dick-johnson-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['kostecki'], teamId: 'dick-johnson-racing' }] }],
    },
    // Race 1 (Fri): Kostecki, Race 2 (Sat): Feeney, Race 3 (Sun): Feeney
    race: {
      overall: { driverIds: ['feeney'], teamId: 'triple-eight' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['kostecki'], teamId: 'dick-johnson-racing' },
          { position: 2, driverIds: ['feeney'], teamId: 'triple-eight' },
        ],
      }],
    },
  },
  'sc-2025-ipswich': {
    qualifying: {
      overall: { driverIds: ['feeney'], teamId: 'triple-eight' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['feeney'], teamId: 'triple-eight' }] }],
    },
    // Race 23: Feeney, Race 24: Brown, Race 25: Feeney
    race: {
      overall: { driverIds: ['feeney'], teamId: 'triple-eight' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['feeney'], teamId: 'triple-eight' },
          { position: 2, driverIds: ['brown'], teamId: 'red-bull-ampol-racing' },
        ],
      }],
    },
  },
  'sc-2025-the-bend': {
    qualifying: {
      overall: { driverIds: ['feeney'], teamId: 'triple-eight' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['feeney'], teamId: 'triple-eight' }] }],
    },
    // Endurance: Kostecki/Hazelwood won The Bend 500
    endurance: {
      overall: { driverIds: ['kostecki', 'hazelwood'], teamId: 'dick-johnson-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kostecki', 'hazelwood'], teamId: 'dick-johnson-racing' },
        ],
      }],
    },
  },
  'sc-2025-bathurst': {
    qualifying: {
      overall: { driverIds: ['kostecki'], teamId: 'dick-johnson-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['kostecki'], teamId: 'dick-johnson-racing' }] }],
    },
    // Bathurst 1000: Payne/Tander won
    endurance: {
      overall: { driverIds: ['payne', 'tander'], teamId: 'grove-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['payne', 'tander'], teamId: 'grove-racing' },
          { position: 2, driverIds: ['reynolds', 'holdsworth'], teamId: 'erebus-motorsport' },
          { position: 3, driverIds: ['golding', 'russell'], teamId: 'premiair-racing' },
        ],
      }],
    },
  },
  'sc-2025-gold-coast': {
    qualifying: {
      overall: { driverIds: ['wood'], teamId: 'walkinshaw-andretti-united' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['wood'], teamId: 'walkinshaw-andretti-united' }] }],
    },
    // Race 28: Mostert, Race 29: Mostert (sweep)
    race: {
      overall: { driverIds: ['mostert'], teamId: 'mobil-1-optus-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['mostert'], teamId: 'mobil-1-optus-racing' },
        ],
      }],
    },
  },
  'sc-2025-sandown': {
    qualifying: {
      overall: { driverIds: ['wood'], teamId: 'walkinshaw-andretti-united' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['wood'], teamId: 'walkinshaw-andretti-united' }] }],
    },
    // Saturday: Mostert, Sunday: Feeney
    endurance: {
      overall: { driverIds: ['feeney'], teamId: 'triple-eight' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['mostert'], teamId: 'mobil-1-optus-racing' },
          { position: 2, driverIds: ['feeney'], teamId: 'triple-eight' },
        ],
      }],
    },
  },
  'sc-2025-adelaide': {
    qualifying: {
      overall: { driverIds: ['feeney'], teamId: 'triple-eight' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['feeney'], teamId: 'triple-eight' }] }],
    },
    // Finals Grand Final — Champion: Mostert
    race: {
      overall: { driverIds: ['mostert'], teamId: 'mobil-1-optus-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['mostert'], teamId: 'mobil-1-optus-racing' },
          { position: 2, driverIds: ['feeney'], teamId: 'triple-eight' },
        ],
      }],
    },
  },
}
