import { Icon } from "@/app/components/svg-icon";
import { schedulingUrl } from "@/content/extras";
import { availability } from "@/content/profile";

export function AvailabilitySection() {
  return (
    <section id="availability" className="availability">
      <div className="container">
        <h2 className="section-title">Disponibilidade</h2>
        <div className="availability-grid">
          <div className="availability-card">
            <h3>Status</h3>
            <p>{availability.status}</p>
          </div>
          <div className="availability-card">
            <h3>Modalidade</h3>
            <p>{availability.workMode}</p>
          </div>
          <div className="availability-card">
            <h3>Contrato</h3>
            <p>{availability.contractTypes.join(" ou ")}</p>
          </div>
          <div className="availability-card">
            <h3>Vagas de interesse</h3>
            <div className="tech-tags">
              {availability.targetRoles.map((role) => (
                <span key={role}>{role}</span>
              ))}
            </div>
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
            <h3>Agendar conversa</h3>
            <a
              href={schedulingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Icon name="fas fa-calendar-check" /> Marcar horário
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
