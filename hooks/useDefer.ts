"use client"

import React, { useEffect, useCallback } from 'react'

// Hook para diferir tareas pesadas y reducir bloqueo del hilo principal
export function useDefer(callback: () => void, delay: number = 100) {
  useEffect(() => {
    const deferExecution = () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(callback, { timeout: delay })
      } else {
        setTimeout(callback, delay)
      }
    }

    deferExecution()
  }, [callback, delay])
}

// Hook para ejecutar callbacks durante el próximo frame de animación
export function useAnimationFrame(callback: () => void) {
  const requestRef = React.useRef<number>()

  const animate = useCallback(() => {
    callback()
  }, [callback])

  useEffect(() => {
    const loop = () => {
      requestRef.current = requestAnimationFrame(loop)
      animate()
    }

    requestRef.current = requestAnimationFrame(loop)

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [animate])
}

// Hook para ejecutar tareas pesadas en chunks para evitar bloquear el hilo principal
export function useChunkedTask<T>(
  items: T[],
  processItem: (item: T) => void,
  chunkSize: number = 10
) {
  useEffect(() => {
    if (!items.length) return

    let index = 0

    const processChunk = () => {
      const endIndex = Math.min(index + chunkSize, items.length)

      for (let i = index; i < endIndex; i++) {
        processItem(items[i])
      }

      index = endIndex

      if (index < items.length) {
        // Continuar procesando en el siguiente idle callback
        if ('requestIdleCallback' in window) {
          requestIdleCallback(processChunk, { timeout: 16 }) // ~60fps
        } else {
          setTimeout(processChunk, 16)
        }
      }
    }

    processChunk()
  }, [items, processItem, chunkSize])
}
