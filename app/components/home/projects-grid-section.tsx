import { ProjectCard } from "@/app/components/project-card";

interface ProjectItem {
  image: string;
  alt: string;
  title: string;
  description: string;
  techs: readonly string[] | string[];
  metrics?: string;
  link?: { href: string; label: string };
}

interface ProjectsGridSectionProps {
  id: string;
  className: string;
  title: string;
  projects: readonly ProjectItem[] | ProjectItem[];
}

export function ProjectsGridSection({
  id,
  className,
  title,
  projects,
}: ProjectsGridSectionProps) {
  return (
    <section id={id} className={className}>
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
