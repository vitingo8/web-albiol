import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['ca', 'es', 'en', 'fr', 'de']
const defaultLocale = 'ca'

// Simplified middleware - let pages handle locale detection
export function middleware(request: NextRequest) {
  // For now, let the pages work without locale prefix
  // The locale is handled by the Header component
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|sitemap.xml|robots.txt|manifest.json).*)',
  ],
}
