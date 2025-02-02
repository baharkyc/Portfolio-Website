import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Github, Linkedin } from 'lucide-react';
import LinkButton from './LinkButton';

const Hero = () => {
  const { content } = useLanguage();
  
  if (!content) return null;
  
  const { heroSection } = content;

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-secondary md:text-6xl font-bold dark:text-white mb-4">
              {heroSection.greeting}
            </h1>
            <p className="text-xl md:text-2xl text-text-light dark:text-gray-300 mb-8">
              {heroSection.intro}
            </p>
            <div 
              className="text-lg text-text-light dark:text-gray-200 mb-8"
              dangerouslySetInnerHTML={{ __html: heroSection.ctaHTML }}
            />
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <LinkButton href="https://github.com/baharkyc">
                <Github className="w-6 h-6 "/>
              </LinkButton>
              <LinkButton href="https://linkedin.com">
                <Linkedin className="w-6 h-6 "/>                
               
              </LinkButton>
              
            </div>
          </div>
          
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1683512611593-59aa784f5f16"
              alt="Profile"
              className="w-64 md:w-96 md:h-96 rounded-3xl aspect-square object-cover mx-auto shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;