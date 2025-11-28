import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@next/third-parties/google"
import "./globals.css"
import { Suspense } from "react"
import { SEO_CONFIG } from "@/config/seo-config"
import { CriticalCSS } from "@/components/CriticalCSS"
import { ResourcePreloader } from "@/components/ResourcePreloader"

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
    canonical: "https://albiolconsultors.com",
    languages: {
      "ca-ES": "https://albiolconsultors.com/ca",
      "es-ES": "https://albiolconsultors.com/es",
      "en-US": "https://albiolconsultors.com/en",
      "fr-FR": "https://albiolconsultors.com/fr",
      "de-DE": "https://albiolconsultors.com/de",
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
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Albiol Consultors",
  },
  other: {
    "msapplication-TileColor": "#ddb042",
    "msapplication-config": "/browserconfig.xml",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#ddb042",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
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
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quins són els vostres honoraris?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Els nostres honoraris depenen dels serveis que necessitis. Oferim pressupostos personalitzats i sense compromís. Contacta'ns i t'enviarem una proposta adaptada a les teves necessitats."
        }
      },
      {
        "@type": "Question",
        name: "Puc fer tots els tràmits de manera online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, oferim gestió 100% online per a la majoria de serveis. Tens accés a un portal de client on pots enviar documentació, consultar l'estat dels teus tràmits i comunicar-te amb el teu assessor."
        }
      },
      {
        "@type": "Question",
        name: "Quant de temps triga donar-se d'alta com a autònom?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El tràmit d'alta d'autònom es pot completar en 24-48 hores un cop disposem de tota la documentació necessària. T'acompanyem en tot el procés."
        }
      },
      {
        "@type": "Question",
        name: "Oferiu servei a empreses de fora de Tortosa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, tot i que les nostres oficines estan a Tortosa, treballem amb clients de tota la província de Tarragona i Catalunya. Gràcies a les nostres eines digitals, podem oferir el mateix servei de qualitat a distància."
        }
      },
      {
        "@type": "Question",
        name: "Què passa si tinc una inspecció d'Hisenda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "T'acompanyem i representem davant qualsevol requeriment o inspecció tributària. El nostre equip té àmplia experiència en la defensa dels interessos dels nostres clients davant l'Administració."
        }
      },
      {
        "@type": "Question",
        name: "Puc canviar de gestoria durant l'any fiscal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, pots canviar de gestoria en qualsevol moment. Ens encarreguem de sol·licitar tota la documentació a la teva gestoria anterior i assegurem una transició sense problemes."
        }
      }
    ]
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Maria García"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      reviewBody: "Albiol Consultors m'ha acompanyat des que vaig obrir el meu negoci. La seva proximitat i claredat m'han donat tranquil·litat per centrar-me en el que realment importa."
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Joan Martí"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      reviewBody: "Portem més de 15 anys treballant junts. La seva experiència en el sector i el coneixement del territori són incomparables. Un equip de confiança."
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Carla Rodríguez"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      reviewBody: "Excel·lent servei per a autònoms. M'han ajudat amb tots els tràmits i sempre tenen una resposta clara i ràpida."
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Pere Soler"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      reviewBody: "Professionalitat i eficàcia. En moments difícils amb inspeccions, han estat al meu costat oferint suport jurídic expert."
    }
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inici",
        item: "https://albiolconsultors.com"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Serveis",
        item: "https://albiolconsultors.com/serveis"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Contacte",
        item: "https://albiolconsultors.com/contacte"
      }
    ]
  }
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
        <CriticalCSS />
        <ResourcePreloader />
        <Suspense fallback={null}>{children}</Suspense>
        {process.env.NODE_ENV === "production" && (
          <>
            <Analytics />
            <GoogleAnalytics gaId={SEO_CONFIG.analytics.googleAnalyticsId} />
          </>
        )}
      </body>
    </html>
  )
}
