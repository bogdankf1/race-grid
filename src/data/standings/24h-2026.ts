import type { SeasonStandings } from './types'

// 24H Series 2026 standings — Michelin 24H Series Europe after 2 rounds (Mugello, Spa)
// Source (primary): 24hseries.com — https://dashboard.24hseries.com/vendors/24hseries/standings.php?championship=12
// Cross-reference: en.wikipedia.org/wiki/2026_24H_Series, pitdebrief.com, sportscar365.com
//
// GT3 (primary) preserved from prior update — unchanged.
//
// Sub-class coverage (Michelin 24H Series Europe 2026):
//   - GT4: NO entries in the 2026 European championship — class not contested. Skipped entirely.
//   - TCR: NOT a 2026 24H Series class. Touring car field runs under TCE/TCX only. Skipped entirely.
//   - GTX: data verified (Vortex #701 dominant — 80 pts) but ZERO drivers/teams in repo have IDs
//     (philippe-bonnel, julien-boillot, alexandre-de-bernardinis, arnaud-gomez, olivier-gomez and
//     team Vortex not in drivers.ts / teams.ts). Skipped per "no new IDs" rule.
//   - TCX: data verified but ZERO drivers/teams in repo have IDs (pia-ohlsson, gino-rocchio,
//     filippo-tornaghi, asbest-racing, not-only-motorsport not in repo). Skipped per "no new IDs" rule.
//   - 992 (Porsche 911 GT3 Cup): partial coverage — three Red Camel-Jordans.nl drivers and one team
//     verifiable. Included below as the only meaningful sub-class with mappable IDs.
//   - 992-AM: only al-khelaifi has a driver ID; no QMMF team ID; < 3 verifiable driver rows mappable.
//     Skipped per threshold rule.
export const twentyfourhStandings2026: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'pierre-kaffer', teamId: 'sainteloc-junior-team', points: 50, wins: 1 },
    { position: 2, driverId: 'elia-erhart', teamId: 'sainteloc-junior-team', points: 50, wins: 1 },
    { position: 3, driverId: 'sherwood', teamId: 'optimum-motorsport', points: 40, wins: 1 },
    { position: 4, driverId: 'ralf-bohn', teamId: 'herberth-motorsport', points: 36, wins: 0 },
    { position: 5, driverId: 'alfred-renauer', teamId: 'herberth-motorsport', points: 32, wins: 0 },
    { position: 6, driverId: 'bachler', teamId: 'herberth-motorsport', points: 28, wins: 0 },
  ],
  constructors: [
    { position: 1, teamId: 'sainteloc-junior-team', points: 50, wins: 1 },
    { position: 2, teamId: 'optimum-motorsport', points: 40, wins: 1 },
    { position: 3, teamId: 'herberth-motorsport', points: 36, wins: 0 },
    { position: 4, teamId: 'ebimotors', points: 22, wins: 0 },
    { position: 5, teamId: 'cp-racing', points: 18, wins: 0 },
  ],
  className: 'GT3',
  otherClasses: [
    {
      className: '992',
      // Source: dashboard.24hseries.com/vendors/24hseries/standings.php?championship=12 (after Round 2 Spa)
      // Skipped rows (driver/team IDs not in repo):
      //   - Pos 1 drivers: Martin Rump (EST), Conrad Tox Leveau (DNK) — 80 pts, team Mühlner Motorsport #921 (team also missing).
      //   - Pos 2 drivers: Ahmed Al-Emadi (QAT), Faesal Al Yafei (QAT) — 68 pts, team QMMF by HRT Performance #974 (team missing).
      //     Abdulla Ali Al-Khelaifi (al-khelaifi) HAS a driver ID but no QMMF team ID — also skipped.
      //   - Pos 3 driver: Fabian Danz (CHE) — 60 pts (Red Camel-Jordans.nl) — driver ID missing.
      //   - Pos 4+: Sebastien Lajoux, Ivan Jacoma, Valerio Presezzi, Francesco Fenici, Lionel Amrouche, Julian Hanses,
      //     Tim Scheerbarth, Paul Meijer, Tracy Krohn, Niclas Jönsson, Philip Hamprecht, etc. — all missing IDs.
      //   - Team standings: Mühlner Motorsport (80), QMMF by HRT (68), The Driving Experiences (48), Seblajoux,
      //     RPM Racing, Chazel, Holmgaard, HRT Performance, MM Racing, Crubilé Sport, Escuderia Faraon — all missing IDs.
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
