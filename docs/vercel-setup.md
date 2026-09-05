# Configuração no Vercel

Guia para variáveis de ambiente, domínio e deploy do portfólio na Vercel.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Variáveis de ambiente](#variáveis-de-ambiente)
  - [Resend (formulário de contato)](#resend-formulário-de-contato)
  - [reCAPTCHA](#recaptcha)
  - [Rate limiting (opcional)](#rate-limiting-opcional)
- [Redeploy](#redeploy)
- [Domínio](#domínio)
- [Testar](#testar)
- [Troubleshooting](#troubleshooting)
- [Checklist](#checklist)

## Pré-requisitos

- Conta na [Vercel](https://vercel.com)
- Projeto conectado ao Git (`Natanaelvich/my-portfolio`)
- Domínio `natanaelsilvalima.dev.br` com DNS na Vercel

## Variáveis de ambiente

**Settings** → **Environment Variables** → adicione para **Production** e **Preview**.

### Resend (formulário de contato)

| Key | Value | Ambientes |
|-----|-------|-----------|
| `RESEND_API_KEY` | API key do [Resend](https://resend.com/api-keys) | Production, Preview |
| `RESEND_FROM_EMAIL` | `noreply@natanaelsilvalima.dev.br` | Production, Preview |
| `RESEND_TO_EMAIL` | E-mail que recebe notificações (ex.: `taelima1997@gmail.com`) | Production, Preview |

Detalhes de DNS e verificação do domínio: `docs/resend-setup.md`.

### reCAPTCHA

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Site key (pública) |
| `RECAPTCHA_SECRET_KEY` | Secret key (privada) |

Ver `docs/recaptcha-setup.md`.

### Rate limiting (opcional)

| Key | Default | Descrição |
|-----|---------|-----------|
| `RATE_LIMIT_MAX_REQUESTS` | `5` | Máximo de envios por janela |
| `RATE_LIMIT_WINDOW_MS` | `3600000` | Janela em ms (1h) |

## Redeploy

Variáveis só entram em vigor em **novos deployments**:

1. **Deployments** → ⋯ no último deploy → **Redeploy**

## Domínio

1. **Settings** → **Domains** → confirme `natanaelsilvalima.dev.br` e `www.natanaelsilvalima.dev.br`
2. DNS na Vercel: registros Resend + DMARC conforme `docs/resend-setup.md`
3. Proxy/CDN opcional: `docs/cloudflare-setup.md`

## Testar

1. Preview: push em branch → testar formulário na URL de preview
2. Produção: `https://www.natanaelsilvalima.dev.br/#contact`
3. Logs: **Deployments** → aba **Functions** / **Logs**

## Troubleshooting

### "Serviço de email não configurado"

- Confira `RESEND_API_KEY` no Vercel (Production/Preview)
- Redeploy após alterar variáveis

### Domínio / remetente rejeitado

- Verifique domínio **verified** no Resend
- Confira `RESEND_FROM_EMAIL` = endereço no domínio verificado

### reCAPTCHA

- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` deve existir e começar com `NEXT_PUBLIC_`
- Domínios autorizados no Google reCAPTCHA: `natanaelsilvalima.dev.br`, `www.natanaelsilvalima.dev.br`

### Rate limiting

- Aumente `RATE_LIMIT_MAX_REQUESTS` ou `RATE_LIMIT_WINDOW_MS` e redeploy

## Checklist

- [ ] `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_TO_EMAIL`
- [ ] Domínio `natanaelsilvalima.dev.br` verificado no Resend
- [ ] `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, `RECAPTCHA_SECRET_KEY`
- [ ] Formulário testado em preview e produção
- [ ] Logs sem erros

## Recursos

- [Vercel — Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Vercel — Domains](https://vercel.com/docs/concepts/projects/domains)
- `docs/resend-setup.md`, `docs/recaptcha-setup.md`
