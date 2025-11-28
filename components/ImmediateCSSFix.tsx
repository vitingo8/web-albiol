"use client"

import { useLayoutEffect } from 'react'

// Componente que se ejecuta inmediatamente para arreglar CSS bloqueante
export function ImmediateCSSFix() {
  useLayoutEffect(() => {
    // Ejecutar inmediatamente al montar
    const fixCSS = () => {
      const cssLinks = document.querySelectorAll('link[rel="stylesheet"]')

      cssLinks.forEach((link) => {
        const htmlLink = link as HTMLLinkElement
        const href = htmlLink.href

        // Solo procesar los chunks CSS problemáticos
        if ((href.includes('25864485cc1a6eb7') || href.includes('d8e14b76c7770c40')) && href.includes('.css')) {
          // Cambiar inmediatamente a preload
          htmlLink.rel = 'preload'
          htmlLink.as = 'style'
          htmlLink.setAttribute('data-async', 'true')

          // Convertir de vuelta a stylesheet después de un delay mínimo
          setTimeout(() => {
            htmlLink.rel = 'stylesheet'
            htmlLink.removeAttribute('as')
            htmlLink.removeAttribute('data-async')
          }, 10)
        }
      })
    }

    // Ejecutar inmediatamente
    fixCSS()
  }, [])

  return null
}
