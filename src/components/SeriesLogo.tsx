import Image from 'next/image'
import { getSeriesMeta } from '@/data/series-registry'

interface SeriesLogoProps {
  seriesId: string
  className?: string
  height?: number
}

const LOGO_MAP: Record<string, string> = {
  f1: '/logos/f1.svg',
  f2: '/logos/f2.svg',
  wec: '/logos/wec.svg',
  indycar: '/logos/indycar.svg',
  nascar: '/logos/nascar.svg',
  nls: '/logos/nls.png',
  wrc: '/logos/wrc.png',
  imsa: '/logos/imsa.svg',
  dtm: '/logos/dtm.svg',
  gtwc: '/logos/gtwc.svg',
  supergt: '/logos/supergt.svg',
  elms: '/logos/elms.png',
  igtc: '/logos/igtc.png',
  superformula: '/logos/superformula.svg',
  supercars: '/logos/supercars.png',
  f3: '/logos/f3.svg',
  motogp: '/logos/motogp.svg',
  dakar: '/logos/dakar.svg',
  fe: '/logos/fe.svg',
  mlmc: '/logos/mlmc.png',
  gtwcam: '/logos/gtwcam.svg',
  gtwcasia: '/logos/gtwcasia.svg',
  britgt: '/logos/britgt.svg',
  gtwcau: '/logos/gtwcau.png',
  '24h': '/logos/24h.jpg',
  special: '/logos/special.svg',
  wrx: '/logos/wrx.svg',
  'porsche-supercup': '/logos/porsche-supercup.svg',
  'f1-academy': '/logos/f1-academy.svg',
  moto2: '/logos/moto2.svg',
  moto3: '/logos/moto3.svg',
  'indy-nxt': '/logos/indy-nxt.png',
  'nascar-xfinity': '/logos/nascar-xfinity.svg',
  'nascar-truck': '/logos/nascar-truck.svg',
}

export function SeriesLogo({ seriesId, className, height = 24 }: SeriesLogoProps) {
  const src = LOGO_MAP[seriesId]
  if (!src) return null

  const meta = getSeriesMeta(seriesId)
  const needsBg = meta?.logoBgWhite === true

  const img = (
    <Image
      src={src}
      alt={`${seriesId.toUpperCase()} logo`}
      width={Math.round(height * 3)}
      height={height}
      className={className}
      unoptimized
      style={{
        height,
        width: 'auto',
        objectFit: 'contain',
      }}
    />
  )

  if (!needsBg) return img

  // Theme-aware padded background — `--rg-logo-bg` is white in dark mode and
  // transparent in light mode, so logos with dark/transparent strokes stay
  // visible on dark surfaces without changing their light-mode appearance.
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--rg-logo-bg)',
        borderRadius: 4,
        padding: '2px 5px',
      }}
    >
      {img}
    </span>
  )
}
