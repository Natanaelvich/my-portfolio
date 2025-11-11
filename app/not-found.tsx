export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-400 via-indigo-500 to-purple-500 px-6">
      <div className="max-w-xl rounded-3xl bg-white/10 p-10 text-center text-white shadow-2xl backdrop-blur-md">
        <h1 className="text-8xl font-extrabold tracking-tight drop-shadow-lg lg:text-9xl">
          404
        </h1>
        <h2 className="mt-6 text-2xl font-semibold">Página não encontrada</h2>
        <p className="mt-4 text-lg text-white/80">
          Ops! Parece que a página que você está procurando não existe ou foi movida.
          Volte ao portfólio e continue explorando.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-indigo-600 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <i className="fas fa-home" aria-hidden="true" />
            Voltar ao Início
          </a>
          <a
            href="/curriculo"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-white hover:text-indigo-600"
          >
            <i className="fas fa-file-alt" aria-hidden="true" />
            Ver Currículo
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/20 pt-6 text-sm text-white/80">
          <a href="/sitemap" className="hover:text-white">
            Mapa do Site
          </a>
          <a href="/#contact" className="hover:text-white">
            Contato
          </a>
          <a
            href="https://linkedin.com/in/natanaelvich"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

