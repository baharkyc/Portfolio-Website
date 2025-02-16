import React from 'react';
import { Link } from 'react-router-dom';
import LanguageMenu from './LanguageMenu';
import ToggleThemeMenu from './ToggleThemeMenu';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { content } = useLanguage();
  const { headerSection } = content;

  return (
    <header >
      <div className="container px-18 py-4">
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold text-text-primary dark:text-primary hover:text-primary dark:hover:text-primary transition-colors"
          >
            {headerSection.title}
            
          </Link>
      
          <div className="flex items-center space-x-4">
            <LanguageMenu />  
            <ToggleThemeMenu />            
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;