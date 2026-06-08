import type { EntryItem } from './types'

// NASCAR Xfinity Series 2024 full-season entries
// Source: Wikipedia "2024 NASCAR Xfinity Series", jayski.com 2024 team & driver chart
// Only full-season regulars listed; Cup-series drivers (Larson, Bell, Elliott, Byron, Almirola, Truex)
// made guest starts and appear only in results.
// Verification date: 2026-06-07.
export const nascarXfinityEntries2024: EntryItem[] = [
  // JR Motorsports (Chevrolet)
  { driverId: 'allgaier', teamId: 'jr-motorsports', carNumber: 7 },
  { driverId: 'mayer-sam', teamId: 'jr-motorsports', carNumber: 1 },
  { driverId: 'smith-sammy', teamId: 'jr-motorsports', carNumber: 8 },
  { driverId: 'jones-brandon', teamId: 'jr-motorsports', carNumber: 9 },
  // Joe Gibbs Racing (Toyota)
  { driverId: 'chandler-smith', teamId: 'joe-gibbs-racing', carNumber: 81 },
  { driverId: 'creed', teamId: 'joe-gibbs-racing', carNumber: 18 },
  { driverId: 'nemechek', teamId: 'joe-gibbs-racing', carNumber: 20 },
  // Stewart-Haas Racing (Ford) — final Xfinity season for SHR
  { driverId: 'custer', teamId: 'stewart-haas-racing', carNumber: 0 },
  { driverId: 'herbst', teamId: 'stewart-haas-racing', carNumber: 98 },
  // Richard Childress Racing (Chevrolet)
  { driverId: 'jesse-love', teamId: 'richard-childress-racing', carNumber: 2 },
  { driverId: 'austin-hill', teamId: 'richard-childress-racing', carNumber: 21 },
  // Kaulig Racing (Chevrolet)
  { driverId: 'allmendinger', teamId: 'kaulig-racing', carNumber: 16 },
  { driverId: 'van-gisbergen', teamId: 'kaulig-racing', carNumber: 97 },
  { driverId: 'williams-josh', teamId: 'kaulig-racing', carNumber: 11 },
  // Big Machine Racing (Chevrolet)
  { driverId: 'kligerman', teamId: 'big-machine-racing', carNumber: 48 },
  // Our Motorsports (Chevrolet)
  { driverId: 'alfredo', teamId: 'our-motorsports', carNumber: 5 },
  // Sam Hunt Racing (Toyota)
  { driverId: 'heim', teamId: 'sam-hunt-racing', carNumber: 26 },
  // AM Racing (Ford)
  { driverId: 'burton-h', teamId: 'am-racing', carNumber: 25 },
  // Jordan Anderson Racing (Chevrolet)
  { driverId: 'retzlaff', teamId: 'jordan-anderson-racing', carNumber: 31 },
  { driverId: 'burton-jeb', teamId: 'jordan-anderson-racing', carNumber: 27 },
  // Alpha Prime Racing (Chevrolet)
  { driverId: 'poole-b', teamId: 'alpha-prime-racing', carNumber: 44 },
  // Jeremy Clements Racing (Chevrolet)
  { driverId: 'clements-jeremy', teamId: 'jeremy-clements-racing', carNumber: 51 },
  // RSS Racing (Ford)
  { driverId: 'sieg-r', teamId: 'rss-racing', carNumber: 39 },
  { driverId: 'sieg-k', teamId: 'rss-racing', carNumber: 28 },
  // SS-Green Light Racing (Chevrolet)
  { driverId: 'smithley', teamId: 'ss-green-light-racing', carNumber: 14 },
  // DGM Racing (Chevrolet)
  { driverId: 'ellis-r', teamId: 'dgm-racing', carNumber: 36 },
  { driverId: 'bilicki', teamId: 'dgm-racing', carNumber: 91 },
]
