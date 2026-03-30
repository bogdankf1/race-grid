import { EventResults } from './types'

// Supercars 2025 results — verified from supercars.com, v8sleuth.com.au, speedcafe.com, motorsport.com
// Multiple races per event — overall shows the main/last race winner
export const supercarsResults2025: Record<string, EventResults> = {
  'sc-2025-sydney': {
    qualifying: {
      overall: { drivers: ['Waters'], team: 'Monster Castrol Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Waters'], team: 'Monster Castrol Racing' }] }],
    },
    // Race 1, 2, 3: All won by Cam Waters (clean sweep)
    race: {
      overall: { drivers: ['Waters'], team: 'Monster Castrol Racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Waters'], team: 'Monster Castrol Racing' },
        ],
      }],
    },
  },
  'sc-2025-melbourne': {
    qualifying: {
      overall: { drivers: ['Feeney'], team: 'Triple Eight Race Engineering' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Feeney'], team: 'Triple Eight Race Engineering' }] }],
    },
    // Race 4: Feeney, Race 5: Hill, Race 6: Brown, Race 7: Abandoned (rain)
    race: {
      overall: { drivers: ['Brown'], team: 'Red Bull Ampol Racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Feeney'], team: 'Triple Eight Race Engineering' },
          { position: 2, drivers: ['Hill'], team: 'Matt Stone Racing' },
          { position: 3, drivers: ['Brown'], team: 'Red Bull Ampol Racing' },
        ],
      }],
    },
  },
  'sc-2025-taupo': {
    qualifying: {
      overall: { drivers: ['Payne'], team: 'Grove Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Payne'], team: 'Grove Racing' }] }],
    },
    // Matt Payne won the event (Jason Richards Trophy)
    race: {
      overall: { drivers: ['Payne'], team: 'Grove Racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Payne'], team: 'Grove Racing' },
        ],
      }],
    },
  },
  'sc-2025-tasmania': {
    qualifying: {
      overall: { drivers: ['Randle'], team: 'Tickford Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Randle'], team: 'Tickford Racing' }] }],
    },
    // Race 11: Feeney, Race 12: Feeney, Race 13: Payne
    race: {
      overall: { drivers: ['Feeney'], team: 'Triple Eight Race Engineering' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Feeney'], team: 'Triple Eight Race Engineering' },
          { position: 2, drivers: ['Payne'], team: 'Grove Racing' },
        ],
      }],
    },
  },
  'sc-2025-perth': {
    qualifying: {
      overall: { drivers: ['Mostert'], team: 'Mobil 1 Optus Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Mostert'], team: 'Mobil 1 Optus Racing' }] }],
    },
    // Race 14: Wood (maiden win), Race 15/16: Feeney
    race: {
      overall: { drivers: ['Wood'], team: 'Walkinshaw Andretti United' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Wood'], team: 'Walkinshaw Andretti United' },
          { position: 2, drivers: ['Feeney'], team: 'Triple Eight Race Engineering' },
        ],
      }],
    },
  },
  'sc-2025-darwin': {
    qualifying: {
      overall: { drivers: ['Feeney'], team: 'Triple Eight Race Engineering' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Feeney'], team: 'Triple Eight Race Engineering' }] }],
    },
    // Feeney won all three races — Darwin Triple Crown
    race: {
      overall: { drivers: ['Feeney'], team: 'Triple Eight Race Engineering' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Feeney'], team: 'Triple Eight Race Engineering' },
        ],
      }],
    },
  },
  'sc-2025-townsville': {
    qualifying: {
      overall: { drivers: ['Kostecki'], team: 'Dick Johnson Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Kostecki'], team: 'Dick Johnson Racing' }] }],
    },
    // Race 1 (Fri): Kostecki, Race 2 (Sat): Feeney, Race 3 (Sun): Feeney
    race: {
      overall: { drivers: ['Feeney'], team: 'Triple Eight Race Engineering' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Kostecki'], team: 'Dick Johnson Racing' },
          { position: 2, drivers: ['Feeney'], team: 'Triple Eight Race Engineering' },
        ],
      }],
    },
  },
  'sc-2025-ipswich': {
    qualifying: {
      overall: { drivers: ['Feeney'], team: 'Triple Eight Race Engineering' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Feeney'], team: 'Triple Eight Race Engineering' }] }],
    },
    // Race 23: Feeney, Race 24: Brown, Race 25: Feeney
    race: {
      overall: { drivers: ['Feeney'], team: 'Triple Eight Race Engineering' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Feeney'], team: 'Triple Eight Race Engineering' },
          { position: 2, drivers: ['Brown'], team: 'Red Bull Ampol Racing' },
        ],
      }],
    },
  },
  'sc-2025-the-bend': {
    qualifying: {
      overall: { drivers: ['Feeney'], team: 'Triple Eight Race Engineering' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Feeney'], team: 'Triple Eight Race Engineering' }] }],
    },
    // Endurance: Kostecki/Hazelwood won The Bend 500
    endurance: {
      overall: { drivers: ['Kostecki', 'Hazelwood'], team: 'Dick Johnson Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Kostecki', 'Hazelwood'], team: 'Dick Johnson Racing' },
        ],
      }],
    },
  },
  'sc-2025-bathurst': {
    qualifying: {
      overall: { drivers: ['Kostecki'], team: 'Dick Johnson Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Kostecki'], team: 'Dick Johnson Racing' }] }],
    },
    // Bathurst 1000: Payne/Tander won
    endurance: {
      overall: { drivers: ['Payne', 'Tander'], team: 'Grove Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Payne', 'Tander'], team: 'Grove Racing' },
          { position: 2, drivers: ['Reynolds', 'Holdsworth'], team: 'Erebus Motorsport' },
          { position: 3, drivers: ['Golding', 'Russell'], team: 'PremiAir Racing' },
        ],
      }],
    },
  },
  'sc-2025-gold-coast': {
    qualifying: {
      overall: { drivers: ['Wood'], team: 'Walkinshaw Andretti United' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Wood'], team: 'Walkinshaw Andretti United' }] }],
    },
    // Race 28: Mostert, Race 29: Mostert (sweep)
    race: {
      overall: { drivers: ['Mostert'], team: 'Mobil 1 Optus Racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Mostert'], team: 'Mobil 1 Optus Racing' },
        ],
      }],
    },
  },
  'sc-2025-sandown': {
    qualifying: {
      overall: { drivers: ['Wood'], team: 'Walkinshaw Andretti United' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Wood'], team: 'Walkinshaw Andretti United' }] }],
    },
    // Saturday: Mostert, Sunday: Feeney
    endurance: {
      overall: { drivers: ['Feeney'], team: 'Triple Eight Race Engineering' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Mostert'], team: 'Mobil 1 Optus Racing' },
          { position: 2, drivers: ['Feeney'], team: 'Triple Eight Race Engineering' },
        ],
      }],
    },
  },
  'sc-2025-adelaide': {
    qualifying: {
      overall: { drivers: ['Feeney'], team: 'Triple Eight Race Engineering' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Feeney'], team: 'Triple Eight Race Engineering' }] }],
    },
    // Finals Grand Final — Champion: Mostert
    race: {
      overall: { drivers: ['Mostert'], team: 'Mobil 1 Optus Racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Mostert'], team: 'Mobil 1 Optus Racing' },
          { position: 2, drivers: ['Feeney'], team: 'Triple Eight Race Engineering' },
        ],
      }],
    },
  },
}
