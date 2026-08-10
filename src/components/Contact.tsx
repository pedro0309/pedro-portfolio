import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-950 text-white px-6 py-24"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Header */}
        <p className="text-blue-400 font-medium mb-3">
          Contacto
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ¿Hablamos?
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Si tienes una oportunidad laboral, un proyecto o simplemente
          quieres conocer más sobre mi trabajo, puedes contactarme.
        </p>


        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=pedro00030009@gmail.com&su=Contacto%20desde%20Pedro.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl font-medium transition mb-10"
        >
          <FaEnvelope size={19} />
          Enviarme un correo
        </a>


        {/* Social Links */}
        <div className="flex justify-center items-center gap-8">

          <a
            href="https://github.com/pedro0309"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <FaGithub size={22} />
            GitHub
          </a>


          <a
            href="https://www.linkedin.com/in/pedro-chávez-265239282"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <FaLinkedin size={22} />
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  )
}

export default Contact