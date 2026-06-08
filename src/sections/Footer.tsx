import type { TranslationType } from '../data/translations';

interface FooterProps {
  t: TranslationType;
}

export default function Footer({ t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border-card bg-bg-card/30">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-text-body">
          {t.footer.text.replace('Todos os direitos reservados.', `© ${currentYear}`).replace('All rights reserved.', `© ${currentYear}`)}
        </p>
        <p className="text-xs text-text-body/60 font-medium">
          v1.0.0
        </p>
      </div>
    </footer>
  );
}
