import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import enData from '../locales/en.json';
import trData from '../locales/tr.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) return savedLang;
    return navigator.language.startsWith('tr') ? 'tr' : 'en';
  });

  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true);
      try {
        const response = await axios.post('https://reqres.in/api/workintech', 
          language === 'en' ? enData : trData
        );
        setContent(response.data);
      } catch (error) {
        toast.error('Failed to fetch content');
        // Fallback to local content
        setContent(language === 'en' ? enData : trData);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, [language]);

  const toggleLanguage = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };


  return (
    <LanguageContext.Provider value={{ language, content, toggleLanguage, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};