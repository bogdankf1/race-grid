import type { ReactNode } from 'react'

export const metadata = {
  title: 'Race Grid MCP',
  description:
    'Public Model Context Protocol server for motorsport — 27 racing series, 6 seasons of calendars, results, and standings.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, sans-serif",
          background: '#0b0b0c',
          color: '#e6e6e6',
        }}
      >
        {children}
      </body>
    </html>
  )
}
