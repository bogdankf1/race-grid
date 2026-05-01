import type { EventResults } from './types'

// FIA Formula 3 2023 results — verified from Wikipedia
// Champion: Gabriel Bortoleto (Trident)
// Season: 9 rounds held (Imola cancelled due to flooding)
export const f3Results2023: Record<string, EventResults> = {
  'f3-2023-bahrain': {
    sprint: {
      overall: { driverIds: ['p-marti'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['p-marti'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['colapinto'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['fornaroli'], teamId: 'trident' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['bortoleto'], teamId: 'trident' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bortoleto'], teamId: 'trident' },
          { position: 2, driverIds: ['goethe-o'], teamId: 'trident' },
          { position: 3, driverIds: ['beganovic'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f3-2023-australia': {
    sprint: {
      overall: { driverIds: ['o-sullivan'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['o-sullivan'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['montoya-s'], teamId: 'hitech' },
          { position: 3, driverIds: ['colapinto'], teamId: 'mp-motorsport' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['bortoleto'], teamId: 'trident' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bortoleto'], teamId: 'trident' },
          { position: 2, driverIds: ['saucy'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['mini'], teamId: 'hitech' },
        ],
      }],
    },
  },
  'f3-2023-monaco': {
    sprint: {
      overall: { driverIds: ['p-marti'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['p-marti'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['fornaroli'], teamId: 'trident' },
          { position: 3, driverIds: ['saucy'], teamId: 'art-grand-prix' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['mini'], teamId: 'hitech' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mini'], teamId: 'hitech' },
          { position: 2, driverIds: ['beganovic'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['aron'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f3-2023-spain': {
    sprint: {
      overall: { driverIds: ['o-sullivan'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['o-sullivan'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['browning'], teamId: 'hitech' },
          { position: 3, driverIds: ['montoya-s'], teamId: 'hitech' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['p-marti'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['p-marti'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['barnard'], teamId: 'jenzer-motorsport' },
          { position: 3, driverIds: ['colapinto'], teamId: 'mp-motorsport' },
        ],
      }],
    },
  },
  'f3-2023-austria': {
    sprint: {
      overall: { driverIds: ['aron'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['aron'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['p-marti'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['saucy'], teamId: 'art-grand-prix' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['o-sullivan'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['o-sullivan'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['bortoleto'], teamId: 'trident' },
          { position: 3, driverIds: ['collet'], teamId: 'van-amersfoort-racing' },
        ],
      }],
    },
  },
  'f3-2023-great-britain': {
    sprint: {
      overall: { driverIds: ['colapinto'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['colapinto'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['barnard'], teamId: 'jenzer-motorsport' },
          { position: 3, driverIds: ['mansell'], teamId: 'campos-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['goethe-o'], teamId: 'trident' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['goethe-o'], teamId: 'trident' },
          { position: 2, driverIds: ['fornaroli'], teamId: 'trident' },
          { position: 3, driverIds: ['aron'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f3-2023-hungary': {
    sprint: {
      overall: { driverIds: ['mini'], teamId: 'hitech' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mini'], teamId: 'hitech' },
          { position: 2, driverIds: ['bedrin'], teamId: 'jenzer-motorsport' },
          { position: 3, driverIds: ['bortoleto'], teamId: 'trident' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['o-sullivan'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['o-sullivan'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['beganovic'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['colapinto'], teamId: 'mp-motorsport' },
        ],
      }],
    },
  },
  'f3-2023-belgium': {
    sprint: {
      overall: { driverIds: ['collet'], teamId: 'van-amersfoort-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['collet'], teamId: 'van-amersfoort-racing' },
          { position: 2, driverIds: ['barnard'], teamId: 'jenzer-motorsport' },
          { position: 3, driverIds: ['mansell'], teamId: 'campos-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['barnard'], teamId: 'jenzer-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['barnard'], teamId: 'jenzer-motorsport' },
          { position: 2, driverIds: ['mansell'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['aron'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f3-2023-italy': {
    sprint: {
      overall: { driverIds: ['colapinto'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['colapinto'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['bortoleto'], teamId: 'trident' },
          { position: 3, driverIds: ['boya'], teamId: 'mp-motorsport' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['edgar'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['edgar'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['o-sullivan'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['browning'], teamId: 'hitech' },
        ],
      }],
    },
  },
}
