// Minimal client for the public race-grid MCP server (streamable HTTP).
// The server is stateless: a single POST with a `tools/call` request works
// without an initialize handshake. Responses come back SSE-framed
// (`event: message\ndata: {...}`) or as plain JSON depending on transport.

import type { SessionType } from '@/lib/types'

const MCP_URL = 'https://race-grid-mcp.vercel.app/mcp'
const TIMEOUT_MS = 30_000

interface JsonRpcResponse {
  jsonrpc: '2.0'
  id: number
  result?: { content?: Array<{ type: string; text?: string }>; isError?: boolean }
  error?: { code: number; message: string }
}

function parseBody(raw: string, contentType: string): JsonRpcResponse {
  if (contentType.includes('text/event-stream')) {
    for (const line of raw.split('\n')) {
      if (line.startsWith('data: ')) {
        return JSON.parse(line.slice(6)) as JsonRpcResponse
      }
    }
    throw new Error('MCP: no data frame in SSE response')
  }
  return JSON.parse(raw) as JsonRpcResponse
}

export async function callTool<T>(name: string, args: Record<string, unknown>): Promise<T> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(MCP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json, text/event-stream',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: Date.now(),
        method: 'tools/call',
        params: { name, arguments: args },
      }),
      signal: controller.signal,
    })
    if (!res.ok) throw new Error(`MCP: HTTP ${res.status}`)
    const rpc = parseBody(await res.text(), res.headers.get('content-type') ?? '')
    if (rpc.error) throw new Error(`MCP: ${rpc.error.message}`)
    const text = rpc.result?.content?.[0]?.text
    if (!text) throw new Error('MCP: empty tool result')
    const payload = JSON.parse(text) as T & { error?: string }
    if (payload.error) throw new Error(`MCP: ${payload.error}`)
    return payload
  } finally {
    clearTimeout(timer)
  }
}

// ───────── Tool payload shapes (mirror mcp/src/data-bridge.ts) ─────────

export interface RemoteSession {
  type: SessionType
  label: string
  startUtc: string
  durationMinutes?: number
  tba?: boolean
}

export interface CalendarEntry {
  eventId: string
  round?: number
  name: string
  seriesId: string
  circuitId: string
  circuitName: string
  country: string
  countryCode: string
  startUtc: string
  endUtc: string
  sessions: RemoteSession[]
}

export interface RemoteSessionResult {
  sessionType: SessionType
  overall: { drivers: string[]; team: string }
  classes?: Array<{
    className: string
    podium: Array<{ position: number; drivers: string[]; team: string }>
  }>
  fastestLap?: string
}

/** Every event of the given year across all series, in one round trip. */
export async function fetchYearCalendar(year: number): Promise<CalendarEntry[]> {
  const payload = await callTool<{ count: number; events: CalendarEntry[] }>('search_races', {
    from_date: `${year}-01-01`,
    to_date: `${year}-12-31`,
  })
  return payload.events
}

/** Results for a single event (empty array if none recorded yet). */
export async function fetchEventResults(eventId: string): Promise<RemoteSessionResult[]> {
  const seriesId = eventId.split('-2')[0] // event ids are `<seriesId>-<year>-<slug>`
  try {
    const payload = await callTool<{ eventId: string; results: RemoteSessionResult[] }>(
      'get_race_results',
      { series_id: seriesId, year: yearFromEventId(eventId), event_id: eventId },
    )
    return payload.results
  } catch {
    // "No results found" comes back as a tool error — treat as no data.
    return []
  }
}

function yearFromEventId(eventId: string): number {
  const m = eventId.match(/-(\d{4})-/)
  return m ? parseInt(m[1], 10) : new Date().getUTCFullYear()
}
