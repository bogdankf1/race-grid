'use client'

import { useRef, useState, useCallback, type ReactNode, type CSSProperties } from 'react'

interface SwipeContainerProps {
  children: ReactNode
  onSwipeLeft: () => void   // next
  onSwipeRight: () => void  // prev
  contentKey: string
}

const SWIPE_THRESHOLD = 50
const EDGE_IGNORE = 30
const ANIM_MS = 200

type Phase = 'exit-left' | 'exit-right' | 'enter-left' | 'enter-right' | 'settle' | null

export function SwipeContainer({ children, onSwipeLeft, onSwipeRight }: SwipeContainerProps) {
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const [phase, setPhase] = useState<Phase>(null)
  const busy = useRef(false)

  const animate = useCallback((direction: 'left' | 'right') => {
    if (busy.current) return
    busy.current = true

    // Swipe left → next: exit left, enter from right
    // Swipe right → prev: exit right, enter from left
    const exitPhase: Phase = direction === 'left' ? 'exit-left' : 'exit-right'
    const enterPhase: Phase = direction === 'left' ? 'enter-right' : 'enter-left'

    setPhase(exitPhase)

    setTimeout(() => {
      // Trigger navigation
      if (direction === 'left') onSwipeLeft()
      else onSwipeRight()

      // Position new content off-screen (no transition)
      setPhase(enterPhase)

      // Next frame: animate to center
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPhase('settle')
          setTimeout(() => {
            setPhase(null)
            busy.current = false
          }, ANIM_MS)
        })
      })
    }, ANIM_MS)
  }, [onSwipeLeft, onSwipeRight])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0]
    if (t.clientX < EDGE_IGNORE || t.clientX > window.innerWidth - EDGE_IGNORE) {
      touchStart.current = null
      return
    }
    touchStart.current = { x: t.clientX, y: t.clientY }
  }, [])

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchStart.current) return
    const t = e.changedTouches[0]
    const dx = t.clientX - touchStart.current.x
    const dy = t.clientY - touchStart.current.y
    touchStart.current = null

    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dy) > Math.abs(dx)) return

    animate(dx < 0 ? 'left' : 'right')
  }, [animate])

  const hasTransition = phase === 'exit-left' || phase === 'exit-right' || phase === 'settle'

  const style: CSSProperties = {
    transition: hasTransition ? `transform ${ANIM_MS}ms ease, opacity ${ANIM_MS}ms ease` : 'none',
    transform:
      phase === 'exit-left' ? 'translateX(-80px)' :
      phase === 'exit-right' ? 'translateX(80px)' :
      phase === 'enter-right' ? 'translateX(80px)' :
      phase === 'enter-left' ? 'translateX(-80px)' :
      'translateX(0)',
    opacity: phase === 'exit-left' || phase === 'exit-right' || phase === 'enter-left' || phase === 'enter-right' ? 0 : 1,
  }

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ overflow: 'hidden' }}
    >
      <div style={style}>
        {children}
      </div>
    </div>
  )
}
