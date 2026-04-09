'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (items.length === 0) return null

  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 16, flexWrap: 'wrap' }}>
      {items.map((item, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          {i > 0 && <ChevronRight style={{ width: 12, height: 12, color: 'var(--rg-text3)' }} />}
          {item.href ? (
            <Link
              href={item.href}
              style={{ fontSize: 13, color: 'var(--rg-text3)', textDecoration: 'none' }}
            >
              {item.label}
            </Link>
          ) : (
            <span style={{ fontSize: 13, color: 'var(--rg-text2)' }}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
