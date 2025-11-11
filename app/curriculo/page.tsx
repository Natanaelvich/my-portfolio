/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import "./curriculo.css";
import { PrintButton } from "./print-button";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  bullets: string[];
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

interface CertificationItem {
  title: string;
  provider: string;
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

const professionalSummary = `Tech Lead e Desenvolvedor Fullstack com mais de 7 anos de experiência em desenvolvimento de software,
especializado em React, React Native e Node.js. Liderança técnica em equipes de desenvolvimento, implementação de arquiteturas escaláveis
e desenvolvimento de aplicações mobile-first que atendem milhões de usuários. Experiência em monitoramento de sistemas, CI/CD e integração
com serviços em nuvem.`;

const experiences: ExperienceItem[] = [
  {
    title: "Desenvolvedor Fullstack & Tech Lead",
    company: "Grupo Abril",
    period: "Out 2023 - Presente",
    bullets: [
      "Liderança técnica no desenvolvimento de aplicativos, sites e serviços que atendem milhões de usuários",
      "Implementação de monitoramento ativo e tomada de decisão em tempo real, garantindo alta disponibilidade",
      "Deploy automatizado para App Store e Google Play com integração de testes E2E em pipelines CI/CD",
      "Desenvolvimento de Cloud Functions na Google Cloud e AI Agents para otimização de fluxos internos",
      "Stack: React Native, Node.js, Google Cloud, AI Agents",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "COAMO Agroindustrial Cooperativa",
    period: "Jul 2022 - Out 2023",
    bullets: [
      "Desenvolvimento de aplicativos mobile e sistemas web para o setor agroindustrial",
      "Integração com Azure (Functions, Filas, Bancos de Dados e Repositórios)",
      "Criação de pipelines CI/CD no Azure DevOps com deploy automatizado",
      "Monitoramento ativo e resposta a eventos em produção",
      "Mentoria de desenvolvedores juniores e estagiários",
      "Stack: React Native, Node.js, React.js, Azure, SQL Databases",
    ],
  },
  {
    title: "Frontend Developer React Native",
    company: "Control Tracker (Freelancer)",
    period: "Nov 2020 - Jul 2023",
    bullets: [
      "Desenvolvimento de aplicativos de rastreamento e gerenciamento de veículos",
      "Implementação de geolocalização em tempo real, mapas interativos e notificações push",
      "Deploy automatizado para App Store e Google Play",
      "Integração com serviços em nuvem e APIs externas",
      "Stack: React Native, APIs REST, Push Notifications, Mapas, Geolocalização",
    ],
  },
  {
    title: "Tech Lead Frontend",
    company: "BNE - Banco Nacional de Empregos",
    period: "Abr 2021 - Mar 2023",
    bullets: [
      "Atuação como Tech Lead, definindo arquitetura front-end e mentoria de desenvolvedores",
      "Desenvolvimento do zero de plataforma web e mobile para coleta e gestão de documentos",
      "Implantação bem-sucedida com adoção gradual por novos clientes",
      "Uso de Azure Repositories e pipelines de CI/CD para versionamento e automação",
      "Implementação de testes unitários, de integração e E2E",
      "Stack: ReactJS, React Native, Node.js, Azure Repos, CI/CD",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Ideia Soluções em Sistemas",
    period: "Jun 2020 - Fev 2022",
    bullets: [
      "Desenvolvimento de aplicativos mobile e sistemas web para o setor imobiliário",
      "Criação de portais imobiliários, dashboards administrativos e aplicativos mobile",
      "Participação em decisões técnicas e melhorias de arquitetura",
      "Implementação de boas práticas de código, versionamento e automação",
      "Stack: ReactJS, React Native, PHP, APIs REST, MySQL, Git",
    ],
  },
];

const skillCategories: SkillCategory[] = [
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
    title: "Backend",
    skills: [
      "Node.js & Express.js",
      "NestJS",
      "PostgreSQL",
      "REST APIs",
      "Microserviços",
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
    title: "Cloud & DevOps",
    skills: [
      "Google Cloud Platform",
      "Azure (Functions, DevOps)",
      "GitHub Actions",
      "CI/CD Pipelines",
      "Docker",
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

const professionalProjects: ProjectItem[] = [
  {
    title: "APPS Grupo Abril",
    description:
      "Aplicativos mobile e serviços que atendem milhões de usuários com monitoramento ativo e alta disponibilidade.",
    techStack: "React Native • Node.js • Google Cloud • AI Agents",
  },
  {
    title: "APP Coamo Frete",
    description:
      "Sistema de gerenciamento de frotas para o setor agroindustrial com integração Azure e monitoramento em tempo real.",
    techStack: "React Native • Azure Functions • SQL Database • CI/CD",
  },
  {
    title: "APPS CTracker",
    description:
      "Aplicativo de rastreamento de veículos com geolocalização em tempo real e mapas interativos.",
    techStack: "React Native • Geolocalização • Push Notifications • APIs REST",
  },
  {
    title: "App Floox",
    description:
      "Plataforma web e mobile para coleta e gestão de documentos, solucionando dor crítica interna do BNE.",
    techStack: "ReactJS • React Native • Azure Repos • CI/CD",
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
  {
    title: "Contali",
    description:
      "Contabilidade eficiente pelo WhatsApp. Facilite a gestão contábil da sua empresa com suporte exclusivo via WhatsApp.",
    techStack: "Website • WhatsApp • Contabilidade • Gestão Fiscal",
    link: {
      href: "https://www.contaliservicoscontabeis.com.br/",
      label: "Visitar Site",
    },
  },
];

const education: EducationItem[] = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "UniFacema",
    period: "2019 - 2021",
    description: "Foco em Desenvolvimento de Aplicativos Móveis",
  },
];

const certifications: CertificationItem[] = [
  {
    title: "Agents de IA com Python e LangChain",
    provider: "Asimov Academy • 2025",
    description: "Node.js • TypeScript • Inteligência Artificial",
  },
  {
    title: "Fundamentos do Node.js",
    provider: "Rocketseat • 2024",
    description: "Node.js • Streams • HTTP • APIs",
  },
  {
    title: "ReactJS",
    provider: "Rocketseat • 2024",
    description: "React.js • HTML5 • CSS • Boas Práticas",
  },
  {
    title: "Pipelines CI/CD com GitHub Actions",
    provider: "Rocketseat • 2024",
    description: "GitHub Actions • CI/CD • Automação",
  },
  {
    title: "IA para Devs",
    provider: "Rocketseat • 2025",
    description: "Inteligência Artificial • Desenvolvimento de Chatbots",
  },
  {
    title: "Clean Code",
    provider: "Rocketseat • 2024",
    description: "Design de Sistemas • Arquitetura • Boas Práticas",
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
          <h3>Resumo Executivo</h3>
          <p>{professionalSummary}</p>
        </section>

        <section className="resume-experience">
          <h3>Experiência Profissional</h3>
          {experiences.map(({ title, company, period, bullets }) => (
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

        <section className="resume-projects">
          <h3>Projetos Profissionais</h3>
          {professionalProjects.map(({ title, description, techStack }) => (
            <div className="resume-project-item" key={title}>
              <h4>{title}</h4>
              <p>{description}</p>
              <span className="resume-tech-stack">{techStack}</span>
            </div>
          ))}
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

        <section className="resume-certifications">
          <h3>Certificações &amp; Cursos</h3>
          <div className="resume-certifications-grid">
            {certifications.map(({ title, provider, description }) => (
              <div className="resume-certification-item" key={title}>
                <h4>{title}</h4>
                <span>{provider}</span>
                <p className="resume-certification-description">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="resume-footer">
          <p>
            Portfólio online:{" "}
            <a href="https://natanaelsilvalima.dev.br" target="_blank" rel="noopener noreferrer">
              natanaelsilvalima.dev.br
            </a>{" "}
            | Última atualização: Agosto 2025
          </p>
        </footer>
      </div>

      <PrintButton />
    </div>
  );
}

