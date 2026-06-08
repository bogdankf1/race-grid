import type { EventResults } from './types'

// Porsche Mobil 1 Supercup 2022 results
// Sources:
//   - Wikipedia: 2022 Porsche Supercup
//   - newsroom.porsche.com / motorsports.porsche.com (per-round race reports)
//   - racing.porsche.com results archive
// Verified: June 2026 (season concluded with Monza on 11 September 2022)
// Champion: Dylan Pereira (BWT Lechner Racing) — 3 wins (Imola, Spielberg, Spa), 149 pts
export const porscheSupercupResults2022: Record<string, EventResults> = {
  'porsche-supercup-2022-imola': {
    qualifying: {
      overall: { driverIds: ['pereira'], teamId: 'bwt-lechner-racing' },
    },
    race: {
      overall: { driverIds: ['pereira'], teamId: 'bwt-lechner-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pereira'], teamId: 'bwt-lechner-racing' },
          { position: 2, driverIds: ['ten-voorde'], teamId: 'gp-elite' },
          { position: 3, driverIds: ['harry-king'], teamId: 'bwt-lechner-racing' },
        ],
      }],
    },
  },
  'porsche-supercup-2022-monaco': {
    qualifying: {
      overall: { driverIds: ['ten-voorde'], teamId: 'gp-elite' },
    },
    race: {
      overall: { driverIds: ['ten-voorde'], teamId: 'gp-elite' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ten-voorde'], teamId: 'gp-elite' },
          { position: 2, driverIds: ['boccolacci'], teamId: 'martinet-by-almeras' },
          { position: 3, driverIds: ['heinrich'], teamId: 'ssr-huber-racing' },
        ],
      }],
    },
  },
  'porsche-supercup-2022-silverstone': {
    qualifying: {
      overall: { driverIds: ['ten-voorde'], teamId: 'gp-elite' },
    },
    race: {
      overall: { driverIds: ['heinrich'], teamId: 'ssr-huber-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heinrich'], teamId: 'ssr-huber-racing' },
          { position: 2, driverIds: ['ten-voorde'], teamId: 'gp-elite' },
          { position: 3, driverIds: ['harry-king'], teamId: 'bwt-lechner-racing' },
        ],
      }],
    },
  },
  'porsche-supercup-2022-spielberg': {
    qualifying: {
      overall: { driverIds: ['pereira'], teamId: 'bwt-lechner-racing' },
    },
    race: {
      overall: { driverIds: ['pereira'], teamId: 'bwt-lechner-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pereira'], teamId: 'bwt-lechner-racing' },
          { position: 2, driverIds: ['heinrich'], teamId: 'ssr-huber-racing' },
          { position: 3, driverIds: ['buus'], teamId: 'bwt-lechner-racing' },
        ],
      }],
    },
  },
  'porsche-supercup-2022-paul-ricard': {
    qualifying: {
      overall: { driverIds: ['buus'], teamId: 'bwt-lechner-racing' },
    },
    race: {
      overall: { driverIds: ['buus'], teamId: 'bwt-lechner-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['buus'], teamId: 'bwt-lechner-racing' },
          { position: 2, driverIds: ['harry-king'], teamId: 'bwt-lechner-racing' },
          { position: 3, driverIds: ['ten-voorde'], teamId: 'gp-elite' },
        ],
      }],
    },
  },
  'porsche-supercup-2022-spa': {
    qualifying: {
      overall: { driverIds: ['pereira'], teamId: 'bwt-lechner-racing' },
    },
    race: {
      overall: { driverIds: ['pereira'], teamId: 'bwt-lechner-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pereira'], teamId: 'bwt-lechner-racing' },
          { position: 2, driverIds: ['ten-voorde'], teamId: 'gp-elite' },
          { position: 3, driverIds: ['heinrich'], teamId: 'ssr-huber-racing' },
        ],
      }],
    },
  },
  'porsche-supercup-2022-zandvoort': {
    qualifying: {
      overall: { driverIds: ['marvin-klein'], teamId: 'clrt' },
    },
    race: {
      overall: { driverIds: ['marvin-klein'], teamId: 'clrt' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['marvin-klein'], teamId: 'clrt' },
          { position: 2, driverIds: ['pereira'], teamId: 'bwt-lechner-racing' },
          { position: 3, driverIds: ['ten-voorde'], teamId: 'gp-elite' },
        ],
      }],
    },
  },
  'porsche-supercup-2022-monza': {
    qualifying: {
      overall: { driverIds: ['marvin-klein'], teamId: 'clrt' },
    },
    race: {
      // Official post-penalty podium: Harry King was demoted from 2nd to 3rd after a 5-second time
      // penalty for contact, promoting ten Voorde to 2nd. Pereira originally 3rd was demoted to 5th
      // but still secured the championship title.
      overall: { driverIds: ['buus'], teamId: 'bwt-lechner-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['buus'], teamId: 'bwt-lechner-racing' },
          { position: 2, driverIds: ['ten-voorde'], teamId: 'gp-elite' },
          { position: 3, driverIds: ['harry-king'], teamId: 'bwt-lechner-racing' },
        ],
      }],
    },
  },
}
