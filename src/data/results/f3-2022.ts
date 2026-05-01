import type { EventResults } from './types'

// FIA Formula 3 2022 results — verified from Wikipedia
// Champion: Victor Martins (ART Grand Prix)
// Season: 9 rounds, sprint + feature race per weekend
export const f3Results2022: Record<string, EventResults> = {
  'f3-2022-bahrain': {
    sprint: {
      overall: { driverIds: ['hadjar'], teamId: 'hitech' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hadjar'], teamId: 'hitech' },
          { position: 2, driverIds: ['bearman'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['maloney'], teamId: 'trident' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['martins'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['martins'], teamId: 'art-grand-prix' },
          { position: 2, driverIds: ['a-leclerc'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['saucy'], teamId: 'art-grand-prix' },
        ],
      }],
    },
  },
  'f3-2022-emilia-romagna': {
    sprint: {
      overall: { driverIds: ['colapinto'], teamId: 'van-amersfoort-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['colapinto'], teamId: 'van-amersfoort-racing' },
          { position: 2, driverIds: ['collet'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['hadjar'], teamId: 'hitech' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['stanek'], teamId: 'trident' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['stanek'], teamId: 'trident' },
          { position: 2, driverIds: ['bearman'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['saucy'], teamId: 'art-grand-prix' },
        ],
      }],
    },
  },
  'f3-2022-spain': {
    sprint: {
      overall: { driverIds: ['vidales'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vidales'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['crawford'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['correa'], teamId: 'art-grand-prix' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['martins'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['martins'], teamId: 'art-grand-prix' },
          { position: 2, driverIds: ['stanek'], teamId: 'trident' },
          { position: 3, driverIds: ['hadjar'], teamId: 'hitech' },
        ],
      }],
    },
  },
  'f3-2022-great-britain': {
    sprint: {
      overall: { driverIds: ['hadjar'], teamId: 'hitech' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hadjar'], teamId: 'hitech' },
          { position: 2, driverIds: ['k-maini'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['ushijima'], teamId: 'van-amersfoort-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['a-leclerc'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['a-leclerc'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['o-sullivan'], teamId: 'carlin' },
          { position: 3, driverIds: ['bearman'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f3-2022-austria': {
    sprint: {
      overall: { driverIds: ['crawford'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['crawford'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['collet'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['colapinto'], teamId: 'van-amersfoort-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['hadjar'], teamId: 'hitech' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hadjar'], teamId: 'hitech' },
          { position: 2, driverIds: ['martins'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['smolyar'], teamId: 'mp-motorsport' },
        ],
      }],
    },
  },
  'f3-2022-hungary': {
    sprint: {
      overall: { driverIds: ['collet'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['collet'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['k-maini'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['colapinto'], teamId: 'van-amersfoort-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['smolyar'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['smolyar'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['maloney'], teamId: 'trident' },
          { position: 3, driverIds: ['bearman'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f3-2022-belgium': {
    sprint: {
      overall: { driverIds: ['bearman'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bearman'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['benavides'], teamId: 'carlin' },
          { position: 3, driverIds: ['correa'], teamId: 'art-grand-prix' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['maloney'], teamId: 'trident' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['maloney'], teamId: 'trident' },
          { position: 2, driverIds: ['stanek'], teamId: 'trident' },
          { position: 3, driverIds: ['bearman'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f3-2022-netherlands': {
    sprint: {
      overall: { driverIds: ['collet'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['collet'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['correa'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['saucy'], teamId: 'art-grand-prix' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['maloney'], teamId: 'trident' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['maloney'], teamId: 'trident' },
          { position: 2, driverIds: ['martins'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['smolyar'], teamId: 'mp-motorsport' },
        ],
      }],
    },
  },
  'f3-2022-italy': {
    sprint: {
      overall: { driverIds: ['colapinto'], teamId: 'van-amersfoort-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['colapinto'], teamId: 'van-amersfoort-racing' },
          { position: 2, driverIds: ['bearman'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['collet'], teamId: 'mp-motorsport' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['maloney'], teamId: 'trident' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['maloney'], teamId: 'trident' },
          { position: 2, driverIds: ['bearman'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['martins'], teamId: 'art-grand-prix' },
        ],
      }],
    },
  },
}
