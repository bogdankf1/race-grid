import Image from 'next/image'

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
  elms: '/logos/elms.svg',
  igtc: '/logos/igtc.svg',
  superformula: '/logos/superformula.svg',
  supercars: '/logos/supercars.svg',
  f3: '/logos/f3.svg',
  motogp: '/logos/motogp.svg',
  dakar: '/logos/dakar.svg',
  fe: '/logos/fe.svg',
  mlmc: '/logos/mlmc.svg',
  gtwcam: '/logos/gtwcam.svg',
  gtwcasia: '/logos/gtwcasia.svg',
  britgt: '/logos/britgt.svg',
  gtwcau: '/logos/gtwcau.svg',
}

export function SeriesLogo({ seriesId, className, height = 24 }: SeriesLogoProps) {
  const src = LOGO_MAP[seriesId]
  if (!src) return null

  return (
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
}
