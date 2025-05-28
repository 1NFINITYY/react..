import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "MediBot",
    description: "Disease prediction chatbot using Python and ML with 85% accuracy.",
    techStack: ["Python", "Scikit-learn", "NLP"],
    image: "https://source.unsplash.com/featured/?ai,chatbot",
    github: "#",
    demo: "#"
  },
  {
    title: "Nike Nexus",
    description: "Global sales trend analysis using interactive Power BI dashboards.",
    techStack: ["Power BI", "Excel", "Data Modeling"],
    image: "https://source.unsplash.com/featured/?dashboard,data",
    github: "#",
    demo: "#"
  },
  {
    title: "Revenue Radar",
    description: "Sales performance tracking using interactive Power BI visuals.",
    techStack: ["Power BI", "Data Analysis", "KPIs"],
    image: "https://source.unsplash.com/featured/?business,report",
    github: "#",
    demo: "#"
  },
  {
    title: "Zomato Insights Hub",
    description: "Pricing and customer behavior analysis using Python and SQL.",
    techStack: ["Python", "SQL", "Pandas"],
    image: "https://source.unsplash.com/featured/?analytics,restaurant",
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold text-indigo-700">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-black transition"
                  >
                    <FaGithub className="mr-1" /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 hover:text-indigo-800 transition"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
