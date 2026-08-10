type Project = {
  title: string
  description: string
  technologies: string[]
  type: string
  features: string[]
  image: string
  github?: string
  liveDemo?: string
  previewLabel?: string
}

function Projects() {
  const projects: Project[] = [
    {
      title: "CoralHub Marketplace",
      description:
        "Aplicación web tipo marketplace desarrollada con React, enfocada en crear una experiencia de usuario dinámica mediante componentes reutilizables y consumo de servicios externos.",
      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "REST API",
      ],
      type: "Web Application",
      features: [
        "Interfaz de marketplace",
        "Componentes reutilizables",
        "Consumo de APIs REST",
        "Diseño de interfaz responsive",
      ],
      image: "/projects/coralhub.png",
      github: "https://github.com/Nahyahlop/CoralHub",
      liveDemo: "https://sample-service-name-qb1a.onrender.com/",
    },

    {
      title: "DRO Gym Management System",
      description:
        "Sistema de gestión para gimnasio desarrollado como aplicación de escritorio, diseñado para centralizar el registro de clientes, membresías y pagos en una sola plataforma.",
      technologies: [
        "C#",
        "Windows Forms",
        "SQL",
      ],
      type: "Desktop Application",
      features: [
        "Registro y gestión de clientes",
        "Control de membresías",
        "Registro y seguimiento de pagos",
        "Panel administrativo",
        "Control de acceso mediante huella digital",
      ],
      image: "/projects/dro-gym.png",
      previewLabel: "Concept Preview",
    },

    {
      title: "Pedro Portfolio",
      description:
        "Portafolio personal desarrollado desde cero para presentar proyectos, habilidades y experiencia profesional mediante una interfaz moderna, responsive y orientada a dispositivos de escritorio y móviles.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
      type: "Web Application",
      features: [
        "Diseño responsive",
        "Navegación por secciones",
        "Componentes reutilizables",
        "Interfaz desarrollada con Tailwind CSS",
      ],
      image: "/projects/portfolio.png",
      github: "https://github.com/pedro0309/pedro-portfolio",
    },
  ]

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">

          <p className="text-blue-400 font-medium mb-3">
            Mi trabajo
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proyectos
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl">
            Algunos de los proyectos en los que he trabajado,
            utilizando diferentes tecnologías y enfoques de desarrollo.
          </p>

        </div>


        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <article
              key={project.title}
              className="group bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition h-full flex flex-col"
            >

              {/* Project Image */}
              <div className="h-48 bg-gray-800 overflow-hidden relative">

                <img
                  src={project.image}
                  alt={`Vista previa de ${project.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {project.previewLabel && (
                  <span className="absolute top-3 left-3 bg-gray-950/90 border border-gray-700 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full">
                    {project.previewLabel}
                  </span>
                )}

              </div>


              {/* Content */}
              <div className="p-6 flex flex-col flex-1">

                <span className="text-sm text-blue-400">
                  {project.type}
                </span>

                <h3 className="text-2xl font-bold mt-2 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>


                {/* Features */}
                <ul className="space-y-2 mb-6">

                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-gray-400 flex items-start gap-2"
                    >
                      <span className="text-blue-400">
                        ✓
                      </span>

                      {feature}
                    </li>
                  ))}

                </ul>


                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="text-sm bg-gray-800 border border-gray-700 px-3 py-1.5 rounded-lg text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}

                </div>


                {/* Actions */}
                <div className="flex gap-4 mt-auto">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-400 hover:text-blue-300 transition"
                    >
                      GitHub →
                    </a>
                  )}

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-400 hover:text-white transition"
                    >
                      Live Demo →
                    </a>
                  )}

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects