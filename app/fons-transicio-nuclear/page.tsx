"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
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
    heroTitle: "Projectes Empresarials a les Zones de Transició Nuclear - Terres de l'Ebre",
    heroSubtitle: "Subvencions per a projectes empresarials que contribueixen al desenvolupament socioeconòmic i la diversificació econòmica de les zones afectades per la transició nuclear.",
    heroBadge: "Finançament disponible 2024-2025",
    valueProp1: "No cobrem comissions a èxit",
    valueProp2: "T'ajudem a posar el teu centre de Treball en Zones Penta",
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
    projectsIntro: "Quines són les línies d'actuació dels ajuts?",
    projects: [
      {
        title: "Subvencions per a projectes d'inversió empresarial",
        text: "Subvencions per a projectes d'inversió empresarial en actius fixes que suposin la creació d'un nou establiment, la incorporació d'una nova activitat per l'empresa, una ampliació de la capacitat productiva o una millora del procés productiu.",
        details: "Intensitat de l'ajut: entre el 10% i el 60%, en funció de la mida de l'empresa i el règim europeu al qual s'aculli. Import màxim: 300.000€. Pressupost: 22.900.000€",
        tag: "Indústries & Nau",
        icon: <Building2 className="h-6 w-6" />
      },
      {
        title: "Subvencions per a projectes de creació d'ocupació",
        text: "Subvencions per a projectes de creació d'ocupació d'un mínim de 3 nous llocs de treball.",
        details: "Intensitat de l'ajut: 50%. Import màxim: 300.000€. Pressupost: 4.000.000€",
        tag: "Ocupació",
        icon: <Users className="h-6 w-6" />
      },
      {
        title: "Subvencions per a projectes de creixement i noves oportunitats de negoci",
        text: "Subvencions per a projectes de creixement i noves oportunitats de negoci: Línia canvi estratègic, Línia canvi estructural, Línia captació de talent.",
        details: "Intensitat de l'ajut: entre el 10% i el 75%, en funció de la tipologia de despesa i la mida d'empresa. Import màxim: 31.000€ per canvi estratègic, 210.000€ per canvi estructural i 201.000€ per captació de talent. Pressupost: 1.500.000€",
        tag: "Estratègia & Consultoria",
        icon: <Calculator className="h-6 w-6" />
      },
      {
        title: "Subvencions per a projectes cooperatius",
        text: "Subvencions per a projectes cooperatius, entre empreses i agents de suport per millorar la competitivitat sectorial.",
        details: "Intensitat de l'ajut: 75%. Import màxim: 150.000€. Pressupost: 2.000.000€",
        tag: "Projectes Cooperatius",
        icon: <ShieldCheck className="h-6 w-6" />
      },
      {
        title: "Subvencions per a projectes d'emprenedoria d'alt valor afegit",
        text: "Subvencions per a projectes d'emprenedoria d'alt valor afegit, incloent les actuacions relacionades amb el desenvolupament del pla de negoci de l'empresa emergent d'alt valor afegit en les seves fases inicials.",
        details: "Intensitat de l'ajut: 100%. Import màxim: 50.000€. Pressupost: 600.000€",
        tag: "Startups",
        icon: <Calculator className="h-6 w-6" />
      },
      {
        title: "Subvencions per a projectes d'innovació tecnològica",
        text: "Subvencions per a projectes d'innovació tecnològica, propers al mercat, amb risc tecnològic mig/baix i curts períodes de recuperació de la inversió (amb TRLs 7-9), que fomentin una transformació tecnològica, digital i verda de les empreses.",
        details: "Intensitat de l'ajut: 75%. Import màxim: 150.000€. Pressupost: 4.000.000€",
        tag: "Innovació",
        icon: <Calculator className="h-6 w-6" />
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
    heroTitle: "Proyectos Empresariales en las Zonas de Transición Nuclear - Terres de l'Ebre",
    heroSubtitle: "Subvenciones para proyectos empresariales que contribuyen al desarrollo socioeconómico y la diversificación económica de las zonas afectadas por la transición nuclear.",
    heroBadge: "Financiación disponible 2024-2025",
    valueProp1: "No cobramos comisiones a éxito",
    valueProp2: "Te ayudamos a poner tu centro de Trabajo en Zonas Penta",
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
    projectsIntro: "¿Cuáles son las líneas de actuación de las ayudas?",
    projects: [
      {
        title: "Subvenciones para proyectos de inversión empresarial",
        text: "Subvenciones para proyectos de inversión empresarial en activos fijos que supongan la creación de un nuevo establecimiento, la incorporación de una nueva actividad para la empresa, una ampliación de la capacidad productiva o una mejora del proceso productivo.",
        details: "Intensidad de la ayuda: entre el 10% y el 60%, en función del tamaño de la empresa y el régimen europeo al que se acoja. Importe máximo: 300.000€. Presupuesto: 22.900.000€",
        tag: "Industrias & Naves",
        icon: <Building2 className="h-6 w-6" />
      },
      {
        title: "Subvenciones para proyectos de creación de ocupación",
        text: "Subvenciones para proyectos de creación de ocupación de un mínimo de 3 nuevos puestos de trabajo.",
        details: "Intensidad de la ayuda: 50%. Importe máximo: 300.000€. Presupuesto: 4.000.000€",
        tag: "Ocupación",
        icon: <Users className="h-6 w-6" />
      },
      {
        title: "Subvenciones para proyectos de crecimiento y nuevas oportunidades de negocio",
        text: "Subvenciones para proyectos de crecimiento y nuevas oportunidades de negocio: Línea cambio estratégico, Línea cambio estructural, Línea captación de talento.",
        details: "Intensidad de la ayuda: entre el 10% y el 75%, en función de la tipología de gasto y el tamaño de empresa. Importe máximo: 31.000€ por cambio estratégico, 210.000€ por cambio estructural y 201.000€ por captación de talento. Presupuesto: 1.500.000€",
        tag: "Estrategia & Consultoría",
        icon: <Calculator className="h-6 w-6" />
      },
      {
        title: "Subvenciones para proyectos cooperativos",
        text: "Subvenciones para proyectos cooperativos, entre empresas y agentes de apoyo para mejorar la competitividad sectorial.",
        details: "Intensidad de la ayuda: 75%. Importe máximo: 150.000€. Presupuesto: 2.000.000€",
        tag: "Proyectos Cooperativos",
        icon: <ShieldCheck className="h-6 w-6" />
      },
      {
        title: "Subvenciones para proyectos de emprendimiento de alto valor añadido",
        text: "Subvenciones para proyectos de emprendimiento de alto valor añadido, incluyendo las actuaciones relacionadas con el desarrollo del plan de negocio de la empresa emergente de alto valor añadido en sus fases iniciales.",
        details: "Intensidad de la ayuda: 100%. Importe máximo: 50.000€. Presupuesto: 600.000€",
        tag: "Startups",
        icon: <Calculator className="h-6 w-6" />
      },
      {
        title: "Subvenciones para proyectos de innovación tecnológica",
        text: "Subvenciones para proyectos de innovación tecnológica, próximos al mercado, con riesgo tecnológico medio/bajo y cortos períodos de recuperación de la inversión (con TRLs 7-9), que fomenten una transformación tecnológica, digital y verde de las empresas.",
        details: "Intensidad de la ayuda: 75%. Importe máximo: 150.000€. Presupuesto: 4.000.000€",
        tag: "Innovación",
        icon: <Calculator className="h-6 w-6" />
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
    heroTitle: "Business Projects in Nuclear Transition Zones - Terres de l'Ebre",
    heroSubtitle: "Funding for projects that promote fair energy transition and socioeconomic development in areas affected by nuclear power production.",
    heroBadge: "Funding available 2024-2025",
    valueProp1: "No success fees",
    valueProp2: "We help you establish your workplace in PENTA zones",
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
    projectsIntro: "What are the lines of action for the grants?",
    projects: [
      {
        title: "Grants for business investment projects",
        text: "Grants for business investment projects in fixed assets that involve the creation of a new establishment, the incorporation of a new activity for the company, an expansion of production capacity or an improvement of the production process.",
        details: "Aid intensity: between 10% and 60%, depending on the size of the company and the European regime to which it subscribes. Maximum amount: 300,000€. Budget: 22,900,000€",
        tag: "Industries & Premises",
        icon: <Building2 className="h-6 w-6" />
      },
      {
        title: "Grants for employment creation projects",
        text: "Grants for employment creation projects of a minimum of 3 new jobs.",
        details: "Aid intensity: 50%. Maximum amount: 300,000€. Budget: 4,000,000€",
        tag: "Employment",
        icon: <Users className="h-6 w-6" />
      },
      {
        title: "Grants for growth and new business opportunity projects",
        text: "Grants for growth and new business opportunity projects: Strategic change line, Structural change line, Talent attraction line.",
        details: "Aid intensity: between 10% and 75%, depending on the type of expenditure and company size. Maximum amount: 31,000€ for strategic change, 210,000€ for structural change and 201,000€ for talent attraction. Budget: 1,500,000€",
        tag: "Strategy & Consulting",
        icon: <Calculator className="h-6 w-6" />
      },
      {
        title: "Grants for cooperative projects",
        text: "Grants for cooperative projects, between companies and support agents to improve sector competitiveness.",
        details: "Aid intensity: 75%. Maximum amount: 150,000€. Budget: 2,000,000€",
        tag: "Cooperative Projects",
        icon: <ShieldCheck className="h-6 w-6" />
      },
      {
        title: "Grants for high value-added entrepreneurship projects",
        text: "Grants for high value-added entrepreneurship projects, including actions related to the development of the business plan of the high value-added emerging company in its initial phases.",
        details: "Aid intensity: 100%. Maximum amount: 50,000€. Budget: 600,000€",
        tag: "Startups",
        icon: <Calculator className="h-6 w-6" />
      },
      {
        title: "Grants for technological innovation projects",
        text: "Grants for technological innovation projects, close to market, with medium/low technological risk and short investment recovery periods (with TRLs 7-9), that promote a technological, digital and green transformation of companies.",
        details: "Aid intensity: 75%. Maximum amount: 150,000€. Budget: 4,000,000€",
        tag: "Innovation",
        icon: <Calculator className="h-6 w-6" />
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
    heroTitle: "Projets Entrepreneuriaux dans les Zones de Transition Nucléaire - Terres de l'Ebre",
    heroSubtitle: "Financement pour des projets qui promeuvent la transition énergétique juste et le développement socioéconomique dans les zones affectées par la production d'énergie nucléaire.",
    heroBadge: "Financement disponible 2024-2025",
    valueProp1: "Pas de commissions à succès",
    valueProp2: "Nous vous aidons à établir votre centre de travail dans les zones PENTA",
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
    projectsIntro: "Quelles sont les lignes d'action des aides ?",
    projects: [
      {
        title: "Subventions pour projets d'investissement entrepreneurial",
        text: "Subventions pour projets d'investissement entrepreneurial en actifs fixes qui supposent la création d'un nouvel établissement, l'incorporation d'une nouvelle activité pour l'entreprise, une expansion de la capacité productive ou une amélioration du processus productif.",
        details: "Intensité de l'aide : entre 10 % et 60 %, en fonction de la taille de l'entreprise et du régime européen auquel elle s'inscrit. Montant maximum : 300 000 €. Budget : 22 900 000 €",
        tag: "Industries & Entrepôts",
        icon: <Building2 className="h-6 w-6" />
      },
      {
        title: "Subventions pour projets de création d'emplois",
        text: "Subventions pour projets de création d'emplois d'un minimum de 3 nouveaux postes de travail.",
        details: "Intensité de l'aide : 50 %. Montant maximum : 300 000 €. Budget : 4 000 000 €",
        tag: "Emploi",
        icon: <Users className="h-6 w-6" />
      },
      {
        title: "Subventions pour projets de croissance et nouvelles opportunités d'affaires",
        text: "Subventions pour projets de croissance et nouvelles opportunités d'affaires : Ligne changement stratégique, Ligne changement structurel, Ligne attraction de talents.",
        details: "Intensité de l'aide : entre 10 % et 75 %, en fonction de la typologie de dépense et de la taille d'entreprise. Montant maximum : 31 000 € pour changement stratégique, 210 000 € pour changement structurel et 201 000 € pour attraction de talents. Budget : 1 500 000 €",
        tag: "Stratégie & Conseil",
        icon: <Calculator className="h-6 w-6" />
      },
      {
        title: "Subventions pour projets coopératifs",
        text: "Subventions pour projets coopératifs, entre entreprises et agents de soutien pour améliorer la compétitivité sectorielle.",
        details: "Intensité de l'aide : 75 %. Montant maximum : 150 000 €. Budget : 2 000 000 €",
        tag: "Projets Coopératifs",
        icon: <ShieldCheck className="h-6 w-6" />
      },
      {
        title: "Subventions pour projets d'entrepreneuriat à haute valeur ajoutée",
        text: "Subventions pour projets d'entrepreneuriat à haute valeur ajoutée, incluant les actions liées au développement du plan d'affaires de l'entreprise émergente à haute valeur ajoutée dans ses phases initiales.",
        details: "Intensité de l'aide : 100 %. Montant maximum : 50 000 €. Budget : 600 000 €",
        tag: "Startups",
        icon: <Calculator className="h-6 w-6" />
      },
      {
        title: "Subventions pour projets d'innovation technologique",
        text: "Subventions pour projets d'innovation technologique, proches du marché, avec risque technologique moyen/faible et courtes périodes de récupération d'investissement (avec TRL 7-9), qui favorisent une transformation technologique, numérique et verte des entreprises.",
        details: "Intensité de l'aide : 75 %. Montant maximum : 150 000 €. Budget : 4 000 000 €",
        tag: "Innovation",
        icon: <Calculator className="h-6 w-6" />
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
    heroTitle: "Geschäftsprojekte in Kernenergie-Übergangszonen - Terres de l'Ebre",
    heroSubtitle: "Finanzierung für Projekte, die einen fairen Energiewandel und die sozioökonomische Entwicklung in Gebieten fördern, die von der Kernenergieproduktion betroffen sind.",
    heroBadge: "Finanzierung verfügbar 2024-2025",
    valueProp1: "Keine Erfolgshonorare",
    valueProp2: "Wir helfen Ihnen, Ihren Arbeitsplatz in PENTA-Zonen einzurichten",
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
    projectsIntro: "Was sind die Linien der Maßnahmen der Förderungen?",
    projects: [
      {
        title: "Subventionen für Unternehmensinvestitionsprojekte",
        text: "Subventionen für Unternehmensinvestitionsprojekte in Anlagevermögen, die die Schaffung eines neuen Betriebs, die Aufnahme einer neuen Tätigkeit für das Unternehmen, eine Erweiterung der Produktionskapazität oder eine Verbesserung des Produktionsprozesses beinhalten.",
        details: "Förderintensität: zwischen 10 % und 60 %, je nach Unternehmensgröße und dem europäischen Regime, dem es beitritt. Maximaler Betrag: 300.000 €. Budget: 22.900.000 €",
        tag: "Industrie & Immobilien",
        icon: <Building2 className="h-6 w-6" />
      },
      {
        title: "Subventionen für Beschäftigungsschaffungsprojekte",
        text: "Subventionen für Beschäftigungsschaffungsprojekte mit einem Minimum von 3 neuen Arbeitsplätzen.",
        details: "Förderintensität: 50 %. Maximaler Betrag: 300.000 €. Budget: 4.000.000 €",
        tag: "Beschäftigung",
        icon: <Users className="h-6 w-6" />
      },
      {
        title: "Subventionen für Wachstums- und neue Geschäftsmöglichkeitsprojekte",
        text: "Subventionen für Wachstums- und neue Geschäftsmöglichkeitsprojekte: Strategischer Wandel Linie, Struktureller Wandel Linie, Talentgewinnung Linie.",
        details: "Förderintensität: zwischen 10 % und 75 %, je nach Ausgabentypologie und Unternehmensgröße. Maximaler Betrag: 31.000 € für strategischen Wandel, 210.000 € für strukturellen Wandel und 201.000 € für Talentgewinnung. Budget: 1.500.000 €",
        tag: "Strategie & Beratung",
        icon: <Calculator className="h-6 w-6" />
      },
      {
        title: "Subventionen für kooperative Projekte",
        text: "Subventionen für kooperative Projekte zwischen Unternehmen und Unterstützungsagenten zur Verbesserung der sektoralen Wettbewerbsfähigkeit.",
        details: "Förderintensität: 75 %. Maximaler Betrag: 150.000 €. Budget: 2.000.000 €",
        tag: "Kooperative Projekte",
        icon: <ShieldCheck className="h-6 w-6" />
      },
      {
        title: "Subventionen für Hochwert-Entrepreneurship-Projekte",
        text: "Subventionen für Hochwert-Entrepreneurship-Projekte, einschließlich Maßnahmen im Zusammenhang mit der Entwicklung des Geschäftsplans des Hochwert-Startups in seinen Anfangsphasen.",
        details: "Förderintensität: 100 %. Maximaler Betrag: 50.000 €. Budget: 600.000 €",
        tag: "Startups",
        icon: <Calculator className="h-6 w-6" />
      },
      {
        title: "Subventionen für technologische Innovationsprojekte",
        text: "Subventionen für technologische Innovationsprojekte, marktnah, mit mittlerem/niedrigem technologischem Risiko und kurzen Investitionsrückgewinnungszeiten (mit TRLs 7-9), die eine technologische, digitale und grüne Transformation der Unternehmen fördern.",
        details: "Förderintensität: 75 %. Maximaler Betrag: 150.000 €. Budget: 4.000.000 €",
        tag: "Innovation",
        icon: <Calculator className="h-6 w-6" />
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
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Columna izquierda: texto */}
              <div className="max-w-2xl lg:pl-4 xl:pl-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-white/20">
                    <ShieldCheck className="h-4 w-4 text-secondary" />
                    <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">{c.heroKicker}</span>
                  </div>

                  <h1 className="text-4xl md:text-6xl font-bold mb-8 text-balance leading-tight">
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

              {/* Columna derecha: imagen */}
              <div className="relative h-[400px] lg:h-[500px] w-full hidden lg:block animate-in fade-in slide-in-from-right-12 duration-1000 delay-200">
                {/* Etiquetas flotantes encima de la imagen */}
                <div className="absolute top-8 left-8 z-10 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg animate-pulse border border-white/20">
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-slate-900 font-semibold text-sm">{c.valueProp1}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-white/20">
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-slate-900 font-medium text-sm">{c.valueProp2}</span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-card rounded-[30px_30px_200px_30px] overflow-hidden border border-border/50 shadow-2xl">
                  <img
                    src="/FTN.jpg"
                    alt="Fons Transició Nuclear - Zones afectades"
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-[2s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                </div>
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

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {c.projects.map((project, idx) => (
                <div key={idx} className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    {project.tag && (
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full uppercase tracking-wide">
                        {project.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  {project.details && (
                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.details}</p>
                    </div>
                  )}
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
                  <span className="font-medium">680 132 404</span>
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
}
