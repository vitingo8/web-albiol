import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: {
    default: "Albiol Consultors | Gestoria i Assessoria Fiscal, Laboral i Comptable a Tortosa",
    template: "%s | Albiol Consultors - Gestoria Tortosa",
  },
  description:
    "Gestoria i assessoria fiscal, laboral i comptable a Tortosa, Terres de l'Ebre. Més de 20 anys d'experiència ajudant empreses, autònoms i particulars. Assessoria IVA, IRPF, nòmines, comptabilitat i tràmits administratius. Carrer Argentina 9, 2A.",
  keywords: [
    "gestoria Tortosa",
    "assessoria fiscal Tortosa",
    "gestoria laboral Tortosa",
    "comptabilitat pimes Tortosa",
    "gestoria autònoms Terres de l'Ebre",
    "assessoria empreses Tortosa",
    "declaració renda Tortosa",
    "nòmines Tortosa",
    "assessoria IVA",
    "assessoria IRPF",
    "alta autònoms Tortosa",
    "gestoria online Terres de l'Ebre",
    "assessoria comptable Tortosa",
    "gestoria mercantil Tortosa",
    "tràmits administratius Tortosa",
    "Albiol Consultors",
    "gestoria Terres de l'Ebre",
    "assessoria fiscal Tarragona",
    "gestoria empreses Catalunya",
  ],
  authors: [{ name: "Albiol Consultors" }],
  creator: "Albiol Consultors",
  publisher: "Albiol Consultors",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://albiolconsultors.com"),
  alternates: {
    canonical: "/",
    languages: {
      "ca-ES": "/",
      "es-ES": "/es",
      "en-US": "/en",
      "fr-FR": "/fr",
      "de-DE": "/de",
    },
  },
  openGraph: {
    type: "website",
    locale: "ca_ES",
    alternateLocale: ["es_ES", "en_US", "fr_FR", "de_DE"],
    url: "https://albiolconsultors.com",
    siteName: "Albiol Consultors",
    title: "Albiol Consultors | Gestoria i Assessoria a Tortosa",
    description:
      "Gestoria i assessoria fiscal, laboral i comptable a Tortosa. Més de 20 anys d'experiència al servei de les Terres de l'Ebre.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Albiol Consultors - Gestoria i Assessoria a Tortosa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Albiol Consultors | Gestoria i Assessoria a Tortosa",
    description:
      "Gestoria i assessoria fiscal, laboral i comptable a Tortosa. Més de 20 anys d'experiència al servei de les Terres de l'Ebre.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#1E3A5F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Albiol Consultors",
  description: "Gestoria i assessoria fiscal, laboral i comptable a Tortosa, Terres de l'Ebre.",
  url: "https://albiolconsultors.com",
  telephone: "+34680132404",
  email: "info@albiolconsultors.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Carrer Argentina, 9, 2A",
    addressLocality: "Tortosa",
    addressRegion: "Tarragona",
    postalCode: "43500",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.8125,
    longitude: 0.5214,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "16:00",
      closes: "19:00",
    },
  ],
  priceRange: "$$",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 40.8125,
      longitude: 0.5214,
    },
    geoRadius: "50000",
  },
  sameAs: [
    "https://www.linkedin.com/company/albiolconsultors",
    "https://www.facebook.com/albiolconsultors",
    "https://www.instagram.com/albiolconsultors",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serveis d'Assessoria",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Assessoria Fiscal",
          description: "Gestió d'IVA, IRPF, Impost de Societats i planificació fiscal.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Assessoria Laboral",
          description: "Nòmines, contractes, Seguretat Social i gestió de personal.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Comptabilitat",
          description: "Comptabilitat general, balanços i comptes anuals.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gestoria per a Autònoms",
          description: "Alta d'autònoms i declaracions trimestrals.",
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ca">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
