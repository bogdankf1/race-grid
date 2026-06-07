import type { EventResults } from './types'

// Porsche Mobil 1 Supercup 2025 results
// Sources:
//   - racing.porsche.com/mobil-1-supercup/results-season-2025
//   - newsroom.porsche.com (per-round race reports)
//   - Wikipedia: 2025 Porsche Supercup
// Verified: June 2026 (season concluded with Monza on 7 September 2025)
// Champion: Alessandro Ghiretti (Schumacher CLRT) — 4 wins, 130.5 pts
export const porscheSupercupResults2025: Record<string, EventResults> = {
  'porsche-supercup-2025-imola': {
    qualifying: {
      overall: { driverIds: ['oeverhaus'], teamId: 'proton-huber-competition' },
    },
    race: {
      overall: { driverIds: ['oeverhaus'], teamId: 'proton-huber-competition' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['oeverhaus'], teamId: 'proton-huber-competition' },
          { position: 2, driverIds: ['levi-a'], teamId: 'gp-elite' },
          { position: 3, driverIds: ['haverkort'], teamId: 'gp-elite' },
        ],
      }],
    },
  },
  'porsche-supercup-2025-monaco': {
    qualifying: {
      overall: { driverIds: ['robert-de-haan'], teamId: 'bwt-lechner-racing' },
    },
    race: {
      overall: { driverIds: ['robert-de-haan'], teamId: 'bwt-lechner-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['robert-de-haan'], teamId: 'bwt-lechner-racing' },
          { position: 2, driverIds: ['oeverhaus'], teamId: 'proton-huber-competition' },
          { position: 3, driverIds: ['ghiretti'], teamId: 'schumacher-clrt' },
        ],
      }],
    },
  },
  'porsche-supercup-2025-barcelona': {
    qualifying: {
      overall: { driverIds: ['flynt-schuring'], teamId: 'schumacher-clrt' },
    },
    race: {
      overall: { driverIds: ['ghiretti'], teamId: 'schumacher-clrt' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ghiretti'], teamId: 'schumacher-clrt' },
          { position: 2, driverIds: ['robert-de-haan'], teamId: 'bwt-lechner-racing' },
          { position: 3, driverIds: ['marvin-klein'], teamId: 'bwt-lechner-racing' },
        ],
      }],
    },
  },
  'porsche-supercup-2025-spielberg': {
    qualifying: {
      overall: { driverIds: ['robert-de-haan'], teamId: 'bwt-lechner-racing' },
    },
    race: {
      overall: { driverIds: ['marvin-klein'], teamId: 'bwt-lechner-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['marvin-klein'], teamId: 'bwt-lechner-racing' },
          { position: 2, driverIds: ['robert-de-haan'], teamId: 'bwt-lechner-racing' },
          { position: 3, driverIds: ['ghiretti'], teamId: 'schumacher-clrt' },
        ],
      }],
    },
  },
  'porsche-supercup-2025-spa': {
    qualifying: {
      overall: { driverIds: ['ghiretti'], teamId: 'schumacher-clrt' },
    },
    race: {
      overall: { driverIds: ['ghiretti'], teamId: 'schumacher-clrt' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ghiretti'], teamId: 'schumacher-clrt' },
          { position: 2, driverIds: ['flynt-schuring'], teamId: 'schumacher-clrt' },
          { position: 3, driverIds: ['robert-de-haan'], teamId: 'bwt-lechner-racing' },
        ],
      }],
    },
  },
  'porsche-supercup-2025-hungaroring': {
    qualifying: {
      overall: { driverIds: ['jaubert-m'], teamId: 'martinet-by-almeras' },
    },
    race: {
      overall: { driverIds: ['jaubert-m'], teamId: 'martinet-by-almeras' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['jaubert-m'], teamId: 'martinet-by-almeras' },
          { position: 2, driverIds: ['flynt-schuring'], teamId: 'schumacher-clrt' },
          { position: 3, driverIds: ['levi-a'], teamId: 'gp-elite' },
        ],
      }],
    },
  },
  'porsche-supercup-2025-zandvoort': {
    qualifying: {
      overall: { driverIds: ['flynt-schuring'], teamId: 'schumacher-clrt' },
    },
    race: {
      overall: { driverIds: ['ghiretti'], teamId: 'schumacher-clrt' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ghiretti'], teamId: 'schumacher-clrt' },
          { position: 2, driverIds: ['robert-de-haan'], teamId: 'bwt-lechner-racing' },
          { position: 3, driverIds: ['flynt-schuring'], teamId: 'schumacher-clrt' },
        ],
      }],
    },
  },
  'porsche-supercup-2025-monza': {
    qualifying: {
      overall: { driverIds: ['marvin-klein'], teamId: 'bwt-lechner-racing' },
    },
    race: {
      overall: { driverIds: ['boerekamps'], teamId: 'gp-elite' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['boerekamps'], teamId: 'gp-elite' },
          { position: 2, driverIds: ['ghiretti'], teamId: 'schumacher-clrt' },
          { position: 3, driverIds: ['jaubert-m'], teamId: 'martinet-by-almeras' },
        ],
      }],
    },
  },
}
