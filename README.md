# Natanael Silva Lima – Portfolio (Next.js 14)

Este repositório contém a versão refatorada do portfólio profissional do Natanael Silva Lima construída com **Next.js 14 (App Router)**, **TypeScript** e **Tailwind CSS**. Todo o layout e comportamento do site original em HTML/CSS/JS foi preservado enquanto a base do projeto foi modernizada para facilitar manutenção, deploy e evolução futura.

## Visão Geral

- **Next.js 14 (App Router)** com renderização híbrida e suporte a metadata nativo.
- **Tailwind CSS 3** para utilitários e tokens de design, mantendo as animações e estilos originais através de camadas globais.
- **TypeScript** com checagem estrita para páginas, componentes e scripts.
- **ESLint + Prettier** já configurados (`next/core-web-vitals` + `next/typescript`).
- **Sitemap XML** gerado por script (`generate-sitemap.js`) e metadados Open Graph/Twitter centralizados no `app/layout.tsx`.

## Requisitos

- Node.js 18.18 ou superior (testado com Node 20/22/24)
- npm 9+

## Primeiros Passos

```bash
npm install
npm run dev
```

O comando `dev` inicia o servidor de desenvolvimento na porta `3000`.

### Scripts Disponíveis

| Script            | Descrição                                                                 |
|-------------------|----------------------------------------------------------------------------|
| `npm run dev`     | Inicia o ambiente de desenvolvimento                                      |
| `npm run build`   | Gera o build de produção (`.next`)                                        |
| `npm run start`   | Executa o build de produção                                               |
| `npm run lint`    | Executa o `next lint` (ESLint + regras do Next)                           |
| `npm run format`  | Formata o projeto usando Prettier                                         |

### SEO

Para atualizar o `sitemap.xml` com a data atual:

```bash
node scripts/update-seo.js
```

O script escreve o arquivo em `public/sitemap.xml` e garante que o `robots.txt` referencie o domínio correto.

## Estrutura Principal

```
my-portfolio/
├── app/
│   ├── layout.tsx        # Layout global + metadata e fontes
│   ├── globals.css       # Tailwind + estilos globais derivados do layout original
│   ├── page.tsx          # Página principal (todas as seções do portfólio)
│   ├── not-found.tsx     # Página 404 customizada
│   ├── curriculo/        # Página de currículo (rota /curriculo)
│   └── sitemap/          # Página de sitemap em /sitemap
├── public/               # Ativos estáticos (imagens, PDF, favicons, sitemap.xml)
├── scripts/              # Scripts utilitários (update-seo.js)
├── generate-sitemap.js   # Gerador programático de sitemap XML
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Manutenção do Layout

- O CSS legado foi migrado para `app/globals.css` utilizando Tailwind e camadas customizadas para garantir fidelidade visual.
- Funcionalidades interativas originais (nav mobile, animações, contadores, formulário com mailto, botão de scroll, etc.) foram reimplementadas em `app/page.tsx` usando React e `useEffect`.
- Páginas auxiliares (`curriculo`, `sitemap`, `404`) foram recriadas como rotas Next e usam dados estruturados em arrays para facilitar edição.

## Deploy

O projeto segue o fluxo padrão do Next.js. Para gerar e testar o build de produção:

```bash
npm run build
npm run start
```

Os arquivos hospedados em `public/` continuam servindo assets estáticos (imagens, PDF do currículo, verificação Google, etc.).

## Checklist de Testes Manuais

- [ ] Verificar navegação de todas as seções (header fixo, menu mobile).
- [ ] Validar animações de entrada, contador e botão "voltar ao topo".
- [ ] Testar formulário de contato (abertura do cliente de e-mail com dados preenchidos).
- [ ] Conferir roteamento `/curriculo`, `/sitemap`, rota inexistente (404) e ativos estáticos.
- [ ] Inspecionar metatags (Open Graph / Twitter) e JSON-LD via DevTools.

## Licença

Projeto distribuído sob a licença MIT. Consulte o arquivo `LICENSE` caso seja adicionado futuramente.

---

Desenvolvido por **Natanael Silva Lima** – Tech Lead & Desenvolvedor Fullstack. Portfólio online: [https://www.natanaelsilvalima.dev.br](https://www.natanaelsilvalima.dev.br)

