import {
  aiProjects,
  personalProjects,
  professionalProjects,
} from "@/content/profile";
import { aiDemos } from "@/content/extras";
import { AboutSection } from "./about-section";
import { AiDemosSection } from "./ai-demos-section";
import { AvailabilitySection } from "./availability-section";
import { BlogPreviewSection } from "./blog-preview-section";
import { CertificationsSection } from "./certifications-section";
import { ContactSection } from "./contact-section";
import { ExperienceSection } from "./experience-section";
import { HeroSection } from "./hero-section";
import { OpenSourceSection } from "./open-source-section";
import { PageEffects } from "./page-effects";
import { ProjectsGridSection } from "./projects-grid-section";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { SkillsSection } from "./skills-section";
import { TestimonialsSection } from "./testimonials-section";

export function HomePageContent() {
  return (
    <PageEffects>
      <a href="#main" className="skip-link">
        Pular para conteúdo
      </a>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsGridSection
          id="projects"
          className="projects"
          title="Projetos Profissionais"
          projects={professionalProjects}
        />
        <ProjectsGridSection
          id="personal-projects"
          className="personal-projects"
          title="Projetos Pessoais"
          projects={personalProjects}
        />
        <ProjectsGridSection
          id="ai-projects"
          className="ai-projects"
          title="Projetos de IA & Automação"
          projects={aiProjects}
        />
        <AiDemosSection demos={aiDemos} />
        <OpenSourceSection />
        <CertificationsSection />
        <TestimonialsSection />
        <BlogPreviewSection />
        <AvailabilitySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </PageEffects>
  );
}
