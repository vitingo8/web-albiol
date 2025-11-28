"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, FileText, Clock, User, Calculator, Shield } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"

export default function FreiberuflerAnmeldungTortosaPage() {
  const [locale, setLocale] = useLocale()
  const router = useRouter()

  const handleLocaleChange = (newLocale: typeof locale) => {
    setLocale(newLocale)

    // Map current path to localized version
    const localeMap: Record<string, Record<string, string>> = {
      "/de/freiberufler-anmeldung-tortosa": {
        ca: "/alta-autonomo-tortosa",
        es: "/es/alta-autonomo-tortosa",
        en: "/en/freelancer-registration-tortosa",
        fr: "/fr/inscription-independant-tortosa",
        de: "/de/freiberufler-anmeldung-tortosa"
      }
    }

    const currentPath = "/de/freiberufler-anmeldung-tortosa"
    if (localeMap[currentPath]) {
      router.push(localeMap[currentPath][newLocale])
    }
  }

  const breadcrumbItems = [
    { label: "Freiberufler Anmeldung Tortosa", href: "/de/freiberufler-anmeldung-tortosa" }
  ]

  const steps = [
    {
      icon: <User className="h-6 w-6" />,
      title: "Erforderliche Dokumentation",
      description: "Personalausweis/NIE, Meldebescheinigung und verantwortliche Erklärung",
      details: [
        "Gültiger Personalausweis oder NIE",
        "Meldebescheinigung",
        "Verantwortliche Erklärung über den Beginn der Tätigkeit",
        "Bankkontonummer"
      ]
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Formular 036/037",
      description: "Zensusanmeldung beim Finanzamt",
      details: [
        "Persönliche und Tätigkeitsdaten",
        "Anwendbares Umsatzsteuerregime",
        "Wirtschaftliche Tätigkeiten",
        "Steueranschrift"
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Sozialversicherungsanmeldung",
      description: "Einschreibung im Besonderen Regime für Selbständige (RETA)",
      details: [
        "Wahl der Beitragsbemessungsgrundlage",
        "Vollständiger sozialer Schutz",
        "Krankenversicherung",
        "Erwerbsunfähigkeitsleistungen"
      ]
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Steuerliche Pflichten",
      description: "Quartalsweise Umsatzsteuer und jährliche Einkommensteuererklärung",
      details: [
        "Quartalsweise Umsatzsteuer (Formular 303)",
        "Intragemeinschaftliche Umsätze",
        "Einkommensteuererklärung (IRPF)",
        "Teilzahlungen"
      ]
    }
  ]

  const requirements = [
    { label: "Mindestalter", value: "18 Jahre" },
    { label: "Wohnsitz", value: "Im spanischen Hoheitsgebiet" },
    { label: "Tätigkeit", value: "Beruflich oder wirtschaftlich" },
    { label: "Dokumentation", value: "Vollständig und aktualisiert" }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="de" onLocaleChange={handleLocaleChange} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <User className="h-4 w-4" />
                Freiberufler Anmeldung in Tortosa
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
                Freiberufler
                <span className="text-primary block mt-2">Anmeldung in Tortosa</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Wir bearbeiten Ihre Freiberufler-Anmeldung vollständig und professionell.
                Wir kümmern uns um alle Formalitäten beim Finanzamt und der Sozialversicherung.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contacte">
                    Anmeldung Beantragen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#anforderungen">
                    Anforderungen Anzeigen
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Freiberufler Anmeldungsprozess</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Wir führen Sie Schritt für Schritt durch den gesamten Prozess der Gründung als selbständiger Arbeitnehmer
                  in Tortosa und den Terres de l'Ebre.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {steps.map((step, index) => (
                  <div key={index} className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Requirements */}
              <div id="anforderungen" className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Anforderungen für die Anmeldung</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {requirements.map((req, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-bold mb-2">{req.label}</h4>
                      <p className="text-muted-foreground">{req.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Brauchen Sie Hilfe bei Ihrer Freiberufler-Anmeldung?
              </h3>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Bei Albiol Consultors kümmern wir uns um alle Formalitäten schnell und sicher.
                Kontaktieren Sie uns und wir helfen Ihnen bei Ihrer Freiberufler-Gründung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="/contacte">
                    Informationen Anfordern
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 text-primary hover:bg-white/10">
                  <Link href="/serveis/autonomos">
                    Mehr über Freiberufler
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale="de" onLocaleChange={() => {}} />
      <WhatsAppButton locale="de" phoneNumber="+34680132404" />
    </div>
  )
}
