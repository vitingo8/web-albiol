"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, FileText, Calculator, AlertTriangle, TrendingUp } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"

export default function GuiaFiscalTortosaPage() {
  const [locale, setLocale] = useLocale()
  const router = useRouter()

  const handleLocaleChange = (newLocale: typeof locale) => {
    setLocale(newLocale)

    // Map current path to localized version
    const localeMap: Record<string, Record<string, string>> = {
      "/guia-fiscal-tortosa": {
        ca: "/guia-fiscal-tortosa",
        es: "/es/guia-fiscal-tortosa",
        en: "/en/fiscal-guide-tortosa",
        fr: "/fr/guide-fiscale-tortosa",
        de: "/de/steuerführung-tortosa"
      }
    }

    const currentPath = "/guia-fiscal-tortosa"
    if (localeMap[currentPath]) {
      router.push(localeMap[currentPath][newLocale])
    }
  }

  const breadcrumbItems = [
    { label: "Guia Fiscal Tortosa", href: "/guia-fiscal-tortosa" }
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
                <FileText className="h-4 w-4" />
                Guia Fiscal Tortosa 2025
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
                Reforma Fiscal Catalunya 2025:
                <span className="text-primary block mt-2">Tot el que necessites saber</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Guia completa sobre la nova reforma fiscal a Catalunya: IRPF, transmissions patrimonials,
                successions i deduccions locals a Tortosa i les Terres de l'Ebre.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contacte">
                    Consulta Gratuïta
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#impostos">
                    Veure Guia Completa
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section id="impostos" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              {/* Introduction to 2025 Reform */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Decret Llei 5/2025 - Reforma Fiscal Catalunya 2025</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  La Generalitat de Catalunya ha aprovat importants canvis fiscals que entren en vigor el 2025.
                  Aquests canvis afecten l'IRPF, les transmissions patrimonials, les successions i altres impostos
                  que impacten directament als contribuents de Tortosa i les Terres de l'Ebre.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-card p-8 rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">IRPF Catalunya 2025</h3>
                  <p className="text-muted-foreground mb-4">
                    Nova escala autonòmica amb reducció del tipus impositiu del primer tram (9,5%)
                    i simplificació de 9 a 8 trams.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Tipus reduït primer tram: 9,5%</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Escala simplificada (8 trams)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>En vigor des del 27 de març de 2025</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card p-8 rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">ITP/AJD - Transmissions</h3>
                  <p className="text-muted-foreground mb-4">
                    Nous tipus impositius per transmissions patrimonials i actes jurídics documentats.
                    Especialment rellevant per compres d'habitatge.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span>Nous tipus per habitatges &gt; 600.000€</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span>Bonificacions per menors de 35 anys</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span>En vigor des del 26 de juny de 2025</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Detailed Content */}
              <div className="prose prose-lg max-w-none">
                <h2>Nova Escala IRPF Catalunya 2025</h2>
                <p>
                  El Decret Llei 5/2025 introdueix una reducció significativa en el tipus impositiu del primer tram
                  de l'IRPF autonòmic, passant del 10,5% al 9,5%. Aquesta mesura busca alleujar la càrrega fiscal
                  dels contribuents amb rendes més baixes i acostar la fiscalitat catalana a altres comunitats autònomes.
                </p>

                {/* Enhanced Fiscal Reform Sections */}
                <div className="grid md:grid-cols-1 gap-6 my-8">
                  {/* ITP/AJD Section */}
                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary mb-2">Modificacions en ITP/AJD</h3>
                        <p className="text-primary/80 leading-relaxed">
                          S'han introduït nous tipus impositius per transmissions patrimonials, especialment rellevants per compres d'habitatge amb valors superiors a 600.000€. Tanmateix, s'han mantingut bonificacions importants per als menors de 35 anys.
                        </p>
                        <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                          📅 En vigor: 26 juny 2025
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Successions Section */}
                  <div className="bg-gradient-to-r from-secondary/5 to-secondary/10 border border-secondary/20 rounded-xl p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Canvis en Successions i Donacions</h3>
                        <p className="text-slate-700 leading-relaxed">
                          El Decret Llei 5/2025 modifica l'Impost sobre Successions i Donacions, amb canvis que entren en vigor el 26 de juny de 2025.
                        </p>
                        <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary/10 text-slate-800">
                          ⚖️ Impost sobre Successions
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Deduccions Section */}
                  <div className="bg-gradient-to-r from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Deduccions per Naixement i Habitatge</h3>
                        <p className="text-slate-700 leading-relaxed">
                          S'introdueixen noves deduccions per naixement, adopció o acolliment, així com mesures per fomentar l'accés a l'habitatge per als joves.
                        </p>
                        <div className="mt-3 flex gap-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-slate-800">
                            👶 Naixement
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-slate-800">
                            🏠 Habitatge
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced IRPF Table */}
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-2xl p-8 my-12 shadow-lg">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Escala IRPF Catalunya 2025</h3>
                    <p className="text-slate-600">Nova tarifa autonòmica amb reducció del primer tram</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-3 rounded-full"></div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
                      <thead>
                        <tr className="bg-gradient-to-r from-primary to-primary/80 text-white">
                          <th className="px-6 py-4 text-center font-bold text-sm uppercase tracking-wider">
                            Base Liquidable<br/>Fins a (€)
                          </th>
                          <th className="px-6 py-4 text-center font-bold text-sm uppercase tracking-wider">
                            Quota Íntegra<br/>(€)
                          </th>
                          <th className="px-6 py-4 text-center font-bold text-sm uppercase tracking-wider">
                            Resta Base<br/>Fins a (€)
                          </th>
                          <th className="px-6 py-4 text-center font-bold text-sm uppercase tracking-wider">
                            Tipus<br/>Aplicat (%)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {/* Highlighted first row - reduced rate */}
                        <tr className="bg-gradient-to-r from-green-50 to-emerald-50 hover:bg-green-100 transition-colors">
                          <td className="px-6 py-4 text-center font-semibold text-slate-800">0,00</td>
                          <td className="px-6 py-4 text-center font-semibold text-slate-800">0,00</td>
                          <td className="px-6 py-4 text-center font-semibold text-slate-800">12.500,00</td>
                          <td className="px-6 py-4 text-center">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-green-500 text-white">
                              9,50%
                            </span>
                          </td>
                        </tr>

                        <tr className="bg-white hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 text-center text-slate-700">12.500,00</td>
                          <td className="px-6 py-4 text-center text-slate-700">1.187,50</td>
                          <td className="px-6 py-4 text-center text-slate-700">9.500,00</td>
                          <td className="px-6 py-4 text-center font-medium text-slate-800">12,50%</td>
                        </tr>

                        <tr className="bg-slate-50 hover:bg-slate-100 transition-colors">
                          <td className="px-6 py-4 text-center text-slate-700">22.000,00</td>
                          <td className="px-6 py-4 text-center text-slate-700">2.375,00</td>
                          <td className="px-6 py-4 text-center text-slate-700">11.000,00</td>
                          <td className="px-6 py-4 text-center font-medium text-slate-800">16,00%</td>
                        </tr>

                        <tr className="bg-white hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 text-center text-slate-700">33.000,00</td>
                          <td className="px-6 py-4 text-center text-slate-700">4.135,00</td>
                          <td className="px-6 py-4 text-center text-slate-700">20.000,00</td>
                          <td className="px-6 py-4 text-center font-medium text-slate-800">19,00%</td>
                        </tr>

                        <tr className="bg-slate-50 hover:bg-slate-100 transition-colors">
                          <td className="px-6 py-4 text-center text-slate-700">53.000,00</td>
                          <td className="px-6 py-4 text-center text-slate-700">7.935,00</td>
                          <td className="px-6 py-4 text-center text-slate-700">37.000,00</td>
                          <td className="px-6 py-4 text-center font-medium text-slate-800">21,50%</td>
                        </tr>

                        <tr className="bg-white hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 text-center text-slate-700">90.000,00</td>
                          <td className="px-6 py-4 text-center text-slate-700">15.890,00</td>
                          <td className="px-6 py-4 text-center text-slate-700">30.000,00</td>
                          <td className="px-6 py-4 text-center font-medium text-slate-800">23,50%</td>
                        </tr>

                        <tr className="bg-slate-50 hover:bg-slate-100 transition-colors">
                          <td className="px-6 py-4 text-center text-slate-700">120.000,00</td>
                          <td className="px-6 py-4 text-center text-slate-700">22.940,00</td>
                          <td className="px-6 py-4 text-center text-slate-700">55.000,00</td>
                          <td className="px-6 py-4 text-center font-medium text-slate-800">24,50%</td>
                        </tr>

                        <tr className="bg-gradient-to-r from-red-50 to-pink-50 hover:bg-red-100 transition-colors">
                          <td className="px-6 py-4 text-center font-semibold text-slate-800">175.000,00</td>
                          <td className="px-6 py-4 text-center font-semibold text-slate-800">36.415,00</td>
                          <td className="px-6 py-4 text-center font-semibold text-slate-800">En endavant</td>
                          <td className="px-6 py-4 text-center">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-red-500 text-white">
                              25,50%
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">↓</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-blue-800 mb-1">Reducció destacada</p>
                        <p className="text-sm text-blue-700">
                          El tipus impositiu del primer tram passa del 10,5% al 9,5%, beneficiant als contribuents amb rendes més baixes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3>Modificacions en ITP/AJD</h3>
                <p>
                  S'han introduït nous tipus impositius per transmissions patrimonials, especialment
                  rellevants per compres d'habitatge amb valors superiors a 600.000€. Tanmateix,
                  s'han mantingut bonificacions importants per als menors de 35 anys.
                </p>

                <h3>Canvis en Successions i Donacions</h3>
                <p>
                  El Decret Llei 5/2025 modifica l'Impost sobre Successions i Donacions,
                  amb canvis que entren en vigor el 26 de juny de 2025.
                </p>

                <h3>Deduccions per Naixement i Habitatge</h3>
                <p>
                  S'introdueixen noves deduccions per naixement, adopció o acolliment,
                  així com mesures per fomentar l'accés a l'habitatge per als joves.
                </p>

              </div>

              {/* CTA Section */}
              <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center mt-16">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Necessites Assessoria Fiscal Especialitzada?
                </h3>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                  Els nostres experts en fiscalitat autonòmica et poden ajudar a optimitzar
                  la teva tributació i aprofitar totes les deduccions disponibles a Tortosa.
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
          </div>
        </section>
      </main>
      <Footer locale="ca" onLocaleChange={() => {}} />
      <WhatsAppButton locale="ca" phoneNumber="+34680132404" />
    </div>
  )
}
