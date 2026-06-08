import { useState, useEffect } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { translations } from './data/translations';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'dark'; // Inicia com o Dark Mode por padrão
  });

  const [language, setLanguage] = useState<'pt' | 'en'>(() => {
    const saved = localStorage.getItem('language');
    if (saved === 'pt' || saved === 'en') return saved;
    const browserLang = navigator.language.substring(0, 2);
    return browserLang === 'en' ? 'en' : 'pt';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = translations[language];

  return (
    <div className="min-h-screen flex flex-col bg-bg-base text-text-body transition-colors duration-300">
      <Header
        theme={theme}
        setTheme={setTheme}
        language={language}
        setLanguage={setLanguage}
        t={t}
      />
      <main className="flex-grow">
        <Hero t={t} />
        <About t={t} />
        <Projects language={language} t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}

export default App;
