"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { SocialShare } from "@/components/social-share"
import {
  ArrowRight,
  Download,
  FileText,
  Calculator,
  BookOpen,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  Info,
  TrendingUp
} from "lucide-react"

export default function RecursosFiscalsPage() {
  const currentUrl = "/recursos-fiscals"

  const resources = [
    {
      category: "Formularis i Models",
      icon: <FileText className="h-6 w-6" />,
      items: [
        {
          title: "Model 036/037 - Alta Censal",
          description: "Formulari d'alta en el cens d'obligats tributaris (actualitzat 2025)",
          link: "https://www.agenciatributaria.es",
          external: true
        },
        {
          title: "Model 100 - Declaració Renda 2025",
          description: "IRPF 2025 - Amb nova escala autonòmica de Catalunya",
          link: "https://www.agenciatributaria.es",
          external: true
        },
        {
          title: "Model 130 - Pagament a compte",
          description: "Declaració trimestral per a autònoms (amb canvis 2025)",
          link: "https://www.agenciatributaria.es",
          external: true
        },
        {
          title: "Model 303 - IVA",
          description: "Autoliquidació mensual/trimestral de l'IVA",
          link: "https://www.agenciatributaria.es",
          external: true
        }
      ]
    },
    {
      category: "Calculadores Fiscals",
      icon: <Calculator className="h-6 w-6" />,
      items: [
        {
          title: "Calculadora IRPF 2025",
          description: "Calcula la teva quota d'IRPF amb la nova escala autonòmica",
          link: "https://www.agenciatributaria.es",
          external: true
        },
        {
          title: "Simulador IVA",
          description: "Calcula l'IVA dels teus productes/serveis",
          link: "https://www.agenciatributaria.es",
          external: true
        },
        {
          title: "Compara Règims Autònoms",
          description: "Estimació directa vs mòduls - avantatges i inconvenients",
          link: "https://www.agenciatributaria.es",
          external: true
        }
      ]
    },
    {
      category: "Actualitat Fiscal",
      icon: <TrendingUp className="h-6 w-6" />,
      items: [
        {
          title: "Reforma Fiscal Catalunya 2025",
          description: "Nova escala IRPF, canvis en transmissions patrimonials i successions",
          link: "/guia-fiscal-tortosa",
          external: false
        },
        {
          title: "IRPF Catalunya 2025 - Nous Trams",
          description: "Reducció tipus impositiu primer tram (9,5%) i simplificació escala autonòmica",
          link: "https://www.agenciatributaria.es",
          external: true
        },
        {
          title: "ITP/AJD - Canvis 2025",
          description: "Nous tipus impositius transmissions patrimonials i actes jurídics",
          link: "https://www.agenciatributaria.es",
          external: true
        },
        {
          title: "Impost sobre Successions 2025",
          description: "Modificacions en l'impost sobre successions i donacions a Catalunya",
          link: "https://www.agenciatributaria.es",
          external: true
        }
      ]
    },
    {
      category: "Guies i Manuals",
      icon: <BookOpen className="h-6 w-6" />,
      items: [
        {
          title: "Guia Fiscal Tortosa 2025",
          description: "Fiscalitat autonòmica i local actualitzada amb la reforma 2025",
          link: "/guia-fiscal-tortosa",
          external: false
        },
        {
          title: "Alta d'Autònom a Catalunya",
          description: "Procés complet d'alta com a autònom amb novetats 2025",
          link: "/alta-autonomo-tortosa",
          external: false
        },
        {
          title: "Deduccions IRPF Catalunya 2025",
          description: "Guia completa de deduccions fiscals disponibles a Catalunya",
          link: "https://www.agenciatributaria.es",
          external: true
        },
        {
          title: "Fiscalitat Local Tortosa",
          description: "Impostos municipals, taxes i bonificacions a Tortosa",
          link: "https://www.tortosa.cat",
          external: true
        }
      ]
    }
  ]

  const usefulLinks = [
    {
      title: "Agència Tributària",
      description: "Web oficial de l'administració tributària espanyola",
      url: "https://www.agenciatributaria.es",
      category: "Administración"
    },
    {
      title: "Seguretat Social",
      description: "Gestió d'autònoms i treballadors",
      url: "https://www.seg-social.es",
      category: "Seguridad Social"
    },
    {
      title: "Generalitat de Catalunya",
      description: "Departament d'Economia i Hisenda de Catalunya",
      url: "https://economia.gencat.cat",
      category: "Autonómico"
    },
    {
      title: "Cambra de Comerç de Tortosa",
      description: "Suport als empresaris de les Terres de l'Ebre",
      url: "https://www.camaradetortosa.com",
      category: "Local"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="ca" onLocaleChange={() => {}} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <FileText className="h-4 w-4" />
                Recursos Fiscals
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
                Recursos Fiscals
                <span className="text-primary block mt-2">Tortosa 2025</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Tots els recursos, formularis i eines que necessites per gestionar
                la teva fiscalitat a Tortosa i Catalunya. Actualitzats amb la Reforma Fiscal 2025.
              </p>

              <SocialShare
                url={currentUrl}
                title="Recursos Fiscals Tortosa 2024 - Albiol Consultors"
                description="Tots els recursos i formularis fiscals que necessites a Tortosa"
                locale="ca"
                className="justify-center mb-8"
              />
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Eines i Recursos Fiscals</h2>
                <p className="text-xl text-muted-foreground">
                  Actualitzats amb la Reforma Fiscal Catalunya 2025 - Formularis, calculadores i guies completes
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {resources.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold">{category.category}</h3>
                    </div>

                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="border-b border-border/50 pb-4 last:border-0 last:pb-0">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                            {item.external ? (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-medium"
                              >
                                <ExternalLink className="h-4 w-4" />
                                Obrir
                              </a>
                            ) : (
                              <Link
                                href={item.link}
                                className="flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-medium"
                              >
                                <ArrowRight className="h-4 w-4" />
                                Veure
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Useful Links */}
              <div className="bg-card rounded-3xl p-8 md:p-12 border border-border">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Enllaços d'Interès</h3>
                  <p className="text-muted-foreground">
                    Web oficials i recursos autoritzats per a la gestió fiscal
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {usefulLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-gradient-to-br from-muted/50 to-muted/30 p-6 rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {link.category}
                        </span>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {link.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {link.description}
                      </p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">Avís Legal</h4>
                    <p className="text-amber-700 text-sm leading-relaxed">
                      Aquesta pàgina conté enllaços a recursos externs oficials. Albiol Consultors no es fa responsable
                      del contingut ni dels canvis en aquests recursos. Per assessorament personalitzat, contacta amb nosaltres.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Necessites Assessoria Fiscal Especialitzada?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Els nostres experts en fiscalitat autonòmica et poden ajudar a optimitzar la teva tributació i aprofitar totes les deduccions disponibles a Tortosa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="/contacte">
                    Demana Primera Consulta
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 text-primary hover:bg-white/10">
                  <Link href="/serveis/fiscal">
                    Més sobre Serveis Fiscals
                  </Link>
                </Button>
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
