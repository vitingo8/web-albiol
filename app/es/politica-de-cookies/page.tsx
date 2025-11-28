"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="es" onLocaleChange={() => {}} />

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
                Información sobre el uso de cookies en nuestro sitio web según la normativa de la UE.
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
                  <p className="mb-4">
                    Esta política de cookies se actualizó por última vez el 28 de noviembre de 2025 y se aplica a ciudadanos y residentes legales permanentes del Espacio Económico Europeo y Suiza.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Introducción</h2>
                  <p className="mb-4">
                    Nuestro sitio web, https://albiolconsultors.com (en adelante "el sitio web") utiliza cookies y otras tecnologías relacionadas (por comodidad, todas las tecnologías se denominan "cookies"). Las cookies también son colocadas por terceros que hemos contratado. En el documento siguiente le informamos sobre el uso de las cookies en nuestro sitio web.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. ¿Qué son las cookies?</h2>
                  <p className="mb-4">
                    Una cookie es un archivo pequeño y sencillo que se envía junto con páginas de este sitio web y que su navegador almacena en el disco duro del ordenador u otro dispositivo. La información almacenada en él se puede devolver a nuestros servidores o a los servidores de los terceros correspondientes durante una visita posterior.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. ¿Qué son los scripts?</h2>
                  <p className="mb-4">
                    Un script es una pieza de código de software que se utiliza para que nuestro web funcione correctamente e interactivamente. Este código se ejecuta en nuestro servidor o en su dispositivo.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. ¿Qué es una baliza web?</h2>
                  <p className="mb-4">
                    Una baliza web (o una etiqueta de píxel) es una pequeña e invisible pieza de texto o imagen en un sitio web que se utiliza para controlar el tráfico de un sitio web. Para hacerlo, se almacenan diversos datos utilizando balizas web.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>

                  <h3 className="text-xl font-semibold mb-3">5.1 Cookies técnicas o funcionales</h3>
                  <p className="mb-4">
                    Algunas cookies aseguran que ciertas partes del sitio web funcionen correctamente y que las preferencias de los usuarios sigan siendo conocidas. Utilizando cookies funcionales, facilitamos que visite nuestro sitio web. De esta manera, no es necesario que introduzca repetidamente la misma información cuando visite nuestro sitio web y, por ejemplo, los elementos permanecen en el carrito de la compra hasta que haya pagado. Podemos colocar estas cookies sin su consentimiento.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">5.2 Cookies de estadística</h3>
                  <p className="mb-4">
                    Utilizamos cookies analíticas para optimizar la experiencia del sitio web para nuestros usuarios. Con estas cookies analíticas obtenemos información sobre el uso de nuestro sitio web. Le pedimos permiso para colocar cookies de estadísticas.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">5.3 Cookies de marketing/seguimiento</h3>
                  <p className="mb-4">
                    Las cookies de marketing/seguimiento son cookies o cualquier otra forma de almacenamiento local que se utilizan para crear perfiles de usuario para mostrar publicidad o para hacer un seguimiento del usuario en este sitio web o en varios sitios web con fines de marketing similares.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">5.4 Redes sociales</h3>
                  <p className="mb-4">
                    En nuestro sitio web, hemos incluido contenido de WhatsApp para promocionar páginas web (por ejemplo, "me gusta", "pin") o compartir (por ejemplo, "tuitear") en redes sociales como WhatsApp. Este contenido está incrustado con código derivado de WhatsApp y coloca cookies. Este contenido puede almacenar y procesar cierta información para publicidad personalizada.
                  </p>
                  <p className="mb-4">
                    Lea, por favor, la política de privacidad de estas redes sociales (que pueden cambiar regularmente) para entender qué hacen con sus datos personales procesados utilizando estas cookies. Los datos recuperados se anonimizan en la mayor medida posible. WhatsApp se encuentra en los Estados Unidos.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Cookies colocadas</h2>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Google Analytics</h3>
                    <p className="mb-1"><strong>Finalidad:</strong> Estadísticas</p>
                    <p className="mb-1"><strong>Consentimiento:</strong> Consent to service google-analytics</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Vercel Analytics</h3>
                    <p className="mb-1"><strong>Finalidad:</strong> Estadísticas</p>
                    <p className="mb-1"><strong>Consentimiento:</strong> Consent to service vercel-analytics</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                    <p className="mb-1"><strong>Finalidad:</strong> Funcional</p>
                    <p className="mb-1"><strong>Consentimiento:</strong> Consent to service whatsapp</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Cookies funcionales</h3>
                    <p className="mb-1"><strong>Finalidad:</strong> Funcional</p>
                    <p className="mb-1"><strong>Consentimiento:</strong> Consent to service functional-cookies</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Consentimiento</h2>
                  <p className="mb-4">
                    Cuando visita nuestro sitio web por primera vez, le mostraremos un mensaje emergente con una explicación sobre las cookies. Tan pronto como haga clic en "Guardar preferencias", nos consiente a utilizar las categorías de cookies y extensiones que ha seleccionado en el mensaje emergente, tal y como se describe en esta Política de cookies. Puede desactivar el uso de cookies a través de su navegador, pero tenga en cuenta que nuestro sitio web puede no funcionar correctamente.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">7.1 Gestione su configuración de consentimiento</h3>
                  <p className="mb-2"><strong>Funcional:</strong> Siempre activo</p>
                  <p className="mb-2"><strong>Estadísticas:</strong> Estadísticas</p>
                  <p className="mb-2"><strong>Marketing:</strong> Marketing</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Activación / desactivación y eliminación de cookies</h2>
                  <p className="mb-4">
                    Puede utilizar el navegador para borrar las cookies automáticamente o manualmente. Además, puede especificar que determinadas cookies no sean colocadas. Otra opción es cambiar las preferencias de su navegador para recibir un mensaje cada vez que una cookie sea colocada. Para más información, puede consultar las instrucciones en la Ayuda de su navegador.
                  </p>
                  <p className="mb-4">
                    Tenga en cuenta que nuestro sitio web puede no funcionar correctamente si todas las cookies están desactivadas. Si suprime las cookies del navegador, se crearán nuevas después de su consentimiento cuando regrese a visitar nuestros sitios web.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Sus derechos respecto a los datos personales</h2>
                  <p className="mb-4">Tiene los derechos siguientes respecto a sus datos personales:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Tiene derecho a saber por qué se necesitan sus datos personales, qué sucederá con ellos y cuánto tiempo se conservarán.</li>
                    <li>Derecho de acceso: tiene derecho a acceder a sus datos personales que nos son conocidos.</li>
                    <li>Derecho de rectificación: tiene derecho a completar, corregir, suprimir o bloquear sus datos personales cuando lo desee.</li>
                    <li>Si nos da su consentimiento para procesar sus datos, tiene el derecho de revocar este consentimiento y de suprimir sus datos personales.</li>
                    <li>Derecho de transferir sus datos: tiene el derecho de solicitar todos los datos personales del controlador y transferirlos en su totalidad a otro controlador.</li>
                    <li>Derecho de oposición: puede oponerse al procesamiento de sus datos. Cumplimos con esto, a menos que haya motivos justificados para el procesamiento.</li>
                  </ul>
                  <p className="mb-4">
                    Para ejercer estos derechos, póngase en contacto con nosotros. Consulte los datos de contacto en la parte inferior de esta Política de cookies. Si tiene una queja sobre cómo gestionamos sus datos, nos gustaría escucharlo, pero también tiene el derecho de presentar una reclamación ante la autoridad supervisora (la Agencia de Protección de Datos).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">10. Detalles de contacto</h2>
                  <p className="mb-4">
                    Para preguntas y/o comentarios sobre nuestra Política de cookies y esta declaración, póngase en contacto con nosotros mediante los siguientes datos de contacto:
                  </p>
                  <p className="mb-2"><strong>ALBIOL CONSULTORS LEGALS I D'EMPRESA SL</strong></p>
                  <p className="mb-2">Carrer Argentina, 9, 2A - 43500 Tortosa (Tarragona)</p>
                  <p className="mb-2">España</p>
                  <p className="mb-2">Sitio web: https://albiolconsultors.com</p>
                  <p className="mb-2">Correo electrónico: info@albiolconsultors.com</p>
                  <p className="mb-2">Teléfono: 680 132 404</p>
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
