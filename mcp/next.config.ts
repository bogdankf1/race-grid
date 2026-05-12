import path from 'node:path'
import type { NextConfig } from 'next'

// The MCP project lives in `mcp/` but imports race-grid data from `../src/`.
// outputFileTracingRoot tells Vercel/Next.js where the import root sits so
// parent-directory imports get traced and bundled into the deployed function.
const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname, '..'),
  experimental: {
    // The race-grid data modules are plain TS but live outside the mcp/ root.
    // externalDir lets Next.js bundle them via path aliases.
    externalDir: true,
  },
}

export default nextConfig
