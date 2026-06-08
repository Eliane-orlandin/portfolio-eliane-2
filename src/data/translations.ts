export interface TranslationType {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    skillsTitle: string;
  };
  projects: {
    title: string;
    subtitle: string;
    all: string;
    viewCode: string;
    viewLive: string;
    noProjects: string;
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    sending: string;
    successMessage: string;
    errorMessage: string;
    infoTitle: string;
    infoText: string;
  };
  footer: {
    text: string;
  };
}

export const translations: Record<'pt' | 'en', TranslationType> = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Olá, eu sou Eliane Orlandin',
      role: 'Desenvolvedora Backend Júnior',
      description: 'Desenvolvedora em transição de carreira, apaixonada por resolver problemas reais com lógica e código limpo. Focada no ecossistema Java e no uso estratégico de Inteligência Artificial para otimizar fluxos de trabalho e criar soluções escaláveis.',
      ctaPrimary: 'Ver Projetos',
      ctaSecondary: 'Entre em contato',
    },
    about: {
      title: 'Sobre Mim',
      p1: 'Desenvolvedora Backend Júnior em transição de carreira, graduada em Análise e Desenvolvimento de Sistemas (Estácio) e bolsista em um bootcamp intensivo na Generation Brasil, com foco no ecossistema Java e criação de APIs RESTful.',
      p2: 'Possuo experiência prática em tecnologia adquirida como Estagiária na Advocacia-Geral da União (AGU), atuando com metodologias ágeis (Scrum) e suporte ao desenvolvimento. Integro o uso estratégico de Inteligência Artificial no meu dia a dia para otimizar processos, automatizar tarefas e elevar a produtividade.',
      p3: 'Minha bagagem anterior inclui 15 anos no atendimento ao público e atuação como Chefe Confeiteira, experiências que moldaram minhas principais soft skills: comunicação interpessoal empática, liderança de equipes, resiliência sob pressão, gestão de processos e foco rigoroso em controle de qualidade — competências que hoje traduzo em lógica de programação e arquitetura de sistemas eficientes.',
      skillsTitle: 'Minhas Habilidades',
    },
    projects: {
      title: 'Meus Projetos',
      subtitle: 'Uma seleção de trabalhos desenvolvidos com foco em qualidade, POO e inteligência.',
      all: 'Todos',
      viewCode: 'Repositório',
      viewLive: 'Visualizar',
      noProjects: 'Nenhum projeto encontrado para esta categoria.',
    },
    contact: {
      title: 'Vamos conversar?',
      subtitle: 'Sinta-se à vontade para enviar uma mensagem. Responderei o mais rápido possível!',
      nameLabel: 'Nome completo',
      namePlaceholder: 'Como deseja ser chamado?',
      emailLabel: 'E-mail',
      emailPlaceholder: 'seu.email@exemplo.com',
      messageLabel: 'Sua mensagem',
      messagePlaceholder: 'Escreva sobre seu projeto, vaga ou ideia...',
      sendButton: 'Enviar Mensagem',
      sending: 'Enviando...',
      successMessage: 'Mensagem enviada com sucesso! Obrigado pelo contato.',
      errorMessage: 'Ocorreu um erro ao enviar. Por favor, tente novamente.',
      infoTitle: 'Informações de Contato',
      infoText: 'Estou disponível para novos projetos, propostas de emprego e conexões na comunidade de tecnologia.',
    },
    footer: {
      text: 'Desenvolvido com ❤️ por Eliane Orlandin. Todos os direitos reservados.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm Eliane Orlandin",
      role: 'Junior Backend Developer',
      description: 'Developer in career transition, passionate about solving real-world problems with logic and clean code. Focused on the Java ecosystem and the strategic use of Artificial Intelligence to optimize workflows and create scalable solutions.',
      ctaPrimary: 'View Projects',
      ctaSecondary: 'Get in touch',
    },
    about: {
      title: 'About Me',
      p1: 'Junior Backend Developer in career transition, graduated in Systems Analysis and Development (Estácio) and bootcamper at Generation Brasil, with a focus on the Java ecosystem and RESTful API development.',
      p2: 'I have practical experience in tech acquired as an Intern at the Attorney General\'s Office (AGU), working with agile methodologies (Scrum) and development support. I strategically integrate Artificial Intelligence into my daily routine to optimize processes, automate tasks, and increase productivity.',
      p3: 'My previous background includes 15 years in customer service and experience as a Head Pastry Chef, roles that shaped my main soft skills: empathetic interpersonal communication, team leadership, resilience under pressure, process management, and a strict focus on quality control—competencies that I translate today into programming logic and efficient systems architecture.',
      skillsTitle: 'My Skills',
    },
    projects: {
      title: 'My Projects',
      subtitle: 'A selection of works developed with focus on quality, OOP, and intelligence.',
      all: 'All',
      viewCode: 'Repository',
      viewLive: 'View Live',
      noProjects: 'No projects found for this category.',
    },
    contact: {
      title: 'Let\'s Connect',
      subtitle: 'Feel free to send me a message. I\'ll get back to you as soon as possible!',
      nameLabel: 'Full Name',
      namePlaceholder: 'What should I call you?',
      emailLabel: 'E-mail Address',
      emailPlaceholder: 'your.email@example.com',
      messageLabel: 'Your Message',
      messagePlaceholder: 'Write about your project, job opportunity, or ideas...',
      sendButton: 'Send Message',
      sending: 'Sending...',
      successMessage: 'Message sent successfully! Thanks for reaching out.',
      errorMessage: 'Something went wrong. Please try again.',
      infoTitle: 'Contact Information',
      infoText: 'I am available for new projects, job opportunities, and networking in the tech community.',
    },
    footer: {
      text: 'Designed & Built with ❤️ by Eliane Orlandin. All rights reserved.',
    },
  },
};
