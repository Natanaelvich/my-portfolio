import { openSourceProjects } from "@/content/extras";

export function OpenSourceSection() {
  return (
    <section id="open-source" className="open-source">
      <div className="container">
        <h2 className="section-title">Open Source</h2>
        <div className="opensource-grid">
          {openSourceProjects.map(({ title, description, url, techs }) => (
            <div className="opensource-card" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="tech-tags">
                {techs.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Ver no GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
