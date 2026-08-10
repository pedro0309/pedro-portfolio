function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Logo */}
          <div className="text-lg font-bold text-white">
            Pedro<span className="text-blue-500">.dev</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Pedro Chávez. Todos los derechos reservados.
          </p>

          {/* Back to top */}
          <a
            href="#"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Volver arriba ↑
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
