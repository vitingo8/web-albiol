"use client"

import Image from 'next/image'
import { useState } from 'react'
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
    <div className={cn("relative overflow-hidden", className)}>
      <picture>
        {/* WebP for modern browsers */}
        <source
          srcSet={webpSrc}
          type="image/webp"
          sizes={sizes}
        />
        {/* Fallback to original format */}
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          sizes={sizes}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        />
      </picture>

      {/* Loading skeleton */}
      {!isLoaded && !priority && (
        <div
          className="absolute inset-0 bg-muted animate-pulse"
          style={{ width, height }}
        />
      )}
    </div>
  )
}

// Hook para preload crítico
export function useImagePreload(src: string) {
  const [isLoaded, setIsLoaded] = useState(false)

  useState(() => {
    const img = new window.Image()
    img.src = src
    img.onload = () => setIsLoaded(true)
  })

  return isLoaded
}
