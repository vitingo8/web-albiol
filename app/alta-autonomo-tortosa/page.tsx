"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, FileText, Clock, User, Calculator, Shield } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"

export default function AltaAutonomoTortosaPage() {
  const [locale, setLocale] = useLocale()
  const router = useRouter()

  const handleLocaleChange = (newLocale: typeof locale) => {
    setLocale(newLocale)

    // Map current path to localized version
    const localeMap: Record<string, Record<string, string>> = {
      "/alta-autonomo-tortosa": {
        ca: "/alta-autonomo-tortosa",
        es: "/es/alta-autonomo-tortosa",
        en: "/en/freelancer-registration-tortosa",
        fr: "/fr/inscription-independant-tortosa",
        de: "/de/freiberufler-anmeldung-tortosa"
      }
    }

    const currentPath = "/alta-autonomo-tortosa"
    if (localeMap[currentPath]) {
      router.push(localeMap[currentPath][newLocale])
    }
  }
  const breadcrumbItems = [
    { label: "Alta Autònom Tortosa", href: "/alta-autonomo-tortosa" }
  ]

  const steps = [
    {
      icon: <User className="h-6 w-6" />,
      title: "Documentació Necessària",
      description: "DNI/NIE, certificat de convivència i declaració responsable",
      details: [
        "DNI o NIE en vigor",
        "Certificat d'empadronament",
        "Declaració responsable d'inici d'activitat",
        "Número de compte bancària"
      ]
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Model 036/037",
      description: "Alta censal a l'Agència Tributària",
      details: [
        "Dades personals i de l'activitat",
        "Règim d'IVA aplicable",
        "Activitats econòmiques",
        "Domicili fiscal"
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Alta a la Seguretat Social",
      description: "Inscripció al Règim Especial de Treballadors Autònoms (RETA)",
      details: [
        "Elecció de base de cotització",
        "Protecció social completa",
        "Cobertura sanitària",
        "Prestacions per incapacitat"
      ]
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Primera Declaració",
      description: "Model 130 trimestral o 131 mensual",
      details: [
        "IVA del primer trimestre",
        "IRPF estimat",
        "Pagament de quotes",
        "Presentació telemàtica"
      ]
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="ca" onLocaleChange={handleLocaleChange} />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <User className="h-4 w-4" />
                Guia Autònoms Tortosa
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
                Alta d'Autònom a Tortosa:
                <span className="text-primary block mt-2">Guia Completa 2024</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                T'acompanyem en tot el procés d'alta com a autònom a Tortosa.
                Des de la documentació fins a la primera declaració. Tot sense complicacions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contacte">
                    Inicia el Tràmit Ara
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#passos">
                    Veure els Passos
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section id="passos" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Els 4 Passos per donar-te d'alta</h2>
                <p className="text-xl text-muted-foreground">
                  Procés simplificat amb el nostre assessorament especialitzat
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {steps.map((step, index) => (
                  <div key={index} className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
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

              {/* Time and Cost */}
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-2xl text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">Temps</h4>
                  <p className="text-2xl font-bold text-primary">24-48h</p>
                  <p className="text-sm text-muted-foreground">Un cop tenim tota la documentació</p>
                </div>

                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-6 rounded-2xl text-center">
                  <Calculator className="h-8 w-8 text-secondary mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">Quota Mínima</h4>
                  <p className="text-2xl font-bold text-secondary">294€/any</p>
                  <p className="text-sm text-muted-foreground">Base mínima de cotització</p>
                </div>

                <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-2xl text-center">
                  <Shield className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">Protecció</h4>
                  <p className="text-lg font-bold text-accent">Completa</p>
                  <p className="text-sm text-muted-foreground">Cobertura sanitària inclosa</p>
                </div>
              </div>

              {/* Detailed Guide */}
              <div className="prose prose-lg max-w-none">
                <h2>Què necessites per donar-te d'alta com a autònom a Tortosa?</h2>

                <h3>1. Documentació Personal</h3>
                <ul>
                  <li>DNI o NIE en vigor</li>
                  <li>Certificat d'empadronament de Tortosa o municipi de residència</li>
                  <li>Número de telèfon i correu electrònic</li>
                  <li>Número IBAN del compte bancari on es faran els cobraments</li>
                </ul>

                <h3>2. Dades de l'Activitat</h3>
                <ul>
                  <li>Descripció detallada de l'activitat econòmica</li>
                  <li>Codi IAE (Impost sobre Activitat Econòmica)</li>
                  <li>Localització del centre de treball (si no és el domicili)</li>
                  <li>Previsió d'ingressos anuals</li>
                </ul>

                <h3>3. Elecció del Règim Fiscal</h3>
                <p>
                  Pots triar entre Estimació Directa (règim general) o Estimació Objectiva (mòduls).
                  A Tortosa, molts autònoms opten pel mòduls per la seva simplicitat administrativa.
                </p>

                <h3>4. Protecció Social</h3>
                <p>
                  L'alta al RETA et dona dret a cobertura sanitària, prestacions per incapacitat
                  temporal, maternitat/paternitat i jubilació. La quota mínima és de 294€ anuals.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
                  <h4 className="font-semibold text-blue-800 mb-2">💡 Consell Professional</h4>
                  <p className="text-blue-700">
                    Si ets resident a Tortosa però la teva activitat es realitza en un altre municipi,
                    pots mantenir el domicili fiscal a Tortosa sempre que sigui el teu centre de
                    direcció efectiva de l'activitat.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center mt-16">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Vols donar-te d'alta com a autònom a Tortosa?
                </h3>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                  T'acompanyem en tot el procés. Des de la preparació de documents fins a
                  la primera declaració trimestral. Tot gestionat pels nostres experts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Link href="/contacte">
                      Comença l'Alta Ara
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/20 text-primary hover:bg-white/10">
                    <Link href="/serveis/autonomos">
                      Més sobre Autònoms
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer locale="ca" onLocaleChange={() => {}} />
      <WhatsAppButton locale="ca" phoneNumber="+34680132404" />
    </div>
  )
}
