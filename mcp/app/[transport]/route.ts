import { createMcpHandler } from 'mcp-handler'
import { registerTools } from '../../src/server'

// HTTP/SSE entrypoint for the Race Grid MCP server.
// Handles both /mcp (Streamable HTTP) and /sse (Server-Sent Events) transports
// via the Next.js dynamic-route segment.
const handler = createMcpHandler(
  (server) => {
    registerTools(server)
  },
  {
    serverInfo: { name: 'race-grid', version: '0.1.0' },
  },
  {
    basePath: '',
    maxDuration: 60,
    verboseLogs: false,
  },
)

export { handler as GET, handler as POST, handler as DELETE }
