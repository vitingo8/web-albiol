"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  CheckCircle2,
  FileText,
  Clock,
  ShieldCheck,
  Phone,
  ArrowRight,
  Building2,
  User,
  Users,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n"

const DEFAULT_LOCALE: Locale = "ca"

const fiscalCopy = {
  ca: {
    heroKicker: "Assessoria fiscal a Tortosa",
    heroTitle: "Assessoria fiscal per a empreses i autònoms a Tortosa i Terres de l’Ebre",
    heroSubtitle:
      "Ens ocupem de tota la teva fiscalitat perquè tu et puguis centrar en fer créixer el teu negoci. Planificació, presentació de models i resposta davant d’Hisenda amb un llenguatge clar.",
    heroBadge: "Més de 20 anys acompanyant empreses i autònoms",
    forWhomTitle: "Per a qui és la nostra assessoria fiscal?",
    forWhom: [
      {
        icon: <Building2 className="h-7 w-7" />,
        title: "Empreses i PIMES",
        text: "Gestió integral d’impostos i planificació fiscal per a societats, comerços, despatxos professionals i empreses familiars.",
      },
      {
        icon: <User className="h-7 w-7" />,
        title: "Autònoms i professionals",
        text: "Alta d’autònom, quotes, models trimestrals i anuals, deduccions de despeses i acompanyament continu durant tot l’any.",
      },
      {
        icon: <Users className="h-7 w-7" />,
        title: "Particulars i famílies",
        text: "Declaració de la renda, lloguers, capital mobiliari, vendes d’immobles, herències i altres situacions personals.",
      },
    ],
    problemsTitle: "Problemes fiscals que t’ajudem a evitar",
    problemsIntro:
      "La majoria de clients arriben amb els mateixos dubtes: por a equivocar-se, falta de temps i canvis constants en la normativa. A Albiol Consultors t’ajudem a evitar errors típics com:",
    problems: [
      "Presentar un model fora de termini i assumir recàrrecs innecessaris.",
      "No aprofitar deduccions i despeses fiscalment deduïbles per desconeixement.",
      "Tenir informació fiscal dispersa en fulls de càlcul i correus electrònics.",
      "No saber com respondre davant d’un requeriment o inspecció d’Hisenda.",
      "Tancar l’exercici sense tenir una visió clara de la càrrega fiscal real del negoci.",
    ],
    servicesTitle: "Què inclou el nostre servei d’assessoria fiscal",
    servicesIntro:
      "Adaptem el servei al volum i a la realitat de cada empresa o autònom, però sempre amb una base comuna molt clara:",
    services: [
      {
        title: "Gestió completa de models i impostos",
        text: "IVA, IRPF, Impost de Societats, pagaments fraccionats i resums anuals. Ens encarreguem del càlcul, la revisió i la presentació telemàtica.",
      },
      {
        title: "Planificació fiscal abans del tancament",
        text: "No esperem a final d’any: revisem la teva situació fiscal amb temps perquè puguis prendre decisions amb informació real.",
      },
      {
        title: "Acompanyament davant d’Hisenda",
        text: "Contestem requeriments, fem al·legacions i preparem la documentació necessària per minimitzar riscos i sancions.",
      },
      {
        title: "Fiscalitat d’autònoms",
        text: "Altes i baixes, canvis de mòduls a estimació directa, quotes, deduccions i optimització de despeses habituals.",
      },
      {
        title: "Fiscalitat de lloguers i patrimonis familiars",
        text: "Gestió de rendes de lloguer, vendes d’immobles, plusvàlues, donacions i herències amb perspectiva familiar.",
      },
      {
        title: "Informes periòdics i visió clara",
        text: "Informes simples, en llenguatge entendre, amb l’impacte fiscal de les teves decisions per evitar sorpreses.",
      },
    ],
    processTitle: "Com treballem la teva fiscalitat (també 100% en línia)",
    processIntro:
      "Tant si vens al despatx com si prefereixes treballar en línia, el nostre procés és sempre ordenat i transparent:",
    process: [
      {
        title: "1. Primera conversa sense compromís",
        text: "Entenem la teva situació, el tipus d’activitat i el volum d’operacions. Definim quin servei fiscal et convé.",
      },
      {
        title: "2. Recollida de documentació",
        text: "Ens pots portar la documentació en persona o bé enviar-la digitalment. T’ajudem a sistematitzar-la perquè sigui fàcil.",
      },
      {
        title: "3. Càlcul, revisió i presentació",
        text: "Preparem els models, revisem que tot quadri i presentem telemàticament dins de termini, informant-te abans i després.",
      },
      {
        title: "4. Seguiment i planificació",
        text: "Fem seguiment periòdic i, abans del tancament, revisem conjuntament opcions per optimitzar la càrrega fiscal.",
      },
    ],
    benefitsTitle: "Què guanyes amb Albiol Consultors com a assessoria fiscal",
    benefits: [
      "Tranquil·litat: saber que els teus impostos estan en mans d’un equip especialitzat.",
      "Temps: menys hores dedicades a papers i més a clientela i projecte.",
      "Claredat: expliquem els números amb un llenguatge planer, sense jerga innecessària.",
      "Prevenció: anticipem problemes i proposem millores abans que arribin els terminis.",
      "Proximitat: som a Tortosa, però podem treballar 100% en línia amb tu si ho prefereixes.",
    ],
    onlineBannerTitle: "Vols que gestionem tota la teva fiscalitat en línia?",
    onlineBannerText:
      "Si no ets de Tortosa o prefereixes evitar desplaçaments, podem portar la teva assessoria fiscal de forma totalment digital: signatura electrònica, intercanvi segur de documentació i reunions per videotrucada.",
    onlineBannerCta: "Explica’ns el teu cas",
    ctaTitle: "Parlem de la teva situació fiscal",
    ctaText:
      "Cada empresa i cada autònom té una realitat diferent. T’oferim una primera conversa sense compromís per analitzar el teu cas i proposar-te una manera de treballar junts, clara i transparent.",
    ctaButton: "Demana una primera trucada",
  },
  es: {
    heroKicker: "Asesoría fiscal en Tortosa",
    heroTitle: "Asesoría fiscal para empresas y autónomos en Tortosa y Terres de l’Ebre",
    heroSubtitle:
      "Nos encargamos de toda tu fiscalidad para que tú puedas centrarte en hacer crecer tu negocio. Planificación, presentación de modelos y respuesta ante Hacienda con un lenguaje claro.",
    heroBadge: "Más de 20 años acompañando a empresas y autónomos",
    forWhomTitle: "¿Para quién es nuestra asesoría fiscal?",
    forWhom: [
      {
        icon: <Building2 className="h-7 w-7" />,
        title: "Empresas y PYMES",
        text: "Gestión integral de impuestos y planificación fiscal para sociedades, comercios, despachos profesionales y empresas familiares.",
      },
      {
        icon: <User className="h-7 w-7" />,
        title: "Autónomos y profesionales",
        text: "Alta de autónomo, cuotas, modelos trimestrales y anuales, deducción de gastos y acompañamiento continuo durante todo el año.",
      },
      {
        icon: <Users className="h-7 w-7" />,
        title: "Particulares y familias",
        text: "Declaración de la renta, alquileres, capital mobiliario, ventas de inmuebles, herencias y otras situaciones personales.",
      },
    ],
    problemsTitle: "Problemas fiscales que te ayudamos a evitar",
    problemsIntro:
      "La mayoría de clientes llegan con las mismas dudas: miedo a equivocarse, falta de tiempo y cambios constantes en la normativa. En Albiol Consultors te ayudamos a evitar errores típicos como:",
    problems: [
      "Presentar un modelo fuera de plazo y asumir recargos innecesarios.",
      "No aprovechar deducciones y gastos fiscalmente deducibles por desconocimiento.",
      "Tener la información fiscal dispersa en hojas de cálculo y correos.",
      "No saber cómo responder ante un requerimiento o inspección de Hacienda.",
      "Cerrar el ejercicio sin tener una visión clara de la carga fiscal real del negocio.",
    ],
    servicesTitle: "Qué incluye nuestro servicio de asesoría fiscal",
    servicesIntro:
      "Adaptamos el servicio al volumen y a la realidad de cada empresa o autónomo, pero siempre con una base común muy clara:",
    services: [
      {
        title: "Gestión completa de modelos e impuestos",
        text: "IVA, IRPF, Impuesto de Sociedades, pagos fraccionados y resúmenes anuales. Nos encargamos del cálculo, revisión y presentación telemática.",
      },
      {
        title: "Planificación fiscal antes del cierre",
        text: "No esperamos a final de año: revisamos tu situación fiscal con tiempo para que puedas tomar decisiones con información real.",
      },
      {
        title: "Acompañamiento ante Hacienda",
        text: "Contestamos requerimientos, preparamos alegaciones y la documentación necesaria para minimizar riesgos y sanciones.",
      },
      {
        title: "Fiscalidad de autónomos",
        text: "Altas y bajas, cambios de módulos a estimación directa, cuotas, deducciones y optimización de gastos habituales.",
      },
      {
        title: "Fiscalidad de alquileres y patrimonios familiares",
        text: "Gestión de rentas de alquiler, ventas de inmuebles, plusvalías, donaciones y herencias con una visión de conjunto.",
      },
      {
        title: "Informes periódicos y visión clara",
        text: "Informes sencillos, en un lenguaje entendible, con el impacto fiscal de tus decisiones para evitar sorpresas.",
      },
    ],
    processTitle: "Cómo trabajamos tu fiscalidad (también 100% online)",
    processIntro:
      "Tanto si vienes al despacho como si prefieres trabajar en línea, nuestro proceso es siempre ordenado y transparente:",
    process: [
      {
        title: "1. Primera conversación sin compromiso",
        text: "Entendemos tu situación, el tipo de actividad y el volumen de operaciones. Definimos qué servicio fiscal encaja mejor contigo.",
      },
      {
        title: "2. Recogida de documentación",
        text: "Puedes traer la documentación en persona o enviarla de forma digital. Te ayudamos a sistematizarla para que sea fácil.",
      },
      {
        title: "3. Cálculo, revisión y presentación",
        text: "Preparamos los modelos, revisamos que todo cuadre y presentamos telemáticamente en plazo, informándote antes y después.",
      },
      {
        title: "4. Seguimiento y planificación",
        text: "Realizamos un seguimiento periódico y, antes del cierre, revisamos contigo opciones para optimizar la carga fiscal.",
      },
    ],
    benefitsTitle: "Qué ganas con Albiol Consultors como asesoría fiscal",
    benefits: [
      "Tranquilidad: saber que tus impuestos están en manos de un equipo especializado.",
      "Tiempo: menos horas dedicadas a papeles y más a clientes y negocio.",
      "Claridad: explicamos los números con un lenguaje sencillo, sin jerga innecesaria.",
      "Prevención: anticipamos problemas y proponemos mejoras antes de que lleguen los plazos.",
      "Proximidad: estamos en Tortosa, pero podemos trabajar 100% en línea contigo si lo prefieres.",
    ],
    onlineBannerTitle: "¿Quieres que gestionemos toda tu fiscalidad online?",
    onlineBannerText:
      "Si no eres de Tortosa o prefieres evitar desplazamientos, podemos llevar tu asesoría fiscal de forma totalmente digital: firma electrónica, intercambio seguro de documentación y reuniones por videollamada.",
    onlineBannerCta: "Cuéntanos tu caso",
    ctaTitle: "Hablemos de tu situación fiscal",
    ctaText:
      "Cada empresa y cada autónomo tiene una realidad distinta. Te ofrecemos una primera conversación sin compromiso para analizar tu caso y proponerte una forma de trabajar juntos, clara y transparente.",
    ctaButton: "Solicita una primera llamada",
  },
  en: {
    heroKicker: "Tax advisory in Tortosa",
    heroTitle: "Tax advisory for companies and freelancers in Tortosa and Terres de l’Ebre",
    heroSubtitle:
      "We take care of your taxes so you can focus on growing your business. Planning, filing and communication with the Tax Agency, explained in clear language.",
    heroBadge: "Over 20 years advising companies and freelancers",
    forWhomTitle: "Who is this tax advisory service for?",
    forWhom: [
      {
        icon: <Building2 className="h-7 w-7" />,
        title: "Companies & SMEs",
        text: "Full tax management and planning for limited companies, family businesses, shops and professional firms.",
      },
      {
        icon: <User className="h-7 w-7" />,
        title: "Freelancers & professionals",
        text: "Registration, quarterly and annual filings, deductible expenses and ongoing support throughout the year.",
      },
      {
        icon: <Users className="h-7 w-7" />,
        title: "Individuals & families",
        text: "Income tax returns, rentals, investments, property sales and inheritances.",
      },
    ],
    problemsTitle: "Tax problems we help you avoid",
    problemsIntro:
      "Most clients share the same concerns: fear of making mistakes, lack of time and constant regulatory changes. We help you avoid common mistakes such as:",
    problems: [
      "Filing returns late and paying unnecessary surcharges.",
      "Missing deductions and allowable expenses because of lack of information.",
      "Having your tax information scattered across spreadsheets and emails.",
      "Not knowing how to answer a notice or inspection from the Tax Agency.",
      "Closing the year without a clear view of your real tax burden.",
    ],
    servicesTitle: "What our tax advisory service includes",
    servicesIntro:
      "We adapt the scope to your size and activity, but there is always a very clear core:",
    services: [
      {
        title: "Full management of tax returns",
        text: "VAT, personal income tax, corporate tax, advance payments and annual summaries. We handle calculation, review and online filing.",
      },
      {
        title: "Tax planning before year-end",
        text: "We don’t wait until the last minute: we review your tax position in advance so you can make informed decisions.",
      },
      {
        title: "Support before the Tax Agency",
        text: "We prepare responses to notices, draft claims and compile documentation to minimise penalties and risks.",
      },
      {
        title: "Freelancer taxation",
        text: "Registration and deregistration, changes of regime, deductions and optimisation of day-to-day expenses.",
      },
      {
        title: "Rental and family wealth taxation",
        text: "Rental income, property sales, capital gains, gifts and inheritances with a family-oriented view.",
      },
      {
        title: "Clear, periodic reporting",
        text: "Simple reports in plain English, with the tax impact of your decisions and no surprises.",
      },
    ],
    processTitle: "How we work (also 100% online)",
    processIntro:
      "Whether you visit us in Tortosa or prefer to work fully online, our process is structured and transparent:",
    process: [
      {
        title: "1. First call with no commitment",
        text: "We understand your situation, activity and volume. We define the right tax service for you.",
      },
      {
        title: "2. Document collection",
        text: "You can bring documents in person or send them digitally. We help you structure everything.",
      },
      {
        title: "3. Calculation, review and filing",
        text: "We prepare the returns, check everything carefully and file online on time, keeping you informed.",
      },
      {
        title: "4. Follow-up and planning",
        text: "We review your tax situation on a regular basis and plan ahead before year-end.",
      },
    ],
    benefitsTitle: "What you gain with Albiol Consultors as your tax advisor",
    benefits: [
      "Peace of mind: your taxes handled by a specialised team.",
      "Time: fewer hours spent on paperwork, more on your business.",
      "Clarity: explanations in plain language, without unnecessary jargon.",
      "Prevention: we anticipate issues and propose improvements before deadlines.",
      "Flexibility: based in Tortosa, but able to work 100% online with you.",
    ],
    onlineBannerTitle: "Do you want us to manage your taxes fully online?",
    onlineBannerText:
      "If you’re not in Tortosa or prefer to avoid travelling, we can manage your taxes completely digitally: e-signature, secure document exchange and video calls.",
    onlineBannerCta: "Tell us about your case",
    ctaTitle: "Let’s talk about your tax situation",
    ctaText:
      "Every business and freelancer is different. We offer a first call with no commitment to analyse your case and propose a clear, transparent way of working together.",
    ctaButton: "Request a first call",
  },
  fr: null,
  de: null,
} as const

export default function FiscalServicePage() {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE)

  useEffect(() => {
    const saved = window.localStorage.getItem("locale") as Locale | null
    if (saved && saved !== locale) setLocale(saved)
  }, [])

  const handleLocaleChange = (next: Locale) => {
    setLocale(next)
    window.localStorage.setItem("locale", next)
  }

  const t = getTranslation(locale)
  const base = fiscalCopy[locale] ?? fiscalCopy["ca"]
  const c = base ?? fiscalCopy["en"]

  const phoneNumber = "+34680132404"

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} onLocaleChange={handleLocaleChange} />

      <main className="flex-1">
        {/* HERO */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
            <div className="max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 text-xs font-semibold uppercase tracking-[0.18em]">
                <FileText className="h-3 w-3" />
                {c.heroKicker}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-balance">{c.heroTitle}</h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">{c.heroSubtitle}</p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  <Link href="/contacte">
                    {locale === "ca"
                      ? "Parlar amb un assessor fiscal"
                      : locale === "es"
                      ? "Hablar con un asesor fiscal"
                      : "Talk to a tax advisor"}
                  </Link>
                </Button>
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center gap-2 text-sm md:text-base text-primary-foreground/80 hover:text-primary-foreground"
                >
                  <Phone className="h-4 w-4" />
                  <span>680132404</span>
                </a>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 text-xs text-primary-foreground/80 mt-4">
                <CheckCircle2 className="h-4 w-4" />
                <span>{c.heroBadge}</span>
              </div>
            </div>
          </div>
        </section>

        {/* FOR WHOM */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-3xl mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                {c.forWhomTitle}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {c.forWhom.map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-2xl border border-border/60 shadow-sm p-6 flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEMS */}
        <section className="py-16 md:py-24 bg-muted/40">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-3xl mb-10">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                {c.problemsTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{c.problemsIntro}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {c.problems.map((problem) => (
                <div
                  key={problem}
                  className="flex items-start gap-3 bg-card rounded-2xl border border-border/60 p-4"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES INCLUDED */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-3xl mb-10">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                {c.servicesTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{c.servicesIntro}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {c.services.map((service) => (
                <div
                  key={service.title}
                  className="bg-card rounded-2xl border border-border/60 shadow-sm p-6 flex flex-col gap-3"
                >
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-16 md:py-24 bg-muted/40">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-3xl mb-10">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                {c.processTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{c.processIntro}</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {c.process.map((step) => (
                <div
                  key={step.title}
                  className="bg-card rounded-2xl border border-border/60 p-5 flex flex-col gap-3"
                >
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    <Clock className="h-3 w-3" />
                    <span>Step</span>
                  </div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS + ONLINE BANNER */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 space-y-12">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  {c.benefitsTitle}
                </h2>
                <div className="space-y-3">
                  {c.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 text-primary mt-0.5" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/30 rounded-full blur-3xl" />
                <div className="relative space-y-4">
                  <h3 className="font-serif text-2xl font-bold">{c.onlineBannerTitle}</h3>
                  <p className="text-primary-foreground/85 leading-relaxed">{c.onlineBannerText}</p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Button
                      asChild
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2"
                    >
                      <Link href="/contacte">
                        {c.onlineBannerCta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <a
                      href={`https://wa.me/34680132404`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#ddb042] hover:text-[#ddb042]/80"
                    >
                      <Phone className="h-4 w-4" />
                      <span>
                        {locale === "ca"
                          ? "O parla amb nosaltres per WhatsApp"
                          : locale === "es"
                          ? "O habla con nosotros por WhatsApp"
                          : "Or chat with us on WhatsApp"}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FINAL CTA */}
            <div className="bg-muted/60 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-3 max-w-xl">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  {c.ctaTitle}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{c.ctaText}</p>
              </div>
              <div className="flex flex-col gap-3 w-full md:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                >
                  <Link href="/contacte">
                    {c.ctaButton}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  <span>680132404</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} onLocaleChange={handleLocaleChange} />
      <WhatsAppButton locale={locale} />
    </div>
  )
}
