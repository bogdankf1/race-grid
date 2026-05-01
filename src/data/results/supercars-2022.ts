import type { EventResults } from './types'

// Supercars 2022 results — verified from supercars.com, speedcafe.com
// Champion: Shane van Gisbergen (Triple Eight Race Engineering)
// Race 1 / feature race winner per event shown as overall
export const supercarsResults2022: Record<string, EventResults> = {
  'sc-2022-sydney': {
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
  'sc-2022-tasmania': {
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
  'sc-2022-melbourne': {
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
  'sc-2022-perth': {
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
  'sc-2022-winton': {
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
  'sc-2022-darwin': {
    race: {
      overall: { driverIds: ['de-pasquale'], teamId: 'dick-johnson-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['de-pasquale'], teamId: 'dick-johnson-racing' },
        ],
      }],
    },
  },
  'sc-2022-townsville': {
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
  'sc-2022-thebend': {
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
  'sc-2022-sandown': {
    race: {
      overall: { driverIds: ['davison'], teamId: 'dick-johnson-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['davison'], teamId: 'dick-johnson-racing' },
        ],
      }],
    },
  },
  'sc-2022-auckland': {
    race: {
      overall: { driverIds: ['davison'], teamId: 'dick-johnson-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['davison'], teamId: 'dick-johnson-racing' },
        ],
      }],
    },
  },
  'sc-2022-bathurst': {
    endurance: {
      overall: { driverIds: ['van-gisbergen', 'tander'], teamId: 'triple-eight' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['van-gisbergen', 'tander'], teamId: 'triple-eight' },
        ],
      }],
    },
  },
  'sc-2022-goldcoast': {
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
  'sc-2022-adelaide': {
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
}
