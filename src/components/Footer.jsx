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
          <h2 className="text-2xl md:text-3xl font-bold text-text-secondary mb-8">
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
                  className="p-3 rounded-full  hover:bg-light-grey-bg  transition-colors"
                >
                  <Icon className="w-6 h-6 text-text-secondary" />
                </a>
              );
            })}
          </div>
          
          <p className="mt-8 text-text-secondary ">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;