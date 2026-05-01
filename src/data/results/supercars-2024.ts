import type { EventResults } from './types'

// Supercars 2024 results — verified from supercars.com, speedcafe.com
// Champion: Will Brown (Triple Eight Race Engineering)
// Race 1 / feature race winner per event shown as overall
export const supercarsResults2024: Record<string, EventResults> = {
  'sc-2024-bathurst-500': {
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
  'sc-2024-melbourne': {
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
  'sc-2024-taupo': {
    race: {
      overall: { driverIds: ['heimgartner'], teamId: 'brad-jones-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['heimgartner'], teamId: 'brad-jones-racing' },
        ],
      }],
    },
  },
  'sc-2024-perth': {
    race: {
      overall: { driverIds: ['mostert'], teamId: 'walkinshaw-andretti-united' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['mostert'], teamId: 'walkinshaw-andretti-united' },
        ],
      }],
    },
  },
  'sc-2024-darwin': {
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
  'sc-2024-townsville': {
    race: {
      overall: { driverIds: ['waters'], teamId: 'tickford-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['waters'], teamId: 'tickford-racing' },
        ],
      }],
    },
  },
  'sc-2024-sydney': {
    race: {
      overall: { driverIds: ['mostert'], teamId: 'walkinshaw-andretti-united' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['mostert'], teamId: 'walkinshaw-andretti-united' },
        ],
      }],
    },
  },
  'sc-2024-tasmania': {
    race: {
      overall: { driverIds: ['percat'], teamId: 'matt-stone-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['percat'], teamId: 'matt-stone-racing' },
        ],
      }],
    },
  },
  'sc-2024-sandown': {
    endurance: {
      overall: { driverIds: ['brown', 'pye'], teamId: 'triple-eight' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['brown', 'pye'], teamId: 'triple-eight' },
        ],
      }],
    },
  },
  'sc-2024-bathurst-1000': {
    endurance: {
      overall: { driverIds: ['kostecki', 'hazelwood'], teamId: 'erebus-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kostecki', 'hazelwood'], teamId: 'erebus-motorsport' },
        ],
      }],
    },
  },
  'sc-2024-gold-coast': {
    race: {
      overall: { driverIds: ['waters'], teamId: 'tickford-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['waters'], teamId: 'tickford-racing' },
        ],
      }],
    },
  },
  'sc-2024-adelaide': {
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
}
