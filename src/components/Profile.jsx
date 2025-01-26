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
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {profileSection.title}
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {profileSection.basicInfo.title}
              </h3>
              
              <div className="space-y-6">
                {profileSection.basicInfo.items.map((item) => {
                  const Icon = iconMap[item.label] || User;
                  
                  return (
                    <div key={item.label} className="flex items-center space-x-4">
                      <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.label}
                        </p>
                        <p className="text-gray-900 dark:text-white font-medium">
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
      </div>
    </section>
  );
};

export default Profile;