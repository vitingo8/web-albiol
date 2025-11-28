"use client"

import { useEffect } from 'react'

// Componente para cargar CSS restante de forma asíncrona
export function AsyncCSS() {
  useEffect(() => {
    // Estrategia más agresiva: convertir CSS bloqueante a preload inmediatamente
    const convertToAsync = () => {
      // Encontrar todos los links de CSS que no sean críticos y que contengan chunks
      const cssLinks = document.querySelectorAll('link[rel="stylesheet"]:not([data-critical])')

      cssLinks.forEach((link: Element) => {
        const htmlLink = link as HTMLLinkElement
        const href = htmlLink.href

        // Solo procesar chunks CSS de Next.js (que contienen rutas con chunks)
        if (href.includes('/chunks/') && href.includes('.css')) {
          // Crear preload link
          const preloadLink = document.createElement('link')
          preloadLink.rel = 'preload'
          preloadLink.as = 'style'
          preloadLink.href = href
          preloadLink.crossOrigin = 'anonymous'

          // Una vez preload termine, convertir a stylesheet
          preloadLink.onload = () => {
            preloadLink.rel = 'stylesheet'
            preloadLink.onload = null
            preloadLink.onerror = null
          }

          // Manejar errores
          preloadLink.onerror = () => {
            // Fallback: cargar como stylesheet normal
            const fallbackLink = document.createElement('link')
            fallbackLink.rel = 'stylesheet'
            fallbackLink.href = href
            fallbackLink.crossOrigin = 'anonymous'
            document.head.appendChild(fallbackLink)
          }

          // Reemplazar el link bloqueante con el preload
          link.parentNode?.replaceChild(preloadLink, link)
        }
      })
    }

    // Ejecutar inmediatamente sin esperar al CSS crítico
    // Esto es más agresivo para eliminar el bloqueo de renderizado
    if ('requestIdleCallback' in window) {
      requestIdleCallback(convertToAsync, { timeout: 100 })
    } else {
      // Fallback inmediato para navegadores sin requestIdleCallback
      setTimeout(convertToAsync, 1)
    }
  }, [])

  return null
}
