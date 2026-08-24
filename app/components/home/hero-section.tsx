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
          <div className="hero-text">
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
              <a href="#projects" className="btn btn-primary-lime">
                Ver projetos
                <Icon name="fas fa-chevron-right" />
              </a>
              <a
                href="/natan-cv.pdf"
                download="Natanael-Silva-Lima-CV.pdf"
                className="btn btn-outline-lime"
              >
                <Icon name="fas fa-download" /> Download CV
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-visual-glow" aria-hidden="true" />
            <Image
              src="/hero-showcase.png"
              alt="Projetos mobile e automação com IA — Medidor de luz, Macrobolt IA e fluxos de AI Agents"
              width={1536}
              height={1024}
              className="hero-showcase-image"
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
        </div>
        <div className="hero-stats">
          {heroStats.map(({ icon, text, accent }) => (
            <div
              className="hero-stat"
              key={text}
              style={{ "--stat-accent": accent } as CSSProperties}
            >
              <span className="hero-stat-icon">
                <Icon name={icon} />
              </span>
              <span className="hero-stat-text">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
