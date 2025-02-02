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
        
        <div className="grid grid-cols-1 sm:grid-cols-3 justify-between gap-12 mt-12 text-center sm:text-left">
          <div className=''>
            <h3 className="text-2xl tracking-wider font-light text-text-light dark:text-white mb-6">
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
          <div className=''>
            <img src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop'
            alt='Profile' className='w-64 md:w-64 rounded-3xl aspect-square object-cover mx-auto shadow-2xl'/>
          </div>
          <div className=''>
            <h3 className="text-2xl tracking-wider font-light text-text-light dark:text-white mb-6">
              {profileSection.basicInfo.title}
            </h3> 
            <div className="space-y-6">
              {profileSection.basicInfo.items.map((item) => {
                const Icon = iconMap[item.label] || User;
                
                return (
                  <div key={item.label} className="flex items-center space-x-4">
                    <div>
                      <p className="text-lg font-light text-secondary dark:text-gray-400">
                        {item.label}
                      </p>
                      <p className="text-text-light font-light dark:text-white">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;