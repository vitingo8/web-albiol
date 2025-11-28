"use client"

import { useEffect } from 'react'

// Preload de recursos críticos para mejorar LCP y FID
export function ResourcePreloader() {
  useEffect(() => {
    // Preload de imágenes críticas above-the-fold con WebP
    const criticalImages = [
      '/professional-office-tortosa-spain-business-meeting.webp',
      '/professional-team-meeting-office-modern-collaborat.webp'
    ]

    criticalImages.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      link.type = 'image/webp'
      link.fetchPriority = 'high'
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })

    // Preload de fuentes críticas con display swap para mejor rendimiento
    const fontLinks = [
      {
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;700&display=swap',
        type: 'text/css'
      }
    ]

    fontLinks.forEach(({ href, type }) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'style'
      link.href = href
      link.onload = function() {
        (this as any).onload = null
        ;(this as any).rel = 'stylesheet'
      }
      document.head.appendChild(link)
    })

    // Preconectar a orígenes externos importantes
    const preconnections = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ]

    preconnections.forEach(href => {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = href
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })

    // DNS prefetch para recursos externos
    const dnsPrefetch = [
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com'
    ]

    dnsPrefetch.forEach(href => {
      const link = document.createElement('link')
      link.rel = 'dns-prefetch'
      link.href = href
      document.head.appendChild(link)
    })

    // Cleanup function
    return () => {
      // No necesitamos cleanup específico ya que estos elementos se quedan en el DOM
    }
  }, [])

  return null
}
