import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const element = document.getElementById('apropos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="mx-auto w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <img
                src="images/boy1.png"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white typing-animation">
              FRANCK <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">TSAGUE</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-light fade-in-up">
              Développeur Full Stack & Designer UI/UX
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto leading-relaxed fade-in-up-delay">
              Passionné par la création d'expériences numériques exceptionnelles, 
              je transforme des idées en solutions web modernes et performantes.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 fade-in-up-delay-2">
            <a
              href="https://github.com/Francktsague"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/franck-tsague-60abb8295"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:juniortsague361@gmail.com"
              className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 fade-in-up-delay-3">
            <button
              onClick={() => scrollToNext()}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 hover:shadow-blue-500/25"
            >
              Découvrir mon travail
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Me contacter
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 animate-bounce z-10"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;