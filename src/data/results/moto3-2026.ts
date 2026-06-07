import type { EventResults } from './types'

// Moto3 2026 results — Rounds 1-7 completed (Thailand through Italy at Mugello)
// Sources: crash.net, motomatters.com, motogp.com, BikeSportNews, Wikipedia
export const moto3Results2026: Record<string, EventResults> = {
  'moto3-2026-thailand': {
    qualifying: {
      // Almansa pole with new lap record after switching from Honda to KTM
      overall: { driverIds: ['almansa'], teamId: 'intact-gp-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['almansa'], teamId: 'intact-gp-moto3' },
          { position: 2, driverIds: ['carpe'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 3, driverIds: ['fernandez-ad'], teamId: 'leopard-racing' },
        ],
      }],
    },
    race: {
      // Almansa beat Quiles by 0.003s in a season-opener thriller
      overall: { driverIds: ['almansa'], teamId: 'intact-gp-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['almansa'], teamId: 'intact-gp-moto3' },
          { position: 2, driverIds: ['quiles'], teamId: 'aspar-moto3' },
          { position: 3, driverIds: ['perrone'], teamId: 'red-bull-ktm-tech3-moto3' },
        ],
      }],
    },
  },
  'moto3-2026-brazil': {
    qualifying: {
      // Esteban maiden pole with new track record amid sinkhole-disrupted session
      overall: { driverIds: ['esteban-j'], teamId: 'levelup-mta' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['esteban-j'], teamId: 'levelup-mta' },
          { position: 2, driverIds: ['perrone'], teamId: 'red-bull-ktm-tech3-moto3' },
          { position: 3, driverIds: ['danish'], teamId: 'mt-helmets-msi-moto3' },
        ],
      }],
    },
    race: {
      // 5-lap red-flagged race; Pratama first Indonesian GP podium
      overall: { driverIds: ['quiles'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['quiles'], teamId: 'aspar-moto3' },
          { position: 2, driverIds: ['morelli-m'], teamId: 'aspar-moto3' },
          { position: 3, driverIds: ['pratama-v'], teamId: 'honda-team-asia-moto3' },
        ],
      }],
    },
  },
  'moto3-2026-usa': {
    qualifying: {
      // Carpe pole with new lap record at COTA
      overall: { driverIds: ['carpe'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['carpe'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['o-gorman'], teamId: 'sic58-squadra-corse' },
          { position: 3, driverIds: ['perrone'], teamId: 'red-bull-ktm-tech3-moto3' },
        ],
      }],
    },
    race: {
      // Pini debut win at Austin in a last-lap thriller
      overall: { driverIds: ['pini'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pini'], teamId: 'leopard-racing' },
          { position: 2, driverIds: ['quiles'], teamId: 'aspar-moto3' },
          { position: 3, driverIds: ['perrone'], teamId: 'red-bull-ktm-tech3-moto3' },
        ],
      }],
    },
  },
  'moto3-2026-spain': {
    qualifying: {
      // Quiles first pole of the season after dominating every Jerez session
      overall: { driverIds: ['quiles'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['quiles'], teamId: 'aspar-moto3' },
          { position: 2, driverIds: ['munoz-da'], teamId: 'intact-gp-moto3' },
          { position: 3, driverIds: ['carpe'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
    race: {
      // All-Spanish podium at Jerez
      overall: { driverIds: ['quiles'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['quiles'], teamId: 'aspar-moto3' },
          { position: 2, driverIds: ['fernandez-ad'], teamId: 'leopard-racing' },
          { position: 3, driverIds: ['munoz-da'], teamId: 'intact-gp-moto3' },
        ],
      }],
    },
  },
  'moto3-2026-france': {
    qualifying: {
      // Fernández pole running solo, no tow needed
      overall: { driverIds: ['fernandez-ad'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-ad'], teamId: 'leopard-racing' },
          { position: 2, driverIds: ['quiles'], teamId: 'aspar-moto3' },
          { position: 3, driverIds: ['kelso'], teamId: 'gryd-mlav-racing' },
        ],
      }],
    },
    race: {
      // Wet, chaotic race — Quiles led every lap
      overall: { driverIds: ['quiles'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['quiles'], teamId: 'aspar-moto3' },
          { position: 2, driverIds: ['fernandez-ad'], teamId: 'leopard-racing' },
          { position: 3, driverIds: ['bertelle'], teamId: 'levelup-mta' },
        ],
      }],
    },
  },
  'moto3-2026-catalunya': {
    qualifying: {
      // Perrone pole — 16 riders within 0.7s
      overall: { driverIds: ['perrone'], teamId: 'red-bull-ktm-tech3-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['perrone'], teamId: 'red-bull-ktm-tech3-moto3' },
          { position: 2, driverIds: ['munoz-da'], teamId: 'intact-gp-moto3' },
          { position: 3, driverIds: ['uriarte-b'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
    race: {
      // All-Spanish, all-KTM podium — Quiles won by 0.094s
      overall: { driverIds: ['quiles'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['quiles'], teamId: 'aspar-moto3' },
          { position: 2, driverIds: ['carpe'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 3, driverIds: ['munoz-da'], teamId: 'intact-gp-moto3' },
        ],
      }],
    },
  },
  'moto3-2026-italy': {
    qualifying: {
      // Almansa second pole of season — first repeat pole-sitter of 2026
      overall: { driverIds: ['almansa'], teamId: 'intact-gp-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['almansa'], teamId: 'intact-gp-moto3' },
          { position: 2, driverIds: ['danish'], teamId: 'mt-helmets-msi-moto3' },
          { position: 3, driverIds: ['kelso'], teamId: 'gryd-mlav-racing' },
        ],
      }],
    },
    race: {
      // Uriarte debut win on the final lap; all-KTM podium; Danish maiden podium
      overall: { driverIds: ['uriarte-b'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['uriarte-b'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['carpe'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 3, driverIds: ['danish'], teamId: 'mt-helmets-msi-moto3' },
        ],
      }],
    },
  },
}
