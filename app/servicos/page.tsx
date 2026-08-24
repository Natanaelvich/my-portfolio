import type { Metadata } from "next";
import Link from "next/link";
import { schedulingUrl } from "@/content/extras";
import { siteConfig } from "@/content/profile";
import { Icon } from "@/app/components/svg-icon";

export const metadata: Metadata = {
  title: `Serviços - Solunorde | ${siteConfig.name}`,
  description:
    "Consultoria em desenvolvimento web, apps mobile, cloud e soluções com IA pela Solunorde.",
  alternates: { canonical: `${siteConfig.domain}/servicos` },
};

const services = [
  {
    title: "Apps Mobile",
    description:
      "React Native, offline-first, geolocalização, push notifications e publicação nas lojas.",
    icon: "fas fa-mobile-alt",
  },
  {
    title: "Desenvolvimento Web",
    description:
      "Portais, dashboards e APIs com React, Node.js, TypeScript e arquitetura escalável.",
    icon: "fas fa-code",
  },
  {
    title: "Cloud & DevOps",
    description:
      "CI/CD, Google Cloud, Azure, monitoramento e deploy automatizado.",
    icon: "fas fa-server",
  },
  {
    title: "AI & Automação",
    description:
      "Agentes inteligentes, RAG, integrações com OpenAI/Claude e automação de processos.",
    icon: "fas fa-robot",
  },
];

export default function ServicosPage() {
  return (
    <div className="servicos-page">
      <div className="container servicos-container">
        <header className="servicos-header">
          <Link href="/" className="blog-back-link">
            <Icon name="fas fa-arrow-left" /> Voltar ao portfólio
          </Link>
          <h1>Serviços — Solunorde</h1>
          <p>
            Consultoria e desenvolvimento sob medida para transformar ideias em
            produtos digitais de alta qualidade.
          </p>
        </header>

        <div className="servicos-grid">
          {services.map(({ title, description, icon }) => (
            <div className="servicos-card" key={title}>
              <Icon name={icon} className="servicos-icon" />
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          ))}
        </div>

        <div className="servicos-cta">
          <h2>Vamos conversar sobre seu projeto?</h2>
          <p>Atendimento remoto para empresas em todo o Brasil.</p>
          <div className="hero-buttons">
            <a
              href={schedulingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Icon name="fas fa-calendar-check" /> Agendar conversa
            </a>
            <Link href="/#contact" className="btn btn-secondary">
              Enviar mensagem
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
