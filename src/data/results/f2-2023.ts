import type { EventResults } from './types'

// FIA Formula 2 2023 results — verified from Wikipedia
// Champion: Théo Pourchaire (ART Grand Prix)
// Imola round cancelled due to flooding — 13 rounds held
export const f2Results2023: Record<string, EventResults> = {
  'f2-2023-bahrain': {
    sprint: {
      overall: { driverIds: ['boschung'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['boschung'], teamId: 'campos-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['pourchaire'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pourchaire'], teamId: 'art-grand-prix' },
          { position: 2, driverIds: ['boschung'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['maloney'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
  },
  'f2-2023-saudi-arabia': {
    sprint: {
      overall: { driverIds: ['iwasa'], teamId: 'dams' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['iwasa'], teamId: 'dams' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['vesti'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vesti'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['bearman'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['martins'], teamId: 'art-grand-prix' },
        ],
      }],
    },
  },
  'f2-2023-australia': {
    sprint: {
      overall: { driverIds: ['hauger'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hauger'], teamId: 'mp-motorsport' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['iwasa'], teamId: 'dams' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['iwasa'], teamId: 'dams' },
          { position: 2, driverIds: ['pourchaire'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['a-leclerc'], teamId: 'dams' },
        ],
      }],
    },
  },
  'f2-2023-azerbaijan': {
    sprint: {
      overall: { driverIds: ['bearman'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bearman'], teamId: 'prema-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['bearman'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bearman'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['e-fittipaldi'], teamId: 'rodin-motorsport' },
          { position: 3, driverIds: ['pourchaire'], teamId: 'art-grand-prix' },
        ],
      }],
    },
  },
  'f2-2023-monaco': {
    sprint: {
      overall: { driverIds: ['iwasa'], teamId: 'dams' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['iwasa'], teamId: 'dams' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['vesti'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vesti'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['pourchaire'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['maloney'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
  },
  'f2-2023-spain': {
    sprint: {
      overall: { driverIds: ['vesti'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vesti'], teamId: 'prema-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['bearman'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bearman'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['e-fittipaldi'], teamId: 'rodin-motorsport' },
          { position: 3, driverIds: ['martins'], teamId: 'art-grand-prix' },
        ],
      }],
    },
  },
  'f2-2023-austria': {
    sprint: {
      overall: { driverIds: ['crawford'], teamId: 'hitech' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['crawford'], teamId: 'hitech' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['verschoor'], teamId: 'van-amersfoort-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verschoor'], teamId: 'van-amersfoort-racing' },
          { position: 2, driverIds: ['iwasa'], teamId: 'dams' },
          { position: 3, driverIds: ['vesti'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f2-2023-great-britain': {
    sprint: {
      overall: { driverIds: ['vesti'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vesti'], teamId: 'prema-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['martins'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['martins'], teamId: 'art-grand-prix' },
          { position: 2, driverIds: ['maloney'], teamId: 'rodin-motorsport' },
          { position: 3, driverIds: ['a-leclerc'], teamId: 'dams' },
        ],
      }],
    },
  },
  'f2-2023-hungary': {
    sprint: {
      overall: { driverIds: ['hauger'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hauger'], teamId: 'mp-motorsport' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['doohan'], teamId: 'invicta-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['doohan'], teamId: 'invicta-racing' },
          { position: 2, driverIds: ['vesti'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['martins'], teamId: 'art-grand-prix' },
        ],
      }],
    },
  },
  'f2-2023-belgium': {
    sprint: {
      overall: { driverIds: ['e-fittipaldi'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['e-fittipaldi'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['doohan'], teamId: 'invicta-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['doohan'], teamId: 'invicta-racing' },
          { position: 2, driverIds: ['pourchaire'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['e-fittipaldi'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
  },
  'f2-2023-netherlands': {
    race: {
      overall: { driverIds: ['novalak'], teamId: 'trident' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['novalak'], teamId: 'trident' },
          { position: 2, driverIds: ['crawford'], teamId: 'hitech' },
          { position: 3, driverIds: ['maloney'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
  },
  'f2-2023-italy': {
    sprint: {
      overall: { driverIds: ['vesti'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vesti'], teamId: 'prema-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['bearman'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bearman'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['pourchaire'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['iwasa'], teamId: 'dams' },
        ],
      }],
    },
  },
  'f2-2023-abu-dhabi': {
    sprint: {
      overall: { driverIds: ['vesti'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vesti'], teamId: 'prema-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['doohan'], teamId: 'invicta-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['doohan'], teamId: 'invicta-racing' },
          { position: 2, driverIds: ['martins'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['vesti'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
}
