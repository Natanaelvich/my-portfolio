export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "react-native-offline-first",
    title: "React Native offline-first: lições de apps em produção",
    excerpt:
      "Como projetar sincronização, cache local e resiliência em apps mobile que não podem parar quando a rede cai.",
    date: "2026-02-10",
    readTime: "6 min",
    tags: ["React Native", "Mobile", "Arquitetura"],
    content: [
      "Apps mobile em setores como agro, logística e mídia precisam funcionar mesmo com conectividade instável. Offline-first não é luxo — é requisito de negócio.",
      "Na prática, combino persistência local (SQLite ou storage estruturado), filas de sincronização e resolução de conflitos simples por timestamp ou versão. O usuário nunca deve perder dados por falta de rede.",
      "Pontos que sempre valido: estado de sync visível, retry exponencial, compressão de payloads e testes em modo avião durante QA. Esses padrões aparecem em projetos como Coamo Frete, Control Tracker e sistemas de estoque.",
      "Para Tech Leads, o ganho vai além da UX: reduz tickets de suporte, melhora métricas de retenção e dá previsibilidade para releases em campo.",
    ],
  },
  {
    slug: "ai-agents-producao",
    title: "AI Agents: do protótipo ao valor real no produto",
    excerpt:
      "RAG, ferramentas e observabilidade — o que aprendi construindo agentes com LangChain, OpenAI e Claude em projetos reais.",
    date: "2026-03-01",
    readTime: "7 min",
    tags: ["AI Agents", "LangChain", "Node.js"],
    content: [
      "Agentes de IA brilham quando resolvem um fluxo específico com contexto confiável — não quando tentam ser chatbots genéricos.",
      "Minha stack preferida: embeddings + retrieval enxuto, ferramentas bem definidas (APIs internas, busca, formulários) e limites claros de custo/latência por requisição.",
      "Nos projetos AI Resume Analyzer, AI Smart Marketplace e AI Ask Recorder Live, o diferencial foi medir qualidade (precisão das respostas, tempo de resposta) e iterar prompts com dados reais.",
      "No Grupo Abril, aplico o mesmo raciocínio para automações internas: começar pequeno, instrumentar, e só então escalar para mais times.",
    ],
  },
  {
    slug: "tech-lead-escala",
    title: "Tech Lead em escala: liderança técnica sem perder velocidade",
    excerpt:
      "Mentoria, padrões, CI/CD e monitoramento — como equilibrar qualidade e entrega em times que atendem milhões de usuários.",
    date: "2026-03-15",
    readTime: "5 min",
    tags: ["Liderança", "CI/CD", "DevOps"],
    content: [
      "Liderança técnica eficaz combina três frentes: arquitetura clara, cultura de qualidade e pipelines que removem atrito do deploy.",
      "Defino padrões mínimos (lint, testes críticos, revisão de PR) e automatizo o resto. Deploy para lojas com Fastlane + testes E2E reduziu surpresas em produção.",
      "Monitoramento ativo e alertas acionáveis valem mais que dashboards bonitos. O time precisa saber o que fazer quando algo quebra — não apenas que quebrou.",
      "Mentoria funciona melhor com exemplos concretos do codebase e pairing em problemas reais, não só com documentos de boas práticas.",
    ],
  },
];

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    issuer: "UniFacema",
    year: "2021",
  },
  {
    title: "AI Ask Recorder Live — Projeto Full-stack com IA",
    issuer: "Rocketseat",
    year: "2025",
    url: "https://github.com/Natanaelvich/ai-ask-recorder-live_rocketseat-25",
  },
];

export interface OpenSourceProject {
  title: string;
  description: string;
  url: string;
  techs: string[];
  stars?: string;
}

export const openSourceProjects: OpenSourceProject[] = [
  {
    title: "my-portfolio",
    description: "Portfólio profissional em Next.js 14 com App Router, TypeScript e formulário seguro.",
    url: "https://github.com/natanaelvich/my-portfolio",
    techs: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "ai-resume-analyzer",
    description: "Analisador de currículos com IA, feedback ATS e dicas personalizadas.",
    url: "https://github.com/Natanaelvich/ai-resume-analyzer",
    techs: ["React", "Claude AI", "TypeScript"],
  },
  {
    title: "ai-smart-marketplace",
    description: "Marketplace com busca semântica, recomendações e assistente virtual.",
    url: "https://github.com/Natanaelvich/ai-smart-marketplace",
    techs: ["Node.js", "OpenAI", "PostgreSQL"],
  },
  {
    title: "ai-ask-recorder-live",
    description: "Sistema de Q&A para eventos com agentes inteligentes e ranking em tempo real.",
    url: "https://github.com/Natanaelvich/ai-ask-recorder-live_rocketseat-25",
    techs: ["React", "Redis", "PostgreSQL"],
  },
];

export const schedulingUrl =
  process.env.NEXT_PUBLIC_SCHEDULING_URL ||
  "https://www.linkedin.com/in/natanaelvich/";

export interface ImpactHighlight {
  company: string;
  context: string;
  outcome: string;
}

export const impactHighlights: ImpactHighlight[] = [
  {
    company: "Grupo Abril",
    context: "Tech Lead · Apps em escala nacional",
    outcome:
      "Liderança técnica em aplicativos com milhões de usuários, deploy automatizado para lojas e monitoramento ativo em produção.",
  },
  {
    company: "COAMO Agroindustrial",
    context: "Tech Lead · Setor agroindustrial",
    outcome:
      "Entrega de apps mobile e sistemas web críticos com integração Azure, pipelines CI/CD e mentoria de desenvolvedores juniores.",
  },
  {
    company: "BNE",
    context: "Tech Lead · Plataforma documental",
    outcome:
      "Desenvolvimento do zero de plataforma web e mobile adotada por novos clientes, com testes E2E e cultura de qualidade.",
  },
];

export const linkedInRecommendationsUrl =
  "https://www.linkedin.com/in/natanaelvich/details/recommendations/";

export interface AiDemoSlide {
  src: string;
  alt: string;
}

export interface AiDemo {
  id: string;
  title: string;
  description: string;
  slides: AiDemoSlide[];
  loomEmbedUrl?: string;
  githubUrl: string;
}

function toLoomEmbedUrl(shareUrl?: string): string | undefined {
  if (!shareUrl) return undefined;
  const id = shareUrl.replace(/\/$/, "").split("/").pop();
  return id ? `https://www.loom.com/embed/${id}` : undefined;
}

export const aiDemos: AiDemo[] = [
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    description: "Upload de PDF, feedback ATS instantâneo e dicas personalizadas com Claude AI.",
    slides: [
      { src: "/ai-resume-analyzer-home.webp", alt: "Tela inicial do AI Resume Analyzer" },
      { src: "/ai-resume-analyzer-upload.webp", alt: "Upload e análise de currículo" },
    ],
    loomEmbedUrl: toLoomEmbedUrl(process.env.NEXT_PUBLIC_DEMO_LOOM_AI_RESUME),
    githubUrl: "https://github.com/Natanaelvich/ai-resume-analyzer",
  },
  {
    id: "ai-smart-marketplace",
    title: "AI Smart Marketplace",
    description: "Busca semântica, recomendações e assistente virtual para e-commerce.",
    slides: [{ src: "/ai-marketplace-home.png", alt: "Interface do AI Smart Marketplace" }],
    loomEmbedUrl: toLoomEmbedUrl(process.env.NEXT_PUBLIC_DEMO_LOOM_AI_MARKETPLACE),
    githubUrl: "https://github.com/Natanaelvich/ai-smart-marketplace",
  },
  {
    id: "ai-ask-recorder",
    title: "AI Ask Recorder Live",
    description: "Q&A para eventos com agentes inteligentes, áudio e ranking em tempo real.",
    slides: [
      { src: "/ai-ask-recorder-ranking.webp", alt: "Ranking de referrals em tempo real" },
    ],
    loomEmbedUrl: toLoomEmbedUrl(process.env.NEXT_PUBLIC_DEMO_LOOM_AI_ASK_RECORDER),
    githubUrl: "https://github.com/Natanaelvich/ai-ask-recorder-live_rocketseat-25",
  },
];

