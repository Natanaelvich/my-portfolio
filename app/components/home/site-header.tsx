import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/app/components/svg-icon";
import { headerNavLinks } from "@/content/profile";

export function SiteHeader() {
  return (
    <header className="header header--on-dark">
      <nav className="nav">
        <Link href="/" className="nav-brand">
          <Image
            src="/profile-photo.jpeg"
            alt="Natanael Lima"
            width={44}
            height={44}
            className="nav-brand-avatar"
          />
          <span className="nav-brand-name">Natanael Lima</span>
        </Link>
        <ul className="nav-menu">
          {headerNavLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
          <li>
            <a
              href="/natan-cv.pdf"
              download="Natanael-Silva-Lima-CV.pdf"
              className="btn-cv"
            >
              <Icon name="fas fa-download" /> Download CV
            </a>
          </li>
        </ul>
        <button
          className="nav-toggle"
          aria-label="Menu de navegação"
          aria-expanded="false"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
