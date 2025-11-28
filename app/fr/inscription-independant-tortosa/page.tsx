"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, FileText, Clock, User, Calculator, Shield } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"

export default function InscriptionIndependantTortosaPage() {
  const [locale, setLocale] = useLocale()
  const router = useRouter()

  const handleLocaleChange = (newLocale: typeof locale) => {
    setLocale(newLocale)

    // Map current path to localized version
    const localeMap: Record<string, Record<string, string>> = {
      "/fr/inscription-independant-tortosa": {
        ca: "/alta-autonomo-tortosa",
        es: "/es/alta-autonomo-tortosa",
        en: "/en/freelancer-registration-tortosa",
        fr: "/fr/inscription-independant-tortosa",
        de: "/de/freiberufler-anmeldung-tortosa"
      }
    }

    const currentPath = "/fr/inscription-independant-tortosa"
    if (localeMap[currentPath]) {
      router.push(localeMap[currentPath][newLocale])
    }
  }

  const breadcrumbItems = [
    { label: "Inscription Indépendant Tortosa", href: "/fr/inscription-independant-tortosa" }
  ]

  const steps = [
    {
      icon: <User className="h-6 w-6" />,
      title: "Documentation Nécessaire",
      description: "DNI/NIE, certificat de résidence et déclaration responsable",
      details: [
        "DNI ou NIE en vigueur",
        "Certificat de résidence",
        "Déclaration responsable de début d'activité",
        "Numéro de compte bancaire"
      ]
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Modèle 036/037",
      description: "Immatriculation au cadastre auprès de l'Agence fiscale",
      details: [
        "Données personnelles et d'activité",
        "Régime de TVA applicable",
        "Activités économiques",
        "Domicile fiscal"
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Inscription à la Sécurité Sociale",
      description: "Inscription au Régime Spécial des Travailleurs Indépendants (RETA)",
      details: [
        "Choix de la base de cotisation",
        "Protection sociale complète",
        "Couverture santé",
        "Prestations d'invalidité"
      ]
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Obligations Fiscales",
      description: "TVA trimestrielle et déclaration d'impôt annuelle",
      details: [
        "TVA trimestrielle (modèle 303)",
        "Opérations intracommunautaires",
        "Déclaration d'impôt sur le revenu (IRPF)",
        "Paiements fractionnés"
      ]
    }
  ]

  const requirements = [
    { label: "Âge minimum", value: "18 ans" },
    { label: "Résidence", value: "Sur le territoire espagnol" },
    { label: "Activité", value: "Professionnelle ou économique" },
    { label: "Documentation", value: "Complète et actualisée" }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="fr" onLocaleChange={handleLocaleChange} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <User className="h-4 w-4" />
                Inscription Indépendant à Tortosa
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
                Inscription
                <span className="text-primary block mt-2">Indépendant à Tortosa</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Nous traitons votre inscription en tant qu'indépendant de manière complète et professionnelle.
                Nous nous occupons de toutes les démarches auprès de l'Agence fiscale et de la Sécurité Sociale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contacte">
                    Demander l'Inscription
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#exigences">
                    Voir les Exigences
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Processus d'Inscription Indépendant</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Nous vous guidons étape par étape dans tout le processus de constitution en tant que travailleur indépendant
                  à Tortosa et dans les Terres de l'Ebre.
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
              <div id="exigences" className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Exigences pour vous inscrire</h3>
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
                Besoin d'aide pour votre inscription d'indépendant ?
              </h3>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Chez Albiol Consultors nous nous occupons de toutes les démarches de manière rapide et sécurisée.
                Contactez-nous et nous vous aidons avec votre constitution d'indépendant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="/contacte">
                    Demander des Informations
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 text-primary hover:bg-white/10">
                  <Link href="/serveis/autonomos">
                    Plus sur les Indépendants
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale="fr" onLocaleChange={() => {}} />
      <WhatsAppButton locale="fr" phoneNumber="+34680132404" />
    </div>
  )
}
