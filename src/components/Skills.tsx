import {
  Palette,
  Settings,
  Database,
  FlaskConical,
  Wrench,
  Gamepad2,
} from "lucide-react"

function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      icon: Palette,
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },

    {
      title: "Backend & Development",
      icon: Settings,
      skills: [
        "Python",
        "C#",
        "Windows Forms",
        "REST APIs",
        "PHP",
      ],
    },

    {
      title: "Databases",
      icon: Database,
      skills: [
        "SQL",
        "MySQL",
        "SQLAlchemy",
      ],
    },

    {
      title: "Testing & QA",
      icon: FlaskConical,
      skills: [
        "Manual Testing",
        "Functional Testing",
        "Regression Testing",
        "Smoke Testing",
        "Test Cases",
      ],
    },

    {
      title: "Tools",
      icon: Wrench,
      skills: [
        "Git",
        "GitHub",
        "Visual Studio",
        "VS Code",
        "Postman",
      ],
    },

    {
      title: "Game Development",
      icon: Gamepad2,
      skills: [
        "Unity",
        "Unreal Engine",
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-950 text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">

          <p className="text-blue-400 font-medium mb-3">
            Tecnologías
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Tools
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl">
            Tecnologías y herramientas que utilizo para desarrollar,
            probar y mantener soluciones de software.
          </p>

        </div>


        {/* Skill Groups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition"
            >

              <div className="flex items-center gap-3 mb-5">

                <span className="text-blue-400">
                  <group.icon size={26} />
                </span>

                <h3 className="text-xl font-bold">
                  {group.title}
                </h3>

              </div>


              <div className="flex flex-wrap gap-2">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-800 border border-gray-700 px-3 py-2 rounded-lg text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills
