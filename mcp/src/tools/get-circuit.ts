import { z } from 'zod'
import { getCircuitInfo } from '../data-bridge'

const schema = {
  circuit_id: z
    .string()
    .describe(
      'Circuit slug, e.g. "circuit-de-monaco", "suzuka-international-racing-course", "indianapolis-motor-speedway-oval". Find ids by inspecting a calendar response (event.circuitId).',
    ),
}

export const getCircuitTool = {
  name: 'get_circuit',
  description:
    'Get metadata for a single circuit — length, turn count, layout type (permanent/street/oval/mixed), country, and Wikipedia slug.',
  schema,
  handler: async (args: { circuit_id: string }) => {
    const c = getCircuitInfo(args.circuit_id)
    if (!c) {
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify({ error: `Unknown circuit_id "${args.circuit_id}".` }),
          },
        ],
      }
    }
    return { content: [{ type: 'text' as const, text: JSON.stringify(c, null, 2) }] }
  },
}
