import type { EventResults } from './types'

// FIA Formula 3 2025 results — verified from fiaformula3.com, Wikipedia
// Season complete: 10 rounds, 19 scored races (Spa feature race abandoned)
export const f3Results2025: Record<string, EventResults> = {
  'f3-2025-melbourne': {
    sprint: {
      overall: { driverIds: ['santiago-ramos'], teamId: 'van-amersfoort-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['santiago-ramos'], teamId: 'van-amersfoort-racing' },
          { position: 2, driverIds: ['stenshorne'], teamId: 'hitech' },
          { position: 3, driverIds: ['bilinski'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['camara'], teamId: 'trident' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['camara'], teamId: 'trident' },
          { position: 2, driverIds: ['stromsted'], teamId: 'trident' },
          { position: 3, driverIds: ['nael'], teamId: 'van-amersfoort-racing' },
        ],
      }],
    },
  },
  'f3-2025-bahrain': {
    sprint: {
      overall: { driverIds: ['tsolov'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['tsolov'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['slater'], teamId: 'aix-racing' },
          { position: 3, driverIds: ['taponen'], teamId: 'art-grand-prix' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['camara'], teamId: 'trident' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['camara'], teamId: 'trident' },
          { position: 2, driverIds: ['callum-voisin'], teamId: 'rodin-motorsport' },
          { position: 3, driverIds: ['tramnitz'], teamId: 'mp-motorsport' },
        ],
      }],
    },
  },
  'f3-2025-imola': {
    sprint: {
      overall: { driverIds: ['tramnitz'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['tramnitz'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['del-pino'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['tsolov'], teamId: 'campos-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['santiago-ramos'], teamId: 'van-amersfoort-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['santiago-ramos'], teamId: 'van-amersfoort-racing' },
          { position: 2, driverIds: ['stromsted'], teamId: 'trident' },
          { position: 3, driverIds: ['camara'], teamId: 'trident' },
        ],
      }],
    },
  },
  'f3-2025-monaco': {
    sprint: {
      overall: { driverIds: ['stenshorne'], teamId: 'hitech' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['stenshorne'], teamId: 'hitech' },
          { position: 2, driverIds: ['taponen'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['van-hoepen'], teamId: 'art-grand-prix' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['tsolov'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['tsolov'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['bilinski'], teamId: 'rodin-motorsport' },
          { position: 3, driverIds: ['boya'], teamId: 'campos-racing' },
        ],
      }],
    },
  },
  'f3-2025-barcelona': {
    sprint: {
      overall: { driverIds: ['domingues'], teamId: 'van-amersfoort-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['domingues'], teamId: 'van-amersfoort-racing' },
          { position: 2, driverIds: ['santiago-ramos'], teamId: 'van-amersfoort-racing' },
          { position: 3, driverIds: ['tsolov'], teamId: 'campos-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['camara'], teamId: 'trident' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['camara'], teamId: 'trident' },
          { position: 2, driverIds: ['nael'], teamId: 'van-amersfoort-racing' },
          { position: 3, driverIds: ['giusti'], teamId: 'mp-motorsport' },
        ],
      }],
    },
  },
  'f3-2025-spielberg': {
    sprint: {
      overall: { driverIds: ['wharton'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['wharton'], teamId: 'art-grand-prix' },
          { position: 2, driverIds: ['giusti'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['tsolov'], teamId: 'campos-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['stenshorne'], teamId: 'hitech' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['stenshorne'], teamId: 'hitech' },
          { position: 2, driverIds: ['tramnitz'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['boya'], teamId: 'campos-racing' },
        ],
      }],
    },
  },
  'f3-2025-silverstone': {
    sprint: {
      overall: { driverIds: ['inthraphuvasak'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['inthraphuvasak'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['stenshorne'], teamId: 'hitech' },
          { position: 3, driverIds: ['boya'], teamId: 'campos-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['boya'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['boya'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['nael'], teamId: 'van-amersfoort-racing' },
          { position: 3, driverIds: ['noel-leon'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f3-2025-spa': {
    sprint: {
      overall: { driverIds: ['stromsted'], teamId: 'trident' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['stromsted'], teamId: 'trident' },
          { position: 2, driverIds: ['ugochukwu'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['charlie-wurz'], teamId: 'trident' },
        ],
      }],
    },
    // Feature race abandoned — no results
  },
  'f3-2025-budapest': {
    sprint: {
      overall: { driverIds: ['inthraphuvasak'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['inthraphuvasak'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['ugochukwu'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['charlie-wurz'], teamId: 'trident' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['camara'], teamId: 'trident' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['camara'], teamId: 'trident' },
          { position: 2, driverIds: ['boya'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['taponen'], teamId: 'art-grand-prix' },
        ],
      }],
    },
  },
  'f3-2025-monza': {
    sprint: {
      overall: { driverIds: ['bilinski'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bilinski'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['stenshorne'], teamId: 'hitech' },
          { position: 3, driverIds: ['van-hoepen'], teamId: 'art-grand-prix' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['inthraphuvasak'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['inthraphuvasak'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['tsolov'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['noel-leon'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
}
