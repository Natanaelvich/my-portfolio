# Configuração do Resend (formulário de contato)

O portfólio envia e-mails pelo [Resend](https://resend.com) via Server Action (`app/actions/send-email.ts`).

## Domínio

| Item | Valor |
|------|-------|
| Site | `https://www.natanaelsilvalima.dev.br` |
| Domínio Resend | `natanaelsilvalima.dev.br` |
| Remetente | `Natanael Silva Lima <noreply@natanaelsilvalima.dev.br>` |
| Destino (admin) | `taelima1997@gmail.com` |

O DNS do domínio está na **Vercel** (`ns1.vercel-dns.com`).

## Registros DNS (Vercel)

Após criar o domínio no Resend, adicione:

| Tipo | Nome | Valor |
|------|------|-------|
| TXT | `resend._domainkey` | Chave DKIM fornecida pelo Resend |
| MX | `send` | `feedback-smtp.us-east-1.amazonses.com` (prioridade 10) |
| TXT | `send` | `v=spf1 include:amazonses.com ~all` |
| TXT | `_dmarc` | `v=DMARC1; p=quarantine; rua=mailto:taelima1997@gmail.com` |

Via CLI (exemplo):

```bash
npx vercel dns add natanaelsilvalima.dev.br resend._domainkey TXT '<dkim-value>'
npx vercel dns add natanaelsilvalima.dev.br send MX feedback-smtp.us-east-1.amazonses.com 10
npx vercel dns add natanaelsilvalima.dev.br send TXT 'v=spf1 include:amazonses.com ~all'
npx vercel dns add natanaelsilvalima.dev.br _dmarc TXT 'v=DMARC1; p=quarantine; rua=mailto:taelima1997@gmail.com'
```

Depois, no Resend: **Domains** → **Verify**.

## Variáveis de ambiente

Copie `.env.example` para `.env.local`:

| Variável | Descrição |
|----------|-----------|
| `RESEND_API_KEY` | API key em [resend.com/api-keys](https://resend.com/api-keys) |
| `RESEND_FROM_EMAIL` | `noreply@natanaelsilvalima.dev.br` |
| `RESEND_TO_EMAIL` | E-mail que recebe notificações do formulário |

No Vercel (Settings → Environment Variables), configure as mesmas variáveis em **Production** e **Preview**. Faça redeploy após alterar.

## Teste

1. Acesse `https://www.natanaelsilvalima.dev.br/#contact`
2. Envie o formulário
3. Confirme: notificação no admin + e-mail de confirmação para o remetente

## Troubleshooting

- **"Serviço de email não configurado"** — `RESEND_API_KEY` ausente no ambiente; confira Vercel e redeploy.
- **Domínio não verificado** — confira DKIM/SPF no painel DNS da Vercel e clique em Verify no Resend.
- **reCAPTCHA** — ver `docs/recaptcha-setup.md`.
