import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const { content } = useLanguage();
  
  if (!content) return null;
  
  const { heroSection } = content;

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container">
        <div className="back-box relative flex bg-secondary-700 
        dark:bg-secondary-900 p-8 rounded-xl shadow-xl" style={{ left: '100px' }}>
          <div className="main-box relative flex flex-col md:flex-row 
          items-center justify-between gap-12 bg-primary-700 dark:bg-secondary-900 
          p-8 rounded-xl shadow-xl" style={{ left: '-20px' }}>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                {heroSection.greeting}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                {heroSection.intro}
              </p>
              <div 
                className="text-lg text-gray-700 dark:text-gray-200 mb-8"
                dangerouslySetInnerHTML={{ __html: heroSection.ctaHTML }}
              />
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>
            
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                alt="Profile"
                className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover mx-auto shadow-2xl"
              />
            </div>
          </div>
        </div >
      </div>
    </section>
  );
};

export default Hero;