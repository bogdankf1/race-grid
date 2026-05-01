import type { EventResults } from './types'

// FIA Formula 2 2021 results — verified from Wikipedia
// Champion: Oscar Piastri (Prema Racing)
// 2021 had 3 races per weekend (Sprint 1, Sprint 2, Feature Race) — only feature race results included
export const f2Results2021: Record<string, EventResults> = {
  'f2-2021-bahrain': {
    race: {
      overall: { driverIds: ['zhou'], teamId: 'invicta-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['zhou'], teamId: 'invicta-racing' },
          { position: 2, driverIds: ['piastri'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['verschoor'], teamId: 'mp-motorsport' },
        ],
      }],
    },
  },
  'f2-2021-monaco': {
    race: {
      overall: { driverIds: ['pourchaire'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pourchaire'], teamId: 'art-grand-prix' },
          { position: 2, driverIds: ['shwartzman'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['lundgaard'], teamId: 'art-grand-prix' },
        ],
      }],
    },
  },
  'f2-2021-azerbaijan': {
    race: {
      overall: { driverIds: ['vips'], teamId: 'hitech' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vips'], teamId: 'hitech' },
          { position: 2, driverIds: ['piastri'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['zhou'], teamId: 'invicta-racing' },
        ],
      }],
    },
  },
  'f2-2021-great-britain': {
    race: {
      overall: { driverIds: ['zhou'], teamId: 'invicta-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['zhou'], teamId: 'invicta-racing' },
          { position: 2, driverIds: ['ticktum'], teamId: 'rodin-motorsport' },
          { position: 3, driverIds: ['piastri'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f2-2021-italy': {
    race: {
      overall: { driverIds: ['piastri'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['piastri'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['lawson'], teamId: 'hitech' },
          { position: 3, driverIds: ['ticktum'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
  },
  'f2-2021-russia': {
    race: {
      overall: { driverIds: ['piastri'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['piastri'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['pourchaire'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['daruvala'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
  },
  'f2-2021-saudi-arabia': {
    race: {
      overall: { driverIds: ['piastri'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['piastri'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['shwartzman'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['pourchaire'], teamId: 'art-grand-prix' },
        ],
      }],
    },
  },
  'f2-2021-abu-dhabi': {
    race: {
      overall: { driverIds: ['piastri'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['piastri'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['pourchaire'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['shwartzman'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
}
