"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="fr" onLocaleChange={() => {}} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <span>Mentions Légales</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
                Mentions Légales
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Informations légales et conditions d'utilisation de notre site web selon la LSSI.
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
                  <h2 className="text-2xl font-bold mb-4">LOI SUR LES SERVICES DE LA SOCIÉTÉ DE L'INFORMATION (LSSI)</h2>
                  <p className="mb-4">
                    ALBIOL CONSULTORS LEGALS I D'EMPRESA SL, responsable du site web, ci-après le RESPONSABLE, met à la disposition des utilisateurs le présent document, avec lequel il entend se conformer aux obligations établies par la Loi 34/2002, du 11 juillet, sur les Services de la Société de l'Information et du Commerce Électronique (LSSICE), BOE N.º 166, ainsi qu'informer tous les utilisateurs du site web sur quelles sont les conditions d'utilisation.
                  </p>
                  <p className="mb-4">
                    Toute personne qui accède à ce site web assume le rôle d'utilisateur, s'engageant à l'observation et au respect rigoureux des dispositions ici établies, ainsi qu'à toute autre disposition légale qui serait applicable.
                  </p>
                  <p className="mb-4">
                    ALBIOL CONSULTORS LEGALS I D'EMPRESA SL se réserve le droit de modifier tout type d'information pouvant apparaître sur le site web, sans obligation de préavis ou d'informer les utilisateurs de ces obligations, étant entendu que la publication sur le site web d'ALBIOL CONSULTORS LEGALS I D'EMPRESA SL est suffisante.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">1. DONNÉES D'IDENTIFICATION</h2>
                  <p className="mb-2"><strong>Nom de domaine :</strong> albiolconsultors.com</p>
                  <p className="mb-2"><strong>Nom commercial :</strong> ALBIOL CONSULTORS LEGALS I D'EMPRESA SL</p>
                  <p className="mb-2"><strong>Dénomination sociale :</strong> ALBIOL CONSULTORS LEGALS I D'EMPRESA SL</p>
                  <p className="mb-2"><strong>NIF :</strong> B55756738</p>
                  <p className="mb-2"><strong>Domicile social :</strong> Carrer Argentina, 9, 2A - 43500 Tortosa (Tarragona)</p>
                  <p className="mb-2"><strong>Téléphone :</strong> 680 132 404</p>
                  <p className="mb-2"><strong>E-mail :</strong> info@albiolconsultors.com</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. DROITS DE PROPRIÉTÉ INTELLECTUELLE ET INDUSTRIELLE</h2>
                  <p className="mb-4">
                    Le site web, incluant à titre énonciatif mais non limitatif sa programmation, édition, compilation et autres éléments nécessaires à son fonctionnement, les designs, logos, texte et/ou graphiques, sont la propriété du RESPONSABLE ou, le cas échéant, dispose de licence ou autorisation expresse de la part des auteurs. Tous les contenus du site web sont dûment protégés par la réglementation de propriété intellectuelle et industrielle, ainsi qu'inscrits dans les registres publics correspondants.
                  </p>
                  <p className="mb-4">
                    Indépendamment de la finalité pour laquelle ils étaient destinés, la reproduction totale ou partielle, utilisation, exploitation, distribution et commercialisation requiert en tout cas l'autorisation écrite préalable de la part du RESPONSABLE.
                  </p>
                  <p className="mb-4">
                    Toute utilisation non autorisée préalable est considérée comme une violation grave des droits de propriété intellectuelle ou industrielle de l'auteur.
                  </p>
                  <p className="mb-4">
                    Les designs, logos, texte et/ou graphiques étrangers au RESPONSABLE et pouvant apparaître sur le site web appartiennent à leurs propriétaires respectifs, ceux-ci étant responsables de toute controverse possible pouvant en découler. Le RESPONSABLE autorise expressément les tiers à rediriger directement vers les contenus concrets du site web, et en tout cas à rediriger vers le site web principal d'albiolconsultors.com.
                  </p>
                  <p className="mb-4">
                    Le RESPONSABLE reconnaît en faveur de leurs titulaires les droits de propriété intellectuelle et industrielle correspondants, sans impliquer que leur simple mention ou apparition sur le site web signifie l'existence de droits ou de responsabilité sur les mêmes, ni soutien, parrainage ou recommandation de la part du RESPONSABLE.
                  </p>
                  <p className="mb-4">
                    Pour effectuer tout type d'observation concernant d'éventuelles violations des droits de propriété intellectuelle ou industrielle, ainsi que sur n'importe quel contenu du site web, vous pouvez le faire via l'adresse e-mail info@albiolconsultors.com.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. EXONÉRATION DE RESPONSABILITÉS</h2>
                  <p className="mb-4">
                    Le RESPONSABLE s'exonère de tout type de responsabilité dérivée de l'information publiée sur son site web pour autant qu'il n'ait pas connaissance effective que cette information ait été manipulée ou introduite par un tiers étranger à la même ou, s'il l'a, ait agi avec diligence pour retirer les données ou rendre impossible l'accès à elles.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">Utilisation de Cookies</h3>
                  <p className="mb-4">
                    Ce site web peut utiliser des cookies techniques (petits fichiers d'information que le serveur envoie à l'ordinateur de celui qui accède à la page) pour effectuer certaines fonctions considérées comme essentielles pour le bon fonctionnement et l'affichage du web. Les cookies utilisés ont, en tout cas, un caractère temporaire, avec la seule finalité de rendre la navigation plus efficace, et disparaissent en finissant la session de l'utilisateur. En aucun cas, ces cookies ne fournissent par eux-mêmes des données de caractère personnel et ne seront pas utilisés pour recueillir des données de ce type.
                  </p>
                  <p className="mb-4">
                    Par l'utilisation de cookies, il est également possible que le serveur où se trouve le web reconnaisse le navigateur utilisé par l'utilisateur, afin que la navigation soit plus simple, permettant, par exemple, l'accès des utilisateurs qui se sont préalablement enregistrés aux zones, services, promotions ou concours réservés exclusivement à eux sans devoir s'enregistrer à chaque visite. Ils peuvent également être utilisés pour mesurer l'audience, paramètres de trafic, contrôler le progrès et nombre d'entrées, etc. Dans ces cas, les cookies sont techniquement dispensables mais bénéfiques pour l'utilisateur. Ce site web n'installera pas de cookies dispensables sans le consentement préalable de l'utilisateur.
                  </p>
                  <p className="mb-4">
                    Nous utilisons des cookies propres et de tiers à des fins analytiques et pour vous montrer de la publicité personnalisée selon un profil élaboré à partir de vos habitudes de navigation (par exemple, pages visitées). Tous les utilisateurs qui visitent le web sont informés de l'utilisation de ces cookies au moyen d'une bannière flottante. En cas d'accepter leur utilisation, la bannière disparaîtra, bien qu'à tout moment ils puissent révoquer le consentement et obtenir plus d'informations en consultant notre Politique de cookies.
                  </p>
                  <p className="mb-4">
                    L'utilisateur a la possibilité de configurer son navigateur pour être alerté de la réception de cookies et empêcher leur installation sur son équipement. Veuillez consulter les instructions de votre navigateur pour étendre cette information.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">Politique de liens</h3>
                  <p className="mb-4">
                    Depuis le site web, il est possible de rediriger vers des contenus de sites web tiers. Étant donné que le RESPONSABLE ne peut pas toujours contrôler les contenus introduits par des tiers sur leurs sites web respectifs, il n'assume aucun type de responsabilité concernant ces contenus. En tout cas, il retirera immédiatement tout contenu pouvant contrevenir à la législation nationale ou internationale, à la morale ou à l'ordre public, procédant immédiatement au retrait de la redirection vers ce site web et informant les autorités compétentes du contenu en question.
                  </p>
                  <p className="mb-4">
                    Le RESPONSABLE n'est pas responsable des informations et contenus stockés, à titre énonciatif mais non limitatif, dans des forums, chats, générateurs de blogs, commentaires, réseaux sociaux ou tout autre moyen permettant à des tiers de publier des contenus de manière indépendante sur la page web du RESPONSABLE. Cependant, et en conformité avec ce qui est établi aux articles 11 et 16 de la LSSICE, il se met à la disposition de tous les utilisateurs, autorités et forces de sécurité qui collaborent de manière active au retrait ou, le cas échéant, au blocage de tous les contenus pouvant affecter ou contrevenir à la législation nationale ou internationale, droits de tiers ou morale et ordre public. Si l'utilisateur considère que le site web contient du matériel susceptible de cette classification, nous lui demandons de le notifier immédiatement à l'administrateur du site web.
                  </p>
                  <p className="mb-4">
                    Ce site web a été révisé et testé pour fonctionner correctement. En principe, on peut garantir qu'il fonctionnera correctement 365 jours par an, 24 heures sur 24. Cependant, le RESPONSABLE n'exclut pas la possibilité que des erreurs de programmation se produisent, ou que des causes de force majeure, catastrophes naturelles, grèves ou circonstances similaires aient lieu rendant impossible l'accès à la page web.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">Adresses IP</h3>
                  <p className="mb-4">
                    Les serveurs du site web pourront détecter automatiquement l'adresse IP et le nom de domaine utilisés par l'utilisateur. Une adresse IP est un numéro assigné automatiquement à un ordinateur lorsqu'il se connecte à Internet. Toute cette information est enregistrée dans un fichier d'activité du serveur dûment inscrit permettant de traiter les données par la suite afin d'obtenir des mesures uniquement statistiques permettant de connaître le nombre d'impressions de pages, le nombre de visites effectuées aux serveurs web, l'ordre de visites, le point d'accès, etc.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. LOI APPLICABLE ET JURIDICTION</h2>
                  <p className="mb-4">
                    Pour la résolution de toutes les controverses ou questions relatives à ce site web ou aux activités qui s'y développent, la législation espagnole s'appliquera, à laquelle les parties se soumettent expressément, étant compétents pour la résolution de tous les conflits dérivés ou liés à son utilisation les Tribunaux et Cours du domicile de l'UTILISATEUR ou du lieu d'accomplissement de l'obligation.
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
