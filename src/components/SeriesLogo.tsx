import Image from 'next/image'

interface SeriesLogoProps {
  seriesId: string
  className?: string
  height?: number
}

const LOGO_MAP: Record<string, string> = {
  f1: '/logos/f1.svg',
  wec: '/logos/wec.svg',
  indycar: '/logos/indycar.svg',
  nascar: '/logos/nascar.svg',
  nls: '/logos/nls.png',
  wrc: '/logos/wrc.png',
  imsa: '/logos/imsa.svg',
  dtm: '/logos/dtm.svg',
  gtwc: '/logos/gtwc.svg',
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
