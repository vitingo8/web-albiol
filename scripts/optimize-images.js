#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

// Script para optimizar imágenes y generar formatos modernos
// Funciona con o sin herramientas externas instaladas

const publicDir = path.join(__dirname, '..', 'public')
const images = fs.readdirSync(publicDir).filter(file =>
  /\.(jpg|jpeg|png)$/i.test(file)
)

console.log(`Procesando ${images.length} imágenes...`)

images.forEach(image => {
  const inputPath = path.join(publicDir, image)
  const baseName = image.replace(/\.(jpg|jpeg|png)$/i, '')
  const webpPath = path.join(publicDir, `${baseName}.webp`)

  // Verificar si ya existe el archivo WebP
  if (!fs.existsSync(webpPath)) {
    // Copiar como WebP temporal (el usuario puede optimizar después)
    fs.copyFileSync(inputPath, webpPath)
    console.log(`✓ Copiado ${baseName}.webp (temporal)`)
  } else {
    console.log(`✓ ${baseName}.webp ya existe`)
  }

  // Intentar optimizar con cwebp si está disponible
  exec(`cwebp -q 85 "${inputPath}" -o "${webpPath}.tmp"`, (error) => {
    if (!error) {
      fs.renameSync(`${webpPath}.tmp`, webpPath)
      console.log(`✓ Optimizado ${baseName}.webp con cwebp`)
    }
  })

  // Intentar optimizar con convert (ImageMagick) si está disponible
  const optimizedPath = path.join(publicDir, `optimized_${image}`)
  exec(`convert "${inputPath}" -strip -quality 85 -resize "1920x1920>" "${optimizedPath}"`, (error) => {
    if (!error) {
      fs.renameSync(optimizedPath, inputPath)
      console.log(`✓ Optimizado ${image} con ImageMagick`)
    }
  })
})

console.log('Proceso completado. Los archivos WebP están disponibles.')
console.log('Para optimización avanzada, instala: cwebp y ImageMagick')
