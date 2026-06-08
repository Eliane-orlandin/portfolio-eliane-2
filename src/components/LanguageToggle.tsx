import { Languages } from 'lucide-react';

interface LanguageToggleProps {
  language: 'pt' | 'en';
  setLanguage: (lang: 'pt' | 'en') => void;
}

export default function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <button
      onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
      className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-bg-card border border-border-card text-xs font-semibold text-text-title hover:text-primary hover:border-primary/50 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20"
      aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      <Languages className="w-4 h-4 text-text-body" />
      <span className="uppercase tracking-wider">{language === 'pt' ? 'EN' : 'PT'}</span>
    </button>
  );
}
