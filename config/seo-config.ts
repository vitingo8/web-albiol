// Configuración centralizada SEO - Fácil mantenimiento
export const SEO_CONFIG = {
  // Site information
  site: {
    name: 'Albiol Consultors',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://albiolconsultors.com',
    description: 'Assessoria fiscal, laboral i comptable a Tortosa. Gestoria online i presencial amb més de 20 anys d\'experiència.',
    ogImage: '/og-image.jpg',
  },

  // Social media
  social: {
    twitter: '@albiolconsultors',
    linkedin: 'https://www.linkedin.com/company/albiol-consultors',
    facebook: 'https://www.facebook.com/albiolconsultors',
  },

  // Contact information
  contact: {
    phone: '+34 680 132 404',
    email: 'info@albiolconsultors.com',
    address: {
      street: 'Carrer Argentina, 9, 2A',
      city: 'Tortosa',
      region: 'Catalunya',
      country: 'Spain',
      postalCode: '43500',
    },
  },

  // Business information
  business: {
    type: 'AccountingService',
    category: 'Assessoria Fiscal',
    foundingDate: '2003',
    priceRange: '€€',
    paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
    currenciesAccepted: 'EUR',
  },

  // Analytics & Tracking
  analytics: {
    googleAnalyticsId: process.env.GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID',
    googleAdsConversionId: process.env.GOOGLE_ADS_CONVERSION_ID,
    googleAdsConversionLabel: process.env.GOOGLE_ADS_CONVERSION_LABEL,
  },

  // Verification codes
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || 'google-site-verification-code',
    bing: process.env.BING_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    baidu: process.env.BAIDU_SITE_VERIFICATION,
  },

  // Local SEO
  local: {
    geoRegion: 'ES-CT',
    geoPlacename: 'Tortosa',
    geoPosition: '40.8125;0.5214',
    ICBM: '40.8125, 0.5214',
  },

  // Technical settings
  technical: {
    themeColor: '#ddb042',
    backgroundColor: '#ffffff',
    defaultLocale: 'ca',
    supportedLocales: ['ca', 'es', 'en', 'fr', 'de'],
  },
}

// Utility functions
export const getCanonicalUrl = (path: string = '') =>
  `${SEO_CONFIG.site.url}${path.startsWith('/') ? path : `/${path}`}`

export const getAlternateUrls = (path: string = '') => {
  const baseUrl = SEO_CONFIG.site.url
  const cleanPath = path.startsWith('/') ? path : `/${path}`

  return SEO_CONFIG.technical.supportedLocales.reduce((acc, locale) => {
    acc[`${locale}-${SEO_CONFIG.local.geoRegion}`] = `${baseUrl}/${locale}${cleanPath}`
    return acc
  }, {} as Record<string, string>)
}

export const getBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: SEO_CONFIG.site.name,
  description: SEO_CONFIG.site.description,
  url: SEO_CONFIG.site.url,
  logo: `${SEO_CONFIG.site.url}/logo.png`,
  image: `${SEO_CONFIG.site.url}${SEO_CONFIG.site.ogImage}`,
  telephone: SEO_CONFIG.contact.phone,
  email: SEO_CONFIG.contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SEO_CONFIG.contact.address.street,
    addressLocality: SEO_CONFIG.contact.address.city,
    addressRegion: SEO_CONFIG.contact.address.region,
    postalCode: SEO_CONFIG.contact.address.postalCode,
    addressCountry: SEO_CONFIG.contact.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SEO_CONFIG.local.geoPosition.split(';')[0],
    longitude: SEO_CONFIG.local.geoPosition.split(';')[1],
  },
  areaServed: {
    '@type': 'Place',
    name: 'Terres de l\'Ebre',
    addressRegion: 'Catalunya',
    addressCountry: 'Spain',
  },
  openingHours: 'Mo-Fr 09:00-18:00',
  priceRange: SEO_CONFIG.business.priceRange,
  foundingDate: SEO_CONFIG.business.foundingDate,
  sameAs: [
    SEO_CONFIG.social.linkedin,
    SEO_CONFIG.social.facebook,
  ],
})

