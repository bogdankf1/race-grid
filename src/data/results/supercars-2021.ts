import type { EventResults } from './types'

// Supercars 2021 results — verified from supercars.com, speedcafe.com
// Champion: Shane van Gisbergen (Triple Eight Race Engineering)
// Race 1 / feature race winner per event shown as overall
export const supercarsResults2021: Record<string, EventResults> = {
  'sc-2021-bathurst-500': {
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
  'sc-2021-sandown': {
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
  'sc-2021-tasmania': {
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
  'sc-2021-thebend': {
    race: {
      overall: { driverIds: ['heimgartner'], teamId: 'kelly-grove-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['heimgartner'], teamId: 'kelly-grove-racing' },
        ],
      }],
    },
  },
  'sc-2021-darwin': {
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
  'sc-2021-townsville': {
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
  'sc-2021-townsville2': {
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
  'sc-2021-sydney1': {
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
  'sc-2021-sydney2': {
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
  'sc-2021-sydney3': {
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
  'sc-2021-sydney4': {
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
  'sc-2021-bathurst': {
    endurance: {
      overall: { driverIds: ['mostert', 'holdsworth'], teamId: 'walkinshaw-andretti-united' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mostert', 'holdsworth'], teamId: 'walkinshaw-andretti-united' },
        ],
      }],
    },
  },
}
