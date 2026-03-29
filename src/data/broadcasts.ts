export interface BroadcastInfo {
  name: string
  url?: string
  note?: string
}

export type CountryCode = 'US' | 'UA' | 'GB' | 'DE' | 'PL' | 'AU' | 'BR' | 'JP' | 'CO'

// Broadcast data per series, per country
// Sources: official series websites, verified 2026 broadcast deals
const BROADCASTS: Record<string, Partial<Record<CountryCode, BroadcastInfo[]>>> = {
  f1: {
    US: [
      { name: 'Apple TV', url: 'https://tv.apple.com', note: 'Exclusive — all sessions live, 4K Dolby Vision' },
      { name: 'F1 TV Pro', url: 'https://f1tv.formula1.com', note: 'Included with Apple TV subscription' },
    ],
    UA: [
      { name: 'F1 TV Pro', url: 'https://f1tv.formula1.com', note: 'All sessions live + onboards' },
      { name: 'Setanta Sports', url: 'https://setantasports.com', note: 'TV broadcast' },
    ],
    GB: [
      { name: 'Sky Sports F1', url: 'https://www.skysports.com/f1', note: 'Exclusive live — all sessions' },
      { name: 'NOW', url: 'https://www.nowtv.com', note: 'Sky Sports streaming without contract' },
      { name: 'Channel 4', note: 'Highlights + British GP free-to-air' },
    ],
    DE: [
      { name: 'Sky Deutschland', url: 'https://www.sky.de', note: 'All sessions live' },
      { name: 'RTL', note: 'Select races free-to-air' },
    ],
    PL: [
      { name: 'Eleven Sports', url: 'https://elevensports.pl', note: 'Exclusive — all sessions live' },
      { name: 'Polsat', note: 'Selected races & highlights' },
    ],
    AU: [
      { name: 'Fox Sports', note: 'All sessions live' },
      { name: 'Kayo Sports', url: 'https://kayosports.com.au', note: 'Streaming — all sessions' },
    ],
    BR: [
      { name: 'Globo', url: 'https://globo.com', note: '15 races free-to-air' },
      { name: 'sportv', note: 'All sessions live (pay TV)' },
      { name: 'GloboPlay', url: 'https://globoplay.globo.com', note: 'Streaming' },
    ],
    JP: [
      { name: 'Fuji TV', note: 'Exclusive — all sessions live' },
      { name: 'FOD', url: 'https://fod.fujitv.co.jp', note: 'Streaming + F1 TV Pro' },
    ],
    CO: [
      { name: 'ESPN', note: 'All sessions live' },
      { name: 'Disney+', url: 'https://www.disneyplus.com', note: 'Streaming via ESPN' },
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
    GB: [
      { name: 'Sky Sports', note: 'All races live' },
      { name: 'NOW', url: 'https://www.nowtv.com', note: 'Streaming' },
    ],
    DE: [
      { name: 'Sky Sport', note: 'Live races' },
    ],
    PL: [
      { name: 'Eleven Sports', url: 'https://elevensports.pl', note: 'Selected races' },
    ],
    AU: [
      { name: 'Stan Sport', url: 'https://www.stan.com.au/sport', note: 'All races live' },
    ],
    BR: [
      { name: 'ESPN Brasil', note: 'Selected races' },
      { name: 'Disney+', url: 'https://www.disneyplus.com', note: 'Streaming' },
    ],
    JP: [
      { name: 'GAORA Sports', note: 'Live coverage' },
    ],
    CO: [
      { name: 'ESPN', note: 'Selected races' },
      { name: 'Disney+', url: 'https://www.disneyplus.com', note: 'Streaming' },
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
    GB: [
      { name: 'TNT Sports', note: 'Live races' },
      { name: 'discovery+', url: 'https://www.discoveryplus.com', note: 'Streaming' },
    ],
    DE: [
      { name: 'Motorsport.tv', url: 'https://motorsport.tv', note: 'Live coverage' },
    ],
    PL: [
      { name: 'Motorsport.tv', url: 'https://motorsport.tv', note: 'Live coverage' },
    ],
    AU: [
      { name: 'Fox Sports', note: 'Selected races' },
      { name: 'Kayo Sports', url: 'https://kayosports.com.au', note: 'Streaming' },
    ],
    BR: [
      { name: 'ESPN Brasil', note: 'Selected races' },
      { name: 'BandSports', note: 'Live coverage' },
    ],
    JP: [
      { name: 'Motorsport.tv', url: 'https://motorsport.tv', note: 'Live coverage' },
    ],
    CO: [
      { name: 'ESPN', note: 'Selected races' },
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
    GB: [
      { name: 'Eurosport / discovery+', note: 'Live races' },
      { name: 'FIAWEC+', url: 'https://plus.fiawec.com', note: 'Official streaming' },
    ],
    DE: [
      { name: 'Eurosport', note: 'Live races' },
      { name: 'FIAWEC+', url: 'https://plus.fiawec.com', note: 'Official streaming' },
    ],
    PL: [
      { name: 'Eurosport / Max', note: 'Live races' },
      { name: 'FIAWEC+', url: 'https://plus.fiawec.com', note: 'Official streaming' },
    ],
    AU: [
      { name: 'Stan Sport', url: 'https://www.stan.com.au/sport', note: 'Live races' },
      { name: 'FIAWEC+', url: 'https://plus.fiawec.com', note: 'Official streaming' },
    ],
    BR: [
      { name: 'FIAWEC+', url: 'https://plus.fiawec.com', note: 'Official streaming — no geo-blocks' },
    ],
    JP: [
      { name: 'J Sports', note: 'Live races' },
      { name: 'FIAWEC+', url: 'https://plus.fiawec.com', note: 'Official streaming' },
    ],
    CO: [
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
    GB: [
      { name: 'IMSA TV', url: 'https://www.imsa.com/tvlive/', note: 'Official live stream' },
      { name: 'Motorsport.tv', url: 'https://motorsport.tv', note: 'Live coverage' },
    ],
    DE: [
      { name: 'IMSA TV', url: 'https://www.imsa.com/tvlive/', note: 'Official live stream' },
      { name: 'Motorsport.tv', url: 'https://motorsport.tv', note: 'Live coverage' },
    ],
    PL: [
      { name: 'IMSA TV', url: 'https://www.imsa.com/tvlive/', note: 'Official live stream' },
    ],
    AU: [
      { name: 'IMSA TV', url: 'https://www.imsa.com/tvlive/', note: 'Official live stream' },
    ],
    BR: [
      { name: 'YouTube — IMSA Official', url: 'https://www.youtube.com/@IMSAOfficial', note: 'Free live stream' },
    ],
    JP: [
      { name: 'IMSA TV', url: 'https://www.imsa.com/tvlive/', note: 'Official live stream' },
    ],
    CO: [
      { name: 'YouTube — IMSA Official', url: 'https://www.youtube.com/@IMSAOfficial', note: 'Free live stream' },
    ],
  },
  wrc: {
    US: [
      { name: 'Rally.TV', url: 'https://www.rally.tv', note: 'Official — all stages live & on demand' },
      { name: 'Red Bull TV', url: 'https://www.redbull.com/int-en/event-series/fia-world-rally-championship', note: 'Free live coverage' },
    ],
    UA: [
      { name: 'Rally.TV', url: 'https://www.rally.tv', note: 'Official — all stages live & on demand' },
      { name: 'Red Bull TV', url: 'https://www.redbull.com/int-en/event-series/fia-world-rally-championship', note: 'Free live coverage' },
    ],
    GB: [
      { name: 'TNT Sports / discovery+', note: 'Live stages' },
      { name: 'Rally.TV', url: 'https://www.rally.tv', note: 'Official — all stages live' },
      { name: 'Red Bull TV', url: 'https://www.redbull.com/int-en/event-series/fia-world-rally-championship', note: 'Free' },
    ],
    DE: [
      { name: 'Rally.TV', url: 'https://www.rally.tv', note: 'Official — all stages live' },
      { name: 'Red Bull TV', url: 'https://www.redbull.com/int-en/event-series/fia-world-rally-championship', note: 'Free' },
      { name: 'ServusTV', note: 'Selected rounds' },
    ],
    PL: [
      { name: 'Rally.TV', url: 'https://www.rally.tv', note: 'Official — all stages live' },
      { name: 'Red Bull TV', url: 'https://www.redbull.com/int-en/event-series/fia-world-rally-championship', note: 'Free' },
    ],
    AU: [
      { name: 'Stan Sport', url: 'https://www.stan.com.au/sport', note: 'Live stages' },
      { name: 'Rally.TV', url: 'https://www.rally.tv', note: 'Official — all stages live' },
    ],
    BR: [
      { name: 'Rally.TV', url: 'https://www.rally.tv', note: 'Official — all stages live' },
      { name: 'Red Bull TV', url: 'https://www.redbull.com/int-en/event-series/fia-world-rally-championship', note: 'Free' },
    ],
    JP: [
      { name: 'Rally.TV', url: 'https://www.rally.tv', note: 'Official — all stages live' },
      { name: 'Red Bull TV', url: 'https://www.redbull.com/int-en/event-series/fia-world-rally-championship', note: 'Free' },
    ],
    CO: [
      { name: 'Rally.TV', url: 'https://www.rally.tv', note: 'Official — all stages live' },
      { name: 'Red Bull TV', url: 'https://www.redbull.com/int-en/event-series/fia-world-rally-championship', note: 'Free' },
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
    GB: [
      { name: 'Red Bull TV', url: 'https://www.redbull.com/discover', note: 'Free live streaming' },
      { name: 'Motorsport.tv', url: 'https://motorsport.tv', note: 'Live coverage' },
    ],
    DE: [
      { name: 'ProSieben MAXX', note: 'Free-to-air — all races live' },
      { name: 'Red Bull TV', url: 'https://www.redbull.com/discover', note: 'Free live streaming' },
    ],
    PL: [
      { name: 'Red Bull TV', url: 'https://www.redbull.com/discover', note: 'Free live streaming' },
    ],
    AU: [
      { name: 'Red Bull TV', url: 'https://www.redbull.com/discover', note: 'Free live streaming' },
    ],
    BR: [
      { name: 'Red Bull TV', url: 'https://www.redbull.com/discover', note: 'Free live streaming' },
    ],
    JP: [
      { name: 'Red Bull TV', url: 'https://www.redbull.com/discover', note: 'Free live streaming' },
    ],
    CO: [
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
    GB: [
      { name: 'GTWCE Official', url: 'https://www.gt-world-challenge-europe.com/watch-live', note: 'Free live stream' },
      { name: 'Motorsport.tv', url: 'https://motorsport.tv', note: 'Live coverage' },
    ],
    DE: [
      { name: 'GTWCE Official', url: 'https://www.gt-world-challenge-europe.com/watch-live', note: 'Free live stream' },
      { name: 'Motorsport.tv', url: 'https://motorsport.tv', note: 'Live coverage' },
    ],
    PL: [
      { name: 'GTWCE Official', url: 'https://www.gt-world-challenge-europe.com/watch-live', note: 'Free live stream' },
    ],
    AU: [
      { name: 'GTWCE Official', url: 'https://www.gt-world-challenge-europe.com/watch-live', note: 'Free live stream' },
    ],
    BR: [
      { name: 'GTWCE Official', url: 'https://www.gt-world-challenge-europe.com/watch-live', note: 'Free live stream' },
    ],
    JP: [
      { name: 'GTWCE Official', url: 'https://www.gt-world-challenge-europe.com/watch-live', note: 'Free live stream' },
    ],
    CO: [
      { name: 'GTWCE Official', url: 'https://www.gt-world-challenge-europe.com/watch-live', note: 'Free live stream' },
    ],
  },
  nls: {
    US: [
      { name: 'YouTube — VLN Official', url: 'https://www.youtube.com/@VLNOFFICIAL', note: 'Free live stream' },
    ],
    UA: [
      { name: 'YouTube — VLN Official', url: 'https://www.youtube.com/@VLNOFFICIAL', note: 'Free live stream' },
    ],
    GB: [
      { name: 'YouTube — VLN Official', url: 'https://www.youtube.com/@VLNOFFICIAL', note: 'Free live stream' },
    ],
    DE: [
      { name: 'YouTube — VLN Official', url: 'https://www.youtube.com/@VLNOFFICIAL', note: 'Free live stream' },
      { name: 'Motorsport.tv', url: 'https://motorsport.tv', note: 'Live coverage' },
    ],
    PL: [
      { name: 'YouTube — VLN Official', url: 'https://www.youtube.com/@VLNOFFICIAL', note: 'Free live stream' },
    ],
    AU: [
      { name: 'YouTube — VLN Official', url: 'https://www.youtube.com/@VLNOFFICIAL', note: 'Free live stream' },
    ],
    BR: [
      { name: 'YouTube — VLN Official', url: 'https://www.youtube.com/@VLNOFFICIAL', note: 'Free live stream' },
    ],
    JP: [
      { name: 'YouTube — VLN Official', url: 'https://www.youtube.com/@VLNOFFICIAL', note: 'Free live stream' },
    ],
    CO: [
      { name: 'YouTube — VLN Official', url: 'https://www.youtube.com/@VLNOFFICIAL', note: 'Free live stream' },
    ],
  },
  supergt: {
    US: [
      { name: 'YouTube — Super GT Official', url: 'https://www.youtube.com/@SUPERGTOfficialChannel', note: 'Free live stream for international viewers' },
      { name: 'Motorsport.tv', url: 'https://motorsport.tv', note: 'On-demand highlights' },
    ],
    UA: [
      { name: 'YouTube — Super GT Official', url: 'https://www.youtube.com/@SUPERGTOfficialChannel', note: 'Free live stream' },
    ],
    GB: [
      { name: 'YouTube — Super GT Official', url: 'https://www.youtube.com/@SUPERGTOfficialChannel', note: 'Free live stream' },
    ],
    DE: [
      { name: 'YouTube — Super GT Official', url: 'https://www.youtube.com/@SUPERGTOfficialChannel', note: 'Free live stream' },
    ],
    PL: [
      { name: 'YouTube — Super GT Official', url: 'https://www.youtube.com/@SUPERGTOfficialChannel', note: 'Free live stream' },
    ],
    AU: [
      { name: 'YouTube — Super GT Official', url: 'https://www.youtube.com/@SUPERGTOfficialChannel', note: 'Free live stream' },
    ],
    BR: [
      { name: 'YouTube — Super GT Official', url: 'https://www.youtube.com/@SUPERGTOfficialChannel', note: 'Free live stream' },
    ],
    JP: [
      { name: 'J Sports', note: 'All races live' },
      { name: 'BS Fuji', note: 'Selected races' },
    ],
    CO: [
      { name: 'YouTube — Super GT Official', url: 'https://www.youtube.com/@SUPERGTOfficialChannel', note: 'Free live stream' },
    ],
  },
  elms: {
    US: [
      { name: 'ELMS Official', url: 'https://www.europeanlemansseries.com/en/', note: 'Official site — live timing & stream' },
      { name: 'Motorsport.tv', url: 'https://motorsport.tv', note: 'Live streaming — all races' },
    ],
    UA: [
      { name: 'ELMS Official', url: 'https://www.europeanlemansseries.com/en/', note: 'Official site — live stream' },
      { name: 'Motorsport.tv', url: 'https://motorsport.tv', note: 'Live coverage' },
    ],
    GB: [
      { name: 'Eurosport / discovery+', note: 'Live races' },
      { name: 'ELMS Official', url: 'https://www.europeanlemansseries.com/en/', note: 'Live stream' },
    ],
    DE: [
      { name: 'Eurosport', note: 'Live races' },
      { name: 'ELMS Official', url: 'https://www.europeanlemansseries.com/en/', note: 'Live stream' },
    ],
    PL: [
      { name: 'Eurosport / Max', note: 'Live races' },
      { name: 'ELMS Official', url: 'https://www.europeanlemansseries.com/en/', note: 'Live stream' },
    ],
    AU: [
      { name: 'ELMS Official', url: 'https://www.europeanlemansseries.com/en/', note: 'Live stream' },
      { name: 'Motorsport.tv', url: 'https://motorsport.tv', note: 'Live coverage' },
    ],
    BR: [
      { name: 'ELMS Official', url: 'https://www.europeanlemansseries.com/en/', note: 'Live stream' },
    ],
    JP: [
      { name: 'ELMS Official', url: 'https://www.europeanlemansseries.com/en/', note: 'Live stream' },
    ],
    CO: [
      { name: 'ELMS Official', url: 'https://www.europeanlemansseries.com/en/', note: 'Live stream' },
    ],
  },
  igtc: {
    US: [
      { name: 'Motorsport.tv', url: 'https://motorsport.tv', note: 'Live coverage of all rounds' },
      { name: 'YouTube — GT World', url: 'https://www.youtube.com/@GTWorld', note: 'Free live stream for select events' },
    ],
    UA: [
      { name: 'YouTube — GT World', url: 'https://www.youtube.com/@GTWorld', note: 'Free live stream' },
      { name: 'Motorsport.tv', url: 'https://motorsport.tv', note: 'Live coverage' },
    ],
    GB: [
      { name: 'YouTube — GT World', url: 'https://www.youtube.com/@GTWorld', note: 'Free live stream' },
      { name: 'Motorsport.tv', url: 'https://motorsport.tv', note: 'Live coverage' },
    ],
    DE: [
      { name: 'YouTube — GT World', url: 'https://www.youtube.com/@GTWorld', note: 'Free live stream' },
      { name: 'Motorsport.tv', url: 'https://motorsport.tv', note: 'Live coverage' },
    ],
    PL: [
      { name: 'YouTube — GT World', url: 'https://www.youtube.com/@GTWorld', note: 'Free live stream' },
    ],
    AU: [
      { name: 'YouTube — GT World', url: 'https://www.youtube.com/@GTWorld', note: 'Free live stream' },
    ],
    BR: [
      { name: 'YouTube — GT World', url: 'https://www.youtube.com/@GTWorld', note: 'Free live stream' },
    ],
    JP: [
      { name: 'YouTube — GT World', url: 'https://www.youtube.com/@GTWorld', note: 'Free live stream' },
    ],
    CO: [
      { name: 'YouTube — GT World', url: 'https://www.youtube.com/@GTWorld', note: 'Free live stream' },
    ],
  },
  superformula: {
    US: [
      { name: 'YouTube — Super Formula Official', url: 'https://www.youtube.com/@SUPERFORMULA_official', note: 'Free live stream for international viewers' },
      { name: 'Red Bull TV', url: 'https://www.redbull.com/int-en/event-series/super-formula', note: 'Free live coverage' },
    ],
    UA: [
      { name: 'YouTube — Super Formula Official', url: 'https://www.youtube.com/@SUPERFORMULA_official', note: 'Free live stream' },
      { name: 'Red Bull TV', url: 'https://www.redbull.com/int-en/event-series/super-formula', note: 'Free live coverage' },
    ],
    GB: [
      { name: 'YouTube — Super Formula Official', url: 'https://www.youtube.com/@SUPERFORMULA_official', note: 'Free live stream' },
    ],
    DE: [
      { name: 'YouTube — Super Formula Official', url: 'https://www.youtube.com/@SUPERFORMULA_official', note: 'Free live stream' },
    ],
    PL: [
      { name: 'YouTube — Super Formula Official', url: 'https://www.youtube.com/@SUPERFORMULA_official', note: 'Free live stream' },
    ],
    AU: [
      { name: 'YouTube — Super Formula Official', url: 'https://www.youtube.com/@SUPERFORMULA_official', note: 'Free live stream' },
    ],
    BR: [
      { name: 'YouTube — Super Formula Official', url: 'https://www.youtube.com/@SUPERFORMULA_official', note: 'Free live stream' },
    ],
    JP: [
      { name: 'BS Fuji', note: 'All races live' },
      { name: 'J Sports', note: 'Live coverage' },
    ],
    CO: [
      { name: 'YouTube — Super Formula Official', url: 'https://www.youtube.com/@SUPERFORMULA_official', note: 'Free live stream' },
    ],
  },
  supercars: {
    US: [
      { name: 'Supercars Play', url: 'https://www.supercars.com/supercarsplay', note: 'Official streaming — international viewers' },
      { name: 'Fox Sports', note: 'Select races via Fox Sports app' },
    ],
    UA: [
      { name: 'Supercars Play', url: 'https://www.supercars.com/supercarsplay', note: 'Official streaming — international viewers' },
    ],
    GB: [
      { name: 'Supercars Play', url: 'https://www.supercars.com/supercarsplay', note: 'Official streaming' },
    ],
    DE: [
      { name: 'Supercars Play', url: 'https://www.supercars.com/supercarsplay', note: 'Official streaming' },
    ],
    PL: [
      { name: 'Supercars Play', url: 'https://www.supercars.com/supercarsplay', note: 'Official streaming' },
    ],
    AU: [
      { name: 'Fox Sports', note: 'All races live' },
      { name: 'Kayo Sports', url: 'https://kayosports.com.au', note: 'Streaming — all races' },
      { name: '7plus', url: 'https://7plus.com.au', note: 'Selected races free-to-air' },
    ],
    BR: [
      { name: 'Supercars Play', url: 'https://www.supercars.com/supercarsplay', note: 'Official streaming' },
    ],
    JP: [
      { name: 'Supercars Play', url: 'https://www.supercars.com/supercarsplay', note: 'Official streaming' },
    ],
    CO: [
      { name: 'Supercars Play', url: 'https://www.supercars.com/supercarsplay', note: 'Official streaming' },
    ],
  },
}

export function getBroadcasts(seriesId: string, countryCode: CountryCode): BroadcastInfo[] {
  return BROADCASTS[seriesId]?.[countryCode] ?? []
}

// US-specific timezone prefixes (excludes Latin America)
const US_TIMEZONES = new Set([
  'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
  'America/Anchorage', 'America/Adak', 'America/Phoenix', 'America/Boise',
  'America/Detroit', 'America/Indianapolis', 'America/Juneau', 'America/Sitka',
  'America/Yakutat', 'America/Nome', 'America/Menominee', 'America/Metlakatla',
  'Pacific/Honolulu', 'Pacific/Guam',
])

const BR_TIMEZONES = new Set([
  'America/Sao_Paulo', 'America/Noronha', 'America/Fortaleza', 'America/Recife',
  'America/Araguaina', 'America/Maceio', 'America/Bahia', 'America/Campo_Grande',
  'America/Cuiaba', 'America/Porto_Velho', 'America/Boa_Vista', 'America/Manaus',
  'America/Eirunepe', 'America/Rio_Branco', 'America/Belem', 'America/Santarem',
])

export function detectCountry(timezone: string): CountryCode | null {
  // Exact matches first
  if (US_TIMEZONES.has(timezone)) return 'US'
  if (timezone.startsWith('America/Indiana/') || timezone.startsWith('America/Kentucky/') || timezone.startsWith('America/North_Dakota/')) return 'US'

  if (timezone === 'Europe/Kyiv' || timezone === 'Europe/Kiev' || timezone === 'Europe/Uzhgorod' || timezone === 'Europe/Zaporozhye') return 'UA'
  if (timezone === 'Europe/London') return 'GB'
  if (timezone === 'Europe/Berlin') return 'DE'
  if (timezone === 'Europe/Warsaw') return 'PL'
  if (timezone.startsWith('Australia/')) return 'AU'
  if (BR_TIMEZONES.has(timezone)) return 'BR'
  if (timezone === 'Asia/Tokyo') return 'JP'
  if (timezone === 'America/Bogota') return 'CO'

  return null
}

export const COUNTRY_LABELS: Record<CountryCode, string> = {
  US: 'USA',
  UA: 'Ukraine',
  GB: 'United Kingdom',
  DE: 'Germany',
  PL: 'Poland',
  AU: 'Australia',
  BR: 'Brazil',
  JP: 'Japan',
  CO: 'Colombia',
}
