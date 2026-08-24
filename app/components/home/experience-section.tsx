import { experienceEntries, freelancerEntries } from "@/content/profile";

export function ExperienceSection() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experiência Profissional</h2>
        <div className="timeline">
          {experienceEntries.map(
            ({ title, company, period, description, techs, type }) => (
              <div className="timeline-item" key={`${title}-${company}`}>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{title}</h3>
                    <span className="company">
                      {company}
                      {type === "internship" && " • Estágio"}
                    </span>
                    <span className="period">{period}</span>
                  </div>
                  <p className="timeline-description">{description}</p>
                  <div className="tech-tags">
                    {techs.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <h3 className="subsection-title">Projetos Freelancer</h3>
        <div className="timeline">
          {freelancerEntries.map(
            ({ title, company, period, description, techs }) => (
              <div className="timeline-item" key={`${title}-${company}`}>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{title}</h3>
                    <span className="company">{company}</span>
                    <span className="period">{period}</span>
                  </div>
                  <p className="timeline-description">{description}</p>
                  <div className="tech-tags">
                    {techs.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
