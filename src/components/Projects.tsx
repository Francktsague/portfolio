import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('tous');

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plateforme de commerce électronique complète avec gestion des commandes, paiements sécurisés et interface d'administration.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "web",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: 2,
      title: "App Mobile de Fitness",
      description: "Application mobile cross-platform pour le suivi d'entraînements avec planificateur personnalisé et statistiques détaillées.",
      image: "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Redux"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description: "Tableau de bord interactif pour l'analyse de données avec visualisations en temps réel et exports personnalisés.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "web",
      technologies: ["Vue.js", "D3.js", "Express", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: 4,
      title: "Portfolio Designer",
      description: "Site portfolio pour un designer créatif avec galerie interactive et animations sophistiquées.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "design",
      technologies: ["Next.js", "Framer Motion", "Tailwind"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: 5,
      title: "API de Gestion",
      description: "API RESTful robuste pour la gestion d'entreprise avec authentification JWT et documentation Swagger.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "backend",
      technologies: ["FastAPI", "PostgreSQL", "Redis", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: 6,
      title: "App de Chat Temps Réel",
      description: "Application de messagerie instantanée avec salles thématiques, notifications push et partage de fichiers.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "mobile",
      technologies: ["React Native", "Socket.io", "Node.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ];

  const categories = ['tous', 'web', 'mobile', 'design', 'backend'];

  const filteredProjects = activeFilter === 'tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projets" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Une sélection de mes créations récentes, alliant innovation technique et design soigné.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <span className="capitalize">{category}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 rounded-full text-gray-700 hover:text-blue-600 hover:scale-110 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 rounded-full text-gray-700 hover:text-blue-600 hover:scale-110 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full capitalize">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;