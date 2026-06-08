import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import type { TranslationType } from '../data/translations';

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface ContactProps {
  t: TranslationType;
}

export default function Contact({ t }: ContactProps) {
  return (
    <section id="contact" className="py-24 bg-bg-card/50 border-t border-border-card">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-heading m-0 mb-4 text-text-title">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-text-body max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        {/* Content Layout */}
        <div className="grid md:grid-cols-1 gap-12 items-start">
          {/* Info Card Column */}
          <div className="md:col-span-1 text-left flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-bold tracking-tight font-heading m-0 mb-3 text-text-title">
                {t.contact.infoTitle}
              </h3>
              <p className="text-sm leading-relaxed text-text-body">
                {t.contact.infoText}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-body uppercase tracking-wider m-0">E-mail</p>
                  <a href="mailto:liorlandin33@gmail.com" className="text-sm font-semibold text-text-title hover:text-primary transition-colors">
                    liorlandin33@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-body uppercase tracking-wider m-0">Localização</p>
                  <p className="text-sm font-semibold text-text-title m-0">Brasília e São Paulo, Brasil</p>
                </div>
              </div>
            </div>

            {/* Social Connect */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
              <a
                href="https://github.com/Eliane-orlandin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-bg-card border border-border-card text-sm font-bold text-text-body hover:text-primary hover:border-primary/50 hover:shadow-md transition-all cursor-pointer flex-1"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/elianeorlandindocarmo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-bg-card border border-border-card text-sm font-bold text-text-body hover:text-primary hover:border-primary/50 hover:shadow-md transition-all cursor-pointer flex-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
