# Natanael Silva Lima – Portfolio (Next.js 14)

Este repositório contém a versão refatorada do portfólio profissional do Natanael Silva Lima construída com **Next.js 14 (App Router)**, **TypeScript** e **Tailwind CSS**.

## Visão Geral

- **Next.js 14 (App Router)** com renderização híbrida e suporte a metadata nativo.
- **Tailwind CSS 3** para utilitários e tokens de design.
- **TypeScript** com checagem estrita.
- **Conteúdo centralizado** em `content/profile.ts` (single source of truth).
- **Formulário de contato** via Server Action + Resend + reCAPTCHA v3.
- **Sitemap XML** gerado por script (`generate-sitemap.js`).

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

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o ambiente de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run start` | Executa o build de produção |
| `npm run lint` | Executa o ESLint |
| `npm run format` | Formata com Prettier |
| `npm run test:e2e` | Testes E2E com Playwright |
| `node scripts/update-seo.js` | Atualiza `public/sitemap.xml` |

### Variáveis de Ambiente

Copie `.env.example` para `.env.local` e configure:

- `RESEND_*` — Resend (ver `docs/resend-setup.md`)
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` / `RECAPTCHA_SECRET_KEY` (ver `docs/recaptcha-setup.md`)

## Estrutura Principal

```
my-portfolio/
├── app/
│   ├── layout.tsx          # Layout global + metadata e JSON-LD
│   ├── page.tsx            # Página principal
│   ├── actions/send-email.ts
│   ├── components/contact-form.tsx
│   ├── curriculo/          # Rota /curriculo
│   └── sitemap/            # Rota /sitemap
├── content/
│   └── profile.ts          # Dados compartilhados (home + currículo)
├── lib/                    # rate-limit, recaptcha
├── public/                 # Assets estáticos
└── docs/                   # Guias de setup
```

## Deploy

```bash
npm run build
npm run start
```

Deploy recomendado na Vercel — ver `docs/vercel-setup.md`.

## Checklist de Testes

- [ ] Navegação de todas as seções (incluindo IA e Disponibilidade)
- [ ] Formulário de contato (validação + envio via Resend)
- [ ] Rotas `/curriculo`, `/sitemap`, 404
- [ ] Metatags e JSON-LD via DevTools
- [ ] `npm run test:e2e` (Playwright)

## Licença

Projeto distribuído sob a licença MIT.

---

Desenvolvido por **Natanael Silva Lima** – [natanaelsilvalima.dev.br](https://www.natanaelsilvalima.dev.br)
