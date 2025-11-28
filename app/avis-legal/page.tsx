"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function AvisLegalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="ca" onLocaleChange={() => {}} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <span>Avís Legal</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
                Avís Legal
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Informació legal i condicions d'ús del nostre lloc web segons la LSSI.
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
                  <h2 className="text-2xl font-bold mb-4">LLEI DELS SERVEIS DE LA SOCIETAT DE LA INFORMACIÓ (LSSI)</h2>
                  <p className="mb-4">
                    ALBIOL CONSULTORS LEGALS I D'EMPRESA SL, responsable del lloc web, d'ara endavant el RESPONSABLE, posa a disposició dels usuaris aquest document, amb el qual pretén fer complir les obligacions que estableix la Llei 34/2002, de 11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSICE), BOE N.º 166, així com informar tots els usuaris del lloc web sobre quines són les condicions d'ús.
                  </p>
                  <p className="mb-4">
                    Qualsevol persona que accedeixi a aquest lloc web assumeix el paper d'usuari i es compromet a l'observança i compliment rigorós de les disposicions que s'hi estableixen, així com a qualsevol altra disposició legal s'hi apliqui.
                  </p>
                  <p className="mb-4">
                    ALBIOL CONSULTORS LEGALS I D'EMPRESA SL es reserva el dret de modificar qualsevol tipus d'informació que pugui aparèixer al lloc web, sense l'obligació de preavisar o assabentar els usuaris d'aquestes obligacions, atès que es considera suficient la publicació al lloc web d'ALBIOL CONSULTORS LEGALS I D'EMPRESA SL.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">1. DADES IDENTIFICADORES</h2>
                  <p className="mb-2"><strong>Nom del domini:</strong> albiolconsultors.com</p>
                  <p className="mb-2"><strong>Nom comercial:</strong> ALBIOL CONSULTORS LEGALS I D'EMPRESA SL</p>
                  <p className="mb-2"><strong>Denominació social:</strong> ALBIOL CONSULTORS LEGALS I D'EMPRESA SL</p>
                  <p className="mb-2"><strong>NIF:</strong> B55756738</p>
                  <p className="mb-2"><strong>Domicili social:</strong> Carrer Argentina, 9, 2A - 43500 Tortosa (Tarragona)</p>
                  <p className="mb-2"><strong>Telèfon:</strong> 680 132 404</p>
                  <p className="mb-2"><strong>E-mail:</strong> info@albiolconsultors.com</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. DRETS DE PROPIETAT INTEL·LECTUAL I INDUSTRIAL</h2>
                  <p className="mb-4">
                    El lloc web, incloent a títol enunciatiu però no limitatiu la seva programació, edició, compilació i altres elements necessaris per al seu funcionament, els dissenys, logotips, text i/o gràfics, són propietat del RESPONSABLE o, si és el cas, disposa de llicència o autorització expressa per part dels autors. Tots els continguts del lloc web es troben degudament protegits per la normativa de propietat intel·lectual i industrial, així com inscrits en els registres públics corresponents.
                  </p>
                  <p className="mb-4">
                    Independentment de la finalitat per a la qual fossin destinats, la reproducció total o parcial, ús, explotació, distribució i comercialització, requereix en tot cas l'autorització escrita prèvia per part del RESPONSABLE.
                  </p>
                  <p className="mb-4">
                    Qualsevol ús no autoritzat prèviament es considera un incompliment greu dels drets de propietat intel·lectual o industrial de l'autor.
                  </p>
                  <p className="mb-4">
                    Els dissenys, logotips, text i/o gràfics aliens al RESPONSABLE i que puguin aparèixer al lloc web, pertanyen als seus respectius propietaris, els quals són responsables de qualsevol possible controvèrsia que se'n pugui desprendre. El RESPONSABLE autoritza expressament que tercers puguin redirigir directament als continguts concrets del lloc web, i en tot cas redirigir al lloc web principal d'albiolconsultors.com.
                  </p>
                  <p className="mb-4">
                    El RESPONSABLE reconeix a favor dels seus titulars els corresponents drets de propietat intel·lectual i industrial, sense implicar el seu sol esment o aparició al lloc web l'existència de drets o responsabilitat sobre aquests, ni el suport, patrocini o recomanació per part del RESPONSABLE.
                  </p>
                  <p className="mb-4">
                    Per efectuar qualsevol tipus d'observació pel que fa a possibles incompliments dels drets de propietat intel·lectual o industrial, així com sobre qualsevol dels continguts del lloc web, podeu fer-ho a través del correu electrònic info@albiolconsultors.com.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. EXEMPCIÓ DE RESPONSABILITATS</h2>
                  <p className="mb-4">
                    El RESPONSABLE s'eximeix de qualsevol tipus de responsabilitat derivada de la informació publicada al seu lloc web sempre que no tingui coneixement efectiu que aquesta informació hagi estat manipulada o introduïda per un tercer aliè a la mateixa o, si ho té, hagi actuat amb diligència per retirar les dades o fer impossible l'accés a elles.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">Ús de Cookies</h3>
                  <p className="mb-4">
                    Pot ser que aquest lloc web utilitzi cookies tècniques (petits arxius d'informació que el servidor envia a l'ordinador de qui accedeix a la pàgina) per dur a terme determinades funcions que es consideren imprescindibles per al correcte funcionament i visualització del web. Les cookies utilitzades tenen, en qualsevol cas, caràcter temporal, amb l'única finalitat de fer que la navegació sigui més eficient, i desapareixen en finalitzar la sessió de l'usuari. En cap cas, aquestes cookies proporcionen per si mateixes dades de caràcter personal i no s'utilitzaran per recollir dades d'aquest tipus.
                  </p>
                  <p className="mb-4">
                    Mitjançant l'ús de cookies també és possible que el servidor on es troba la web reconegui el navegador que utilitza l'usuari, amb la finalitat que la navegació sigui més senzilla, tot permetent, per exemple, l'accés dels usuaris que s'hagin registrat prèviament a les àrees, serveis, promocions o concursos reservats exclusivament a ells sense haver de registrar-se a cada visita. També es poden utilitzar per mesurar l'audiència, paràmetres de trànsit, controlar el progrés i el nombre d'entrades, etc. En aquests casos, les cookies són prescindibles tècnicament però beneficioses per a l'usuari. Aquest lloc web no instal·larà cookies prescindibles sense el consentiment previ de l'usuari.
                  </p>
                  <p className="mb-4">
                    Utilitzem cookies pròpies i de tercers per a finalitats analítiques i per mostrar-vos publicitat personalitzada segons un perfil elaborat a partir dels vostres hàbits de navegació (per exemple, pàgines visitades). A tots els usuaris que visiten el web se'ls informa de l'ús d'aquestes cookies mitjançant un banner flotant. En cas d'acceptar-ne l'ús, el banner desapareixerà, encara que en tot moment podran revocar el consentiment i obtenir més informació tot consultant la nostra Política de cookies.
                  </p>
                  <p className="mb-4">
                    L'usuari té la possibilitat de configurar el seu navegador per ser alertat de la recepció de cookies i per impedir-ne la instal·lació al seu equip. Si us plau, consulteu les instruccions del vostre navegador per ampliar aquesta informació.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">Política d'enllaços</h3>
                  <p className="mb-4">
                    Des del lloc web, és possible que es redirigeixi a continguts de tercers llocs web. Atès que el RESPONSABLE no pot controlar sempre els continguts introduïts per tercers en els seus llocs web respectius, no assumeix cap tipus de responsabilitat respecte d'aquests continguts. En qualsevol cas, retirarà immediatament qualsevol contingut que pugui transgredir la legislació nacional o internacional, la moral o l'ordre públic, tot retirant immediatament la redirecció a aquest lloc web i assabentant les autoritats competents del contingut en qüestió.
                  </p>
                  <p className="mb-4">
                    El RESPONSABLE no es fa responsable de la informació i continguts emmagatzemats, a títol enunciatiu però no limitatiu, a fòrums, xats, generadors de blogs, comentaris, xarxes socials o qualsevol altre mitjà que permeti a tercers publicar continguts de manera independent en la pàgina web del RESPONSABLE. Això no obstant, i en compliment del que estableixen als articles 11 i 16 de la LSSICE, es posa a disposició de tots els usuaris, autoritats i forces de seguretat que col·laboren de manera activa en la retirada o, si escau, bloqueig de tots els continguts que puguin afectar o transgredir la legislació nacional o internacional, els drets de tercers o la moral i l'ordre públic. En cas que l'usuari consideri que el lloc web conté material que pugui ser susceptible d'aquesta classificació, li preguem que ho notifiqui immediatament a l'administrador del lloc web.
                  </p>
                  <p className="mb-4">
                    Aquest lloc web s'ha revisat i provat perquè funcioni correctament. En principi, es pot garantir que funcionarà correctament els 365 dies de l'any i les 24 hores al dia. Això no obstant, el RESPONSABLE no descarta la possibilitat que es produeixin errors de programació, o que hi tinguin lloc causes de força major, catàstrofes naturals, vagues o circumstàncies similars que facin impossible l'accés a la pàgina web.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">Adreces IP</h3>
                  <p className="mb-4">
                    Els servidors del lloc web podran detectar automàticament l'adreça IP i el nom del domini utilitzats per l'usuari. Una adreça IP és un número assignat automàticament a un ordinador així que es connecta a Internet. Tota aquesta informació queda registrada en un fitxer d'activitat del servidor degudament inscrit que permet processar les dades posteriorment per tal d'obtenir mesuratges únicament estadístics que permetin conèixer el nombre d'impressions de pàgines, el nombre de visites efectuades als servidors web, l'ordre de visites, el punt d'accés, etc.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. LLEI APLICABLE I JURISDICCIÓ</h2>
                  <p className="mb-4">
                    Per a la resolució de totes les controvèrsies o qüestions relacionades amb aquest lloc web o de les activitats que s'hi duen a terme, s'aplicarà la legislació espanyola, a la qual se sotmeten expressament les parts, els quals tindran competència suficient per a la resolució de tots els conflictes derivats o relacionats amb el seu ús els Jutjats i Tribunals del domicili de l'USUARI o el lloc de compliment de l'obligació.
                  </p>
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
