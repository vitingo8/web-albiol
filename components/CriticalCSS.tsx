"use client"

import { useEffect } from 'react'

// CSS crítico para above-the-fold content
const criticalCSS = `
  /* Critical CSS for above-the-fold content - expanded */

  /* Base styles */
  *, ::before, ::after {
    box-sizing: border-box;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    font-family: Inter, system-ui, -apple-system, sans-serif;
    font-feature-settings: normal;
    font-variation-settings: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Container and layout */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (min-width: 640px) {
    .container {
      padding: 0 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    .container {
      padding: 0 2rem;
    }
  }

  @media (min-width: 1280px) {
    .container {
      padding: 0 3rem;
    }
  }

  /* Grid utilities */
  .grid {
    display: grid;
  }

  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .gap-12 {
    gap: 3rem;
  }

  @media (min-width: 1024px) {
    .lg\\:gap-20 {
      gap: 5rem;
    }
  }

  .items-center {
    align-items: center;
  }

  /* Hero section */
  .relative {
    position: relative;
  }

  .min-h-\\[100vh\\] {
    min-height: 100vh;
  }

  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .bg-primary {
    background-color: #1e3a5f;
  }

  .text-primary-foreground {
    color: #ffffff;
  }

  .pt-24 {
    padding-top: 6rem;
  }

  .pb-12 {
    padding-bottom: 3rem;
  }

  @media (min-width: 1024px) {
    .lg\\:pt-24 {
      padding-top: 6rem;
    }
    .lg\\:pb-14 {
      padding-bottom: 3.5rem;
    }
  }

  .overflow-hidden {
    overflow: hidden;
  }

  /* Decorative elements */
  .absolute {
    position: absolute;
  }

  .top-\\[\\-10\\%\\] {
    top: -10%;
  }

  .left-\\[\\-10\\%\\] {
    left: -10%;
  }

  .bottom-\\[\\-10\\%\\] {
    bottom: -10%;
  }

  .right-\\[\\-10\\%\\] {
    right: -10%;
  }

  .w-\\[500px\\] {
    width: 500px;
  }

  .h-\\[500px\\] {
    height: 500px;
  }

  .w-\\[600px\\] {
    width: 600px;
  }

  .h-\\[600px\\] {
    height: 600px;
  }

  .bg-secondary\\/20 {
    background-color: rgba(221, 176, 66, 0.2);
  }

  .bg-secondary\\/10 {
    background-color: rgba(221, 176, 66, 0.1);
  }

  .rounded-full {
    border-radius: 9999px;
  }

  .blur-\\[120px\\] {
    filter: blur(120px);
  }

  .opacity-60 {
    opacity: 0.6;
  }

  .pointer-events-none {
    pointer-events: none;
  }

  .z-10 {
    z-index: 10;
  }

  /* Typography */
  .font-serif {
    font-family: "Playfair Display", serif;
  }

  .font-bold {
    font-weight: 700;
  }

  .text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  @media (min-width: 640px) {
    .sm\\:text-5xl {
      font-size: 3rem;
      line-height: 1;
    }
  }

  @media (min-width: 768px) {
    .md\\:text-6xl {
      font-size: 3.75rem;
      line-height: 1;
    }
  }

  @media (min-width: 1024px) {
    .lg\\:text-7xl {
      font-size: 4.5rem;
      line-height: 1;
    }
  }

  .leading-\\[1\\.1\\] {
    line-height: 1.1;
  }

  .text-balance {
    text-wrap: balance;
  }

  .mb-8 {
    margin-bottom: 2rem;
  }

  .text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  @media (min-width: 768px) {
    .md\\:text-xl {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }

  .leading-relaxed {
    line-height: 1.625;
  }

  .max-w-lg {
    max-width: 32rem;
  }

  .font-light {
    font-weight: 300;
  }

  .mb-10 {
    margin-bottom: 2.5rem;
  }

  /* Buttons */
  .flex-col {
    flex-direction: column;
  }

  @media (min-width: 640px) {
    .sm\\:flex-row {
      flex-direction: row;
    }
  }

  .gap-5 {
    gap: 1.25rem;
  }

  .mb-16 {
    margin-bottom: 4rem;
  }

  .h-14 {
    height: 3.5rem;
  }

  .px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .bg-secondary {
    background-color: #ddb042;
  }

  .text-slate-950 {
    color: #020617;
  }

  .hover\\:bg-secondary\\/90:hover {
    background-color: rgba(221, 176, 66, 0.9);
  }

  .font-semibold {
    font-weight: 600;
  }

  .rounded-full {
    border-radius: 9999px;
  }

  .shadow-\\[0_0_20px_rgba\\(221\\,176\\,66\\,0\\.15\\)\\] {
    box-shadow: 0 0 20px rgba(221, 176, 66, 0.15);
  }

  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .hover\\:scale-105:hover {
    transform: scale(1.05);
  }

  /* Scroll indicator */
  .bottom-8 {
    bottom: 2rem;
  }

  .left-1\\/2 {
    left: 50%;
  }

  .-translate-x-1\\/2 {
    transform: translateX(-50%);
  }

  .animate-bounce {
    animation: bounce 1s infinite;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }

  .text-primary-foreground\\/70 {
    color: rgba(255, 255, 255, 0.7);
  }

  .hover\\:text-primary-foreground:hover {
    color: #ffffff;
  }

  .transition-colors {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .group:hover .group-hover\\:translate-x-1 {
    transform: translateX(0.25rem);
  }

  /* Loading and image states */
  .image-loading {
    background: #e5e7eb;
    animation: pulse 1.5s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  /* Utility classes */
  .hidden {
    display: none;
  }

  @media (min-width: 1024px) {
    .lg\\:block {
      display: block;
    }
  }

  .animate-in {
    animation-fill-mode: both;
  }

  .fade-in {
    animation-name: fade-in;
  }

  .slide-in-from-bottom-8 {
    animation-name: slide-in-from-bottom-8;
  }

  .slide-in-from-right-12 {
    animation-name: slide-in-from-right-12;
  }

  .duration-1000 {
    animation-duration: 1000ms;
  }

  .delay-200 {
    animation-delay: 200ms;
  }

  .delay-500 {
    animation-delay: 500ms;
  }

  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slide-in-from-bottom-8 {
    from {
      opacity: 0;
      transform: translateY(2rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-in-from-right-12 {
    from {
      opacity: 0;
      transform: translateX(3rem);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes zoom-in {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`

export function CriticalCSS() {
  useEffect(() => {
    // Usar requestIdleCallback para inyectar CSS crítico cuando el hilo principal esté libre
    const injectCriticalCSS = () => {
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
    }

    // Ejecutar cuando el navegador esté idle
    if ('requestIdleCallback' in window) {
      requestIdleCallback(injectCriticalCSS, { timeout: 1000 })
    } else {
      // Fallback
      setTimeout(injectCriticalCSS, 50)
    }

    // Cleanup
    return () => {
      const criticalStyle = document.querySelector('style[data-critical]')
      if (criticalStyle) {
        criticalStyle.remove()
      }
    }
  }, [])

  return null
}
