import {
  education,
  professionalSummary,
  resumeExperiences,
  resumeFreelancerProjects,
  resumeSkillCategories,
  resumePersonalProjects,
  siteConfig,
} from "@/content/profile";

function section(title: string, lines: string[]): string {
  return [`${title.toUpperCase()}`, "=".repeat(title.length), ...lines, ""].join("\n");
}

export function generateAtsCvText(): string {
  const lines: string[] = [
    siteConfig.name.toUpperCase(),
    siteConfig.title,
    `${siteConfig.email} | ${siteConfig.linkedin.replace("https://", "")} | ${siteConfig.github.replace("https://", "")}`,
    siteConfig.location,
    "",
    section("Resumo Profissional", [professionalSummary.replace(/\n/g, " ")]),
    section(
      "Experiencia Profissional",
      resumeExperiences.flatMap(({ title, company, period, bullets, techStack }) => [
        `${title} — ${company} (${period})`,
        ...bullets.map((bullet) => `- ${bullet}`),
        techStack ? `Tecnologias: ${techStack}` : "",
        "",
      ])
    ),
    section(
      "Projetos Freelancer",
      resumeFreelancerProjects.flatMap(({ title, company, period, bullets, techStack }) => [
        `${title} — ${company} (${period})`,
        ...bullets.map((bullet) => `- ${bullet}`),
        techStack ? `Tecnologias: ${techStack}` : "",
        "",
      ])
    ),
    section(
      "Habilidades Tecnicas",
      resumeSkillCategories.flatMap(({ title, skills }) => [
        `${title}: ${skills.join(", ")}`,
      ])
    ),
    section(
      "Projetos Pessoais",
      resumePersonalProjects.flatMap(({ title, description, techStack, link }) => [
        title,
        description,
        `Tecnologias: ${techStack}`,
        link ? `Link: ${link.href}` : "",
        "",
      ])
    ),
    section(
      "Formacao Academica",
      education.flatMap(({ title, institution, period, description }) => [
        `${title} — ${institution} (${period})`,
        description,
        "",
      ])
    ),
    `Portfolio: ${siteConfig.domain}`,
    `Curriculo web: ${siteConfig.domain}/curriculo`,
  ];

  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}
