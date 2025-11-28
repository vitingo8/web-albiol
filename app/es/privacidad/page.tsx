"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="es" onLocaleChange={() => {}} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <span>Política de Privacidad</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
                Política de Privacidad
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Tu privacidad es importante para nosotros. Esta política explica cómo tratamos y protegemos tus datos personales.
              </p>

              <Button asChild variant="outline" className="gap-2">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  Volver al Inicio
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
                  <h2 className="text-2xl font-bold mb-4">1. INFORMACIÓN PARA EL USUARIO</h2>

                  <h3 className="text-xl font-semibold mb-3">¿Quién es el responsable del tratamiento de tus datos personales?</h3>
                  <p className="mb-4">
                    ALBIOL CONSULTORS LEGALS I D'EMPRESA SL, con NIF B55756738, es el RESPONSABLE del tratamiento de los datos personales del USUARIO y le informa de que estos datos se tratarán de conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril (GDPR), y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD).
                  </p>

                  <h3 className="text-xl font-semibold mb-3">¿Por qué tratamos tus datos personales?</h3>
                  <p className="mb-3">Para mantener una relación comercial con el usuario. Las operaciones previstas para realizar el tratamiento son:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Remisión de comunicaciones comerciales publicitarias por e-mail, fax, SMS, MMS, redes sociales o cualquier otro medio electrónico o físico, presente o futuro, que permita efectuar comunicaciones comerciales. Estas comunicaciones se harán por parte del RESPONSABLE y están relacionadas con sus productos y servicios de asesoría fiscal, laboral y contable. En este caso, los terceros nunca tendrán acceso a los datos personales.</li>
                    <li>Efectuar estudios de mercado y análisis estadísticos relacionados con servicios de asesoría.</li>
                    <li>Tramitar encargos de peticiones, dar respuesta a las consultas sobre servicios fiscales, laborales y contables o cualquier tipo de petición que haga el USUARIO a través de cualquiera de las formas de contacto que se ponen a su disposición en la página web del RESPONSABLE.</li>
                    <li>Enviar el boletín informativo online, sobre novedades, ofertas y promociones en nuestros servicios de asesoría fiscal y laboral.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">¿Por qué motivo podemos tratar tus datos personales?</h3>
                  <p className="mb-3">Porque el tratamiento está legitimado por el artículo 6 del GDPR de la siguiente manera:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Con el consentimiento del USUARIO: envío de comunicaciones comerciales y del boletín informativo.</li>
                    <li>Por interés legítimo del RESPONSABLE: efectuar estudios de mercado, análisis estadísticos relacionados con servicios de asesoría, etc. y tramitar encargos, solicitudes, etc. a petición del USUARIO.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">¿Durante cuánto tiempo guardaremos tus datos personales?</h3>
                  <p className="mb-4">
                    Se conservarán durante no más tiempo del necesario para mantener la finalidad del tratamiento o mientras existan prescripciones legales que dictaminen la custodia y cuando ya no sea necesario para ello, se suprimirán con medidas de seguridad adecuadas para garantizar la anonimización de los datos o su destrucción total.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">¿A quién facilitamos tus datos personales?</h3>
                  <p className="mb-4">
                    No está prevista ninguna comunicación de datos personales a terceros excepto, si fuera necesario para el desarrollo y ejecución de las finalidades del tratamiento, a nuestros proveedores de servicios relacionados con comunicaciones y asesoría, con los cuales el RESPONSABLE ha formalizado los contratos de confidencialidad y de encargado de tratamiento exigidos por la normativa vigente de privacidad.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">¿Cuáles son tus derechos?</h3>
                  <p className="mb-3">Los derechos que tiene el USUARIO son:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Derecho a retirar el consentimiento en cualquier momento.</li>
                    <li>Derecho de acceso, rectificación, portabilidad y supresión de sus datos y de limitación u oposición a su tratamiento.</li>
                    <li>Derecho a presentar una reclamación ante la autoridad de control (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">Datos de contacto para ejercer sus derechos:</h3>
                  <p className="mb-4">
                    ALBIOL CONSULTORS LEGALS I D'EMPRESA SL. Carrer Argentina, 9, 2A - 43500 TORTOSA (Tarragona). E-mail: info@albiolconsultors.com
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. CARÁCTER OBLIGATORIO O FACULTATIVO DE LA INFORMACIÓN FACILITADA POR EL USUARIO</h2>
                  <p className="mb-4">
                    Los USUARIOS, mediante las casillas correspondientes y la introducción de datos en los campos, marcados con el asterisco (*) en el formulario de contacto o presentados en formularios de descarga, aceptan expresamente y de forma libre e inequívoca, que sus datos son necesarios para atender su petición, por parte del prestador, y que por tanto la inclusión de los datos en los campos restantes es voluntaria. El USUARIO garantiza que los datos personales facilitados al RESPONSABLE son veraces y se hace responsable de comunicar cualquier modificación.
                  </p>
                  <p className="mb-4">
                    El RESPONSABLE informa que todos los datos solicitados a través de la página web son obligatorios, ya que son necesarios para la prestación de un servicio óptimo al USUARIO. En caso de que no se faciliten todos los datos, no se garantiza que la información y servicios facilitados se ajusten completamente a sus necesidades.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. MEDIDAS DE SEGURIDAD</h2>
                  <p className="mb-4">
                    Que, de conformidad con lo establecido en las normativas vigentes en protección de datos personales, el RESPONSABLE está cumpliendo con todas las disposiciones de las normativas GDPR y LOPDGDD para el tratamiento de los datos personales de su responsabilidad, y manifestadamente con los principios descritos en el artículo 5 del GDPR, por los cuales se tratan de manera lícita, leal y transparente en relación con el interesado y adecuadas, pertinentes y limitadas a lo que es necesario en relación con las finalidades para las que se tratan.
                  </p>
                  <p className="mb-4">
                    El RESPONSABLE garantiza que ha implementado políticas técnicas y organizativas apropiadas para aplicar las medidas de seguridad que establecen el GDPR y la LOPDGDD para proteger los derechos y libertades de los USUARIOS y les ha comunicado la información adecuada para que puedan ejercerlos.
                  </p>
                  <p className="mb-4">
                    Para más información sobre las garantías de privacidad, puedes dirigirte al RESPONSABLE a través de ALBIOL CONSULTORS LEGALS I D'EMPRESA SL. Carrer Argentina, 9, 2A - 43500 TORTOSA (Tarragona). E-mail: info@albiolconsultors.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale="es" onLocaleChange={() => {}} />
    </div>
  )
}
