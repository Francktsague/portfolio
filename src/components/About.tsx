import React from 'react';
import { Code, Palette, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Développement Frontend",
      description: "React, TypeScript, Next.js, Vue.js",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Développement Backend",
      description: "Node.js, Python, PostgreSQL, MongoDB",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design UI/UX",
      description: "Figma, Adobe Creative Suite, Prototypage",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "DevOps & Cloud",
      description: "Docker, AWS, CI/CD, Vercel",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Développeur passionné avec plus de 5 ans d'expérience dans la création d'applications web modernes. 
            J'aime résoudre des problèmes complexes et créer des interfaces utilisateur intuitives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 lg:p-12 transition-colors duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Mon parcours
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white"> Developer Frontend</h4>
                    <p className="text-gray-600 dark:text-gray-400">TechCorp • 2023 - Présent</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                      Direction technique d'une équipe de 5 développeurs, architecture frontend moderne
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-purple-600 rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Développeur Full Stack</h4>
                    <p className="text-gray-600 dark:text-gray-400">Polypharma • 2024 - 2025</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                      Développement d'applications web et mobile de l'entreprise
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Technologies favorites
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'AWS', 'Figma'].map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-center text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;