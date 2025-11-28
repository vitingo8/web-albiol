"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  MapPin,
  FileText,
  Clock,
  ShieldCheck,
  Phone,
  ArrowRight,
  CheckCircle2,
  Building2,
  Users,
  Calculator,
  Mail,
  ExternalLink,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { Locale } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n"

const DEFAULT_LOCALE: Locale = "ca"

// --- TEXTOS EN 5 IDIOMAS (Estructura "Best Web") ---
const nuclearFundCopy = {
  ca: {
    heroKicker: "Fons Transició Nuclear",
    heroTitle: "Subvencions per a projectes d'energia renovable i transició energètica a les Terres de l'Ebre",
    heroSubtitle: "Finançament per a projectes que promouen la transició energètica justa i el desenvolupament socioeconòmic en zones afectades per la producció d'energia nuclear.",
    heroBadge: "Finançament disponible 2024-2025",
    ctaPrimary: "Sol·licitar informació",
    ctaSecondary: "Veure municipis beneficiaris",

    whatIsTitle: "Què són els Fons de Transició Nuclear?",
    whatIsText: "Els Fons de transició nuclear són uns fons creats per la Generalitat de Catalunya el 2020 amb la finalitat d'acompanyar les zones afectades per la desnuclearització en la transició energètica justa i el desenvolupament socioeconòmic. S'alimenten d'un impost mediambiental propi de Catalunya que grava amb un 50% dels ingressos relacionats amb les activitats de producció, emmagatzematge i transformació d'energia elèctrica d'origen nuclear.",
    whatIsPoints: [
      "Creat per Llei 5/2020 del 29 d'abril",
      "Impost sobre instal·lacions que incideixen en el medi ambient",
      "50% dels ingressos de centrals nuclears",
      "Objectiu: transició energètica justa"
    ],

    municipalitiesTitle: "Municipis Beneficiaris",
    municipalitiesText: "Poden ser beneficiaris tots aquells projectes que es realitzin en els municipis inclosos en un cercle no superior a trenta quilòmetres de radi, concèntric amb les centrals nuclears d'Ascó i Vandellòs.",
    municipalitiesHighlight: "Més de 90 municipis de Catalunya afectats per la producció nuclear",

    projectsTitle: "Projectes Subvencionables",
    projectsIntro: "Són subvencionables tots aquells projectes que tinguin com a base la transició energètica, la digitalització i la promoció econòmica:",
    projects: [
      {
        title: "Transició energètica",
        text: "Instal·lacions d'energia renovable (solar, eòlica, biomasa), millora de l'eficiència energètica i projectes d'economia circular.",
        icon: <ShieldCheck className="h-6 w-6" />
      },
      {
        title: "Digitalització",
        text: "Implementació de solucions digitals, comerç electrònic, automatització de processos i formació en noves tecnologies.",
        icon: <Calculator className="h-6 w-6" />
      },
      {
        title: "Desenvolupament econòmic",
        text: "Creació d'empreses, millora de la competitivitat, turisme sostenible i diversificació econòmica.",
        icon: <Building2 className="h-6 w-6" />
      },
      {
        title: "Serveis a la ciutadania",
        text: "Millora d'infraestructures públiques, accessibilitat, mobilitat sostenible i serveis socials.",
        icon: <Users className="h-6 w-6" />
      }
    ],

    processTitle: "Com sol·licitar les ajudes?",
    processSteps: [
      {
        icon: <FileText className="h-5 w-5" />,
        title: "1. Preparar el projecte",
        text: "Definir el projecte, pressupost i objectius. Verificar que compleix els requisits dels fons."
      },
      {
        icon: <CheckCircle2 className="h-5 w-5" />,
        title: "2. Sol·licitar informació",
        text: "Contactar amb nosaltres per assessorar-se sobre la viabilitat del projecte i documentació necessària."
      },
      {
        icon: <Clock className="h-5 w-5" />,
        title: "3. Presentar la sol·licitud",
        text: "Tramitar la documentació i presentar la sol·licitud en els terminis establerts."
      },
      {
        icon: <ShieldCheck className="h-5 w-5" />,
        title: "4. Seguiment i justificació",
        text: "Acompanyament durant tot el procés fins a la justificació final del projecte."
      }
    ],

    ctaTitle: "Tens un projecte subvencionable?",
    ctaText: "Assessorem i tramitem les teves sol·licituds als Fons de Transició Nuclear. Anàlisi gratuït del teu projecte.",
    ctaButton: "Contactar ara",
  },
  es: {
    heroKicker: "Fondo Transición Nuclear",
    heroTitle: "Subvenciones para proyectos de energía renovable y transición energética en las Terres de l'Ebre",
    heroSubtitle: "Financiación para proyectos que promueven la transición energética justa y el desarrollo socioeconómico en zonas afectadas por la producción de energía nuclear.",
    heroBadge: "Financiación disponible 2024-2025",
    ctaPrimary: "Solicitar información",
    ctaSecondary: "Ver municipios beneficiarios",

    whatIsTitle: "¿Qué son los Fondos de Transición Nuclear?",
    whatIsText: "Los Fondos de transición nuclear son unos fondos creados por la Generalitat de Catalunya en 2020 con la finalidad de acompañar las zonas afectadas por la desnuclearización en la transición energética justa y el desarrollo socioeconómico. Se alimentan de un impuesto medioambiental propio de Catalunya que grava con un 50% los ingresos relacionados con las actividades de producción, almacenamiento y transformación de energía eléctrica de origen nuclear.",
    whatIsPoints: [
      "Creado por Ley 5/2020 del 29 de abril",
      "Impuesto sobre instalaciones que inciden en el medio ambiente",
      "50% de los ingresos de centrales nucleares",
      "Objetivo: transición energética justa"
    ],

    municipalitiesTitle: "Municipios Beneficiarios",
    municipalitiesText: "Pueden ser beneficiarios todos aquellos proyectos que se realicen en los municipios incluidos en un círculo no superior a treinta kilómetros de radio, concéntrico con las centrales nucleares de Ascó y Vandellòs.",
    municipalitiesHighlight: "Más de 90 municipios de Catalunya afectados por la producción nuclear",

    projectsTitle: "Proyectos Subvencionables",
    projectsIntro: "Son subvencionables todos aquellos proyectos que tengan como base la transición energética, la digitalización y la promoción económica:",
    projects: [
      {
        title: "Transición energética",
        text: "Instalaciones de energía renovable (solar, eólica, biomasa), mejora de la eficiencia energética y proyectos de economía circular.",
        icon: <ShieldCheck className="h-6 w-6" />
      },
      {
        title: "Digitalización",
        text: "Implementación de soluciones digitales, comercio electrónico, automatización de procesos y formación en nuevas tecnologías.",
        icon: <Calculator className="h-6 w-6" />
      },
      {
        title: "Desarrollo económico",
        text: "Creación de empresas, mejora de la competitividad, turismo sostenible y diversificación económica.",
        icon: <Building2 className="h-6 w-6" />
      },
      {
        title: "Servicios a la ciudadanía",
        text: "Mejora de infraestructuras públicas, accesibilidad, movilidad sostenible y servicios sociales.",
        icon: <Users className="h-6 w-6" />
      }
    ],

    processTitle: "¿Cómo solicitar las ayudas?",
    processSteps: [
      {
        icon: <FileText className="h-5 w-5" />,
        title: "1. Preparar el proyecto",
        text: "Definir el proyecto, presupuesto y objetivos. Verificar que cumple los requisitos de los fondos."
      },
      {
        icon: <CheckCircle2 className="h-5 w-5" />,
        title: "2. Solicitar información",
        text: "Contactar con nosotros para asesorarse sobre la viabilidad del proyecto y documentación necesaria."
      },
      {
        icon: <Clock className="h-5 w-5" />,
        title: "3. Presentar la solicitud",
        text: "Tramitar la documentación y presentar la solicitud en los plazos establecidos."
      },
      {
        icon: <ShieldCheck className="h-5 w-5" />,
        title: "4. Seguimiento y justificación",
        text: "Acompañamiento durante todo el proceso hasta la justificación final del proyecto."
      }
    ],

    ctaTitle: "¿Tienes un proyecto subvencionable?",
    ctaText: "Asesoramos y tramitamos tus solicitudes a los Fondos de Transición Nuclear. Análisis gratuito de tu proyecto.",
    ctaButton: "Contactar ahora",
  },
  en: {
    heroKicker: "Nuclear Transition Fund",
    heroTitle: "Grants for renewable energy and energy transition projects in Terres de l'Ebre",
    heroSubtitle: "Funding for projects that promote fair energy transition and socioeconomic development in areas affected by nuclear power production.",
    heroBadge: "Funding available 2024-2025",
    ctaPrimary: "Request information",
    ctaSecondary: "View beneficiary municipalities",

    whatIsTitle: "What are the Nuclear Transition Funds?",
    whatIsText: "The Nuclear Transition Funds are funds created by the Generalitat de Catalunya in 2020 with the aim of accompanying areas affected by denuclearization in fair energy transition and socioeconomic development. They are funded by a specific environmental tax in Catalunya that charges 50% of revenues related to nuclear power generation, storage and transformation activities.",
    whatIsPoints: [
      "Created by Law 5/2020 of April 29",
      "Tax on installations that affect the environment",
      "50% of nuclear power plant revenues",
      "Goal: fair energy transition"
    ],

    municipalitiesTitle: "Beneficiary Municipalities",
    municipalitiesText: "All projects carried out in municipalities included in a circle no more than thirty kilometers in radius, concentric with the Ascó and Vandellòs nuclear power plants, can be beneficiaries.",
    municipalitiesHighlight: "More than 90 municipalities in Catalunya affected by nuclear production",

    projectsTitle: "Eligible Projects",
    projectsIntro: "All projects based on energy transition, digitalization and economic promotion are eligible:",
    projects: [
      {
        title: "Energy transition",
        text: "Renewable energy installations (solar, wind, biomass), energy efficiency improvements and circular economy projects.",
        icon: <ShieldCheck className="h-6 w-6" />
      },
      {
        title: "Digitalization",
        text: "Implementation of digital solutions, e-commerce, process automation and training in new technologies.",
        icon: <Calculator className="h-6 w-6" />
      },
      {
        title: "Economic development",
        text: "Business creation, competitiveness improvement, sustainable tourism and economic diversification.",
        icon: <Building2 className="h-6 w-6" />
      },
      {
        title: "Citizen services",
        text: "Public infrastructure improvements, accessibility, sustainable mobility and social services.",
        icon: <Users className="h-6 w-6" />
      }
    ],

    processTitle: "How to apply for grants?",
    processSteps: [
      {
        icon: <FileText className="h-5 w-5" />,
        title: "1. Prepare the project",
        text: "Define the project, budget and objectives. Verify that it meets the fund requirements."
      },
      {
        icon: <CheckCircle2 className="h-5 w-5" />,
        title: "2. Request information",
        text: "Contact us for advice on project viability and necessary documentation."
      },
      {
        icon: <Clock className="h-5 w-5" />,
        title: "3. Submit the application",
        text: "Process the documentation and submit the application within established deadlines."
      },
      {
        icon: <ShieldCheck className="h-5 w-5" />,
        title: "4. Monitoring and justification",
        text: "Support throughout the entire process until final project justification."
      }
    ],

    ctaTitle: "Do you have an eligible project?",
    ctaText: "We advise and process your applications to the Nuclear Transition Funds. Free analysis of your project.",
    ctaButton: "Contact now",
  },
  fr: {
    heroKicker: "Fonds Transition Nucléaire",
    heroTitle: "Subventions pour projets d'énergie renouvelable et transition énergétique dans les Terres de l'Ebre",
    heroSubtitle: "Financement pour des projets qui promeuvent la transition énergétique juste et le développement socioéconomique dans les zones affectées par la production d'énergie nucléaire.",
    heroBadge: "Financement disponible 2024-2025",
    ctaPrimary: "Demander information",
    ctaSecondary: "Voir municipalités bénéficiaires",

    whatIsTitle: "Qu'est-ce que les Fonds de Transition Nucléaire ?",
    whatIsText: "Les Fonds de transition nucléaire sont des fonds créés par la Generalitat de Catalunya en 2020 dans le but d'accompagner les zones affectées par la dénucléarisation dans la transition énergétique juste et le développement socioéconomique. Ils sont alimentés par un impôt environnemental spécifique de Catalunya qui taxe 50 % des revenus liés aux activités de production, stockage et transformation d'énergie électrique d'origine nucléaire.",
    whatIsPoints: [
      "Créé par la Loi 5/2020 du 29 avril",
      "Impôt sur les installations affectant l'environnement",
      "50 % des revenus des centrales nucléaires",
      "Objectif : transition énergétique juste"
    ],

    municipalitiesTitle: "Municipalités Bénéficiaires",
    municipalitiesText: "Tous les projets réalisés dans les municipalités incluses dans un cercle d'un rayon maximum de trente kilomètres, concentrique aux centrales nucléaires d'Ascó et Vandellòs, peuvent être bénéficiaires.",
    municipalitiesHighlight: "Plus de 90 municipalités de Catalunya affectées par la production nucléaire",

    projectsTitle: "Projets Subventionnables",
    projectsIntro: "Tous les projets basés sur la transition énergétique, la numérisation et la promotion économique sont subventionnables :",
    projects: [
      {
        title: "Transition énergétique",
        text: "Installations d'énergie renouvelable (solaire, éolienne, biomasse), amélioration de l'efficacité énergétique et projets d'économie circulaire.",
        icon: <ShieldCheck className="h-6 w-6" />
      },
      {
        title: "Numérisation",
        text: "Mise en œuvre de solutions numériques, commerce électronique, automatisation des processus et formation aux nouvelles technologies.",
        icon: <Calculator className="h-6 w-6" />
      },
      {
        title: "Développement économique",
        text: "Création d'entreprises, amélioration de la compétitivité, tourisme durable et diversification économique.",
        icon: <Building2 className="h-6 w-6" />
      },
      {
        title: "Services aux citoyens",
        text: "Amélioration des infrastructures publiques, accessibilité, mobilité durable et services sociaux.",
        icon: <Users className="h-6 w-6" />
      }
    ],

    processTitle: "Comment demander les aides ?",
    processSteps: [
      {
        icon: <FileText className="h-5 w-5" />,
        title: "1. Préparer le projet",
        text: "Définir le projet, budget et objectifs. Vérifier qu'il répond aux exigences des fonds."
      },
      {
        icon: <CheckCircle2 className="h-5 w-5" />,
        title: "2. Demander information",
        text: "Nous contacter pour des conseils sur la viabilité du projet et la documentation nécessaire."
      },
      {
        icon: <Clock className="h-5 w-5" />,
        title: "3. Présenter la demande",
        text: "Traiter la documentation et présenter la demande dans les délais établis."
      },
      {
        icon: <ShieldCheck className="h-5 w-5" />,
        title: "4. Suivi et justification",
        text: "Accompagnement tout au long du processus jusqu'à la justification finale du projet."
      }
    ],

    ctaTitle: "Vous avez un projet subventionnable ?",
    ctaText: "Nous conseillons et traitons vos demandes aux Fonds de Transition Nucléaire. Analyse gratuite de votre projet.",
    ctaButton: "Contacter maintenant",
  },
  de: {
    heroKicker: "Atomkraftwerksübergangsfonds",
    heroTitle: "Subventionen für erneuerbare Energie- und Energiewendeprojekte in den Terres de l'Ebre",
    heroSubtitle: "Finanzierung für Projekte, die einen fairen Energiewandel und die sozioökonomische Entwicklung in Gebieten fördern, die von der Kernenergieproduktion betroffen sind.",
    heroBadge: "Finanzierung verfügbar 2024-2025",
    ctaPrimary: "Information anfordern",
    ctaSecondary: "Begünstigte Gemeinden ansehen",

    whatIsTitle: "Was sind die Atomkraftwerksübergangsfonds?",
    whatIsText: "Die Atomkraftwerksübergangsfonds sind Fonds, die 2020 von der Generalitat de Catalunya geschaffen wurden, um Gebiete, die von der Denuklearisierung betroffen sind, bei einem fairen Energiewandel und der sozioökonomischen Entwicklung zu unterstützen. Sie werden durch eine spezifische Umweltsteuer in Catalunya finanziert, die 50 % der Einnahmen aus Aktivitäten zur Produktion, Lagerung und Umwandlung von Elektrizität aus Kernenergie besteuert.",
    whatIsPoints: [
      "Erstellt durch Gesetz 5/2020 vom 29. April",
      "Steuer auf Anlagen, die die Umwelt beeinträchtigen",
      "50 % der Einnahmen von Kernkraftwerken",
      "Ziel: fairer Energiewandel"
    ],

    municipalitiesTitle: "Begünstigte Gemeinden",
    municipalitiesText: "Alle Projekte, die in Gemeinden durchgeführt werden, die in einem Kreis mit einem Radius von maximal dreißig Kilometern liegen, konzentrisch zu den Kernkraftwerken Ascó und Vandellòs, können Begünstigte sein.",
    municipalitiesHighlight: "Über 90 Gemeinden in Catalunya, die von der Kernenergieproduktion betroffen sind",

    projectsTitle: "Förderfähige Projekte",
    projectsIntro: "Alle Projekte, die auf Energiewandel, Digitalisierung und Wirtschaftsförderung basieren, sind förderfähig:",
    projects: [
      {
        title: "Energiewandel",
        text: "Erneuerbare Energieanlagen (Solar, Wind, Biomasse), Energieeffizienzverbesserungen und Kreislaufwirtschaftsprojekte.",
        icon: <ShieldCheck className="h-6 w-6" />
      },
      {
        title: "Digitalisierung",
        text: "Implementierung digitaler Lösungen, E-Commerce, Prozessautomatisierung und Schulung in neuen Technologien.",
        icon: <Calculator className="h-6 w-6" />
      },
      {
        title: "Wirtschaftliche Entwicklung",
        text: "Unternehmensgründung, Wettbewerbsfähigkeitsverbesserung, nachhaltiger Tourismus und wirtschaftliche Diversifizierung.",
        icon: <Building2 className="h-6 w-6" />
      },
      {
        title: "Bürgerservices",
        text: "Verbesserung der öffentlichen Infrastruktur, Barrierefreiheit, nachhaltige Mobilität und soziale Dienstleistungen.",
        icon: <Users className="h-6 w-6" />
      }
    ],

    processTitle: "Wie beantragt man Fördermittel?",
    processSteps: [
      {
        icon: <FileText className="h-5 w-5" />,
        title: "1. Projekt vorbereiten",
        text: "Projekt, Budget und Ziele definieren. Überprüfen, ob es die Fondsanforderungen erfüllt."
      },
      {
        icon: <CheckCircle2 className="h-5 w-5" />,
        title: "2. Information anfordern",
        text: "Kontaktieren Sie uns für Beratung zur Projektumsetzbarkeit und erforderlichen Unterlagen."
      },
      {
        icon: <Clock className="h-5 w-5" />,
        title: "3. Antrag einreichen",
        text: "Dokumentation bearbeiten und Antrag innerhalb der festgelegten Fristen einreichen."
      },
      {
        icon: <ShieldCheck className="h-5 w-5" />,
        title: "4. Überwachung und Rechtfertigung",
        text: "Begleitung während des gesamten Prozesses bis zur endgültigen Projektbegründung."
      }
    ],

    ctaTitle: "Haben Sie ein förderfähiges Projekt?",
    ctaText: "Wir beraten und bearbeiten Ihre Anträge an die Atomkraftwerksübergangsfonds. Kostenlose Analyse Ihres Projekts.",
    ctaButton: "Jetzt kontaktieren",
  },
} as const

export default function NuclearTransitionFundPage() {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE)

  useEffect(() => {
    const saved = window.localStorage.getItem("locale") as Locale | null
    if (saved && saved !== locale) setLocale(saved)
  }, [])

  const handleLocaleChange = (next: Locale) => {
    setLocale(next)
    window.localStorage.setItem("locale", next)
  }

  const base = nuclearFundCopy[locale] ?? nuclearFundCopy["ca"]
  const c = base ?? nuclearFundCopy["en"]

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header locale={locale} onLocaleChange={handleLocaleChange} />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
          {/* Fondo abstracto simple para modernidad */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-primary to-primary opacity-100" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-white/20">
                <ShieldCheck className="h-4 w-4 text-secondary" />
                <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">{c.heroKicker}</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
                {c.heroTitle}
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 text-pretty max-w-2xl">
                {c.heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-base h-12 px-8 shadow-lg shadow-secondary/20">
                  <Link href="/contacte">
                    {c.ctaPrimary}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white h-12 px-8">
                  <a href="#municipis">
                    <MapPin className="mr-2 h-4 w-4" />
                    {c.ctaSecondary}
                  </a>
                </Button>
              </div>

              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/80">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>{c.heroBadge}</span>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS SECTION */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 rounded bg-primary/10 text-primary text-sm font-semibold mb-4">
                  FONS NUCLEAR
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{c.whatIsTitle}</h2>
                <p className="text-lg text-muted-foreground mb-8">{c.whatIsText}</p>

                <div className="space-y-3">
                  {c.whatIsPoints.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <ShieldCheck className="w-32 h-32 text-primary/30" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MUNICIPALITIES SECTION */}
        <section id="municipis" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.municipalitiesTitle}</h2>
              <p className="text-muted-foreground text-lg mb-6">{c.municipalitiesText}</p>
              <div className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                {c.municipalitiesHighlight}
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div className="space-y-1">
                  <h4 className="font-semibold text-primary mb-3">Zona PENTA I (&lt;10km)</h4>
                  <p className="text-muted-foreground text-xs mb-2">Ascó, Vandellòs i l'Hospitalet de l'Infant, Tivissa, etc.</p>
                  <p className="text-muted-foreground text-xs">50% del fons disponible</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-primary mb-3">Zona PENTA II (10-30km)</h4>
                  <p className="text-muted-foreground text-xs mb-2">Móra d'Ebre, Tortosa, Amposta, etc.</p>
                  <p className="text-muted-foreground text-xs">50% del fons disponible</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-secondary mb-3">Informació detallada</h4>
                  <p className="text-muted-foreground text-xs mb-2">
                    Consulta el mapa oficial de la Generalitat de Catalunya
                  </p>
                  <a
                    href="https://empresa.gencat.cat/ca/actualitat/fons-transicio-nuclear/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline text-xs font-medium inline-flex items-center gap-1"
                  >
                    Veure mapa oficial <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.projectsTitle}</h2>
              <p className="text-muted-foreground text-lg">{c.projectsIntro}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {c.projects.map((project, idx) => (
                <div key={idx} className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.processTitle}</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {c.processSteps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="w-14 h-14 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center mb-6 shadow-lg">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-primary-foreground/80 leading-relaxed text-sm">{step.text}</p>

                  {/* Connector Line (Desktop) */}
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
            <div className="bg-muted/40 rounded-3xl p-8 md:p-16 text-center border border-border/50 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{c.ctaTitle}</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">{c.ctaText}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-lg w-full sm:w-auto">
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
      <WhatsAppButton locale={locale} phoneNumber="34680132404" />
    </div>
  )
}</contents>
</xai:function_call">Crear la página completa de Fons Transició Nuclear con toda la información necesaria
