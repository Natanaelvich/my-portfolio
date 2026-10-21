import { Icon } from "@/app/components/svg-icon";
import { schedulingUrl } from "@/content/extras";
import { availability } from "@/content/profile";

export function AvailabilitySection() {
  return (
    <section id="availability" className="availability">
      <div className="container">
        <h2 className="section-title">Como trabalho</h2>
        <div className="availability-grid">
          <div className="availability-card">
            <h3>Modalidade</h3>
            <p>{availability.workMode}</p>
          </div>
          <div className="availability-card">
            <h3>Stack foco</h3>
            <div className="tech-tags">
              {availability.stackFocus.map((stack) => (
                <span key={stack}>{stack}</span>
              ))}
            </div>
          </div>
          <div className="availability-card">
            <h3>Contato direto</h3>
            <a
              href={schedulingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span className="btn-leading" aria-hidden="true">
                <Icon name="fab fa-linkedin" />
              </span>
              <span className="btn-label">Falar no LinkedIn</span>
            </a>
          </div>
          <div className="availability-card">
            <h3>Tempo de resposta</h3>
            <p>{availability.responseTime}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
