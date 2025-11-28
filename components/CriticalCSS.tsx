"use client"

import { useEffect } from 'react'

// CSS crítico para above-the-fold content
const criticalCSS = `
  /* Critical CSS for above-the-fold content */
  .hero-section {
    min-height: 100vh;
    background: linear-gradient(135deg, #1e3a5f 0%, #2d5a8f 100%);
    position: relative;
    overflow: hidden;
  }

  .hero-section::before {
    content: '';
    position: absolute;
    top: -10%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: rgba(221, 176, 66, 0.2);
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.6;
    pointer-events: none;
  }

  .hero-section::after {
    content: '';
    position: absolute;
    bottom: -10%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: rgba(221, 176, 66, 0.1);
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.6;
    pointer-events: none;
  }

  .hero-title {
    font-size: clamp(2.5rem, 5vw, 5rem);
    font-weight: 700;
    line-height: 1.1;
    color: white;
    margin-bottom: 2rem;
  }

  .hero-subtitle {
    font-size: clamp(1.125rem, 2.5vw, 1.25rem);
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
    margin-bottom: 2.5rem;
    max-width: 500px;
  }

  .hero-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 2rem;
    background: #ddb042;
    color: #1e3a5f;
    border-radius: 9999px;
    font-weight: 600;
    text-decoration: none;
    transition: transform 0.2s ease;
  }

  .hero-cta:hover {
    transform: scale(1.05);
  }

  .hero-scroll {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }

  /* Loading states */
  .image-loading {
    background: #e5e7eb;
    animation: pulse 1.5s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`

export function CriticalCSS() {
  useEffect(() => {
    // Inyectar CSS crítico
    const style = document.createElement('style')
    style.textContent = criticalCSS
    style.setAttribute('data-critical', 'true')

    // Insertar antes del primer stylesheet existente
    const firstStylesheet = document.querySelector('link[rel="stylesheet"]')
    if (firstStylesheet) {
      firstStylesheet.parentNode?.insertBefore(style, firstStylesheet)
    } else {
      document.head.appendChild(style)
    }

    // Remover después de que el CSS completo se cargue
    const removeCriticalCSS = () => {
      const criticalStyle = document.querySelector('style[data-critical]')
      if (criticalStyle) {
        criticalStyle.remove()
      }
    }

    // Remover después de 3 segundos o cuando el CSS principal se cargue
    setTimeout(removeCriticalCSS, 3000)

    // Cleanup
    return removeCriticalCSS
  }, [])

  return null
}

