"use client"

import { useEffect } from 'react'

// Preload de recursos críticos para mejorar LCP y FID
export function ResourcePreloader() {
  useEffect(() => {
    // Preload de imágenes críticas above-the-fold
    const criticalImages = [
      '/professional-office-tortosa-spain-business-meeting.jpg'
    ]

    criticalImages.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      link.fetchPriority = 'high'
      document.head.appendChild(link)
    })

    // Preload de fuentes críticas
    const fontLinks = [
      { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;700&display=swap', type: 'text/css' }
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

    // Cleanup function
    return () => {
      // No necesitamos cleanup específico ya que estos elementos se quedan en el DOM
    }
  }, [])

  return null
}
