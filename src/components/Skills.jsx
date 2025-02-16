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
    <section className="py-20 bg-light-bg">
      <div className="container grid grid-cols-[1fr_2fr] gap-12">
        <h2 className="text-3xl md:text-4xl font-bold text-start text-text-secondary mb-12">
          {skillsSection.title}
        </h2>
        
        <div className="grid sm:grid-cols-2 ">
          {skillsSection.skills.map((skill) => {
            const Icon = iconMap[skill.name] || Code2;
            
            return (
              <div
                key={skill.name}
                className="bg-light-bg hover:shadow-sm rounded-xl"
              >
                <div className="flex py-6">
                  <div className="px-4  rounded-lg group-hover:scale-110">
                    <Icon className="w-8 h-8 text-text-secondary dark:text-text-light" />
                  </div>
                  <h3 className="text-lg font-normal text-text-grey">
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