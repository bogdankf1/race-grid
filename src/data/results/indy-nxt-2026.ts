import type { EventResults } from './types'

// Indy NXT 2026 results — Rounds 1-7 completed (St. Petersburg through Detroit)
// Sources: indynxt.com, Wikipedia "2026 Indy NXT", andrettiglobal.com race reports, pitdebrief.com
export const indyNxtResults2026: Record<string, EventResults> = {
  'indy-nxt-2026-wwtr': {
    qualifying: {
      overall: { driverIds: ['hughes-l'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hughes-l'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['de-tullio'], teamId: 'a-j-foyt-enterprises' },
          { position: 3, driverIds: ['m-taylor'], teamId: 'andretti-global' },
        ],
      }],
    },
    race: {
      // Rowe won from 24th (last) on the grid — a series record.
      overall: { driverIds: ['rowe'], teamId: 'abel-force-indy' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rowe'], teamId: 'abel-force-indy' },
          { position: 2, driverIds: ['de-tullio'], teamId: 'a-j-foyt-enterprises' },
          { position: 3, driverIds: ['pierson'], teamId: 'andretti-global' },
        ],
      }],
    },
  },
  'indy-nxt-2026-st-petersburg': {
    qualifying: {
      // Max Taylor pole — first NXT pole of his career
      overall: { driverIds: ['m-taylor'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['m-taylor'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['nikita-johnson'], teamId: 'cape-motorsports' },
          { position: 3, driverIds: ['kucharczyk'], teamId: 'hmd-motorsports' },
        ],
      }],
    },
    race: {
      // Johnson maiden NXT victory in front of largest grid since 2009
      overall: { driverIds: ['nikita-johnson'], teamId: 'cape-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nikita-johnson'], teamId: 'cape-motorsports' },
          { position: 2, driverIds: ['m-taylor'], teamId: 'andretti-global' },
          { position: 3, driverIds: ['kucharczyk'], teamId: 'hmd-motorsports' },
        ],
      }],
    },
  },
  'indy-nxt-2026-arlington': {
    qualifying: {
      // De Tullio first pole of season at inaugural Arlington street race
      overall: { driverIds: ['de-tullio'], teamId: 'a-j-foyt-enterprises' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['de-tullio'], teamId: 'a-j-foyt-enterprises' },
          { position: 2, driverIds: ['m-taylor'], teamId: 'andretti-global' },
          { position: 3, driverIds: ['e-fittipaldi'], teamId: 'hmd-motorsports' },
        ],
      }],
    },
    race: {
      // Max Taylor maiden win at the new Arlington street circuit
      overall: { driverIds: ['m-taylor'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['m-taylor'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['e-fittipaldi'], teamId: 'hmd-motorsports' },
          { position: 3, driverIds: ['kucharczyk'], teamId: 'hmd-motorsports' },
        ],
      }],
    },
  },
  'indy-nxt-2026-barber-1': {
    qualifying: {
      // De Tullio second consecutive pole
      overall: { driverIds: ['de-tullio'], teamId: 'a-j-foyt-enterprises' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['de-tullio'], teamId: 'a-j-foyt-enterprises' },
          { position: 2, driverIds: ['nikita-johnson'], teamId: 'cape-motorsports' },
          { position: 3, driverIds: ['e-fittipaldi'], teamId: 'hmd-motorsports' },
        ],
      }],
    },
    race: {
      // Johnson second win after first-lap chaos
      overall: { driverIds: ['nikita-johnson'], teamId: 'cape-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nikita-johnson'], teamId: 'cape-motorsports' },
          { position: 2, driverIds: ['e-fittipaldi'], teamId: 'hmd-motorsports' },
          { position: 3, driverIds: ['kucharczyk'], teamId: 'hmd-motorsports' },
        ],
      }],
    },
  },
  'indy-nxt-2026-barber-2': {
    race: {
      // De Tullio converts pole to maiden NXT win
      overall: { driverIds: ['de-tullio'], teamId: 'a-j-foyt-enterprises' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['de-tullio'], teamId: 'a-j-foyt-enterprises' },
          { position: 2, driverIds: ['m-taylor'], teamId: 'andretti-global' },
          { position: 3, driverIds: ['nikita-johnson'], teamId: 'cape-motorsports' },
        ],
      }],
    },
  },
  'indy-nxt-2026-indianapolis-gp-1': {
    qualifying: {
      // De Tullio extends pole streak; qualifying covers both Indy races
      overall: { driverIds: ['de-tullio'], teamId: 'a-j-foyt-enterprises' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['de-tullio'], teamId: 'a-j-foyt-enterprises' },
          { position: 2, driverIds: ['m-taylor'], teamId: 'andretti-global' },
          { position: 3, driverIds: ['e-fittipaldi'], teamId: 'hmd-motorsports' },
        ],
      }],
    },
    race: {
      // Wet-and-wild Race 1; Fittipaldi first NXT win
      overall: { driverIds: ['e-fittipaldi'], teamId: 'hmd-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['e-fittipaldi'], teamId: 'hmd-motorsports' },
          { position: 2, driverIds: ['m-taylor'], teamId: 'andretti-global' },
          { position: 3, driverIds: ['nikita-johnson'], teamId: 'cape-motorsports' },
        ],
      }],
    },
  },
  'indy-nxt-2026-indianapolis-gp-2': {
    race: {
      // Race 2 pole sitter Max Taylor leads early; Kucharczyk maiden NXT win
      overall: { driverIds: ['kucharczyk'], teamId: 'hmd-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kucharczyk'], teamId: 'hmd-motorsports' },
          { position: 2, driverIds: ['m-taylor'], teamId: 'andretti-global' },
          { position: 3, driverIds: ['e-fittipaldi'], teamId: 'hmd-motorsports' },
        ],
      }],
    },
  },
  'indy-nxt-2026-detroit': {
    qualifying: {
      // De Tullio fifth pole of the season
      overall: { driverIds: ['de-tullio'], teamId: 'a-j-foyt-enterprises' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['de-tullio'], teamId: 'a-j-foyt-enterprises' },
          { position: 2, driverIds: ['e-fittipaldi'], teamId: 'hmd-motorsports' },
          { position: 3, driverIds: ['m-taylor'], teamId: 'andretti-global' },
        ],
      }],
    },
    race: {
      // Fittipaldi second win to take championship lead; Rowe career-best podium
      overall: { driverIds: ['e-fittipaldi'], teamId: 'hmd-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['e-fittipaldi'], teamId: 'hmd-motorsports' },
          { position: 2, driverIds: ['rowe'], teamId: 'abel-motorsports' },
          { position: 3, driverIds: ['kucharczyk'], teamId: 'hmd-motorsports' },
        ],
      }],
    },
  },
}
