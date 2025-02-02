import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Code2, Palette, FileCode } from 'lucide-react';

const Skills = () => {
  const { content } = useLanguage();
  
  if (!content) return null;
  
  const { skillsSection } = content;

  const iconMap = {
    'HTML': FileCode,
    'CSS': Palette,
    'JavaScript': Code2,
  };

  return (
    <section className="py-20  dark:bg-gray-800">
      <div className="container grid grid-cols-[1fr_2fr] gap-12">
        <h2 className="text-3xl md:text-4xl font-bold text-start text-primary dark:text-white mb-12">
          {skillsSection.title}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 ">
          {skillsSection.skills.map((skill) => {
            const Icon = iconMap[skill.name] || Code2;
            
            return (
              <div
                key={skill.name}
                className="group py-2 dark:bg-gray-900 hover:shadow-sm rounded-xl transition-all duration-300"
              >
                <div className="flex py-6">
                  <div className="px-4 dark:bg-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary dark:text-primary" />
                  </div>
                  <h3 className="text-lg font-normal text-text-grey dark:text-white">
                    {skill.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;