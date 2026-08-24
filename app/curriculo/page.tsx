/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import "./curriculo.css";
import { CvDownloadActions } from "./cv-download-actions";
import { Icon } from "@/app/components/svg-icon";
import {
  education,
  professionalSummary,
  resumeExperiences,
  resumeFreelancerProjects,
  resumePersonalProjects,
  resumeSkillCategories,
  siteConfig,
} from "@/content/profile";

export const metadata: Metadata = {
  title: `${siteConfig.name} - Currículo Profissional | ${siteConfig.title}`,
  description: `Currículo completo de ${siteConfig.name} - ${siteConfig.title} com experiência em React, React Native, Node.js e AI Agents.`,
  alternates: {
    canonical: `${siteConfig.domain}/curriculo`,
  },
};

const contactItems = [
  { icon: "fas fa-envelope", value: siteConfig.email },
  { icon: "fab fa-linkedin", value: "linkedin.com/in/natanaelvich" },
  { icon: "fab fa-github", value: "github.com/natanaelvich" },
  { icon: "fas fa-map-marker-alt", value: siteConfig.location },
];

export default function CurriculoPage() {
  return (
    <div className="curriculo-page">
      <div className="curriculo-container">
        <header className="resume-header">
          <div className="resume-header-content">
            <div className="resume-name-role">
              <h1>{siteConfig.name}</h1>
              <h2>{siteConfig.title}</h2>
              <p className="resume-specialties">
                React • React Native • Node.js • AI Agents • Liderança Técnica
              </p>
            </div>
            <div className="resume-contact-info">
              {contactItems.map(({ icon, value }) => (
                <div className="resume-contact-item" key={value}>
                  <Icon name={icon} />
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
          {resumeExperiences.map(({ title, company, period, bullets, techStack }) => (
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
          {resumeFreelancerProjects.map(({ title, company, period, bullets, techStack }) => (
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
            {resumeSkillCategories.map(({ title, skills }) => (
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
          {resumePersonalProjects.map(({ title, description, techStack, link }) => (
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
            <a href={siteConfig.domain} target="_blank" rel="noopener noreferrer">
              natanaelsilvalima.dev.br
            </a>
          </p>
        </footer>
      </div>

      <CvDownloadActions />
    </div>
  );
}
