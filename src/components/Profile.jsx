import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { User, MapPin, Mail } from 'lucide-react';

const Profile = () => {
  const { content } = useLanguage();
  
  if (!content) return null;
  
  const { profileSection } = content;

  const iconMap = {
    'Name': User,
    'Location': MapPin,
    'Email': Mail,
  };

  return (
    <section className="py-20 bg-primary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white">
          {profileSection.title}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-between gap-12 mt-12 text-center sm:text-left">
          <div className='profile-section-basic-info'>
            <h3 className="text-2xl tracking-wider font-normal text-text-light dark:text-white mb-6">
              {profileSection.basicInfo.title}
            </h3> 
            <div className="space-y-6">
              {profileSection.basicInfo.items.map((item) => {
                const Icon = iconMap[item.label] || User;
                
                return (
                  <div key={item.label} className="grid grid-cols-[1fr_2fr] gap-4">
   
                      <p className="text-sm font-bold text-secondary dark:text-gray-400">
                        {item.label}
                      </p>
                      <p className="text-text-light font-light dark:text-white">
                        {item.value}
                      </p>

                  </div>
                );
              })}
            </div>
          </div>
          <div className='profile-section-about-me'>
            <h3 className="text-2xl tracking-wider font-normal text-text-light dark:text-white mb-4">
              {profileSection.aboutMe.title}
            </h3> 
            <div className="text-text-light font-light dark:text-white">
              {profileSection.aboutMe.content}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Profile;