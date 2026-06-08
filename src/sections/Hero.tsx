import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Cpu, Database, Star } from 'lucide-react';
import type { TranslationType } from '../data/translations';

interface HeroProps {
  t: TranslationType;
}

export default function Hero({ t }: HeroProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-primary/10 blur-3xl -z-10 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl -z-10 animate-pulse duration-[6000ms]" />

      <div className="max-w-5xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12 text-center md:text-left">
        {/* Text Details Column */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-2"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-heading leading-tight m-0 text-text-title">
              {t.hero.greeting}
            </h1>
            <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent tracking-wide">
              {t.hero.role}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg text-text-body leading-relaxed max-w-2xl"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-2"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary-hover shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all cursor-pointer group"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-bg-card border border-border-card text-text-title font-semibold hover:border-primary/50 hover:bg-bg-base/50 transition-all cursor-pointer"
            >
              {t.hero.ctaSecondary}
            </button>
          </motion.div>
        </div>

        {/* Profile Image Column with Advanced Tech Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="relative flex-shrink-0 w-72 h-72 sm:w-96 sm:h-96 md:w-1/2 md:h-auto md:aspect-square flex items-center justify-center mb-8 md:mb-0"
        >
          {/* Orbital Rings Background */}
          <div className="absolute inset-[-15%] z-0 pointer-events-none flex items-center justify-center">
            {/* SVG Circuit Nodes and Connections */}
            <motion.svg 
              viewBox="0 0 500 500" 
              fill="none" 
              className="w-full h-full opacity-60 text-amber-500"
            >
              {/* Outer subtle boundary */}
              <circle cx="250" cy="250" r="230" stroke="currentColor" strokeWidth="1" strokeDasharray="4 12" opacity="0.2" />
              
              {/* Circuit paths branching out */}
              <motion.g 
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.path d="M 140 140 L 90 140 L 60 110" stroke="currentColor" strokeWidth="1.5" opacity="0.6"
                  animate={{ rotate: [0,5,0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path d="M 360 140 L 410 140 L 440 110 L 460 110" stroke="#fbbf24" strokeWidth="1" opacity="0.5"
                  animate={{ rotate: [0,-5,0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path d="M 140 360 L 90 360 L 60 390 L 40 390" stroke="#f59e0b" strokeWidth="2" opacity="0.4"
                  animate={{ rotate: [0,5,0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path d="M 360 360 L 410 360 L 440 390" stroke="currentColor" strokeWidth="1.5" opacity="0.6"
                  animate={{ rotate: [0,-5,0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <motion.path d="M 110 250 L 50 250 L 30 230" stroke="currentColor" strokeWidth="1" opacity="0.5"
                  animate={{ rotate: [0,5,0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path d="M 390 250 L 450 250 L 470 270" stroke="#fbbf24" strokeWidth="1.5" opacity="0.7"
                  animate={{ rotate: [0,-5,0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path d="M 250 110 L 250 50 L 230 30" stroke="#f59e0b" strokeWidth="1" opacity="0.4"
                  animate={{ rotate: [0,5,0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path d="M 250 390 L 250 450 L 270 470" stroke="currentColor" strokeWidth="2" opacity="0.3"
                  animate={{ rotate: [0,-5,0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <motion.path d="M 180 110 L 150 80 L 100 80" stroke="#fbbf24" strokeWidth="1" strokeDasharray="4 4" opacity="0.6"
                  animate={{ rotate: [0,5,0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path d="M 320 390 L 350 420 L 400 420" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 6" opacity="0.5"
                  animate={{ rotate: [0,-5,0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.g>

              {/* Circuit Nodes (Dots) */}
              <circle cx="140" cy="140" r="3" fill="currentColor" />
              <circle cx="90" cy="140" r="2" fill="currentColor" />
              <circle cx="60" cy="110" r="4" fill="#fbbf24" />

              <circle cx="360" cy="140" r="3" fill="currentColor" />
              <circle cx="410" cy="140" r="2" fill="currentColor" />
              <circle cx="440" cy="110" r="2" fill="currentColor" />
              <circle cx="460" cy="110" r="4" fill="#f59e0b" />

              <circle cx="140" cy="360" r="3" fill="currentColor" />
              <circle cx="90" cy="360" r="2" fill="currentColor" />
              <circle cx="60" cy="390" r="2" fill="currentColor" />
              <circle cx="40" cy="390" r="4" fill="#fbbf24" />

              <circle cx="360" cy="360" r="3" fill="currentColor" />
              <circle cx="410" cy="360" r="2" fill="currentColor" />
              <circle cx="440" cy="390" r="4" fill="#f59e0b" />

              <circle cx="110" cy="250" r="3" fill="currentColor" />
              <circle cx="50" cy="250" r="2" fill="currentColor" />
              <circle cx="30" cy="230" r="4" fill="#fbbf24" />

              <circle cx="390" cy="250" r="3" fill="currentColor" />
              <circle cx="450" cy="250" r="2" fill="currentColor" />
              <circle cx="470" cy="270" r="4" fill="#f59e0b" />

              <circle cx="250" cy="110" r="3" fill="currentColor" />
              <circle cx="250" cy="50" r="2" fill="currentColor" />
              <circle cx="230" cy="30" r="4" fill="#fbbf24" />

              <circle cx="250" cy="390" r="3" fill="currentColor" />
              <circle cx="250" cy="450" r="2" fill="currentColor" />
              <circle cx="270" cy="470" r="4" fill="#f59e0b" />

              <circle cx="180" cy="110" r="3" fill="currentColor" />
              <circle cx="150" cy="80" r="2" fill="currentColor" />
              <circle cx="100" cy="80" r="4" fill="#fbbf24" />

              <circle cx="320" cy="390" r="3" fill="currentColor" />
              <circle cx="350" cy="420" r="2" fill="currentColor" />
              <circle cx="400" cy="420" r="4" fill="#f59e0b" />
            </motion.svg>

            {/* Floating glowing dots on the orbits */}
            <motion.div 
              className="absolute top-[20%] right-[25%] w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,1)]" 
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} 
              transition={{ duration: 3, repeat: Infinity }} 
            />
            <motion.div 
              className="absolute bottom-[25%] left-[20%] w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,1)]" 
              animate={{ scale: [1, 2, 1], opacity: [0.4, 0.8, 0.4] }} 
              transition={{ duration: 4, repeat: Infinity, delay: 1 }} 
            />
            <motion.div 
              className="absolute top-[45%] left-[10%] w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(252,211,77,1)]" 
              animate={{ scale: [1, 2.5, 1], opacity: [0.3, 0.9, 0.3] }} 
              transition={{ duration: 5, repeat: Infinity, delay: 2 }} 
            />
          </div>

          {/* Central Profile Photo (Fixed) */}
          <div className="w-[70%] h-[70%] rounded-full p-1 bg-gradient-to-tr from-amber-600 via-orange-500 to-amber-900 relative z-10 shadow-[0_0_40px_rgba(245,158,11,0.3)]">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-bg-base">
              <img
                src="/images/projects/profile.jpg"
                alt="Eliane Orlandin"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
