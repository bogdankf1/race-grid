import type { SeasonStandings } from './types'

// 24H Series 2026 standings — Michelin 24H Series Europe after 3 rounds (Mugello, Spa, 12H Paul Ricard)
// GT3 source: dashboard.24hseries.com (team points consistent across pulls), pitdebrief.com, sportscar365.com.
// Wins counted from race results data (overall GT3 winners: Saintéloc #18 @ Mugello, Optimum @ Spa, HOFOR #11 @ Paul Ricard).
// Driver rows use each car's registered lead driver. GetSpeed JR286 (#286, 62 pts) omitted — shares the
// 'getspeed' team id with the #28 entry and has no distinct mappable lead-driver id.
//
// NOTE: the 992 sub-class table below still reflects the post-Round-2 (Spa) state — the Paul Ricard
// 992 result (Red Camel-Jordans.nl win) is not yet reflected, as the full 992 points table after R3
// could not be cleanly sourced with mappable IDs. GT4/TCR/GTX/TCX remain unmapped (no repo IDs).
export const twentyfourhStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'paque', teamId: 'getspeed', points: 78, wins: 0 },
    { position: 2, driverId: 'kratz', teamId: 'hofor-racing', points: 72, wins: 1 },
    { position: 3, driverId: 'pierre-kaffer', teamId: 'sainteloc-junior-team', points: 72, wins: 1 },
    { position: 4, driverId: 'de-breucker', teamId: 'ajith-redant-racing', points: 66, wins: 0 },
    { position: 5, driverId: 'jans', teamId: 'proton-competition', points: 52, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'getspeed', points: 78, wins: 0 },
    { position: 2, teamId: 'hofor-racing', points: 72, wins: 1 },
    { position: 3, teamId: 'sainteloc-junior-team', points: 72, wins: 1 },
    { position: 4, teamId: 'ajith-redant-racing', points: 66, wins: 0 },
    { position: 5, teamId: 'proton-competition', points: 52, wins: 0 },
  ],
  className: 'GT3',
  otherClasses: [
    {
      className: '992',
      // Source: dashboard.24hseries.com (after Round 2 Spa) — not yet refreshed for Paul Ricard.
      // Only the Red Camel-Jordans.nl crew has mappable driver/team IDs; other 992 entries skipped.
      drivers: [
        { position: 3, driverId: 'ivo-breukers', teamId: 'red-camel-jordans', points: 60, wins: 0 },
        { position: 3, driverId: 'rik-breukers', teamId: 'red-camel-jordans', points: 60, wins: 0 },
        { position: 3, driverId: 'luc-breukers', teamId: 'red-camel-jordans', points: 60, wins: 0 },
      ],
      constructors: [
        { position: 3, teamId: 'red-camel-jordans', points: 60, wins: 0 },
      ],
    },
  ],
}
