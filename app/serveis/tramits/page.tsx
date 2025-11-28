"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Car,
  ScrollText,
  Landmark,
  Stamp,
  Phone,
  ArrowRight,
  Plane,
  FileBadge,
  GraduationCap,
  Copy,
  Clock,
  Send,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { Locale } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n"

const DEFAULT_LOCALE: Locale = "ca"

const tramitsCopy = {
  ca: {
    heroKicker: "Gestoria Administrativa a Tortosa",
    heroTitle: "Tràmits de Trànsit, Herències i Registres sense cues",
    heroSubtitle: "Oblida't de demanar cita prèvia o perdre matins a l'administració. Nosaltres fem la cua per tu i gestionem qualsevol tràmit burocràtic.",
    heroBadge: "Gestors Administratius Col·legiats",
    ctaPrimary: "Gestionar tràmit ara",
    ctaSecondary: "Consultar dubte",
    forWhomTitle: "Què podem fer per tu avui?",
    forWhom: [
      {
        icon: <Car className="h-6 w-6" />,
        title: "Vehicles i Conductors",
        text: "Canvis de nom al moment, matriculacions, baixes, duplicats de permís de conduir i informes de la DGT.",
      },
      {
        icon: <ScrollText className="h-6 w-6" />,
        title: "Particulars i Famílies",
        text: "Gestió integral d'herències, certificats de naixement/matrimoni, i cancel·lació d'antecedents.",
      },
      {
        icon: <Plane className="h-6 w-6" />,
        title: "Estrangeria",
        text: "Sol·licitud de NIE, residència, nacionalitat i bescanvi de permisos de conduir estrangers.",
      },
    ],
    problemsTitle: "La burocràcia és lenta, nosaltres no",
    problemsIntro: "L'administració pública pot ser un laberint. T'estalviem:",
    problems: [
      "Aconseguir una 'Cita Prèvia' impossible a la DGT o Seguretat Social.",
      "Errors en els formularis que paralitzen el teu expedient mesos.",
      "Pagar taxes incorrectes i haver de demanar devolucions.",
      "Desplaçaments innecessaris a Tortosa o Tarragona.",
    ],
    servicesTitle: "Catàleg de tràmits administratius",
    servicesIntro: "Som la teva finestreta única per a qualsevol paperassa:",
    services: [
      { title: "Transferències de Vehicles", text: "Canvi de nom de cotxes i motos a l'instant. Sortiràs amb el permís provisional." },
      { title: "Herències i Donacions", text: "Liquidació d'impostos, plusvàlues i inscripció al Registre de la Propietat." },
      { title: "Certificats Digitals", text: "T'obtenim el certificat digital perquè puguis signar des de casa." },
      { title: "Registre Civil", text: "Partides de naixement, matrimoni o defunció (nacionals i internacionals)." },
      { title: "Contractes de Lloguer", text: "Redacció legal i dipòsit de la fiança a l'INCASÒL." },
      { title: "Cadastre i Propietat", text: "Notes simples, certificacions cadastrals i regularització d'immobles." },
    ],
    processTitle: "Com gestionem el teu tràmit?",
    processSteps: [
      { 
        icon: <Copy className="h-5 w-5" />, 
        title: "1. Ens envies les dades", 
        text: "Per WhatsApp, email o presencialment. T'indiquem exactament què necessites." 
      },
      { 
        icon: <Stamp className="h-5 w-5" />, 
        title: "2. Nosaltres tramitem", 
        text: "Com a col·legiats, tenim connexió directa amb les plataformes de l'Estat." 
      },
      { 
        icon: <Send className="h-5 w-5" />, 
        title: "3. T'ho entreguem", 
        text: "Reps el document final oficial en mà o al teu correu electrònic." 
      },
    ],
    ctaTitle: "Quin paper necessites moure?",
    ctaText: "No deixis que la burocràcia et freni. Digues què necessites i ens posem en marxa.",
    ctaButton: "Contactar Gestoria",
  },
  es: {
    heroKicker: "Gestoría Administrativa en Tortosa",
    heroTitle: "Trámites de Tráfico, Herencias y Registros sin colas",
    heroSubtitle: "Olvídate de pedir cita previa o perder mañanas en la administración. Nosotros hacemos la cola por ti y gestionamos cualquier trámite burocrático.",
    heroBadge: "Gestores Administrativos Colegiados",
    ctaPrimary: "Gestionar trámite ahora",
    ctaSecondary: "Consultar duda",
    forWhomTitle: "¿Qué podemos hacer por ti hoy?",
    forWhom: [
      {
        icon: <Car className="h-6 w-6" />,
        title: "Vehículos y Conductores",
        text: "Cambios de nombre al momento, matriculaciones, bajas, duplicados de carnet y informes de la DGT.",
      },
      {
        icon: <ScrollText className="h-6 w-6" />,
        title: "Particulares y Familias",
        text: "Gestión integral de herencias, certificados de nacimiento/matrimonio, y cancelación de antecedentes.",
      },
      {
        icon: <Plane className="h-6 w-6" />,
        title: "Extranjería",
        text: "Solicitud de NIE, residencia, nacionalidad y canje de permisos de conducir extranjeros.",
      },
    ],
    problemsTitle: "La burocracia es lenta, nosotros no",
    problemsIntro: "La administración pública puede ser un laberinto. Te ahorramos:",
    problems: [
      "Conseguir una 'Cita Previa' imposible en DGT o Seguridad Social.",
      "Errores en los formularios que paralizan tu expediente meses.",
      "Pagar tasas incorrectas y tener que pedir devoluciones.",
      "Desplazamientos innecesarios a Tortosa o Tarragona.",
    ],
    servicesTitle: "Catálogo de trámites administrativos",
    servicesIntro: "Somos tu ventanilla única para cualquier papeleo:",
    services: [
      { title: "Transferencias de Vehículos", text: "Cambio de nombre de coches y motos al instante. Saldrás con el permiso provisional." },
      { title: "Herencias y Donaciones", text: "Liquidación de impuestos, plusvalías e inscripción en el Registro de la Propiedad." },
      { title: "Certificados Digitales", text: "Te obtenemos el certificado digital para que puedas firmar desde casa." },
      { title: "Registro Civil", text: "Partidas de nacimiento, matrimonio o defunción (nacionales e internacionales)." },
      { title: "Contratos de Alquiler", text: "Redacción legal y depósito de la fianza en el INCASÒL." },
      { title: "Catastro y Propiedad", text: "Notas simples, certificaciones catastrales y regularización de inmuebles." },
    ],
    processTitle: "¿Cómo gestionamos tu trámite?",
    processSteps: [
      { 
        icon: <Copy className="h-5 w-5" />, 
        title: "1. Nos envías los datos", 
        text: "Por WhatsApp, email o presencialmente. Te indicamos exactamente qué necesitas." 
      },
      { 
        icon: <Stamp className="h-5 w-5" />, 
        title: "2. Nosotros tramitamos", 
        text: "Como colegiados, tenemos conexión directa con las plataformas del Estado." 
      },
      { 
        icon: <Send className="h-5 w-5" />, 
        title: "3. Te lo entregamos", 
        text: "Recibes el documento final oficial en mano o en tu correo electrónico." 
      },
    ],
    ctaTitle: "¿Qué papel necesitas mover?",
    ctaText: "No dejes que la burocracia te frene. Dinos qué necesitas y nos ponemos en marcha.",
    ctaButton: "Contactar Gestoría",
  },
  en: {
    heroKicker: "Administrative Services in Spain",
    heroTitle: "Traffic, Inheritance, and Registry procedures without queues",
    heroSubtitle: "Forget about 'Cita Previa' or wasting mornings at government offices. We handle the bureaucracy for you.",
    heroBadge: "Licensed Administrative Managers",
    ctaPrimary: "Start procedure now",
    ctaSecondary: "Ask a question",
    forWhomTitle: "What can we do for you?",
    forWhom: [
      {
        icon: <Car className="h-6 w-6" />,
        title: "Vehicles & Drivers",
        text: "Instant car ownership transfers, registrations, deregistration, and driver's license duplicates.",
      },
      {
        icon: <ScrollText className="h-6 w-6" />,
        title: "Individuals & Families",
        text: "Inheritance management, birth/marriage certificates, and criminal record cancellations.",
      },
      {
        icon: <Plane className="h-6 w-6" />,
        title: "Expats & Immigration",
        text: "NIE application, residency (Green Card), citizenship, and foreign driver's license exchange.",
      },
    ],
    problemsTitle: "Bureaucracy is slow, we are not",
    problemsIntro: "Public administration can be a maze. We save you from:",
    problems: [
      "Getting an impossible 'Appointment' at DGT or Social Security.",
      "Errors in forms that freeze your file for months.",
      "Paying incorrect fees and dealing with refunds.",
      "Unnecessary travel to government offices.",
    ],
    servicesTitle: "Administrative Services Catalog",
    servicesIntro: "We are your one-stop shop for paperwork:",
    services: [
      { title: "Vehicle Transfers", text: "Car/Moto ownership change instantly. You leave with a provisional permit." },
      { title: "Inheritances & Gifts", text: "Tax liquidation, capital gains, and Property Registry inscription." },
      { title: "Digital Certificates", text: "We get your digital ID so you can sign documents from home." },
      { title: "Civil Registry", text: "Birth, marriage, or death certificates (national and international)." },
      { title: "Rental Contracts", text: "Legal drafting and deposit management." },
      { title: "Property & Cadastre", text: "Land registry excerpts (Notas Simples) and property regularization." },
    ],
    processTitle: "How do we handle it?",
    processSteps: [
      { 
        icon: <Copy className="h-5 w-5" />, 
        title: "1. Send us the data", 
        text: "Via WhatsApp, email, or in person. We tell you exactly what is needed." 
      },
      { 
        icon: <Stamp className="h-5 w-5" />, 
        title: "2. We process", 
        text: "As licensed managers, we have direct connection to State platforms." 
      },
      { 
        icon: <Send className="h-5 w-5" />, 
        title: "3. Delivery", 
        text: "You receive the official final document in hand or via email." 
      },
    ],
    ctaTitle: "What paperwork do you need?",
    ctaText: "Don't let bureaucracy stop you. Tell us what you need, and we'll get started.",
    ctaButton: "Contact Agency",
  },
  fr: {
    heroKicker: "Services Administratifs",
    heroTitle: "Véhicules, Successions et Registres sans file d'attente",
    heroSubtitle: "Oubliez les rendez-vous impossibles. Nous faisons la queue pour vous et gérons toute la bureaucratie.",
    heroBadge: "Gestionnaires Agréés",
    ctaPrimary: "Gérer maintenant",
    ctaSecondary: "Poser une question",
    forWhomTitle: "Que pouvons-nous faire ?",
    forWhom: [
      {
        icon: <Car className="h-6 w-6" />,
        title: "Véhicules",
        text: "Changement de propriétaire instantané, immatriculation et duplicata de permis.",
      },
      {
        icon: <ScrollText className="h-6 w-6" />,
        title: "Familles",
        text: "Gestion complète des successions, actes de naissance/mariage.",
      },
      {
        icon: <Plane className="h-6 w-6" />,
        title: "Étrangers (NIE)",
        text: "Demande de NIE, résidence, nationalité et échange de permis étrangers.",
      },
    ],
    problemsTitle: "La bureaucratie est lente, pas nous",
    problemsIntro: "L'administration est un labyrinthe. Nous vous évitons :",
    problems: [
      "Obtenir un rendez-vous impossible (Cita Previa).",
      "Erreurs dans les formulaires qui bloquent le dossier.",
      "Payer des taxes incorrectes.",
      "Déplacements inutiles.",
    ],
    servicesTitle: "Catalogue de services",
    servicesIntro: "Guichet unique pour vos papiers :",
    services: [
      { title: "Transfert de Véhicules", text: "Changement de carte grise instantané." },
      { title: "Successions", text: "Liquidation des impôts et Registre de la Propriété." },
      { title: "Certificats Numériques", text: "Pour signer depuis chez vous." },
      { title: "État Civil", text: "Actes de naissance, mariage ou décès." },
      { title: "Contrats de Location", text: "Rédaction légale et dépôt de garantie." },
      { title: "Cadastre", text: "Informations cadastrales et régularisation." },
    ],
    processTitle: "Comment ça marche ?",
    processSteps: [
      { 
        icon: <Copy className="h-5 w-5" />, 
        title: "1. Envoyez les données", 
        text: "Par WhatsApp ou email. Nous vous guidons." 
      },
      { 
        icon: <Stamp className="h-5 w-5" />, 
        title: "2. Nous traitons", 
        text: "Connexion directe aux plateformes de l'État." 
      },
      { 
        icon: <Send className="h-5 w-5" />, 
        title: "3. Livraison", 
        text: "Vous recevez le document officiel." 
      },
    ],
    ctaTitle: "Quel document vous manque ?",
    ctaText: "Ne laissez pas la bureaucratie vous freiner.",
    ctaButton: "Contacter l'Agence",
  },
  de: {
    heroKicker: "Behördengänge in Spanien",
    heroTitle: "Verkehrsamt, Erbschaften und Register ohne Warteschlangen",
    heroSubtitle: "Vergessen Sie unmögliche Termine (Cita Previa). Wir erledigen die Bürokratie für Sie.",
    heroBadge: "Zugelassene Verwaltungsgestalter",
    ctaPrimary: "Jetzt starten",
    ctaSecondary: "Frage stellen",
    forWhomTitle: "Was können wir tun?",
    forWhom: [
      {
        icon: <Car className="h-6 w-6" />,
        title: "Fahrzeuge",
        text: "Sofortige Ummeldung, Zulassung und Führerscheinduplikate.",
      },
      {
        icon: <ScrollText className="h-6 w-6" />,
        title: "Familien",
        text: "Erbschaftsverwaltung, Geburts-/Heiratsurkunden.",
      },
      {
        icon: <Plane className="h-6 w-6" />,
        title: "Ausländer (NIE)",
        text: "NIE-Antrag, Residencia, Staatsbürgerschaft und Führerscheinumtausch.",
      },
    ],
    problemsTitle: "Bürokratie ist langsam, wir nicht",
    problemsIntro: "Die Verwaltung ist ein Labyrinth. Wir sparen Ihnen:",
    problems: [
      "Unmögliche Termine beim Verkehrsamt oder Sozialversicherung.",
      "Formularfehler, die Ihre Akte blockieren.",
      "Falsche Gebührenzahlungen.",
      "Unnötige Reisen.",
    ],
    servicesTitle: "Dienstleistungskatalog",
    servicesIntro: "Alles aus einer Hand:",
    services: [
      { title: "Fahrzeugummeldung", text: "Sofortige Umschreibung von Autos und Motorrädern." },
      { title: "Erbschaften", text: "Steuerabwicklung und Eigentumsregister." },
      { title: "Digitale Zertifikate", text: "Damit Sie von zu Hause aus unterschreiben können." },
      { title: "Standesamt", text: "Geburts-, Heirats- oder Sterbeurkunden." },
      { title: "Mietverträge", text: "Rechtssichere Erstellung und Kautionshinterlegung." },
      { title: "Kataster", text: "Grundbuchauszüge und Regularisierung." },
    ],
    processTitle: "Wie funktioniert es?",
    processSteps: [
      { 
        icon: <Copy className="h-5 w-5" />, 
        title: "1. Daten senden", 
        text: "Per WhatsApp oder E-Mail. Wir sagen Ihnen, was nötig ist." 
      },
      { 
        icon: <Stamp className="h-5 w-5" />, 
        title: "2. Wir bearbeiten", 
        text: "Direkte Verbindung zu den staatlichen Plattformen." 
      },
      { 
        icon: <Send className="h-5 w-5" />, 
        title: "3. Lieferung", 
        text: "Sie erhalten das offizielle Dokument." 
      },
    ],
    ctaTitle: "Welches Papier fehlt Ihnen?",
    ctaText: "Lassen Sie sich nicht von der Bürokratie aufhalten.",
    ctaButton: "Kontakt aufnehmen",
  },
} as const

export default function TramitsServicePage() {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE)

  useEffect(() => {
    const saved = window.localStorage.getItem("locale") as Locale | null
    if (saved && saved !== locale) setLocale(saved)
  }, [])

  const handleLocaleChange = (next: Locale) => {
    setLocale(next)
    window.localStorage.setItem("locale", next)
  }

  const base = tramitsCopy[locale] ?? tramitsCopy["ca"]
  const c = base ?? tramitsCopy["en"]

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header locale={locale} onLocaleChange={handleLocaleChange} />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
          {/* Fondo elegante azul/violeta oscuro para diferenciar "Institucional/Trámites" */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-primary to-indigo-900 opacity-100" />
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-white/20">
                <Stamp className="h-4 w-4 text-indigo-300" />
                <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">{c.heroKicker}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
                {c.heroTitle}
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 text-pretty max-w-2xl">
                {c.heroSubtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-base h-12 px-8 shadow-lg shadow-indigo-500/20">
                  <Link href="/contacte">
                    {c.ctaPrimary}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white h-12 px-8">
                   <a href="https://wa.me/34977440000" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-4 w-4" />
                    {c.ctaSecondary}
                  </a>
                </Button>
              </div>

              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/80">
                <FileBadge className="h-5 w-5 text-indigo-300" />
                <span>{c.heroBadge}</span>
              </div>
            </div>
          </div>
        </section>

        {/* FOR WHOM */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.forWhomTitle}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {c.forWhom.map((item, idx) => (
                <div key={idx} className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-indigo-500/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEMS */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 rounded bg-destructive/10 text-destructive text-sm font-semibold mb-4">
                  STOP CUES
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {c.problemsTitle}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">{c.problemsIntro}</p>
                <ul className="space-y-4">
                  {c.problems.map((problem, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-destructive/10 text-destructive flex items-center justify-center mt-1">
                        <span className="text-xs font-bold">✕</span>
                      </div>
                      <span className="text-foreground/90 font-medium">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-white border border-border/50 flex flex-col items-center justify-center p-8 text-center">
                 <Clock className="w-24 h-24 text-primary/20 mb-6" />
                 <p className="text-muted-foreground italic">
                   "El teu temps val diners. No el malgastis fent cues."
                 </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
             <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.servicesTitle}</h2>
              <p className="text-muted-foreground text-lg">{c.servicesIntro}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {c.services.map((service, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Landmark className="h-5 w-5 text-indigo-600" />
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground pl-7 text-sm leading-relaxed">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.processTitle}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {c.processSteps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                   <div className="w-14 h-14 rounded-full bg-indigo-500 text-white flex items-center justify-center mb-6 shadow-lg">
                      {step.icon}
                   </div>
                   <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                   <p className="text-primary-foreground/80 leading-relaxed">{step.text}</p>
                   
                   {idx !== c.processSteps.length - 1 && (
                     <div className="hidden md:block absolute top-12 left-[100%] w-full h-[2px] bg-white/20 -translate-x-[50%]" />
                   )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="bg-indigo-50/50 dark:bg-indigo-950/20 rounded-3xl p-8 md:p-16 text-center border border-indigo-100 dark:border-indigo-900 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{c.ctaTitle}</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">{c.ctaText}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white h-14 px-10 text-lg w-full sm:w-auto">
                  <Link href="/contacte">
                    {c.ctaButton}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <div className="flex items-center gap-2 text-muted-foreground mt-4 sm:mt-0 px-4">
                   <Phone className="h-4 w-4" />
                   <span className="font-medium">977 44 00 00</span>
                </div>
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
