import type { EventResults } from './types'

// WEC 2024 Hypercar results — verified from fiawec.com, Wikipedia, Porsche Newsroom
// Champions: Estre/Lotterer/Vanthoor (Porsche Penske #6) — 152 pts
export const wecResults2024: Record<string, EventResults> = {
  'wec-2024-qatar': {
    race: {
      overall: { driverIds: ['estre', 'lotterer', 'vanthoor'], teamId: 'porsche-penske' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['estre', 'lotterer', 'vanthoor'], teamId: 'porsche-penske' },
      ] }],
    },
  },
  'wec-2024-imola': {
    race: {
      overall: { driverIds: ['conway', 'kobayashi', 'de-vries'], teamId: 'toyota-gazoo-racing' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['conway', 'kobayashi', 'de-vries'], teamId: 'toyota-gazoo-racing' },
      ] }],
    },
  },
  'wec-2024-spa': {
    race: {
      overall: { driverIds: ['ilott', 'stevens'], teamId: 'jota' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['ilott', 'stevens'], teamId: 'jota' },
      ] }],
    },
  },
  'wec-2024-le-mans': {
    race: {
      overall: { driverIds: ['fuoco', 'molina', 'nielsen'], teamId: 'ferrari-af-corse' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['fuoco', 'molina', 'nielsen'], teamId: 'ferrari-af-corse' },
      ] }],
    },
  },
  'wec-2024-sao-paulo': {
    race: {
      overall: { driverIds: ['buemi', 'hartley', 'hirakawa'], teamId: 'toyota-gazoo-racing' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['buemi', 'hartley', 'hirakawa'], teamId: 'toyota-gazoo-racing' },
      ] }],
    },
  },
  'wec-2024-cota': {
    race: {
      overall: { driverIds: ['kubica', 'shwartzman', 'ye'], teamId: 'af-corse' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['kubica', 'shwartzman', 'ye'], teamId: 'af-corse' },
      ] }],
    },
  },
  'wec-2024-fuji': {
    race: {
      overall: { driverIds: ['estre', 'lotterer', 'vanthoor'], teamId: 'porsche-penske' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['estre', 'lotterer', 'vanthoor'], teamId: 'porsche-penske' },
      ] }],
    },
  },
  'wec-2024-bahrain': {
    race: {
      overall: { driverIds: ['buemi', 'hartley', 'hirakawa'], teamId: 'toyota-gazoo-racing' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['buemi', 'hartley', 'hirakawa'], teamId: 'toyota-gazoo-racing' },
      ] }],
    },
  },
}
