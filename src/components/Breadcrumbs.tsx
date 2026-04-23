'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export interface BreadcrumbItem {
  label: string
  href?: string
}

const BASE_URL = 'https://race-grid.com'

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (items.length === 0) return null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 16, flexWrap: 'wrap' }}>
        {items.map((item, i) => (
          <span key={item.href ?? item.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
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
    </>
  )
}
