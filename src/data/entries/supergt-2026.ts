import type { EntryItem } from './types'

// Super GT 2026 entries
// GT500: full grid below.
// GT300: only crews where ALL drivers AND the team map to existing IDs are listed.
// Sources:
//   https://supergt.net/en/teams_and_drivers
//   https://supergt.net/en/teams_and_drivers?gt_class=gt300
export const supergtEntries2026: EntryItem[] = [
  // GT500 — Honda
  { driverId: 'ohta', teamId: 'team-hrc-arta', carNumber: 8, class: 'GT500' },
  { driverId: 'otsu', teamId: 'team-hrc-arta', carNumber: 8, class: 'GT500' },
  { driverId: 'nojiri', teamId: 'arta-mugen', carNumber: 16, class: 'GT500' },
  { driverId: 'sato', teamId: 'arta-mugen', carNumber: 16, class: 'GT500' },
  { driverId: 'tsukakoshi', teamId: 'astemo-real-racing', carNumber: 17, class: 'GT500' },
  { driverId: 'nomura', teamId: 'astemo-real-racing', carNumber: 17, class: 'GT500' },
  { driverId: 'okusa', teamId: 'modulo-nakajima', carNumber: 64, class: 'GT500' },
  { driverId: 'fraga', teamId: 'modulo-nakajima', carNumber: 64, class: 'GT500' },
  { driverId: 'yamamoto', teamId: 'stanley-kunimitsu', carNumber: 100, class: 'GT500' },
  { driverId: 'makino', teamId: 'stanley-kunimitsu', carNumber: 100, class: 'GT500' },
  // GT500 — Nissan
  { driverId: 'hiramine', teamId: 'team-impul', carNumber: 12, class: 'GT500' },
  { driverId: 'baguette', teamId: 'team-impul', carNumber: 12, class: 'GT500' },
  { driverId: 'chiyo', teamId: 'nismo', carNumber: 23, class: 'GT500' },
  { driverId: 'takaboshi', teamId: 'nismo', carNumber: 23, class: 'GT500' },
  { driverId: 'natori', teamId: 'kondo-racing-nissan', carNumber: 24, class: 'GT500' },
  { driverId: 'miyake', teamId: 'kondo-racing-nissan', carNumber: 24, class: 'GT500' },
  // GT500 — Toyota
  { driverId: 'fukuzumi', teamId: 'tgr-eneos-rookie', carNumber: 14, class: 'GT500' },
  { driverId: 'oshima', teamId: 'tgr-eneos-rookie', carNumber: 14, class: 'GT500' },
  { driverId: 'kunimoto', teamId: 'tgr-wedssport-bandoh', carNumber: 19, class: 'GT500' },
  { driverId: 'sakaguchi', teamId: 'tgr-wedssport-bandoh', carNumber: 19, class: 'GT500' },
  { driverId: 'tsuboi', teamId: 'tgr-au-toms', carNumber: 36, class: 'GT500' },
  { driverId: 'yamashita', teamId: 'tgr-au-toms', carNumber: 36, class: 'GT500' },
  { driverId: 'sasahara', teamId: 'tgr-deloitte-toms', carNumber: 37, class: 'GT500' },
  { driverId: 'alesi', teamId: 'tgr-deloitte-toms', carNumber: 37, class: 'GT500' },
  { driverId: 'oyu', teamId: 'keeper-cerumo', carNumber: 38, class: 'GT500' },
  { driverId: 'r-kobayashi', teamId: 'keeper-cerumo', carNumber: 38, class: 'GT500' },
  { driverId: 'sekiguchi', teamId: 'tgr-sard', carNumber: 39, class: 'GT500' },
  { driverId: 'fenestraz', teamId: 'tgr-sard', carNumber: 39, class: 'GT500' },
  // GT300 — mappable crews only (see file header)
  // #31 apr — LEXUS LC500h
  { driverId: 'kotaka', teamId: 'apr', carNumber: 31, class: 'GT300' },
  { driverId: 'koyama', teamId: 'apr', carNumber: 31, class: 'GT300' },
  { driverId: 'wurz', teamId: 'apr', carNumber: 31, class: 'GT300' },
  // #56 KONDO Racing — NISSAN GT-R NISMO GT3 (co-driver J.P. de Oliveira skipped — registry 'oliveira' is Miguel Oliveira, a different driver)
  { driverId: 'kimura', teamId: 'kondo-racing', carNumber: 56, class: 'GT300' },
  // #777 D'station Racing — Aston Martin Vantage GT3 EVO (co-driver Charlie Fagg skipped — no driver ID)
  { driverId: 'fujii', teamId: 'd-station-racing', carNumber: 777, class: 'GT300' },
  // Other GT300 crews omitted: drivers and/or team IDs missing from the registry
  // (no new IDs created per task constraints). Skipped crews include #2 INGING (Tsutsumi/Urabe),
  // #4 GOODSMILE (Taniguchi/Kataoka), #65 LEON (Gamou/Suganami), #666 7x7 (Müller/Fujinami),
  // #96 K-tunes (Nitta/Takagi), #52 SAITAMA Green Brave (Yoshida/Nonaka), plus all sub-top-10 entries.
]
