import { aboutStats, education } from "@/content/profile";

export function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Sou um Tech Lead e Desenvolvedor Fullstack com mais de 7 anos de
              experiência em desenvolvimento de software. Atualmente trabalho no
              Grupo Abril, liderando o desenvolvimento de aplicativos e serviços
              que atendem milhões de usuários.
            </p>
            <p>
              Minha especialidade está em criar soluções mobile-first com React Native,
              desenvolvendo aplicações offline-first, integrando mapas e câmeras, e
              implementando sistemas de geolocalização em tempo real.
            </p>
            <p>
              Como líder técnico, foco em mentoria de desenvolvedores, definição de
              arquiteturas escaláveis e implementação de boas práticas de
              desenvolvimento.
            </p>
          </div>
          <div className="about-stats">
            {aboutStats.map(({ value, label }) => (
              <div className="stat-item" key={label}>
                <h3>{value}</h3>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="education-block">
          <h3>Formação Acadêmica</h3>
          {education.map(({ title, institution, period, description }) => (
            <div className="education-item" key={title}>
              <h4>{title}</h4>
              <span className="education-institution">
                {institution} • {period}
              </span>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
