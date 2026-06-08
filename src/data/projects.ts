export interface ProjectType {
  id: number;
  title: string;
  description: {
    pt: string;
    en: string;
  };
  image: string;
  tags: string[];
  category: 'frontend' | 'fullstack' | 'mobile' | 'backend';
  github: string;
  live: string;
  linkedin?: string;
  imageAlign?: 'top' | 'center' | 'bottom';
}

export const projects: ProjectType[] = [
  {
    id: 4,
    title: 'Blog pessoal (backend)',
    description: {
      pt: 'API RESTful construída com Java e Spring Boot para o backend de um Blog Pessoal. Permite CRUD de postagens, temas e usuários, com relacionamentos de banco de dados, autenticação, testes unitários e deploy.',
      en: 'RESTful API built with Java and Spring Boot for a personal blog backend. Enables CRUD of posts, topics, and users, with database relationships, security authentication, unit tests, and deployment.'
    },
    image: './images/projects/blogpessoal.png',
    tags: ['Java', 'Spring Boot', 'REST API', 'CRUD', 'Security'],
    category: 'backend',
    github: 'https://github.com/Eliane-orlandin/blogpessoal',
    live: ''
  },
  {
    id: 5,
    title: 'E-Commerce livros (backend)',
    description: {
      pt: 'API RESTful construída com Java e Spring Boot para o backend de um e‑commerce de livros. Permite CRUD de livros, gêneros e usuários, com relacionamentos de banco de dados e autenticação de segurança.',
      en: 'RESTful API built with Java and Spring Boot for a books e‑commerce backend. Enables CRUD of books, genres, and users, with database relationships and security authentication.'
    },
    image: './images/projects/ecommerce-livro.png',
    tags: ['Java', 'Spring Boot', 'REST API', 'CRUD', 'E‑commerce'],
    category: 'backend',
    github: 'https://github.com/Eliane-orlandin/ecommerce-livro',
    live: ''
  },
  {
    id: 6,
    title: 'Loja Games (backend)',
    description: {
      pt: 'API RESTful construída com Java e Spring Boot para o backend de uma loja de games. Permite CRUD de categorias, produtos e usuários, com relacionamentos de banco de dados e autenticação de segurança.',
      en: 'RESTful API built with Java and Spring Boot for a games store backend. Enables CRUD of categories, products, and users, with database relationships and security authentication.'
    },
    image: './images/projects/loja-games.png',
    tags: ['Java', 'Spring Boot', 'REST API', 'CRUD', 'Games'],
    category: 'backend',
    github: 'https://github.com/Eliane-orlandin/generation-projeto-loja-games',
    live: ''
  },
  {
    id: 1,
    title: 'Pokemon TCG Catalog',
    description: {
      pt: 'Aplicação focada em integração com serviços externos, tratamento de dados em JSON e manipulação de coleções, aplicando fortemente os pilares da Programação Orientada a Objetos (POO).',
      en: 'Application focused on integration with external services, JSON data handling, and collection manipulation, heavily applying Object-Oriented Programming (OOP) pillars.'
    },
    image: './images/projects/pokemon.png',
    tags: ['Java', 'REST API', 'Lógica de Programação', 'POO'],
    category: 'fullstack',
    github: 'https://github.com/Eliane-orlandin/PokemonTCG',
    live: 'https://github.com/Eliane-orlandin/PokemonTCG',
    linkedin: 'https://www.linkedin.com/posts/elianeorlandindocarmo_java-desenvolvimentodesoftware-inteligenciaartificial-activity-7443356422232395776-Fzui?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD0LDY0BTscNh-hCWLocy0MLH1c7x0AvJhw'
  },
  {
    id: 2,
    title: 'Análise de Dados - PrograMaria',
    description: {
      pt: 'Projeto desenvolvido durante o Bootcamp IA e Dados da PrograMaria, focado na manipulação, estruturação e extração de insights a partir de conjuntos de dados.',
      en: 'Project developed during the PrograMaria IA & Data Bootcamp, focused on data manipulation, structuring, and insight extraction from datasets.'
    },
    image: './images/projects/programaria.png',
    tags: ['Python', 'Análise de Dados', 'Inteligência Artificial'],
    category: 'fullstack',
    github: 'https://github.com/Eliane-orlandin/programaria',
    live: 'https://github.com/Eliane-orlandin/programaria',
    linkedin: 'https://www.linkedin.com/posts/elianeorlandindocarmo_programaria-diversidadenatecnologia-anaerlisededados-activity-7328934663513624577-6B I?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD0LDY0BTscNh-hCWLocy0MLH1c7x0AvJhw'
  },
  {
    id: 3,
    title: 'Blog da Li',
    description: {
      pt: 'Um blog profissional e portfólio desenvolvido com foco em performance e criação de conteúdo utilizando o framework Astro, com postagens gerenciadas via Markdown e versionamento estruturado.',
      en: 'A professional blog and portfolio developed with a focus on performance and content creation using the Astro framework, with posts managed via Markdown and structured versioning.'
    },
    image: './images/projects/blog.png',
    tags: ['Astro', 'HTML/CSS', 'Frontend', 'Markdown'],
    category: 'frontend',
    github: 'https://github.com/Eliane-orlandin/eliane-orlandin.github.io',
    live: 'https://github.com/Eliane-orlandin/eliane-orlandin.github.io',
    linkedin: 'https://www.linkedin.com/posts/elianeorlandindocarmo_tecnologia-desenvolvimentoweb-inteligenciaartificial-activity-7443779679171379201-ITjO?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD0LDY0BTscNh-hCWLocy0MLH1c7x0AvJhw',
    imageAlign: 'top'
  }
];
