
import pedroPhoto from "../assets/pedropp.jpg"

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24">

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left side */}
        <div>

          <p className="text-blue-400 font-medium text-lg mb-4">
            Hola, soy Pedro 👋
          </p>

          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6">
            Software Developer
            <span className="block text-blue-500">
              & QA Engineer
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
            Desarrollo aplicaciones y soluciones de software utilizando
            tecnologías modernas. También cuento con experiencia en
            aseguramiento de calidad, bases de datos y desarrollo de sistemas.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="#projects"
              className="bg-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Ver proyectos
            </a>

            <a
              href="#contact"
              className="border border-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Contactarme
            </a>

          </div>

        </div>


        {/* Right side */}
        <div className="flex justify-center">

          <div className="relative w-72 h-72 md:w-96 md:h-96">

            {/* Photo */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
              <img
                src={pedroPhoto}
                alt="Pedro Chávez - Software Developer"
                className="w-full h-full object-cover"
              />
            </div>


            {/* React */}
            <div className="absolute -top-6 -left-6 bg-gray-800 border border-gray-700 px-4 py-3 rounded-xl shadow-lg">
              ⚛️ React
            </div>


            {/* C# */}
            <div className="absolute -bottom-6 -left-6 bg-gray-800 border border-gray-700 px-4 py-3 rounded-xl shadow-lg">
              💻 C#
            </div>


            {/* SQL */}
            <div className="absolute -top-6 -right-6 bg-gray-800 border border-gray-700 px-4 py-3 rounded-xl shadow-lg">
              🗄️ SQL
            </div>


            {/* QA */}
            <div className="absolute -bottom-6 -right-6 bg-gray-800 border border-gray-700 px-4 py-3 rounded-xl shadow-lg">
              🧪 QA
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero