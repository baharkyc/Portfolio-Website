import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { useLanguage } from './context/LanguageContext';
import 'react-toastify/dist/ReactToastify.css';

function AppContent() {
  const { content, isLoading } = useLanguage();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!content) {
    return null;
  }

  return (
    <div className="min-h-screen  ">
      <div className='bg-gradient-to-r from-primary from-70% to-secondary to-70% dark:bg-gray-900/80 backdrop-blur-sm'>
        <Header />
        <Hero />
      </div>
      <main className="pt-16">
        <Skills />
        <Profile />
        <Projects />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" theme="colored" />
    </div>
  );
}

function App() {
  return (
    <Router>  
      <ThemeProvider>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;