import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  techs: readonly string[] | string[];
  metrics?: string;
  link?: { href: string; label: string };
}

export function ProjectCard({
  image,
  alt,
  title,
  description,
  techs,
  metrics,
  link,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-image">
        <Image
          src={image}
          alt={alt}
          width={640}
          height={400}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="project-card-image"
        />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {metrics && <p className="project-metrics">{metrics}</p>}
        <div className="project-tech">
          {techs.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        {link &&
          (link.href.startsWith("http") ? (
            <div className="project-links">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {link.label}
              </a>
            </div>
          ) : (
            <div className="project-links">
              <Link href={link.href} className="btn btn-primary">
                {link.label}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
