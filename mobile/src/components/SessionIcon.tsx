// Vector session-type icons (lucide) replacing emoji, which don't render
// reliably across iOS/Android. Mapping mirrors the web's SESSION_ICONS intent:
// race/endurance → flag, qualifying → timer, sprint → bolt, hyperpole → target,
// practice/warmup → wrench, stage/shakedown → map.

import { Flag, Map, Target, Timer, Wrench, Zap, type LucideIcon } from 'lucide-react-native'

import type { SessionType } from '@/lib/types'

const ICONS: Record<SessionType, LucideIcon> = {
  race: Flag,
  endurance: Flag,
  qualifying: Timer,
  hyperpole: Target,
  sprint: Zap,
  sprint_qualifying: Zap,
  practice: Wrench,
  warmup: Wrench,
  stage: Map,
  shakedown: Map,
}

export function SessionIcon({
  type,
  size = 14,
  color,
}: {
  type: SessionType
  size?: number
  color: string
}) {
  const Icon = ICONS[type] ?? Flag
  return <Icon size={size} color={color} />
}
