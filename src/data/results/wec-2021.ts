import type { EventResults } from './types'

// WEC 2021 Hypercar results — verified from fiawec.com, Wikipedia
// Champions: Conway/Kobayashi/López (Toyota #7) — 173 pts
export const wecResults2021: Record<string, EventResults> = {
  'wec-2021-spa': {
    race: {
      overall: { driverIds: ['buemi', 'hartley', 'nakajima'], teamId: 'toyota-gazoo-racing' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['buemi', 'hartley', 'nakajima'], teamId: 'toyota-gazoo-racing' },
      ] }],
    },
  },
  'wec-2021-portimao': {
    race: {
      overall: { driverIds: ['buemi', 'hartley', 'nakajima'], teamId: 'toyota-gazoo-racing' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['buemi', 'hartley', 'nakajima'], teamId: 'toyota-gazoo-racing' },
      ] }],
    },
  },
  'wec-2021-monza': {
    race: {
      overall: { driverIds: ['conway', 'kobayashi', 'jm-lopez'], teamId: 'toyota-gazoo-racing' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['conway', 'kobayashi', 'jm-lopez'], teamId: 'toyota-gazoo-racing' },
      ] }],
    },
  },
  'wec-2021-le-mans': {
    race: {
      overall: { driverIds: ['conway', 'kobayashi', 'jm-lopez'], teamId: 'toyota-gazoo-racing' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['conway', 'kobayashi', 'jm-lopez'], teamId: 'toyota-gazoo-racing' },
      ] }],
    },
  },
  'wec-2021-bahrain-6h': {
    race: {
      overall: { driverIds: ['conway', 'kobayashi', 'jm-lopez'], teamId: 'toyota-gazoo-racing' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['conway', 'kobayashi', 'jm-lopez'], teamId: 'toyota-gazoo-racing' },
      ] }],
    },
  },
  'wec-2021-bahrain-8h': {
    race: {
      overall: { driverIds: ['buemi', 'hartley', 'nakajima'], teamId: 'toyota-gazoo-racing' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['buemi', 'hartley', 'nakajima'], teamId: 'toyota-gazoo-racing' },
      ] }],
    },
  },
}
