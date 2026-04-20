import type { EventResults } from './types'

// WEC 2022 Hypercar results — verified from fiawec.com, Wikipedia
// Champions: Buemi/Hartley/Hirakawa (Toyota #8) — 149 pts
export const wecResults2022: Record<string, EventResults> = {
  'wec-2022-sebring': {
    race: {
      overall: { driverIds: ['lapierre', 'negrao', 'vaxiviere'], teamId: 'alpine' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['lapierre', 'negrao', 'vaxiviere'], teamId: 'alpine' },
      ] }],
    },
  },
  'wec-2022-spa': {
    race: {
      overall: { driverIds: ['conway', 'kobayashi', 'jm-lopez'], teamId: 'toyota-gazoo-racing' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['conway', 'kobayashi', 'jm-lopez'], teamId: 'toyota-gazoo-racing' },
      ] }],
    },
  },
  'wec-2022-le-mans': {
    race: {
      overall: { driverIds: ['buemi', 'hartley', 'hirakawa'], teamId: 'toyota-gazoo-racing' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['buemi', 'hartley', 'hirakawa'], teamId: 'toyota-gazoo-racing' },
      ] }],
    },
  },
  'wec-2022-monza': {
    race: {
      overall: { driverIds: ['lapierre', 'negrao', 'vaxiviere'], teamId: 'alpine' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['lapierre', 'negrao', 'vaxiviere'], teamId: 'alpine' },
      ] }],
    },
  },
  'wec-2022-fuji': {
    race: {
      overall: { driverIds: ['buemi', 'hartley', 'hirakawa'], teamId: 'toyota-gazoo-racing' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['buemi', 'hartley', 'hirakawa'], teamId: 'toyota-gazoo-racing' },
      ] }],
    },
  },
  'wec-2022-bahrain': {
    race: {
      overall: { driverIds: ['conway', 'kobayashi', 'jm-lopez'], teamId: 'toyota-gazoo-racing' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['conway', 'kobayashi', 'jm-lopez'], teamId: 'toyota-gazoo-racing' },
      ] }],
    },
  },
}
