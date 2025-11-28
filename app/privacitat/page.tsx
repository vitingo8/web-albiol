"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacitatPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="ca" onLocaleChange={() => {}} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <span>Política de Privacitat</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
                Política de Privacitat
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                La teva privacitat és important per a nosaltres. Aquesta política explica com tractem i protegim les teves dades personals.
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
                  <h2 className="text-2xl font-bold mb-4">1. INFORMACIÓ PER A L'USUARI</h2>

                  <h3 className="text-xl font-semibold mb-3">Qui és el responsable del tractament de les teves dades personals?</h3>
                  <p className="mb-4">
                    ALBIOL CONSULTORS LEGALS I D'EMPRESA SL, amb NIF B55756738, és el RESPONSABLE del tractament de les dades personals de l'USUARI i l'informa que aquestes dades es tractaran de conformitat amb el que disposa el Reglament (UE) 2016/679, de 27 d'abril (GDPR), i la Llei Orgànica 3/2018, de 5 de desembre (LOPDGDD).
                  </p>

                  <h3 className="text-xl font-semibold mb-3">Per què tractem les teves dades personals?</h3>
                  <p className="mb-3">Per mantenir una relació comercial amb l'usuari. Les operacions previstes per fer el tractament són:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Remesa de comunicacions comercials publicitàries per e-mail, fax, SMS, MMS, xarxes socials o qualsevol altre mitjà electrònic o físic, present o futur, que permeti efectuar comunicacions comercials. Aquestes comunicacions s'han de fer per mitjà del RESPONSABLE i estan relacionades amb els seus productes i serveis d'assessoria fiscal, laboral i comptable. En aquest cas, els tercers no tindran mai accés a les dades personals.</li>
                    <li>Efectuar estudis de mercat i anàlisis estadístiques relacionades amb serveis d'assessoria.</li>
                    <li>Tramitar encàrrecs de peticions, donar resposta a les consultes sobre serveis fiscals, laborals i comptables o qualsevol tipus de petició que faci l'USUARI a través de qualsevol de les formes de contacte que es posen a la seva disposició al web del RESPONSABLE.</li>
                    <li>Enviar el butlletí informatiu online, sobre novetats, ofertes i promocions en els nostres serveis d'assessoria fiscal i laboral.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">Per quin motiu podem tractar les teves dades personals?</h3>
                  <p className="mb-3">Perquè el tractament està legitimat per l'article 6 del GDPR de la següent manera:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Amb el consentiment de l'USUARI: enviament de comunicacions comercials i del butlletí informatiu.</li>
                    <li>Per interès legítim del RESPONSABLE: efectuar estudis de mercat, anàlisis estadístiques relacionades amb serveis d'assessoria, etc. i tramitar encàrrecs, sol·licituds, etc. a petició de l'USUARI.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">Durant quant de temps guardarem les teves dades personals?</h3>
                  <p className="mb-4">
                    Es conservaran durant no més temps del necessari per mantenir la finalitat del tractament o mentre hi hagi prescripcions legals que en dictaminin la custòdia i quan ja no sigui necessari per a això, se suprimiran amb mesures de seguretat adequades per garantir l'anonimització de les dades o la seva destrucció total.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">A qui facilitem les teves dades personals?</h3>
                  <p className="mb-4">
                    No està prevista cap comunicació de dades personals a tercers excepte, si fos necessari per al desenvolupament i execució de les finalitats del tractament, als nostres proveïdors de serveis relacionats amb comunicacions i assessoria, amb els quals el RESPONSABLE ha formalitzat els contractes de confidencialitat i d'encarregat de tractament exigits per la normativa vigent de privacitat.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">Quins són els teus drets?</h3>
                  <p className="mb-3">Els drets que té l'USUARI són:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Dret a retirar el consentiment en qualsevol moment.</li>
                    <li>Dret d'accés, rectificació, portabilitat i supressió de les seves dades i de limitació o oposició al seu tractament.</li>
                    <li>Dret a presentar una reclamació davant l'autoritat de control (www.aepd.es) si considera que el tractament no s'ajusta a la normativa vigent.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">Dades de contacte per exercir els seus drets:</h3>
                  <p className="mb-4">
                    ALBIOL CONSULTORS LEGALS I D'EMPRESA SL. Carrer Argentina, 9, 2A - 43500 TORTOSA (Tarragona). E-mail: info@albiolconsultors.com
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. CARÀCTER OBLIGATORI O FACULTATIU DE LA INFORMACIÓ FACILITADA PER L'USUARI</h2>
                  <p className="mb-4">
                    Els USUARIS, per mitjà de les caselles corresponents i la introducció de dades en els camps, marcats amb l'asterisc (*) en el formulari de contacte o presentats en formularis de descàrrega, accepten expressament i de manera lliure i inequívoca, que les seves dades són necessàries per a l'atenció de la seva petició, per part del prestador, i que per tant la inclusió de les dades en els camps restants és voluntària. L'USUARI garanteix que les dades personals facilitades al RESPONSABLE són verídiques i es fa responsable de comunicar-ne qualsevol modificació.
                  </p>
                  <p className="mb-4">
                    El RESPONSABLE informa que totes les dades sol·licitades a través del lloc web són obligatòries, ja que són necessàries per a la prestació d'un servei òptim a l'USUARI. En cas que no es facilitin totes les dades, no es garanteix que la informació i serveis facilitats s'ajustin completament a les seves necessitats.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. MESURES DE SEGURETAT</h2>
                  <p className="mb-4">
                    Que, de conformitat amb el que estableixen les normatives vigents en protecció de dades personals, el RESPONSABLE està complint amb totes les disposicions de les normatives GDPR i LOPDGDD per al tractament de les dades personals de la seva responsabilitat, i manifestament amb els principis descrits a l'article 5 del GDPR, pels quals es tracten de manera lícita, lleial i transparent en relació amb l'interessat i adequades, pertinents i limitades al que és necessari en relació amb les finalitats per a les quals es tracten.
                  </p>
                  <p className="mb-4">
                    El RESPONSABLE garanteix que ha implementat polítiques tècniques i organitzatives apropiades per aplicar les mesures de seguretat que estableixen el GDPR i la LOPDGDD per tal de protegir els drets i llibertats dels USUARIS i els ha comunicat la informació adequada perquè puguin exercir-los.
                  </p>
                  <p className="mb-4">
                    Per a més informació sobre les garanties de privacitat, pots dirigir-te al RESPONSABLE a través de ALBIOL CONSULTORS LEGALS I D'EMPRESA SL. Carrer Argentina, 9, 2A - 43500 TORTOSA (Tarragona). E-mail: info@albiolconsultors.com
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
