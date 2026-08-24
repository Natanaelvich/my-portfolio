# Configuração do Zoho Mail para Envio de Emails

Este guia explica como configurar o [Zoho Mail](https://www.zoho.com/mail/) para enviar os emails do formulário de contato do portfólio.

O envio é feito via SMTP usando o [Nodemailer](https://nodemailer.com/), substituindo a integração anterior com o Resend.

## Por que Zoho Mail

- **Caixa de entrada profissional**: email com seu próprio domínio.
- **Plano gratuito disponível**: até 5 usuários e 5 GB por conta (com limites de envio).
- **Sem dependência de API externa**: envio direto via SMTP, usando credenciais da própria conta.
- **Maior controle**: você gerencia o remetente, aliases e reputação do domínio.

## Índice

- [Criar Conta no Zoho Mail](#criar-conta-no-zoho-mail)
- [Habilitar Autenticação de Dois Fatores](#habilitar-autenticação-de-dois-fatores)
- [Gerar Senha de Aplicativo](#gerar-senha-de-aplicativo)
- [Configurar Variáveis de Ambiente](#configurar-variáveis-de-ambiente)
- [Verificar Configurações DNS (Recomendado)](#verificar-configurações-dns-recomendado)
- [Testar o Envio](#testar-o-envio)
- [Troubleshooting](#troubleshooting)

---

## Criar Conta no Zoho Mail

1. Acesse https://www.zoho.com/mail/ e crie uma conta.
2. Escolha o plano adequado (o gratuito funciona para envio de formulário).
3. Configure seu domínio (ex: `natanaelsilvalima.dev.br`) seguindo o assistente do Zoho.
4. Crie a caixa de correio que será usada para envio (ex: `contato@natanaelsilvalima.dev.br`).

---

## Habilitar Autenticação de Dois Fatores

O Zoho Mail exige autenticação de dois fatores para gerar uma senha de aplicativo SMTP.

1. Acesse as configurações de segurança da sua conta Zoho.
2. Vá em **Two-Factor Authentication** e ative.
3. Siga o fluxo para vincular um autenticador (app, SMS ou outro método).

---

## Gerar Senha de Aplicativo

1. Nas configurações de segurança, vá em **App Passwords**.
2. Clique em **Generate New App Password**.
3. Dê um nome, por exemplo: `Portfolio Contact Form`.
4. Copie a senha gerada. **Ela só é exibida uma vez.**

Essa senha será usada na variável `ZOHO_APP_PASSWORD`.

---

## Configurar Variáveis de Ambiente

Adicione as seguintes variáveis no `.env.local` (desenvolvimento local) e no Vercel (produção/preview):

```env
ZOHO_SMTP_HOST=smtp.zoho.com
ZOHO_SMTP_PORT=465
ZOHO_USER=seu-email@zoho.com
ZOHO_APP_PASSWORD=sua-senha-de-aplicativo
ZOHO_FROM_EMAIL=seu-email@zoho.com
ZOHO_TO_EMAIL=seu-email@exemplo.com
```

### Descrição das variáveis

| Variável | Descrição | Exemplo |
|---|---|---|
| `ZOHO_SMTP_HOST` | Servidor SMTP do Zoho | `smtp.zoho.com` |
| `ZOHO_SMTP_PORT` | Porta SMTP (465 para SSL, 587 para TLS) | `465` |
| `ZOHO_USER` | Email completo da conta Zoho | `contato@natanaelsilvalima.dev.br` |
| `ZOHO_APP_PASSWORD` | Senha de aplicativo gerada no Zoho | `abc123def456` |
| `ZOHO_FROM_EMAIL` | Email que aparecerá como remetente | `contato@natanaelsilvalima.dev.br` |
| `ZOHO_TO_EMAIL` | Email que receberá as notificações do formulário | `taelima1997@gmail.com` |

### Para desenvolvimento local

Copie o `.env.example` para `.env.local` e preencha os valores:

```bash
cp .env.example .env.local
```

### Para Vercel

1. Acesse o dashboard do projeto: https://vercel.com/dashboard
2. Vá em **Settings** → **Environment Variables**
3. Adicione `ZOHO_SMTP_HOST`, `ZOHO_SMTP_PORT`, `ZOHO_USER`, `ZOHO_APP_PASSWORD`, `ZOHO_FROM_EMAIL` e `ZOHO_TO_EMAIL`
4. Selecione os ambientes desejados (Production, Preview, Development)
5. Faça **redeploy** para aplicar as variáveis

Veja também: `vercel-setup.md`

---

## Verificar Configurações DNS (Recomendado)

Para garantir boa entregabilidade e evitar que emails caiam no spam, configure no seu DNS:

- **SPF**: incluir `include:zoho.com` (ou `include:zohomail.com` conforme orientação do Zoho).
- **DKIM**: chave pública fornecida pelo Zoho.
- **DMARC**: política de alinhamento, por exemplo `v=DMARC1; p=quarantine; rua=mailto:dmarc@seudominio.com`.

O Zoho fornece os registros exatos durante a verificação do domínio. Adicione-os no seu provedor DNS (Cloudflare, Hostinger, etc.) e aguarde a propagação.

---

## Testar o Envio

Após configurar as variáveis e fazer redeploy:

1. Acesse o formulário de contato do portfólio.
2. Preencha e envie uma mensagem de teste.
3. Verifique se você recebeu:
   - **Notificação** no `ZOHO_TO_EMAIL` com os dados do contato.
   - **Confirmação** no email informado no formulário.
4. Verifique os logs do Vercel para possíveis erros de autenticação ou SMTP.

---

## Troubleshooting

### "Configuração de email incompleta"

- Verifique se `ZOHO_USER`, `ZOHO_APP_PASSWORD`, `ZOHO_FROM_EMAIL` e `ZOHO_TO_EMAIL` estão preenchidas.
- Verifique se o redeploy foi feito no Vercel.

### Erro de autenticação SMTP

- Confirme se a senha de aplicativo está correta (não use a senha normal da conta Zoho).
- Verifique se a autenticação de dois fatores está ativada.
- Confirme se o email em `ZOHO_USER` está correto e a caixa de correio existe no Zoho.

### "Self signed certificate" ou erro de TLS

- Verifique se a porta `ZOHO_SMTP_PORT` está correta.
- Para porta `465`, use `secure: true` (SSL).
- Para porta `587`, use `secure: false` com STARTTLS.

### Emails vão para spam

- Verifique SPF, DKIM e DMARC no seu domínio.
- Use um endereço de remetente do seu próprio domínio, configurado no Zoho.
- Evite enviar muitos emails de confirmação em sequência.

### Limite de envio atingido

- O Zoho Mail possui limites diários de envio conforme o plano.
- Se o formulário tiver muito tráfego, considere um plano pago do Zoho ou usar um serviço transacional dedicado.

---

## Recursos

- [Zoho Mail - Sign up](https://www.zoho.com/mail/)
- [Zoho Mail - SMTP Settings](https://www.zoho.com/mail/help/zoho-smtp.html)
- [Zoho Mail - App Passwords](https://www.zoho.com/mail/help/adminconsole/two-factor-authentication.html#alinkapppassword)
- [Nodemailer - Documentation](https://nodemailer.com/)
