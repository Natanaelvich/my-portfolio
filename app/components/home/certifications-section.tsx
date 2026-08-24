import { Icon } from "@/app/components/svg-icon";
import { certifications } from "@/content/extras";

export function CertificationsSection() {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certificações & Formação</h2>
        <div className="certifications-grid">
          {certifications.map(({ title, issuer, year, url }) => (
            <div className="certification-card" key={`${title}-${year}`}>
              <Icon name="fas fa-certificate" className="certification-icon" />
              <h3>{title}</h3>
              <p>
                {issuer} • {year}
              </p>
              {url && (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  Ver credencial
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
