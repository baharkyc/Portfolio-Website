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
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary dark:text-white mb-12">
          {skillsSection.title}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {skillsSection.skills.map((skill) => {
            const Icon = iconMap[skill.name] || Code2;
            
            return (
              <div
                key={skill.name}
                className="group p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-3 bg-primary dark:bg-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary dark:text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary dark:text-white">
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