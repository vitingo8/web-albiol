"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="fr" onLocaleChange={() => {}} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <span>Politique de Confidentialité</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
                Politique de Confidentialité
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Votre confidentialité est importante pour nous. Cette politique explique comment nous traitons et protégeons vos données personnelles.
              </p>

              <Button asChild variant="outline" className="gap-2">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  Retour à l'Accueil
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">1. INFORMATION POUR L'UTILISATEUR</h2>

                  <h3 className="text-xl font-semibold mb-3">Qui est responsable du traitement de vos données personnelles ?</h3>
                  <p className="mb-4">
                    ALBIOL CONSULTORS LEGALS I D'EMPRESA SL, avec le numéro d'identification fiscale B55756738, est le RESPONSABLE du traitement des données personnelles de l'UTILISATEUR et l'informe que ces données seront traitées conformément aux dispositions du Règlement (UE) 2016/679 du 27 avril (RGPD) et de la Loi Organique 3/2018 du 5 décembre (LOPDGDD).
                  </p>

                  <h3 className="text-xl font-semibold mb-3">Pourquoi traitons-nous vos données personnelles ?</h3>
                  <p className="mb-3">Pour maintenir une relation commerciale avec l'utilisateur. Les opérations prévues pour effectuer le traitement sont :</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Envoi de communications commerciales publicitaires par e-mail, fax, SMS, MMS, réseaux sociaux ou tout autre moyen électronique ou physique, présent ou futur, permettant d'effectuer des communications commerciales. Ces communications seront faites par le RESPONSABLE et sont liées à ses produits et services de conseil fiscal, du travail et comptable. Dans ce cas, les tiers n'auront jamais accès aux données personnelles.</li>
                    <li>Effectuer des études de marché et des analyses statistiques liées aux services de conseil.</li>
                    <li>Traiter les demandes de commandes, répondre aux consultations sur les services fiscaux, du travail et comptables ou tout type de demande faite par l'UTILISATEUR par le biais de l'une des formes de contact mises à sa disposition sur le site web du RESPONSABLE.</li>
                    <li>Envoyer la newsletter en ligne sur les nouveautés, offres et promotions dans nos services de conseil fiscal et du travail.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">Pour quelle raison pouvons-nous traiter vos données personnelles ?</h3>
                  <p className="mb-3">Parce que le traitement est légitimé par l'article 6 du RGPD comme suit :</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Avec le consentement de l'UTILISATEUR : envoi de communications commerciales et de la newsletter.</li>
                    <li>Pour l'intérêt légitime du RESPONSABLE : effectuer des études de marché, analyses statistiques liées aux services de conseil, etc. et traiter les commandes, demandes, etc. à la demande de l'UTILISATEUR.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">Pendant combien de temps conserverons-nous vos données personnelles ?</h3>
                  <p className="mb-4">
                    Elles seront conservées pendant une durée n'excédant pas celle nécessaire pour maintenir la finalité du traitement ou tant qu'il existe des prescriptions légales qui en dictent la conservation et lorsqu'elles ne sont plus nécessaires à cette fin, elles seront supprimées avec des mesures de sécurité appropriées pour garantir l'anonymisation des données ou leur destruction totale.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">À qui communiquons-nous vos données personnelles ?</h3>
                  <p className="mb-4">
                    Aucune communication de données personnelles à des tiers n'est prévue sauf, si nécessaire pour le développement et l'exécution des finalités du traitement, à nos fournisseurs de services liés aux communications et au conseil, avec lesquels le RESPONSABLE a formalisé les contrats de confidentialité et de sous-traitant exigés par la réglementation actuelle en matière de confidentialité.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">Quels sont vos droits ?</h3>
                  <p className="mb-3">Les droits dont dispose l'UTILISATEUR sont :</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Droit de retirer le consentement à tout moment.</li>
                    <li>Droit d'accès, de rectification, de portabilité et de suppression de ses données et de limitation ou d'opposition à leur traitement.</li>
                    <li>Droit de déposer une réclamation auprès de l'autorité de contrôle (www.aepd.es) s'il estime que le traitement ne se conforme pas à la réglementation en vigueur.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">Coordonnées pour exercer vos droits :</h3>
                  <p className="mb-4">
                    ALBIOL CONSULTORS LEGALS I D'EMPRESA SL. Carrer Argentina, 9, 2A - 43500 TORTOSA (Tarragona). E-mail : info@albiolconsultors.com
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. CARACTÈRE OBLIGATOIRE OU FACULTATIF DES INFORMATIONS FOURNIES PAR L'UTILISATEUR</h2>
                  <p className="mb-4">
                    Les UTILISATEURS, au moyen des cases correspondantes et de l'introduction de données dans les champs, marqués d'un astérisque (*) dans le formulaire de contact ou présentés dans les formulaires de téléchargement, acceptent expressément et de manière libre et non équivoque que leurs données sont nécessaires pour répondre à leur demande par le prestataire, et que par conséquent l'inclusion des données dans les champs restants est volontaire. L'UTILISATEUR garantit que les données personnelles fournies au RESPONSABLE sont véridiques et est responsable de communiquer toute modification.
                  </p>
                  <p className="mb-4">
                    Le RESPONSABLE informe que toutes les données demandées via le site web sont obligatoires, car elles sont nécessaires pour fournir un service optimal à l'UTILISATEUR. Dans le cas où toutes les données ne sont pas fournies, il n'est pas garanti que les informations et services fournis répondent pleinement à leurs besoins.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. MESURES DE SÉCURITÉ</h2>
                  <p className="mb-4">
                    Que, conformément à ce qui est établi dans les réglementations en vigueur en matière de protection des données personnelles, le RESPONSABLE respecte toutes les dispositions des réglementations RGPD et LOPDGDD pour le traitement des données personnelles sous sa responsabilité, et manifestement avec les principes décrits à l'article 5 du RGPD, par lesquels ils sont traités de manière licite, loyale et transparente vis-à-vis de la personne concernée et adéquats, pertinents et limités à ce qui est nécessaire par rapport aux finalités pour lesquelles ils sont traités.
                  </p>
                  <p className="mb-4">
                    Le RESPONSABLE garantit qu'il a mis en œuvre des politiques techniques et organisationnelles appropriées pour appliquer les mesures de sécurité établies par le RGPD et la LOPDGDD afin de protéger les droits et libertés des UTILISATEURS et leur a communiqué les informations appropriées pour qu'ils puissent les exercer.
                  </p>
                  <p className="mb-4">
                    Pour plus d'informations sur les garanties de confidentialité, vous pouvez contacter le RESPONSABLE via ALBIOL CONSULTORS LEGALS I D'EMPRESA SL. Carrer Argentina, 9, 2A - 43500 TORTOSA (Tarragona). E-mail : info@albiolconsultors.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale="fr" onLocaleChange={() => {}} />
    </div>
  )
}
