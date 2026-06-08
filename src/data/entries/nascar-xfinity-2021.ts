import type { EntryItem } from './types'

// NASCAR Xfinity Series 2021 full-season entries
// Source: Wikipedia "2021 NASCAR Xfinity Series", jayski.com 2021 team & driver chart, tobychristie.com 2021 chart
// Only full-season regulars listed; Cup-series drivers (Kyle Busch, Bell, Larson, Truex Jr., Earnhardt Jr.)
// made guest starts in the JGR #54 (or other rides) and appear only in results.
// Verification date: 2026-06-07.
export const nascarXfinityEntries2021: EntryItem[] = [
  // JR Motorsports (Chevrolet)
  { driverId: 'annett', teamId: 'jr-motorsports', carNumber: 1 },
  { driverId: 'allgaier', teamId: 'jr-motorsports', carNumber: 7 },
  { driverId: 'berry', teamId: 'jr-motorsports', carNumber: 8 },
  { driverId: 'gragson', teamId: 'jr-motorsports', carNumber: 9 },
  // Joe Gibbs Racing (Toyota)
  { driverId: 'hemric', teamId: 'joe-gibbs-racing', carNumber: 18 },
  { driverId: 'jones-brandon', teamId: 'joe-gibbs-racing', carNumber: 19 },
  { driverId: 'burton-h', teamId: 'joe-gibbs-racing', carNumber: 20 },
  // Team Penske (Ford)
  { driverId: 'cindric', teamId: 'team-penske', carNumber: 22 },
  // Kaulig Racing (Chevrolet)
  { driverId: 'burton-jeb', teamId: 'kaulig-racing', carNumber: 10 },
  { driverId: 'haley', teamId: 'kaulig-racing', carNumber: 11 },
  { driverId: 'allmendinger', teamId: 'kaulig-racing', carNumber: 16 },
  // Richard Childress Racing (Chevrolet)
  { driverId: 'snider', teamId: 'richard-childress-racing', carNumber: 2 },
  // Stewart-Haas Racing (Ford)
  { driverId: 'herbst', teamId: 'stewart-haas-racing', carNumber: 98 },
  // Our Motorsports (Chevrolet)
  { driverId: 'moffitt', teamId: 'our-motorsports', carNumber: 2 },
  // Brandonbilt Motorsports (Chevrolet)
  { driverId: 'brown-brandon', teamId: 'brandonbilt-motorsports', carNumber: 68 },
  // RSS Racing (Ford)
  { driverId: 'sieg-r', teamId: 'rss-racing', carNumber: 39 },
  // Mike Harmon Racing (Chevrolet)
  { driverId: 'weatherman', teamId: 'mike-harmon-racing', carNumber: 47 },
  { driverId: 'currey', teamId: 'mike-harmon-racing', carNumber: 74 },
  // Jeremy Clements Racing (Chevrolet)
  { driverId: 'clements-jeremy', teamId: 'jeremy-clements-racing', carNumber: 51 },
  // JD Motorsports (Chevrolet)
  { driverId: 'cassill', teamId: 'jd-motorsports', carNumber: 4 },
]
