import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const { content } = useLanguage();
  
  if (!content) return null;
  
  const { projectsSection } = content;

  return (
    <section className="py-20 bg-secondary dark:bg-gray-800">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-start text-primary dark:text-white mb-12">
          {projectsSection.title}
        </h2>
        
        <div className="flex flex-row gap-8">
          {projectsSection.projects.map((project) => (
            <div
              key={project.title}
              className="bg-white grid grid-cols-[2fr_3fr] dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={`https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400`}
                alt={project.title}
                className="h-full aspect-square object-cover"
              />
              
              <div className="p-12">
                <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-text-light px-3 py-2 text-xs bg-primary dark:bg-primary dark:text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="projects-link flex space-x-4">
                  <a
                    href={project.links?.[0]?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.links?.[1]?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>View Site</span>
                  </a>
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