function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800 text-white px-6 py-4 z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold hover:text-blue-400 transition"
        >
          Pedro<span className="text-blue-500">.dev</span>
        </a>


        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">

          <a
            href="#about"
            className="text-gray-300 hover:text-white transition"
          >
            Sobre mí
          </a>

          <a
            href="#skills"
            className="text-gray-300 hover:text-white transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-gray-300 hover:text-white transition"
          >
            Proyectos
          </a>

          <a
            href="#contact"
            className="text-gray-300 hover:text-white transition"
          >
            Contacto
          </a>

        </div>


        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          aria-label="Abrir menú"
        >
          ☰
        </button>

      </div>

    </nav>
  )
}

export default Navbar