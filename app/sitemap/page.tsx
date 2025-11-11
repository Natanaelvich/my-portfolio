import type { Metadata } from "next";

const lastUpdated = "2025-11-02";

const mainPages = [
  { href: "/", label: "Página Inicial", icon: "fas fa-arrow-right" },
  { href: "/curriculo", label: "Currículo Profissional", icon: "fas fa-arrow-right" },
];

const portfolioSections = [
  { href: "/#about", label: "Sobre Mim" },
  { href: "/#experience", label: "Experiência Profissional" },
  { href: "/#skills", label: "Habilidades Técnicas" },
  { href: "/#projects", label: "Projetos Profissionais" },
  { href: "/#personal-projects", label: "Projetos Pessoais" },
  { href: "/#contact", label: "Contato" },
];

const externalLinks = [
  {
    href: "https://linkedin.com/in/natanaelvich",
    label: "LinkedIn",
    icon: "fab fa-linkedin",
  },
  {
    href: "https://github.com/natanaelvich",
    label: "GitHub",
    icon: "fab fa-github",
  },
  {
    href: "https://www.solunorde.com.br/",
    label: "Solunorde",
    icon: "fas fa-building",
  },
  {
    href: "https://solunorde.com.br/sip-by-sip/",
    label: "Gole A Gole",
    icon: "fas fa-tint",
  },
  {
    href: "https://solunorde.com.br/habitup/",
    label: "HabitUp",
    icon: "fas fa-chart-line",
  },
  {
    href: "https://www.servicolocalapp.com.br/",
    label: "Serviço Local",
    icon: "fas fa-map-marker-alt",
  },
  {
    href: "https://www.contaliservicoscontabeis.com.br/",
    label: "Contali",
    icon: "fas fa-calculator",
  },
];

const resources = [
  { href: "/sitemap.xml", label: "Sitemap XML", icon: "fas fa-sitemap" },
  { href: "/robots.txt", label: "Robots.txt", icon: "fas fa-robot" },
];

export const metadata: Metadata = {
  title: "Sitemap - Natanael Silva Lima | Portfólio",
  description:
    "Mapa do site do portfólio de Natanael Silva Lima - explore todas as páginas e seções disponíveis.",
  alternates: {
    canonical: "https://www.natanaelsilvalima.dev.br/sitemap",
  },
};

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-slate-100 py-16">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white px-6 py-12 shadow-xl sm:px-10">
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Mapa do Site</h1>
          <p className="mt-3 text-lg text-slate-600">
            Navegue facilmente por todas as seções do portfólio
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600">
            <i className="fas fa-clock" aria-hidden="true" />
            Última atualização: {lastUpdated}
          </div>
        </header>

        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-indigo-600">
            <i className="fas fa-home" aria-hidden="true" />
            Páginas Principais
          </h2>
          <ul className="mt-4 space-y-3">
            {mainPages.map(({ href, label, icon }) => (
              <li key={href}>
                <a
                  href={href}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-slate-700 transition hover:-translate-x-1 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  <i className={`${icon} text-indigo-500`} aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-indigo-600">
            <i className="fas fa-user" aria-hidden="true" />
            Seções do Portfólio
          </h2>
          <ul className="mt-4 space-y-3">
            {portfolioSections.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-slate-700 transition hover:-translate-x-1 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  <i className="fas fa-arrow-right text-indigo-500" aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-indigo-600">
            <i className="fas fa-external-link-alt" aria-hidden="true" />
            Links Externos
          </h2>
          <ul className="mt-4 space-y-3">
            {externalLinks.map(({ href, label, icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-slate-700 transition hover:-translate-x-1 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  <i className={`${icon} text-indigo-500`} aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="flex items-center gap-2 text-xl font-semibold text-indigo-600">
            <i className="fas fa-cog" aria-hidden="true" />
            Recursos Técnicos
          </h2>
          <ul className="mt-4 space-y-3">
            {resources.map(({ href, label, icon }) => (
              <li key={href}>
                <a
                  href={href}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-slate-700 transition hover:-translate-x-1 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  <i className={`${icon} text-indigo-500`} aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700"
          >
            <i className="fas fa-arrow-left" aria-hidden="true" />
            Voltar ao Início
          </a>
        </div>
      </div>
    </div>
  );
}

