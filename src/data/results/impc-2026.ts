import type { EventResults } from './types'

// IMSA Michelin Pilot Challenge 2026 results — verified 2026-06-08
// Sources:
//   - en.wikipedia.org/wiki/2026_Michelin_Pilot_Challenge
//   - imsa.com/news per-event race reports
//   - sportscar365.com IMPC race reports
//   - dailysportscar.com, racer.com, speedsport.com, frontstretch.com
//
// Multi-class series: GS (GT4) overall winner is the de facto race overall winner.
// Pole positions captured separately for GS and TCR where confirmed.
export const impcResults2026: Record<string, EventResults> = {
  // Round 1 — BMW M Endurance Challenge at Daytona (Jan 23, 4H)
  'impc-2026-daytona': {
    qualifying: {
      // GS pole: Sean McAlister (#39 CarBahn with Peregrine Racing BMW M4 GT4) — 1:52.842
      // TCR pole: Harry Gottsacker (#33 Bryan Herta Autosport Hyundai Elantra N TCR) — 1:56.757
      overall: { driverIds: ['mcalister-s'], teamId: 'carbahn-peregrine' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['mcalister-s'], teamId: 'carbahn-peregrine' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['gottsacker'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
    endurance: {
      // Overall winner = GS winner: #71 Rebel Rock Racing Aston Martin Vantage AMR GT4 Evo
      overall: { driverIds: ['liddell', 'depew', 'davis-a'], teamId: 'rebel-rock-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['liddell', 'depew', 'davis-a'], teamId: 'rebel-rock-racing' },
            { position: 2, driverIds: ['hampton-d', 'merrill', 'sarukhanyan'], teamId: 'circle-h-racing' },
            { position: 3, driverIds: ['ward', 'arrow'], teamId: 'winward-racing' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['brown-p', 'dupont'], teamId: 'bryan-herta-autosport' },
            { position: 2, driverIds: ['lawrence-c', 'gilsinger', 'chambers-t'], teamId: 'hart' },
            { position: 3, driverIds: ['buchan', 'filippi', 'morris'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
  },

  // Round 2 — Alan Jay Automotive Network 120 at Sebring (Mar 20, 2H)
  'impc-2026-sebring': {
    qualifying: {
      // GS pole: Kiko Porto (#50 RAFA Racing Toyota GR Supra GT4 EVO2) — 2:09.089
      // TCR pole: Tim Lewis Jr. (#84 KMW Motorsports with TMR Engineering Honda Civic Type-R TCR) — 2:11.720
      overall: { driverIds: ['porto'], teamId: 'rafa-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['porto'], teamId: 'rafa-racing' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['lewis-tim'], teamId: 'kmw-motorsports' },
          ],
        },
      ],
    },
    race: {
      // Overall winner = GS winner: #44 Ibiza Farm Motorsport McLaren Artura GT4
      overall: { driverIds: ['cooper', 'uretsky'], teamId: 'ibiza-farm-motorsport' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['cooper', 'uretsky'], teamId: 'ibiza-farm-motorsport' },
            { position: 2, driverIds: ['arrow', 'ward'], teamId: 'winward-racing' },
            { position: 3, driverIds: ['machavern', 'mars'], teamId: 'turner-motorsport' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['gonzalez-t', 'girolami'], teamId: 'victor-gonzalez-racing' },
            { position: 2, driverIds: ['gottsacker', 'bergstein'], teamId: 'bryan-herta-autosport' },
            { position: 3, driverIds: ['filippi', 'morris'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
  },

  // Round 3 — WeatherTech Raceway Laguna Seca 120 (May 2, 2H)
  'impc-2026-laguna-seca': {
    qualifying: {
      // TCR pole: Tyler Maxson / Tyler Gonzalez (#27 Copeland Motorsports Hyundai Veloster N TCR)
      //   — elevated to pole after post-quali technical inspection
      // GS pole not confirmed in publicly available sources at time of verification.
      overall: { driverIds: ['maxson-t'], teamId: 'copeland-motorsports' },
      classes: [
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['maxson-t'], teamId: 'copeland-motorsports' },
          ],
        },
      ],
    },
    race: {
      // Overall winner = GS winner: #95 Turner Motorsport BMW M4 GT4 EVO
      overall: { driverIds: ['machavern', 'mars'], teamId: 'turner-motorsport' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['machavern', 'mars'], teamId: 'turner-motorsport' },
            { position: 2, driverIds: ['burkhard', 'scully'], teamId: 'czabok-simpson-racing' },
            { position: 3, driverIds: ['cicero', 'noaker'], teamId: 'mccumbee-mcaleer-racing' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['filippi', 'morris'], teamId: 'bryan-herta-autosport' },
            { position: 2, driverIds: ['brown-p', 'dupont'], teamId: 'bryan-herta-autosport' },
            { position: 3, driverIds: ['wittmer-k', 'montour'], teamId: 'mmg' },
          ],
        },
      ],
    },
  },

  // Round 4 — O'Reilly Auto Parts 4 Hours of Mid-Ohio (Jun 7, 4H)
  'impc-2026-mid-ohio': {
    qualifying: {
      // GS pole: Jeff Westphal / Sean McAlister (#39 CarBahn with Peregrine Racing BMW M4 GT4 EVO) — Motul Pole Award
      // TCR pole: Aston Martin set GS pace per SPEED SPORT — TCR pole not confirmed in sources
      overall: { driverIds: ['westphal', 'mcalister-s'], teamId: 'carbahn-peregrine' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['westphal', 'mcalister-s'], teamId: 'carbahn-peregrine' },
          ],
        },
      ],
    },
    endurance: {
      // Overall winner = GS winner: #44 Ibiza Farm Motorsport McLaren Artura GT4
      overall: { driverIds: ['cooper', 'uretsky'], teamId: 'ibiza-farm-motorsport' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['cooper', 'uretsky'], teamId: 'ibiza-farm-motorsport' },
            { position: 2, driverIds: ['machavern', 'mars'], teamId: 'turner-motorsport' },
            { position: 3, driverIds: ['westphal', 'mcalister-s'], teamId: 'carbahn-peregrine' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['wittmer-k', 'montour', 'yoshihara'], teamId: 'mmg' },
            { position: 2, driverIds: ['brown-p', 'dupont'], teamId: 'bryan-herta-autosport' },
            { position: 3, driverIds: ['wilkins-m', 'aust-m'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
  },
}
