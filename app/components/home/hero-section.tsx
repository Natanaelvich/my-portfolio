import Image from "next/image";
import { Icon } from "@/app/components/svg-icon";
import {
  availability,
  heroStats,
  heroTechStack,
  siteConfig,
} from "@/content/profile";
import type { CSSProperties } from "react";

export function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-copy">
            <div className="hero-intro">
              <span className="open-to-work-badge">
                <Icon name="fas fa-circle" />
                {availability.status}
              </span>
              <h1 className="hero-title">
                {siteConfig.heroTitle}{" "}
                <span className="hero-title-accent">
                  {siteConfig.heroTitleAccent}
                </span>
              </h1>
              <p className="hero-subtitle">{siteConfig.tagline}</p>
              <div className="hero-tech-pills">
                {heroTechStack.map(({ icon, label, accent }) => (
                  <div
                    className="hero-tech-pill"
                    key={label}
                    style={{ "--tech-accent": accent } as CSSProperties}
                  >
                    <span className="hero-tech-pill-icon">
                      <Icon name={icon} />
                    </span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-details">
              <div className="hero-role">
                <div className="hero-role-title">
                  <Icon name="fas fa-briefcase" />
                  <span>
                    {siteConfig.heroRole.title}{" "}
                    <strong>{siteConfig.heroRole.company}</strong>
                  </span>
                </div>
                <p className="hero-role-description">
                  {siteConfig.heroRole.description}
                </p>
              </div>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary-lime btn-with-trailing">
                  <span className="btn-leading" aria-hidden="true">
                    <Icon name="fas fa-paper-plane" />
                  </span>
                  <span className="btn-label">Ver projetos</span>
                  <span className="btn-trailing" aria-hidden="true">
                    <Icon name="fas fa-chevron-right" />
                  </span>
                </a>
                <a
                  href="/natan-cv.pdf"
                  download="Natanael-Silva-Lima-CV.pdf"
                  className="btn btn-outline-lime"
                >
                  <span className="btn-leading" aria-hidden="true">
                    <Icon name="fas fa-download" />
                  </span>
                  <span className="btn-label">Download CV</span>
                </a>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-visual-glow" aria-hidden="true" />
            <Image
              src="/hero-showcase.png"
              alt="Projetos mobile e automação com IA — Medidor de luz, Macrobolt IA e fluxos de AI Agents"
              width={1536}
              height={1024}
              className="hero-showcase-image hero-showcase-image--desktop"
              priority
              sizes="(max-width: 768px) 0px, 55vw"
            />
            <Image
              src="/hero-showcase-mobile.png"
              alt="Projetos mobile — Medidor de luz, Macrobolt IA e automação com IA"
              width={1024}
              height={1536}
              className="hero-showcase-image hero-showcase-image--mobile"
              priority
              sizes="(max-width: 768px) 100vw, 0px"
            />
          </div>
        </div>
        <div className="hero-stats">
          {heroStats.map(({ icon, value, label, accent }) => (
            <div
              className="hero-stat"
              key={label}
              style={{ "--stat-accent": accent } as CSSProperties}
            >
              <span className="hero-stat-icon">
                <Icon name={icon} />
              </span>
              <span className="hero-stat-content">
                <span className="hero-stat-value">{value}</span>
                <span className="hero-stat-label">{label}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
