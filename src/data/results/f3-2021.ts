import type { EventResults } from './types'

// FIA Formula 3 2021 results — verified from Wikipedia
// Champion: Dennis Hauger (Prema Racing)
// Season: 7 rounds, 3 races per weekend (Race 1 & 2 = sprint, Race 3 = feature)
// Note: Only one sprint result per event supported by data model; Race 1 recorded as sprint
// Sochi Race 2 cancelled due to weather
export const f3Results2021: Record<string, EventResults> = {
  'f3-2021-spain': {
    sprint: {
      overall: { driverIds: ['smolyar'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['smolyar'], teamId: 'art-grand-prix' },
          { position: 2, driverIds: ['novalak'], teamId: 'trident' },
          { position: 3, driverIds: ['collet'], teamId: 'mp-motorsport' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['hauger'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hauger'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['doohan'], teamId: 'trident' },
          { position: 3, driverIds: ['nannini'], teamId: 'hwa-racelab' },
        ],
      }],
    },
  },
  'f3-2021-france': {
    sprint: {
      overall: { driverIds: ['smolyar'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['smolyar'], teamId: 'art-grand-prix' },
          { position: 2, driverIds: ['martins'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['c-williams'], teamId: 'jenzer-motorsport' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['doohan'], teamId: 'trident' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['doohan'], teamId: 'trident' },
          { position: 2, driverIds: ['hauger'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['collet'], teamId: 'mp-motorsport' },
        ],
      }],
    },
  },
  'f3-2021-austria': {
    sprint: {
      overall: { driverIds: ['hauger'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hauger'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['caldwell'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['doohan'], teamId: 'trident' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['vesti'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vesti'], teamId: 'art-grand-prix' },
          { position: 2, driverIds: ['hauger'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['caldwell'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f3-2021-hungary': {
    sprint: {
      overall: { driverIds: ['iwasa'], teamId: 'hitech' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['iwasa'], teamId: 'hitech' },
          { position: 2, driverIds: ['caldwell'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['sargeant'], teamId: 'charouz-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['hauger'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hauger'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['a-leclerc'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['doohan'], teamId: 'trident' },
        ],
      }],
    },
  },
  'f3-2021-belgium': {
    sprint: {
      overall: { driverIds: ['colombo'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['colombo'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['crawford'], teamId: 'hitech' },
          { position: 3, driverIds: ['stanek'], teamId: 'hitech' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['doohan'], teamId: 'trident' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['doohan'], teamId: 'trident' },
          { position: 2, driverIds: ['martins'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['smolyar'], teamId: 'art-grand-prix' },
        ],
      }],
    },
  },
  'f3-2021-netherlands': {
    sprint: {
      overall: { driverIds: ['a-leclerc'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['a-leclerc'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['sargeant'], teamId: 'charouz-racing' },
          { position: 3, driverIds: ['iwasa'], teamId: 'hitech' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['hauger'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hauger'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['novalak'], teamId: 'trident' },
          { position: 3, driverIds: ['smolyar'], teamId: 'art-grand-prix' },
        ],
      }],
    },
  },
  'f3-2021-russia': {
    sprint: {
      overall: { driverIds: ['sargeant'], teamId: 'charouz-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sargeant'], teamId: 'charouz-racing' },
          { position: 2, driverIds: ['hauger'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['martins'], teamId: 'mp-motorsport' },
        ],
      }],
    },
    // Sprint Race 2 cancelled due to adverse weather
    race: {
      overall: { driverIds: ['doohan'], teamId: 'trident' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['doohan'], teamId: 'trident' },
          { position: 2, driverIds: ['vesti'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['novalak'], teamId: 'trident' },
        ],
      }],
    },
  },
}
