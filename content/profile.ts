export const siteConfig = {
  name: "Natanael Silva Lima",
  shortName: "Natanael Lima",
  title: "Full Stack Tech Lead",
  heroTitle: "Construo produtos digitais que",
  heroTitleAccent: "chegam à produção.",
  tagline:
    "Full Stack Tech Lead especializado em React, React Native, Node.js e AI Agents.",
  heroRole: {
    title: "Tech Lead @",
    company: "Grupo Abril",
    description:
      "Lidero equipes técnicas e construo soluções escaláveis em produção.",
  },
  experienceSince: 2020,
  email: "contato@solunorde.com.br",
  telephone: "+5599981744603",
  whatsapp: {
    display: "(99) 98174-4603",
    href: "https://wa.me/5599981744603",
  },
  linkedin: "https://linkedin.com/in/natanaelvich",
  github: "https://github.com/natanaelvich",
  location: "Timbiras, MA • Remoto",
  domain: "https://www.natanaelsilvalima.dev.br",
} as const;

export const siteDescription = `Full Stack Tech Lead especializado em React, React Native, Node.js e AI Agents. Desde ${siteConfig.experienceSince} liderando equipes e desenvolvendo aplicações escaláveis.`;

export const professionalSummary = `Full Stack Tech Lead com experiência desde ${siteConfig.experienceSince} em construção e liderança de sistemas web e mobile em escala.
Atuação forte em definição de arquitetura, tomada de decisões técnicas, CI/CD, observabilidade e integração com cloud.
Experiência liderando times e entregando produtos críticos em produção, utilizando Node.js, React, React Native e soluções baseadas em IA.`;

export const availability = {
  workMode: "Remoto (Brasil)",
  stackFocus: ["React Native", "Node.js", "TypeScript", "AI Agents"],
  responseTime: "Resposta em até 24 horas",
} as const;

export const headerNavLinks = [
  { href: "#home", label: "Início" },
  { href: "#about", label: "Sobre" },
  { href: "#experience", label: "Experiência" },
  { href: "#projects", label: "Projetos" },
  { href: "#ai-projects", label: "IA" },
  { href: "#contact", label: "Contato" },
  { href: "/blog", label: "Blog" },
] as const;

export const navLinks = [
  ...headerNavLinks,
  { href: "#skills", label: "Habilidades" },
  { href: "#open-source", label: "Open Source" },
  { href: "#certifications", label: "Certificações" },
  { href: "/curriculo", label: "Currículo" },
] as const;

export const heroTechStack = [
  { icon: "fab fa-react", label: "React", accent: "#61DAFB" },
  { icon: "fab fa-react", label: "React Native", accent: "#38bdf8" },
  { icon: "fab fa-node-js", label: "Node.js", accent: "#68A063" },
  { icon: "fas fa-robot", label: "AI Agents", accent: "#a855f7" },
] as const;

export const heroStats = [
  {
    icon: "fas fa-cube",
    value: "6",
    label: "apps publicados nas lojas",
    accent: "#a855f7",
  },
  {
    icon: "fas fa-users",
    value: "Desde 2020",
    label: "desenvolvendo produtos digitais",
    accent: "#eab308",
  },
  {
    icon: "fas fa-globe",
    value: "Tech Lead",
    label: "no Grupo Abril",
    accent: "#a855f7",
  },
  {
    icon: "fas fa-map-marker-alt",
    value: "Remote",
    label: "Brasil Timbiras – MA",
    accent: "#c6ff00",
  },
] as const;

export const aboutStats = [
  { value: "2020", label: "Na área desde" },
  { value: "5+", label: "Empresas Atendidas" },
  { value: "3", label: "Posições de Liderança" },
  { value: "8+", label: "Projetos Desenvolvidos" },
] as const;

export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  description: string;
  techs: string[];
  type?: "clt" | "freelance" | "internship";
}

export const experienceEntries: ExperienceEntry[] = [
  {
    title: "Senior Full Stack Engineer & Tech Lead",
    company: "Grupo Abril",
    period: "Out 2023 - Presente",
    type: "clt",
    description:
      "Liderança técnica no desenvolvimento de aplicativos, sites e serviços em produção. Implementação de monitoramento ativo e deploy automatizado para App Store e Google Play.",
    techs: ["React Native", "Node.js", "Google Cloud", "AI Agents"],
  },
  {
    title: "Senior Full Stack Engineer & Tech Lead",
    company: "COAMO Agroindustrial",
    period: "Jul 2022 - Out 2023",
    type: "clt",
    description:
      "Desenvolvimento de aplicativos mobile e sistemas web para o setor agroindustrial. Integração com Azure, criação de pipelines CI/CD e mentoria de desenvolvedores juniores.",
    techs: ["React Native", "Node.js", "Azure", "CI/CD"],
  },
  {
    title: "Senior Full Stack Engineer & Tech Lead",
    company: "BNE - Banco Nacional de Empregos",
    period: "Abr 2021 - Mar 2023",
    type: "clt",
    description:
      "Atuação como Tech Lead, definindo arquitetura front-end e mentoria de desenvolvedores. Desenvolvimento de plataforma web e mobile para gestão de documentos.",
    techs: ["ReactJS", "React Native", "Azure", "CI/CD"],
  },
  {
    title: "Full Stack Developer",
    company: "Ideia Soluções em Sistemas",
    period: "Jun 2020 - Fev 2022",
    type: "clt",
    description:
      "Desenvolvimento de aplicativos mobile e sistemas web para o setor imobiliário. Criação de portais imobiliários, dashboards administrativos e aplicativos mobile integrados.",
    techs: ["ReactJS", "React Native", "PHP", "MySQL"],
  },
  {
    title: "Estagiário Frontend Developer",
    company: "CredVip",
    period: "Mar 2020 - Jul 2020",
    type: "internship",
    description:
      "Desenvolvimento de aplicação web de gerenciamento de tarefas com VueJS. Colaboração em UI/UX e implementação de componentes dinâmicos.",
    techs: ["VueJS", "PHP", "MySQL", "Git"],
  },
];

export const freelancerEntries: ExperienceEntry[] = [
  {
    title: "Desenvolvedor React Native (Freelancer)",
    company: "Control Tracker",
    period: "Nov 2020 - Jul 2023",
    type: "freelance",
    description:
      "Desenvolvimento de aplicativos de rastreamento e gerenciamento de veículos com geolocalização em tempo real e mapas interativos.",
    techs: ["React Native", "Geolocalização", "Mapas", "Push Notifications"],
  },
  {
    title: "Desenvolvedor React Native (Freelancer)",
    company: "Agroadb",
    period: "2021 - 2022",
    type: "freelance",
    description:
      "Aplicativo mobile para mapeamento de grandes fazendas e plantações com mapas interativos e georreferenciamento avançado.",
    techs: ["React Native", "Mapas", "Geolocalização", "APIs REST"],
  },
  {
    title: "Desenvolvedor Full-stack (Freelancer)",
    company: "Mundo Tech",
    period: "Jul 2019 - Dez 2019",
    type: "freelance",
    description:
      "Desenvolvimento de aplicativo mobile e sistema web de controle de estoque para negócio próprio. Sincronização entre app mobile e sistema web.",
    techs: ["ReactJS", "React Native", "Node.js", "ExpressJS"],
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    items: [
      { icon: "fab fa-react", label: "React.js" },
      { icon: "fab fa-react", label: "React Native" },
      { icon: "fab fa-js", label: "JavaScript/TypeScript" },
      { icon: "fab fa-html5", label: "HTML5/CSS3" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: "fab fa-node-js", label: "Node.js" },
      { icon: "fas fa-server", label: "NestJS" },
      { icon: "fas fa-database", label: "PostgreSQL" },
      { icon: "fas fa-code", label: "Express.js" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { icon: "fab fa-google", label: "Google Cloud" },
      { icon: "fab fa-microsoft", label: "Azure" },
      { icon: "fab fa-github", label: "GitHub Actions" },
      { icon: "fas fa-infinity", label: "CI/CD" },
    ],
  },
  {
    title: "AI & Automação",
    items: [
      { icon: "fas fa-robot", label: "AI Agents" },
      { icon: "fas fa-brain", label: "LangChain" },
      { icon: "fas fa-cogs", label: "N8N" },
      { icon: "fas fa-magic", label: "OpenAI API" },
      { icon: "fas fa-search", label: "RAG & Embeddings" },
      { icon: "fas fa-comments", label: "Claude AI" },
    ],
  },
] as const;

export const professionalProjects = [
  {
    image: "/projeto-abril.png",
    alt: "APPS Grupo Abril - Aplicativos Mobile",
    title: "APPS Grupo Abril",
    description:
      "Aplicativos mobile e serviços em produção com monitoramento ativo, alta disponibilidade e deploy automatizado para as lojas.",
    techs: ["React Native", "Node.js", "Google Cloud"],
    metrics: "Apps em produção • Monitoramento ativo",
  },
  {
    image: "/projeto-coamo.png",
    alt: "APP Coamo Frete - Sistema de Gerenciamento de Frotas",
    title: "APP Coamo Frete",
    description:
      "Sistema de gerenciamento de frotas para o setor agroindustrial com integração Azure e monitoramento em tempo real.",
    techs: ["React Native", "Azure Functions", "SQL Database"],
    metrics: "Milhares de usuários • Operações críticas",
  },
  {
    image: "/projeto-ctracker.png",
    alt: "APPS CTracker - Rastreamento de Veículos",
    title: "APPS CTracker",
    description:
      "Aplicativo de rastreamento de veículos com geolocalização em tempo real e mapas interativos.",
    techs: ["React Native", "Geolocalização", "Push Notifications"],
    metrics: "Geolocalização em tempo real",
  },
  {
    image: "/projeto-bne.png",
    alt: "App Floox - Plataforma de Gestão de Documentos",
    title: "App Floox",
    description:
      "Plataforma web e mobile para coleta e gestão de documentos, solucionando dor crítica interna do BNE.",
    techs: ["ReactJS", "React Native", "Azure Repos"],
    metrics: "Entrega do zero à produção",
  },
  {
    image: "/projeto-ideia-ti.webp",
    alt: "APPS Ideia TI - Portais Imobiliários e Dashboards",
    title: "APPS Ideia TI",
    description:
      "Portais imobiliários, dashboards administrativos e aplicativos mobile para o setor imobiliário.",
    techs: ["ReactJS", "React Native", "PHP", "MySQL"],
    metrics: "Solução completa B2B",
  },
  {
    image: "/projeto-bne-site.png",
    alt: "Site BNE - Plataforma Web de Empregos",
    title: "Site BNE",
    description:
      "Plataforma web completa para o Banco Nacional de Empregos, incluindo sistema de gestão de documentos e portal de vagas.",
    techs: ["ReactJS", "React Native", "Azure", "CI/CD"],
    metrics: "CI/CD automatizado • Azure",
  },
  {
    image: "/projeto-ideia-ti-site.png",
    alt: "Site Ideia TI - Portal Imobiliário",
    title: "Site Ideia TI",
    description:
      "Portal web imobiliário com sistema de busca avançada, cadastro de imóveis e área administrativa completa.",
    techs: ["ReactJS", "PHP", "MySQL", "Responsivo"],
    metrics: "Portal responsivo completo",
  },
  {
    image: "/projeto-planup.png",
    alt: "Site PLANUP - Gerenciamento de Tarefas",
    title: "Site PLANUP",
    description:
      "Aplicação web de gerenciamento de tarefas com interface dinâmica e componentes interativos.",
    techs: ["VueJS", "PHP", "MySQL", "Git"],
    metrics: "Gestão de tarefas em equipe",
  },
  {
    image: "/projeto-estoque.png",
    alt: "Sistema de Estoque - App Mobile e Web",
    title: "Sistema de Estoque",
    description:
      "Aplicativo mobile e sistema web de controle de estoque com sincronização entre plataformas.",
    techs: ["ReactJS", "React Native", "Node.js", "ExpressJS"],
    metrics: "Offline-first • Sincronização",
  },
] as const;

export const solunordeApps = [
  {
    image: "/apps/macrobolt.png",
    alt: "Ícone do app Macrobolt",
    title: "Macrobolt",
    description:
      "Contador de calorias e macros com IA: foto do prato, voz ou código de barras.",
    techs: ["IA", "Nutrição", "Mobile"],
    link: { href: "https://www.solunorde.com.br/macrobolt", label: "Ver na Solunorde" },
  },
  {
    image: "/apps/leafkind.png",
    alt: "Ícone do app Leafkind",
    title: "Leafkind",
    description:
      "Identifica plantas por foto, avisa quando regar e diagnostica folhas com IA.",
    techs: ["IA", "Plantas", "Mobile"],
    link: { href: "https://www.solunorde.com.br/leafkind", label: "Ver na Solunorde" },
  },
  {
    image: "/apps/torlyn.png",
    alt: "Ícone do app Torlyn",
    title: "Torlyn",
    description:
      "A foto da ficha de treino vira plano semanal, com registro de séries e coach com IA.",
    techs: ["IA", "Treino", "Mobile"],
    link: { href: "https://www.solunorde.com.br/torlyn", label: "Ver na Solunorde" },
  },
  {
    image: "/apps/sipbysip.png",
    alt: "Ícone do app SipBySip",
    title: "SipBySip",
    description:
      "Lembretes de hidratação personalizados, progresso visual e coach com IA.",
    techs: ["IA", "Hidratação", "Mobile"],
    link: { href: "https://www.solunorde.com.br/sip-by-sip", label: "Ver na Solunorde" },
  },
  {
    image: "/apps/habitup.png",
    alt: "Ícone do app HabitUp",
    title: "HabitUp",
    description:
      "Rastreador de hábitos com coaching motivacional e recomendações por IA.",
    techs: ["IA", "Hábitos", "Mobile"],
    link: { href: "https://www.solunorde.com.br/habitup", label: "Ver na Solunorde" },
  },
  {
    image: "/apps/servicolocal.png",
    alt: "Ícone do app Serviço Local",
    title: "Serviço Local",
    description:
      "Conecta você a profissionais de serviços locais da sua região.",
    techs: ["Serviços locais", "Busca", "Mobile"],
    link: { href: "https://www.servicolocalapp.com.br", label: "Ver o site" },
  },
] as const;

export const personalProjects = [
  {
    image: "/project1.webp",
    alt: "Solunorde - Empresa de Tecnologia",
    title: "Solunorde",
    description:
      "Empresa de tecnologia oferecendo soluções inovadoras em software para impulsionar negócios e transformar visões em resultados excepcionais.",
    techs: ["Desenvolvimento Web", "Apps Mobile", "Consultoria TI", "Cloud & DevOps"],
    link: { href: "https://www.solunorde.com.br/", label: "Visitar Site" },
  },
  {
    image: "/project2.webp",
    alt: "SipBySip - App de Hidratação",
    title: "SipBySip",
    description:
      "App para lembrar de beber água e manter-se hidratado facilmente. Solução mobile inovadora para saúde e bem-estar.",
    techs: ["React Native", "Lembretes", "Hidratação", "Saúde"],
    link: { href: "https://solunorde.com.br/sip-by-sip/", label: "Visitar Site" },
  },
  {
    image: "/project3.webp",
    alt: "HabitUp - Rastreador de Hábitos",
    title: "HabitUp",
    description:
      "Transforme sua vida com o HabitUp: rastreie, desenvolva e celebre seus hábitos diários para maior produtividade.",
    techs: ["React Native", "Rastreamento", "Hábitos", "Produtividade"],
    link: { href: "https://solunorde.com.br/habitup/", label: "Visitar Site" },
  },
  {
    image: "/servico-local-website.png",
    alt: "Serviço Local - Plataforma de Busca",
    title: "Serviço Local",
    description:
      "Encontre e conecte-se com profissionais locais facilmente! Plataforma de busca com avaliações e conexões.",
    techs: ["React Native", "Busca Local", "Avaliações", "Conexão"],
    link: { href: "https://www.servicolocalapp.com.br/", label: "Visitar Site" },
  },
] as const;

export const aiProjects = [
  {
    image: "/ai-resume-analyzer-home.webp",
    alt: "AI Resume Analyzer - Analisador de Currículos com IA",
    title: "AI Resume Analyzer",
    description:
      "Analisador inteligente de currículos com IA: upload de PDF, feedback ATS instantâneo e dicas de melhoria personalizadas.",
    techs: ["React", "Claude AI", "TypeScript", "Tailwind"],
    link: {
      href: "https://github.com/Natanaelvich/ai-resume-analyzer",
      label: "Ver no GitHub",
    },
  },
  {
    image: "/ai-marketplace-home.png",
    alt: "AI Smart Marketplace - E-commerce Inteligente",
    title: "AI Smart Marketplace",
    description:
      "Marketplace inteligente com IA: busca semântica, recomendações personalizadas e assistente virtual para e-commerce.",
    techs: ["Node.js", "TypeScript", "OpenAI", "PostgreSQL"],
    link: {
      href: "https://github.com/Natanaelvich/ai-smart-marketplace",
      label: "Ver no GitHub",
    },
  },
  {
    image: "/ai-ask-recorder-home.png",
    alt: "AI Ask Recorder Live - Sistema de Q&A para Eventos",
    title: "AI Ask Recorder Live",
    description:
      "Sistema full-stack de referência e Q&A para eventos com agentes inteligentes e ranking em tempo real.",
    techs: ["React", "Redis", "TypeScript", "PostgreSQL"],
    link: {
      href: "https://github.com/Natanaelvich/ai-ask-recorder-live_rocketseat-25",
      label: "Ver no GitHub",
    },
  },
] as const;

export const education = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "UniFacema",
    period: "2019 - 2021",
    description:
      "Formação em análise, projeto, desenvolvimento e manutenção de sistemas de informação, com base em técnicas de programação, banco de dados, arquitetura de software e engenharia de software.",
  },
] as const;

export const contactMethods = [
  {
    href: `mailto:${siteConfig.email}`,
    label: "Email",
    value: siteConfig.email,
    icon: "fas fa-envelope",
    className: "email",
    ariaLabel: "Enviar email",
  },
  {
    href: siteConfig.whatsapp.href,
    label: "WhatsApp",
    value: siteConfig.whatsapp.display,
    icon: "fab fa-whatsapp",
    className: "whatsapp",
    ariaLabel: "Abrir WhatsApp",
  },
  {
    href: "https://linkedin.com/in/natanaelvich",
    label: "LinkedIn",
    value: "linkedin.com/in/natanaelvich",
    icon: "fab fa-linkedin",
    className: "linkedin",
    ariaLabel: "Abrir LinkedIn",
  },
  {
    href: "https://github.com/natanaelvich",
    label: "GitHub",
    value: "github.com/natanaelvich",
    icon: "fab fa-github",
    className: "github",
    ariaLabel: "Abrir GitHub",
  },
] as const;

export const footerSocialLinks = [
  {
    href: "https://linkedin.com/in/natanaelvich",
    icon: "fab fa-linkedin",
    ariaLabel: "LinkedIn",
  },
  {
    href: "https://github.com/natanaelvich",
    icon: "fab fa-github",
    ariaLabel: "GitHub",
  },
] as const;

export const footerLinks = [
  { href: "/sitemap", label: "Mapa do Site" },
  { href: "/blog", label: "Blog" },
  { href: "/curriculo", label: "Currículo" },
  { href: "/#contact", label: "Contato" },
] as const;

// Currículo-specific detailed data
export interface ResumeExperience {
  title: string;
  company: string;
  period: string;
  bullets: string[];
  techStack?: string;
}

export const resumeExperiences: ResumeExperience[] = [
  {
    title: "Senior Full Stack Engineer & Tech Lead",
    company: "Grupo Abril",
    period: "Out 2023 - Presente",
    bullets: [
      "Liderança técnica no desenvolvimento de aplicativos e serviços em produção, definindo arquitetura, padrões de código e pipelines de entrega contínua",
      "Implementação de monitoramento ativo e alertas em produção, reduzindo tempo de resposta a incidentes e aumentando a confiabilidade dos sistemas",
      "Deploy automatizado para App Store e Google Play com integração de testes E2E em pipelines CI/CD, garantindo qualidade e agilidade nas entregas",
      "Desenvolvimento de Cloud Functions e AI Agents para otimização de fluxos internos, aumentando eficiência operacional e reduzindo custos de infraestrutura",
    ],
    techStack: "React Native, Node.js, Google Cloud, AI Agents",
  },
  {
    title: "Senior Full Stack Engineer & Tech Lead",
    company: "COAMO Agroindustrial Cooperativa",
    period: "Jul 2022 - Out 2023",
    bullets: [
      "Liderança técnica no desenvolvimento de aplicativos mobile e sistemas web para o setor agroindustrial, atendendo milhares de usuários em operações críticas",
      "Arquitetura e implementação de integração com Azure (Functions, Filas, Bancos de Dados e Repositórios), garantindo escalabilidade e confiabilidade",
      "Criação de pipelines CI/CD no Azure DevOps com deploy automatizado, reduzindo tempo de entrega e aumentando a qualidade do código",
      "Monitoramento ativo e resposta a eventos em produção, mantendo alta disponibilidade e desempenho dos sistemas",
      "Mentoria de desenvolvedores juniores e estagiários, contribuindo para o crescimento técnico da equipe",
    ],
    techStack: "React Native, Node.js, React.js, Azure, SQL Databases",
  },
  {
    title: "Senior Full Stack Engineer & Tech Lead",
    company: "BNE - Banco Nacional de Empregos",
    period: "Abr 2021 - Mar 2023",
    bullets: [
      "Atuação como Tech Lead, definindo arquitetura front-end e mentoria de desenvolvedores, estabelecendo padrões técnicos e cultura de qualidade",
      "Desenvolvimento do zero de plataforma web e mobile para coleta e gestão de documentos, entregando solução completa desde a concepção até a produção",
      "Implantação bem-sucedida com adoção gradual por novos clientes, demonstrando escalabilidade e valor de negócio",
      "Uso de Azure Repositories e pipelines de CI/CD para versionamento e automação, reduzindo erros manuais e aumentando produtividade",
      "Implementação de testes unitários, de integração e E2E, garantindo qualidade e confiabilidade do código em produção",
    ],
    techStack: "ReactJS, React Native, Node.js, Azure Repos, CI/CD",
  },
  {
    title: "Full Stack Developer",
    company: "Ideia Soluções em Sistemas",
    period: "Jun 2020 - Fev 2022",
    bullets: [
      "Desenvolvimento de aplicativos mobile e sistemas web para o setor imobiliário, atendendo necessidades específicas do mercado",
      "Criação de portais imobiliários, dashboards administrativos e aplicativos mobile, oferecendo soluções completas para clientes",
      "Participação em decisões técnicas e melhorias de arquitetura, contribuindo para a evolução e qualidade dos sistemas",
      "Implementação de boas práticas de código, versionamento e automação, estabelecendo base sólida para crescimento técnico",
    ],
    techStack: "ReactJS, React Native, PHP, APIs REST, MySQL, Git",
  },
];

export const resumeFreelancerProjects: ResumeExperience[] = [
  {
    title: "Desenvolvedor React Native (Freelancer)",
    company: "Control Tracker",
    period: "Nov 2020 - Jul 2023",
    bullets: [
      "Desenvolvimento de aplicativos de rastreamento e gerenciamento de veículos, solucionando necessidades críticas de monitoramento em tempo real",
      "Implementação de geolocalização em tempo real, mapas interativos e notificações push, melhorando a experiência do usuário e eficiência operacional",
      "Deploy automatizado para App Store e Google Play, garantindo atualizações frequentes e consistentes",
      "Integração com serviços em nuvem e APIs externas, ampliando funcionalidades e escalabilidade da solução",
    ],
    techStack:
      "React Native, APIs REST, Push Notifications, Mapas, Geolocalização",
  },
  {
    title: "Desenvolvedor React Native (Freelancer)",
    company: "Agroadb",
    period: "2021 - 2022",
    bullets: [
      "Desenvolvimento de aplicativo mobile para mapeamento de grandes fazendas e plantações, permitindo gestão precisa de áreas agrícolas extensas",
      "Implementação de mapas interativos e georreferenciamento avançado para visualização e análise de terrenos agrícolas em larga escala",
      "Arquitetura de solução para processamento e renderização de grandes volumes de dados geográficos, garantindo performance em dispositivos móveis",
      "Integração com APIs de mapeamento e serviços de geolocalização, oferecendo funcionalidades avançadas para planejamento agrícola",
    ],
    techStack:
      "React Native, Mapas, Geolocalização, APIs REST, Processamento de Dados Geográficos",
  },
  {
    title: "Desenvolvedor React Native (Freelancer)",
    company: "Mundo Tech",
    period: "2022 - 2023",
    bullets: [
      "Desenvolvimento de aplicativo de controle de estoque offline-first, permitindo operação mesmo sem conectividade e sincronização automática quando online",
      "Arquitetura de solução para gerenciamento de grande volume de produtos, listas extensas e filtros complexos, garantindo performance e usabilidade",
      "Implementação de formulários robustos e validações avançadas, garantindo integridade de dados e experiência do usuário otimizada",
      "Otimização de desempenho para manipulação de grandes datasets localmente, utilizando estratégias de cache e indexação eficiente",
    ],
    techStack:
      "React Native, Offline-first, SQLite, Gerenciamento de Estado, Sincronização de Dados",
  },
];

export const resumeSkillCategories = [
  {
    title: "Backend & Arquitetura",
    skills: [
      "Node.js & Express.js",
      "NestJS",
      "PostgreSQL",
      "REST APIs",
      "Microserviços",
      "Arquitetura de Sistemas",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Google Cloud Platform",
      "Azure (Functions, DevOps)",
      "GitHub Actions",
      "CI/CD Pipelines",
      "Docker",
      "Observabilidade",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React.js & React Native",
      "JavaScript/TypeScript",
      "HTML5/CSS3",
      "Styled-components",
      "Responsive Design",
    ],
  },
  {
    title: "Mobile",
    skills: [
      "React Native",
      "Geolocalização",
      "Push Notifications",
      "Mapas Interativos",
      "Fastlane (CI/CD)",
    ],
  },
  {
    title: "AI & Automação",
    skills: [
      "AI Agents",
      "LangChain",
      "OpenAI API",
      "N8N",
      "Automação de Processos",
    ],
  },
  {
    title: "Ferramentas & Metodologias",
    skills: ["Git & GitHub", "JIRA", "Scrum", "Testes (Jest, Cypress)", "Clean Code"],
  },
] as const;

export const resumePersonalProjects = personalProjects.map(
  ({ title, description, techs, link }) => ({
    title,
    description,
    techStack: techs.join(" • "),
    link,
  })
);
