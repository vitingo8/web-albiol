"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="ca" onLocaleChange={() => {}} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <span>Política de Cookies</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
                Política de Cookies
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Informació sobre l'ús de cookies al nostre lloc web segons la normativa de la UE.
              </p>

              <Button asChild variant="outline" className="gap-2">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  Tornar a l'Inici
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
                    Aquesta política de galetes es va actualitzar per última vegada el 28 de novembre de 2025 i s'aplica a ciutadans i residents legals permanents de l'Espai Econòmic Europeu i Suïssa.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Introducció</h2>
                  <p className="mb-4">
                    El nostre lloc web, https://albiolconsultors.com (d'ara endavant "el lloc web") utilitza galetes i altres tecnologies relacionades (per comoditat, totes les tecnologies es denominen "galetes"). Les galetes també són col·locades per tercers que hem contractat. En el document següent us informem sobre l'ús de les galetes al nostre lloc web.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Què són les galetes?</h2>
                  <p className="mb-4">
                    Una galeta és un fitxer petit i senzill que s'envia juntament amb pàgines d'aquest lloc web i que el vostre navegador emmagatzema al disc dur de l'ordinador o un altre dispositiu. La informació emmagatzemada en ell es pot tornar als nostres servidors o als servidors dels tercers corresponents durant una visita posterior.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. Què són els scripts?</h2>
                  <p className="mb-4">
                    Un script és una peça de codi de programari que s'utilitza per a que el nostre web funcioni correctament i interactivament. Aquest codi s'executa al nostre servidor o al vostre dispositiu.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Què és una balisa web?</h2>
                  <p className="mb-4">
                    Una balisa web (o una etiqueta de píxel) és una petita i invisible peça de text o imatge en un lloc web que s'utilitza per controlar el trànsit d'un lloc web. Per fer-ho, s'emmagatzemen diverses dades utilitzant balises web.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Galetes</h2>

                  <h3 className="text-xl font-semibold mb-3">5.1 Galetes tècniques o funcionals</h3>
                  <p className="mb-4">
                    Algunes galetes asseguren que certes parts del lloc web funcionen correctament i que les preferències dels usuaris segueixin sent conegudes. Utilitzant galetes funcionals, us facilitem que visiteu el nostre lloc web. D'aquesta manera, no cal que introduïu repetidament la mateixa informació quan visiteu el nostre lloc web i, per exemple, els elements romanen al carretó de la compra fins que hàgiu pagat. Podem posar aquestes galetes sense el vostre consentiment.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">5.2 Cookies d'estadística</h3>
                  <p className="mb-4">
                    Utilitzem cookies analítiques per optimitzar l'experiència del lloc web per als nostres usuaris. Amb aquestes cookies analítiques obtenim informació sobre l'ús del nostre lloc web. Us demanem permís per col·locar cookies d'estadístiques.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">5.3 Cookies de màrqueting/seguiment</h3>
                  <p className="mb-4">
                    Les galetes de màrqueting/seguiment són galetes o qualsevol altra forma d'emmagatzematge local que s'utilitzen per crear perfils d'usuari per mostrar publicitat o per fer un seguiment de l'usuari en aquest lloc web o en diversos llocs web amb finalitats de màrqueting similars.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">5.4 Mitjans socials</h3>
                  <p className="mb-4">
                    Al nostre lloc web, hem inclòs contingut de WhatsApp per promocionar pàgines web (per exemple, "m'agrada", "pin") o compartir (per exemple, "tuitejar") a xarxes socials com WhatsApp. Aquest contingut està incrustat amb codi derivat de WhatsApp i col·loca galetes. Aquest contingut pot emmagatzemar i processar certa informació per a publicitat personalitzada.
                  </p>
                  <p className="mb-4">
                    Llegiu, si us plau, la política de privacitat d'aquestes xarxes socials (que poden canviar regularment) per entendre què fan amb les vostres dades personals processades utilitzant aquestes cookies. Les dades recuperades són anonimitzades el màxim possible. WhatsApp es troba als Estats Units.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Galetes col·locades</h2>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Google Analytics</h3>
                    <p className="mb-1"><strong>Finalitat:</strong> Estadístiques</p>
                    <p className="mb-1"><strong>Consentiment:</strong> Consent to service google-analytics</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Vercel Analytics</h3>
                    <p className="mb-1"><strong>Finalitat:</strong> Estadístiques</p>
                    <p className="mb-1"><strong>Consentiment:</strong> Consent to service vercel-analytics</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                    <p className="mb-1"><strong>Finalitat:</strong> Funcional</p>
                    <p className="mb-1"><strong>Consentiment:</strong> Consent to service whatsapp</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Cookies funcionals</h3>
                    <p className="mb-1"><strong>Finalitat:</strong> Funcional</p>
                    <p className="mb-1"><strong>Consentiment:</strong> Consent to service functional-cookies</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Consentiment</h2>
                  <p className="mb-4">
                    Quan visiteu el nostre lloc web per primera vegada, us mostrarem un missatge emergent amb una explicació sobre les cookies. Tan bon punt com feu clic a "Guardar preferències", ens consentiu a utilitzar les categories de cookies i extensions que heu seleccionat al missatge emergent, tal i com es descriu en aquesta Política de cookies. Podeu desactivar l'ús de cookies a través del vostre navegador, però tingueu en compte que pot ser que el nostre lloc web ja no funcioni correctament.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">7.1 Gestioneu la vostra configuració de consentiment</h3>
                  <p className="mb-2"><strong>Funcional:</strong> Sempre actiu</p>
                  <p className="mb-2"><strong>Estadístiques:</strong> Estadístiques</p>
                  <p className="mb-2"><strong>Màrqueting:</strong> Màrqueting</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Activació / desactivació i eliminació de galetes</h2>
                  <p className="mb-4">
                    Podeu utilitzar el navegador per a esborrar les cookies automàticament o manualment. A més, podeu especificar que determinades cookies no siguin col·locades. Una altra opció és canviar les preferències del vostre navegador per a rebre un missatge cada cop que una cookie és col·locada. Per a més informació, podeu consultar les instruccions a l'Ajuda del vostre navegador.
                  </p>
                  <p className="mb-4">
                    Tingueu en compte que el nostre lloc web pot no funcionar correctament si totes les galetes estan desactivades. Si suprimiu les galetes del navegador, se'n crearan de noves després del vostre consentiment quan torneu a visitar els nostres llocs web.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Els vostres drets respecte a les dades personals</h2>
                  <p className="mb-4">Teniu els drets següents respecte a les vostres dades personals:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Teniu dret a saber per què es necessiten les vostres dades personals, què hi passarà i quant de temps es conservaran.</li>
                    <li>Dret d'accés: teniu dret a accedir a les vostres dades personals que ens són conegudes.</li>
                    <li>Dret de rectificació: teniu dret a completar, corregir, suprimir o bloquejar les vostres dades personals sempre que ho desitgeu.</li>
                    <li>Si ens doneu el consentiment per processar les seves dades, teniu el dret de revocar aquest consentiment i de suprimir les vostres dades personals.</li>
                    <li>Dret de transferir les vostres dades: teniu el dret de sol·licitar totes les dades personals del controlador i transferir-les en la seva totalitat a un altre controlador.</li>
                    <li>Dret a l'oposició: podeu oposar-vos al processament de les vostres dades. Complim amb això, tret que hi hagi motius justificats per al processament.</li>
                  </ul>
                  <p className="mb-4">
                    Per exercir aquests drets, poseu-vos en contacte amb nosaltres. Consulteu les dades de contacte a la part inferior d'aquesta Política de cookies. Si teniu una queixa sobre com gestionem les vostres dades, ens agradaria escoltar-vos, però també teniu el dret de presentar una reclamació a l'autoritat de supervisió (l'Agència de Protecció de Dades).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">10. Detalls de contacte</h2>
                  <p className="mb-4">
                    Per a preguntes i/o comentaris sobre la nostra Política de galetes i aquesta declaració, poseu-vos en contacte amb nosaltres mitjançant les següents dades de contacte:
                  </p>
                  <p className="mb-2"><strong>ALBIOL CONSULTORS LEGALS I D'EMPRESA SL</strong></p>
                  <p className="mb-2">Carrer Argentina, 9, 2A - 43500 Tortosa (Tarragona)</p>
                  <p className="mb-2">Espanya</p>
                  <p className="mb-2">Lloc web: https://albiolconsultors.com</p>
                  <p className="mb-2">Correu electrònic: info@albiolconsultors.com</p>
                  <p className="mb-2">Telèfon: 680 132 404</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale="ca" onLocaleChange={() => {}} />
    </div>
  )
}
