import { motion } from 'framer-motion';
import { LayoutGrid, Cpu, Wrench } from 'lucide-react';
import type { TranslationType } from '../data/translations';

interface AboutProps {
  t: TranslationType;
}

export default function About({ t }: AboutProps) {
  const skillCategories = [
    {
      title: 'Backend & DB',
      icon: <Cpu className="w-5 h-5 text-indigo-500" />,
      skills: ['Java', 'Spring Boot', 'Python', 'Flask', 'MySQL', 'REST APIs', 'JWT', 'JUnit'],
    },
    {
      title: 'Frontend',
      icon: <LayoutGrid className="w-5 h-5 text-primary" />,
      skills: ['React', 'HTML5/CSS3', 'TypeScript', 'Astro'],
    },
    {
      title: 'Tools, DevOps & Soft Skills',
      icon: <Wrench className="w-5 h-5 text-emerald-500" />,
      skills: ['Git & GitHub', 'IA aplicada (Antigravity)', 'Scrum', 'Liderança', 'Resolução de Problemas'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 12 },
    },
  };

  return (
    <section id="about" className="py-24 bg-bg-card/50 border-y border-border-card">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-heading m-0 mb-4 text-text-title">
            {t.about.title}
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
        </div>

        {/* Content Layout */}
        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Biography */}
          <div className="md:col-span-3 flex flex-col gap-6 text-left">
            <p className="text-base sm:text-lg leading-relaxed text-text-body">
              {t.about.p1}
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-text-body">
              {t.about.p2}
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-text-body">
              {t.about.p3}
            </p>
          </div>

          {/* Skills Accordion/Cards */}
          <div className="md:col-span-2 flex flex-col gap-6 text-left">
            <h3 className="text-xl font-bold tracking-tight font-heading m-0 text-text-title">
              {t.about.skillsTitle}
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="flex flex-col gap-4"
            >
              {skillCategories.map((category) => (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className="p-5 rounded-2xl bg-bg-card border border-border-card shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-4">
                    {category.icon}
                    <h4 className="text-sm font-bold uppercase tracking-wider font-heading m-0 text-text-title">
                      {category.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-bg-base border border-border-card text-text-body hover:border-primary/30 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
