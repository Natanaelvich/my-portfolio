import ContactForm from "@/app/components/contact-form";
import { Icon } from "@/app/components/svg-icon";
import { contactMethods } from "@/content/profile";

export function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="contact-subtitle">
            Estou sempre aberto a novas oportunidades e parcerias interessantes. Vamos
            criar algo incrível juntos!
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Icon name="fas fa-handshake" />
              </div>
              <h3>Vamos Conversar!</h3>
              <p>
                Se você tem um projeto em mente ou gostaria de discutir possibilidades,
                não hesite em entrar em contato. Estou pronto para transformar suas
                ideias em realidade.
              </p>
            </div>
            <div className="contact-methods">
              {contactMethods.map(
                ({ href, label, value, icon, className, ariaLabel }) => (
                  <a
                    key={label}
                    href={href}
                    className="contact-method"
                    aria-label={ariaLabel}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <div className={`contact-method-icon ${className}`}>
                      <Icon name={icon} />
                    </div>
                    <div className="contact-method-content">
                      <span className="contact-method-label">{label}</span>
                      <span className="contact-method-value">{value}</span>
                    </div>
                    <Icon name="fas fa-chevron-right" className="contact-method-arrow" />
                  </a>
                )
              )}
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
