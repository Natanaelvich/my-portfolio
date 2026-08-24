import { Icon } from "@/app/components/svg-icon";
import { availability, heroTechStack, siteConfig } from "@/content/profile";
import type { CSSProperties } from "react";

export function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="open-to-work-badge">
              <Icon name="fas fa-circle" />
              {availability.status}
            </span>
            <h1 className="hero-title">{siteConfig.heroTitle}</h1>
            <p className="hero-subtitle">{siteConfig.tagline}</p>
            <p className="hero-description">
              Transformo ideias em soluções digitais escaláveis, liderando equipes
              técnicas e desenvolvendo aplicações que impactam milhões de usuários.
            </p>
            <div className="hero-highlight-bar">
              <span>React Native</span>
              <span>Node.js</span>
              <span>AI Agents</span>
              <span>Remoto</span>
              <span>Disponível</span>
            </div>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-secondary">
                Ver Projetos
              </a>
              <a
                href="/natan-cv.pdf"
                download="Natanael-Silva-Lima-CV.pdf"
                className="btn btn-cv"
              >
                <Icon name="fas fa-download" /> Download CV
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="tech-stack">
              {heroTechStack.map(({ icon, label, accent }) => (
                <div
                  className="tech-item"
                  key={label}
                  style={{ "--tech-accent": accent } as CSSProperties}
                >
                  <span className="tech-item-icon">
                    <Icon name={icon} />
                  </span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
