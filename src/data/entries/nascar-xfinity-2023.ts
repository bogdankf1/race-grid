import type { EntryItem } from './types'

// NASCAR Xfinity Series 2023 full-season entries
// Source: en.wikipedia.org/wiki/2023_NASCAR_Xfinity_Series, jayski.com 2023 team & driver chart
// Only full-season regulars listed; Cup-series drivers (Larson, Byron, Elliott, Hamlin, Busch, Almirola, Truex)
// made guest starts and appear only in results. Allmendinger ran Cup full-time in 2023 but made select
// Xfinity starts for Kaulig (COTA win, Nashville win) — listed in results only.
// Kaulig Racing swapped the #10 and #11 mid-season: Hemric started in #11, moved to #10 from Kansas onward;
// Cassill ran the corresponding #10/#11. Listed here under the season-starting numbers.
// Verification date: 2026-06-08.
export const nascarXfinityEntries2023: EntryItem[] = [
  // JR Motorsports (Chevrolet)
  { driverId: 'allgaier', teamId: 'jr-motorsports', carNumber: 7 },
  { driverId: 'mayer-sam', teamId: 'jr-motorsports', carNumber: 1 },
  { driverId: 'berry', teamId: 'jr-motorsports', carNumber: 8 },
  { driverId: 'jones-brandon', teamId: 'jr-motorsports', carNumber: 9 },
  // Joe Gibbs Racing (Toyota)
  { driverId: 'smith-sammy', teamId: 'joe-gibbs-racing', carNumber: 18 },
  { driverId: 'nemechek', teamId: 'joe-gibbs-racing', carNumber: 20 },
  // Kaulig Racing (Chevrolet)
  { driverId: 'chandler-smith', teamId: 'kaulig-racing', carNumber: 16 },
  { driverId: 'hemric', teamId: 'kaulig-racing', carNumber: 11 },
  { driverId: 'cassill', teamId: 'kaulig-racing', carNumber: 10 },
  // Richard Childress Racing (Chevrolet)
  { driverId: 'austin-hill', teamId: 'richard-childress-racing', carNumber: 21 },
  { driverId: 'creed', teamId: 'richard-childress-racing', carNumber: 2 },
  // Stewart-Haas Racing (Ford)
  { driverId: 'custer', teamId: 'stewart-haas-racing', carNumber: 0 },
  { driverId: 'herbst', teamId: 'stewart-haas-racing', carNumber: 98 },
  // Big Machine Racing (Chevrolet)
  { driverId: 'kligerman', teamId: 'big-machine-racing', carNumber: 48 },
  // Jordan Anderson Racing (Chevrolet)
  { driverId: 'burton-jeb', teamId: 'jordan-anderson-racing', carNumber: 27 },
  { driverId: 'retzlaff', teamId: 'jordan-anderson-racing', carNumber: 31 },
  // Sam Hunt Racing (Toyota)
  { driverId: 'chase-parker', teamId: 'sam-hunt-racing', carNumber: 24 },
  { driverId: 'grala', teamId: 'sam-hunt-racing', carNumber: 26 },
  // RSS Racing (Ford)
  { driverId: 'sieg-r', teamId: 'rss-racing', carNumber: 39 },
  { driverId: 'sieg-k', teamId: 'rss-racing', carNumber: 28 },
  { driverId: 'graf-jr', teamId: 'rss-racing', carNumber: 38 },
  // Alpha Prime Racing (Chevrolet)
  { driverId: 'earnhardt-j', teamId: 'alpha-prime-racing', carNumber: 44 },
  { driverId: 'ellis-r', teamId: 'alpha-prime-racing', carNumber: 43 },
  // AM Racing (Ford)
  { driverId: 'moffitt', teamId: 'am-racing', carNumber: 25 },
  // Our Motorsports (Chevrolet)
  { driverId: 'alfredo', teamId: 'our-motorsports', carNumber: 23 },
  // Jeremy Clements Racing (Chevrolet)
  { driverId: 'clements-jeremy', teamId: 'jeremy-clements-racing', carNumber: 51 },
  // SS-Green Light Racing (Chevrolet)
  { driverId: 'smithley', teamId: 'ss-green-light-racing', carNumber: 7 },
  // DGM Racing (Chevrolet)
  { driverId: 'bilicki', teamId: 'dgm-racing', carNumber: 36 },
]
