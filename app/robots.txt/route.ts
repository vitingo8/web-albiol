import { NextResponse } from 'next/server'

export async function GET() {
  const robotsTxt = `# Albiol Consultors - Gestoria i Assessoria Fiscal
# https://albiolconsultors.com

User-agent: *
Allow: /

# Páginas principales
Allow: /
Allow: /gestoria-online
Allow: /sobre-nosaltres
Allow: /contacte
Allow: /serveis
Allow: /serveis/fiscal
Allow: /serveis/laboral
Allow: /serveis/comptable
Allow: /serveis/autonomos
Allow: /serveis/tramits
Allow: /fons-transicio-nuclear
Allow: /blog
Allow: /area-privada

# Páginas de contenido SEO
Allow: /guia-fiscal-tortosa
Allow: /alta-autonomo-tortosa
Allow: /recursos-fiscals
Allow: /directori-empreses-tortosa

# Archivos importantes para SEO
Allow: /sitemap.xml

# Deshabilitar acceso a archivos internos
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/

# Sitemap
Sitemap: https://albiolconsultors.com/sitemap.xml

# Crawl delay (opcional)
Crawl-delay: 1`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
