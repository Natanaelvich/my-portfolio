import { Icon } from "@/app/components/svg-icon";
import { footerLinks, footerSocialLinks, siteConfig } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <p>&copy; 2026 {siteConfig.name}. Todos os direitos reservados.</p>
            <div className="footer-social">
              {footerSocialLinks.map(({ href, icon, ariaLabel }) => (
                <a
                  key={icon}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                >
                  <Icon name={icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="footer-links">
            {footerLinks.map(({ href, label }) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
