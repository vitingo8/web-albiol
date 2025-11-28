"use client"

import { useEffect } from 'react'

// Optimizaciones de animaciones para reducir tareas del hilo principal
export function OptimizedAnimations() {
  useEffect(() => {
    // Forzar aceleración por hardware para animaciones
    const style = document.createElement('style')
    style.textContent = `
      /* Optimizaciones de animaciones para mejor rendimiento */
      .animate-in {
        will-change: transform, opacity;
        transform: translateZ(0); /* Forzar aceleración por hardware */
      }

      .animate-in[data-animation="complete"] {
        will-change: auto;
      }

      /* Optimizaciones para scroll */
      .scroll-smooth {
        scroll-behavior: smooth;
      }

      /* Optimizaciones para hover states */
      .hover-scale {
        transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
      }

      .hover-scale:hover {
        transform: scale(1.05) translateZ(0);
      }

      /* Reducir repaints para animaciones complejas */
      .complex-animation {
        contain: layout style paint;
        will-change: transform;
      }
    `
    document.head.appendChild(style)

    // Cleanup de will-change después de animaciones
    const cleanupAnimations = () => {
      const animatedElements = document.querySelectorAll('.animate-in')
      animatedElements.forEach(el => {
        setTimeout(() => {
          el.setAttribute('data-animation', 'complete')
        }, 1000) // Después de que termine la animación
      })
    }

    // Ejecutar cleanup cuando el DOM esté listo
    if (document.readyState === 'complete') {
      cleanupAnimations()
    } else {
      window.addEventListener('load', cleanupAnimations)
    }

    return () => {
      document.head.removeChild(style)
      window.removeEventListener('load', cleanupAnimations)
    }
  }, [])

  return null
}
