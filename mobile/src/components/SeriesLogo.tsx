// RN port of web SeriesLogo: same logo files from public/logos (SVGs render
// as components via react-native-svg-transformer, PNG/JPG via Image), same
// logoBgWhite padded-background convention driven by --rg-logo-bg.

import { Image, View } from 'react-native'
import type { FC } from 'react'
import type { SvgProps } from 'react-native-svg'

import { getSeriesMeta } from '@/data/series-registry'
import { useTheme } from '~/state/theme'

import Logo24h from '../../../public/logos/24h.jpg'
import LogoBritgt from '../../../public/logos/britgt.svg'
import LogoDakar from '../../../public/logos/dakar.svg'
import LogoDtm from '../../../public/logos/dtm.svg'
import LogoElms from '../../../public/logos/elms.png'
import LogoF1Academy from '../../../public/logos/f1-academy.svg'
import LogoF1 from '../../../public/logos/f1.svg'
import LogoF2 from '../../../public/logos/f2.svg'
import LogoF3 from '../../../public/logos/f3.svg'
import LogoFe from '../../../public/logos/fe.svg'
import LogoGtwc from '../../../public/logos/gtwc.svg'
import LogoGtwcam from '../../../public/logos/gtwcam.svg'
import LogoGtwcasia from '../../../public/logos/gtwcasia.svg'
import LogoGtwcau from '../../../public/logos/gtwcau.png'
import LogoIgtc from '../../../public/logos/igtc.png'
import LogoImpc from '../../../public/logos/impc.svg'
import LogoImsa from '../../../public/logos/imsa.svg'
import LogoIndyNxt from '../../../public/logos/indy-nxt.png'
import LogoIndycar from '../../../public/logos/indycar.svg'
import LogoMlmc from '../../../public/logos/mlmc.png'
import LogoMoto2 from '../../../public/logos/moto2.svg'
import LogoMoto3 from '../../../public/logos/moto3.svg'
import LogoMotogp from '../../../public/logos/motogp.svg'
import LogoNascarTruck from '../../../public/logos/nascar-truck.svg'
import LogoNascarXfinity from '../../../public/logos/nascar-xfinity.svg'
import LogoNascar from '../../../public/logos/nascar.svg'
import LogoNls from '../../../public/logos/nls.png'
import LogoPorscheSupercup from '../../../public/logos/porsche-supercup.svg'
import LogoSpecial from '../../../public/logos/special.svg'
import LogoSupercars from '../../../public/logos/supercars.png'
import LogoSuperformula from '../../../public/logos/superformula.svg'
import LogoSupergt from '../../../public/logos/supergt.svg'
import LogoWec from '../../../public/logos/wec.svg'
import LogoWrc from '../../../public/logos/wrc.png'
import LogoWrx from '../../../public/logos/wrx.svg'

type LogoEntry = { svg: FC<SvgProps> } | { img: number }

// Same file choices as the web LOGO_MAP (src/components/SeriesLogo.tsx).
const LOGO_MAP: Record<string, LogoEntry> = {
  f1: { svg: LogoF1 },
  f2: { svg: LogoF2 },
  wec: { svg: LogoWec },
  indycar: { svg: LogoIndycar },
  nascar: { svg: LogoNascar },
  nls: { img: LogoNls },
  wrc: { img: LogoWrc },
  imsa: { svg: LogoImsa },
  dtm: { svg: LogoDtm },
  gtwc: { svg: LogoGtwc },
  supergt: { svg: LogoSupergt },
  elms: { img: LogoElms },
  igtc: { img: LogoIgtc },
  superformula: { svg: LogoSuperformula },
  supercars: { img: LogoSupercars },
  f3: { svg: LogoF3 },
  motogp: { svg: LogoMotogp },
  dakar: { svg: LogoDakar },
  fe: { svg: LogoFe },
  mlmc: { img: LogoMlmc },
  gtwcam: { svg: LogoGtwcam },
  gtwcasia: { svg: LogoGtwcasia },
  britgt: { svg: LogoBritgt },
  gtwcau: { img: LogoGtwcau },
  '24h': { img: Logo24h },
  special: { svg: LogoSpecial },
  wrx: { svg: LogoWrx },
  'porsche-supercup': { svg: LogoPorscheSupercup },
  'f1-academy': { svg: LogoF1Academy },
  moto2: { svg: LogoMoto2 },
  moto3: { svg: LogoMoto3 },
  'indy-nxt': { img: LogoIndyNxt },
  'nascar-xfinity': { svg: LogoNascarXfinity },
  'nascar-truck': { svg: LogoNascarTruck },
  impc: { svg: LogoImpc },
}

export function SeriesLogo({ seriesId, height = 24 }: { seriesId: string; height?: number }) {
  const { c } = useTheme()
  const entry = LOGO_MAP[seriesId]
  if (!entry) return null

  const width = Math.round(height * 2.2)
  const logo =
    'svg' in entry ? (
      <entry.svg width={width} height={height} />
    ) : (
      <Image source={entry.img} style={{ width, height }} resizeMode="contain" />
    )

  if (getSeriesMeta(seriesId)?.logoBgWhite !== true) {
    return <View style={{ alignItems: 'center' }}>{logo}</View>
  }
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: c('logo-bg'),
        borderRadius: 4,
        paddingVertical: 2,
        paddingHorizontal: 5,
      }}
    >
      {logo}
    </View>
  )
}
