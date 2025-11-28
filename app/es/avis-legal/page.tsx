"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function AvisLegalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="es" onLocaleChange={() => {}} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <span>Aviso Legal</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
                Aviso Legal
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Información legal y condiciones de uso de nuestro sitio web según la LSSI.
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
                  <h2 className="text-2xl font-bold mb-4">LEY DE LOS SERVICIOS DE LA SOCIEDAD DE LA INFORMACIÓN (LSSI)</h2>
                  <p className="mb-4">
                    ALBIOL CONSULTORS LEGALS I D'EMPRESA SL, responsable del sitio web, en adelante el RESPONSABLE, pone a disposición de los usuarios el presente documento, con el que pretende dar cumplimiento a las obligaciones dispuestas en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), BOE N.º 166, así como informar a todos los usuarios del sitio web respecto a cuáles son las condiciones de uso.
                  </p>
                  <p className="mb-4">
                    Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la observancia y cumplimiento riguroso de las disposiciones aquí dispuestas, así como a cualquier otra disposición legal que fuera de aplicación.
                  </p>
                  <p className="mb-4">
                    ALBIOL CONSULTORS LEGALS I D'EMPRESA SL se reserva el derecho de modificar cualquier tipo de información que pudiera aparecer en el sitio web, sin que exista obligación de preavisar o poner en conocimiento de los usuarios dichas obligaciones, entendiéndose como suficiente con la publicación en el sitio web de ALBIOL CONSULTORS LEGALS I D'EMPRESA SL.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">1. DATOS IDENTIFICADORES</h2>
                  <p className="mb-2"><strong>Nombre del dominio:</strong> albiolconsultors.com</p>
                  <p className="mb-2"><strong>Nombre comercial:</strong> ALBIOL CONSULTORS LEGALS I D'EMPRESA SL</p>
                  <p className="mb-2"><strong>Denominación social:</strong> ALBIOL CONSULTORS LEGALS I D'EMPRESA SL</p>
                  <p className="mb-2"><strong>NIF:</strong> B55756738</p>
                  <p className="mb-2"><strong>Domicilio social:</strong> Carrer Argentina, 9, 2A - 43500 Tortosa (Tarragona)</p>
                  <p className="mb-2"><strong>Teléfono:</strong> 680 132 404</p>
                  <p className="mb-2"><strong>E-mail:</strong> info@albiolconsultors.com</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. DERECHOS DE PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
                  <p className="mb-4">
                    El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación y demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto y/o gráficos, son propiedad del RESPONSABLE o, en su caso, dispone de licencia o autorización expresa por parte de los autores. Todos los contenidos del sitio web se encuentran debidamente protegidos por la normativa de propiedad intelectual e industrial, así como inscritos en los registros públicos correspondientes.
                  </p>
                  <p className="mb-4">
                    Independientemente de la finalidad para la que fueran destinados, la reproducción total o parcial, uso, explotación, distribución y comercialización, requiere en todo caso de la autorización escrita previa por parte del RESPONSABLE.
                  </p>
                  <p className="mb-4">
                    Cualquier uso no autorizado previamente se considera un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor.
                  </p>
                  <p className="mb-4">
                    Los diseños, logotipos, texto y/o gráficos ajenos al RESPONSABLE y que pudieran aparecer en el sitio web, pertenecen a sus respectivos propietarios, siendo ellos mismos responsables de cualquier posible controversia que pudiera derivarse. El RESPONSABLE autoriza expresamente a que terceros puedan redirigir directamente a los contenidos concretos del sitio web, y en todo caso redirigir al sitio web principal de albiolconsultors.com.
                  </p>
                  <p className="mb-4">
                    El RESPONSABLE reconoce a favor de sus titulares los correspondientes derechos de propiedad intelectual e industrial, sin implicar su mera mención o aparición en el sitio web la existencia de derechos o responsabilidad alguna sobre los mismos, ni respaldo, patrocinio o recomendación por parte del RESPONSABLE.
                  </p>
                  <p className="mb-4">
                    Para realizar cualquier tipo de observación respecto a posibles incumplimientos de los derechos de propiedad intelectual o industrial, así como sobre cualquiera de los contenidos del sitio web, puede hacerlo a través del correo electrónico info@albiolconsultors.com.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. EXENCIÓN DE RESPONSABILIDADES</h2>
                  <p className="mb-4">
                    El RESPONSABLE se exime de cualquier tipo de responsabilidad derivada de la información publicada en su sitio web siempre que no tenga conocimiento efectivo de que esta información haya sido manipulada o introducida por un tercero ajeno a la misma o, si lo tiene, haya actuado con diligencia para retirar los datos o hacer imposible el acceso a ellos.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">Uso de Cookies</h3>
                  <p className="mb-4">
                    Es posible que este sitio web utilice cookies técnicas (pequeños archivos de información que el servidor envía al ordenador de quien accede a la página) para llevar a cabo determinadas funciones que se consideran imprescindibles para el correcto funcionamiento y visualización de la web. Las cookies utilizadas tienen, en todo caso, carácter temporal, con la única finalidad de hacer más eficiente la navegación, y desaparecen al finalizar la sesión del usuario. En ningún caso, estas cookies proporcionan por sí mismas datos de carácter personal y no se utilizarán para recoger datos de ese tipo.
                  </p>
                  <p className="mb-4">
                    Mediante el uso de cookies también es posible que el servidor donde se encuentra la web reconozca el navegador que utiliza el usuario, con la finalidad de que la navegación sea más sencilla, permitiendo, por ejemplo, el acceso de los usuarios que se hayan registrado previamente a las áreas, servicios, promociones o concursos reservados exclusivamente a ellos sin tener que registrarse en cada visita. También se pueden utilizar para medir la audiencia, parámetros de tráfico, controlar el progreso y número de entradas, etc. En estos casos, las cookies son técnicamente prescindibles pero beneficiosas para el usuario. Este sitio web no instalará cookies prescindibles sin el consentimiento previo del usuario.
                  </p>
                  <p className="mb-4">
                    Utilizamos cookies propias y de terceros para fines analíticos y para mostrarte publicidad personalizada según un perfil elaborado a partir de tus hábitos de navegación (por ejemplo, páginas visitadas). A todos los usuarios que visitan la web se les informa del uso de estas cookies mediante un banner flotante. En caso de aceptar su uso, el banner desaparecerá, aunque en todo momento podrán revocar el consentimiento y obtener más información consultando nuestra Política de cookies.
                  </p>
                  <p className="mb-4">
                    El usuario tiene la posibilidad de configurar su navegador para ser alertado de la recepción de cookies e impedir su instalación en su equipo. Por favor, consulte las instrucciones de su navegador para ampliar esta información.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">Política de enlaces</h3>
                  <p className="mb-4">
                    Desde el sitio web, es posible que se redirija a contenidos de terceros sitios web. Dado que el RESPONSABLE no puede controlar siempre los contenidos introducidos por terceros en sus respectivos sitios web, no asume ningún tipo de responsabilidad respecto a dichos contenidos. En cualquier caso, retirará inmediatamente cualquier contenido que pudiera contravenir la legislación nacional o internacional, la moral o el orden público, procediendo a retirar inmediatamente la redirección a dicho sitio web e informando a las autoridades competentes del contenido en cuestión.
                  </p>
                  <p className="mb-4">
                    El RESPONSABLE no se hace responsable de la información y contenidos almacenados, a título enunciativo pero no limitativo, en foros, chats, generadores de blogs, comentarios, redes sociales o cualquier otro medio que permita a terceros publicar contenidos de forma independiente en la página web del RESPONSABLE. Sin embargo, y en cumplimiento de lo dispuesto en los artículos 11 y 16 de la LSSICE, se pone a disposición de todos los usuarios, autoridades y fuerzas de seguridad que colaboren de forma activa en la retirada o, en su caso, bloqueo de todos aquellos contenidos que puedan afectar o contravenir la legislación nacional o internacional, derechos de terceros o moral y orden público. En caso de que el usuario considere que el sitio web contiene material susceptible de esta clasificación, le rogamos que lo notifique inmediatamente al administrador del sitio web.
                  </p>
                  <p className="mb-4">
                    Este sitio web ha sido revisado y probado para que funcione correctamente. En principio, se puede garantizar que funcionará correctamente los 365 días del año, 24 horas al día. Sin embargo, el RESPONSABLE no descarta la posibilidad de que se produzcan errores de programación, o que tengan lugar causas de fuerza mayor, catástrofes naturales, huelgas o circunstancias similares que hagan imposible el acceso a la página web.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">Direcciones IP</h3>
                  <p className="mb-4">
                    Los servidores del sitio web podrán detectar automáticamente la dirección IP y el nombre del dominio utilizados por el usuario. Una dirección IP es un número asignado automáticamente a un ordenador cuando se conecta a Internet. Toda esta información queda registrada en un archivo de actividad del servidor debidamente inscrito que permite procesar los datos posteriormente con el fin de obtener mediciones únicamente estadísticas que permitan conocer el número de impresiones de páginas, el número de visitas realizadas a los servidores web, el orden de visitas, el punto de acceso, etc.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. LEY APLICABLE Y JURISDICCIÓN</h2>
                  <p className="mb-4">
                    Para la resolución de todas las controversias o cuestiones relacionadas con este sitio web o de las actividades que en él se desarrollan, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales del domicilio del USUARIO o del lugar del cumplimiento de la obligación.
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
