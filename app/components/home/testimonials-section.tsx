import { Icon } from "@/app/components/svg-icon";
import {
  impactHighlights,
  linkedInRecommendationsUrl,
} from "@/content/extras";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">Impacto & Recomendações</h2>
        <p className="section-subtitle">
          Resultados verificáveis em empresas onde atuei. Recomendações pessoais
          disponíveis no LinkedIn.
        </p>

        <div className="impact-grid">
          {impactHighlights.map(({ company, context, outcome }) => (
            <article className="impact-card" key={company}>
              <div className="impact-card-header">
                <Icon name="fas fa-building" className="impact-icon" />
                <div>
                  <h3>{company}</h3>
                  <p className="impact-context">{context}</p>
                </div>
              </div>
              <p className="impact-outcome">{outcome}</p>
            </article>
          ))}
        </div>

        <div className="testimonials-cta testimonials-cta--prominent">
          <Icon name="fab fa-linkedin" />
          <div>
            <p>
              Recomendações de gestores e colegas de trabalho estão no meu perfil
              do LinkedIn.
            </p>
            <a
              href={linkedInRecommendationsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Ver recomendações no LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
