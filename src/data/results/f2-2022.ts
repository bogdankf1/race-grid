import type { EventResults } from './types'

// FIA Formula 2 2022 results — verified from Wikipedia
// Champion: Felipe Drugovich (MP Motorsport)
// Team name mapping: Carlin = rodin-motorsport, Virtuosi = invicta-racing, Charouz = charouz-racing
export const f2Results2022: Record<string, EventResults> = {
  'f2-2022-bahrain': {
    sprint: {
      overall: { driverIds: ['verschoor'], teamId: 'trident' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verschoor'], teamId: 'trident' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['pourchaire'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pourchaire'], teamId: 'art-grand-prix' },
          { position: 2, driverIds: ['vips'], teamId: 'hitech' },
          { position: 3, driverIds: ['lawson'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
  },
  'f2-2022-saudi-arabia': {
    sprint: {
      overall: { driverIds: ['lawson'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lawson'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['drugovich'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['drugovich'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['doohan'], teamId: 'invicta-racing' },
          { position: 3, driverIds: ['daruvala'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f2-2022-emilia-romagna': {
    sprint: {
      overall: { driverIds: ['armstrong'], teamId: 'hitech' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['armstrong'], teamId: 'hitech' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['pourchaire'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pourchaire'], teamId: 'art-grand-prix' },
          { position: 2, driverIds: ['e-fittipaldi'], teamId: 'charouz-racing' },
          { position: 3, driverIds: ['daruvala'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f2-2022-spain': {
    sprint: {
      overall: { driverIds: ['drugovich'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['drugovich'], teamId: 'mp-motorsport' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['drugovich'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['drugovich'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['doohan'], teamId: 'invicta-racing' },
          { position: 3, driverIds: ['vesti'], teamId: 'art-grand-prix' },
        ],
      }],
    },
  },
  'f2-2022-monaco': {
    sprint: {
      overall: { driverIds: ['hauger'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hauger'], teamId: 'prema-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['drugovich'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['drugovich'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['pourchaire'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['vips'], teamId: 'hitech' },
        ],
      }],
    },
  },
  'f2-2022-azerbaijan': {
    sprint: {
      overall: { driverIds: ['vesti'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vesti'], teamId: 'art-grand-prix' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['hauger'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hauger'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['armstrong'], teamId: 'hitech' },
          { position: 3, driverIds: ['lawson'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
  },
  'f2-2022-great-britain': {
    sprint: {
      overall: { driverIds: ['doohan'], teamId: 'invicta-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['doohan'], teamId: 'invicta-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['sargeant'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sargeant'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['pourchaire'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['lawson'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
  },
  'f2-2022-austria': {
    sprint: {
      overall: { driverIds: ['armstrong'], teamId: 'hitech' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['armstrong'], teamId: 'hitech' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['sargeant'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sargeant'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['doohan'], teamId: 'invicta-racing' },
          { position: 3, driverIds: ['vesti'], teamId: 'art-grand-prix' },
        ],
      }],
    },
  },
  'f2-2022-france': {
    sprint: {
      overall: { driverIds: ['lawson'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lawson'], teamId: 'rodin-motorsport' },
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
          { position: 3, driverIds: ['vesti'], teamId: 'art-grand-prix' },
        ],
      }],
    },
  },
  'f2-2022-hungary': {
    sprint: {
      overall: { driverIds: ['doohan'], teamId: 'invicta-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['doohan'], teamId: 'invicta-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['pourchaire'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pourchaire'], teamId: 'art-grand-prix' },
          { position: 2, driverIds: ['e-fittipaldi'], teamId: 'charouz-racing' },
          { position: 3, driverIds: ['armstrong'], teamId: 'hitech' },
        ],
      }],
    },
  },
  'f2-2022-belgium': {
    sprint: {
      overall: { driverIds: ['lawson'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lawson'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['doohan'], teamId: 'invicta-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['doohan'], teamId: 'invicta-racing' },
          { position: 2, driverIds: ['drugovich'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['lawson'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
  },
  'f2-2022-netherlands': {
    sprint: {
      overall: { driverIds: ['armstrong'], teamId: 'hitech' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['armstrong'], teamId: 'hitech' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['drugovich'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['drugovich'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['verschoor'], teamId: 'trident' },
          { position: 3, driverIds: ['iwasa'], teamId: 'dams' },
        ],
      }],
    },
  },
  'f2-2022-italy': {
    sprint: {
      overall: { driverIds: ['vips'], teamId: 'hitech' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vips'], teamId: 'hitech' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['daruvala'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['daruvala'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['vesti'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['e-fittipaldi'], teamId: 'charouz-racing' },
        ],
      }],
    },
  },
  'f2-2022-abu-dhabi': {
    sprint: {
      overall: { driverIds: ['lawson'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lawson'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['iwasa'], teamId: 'dams' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['iwasa'], teamId: 'dams' },
          { position: 2, driverIds: ['drugovich'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['lawson'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
  },
}
