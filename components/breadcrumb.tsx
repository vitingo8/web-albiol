"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import type { Locale } from "@/lib/i18n"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  locale: Locale
}

export function Breadcrumb({ items, locale }: BreadcrumbProps) {
  const homeLabel = locale === "ca" ? "Inici" : locale === "es" ? "Inicio" : "Home"

  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-1 text-sm text-muted-foreground mb-6">
      <Link
        href="/"
        className="flex items-center hover:text-foreground transition-colors"
      >
        <Home className="h-4 w-4 mr-1" />
        <span className="sr-only">{homeLabel}</span>
        <span className="hidden sm:inline">{homeLabel}</span>
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground/50" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}

