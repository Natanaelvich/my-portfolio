/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import "./curriculo.css";
import { PrintButton } from "./print-button";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  bullets: string[];
  techStack?: string;
}

interface SkillCategory {
  title: string;
  skills: string[];
}

interface ProjectItem {
  title: string;
  description: string;
  techStack: string;
  link?: { href: string; label: string };
}

interface EducationItem {
  title: string;
  institution: string;
  period: string;
  description: string;
}

export const metadata: Metadata = {
  title:
    "Natanael Silva Lima - Currículo Profissional | Tech Lead & Desenvolvedor Fullstack",
  description:
    "Currículo completo de Natanael Silva Lima - Tech Lead e Desenvolvedor Fullstack com experiência em React, React Native, Node.js e AI Agents.",
  alternates: {
    canonical: "https://www.natanaelsilvalima.dev.br/curriculo",
  },
};

const contactItems = [
  { icon: "fas fa-envelope", value: "taelima1997@gmail.com" },
  { icon: "fab fa-linkedin", value: "linkedin.com/in/natanaelvich" },
  { icon: "fab fa-github", value: "github.com/natanaelvich" },
  { icon: "fas fa-map-marker-alt", value: "Timbiras, MA • Remoto" },
];

const professionalSummary = `Tech Lead e Desenvolvedor Fullstack com mais de 7 anos de experiência em construção e liderança de sistemas web e mobile em escala.
Atuação forte em definição de arquitetura, tomada de decisões técnicas, CI/CD, observabilidade e integração com cloud.
Experiência liderando times e entregando produtos críticos com milhões de usuários, utilizando Node.js, React, React Native e soluções baseadas em IA.`;

const experiences: ExperienceItem[] = [
  {
    title: "Senior Full Stack Engineer & Tech Lead",
    company: "Grupo Abril",
    period: "Out 2023 - Presente",
    bullets: [
      "Liderança técnica no desenvolvimento de aplicativos e serviços com base instalada de milhões de usuários, definindo arquitetura, padrões de código e pipelines de entrega contínua",
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

const freelancerProjects: ExperienceItem[] = [
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
    techStack: "React Native, APIs REST, Push Notifications, Mapas, Geolocalização",
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
    techStack: "React Native, Mapas, Geolocalização, APIs REST, Processamento de Dados Geográficos",
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
    techStack: "React Native, Offline-first, SQLite, Gerenciamento de Estado, Sincronização de Dados",
  },
];

const skillCategories: SkillCategory[] = [
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
];

const personalProjects: ProjectItem[] = [
  {
    title: "Solunorde - Empresa de Tecnologia",
    description:
      "Empresa própria oferecendo soluções inovadoras em software para impulsionar negócios e transformar visões em resultados excepcionais.",
    techStack: "Desenvolvimento Web • Apps Mobile • Consultoria TI • Cloud & DevOps",
    link: { href: "https://www.solunorde.com.br/", label: "Visitar Site" },
  },
  {
    title: "Gole A Gole",
    description:
      "App para lembrar de beber água e manter-se hidratado facilmente. Solução mobile inovadora para saúde e bem-estar.",
    techStack: "React Native • Lembretes • Hidratação • Saúde",
    link: { href: "https://solunorde.com.br/sip-by-sip/", label: "Visitar Site" },
  },
  {
    title: "HabitUp",
    description:
      "Transforme sua vida com o HabitUp: rastreie, desenvolva e celebre seus hábitos diários para maior produtividade.",
    techStack: "React Native • Rastreamento • Hábitos • Produtividade",
    link: { href: "https://solunorde.com.br/habitup/", label: "Visitar Site" },
  },
  {
    title: "Serviço Local",
    description:
      "Encontre e conecte-se com profissionais locais facilmente! Plataforma de busca com avaliações e conexões.",
    techStack: "React Native • Busca Local • Avaliações • Conexão",
    link: { href: "https://www.servicolocalapp.com.br/", label: "Visitar Site" },
  },
];

const education: EducationItem[] = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "UniFacema",
    period: "2019 - 2021",
    description: "Formação em análise, projeto, desenvolvimento e manutenção de sistemas de informação, com base em técnicas de programação, banco de dados, arquitetura de software e engenharia de software.",
  },
];

export default function CurriculoPage() {
  return (
    <div className="curriculo-page">
      <div className="curriculo-container">
        <header className="resume-header">
          <div className="resume-header-content">
            <div className="resume-name-role">
              <h1>Natanael Silva Lima</h1>
              <h2>Tech Lead & Desenvolvedor Fullstack</h2>
              <p className="resume-specialties">
                React • React Native • Node.js • AI Agents • Liderança Técnica
              </p>
            </div>
            <div className="resume-contact-info">
              {contactItems.map(({ icon, value }) => (
                <div className="resume-contact-item" key={value}>
                  <i className={icon} aria-hidden="true" />
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="resume-summary">
          <h3>Resumo Profissional</h3>
          <p>{professionalSummary}</p>
        </section>

        <section className="resume-experience">
          <h3>Experiência Profissional</h3>
          {experiences.map(({ title, company, period, bullets, techStack }) => (
            <div className="resume-experience-item" key={`${title}-${company}`}>
              <div className="resume-experience-header">
                <h4>{title}</h4>
                <span className="resume-company">{company}</span>
                <span className="resume-period">{period}</span>
              </div>
              <ul>
                {bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {techStack && (
                <p className="resume-tech-stack" style={{ marginTop: "0.75rem", fontWeight: 500 }}>
                  <strong>Tecnologias:</strong> {techStack}
                </p>
              )}
            </div>
          ))}
        </section>

        <section className="resume-experience">
          <h3>Projetos Freelancer de Relevância</h3>
          {freelancerProjects.map(({ title, company, period, bullets, techStack }) => (
            <div className="resume-experience-item" key={`${title}-${company}`}>
              <div className="resume-experience-header">
                <h4>{title}</h4>
                <span className="resume-company">{company}</span>
                <span className="resume-period">{period}</span>
              </div>
              <ul>
                {bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {techStack && (
                <p className="resume-tech-stack" style={{ marginTop: "0.75rem", fontWeight: 500 }}>
                  <strong>Tecnologias:</strong> {techStack}
                </p>
              )}
            </div>
          ))}
        </section>

        <section className="resume-skills">
          <h3>Habilidades Técnicas</h3>
          <div className="resume-skills-grid">
            {skillCategories.map(({ title, skills }) => (
              <div className="resume-skill-category" key={title}>
                <h4>{title}</h4>
                <ul>
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-personal-projects">
          <h3>Projetos Pessoais</h3>
          {personalProjects.map(({ title, description, techStack, link }) => (
            <div className="resume-project-item" key={title}>
              <h4>{title}</h4>
              <p>{description}</p>
              <span className="resume-tech-stack">{techStack}</span>
              {link && (
                <div className="resume-project-link">
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="resume-education">
          <h3>Formação Acadêmica</h3>
          {education.map(({ title, institution, period, description }) => (
            <div className="resume-education-item" key={title}>
              <h4>{title}</h4>
              <span className="resume-institution">{institution}</span>
              <span className="resume-period">{period}</span>
              <p>{description}</p>
            </div>
          ))}
        </section>

        <footer className="resume-footer">
          <p>
            Portfólio online:{" "}
            <a href="https://natanaelsilvalima.dev.br" target="_blank" rel="noopener noreferrer">
              natanaelsilvalima.dev.br
            </a>
          </p>
        </footer>
      </div>

      <PrintButton />
    </div>
  );
}

