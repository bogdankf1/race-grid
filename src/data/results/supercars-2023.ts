import type { EventResults } from './types'

// Supercars 2023 results — verified from supercars.com, speedcafe.com
// Champion: Brodie Kostecki (Erebus Motorsport)
// Race 1 / feature race winner per event shown as overall
export const supercarsResults2023: Record<string, EventResults> = {
  'sc-2023-newcastle': {
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
  'sc-2023-melbourne': {
    race: {
      overall: { driverIds: ['van-gisbergen'], teamId: 'triple-eight' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['van-gisbergen'], teamId: 'triple-eight' },
        ],
      }],
    },
  },
  'sc-2023-perth': {
    race: {
      overall: { driverIds: ['van-gisbergen'], teamId: 'triple-eight' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['van-gisbergen'], teamId: 'triple-eight' },
        ],
      }],
    },
  },
  'sc-2023-tasmania': {
    race: {
      overall: { driverIds: ['brown'], teamId: 'erebus-motorsport' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['brown'], teamId: 'erebus-motorsport' },
        ],
      }],
    },
  },
  'sc-2023-darwin': {
    race: {
      overall: { driverIds: ['winterbottom'], teamId: 'team-18' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['winterbottom'], teamId: 'team-18' },
        ],
      }],
    },
  },
  'sc-2023-townsville': {
    race: {
      overall: { driverIds: ['brown'], teamId: 'erebus-motorsport' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['brown'], teamId: 'erebus-motorsport' },
        ],
      }],
    },
  },
  'sc-2023-sydney': {
    race: {
      overall: { driverIds: ['kostecki'], teamId: 'erebus-motorsport' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['kostecki'], teamId: 'erebus-motorsport' },
        ],
      }],
    },
  },
  'sc-2023-the-bend': {
    race: {
      overall: { driverIds: ['kostecki'], teamId: 'erebus-motorsport' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['kostecki'], teamId: 'erebus-motorsport' },
        ],
      }],
    },
  },
  'sc-2023-sandown': {
    endurance: {
      overall: { driverIds: ['feeney', 'whincup'], teamId: 'triple-eight' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['feeney', 'whincup'], teamId: 'triple-eight' },
        ],
      }],
    },
  },
  'sc-2023-bathurst': {
    endurance: {
      overall: { driverIds: ['van-gisbergen', 'stanaway'], teamId: 'triple-eight' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['van-gisbergen', 'stanaway'], teamId: 'triple-eight' },
        ],
      }],
    },
  },
  'sc-2023-gold-coast': {
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
  'sc-2023-adelaide': {
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
}
