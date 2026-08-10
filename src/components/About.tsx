import {
  Code2,
  FlaskConical,
  Database,
  GraduationCap,
} from "lucide-react"

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 text-white px-6 py-24 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>

            <p className="text-blue-400 font-medium mb-3">
              Sobre mí
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Desarrollo con enfoque en calidad
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Soy Pedro Chávez, Software Developer y QA Engineer con
              experiencia en desarrollo de aplicaciones, pruebas de software
              y bases de datos.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              He trabajado con diferentes tecnologías y entornos de desarrollo,
              construyendo aplicaciones web, sistemas administrativos y
              soluciones orientadas a resolver problemas reales.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Mi experiencia en QA me permite abordar el desarrollo no solo
              desde la perspectiva de construir software, sino también desde
              la calidad, las pruebas y la experiencia del usuario.
            </p>

          </div>


          {/* Highlights */}
          <div className="grid grid-cols-2 gap-5">

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">

              <div className="text-blue-400 mb-3">
                <Code2 size={32} />
              </div>

              <h3 className="font-bold text-xl mb-2">
                Development
              </h3>

              <p className="text-gray-400">
                Aplicaciones web y sistemas utilizando tecnologías modernas.
              </p>

            </div>


            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">

              <div className="text-blue-400 mb-3">
                <FlaskConical size={32} />
              </div>

              <h3 className="font-bold text-xl mb-2">
                QA & Testing
              </h3>

              <p className="text-gray-400">
                Pruebas de software enfocadas en detectar problemas y mejorar
                la calidad.
              </p>

            </div>


            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">

              <div className="text-blue-400 mb-3">
                <Database size={32} />
              </div>

              <h3 className="font-bold text-xl mb-2">
                Databases
              </h3>

              <p className="text-gray-400">
                Diseño y manejo de bases de datos y consultas SQL.
              </p>

            </div>


            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">

              <div className="text-blue-400 mb-3">
                <GraduationCap size={32} />
              </div>

              <h3 className="font-bold text-xl mb-2">
                Teaching
              </h3>

              <p className="text-gray-400">
                Experiencia enseñando programación y desarrollo de software.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About
