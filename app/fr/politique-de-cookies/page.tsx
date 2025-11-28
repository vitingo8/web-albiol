"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PolitiqueCookiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="fr" onLocaleChange={() => {}} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <span>Politique de Cookies</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
                Politique de Cookies
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Informations sur l'utilisation des cookies sur notre site web selon la réglementation de l'UE.
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
                  <p className="mb-4">
                    Cette politique de cookies a été mise à jour pour la dernière fois le 28 novembre 2025 et s'applique aux citoyens et résidents légaux permanents de l'Espace Économique Européen et de la Suisse.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                  <p className="mb-4">
                    Notre site web, https://albiolconsultors.com (ci-après "le site web") utilise des cookies et d'autres technologies connexes (par commodité, toutes les technologies sont appelées "cookies"). Les cookies sont également placés par des tiers que nous avons contractés. Dans le document suivant, nous vous informons sur l'utilisation des cookies sur notre site web.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Qu'est-ce qu'un cookie ?</h2>
                  <p className="mb-4">
                    Un cookie est un petit fichier simple qui est envoyé avec les pages de ce site web et que votre navigateur stocke sur le disque dur de votre ordinateur ou d'un autre appareil. Les informations stockées peuvent être renvoyées à nos serveurs ou aux serveurs des tiers correspondants lors d'une visite ultérieure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. Qu'est-ce qu'un script ?</h2>
                  <p className="mb-4">
                    Un script est une pièce de code logiciel utilisée pour que notre site web fonctionne correctement et de manière interactive. Ce code s'exécute sur notre serveur ou sur votre appareil.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Qu'est-ce qu'une balise web ?</h2>
                  <p className="mb-4">
                    Une balise web (ou une étiquette de pixel) est une petite pièce de texte ou d'image invisible sur un site web utilisée pour contrôler le trafic d'un site web. Pour ce faire, diverses données sont stockées à l'aide de balises web.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>

                  <h3 className="text-xl font-semibold mb-3">5.1 Cookies techniques ou fonctionnels</h3>
                  <p className="mb-4">
                    Certains cookies assurent que certaines parties du site web fonctionnent correctement et que les préférences des utilisateurs restent connues. En utilisant des cookies fonctionnels, nous vous facilitons la visite de notre site web. De cette manière, vous n'avez pas à saisir à plusieurs reprises les mêmes informations lorsque vous visitez notre site web et, par exemple, les éléments restent dans le panier jusqu'à ce que vous ayez payé. Nous pouvons placer ces cookies sans votre consentement.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">5.2 Cookies de statistiques</h3>
                  <p className="mb-4">
                    Nous utilisons des cookies analytiques pour optimiser l'expérience du site web pour nos utilisateurs. Avec ces cookies analytiques, nous obtenons des informations sur l'utilisation de notre site web. Nous vous demandons la permission de placer des cookies de statistiques.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">5.3 Cookies de marketing/suivi</h3>
                  <p className="mb-4">
                    Les cookies de marketing/suivi sont des cookies ou toute autre forme de stockage local utilisés pour créer des profils d'utilisateurs afin d'afficher de la publicité ou pour suivre l'utilisateur sur ce site web ou sur plusieurs sites web à des fins de marketing similaires.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">5.4 Réseaux sociaux</h3>
                  <p className="mb-4">
                    Sur notre site web, nous avons inclus du contenu WhatsApp pour promouvoir des pages web (par exemple, "j'aime", "épingler") ou partager (par exemple, "tweeter") sur des réseaux sociaux comme WhatsApp. Ce contenu est intégré avec du code dérivé de WhatsApp et place des cookies. Ce contenu peut stocker et traiter certaines informations pour de la publicité personnalisée.
                  </p>
                  <p className="mb-4">
                    Veuillez lire la politique de confidentialité de ces réseaux sociaux (qui peuvent changer régulièrement) pour comprendre ce qu'ils font avec vos données personnelles traitées à l'aide de ces cookies. Les données récupérées sont anonymisées autant que possible. WhatsApp est situé aux États-Unis.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Cookies placés</h2>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Google Analytics</h3>
                    <p className="mb-1"><strong>Finalité :</strong> Statistiques</p>
                    <p className="mb-1"><strong>Consentement :</strong> Consent to service google-analytics</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Vercel Analytics</h3>
                    <p className="mb-1"><strong>Finalité :</strong> Statistiques</p>
                    <p className="mb-1"><strong>Consentement :</strong> Consent to service vercel-analytics</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                    <p className="mb-1"><strong>Finalité :</strong> Fonctionnel</p>
                    <p className="mb-1"><strong>Consentement :</strong> Consent to service whatsapp</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Cookies fonctionnels</h3>
                    <p className="mb-1"><strong>Finalité :</strong> Fonctionnel</p>
                    <p className="mb-1"><strong>Consentement :</strong> Consent to service functional-cookies</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Consentement</h2>
                  <p className="mb-4">
                    Lorsque vous visitez notre site web pour la première fois, nous vous montrons un message pop-up avec une explication sur les cookies. Dès que vous cliquez sur "Sauvegarder les préférences", vous consentez à ce que nous utilisions les catégories de cookies et extensions que vous avez sélectionnées dans le message pop-up, comme décrit dans cette Politique de cookies. Vous pouvez désactiver l'utilisation des cookies via votre navigateur, mais veuillez noter que notre site web pourrait ne pas fonctionner correctement.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">7.1 Gérez vos paramètres de consentement</h3>
                  <p className="mb-2"><strong>Fonctionnel :</strong> Toujours actif</p>
                  <p className="mb-2"><strong>Statistiques :</strong> Statistiques</p>
                  <p className="mb-2"><strong>Marketing :</strong> Marketing</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Activation / désactivation et suppression de cookies</h2>
                  <p className="mb-4">
                    Vous pouvez utiliser le navigateur pour supprimer automatiquement ou manuellement les cookies. De plus, vous pouvez spécifier que certains cookies ne soient pas placés. Une autre option consiste à modifier les préférences de votre navigateur pour recevoir un message chaque fois qu'un cookie est placé. Pour plus d'informations, vous pouvez consulter les instructions dans l'Aide de votre navigateur.
                  </p>
                  <p className="mb-4">
                    Veuillez noter que notre site web pourrait ne pas fonctionner correctement si tous les cookies sont désactivés. Si vous supprimez les cookies du navigateur, de nouveaux seront créés après votre consentement lorsque vous reviendrez visiter nos sites web.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Vos droits concernant les données personnelles</h2>
                  <p className="mb-4">Vous disposez des droits suivants concernant vos données personnelles :</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Vous avez le droit de savoir pourquoi vos données personnelles sont nécessaires, ce qui leur arrivera et combien de temps elles seront conservées.</li>
                    <li>Droit d'accès : vous avez le droit d'accéder à vos données personnelles qui nous sont connues.</li>
                    <li>Droit de rectification : vous avez le droit de compléter, corriger, supprimer ou bloquer vos données personnelles quand vous le souhaitez.</li>
                    <li>Si vous nous donnez votre consentement pour traiter vos données, vous avez le droit de révoquer ce consentement et de supprimer vos données personnelles.</li>
                    <li>Droit de transférer vos données : vous avez le droit de demander toutes vos données personnelles au responsable et de les transférer en intégralité à un autre responsable.</li>
                    <li>Droit d'opposition : vous pouvez vous opposer au traitement de vos données. Nous nous y conformons, à moins qu'il n'y ait des raisons justifiées pour le traitement.</li>
                  </ul>
                  <p className="mb-4">
                    Pour exercer ces droits, veuillez nous contacter. Veuillez consulter les coordonnées en bas de cette Politique de cookies. Si vous avez une réclamation sur la façon dont nous gérons vos données, nous aimerions l'entendre, mais vous avez également le droit de déposer une réclamation auprès de l'autorité de surveillance (l'Agence de Protection des Données).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">10. Détails de contact</h2>
                  <p className="mb-4">
                    Pour des questions et/ou commentaires sur notre Politique de cookies et cette déclaration, veuillez nous contacter en utilisant les coordonnées suivantes :
                  </p>
                  <p className="mb-2"><strong>ALBIOL CONSULTORS LEGALS I D'EMPRESA SL</strong></p>
                  <p className="mb-2">Carrer Argentina, 9, 2A - 43500 Tortosa (Tarragona)</p>
                  <p className="mb-2">Espagne</p>
                  <p className="mb-2">Site web : https://albiolconsultors.com</p>
                  <p className="mb-2">E-mail : info@albiolconsultors.com</p>
                  <p className="mb-2">Téléphone : 680 132 404</p>
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
