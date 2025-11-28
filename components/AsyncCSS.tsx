"use client"

import { useEffect } from 'react'

// Componente para cargar CSS restante de forma asíncrona
export function AsyncCSS() {
  useEffect(() => {
    // Función para cargar CSS de forma asíncrona
    const loadAsyncCSS = () => {
      // Encontrar todos los links de CSS que no sean críticos
      const cssLinks = document.querySelectorAll('link[rel="stylesheet"]:not([data-critical])')

      cssLinks.forEach(link => {
        // Crear una nueva versión asíncrona del link
        const asyncLink = document.createElement('link')
        asyncLink.rel = 'preload'
        asyncLink.as = 'style'
        asyncLink.href = link.href
        asyncLink.onload = () => {
          // Una vez cargado, convertir a stylesheet
          asyncLink.rel = 'stylesheet'
          asyncLink.onload = null
        }

        // Reemplazar el link original con el asíncrono
        link.parentNode?.replaceChild(asyncLink, link)
      })
    }

    // Esperar a que el CSS crítico se cargue y luego cargar el resto
    const checkCriticalCSS = () => {
      const criticalStyle = document.querySelector('style[data-critical]')
      if (criticalStyle) {
        // CSS crítico está presente, ahora podemos cargar el resto de forma asíncrona
        setTimeout(loadAsyncCSS, 100)
      } else {
        // Reintentar en el siguiente frame
        requestAnimationFrame(checkCriticalCSS)
      }
    }

    checkCriticalCSS()
  }, [])

  return null
}
