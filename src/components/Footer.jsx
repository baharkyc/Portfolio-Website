import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Github, Globe, Instagram } from 'lucide-react';

const Footer = () => {
  const { content } = useLanguage();
  
  if (!content) return null;
  
  const { footerSection } = content;

  const iconMap = {
    'Github': Github,
    'Personal Blog': Globe,
    'Instagram': Instagram,
  };

  return (
    <footer className="bg-light-bg pt-28 pb-10">
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            {footerSection.cta}
          </h2>
          
          <div className="flex justify-center space-x-6">
            {footerSection.links.map((link) => {
              const Icon = iconMap[link.label] || Globe;
              
              return (
                <a
                  key={link.label}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
              );
            })}
          </div>
          
          <p className="mt-8 text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;