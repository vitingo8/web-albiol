"use client"

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  sizes?: string
  loading?: 'lazy' | 'eager'
  onLoad?: () => void
  onError?: () => void
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  sizes,
  loading,
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imgRef = useRef<HTMLDivElement>(null)

  // Intersection Observer para lazy loading automático - optimizado para rendimiento
  useEffect(() => {
    if (priority || loading === 'eager') {
      setIsInView(true)
      return
    }

    // Usar requestIdleCallback para inicializar el observer cuando el hilo principal esté libre
    const initObserver = () => {
      if (!imgRef.current) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          // Usar requestAnimationFrame para cambios de estado durante animaciones
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              setIsInView(true)
              observer.disconnect()
            })
          }
        },
        {
          threshold: 0.1,
          rootMargin: '100px', // Cargar 100px antes de que entre en viewport
        }
      )

      observer.observe(imgRef.current)

      return () => observer.disconnect()
    }

    // Inicializar el observer cuando el navegador esté idle
    if ('requestIdleCallback' in window) {
      requestIdleCallback(initObserver, { timeout: 2000 })
    } else {
      // Fallback para navegadores que no soportan requestIdleCallback
      setTimeout(initObserver, 100)
    }

    return () => {
      // Cleanup se maneja dentro de initObserver
    }
  }, [priority, loading])

  // Generate WebP srcSet for modern browsers
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp')

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    onError?.()
  }

  if (hasError) {
    return (
      <div
        className={cn(
          "bg-muted flex items-center justify-center text-muted-foreground text-sm",
          className
        )}
        style={{ width, height }}
      >
        Imatge no disponible
      </div>
    )
  }

  return (
    <div
      ref={imgRef}
      className={cn("relative overflow-hidden", className)}
      style={{ width, height }}
    >
      {isInView && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
          loading={loading || (priority ? 'eager' : 'lazy')}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        />
      )}

      {/* Loading skeleton */}
      {!isLoaded && isInView && !priority && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
    </div>
  )
}

// Hook para preload crítico de imágenes
export function useImagePreload(src: string) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!src) return

    const img = new Image()
    img.src = src
    img.onload = () => setIsLoaded(true)
    img.onerror = () => setIsLoaded(false) // Manejar errores de preload

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src])

  return isLoaded
}

// Hook para lazy loading con Intersection Observer optimizado
export function useLazyImage() {
  const [isInView, setIsInView] = useState(false)
  const [hasBeenSeen, setHasBeenSeen] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenSeen) {
          setIsInView(true)
          setHasBeenSeen(true)
          observer.disconnect() // Desconectar después de la primera intersección
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px', // Margen para cargar antes de que entre en viewport
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [hasBeenSeen])

  return { ref, isInView }
}
