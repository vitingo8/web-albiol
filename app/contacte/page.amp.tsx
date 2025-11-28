import { Metadata } from "next"
import { SEO_CONFIG } from "@/config/seo-config"

export const metadata: Metadata = {
  title: "Contacte | Albiol Consultors - Gestoria Tortosa",
  description: "Contacta amb Albiol Consultors. Assessoria fiscal, laboral i comptable a Tortosa. Carrer Argentina 9, 2A. Telèfon: 680 132 404",
  keywords: ["contacte gestoria tortosa", "telèfon assessoria fiscal", "adreça comptables tortosa"],
  openGraph: {
    title: "Contacte - Albiol Consultors",
    description: "Contacta amb la nostra gestoria a Tortosa per assessoria fiscal i comptable",
    url: `${SEO_CONFIG.site.url}/contacte`,
  },
}

export default function ContacteAMPPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contacte - Albiol Consultors",
    "description": "Contacta amb Albiol Consultors per assessoria fiscal i comptable a Tortosa",
    "url": `${SEO_CONFIG.site.url}/contacte`,
    "mainEntity": {
      "@type": "AccountingService",
      "name": SEO_CONFIG.site.name,
      "telephone": SEO_CONFIG.contact.phone,
      "email": SEO_CONFIG.contact.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": SEO_CONFIG.contact.address.street,
        "addressLocality": SEO_CONFIG.contact.address.city,
        "addressRegion": SEO_CONFIG.contact.address.region,
        "postalCode": SEO_CONFIG.contact.address.postalCode,
        "addressCountry": SEO_CONFIG.contact.address.country,
      },
      "openingHours": "Mo-Fr 09:00-18:00",
    }
  }

  return (
    <html amp="" lang="ca">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,minimum-scale=1" />
        <title>Contacte | Albiol Consultors - Gestoria Tortosa</title>
        <meta name="description" content="Contacta amb Albiol Consultors. Assessoria fiscal, laboral i comptable a Tortosa. Carrer Argentina 9, 2A. Telèfon: 680 132 404" />
        <link rel="canonical" href={`${SEO_CONFIG.site.url}/contacte`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* AMP Boilerplate */}
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>

        <style amp-boilerplate>{`
          body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}
        `}</style>
        <noscript>
          <style amp-boilerplate>{`
            body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}
          `}</style>
        </noscript>
      </head>
      <body>
        <div className="min-h-screen bg-background">
          {/* Header AMP */}
          <header className="bg-primary text-primary-foreground py-4 px-6">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <a href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="font-serif text-xl font-bold">A</span>
                </div>
                <div>
                  <span className="font-serif text-lg font-bold">Albiol</span>
                  <span className="text-xs uppercase tracking-widest opacity-80 block">Consultors</span>
                </div>
              </a>
              <a href={`tel:${SEO_CONFIG.contact.phone}`} className="text-sm font-medium">
                📞 {SEO_CONFIG.contact.phone}
              </a>
            </div>
          </header>

          {/* Hero Section */}
          <section className="py-12 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Contacta amb nosaltres
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Som aquí per ajudar-te. Contacta'ns per assessoria fiscal, laboral o comptable.
              </p>
            </div>
          </section>

          {/* Contact Content */}
          <main className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card p-8 rounded-2xl border">
                <h2 className="text-2xl font-bold mb-6">Envia'ns un missatge</h2>

                <form
                  method="post"
                  action-xhr="/api/contact"
                  target="_top"
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Nom complet *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Correu electrònic *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Telèfon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">Servei d'interès</label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Selecciona un servei</option>
                      <option value="fiscal">Assessoria Fiscal</option>
                      <option value="laboral">Assessoria Laboral</option>
                      <option value="comptable">Comptabilitat</option>
                      <option value="tramits">Tràmits Administratius</option>
                      <option value="autonom">Alta d'Autònom</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Missatge *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Explica'ns com podem ajudar-te..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Enviar missatge
                  </button>

                  <div submit-success>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800 font-medium">Missatge enviat correctament!</p>
                      <p className="text-green-700 text-sm mt-1">Et contactarem el més aviat possible.</p>
                    </div>
                  </div>

                  <div submit-error>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-800 font-medium">Error en enviar el missatge</p>
                      <p className="text-red-700 text-sm mt-1">Si us plau, intenta-ho de nou o contacta'ns per telèfon.</p>
                    </div>
                  </div>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-card p-8 rounded-2xl border">
                  <h2 className="text-2xl font-bold mb-6">Informació de contacte</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        📍
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Adreça</h3>
                        <p className="text-muted-foreground">{SEO_CONFIG.contact.address.street}</p>
                        <p className="text-muted-foreground">{SEO_CONFIG.contact.address.postalCode} {SEO_CONFIG.contact.address.city}, {SEO_CONFIG.contact.address.region}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        📞
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Telèfon</h3>
                        <a href={`tel:${SEO_CONFIG.contact.phone}`} className="text-primary hover:underline">
                          {SEO_CONFIG.contact.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        ✉️
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Correu electrònic</h3>
                        <a href={`mailto:${SEO_CONFIG.contact.email}`} className="text-primary hover:underline">
                          {SEO_CONFIG.contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        🕒
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Horari</h3>
                        <p className="text-muted-foreground">Dilluns a Divendres</p>
                        <p className="text-muted-foreground">9:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-card p-8 rounded-2xl border">
                  <h2 className="text-2xl font-bold mb-6">Ubicació</h2>
                  <amp-iframe
                    width="400"
                    height="300"
                    layout="responsive"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1d2988.9!2d0.5214!3d40.8125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a0c1e1e1e1e1e1%3A0x1234567890abcdef!2sCarrer%20Argentina%2C%209%2C%2043500%20Tortosa%2C%20Tarragona!5e0!3m2!1sca!2ses!4v1234567890"
                    frameborder="0"
                  >
                    <amp-img
                      layout="fill"
                      src="/map-placeholder.jpg"
                      placeholder
                      alt="Mapa ubicació Albiol Consultors Tortosa"
                    ></amp-img>
                  </amp-iframe>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-primary text-primary-foreground py-12 px-6 mt-16">
            <div className="max-w-6xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="font-serif text-lg font-bold">A</span>
                </div>
                <span className="font-serif text-lg font-bold">Albiol Consultors</span>
              </div>
              <p className="text-primary-foreground/70 mb-4">
                Assessoria fiscal, laboral i comptable a Tortosa
              </p>
              <p className="text-sm text-primary-foreground/50">
                © 2024 Albiol Consultors. Tots els drets reservats.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
