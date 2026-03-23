export interface BroadcastInfo {
  name: string
  url?: string
  note?: string
}

export type CountryCode = 'US' | 'UA'

// Broadcast data per series, per country
// Sources: official series websites, verified 2026 broadcast deals
const BROADCASTS: Record<string, Record<CountryCode, BroadcastInfo[]>> = {
  f1: {
    US: [
      { name: 'Apple TV', url: 'https://tv.apple.com', note: 'Exclusive — all sessions live, 4K Dolby Vision' },
      { name: 'F1 TV Pro', url: 'https://f1tv.formula1.com', note: 'Included with Apple TV subscription' },
    ],
    UA: [
      { name: 'F1 TV Pro', url: 'https://f1tv.formula1.com', note: 'All sessions live + onboards' },
      { name: 'Setanta Sports', url: 'https://setantasports.com', note: 'TV broadcast' },
    ],
  },
  indycar: {
    US: [
      { name: 'FOX', note: 'All races live on FOX network' },
      { name: 'FS1 / FS2', note: 'Practice & qualifying sessions' },
      { name: 'FOX Sports App', url: 'https://www.foxsports.com', note: 'Streaming with TV login' },
    ],
    UA: [
      { name: 'IndyCar Live', url: 'https://www.indycar.com', note: 'Official streaming service' },
    ],
  },
  nascar: {
    US: [
      { name: 'FOX / FS1', note: 'Early season races' },
      { name: 'Prime Video', url: 'https://www.amazon.com/primevideo', note: '5 races including Coca-Cola 600' },
      { name: 'TNT', note: 'Mid-summer segment' },
      { name: 'NBC / USA Network', note: 'Playoffs & championship' },
      { name: 'Peacock', url: 'https://www.peacocktv.com', note: 'Streaming for NBC races' },
    ],
    UA: [
      { name: 'Maincast.tv', url: 'https://maincast.tv/auto-racing', note: 'Live broadcasts' },
      { name: 'NASCAR YouTube', url: 'https://www.youtube.com/@NASCAR', note: 'Select content & highlights' },
    ],
  },
  wec: {
    US: [
      { name: 'FIAWEC+', url: 'https://plus.fiawec.com', note: 'Official streaming — no geo-blocks' },
      { name: 'Max / B/R Sports', note: 'FP3, qualifying & race live' },
      { name: 'MotorTrend', note: 'TV broadcast' },
    ],
    UA: [
      { name: 'FIAWEC+', url: 'https://plus.fiawec.com', note: 'Official streaming — no geo-blocks' },
    ],
  },
  imsa: {
    US: [
      { name: 'Peacock', url: 'https://www.peacocktv.com/sports/imsa', note: 'Exclusive streaming — every race flag-to-flag' },
      { name: 'NBC', note: 'Long Beach, Detroit, VIR, Indianapolis live' },
      { name: 'NBCSN', note: 'Sebring, Laguna Seca, Petit Le Mans' },
    ],
    UA: [
      { name: 'YouTube — IMSA Official', url: 'https://www.youtube.com/@IMSAOfficial', note: 'Free live stream for international viewers' },
      { name: 'IMSA TV', url: 'https://www.imsa.com/tvlive/', note: 'Official live stream + in-car cameras' },
    ],
  },
  wrc: {
    US: [
      { name: 'Rally.TV', url: 'https://www.rally.tv', note: 'Official — all stages live & on demand' },
      { name: 'Red Bull TV', url: 'https://www.redbull.com/discover', note: 'Free live coverage' },
    ],
    UA: [
      { name: 'Rally.TV', url: 'https://www.rally.tv', note: 'Official — all stages live & on demand' },
    ],
  },
  dtm: {
    US: [
      { name: 'Red Bull TV', url: 'https://www.redbull.com/discover', note: 'Free live streaming' },
      { name: 'Apple TV', url: 'https://tv.apple.com', note: 'DTM Championship channel' },
    ],
    UA: [
      { name: 'Red Bull TV', url: 'https://www.redbull.com/discover', note: 'Free live streaming' },
    ],
  },
  gtwc: {
    US: [
      { name: 'Motorsport.tv', url: 'https://motorsport.tv', note: 'Live coverage' },
      { name: 'GTWCE Official', url: 'https://www.gt-world-challenge-europe.com/watch-live', note: 'Free live stream & timing' },
    ],
    UA: [
      { name: 'GTWCE Official', url: 'https://www.gt-world-challenge-europe.com/watch-live', note: 'Free live stream & timing' },
      { name: 'Motorsport.tv', url: 'https://motorsport.tv', note: 'Live coverage' },
    ],
  },
  nls: {
    US: [
      { name: 'YouTube — VLN Official', url: 'https://www.youtube.com/@VLNOFFICIAL', note: 'Free live stream' },
    ],
    UA: [
      { name: 'YouTube — VLN Official', url: 'https://www.youtube.com/@VLNOFFICIAL', note: 'Free live stream' },
    ],
  },
}

export function getBroadcasts(seriesId: string, countryCode: CountryCode): BroadcastInfo[] {
  return BROADCASTS[seriesId]?.[countryCode] ?? []
}

export function detectCountry(timezone: string): CountryCode | null {
  if (
    timezone.startsWith('America/') ||
    timezone === 'Pacific/Honolulu' ||
    timezone === 'Pacific/Guam'
  ) {
    return 'US'
  }
  if (
    timezone === 'Europe/Kyiv' ||
    timezone === 'Europe/Kiev' ||
    timezone === 'Europe/Uzhgorod' ||
    timezone === 'Europe/Zaporozhye'
  ) {
    return 'UA'
  }
  return null
}

export const COUNTRY_LABELS: Record<CountryCode, string> = {
  US: 'USA',
  UA: 'Ukraine',
}
