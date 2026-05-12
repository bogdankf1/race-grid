// Landing page for the Race Grid MCP — visible to humans who hit the
// deployment URL in a browser. The actual MCP traffic flows through
// /mcp (Streamable HTTP) and /sse (Server-Sent Events).

const TOOLS = [
  ['list_series', 'List all 27 racing series with their group and metadata.'],
  ['get_calendar', 'Full race calendar for one series and one season (UTC).'],
  ['get_next_race', 'Next upcoming race, optionally scoped to a series and a local timezone.'],
  ['get_race_results', 'Race results: overall podium, class podiums, fastest lap.'],
  ['get_standings', 'Driver and constructor championship tables for a season.'],
  ['get_circuit', 'Circuit metadata — length, turns, layout type, country.'],
  ['search_races', 'Find races in a date window, filterable by country and series.'],
] as const

export default function Page() {
  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '64px 24px' }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>Race Grid MCP</h1>
      <p style={{ color: '#9a9a9a', marginTop: 0, fontSize: 16 }}>
        A public Model Context Protocol server for motorsport — 27 racing series,{' '}
        2021–2026 calendars, results, championship standings, and circuits.
      </p>

      <h2 style={{ fontSize: 20, marginTop: 40 }}>Connect</h2>
      <p style={{ color: '#c0c0c0' }}>Streamable HTTP endpoint:</p>
      <Code>{`https://${typeof window !== 'undefined' ? window.location.host : 'your-deployment.vercel.app'}/mcp`}</Code>
      <p style={{ color: '#c0c0c0' }}>SSE endpoint:</p>
      <Code>{`https://${typeof window !== 'undefined' ? window.location.host : 'your-deployment.vercel.app'}/sse`}</Code>

      <h2 style={{ fontSize: 20, marginTop: 40 }}>Tools</h2>
      <ul style={{ paddingLeft: 18, lineHeight: 1.7 }}>
        {TOOLS.map(([name, desc]) => (
          <li key={name}>
            <code style={{ color: '#f0c060' }}>{name}</code>
            <span style={{ color: '#9a9a9a' }}> — {desc}</span>
          </li>
        ))}
      </ul>

      <h2 style={{ fontSize: 20, marginTop: 40 }}>Source</h2>
      <p style={{ color: '#9a9a9a' }}>
        Backed by{' '}
        <a href="https://race-grid.app" style={{ color: '#f0c060' }}>
          race-grid.app
        </a>{' '}
        — the motorsport calendar with local-time conversion for every session.
      </p>
    </main>
  )
}

function Code({ children }: { children: string }) {
  return (
    <pre
      style={{
        background: '#16161a',
        border: '1px solid #2a2a30',
        borderRadius: 6,
        padding: '12px 16px',
        overflowX: 'auto',
        fontSize: 13,
        color: '#d8d8d8',
      }}
    >
      <code>{children}</code>
    </pre>
  )
}
