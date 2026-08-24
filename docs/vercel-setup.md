# Configuração no Vercel

Este guia explica como configurar variáveis de ambiente, domínios e recursos adicionais no Vercel para o projeto.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Passo a Passo](#passo-a-passo)
  - [1. Acessar o Dashboard do Projeto](#1-acessar-o-dashboard-do-projeto)
  - [2. Configurar Variáveis de Ambiente](#2-configurar-variáveis-de-ambiente)
    - [2.1. Acessar Environment Variables](#21-acessar-environment-variables)
    - [2.2. Adicionar Variáveis do Zoho Mail](#22-adicionar-variáveis-do-zoho-mail)
    - [2.3. Adicionar Variáveis do reCAPTCHA](#23-adicionar-variáveis-do-recaptcha)
    - [2.4. Adicionar Variáveis de Rate Limiting (Opcional)](#24-adicionar-variáveis-de-rate-limiting-opcional)
  - [3. Verificar Variáveis Configuradas](#3-verificar-variáveis-configuradas)
  - [4. Fazer Redeploy (Importante)](#4-fazer-redeploy-importante)
  - [5. Configurar Domínio (Se Ainda Não Configurado)](#5-configurar-domínio-se-ainda-não-configurado)
  - [6. Configurar Build Settings (Se Necessário)](#6-configurar-build-settings-se-necessário)
  - [7. Configurar Environment-Specific Variables (Opcional)](#7-configurar-environment-specific-variables-opcional)
  - [8. Usar Vercel KV para Rate Limiting Persistente (Opcional)](#8-usar-vercel-kv-para-rate-limiting-persistente-opcional)
    - [8.1. Criar Vercel KV Database](#81-criar-vercel-kv-database)
    - [8.2. Obter Credenciais](#82-obter-credenciais)
    - [8.3. Integração no Código](#83-integração-no-código)
    - [8.4. Analytics e Speed Insights](#84-analytics-e-speed-insights)
    - [8.5. URL de Agendamento](#85-url-de-agendamento)
  - [9. Configurar Logs e Monitoramento](#9-configurar-logs-e-monitoramento)
    - [9.1. Ver Logs em Tempo Real](#91-ver-logs-em-tempo-real)
    - [9.2. Configurar Alertas (Opcional)](#92-configurar-alertas-opcional)
  - [10. Testar a Configuração](#10-testar-a-configuração)
    - [10.1. Testar em Preview](#101-testar-em-preview)
    - [10.2. Testar em Produção](#102-testar-em-produção)
  - [11. Verificar Headers e IPs](#11-verificar-headers-e-ips)
- [Troubleshooting](#troubleshooting)
  - [Variáveis não funcionam](#variáveis-não-funcionam)
  - [Erro: "Configuração de email incompleta"](#erro-configuração-de-email-incompleta)
  - [Erro: "reCAPTCHA site key is missing"](#erro-recaptcha-site-key-is-missing)
  - [Formulário não funciona em produção](#formulário-não-funciona-em-produção)
  - [Rate limiting muito restritivo](#rate-limiting-muito-restritivo)
- [Boas Práticas](#boas-práticas)
- [Checklist de Configuração](#checklist-de-configuração)
- [Próximos Passos](#próximos-passos)
- [Recursos Adicionais](#recursos-adicionais)
- [Suporte](#suporte)

## Pré-requisitos

- Conta no Vercel: https://vercel.com/signup
- Projeto já conectado ao Vercel (via Git ou upload)
- Acesso ao dashboard do Vercel

## Passo a Passo

### 1. Acessar o Dashboard do Projeto

1. Acesse: https://vercel.com/dashboard
2. Faça login na sua conta
3. Selecione seu projeto (ou crie um novo se necessário)

### 2. Configurar Variáveis de Ambiente

#### 2.1. Acessar Environment Variables

1. No projeto, vá em **Settings** (Configurações)
2. Clique em **Environment Variables** no menu lateral

#### 2.2. Adicionar Variáveis do Zoho Mail

1. Clique em **"Add New"** ou **"Adicionar Nova"**
2. Adicione as variáveis de SMTP:

   **Key**: `ZOHO_SMTP_HOST`
   
   **Value**: Servidor SMTP do Zoho
   - Exemplo: `smtp.zoho.com`
   
   **Environments**: Selecione onde aplicar:
   - ✅ Production (Produção)
   - ✅ Preview (Preview/Staging)
   - ✅ Development (Desenvolvimento - opcional)

3. Clique em **"Save"**

4. Adicione a porta SMTP:

   **Key**: `ZOHO_SMTP_PORT`
   
   **Value**: Porta SMTP do Zoho
   - Use `465` para SSL (recomendado)
   - Ou `587` para STARTTLS
   
   **Environments**:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

5. Clique em **"Save"**

6. Adicione a conta de envio:

   **Key**: `ZOHO_USER`
   
   **Value**: Email completo da conta Zoho
   - Exemplo: `contato@natanaelsilvalima.dev.br`
   
   **Environments**:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

7. Clique em **"Save"**

8. Adicione a senha de aplicativo:

   **Key**: `ZOHO_APP_PASSWORD`
   
   **Value**: Senha de aplicativo gerada no Zoho Mail
   - Requer autenticação de dois fatores ativada
   - Não use a senha normal da conta
   - Exemplo: `abc123def456`
   
   **Environments**:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

9. Clique em **"Save"**

10. Adicione a variável de remetente:

   **Key**: `ZOHO_FROM_EMAIL`
   
   **Value**: Email que aparecerá como remetente
   - Deve ser uma caixa de correio ou alias configurado no Zoho
   - Exemplo: `contato@natanaelsilvalima.dev.br`
   
   **Environments**:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

11. Clique em **"Save"**

12. Adicione a variável de destino:

   **Key**: `ZOHO_TO_EMAIL`
   
   **Value**: Email que receberá as notificações do formulário
   - Exemplo: `seu-email@gmail.com`
   
   **Environments**:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

13. Clique em **"Save"**

#### 2.3. Adicionar Variáveis do reCAPTCHA

**Variável 1 - Site Key (Pública)**:

1. Clique em **"Add New"**
2. Configure:

   **Key**: `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
   
   **Value**: Sua Site Key do reCAPTCHA
   - Exemplo: `6LcXXXXXXXXXXXXX-XXXXXXXXXXXXX`
   
   **Environments**: 
   - ✅ Production
   - ✅ Preview
   - ✅ Development

3. Clique em **"Save"**

**Variável 2 - Secret Key (Privada)**:

1. Clique em **"Add New"**
2. Configure:

   **Key**: `RECAPTCHA_SECRET_KEY`
   
   **Value**: Sua Secret Key do reCAPTCHA
   - Exemplo: `6LcXXXXXXXXXXXXX_XXXXXXXXXXXXX`
   
   **Environments**:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

3. Clique em **"Save"**

**Importante**: A variável `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` deve começar com `NEXT_PUBLIC_` para ser acessível no frontend do Next.js.

#### 2.4. Adicionar Variáveis de Rate Limiting (Opcional)

**Variável 1 - Máximo de Requisições**:

1. Clique em **"Add New"**
2. Configure:

   **Key**: `RATE_LIMIT_MAX_REQUESTS`
   
   **Value**: `5` (ou o número desejado)
   
   **Environments**:
   - ✅ Production
   - ✅ Preview

3. Clique em **"Save"**

**Variável 2 - Janela de Tempo**:

1. Clique em **"Add New"**
2. Configure:

   **Key**: `RATE_LIMIT_WINDOW_MS`
   
   **Value**: `3600000` (1 hora em milissegundos)
   - 1 hora = 3600000ms
   - 30 minutos = 1800000ms
   - 15 minutos = 900000ms
   
   **Environments**:
   - ✅ Production
   - ✅ Preview

3. Clique em **"Save"**

### 3. Verificar Variáveis Configuradas

Após adicionar todas as variáveis, você deve ter:

- ✅ `ZOHO_SMTP_HOST`
- ✅ `ZOHO_SMTP_PORT`
- ✅ `ZOHO_USER`
- ✅ `ZOHO_APP_PASSWORD`
- ✅ `ZOHO_FROM_EMAIL`
- ✅ `ZOHO_TO_EMAIL`
- ✅ `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
- ✅ `RECAPTCHA_SECRET_KEY`
- ✅ `RATE_LIMIT_MAX_REQUESTS` (opcional)
- ✅ `RATE_LIMIT_WINDOW_MS` (opcional)

### 4. Fazer Redeploy (Importante)

Após adicionar/modificar variáveis de ambiente:

1. Vá em **Deployments**
2. Clique nos três pontos (⋯) do deployment mais recente
3. Selecione **"Redeploy"**
4. Confirme o redeploy

**Nota**: As variáveis de ambiente só são aplicadas em novos deployments. Se você já tem um deployment ativo, é necessário fazer redeploy.

### 5. Configurar Domínio (Se Ainda Não Configurado)

1. Vá em **Settings** → **Domains**
2. Clique em **"Add"** ou **"Adicionar"**
3. Digite seu domínio (ex: `seu-dominio.com`)
4. Siga as instruções para configurar DNS:
   - Se usar Cloudflare, veja `cloudflare-setup.md`
   - Se usar DNS direto, siga as instruções do Vercel

### 6. Configurar Build Settings (Se Necessário)

1. Vá em **Settings** → **General**
2. Verifique:
   - **Framework Preset**: Next.js (deve ser detectado automaticamente)
   - **Build Command**: `next build` (padrão)
   - **Output Directory**: `.next` (padrão)
   - **Install Command**: `npm install` (padrão)

### 7. Configurar Environment-Specific Variables (Opcional)

Se você quiser valores diferentes por ambiente:

1. Ao adicionar uma variável, você pode selecionar ambientes específicos
2. Exemplo:
   - Production: `ZOHO_FROM_EMAIL` = `contato@natanaelsilvalima.dev.br`
   - Preview: `ZOHO_FROM_EMAIL` = `seu-email-teste@zoho.com`

### 8. Usar Vercel KV para Rate Limiting Persistente (Opcional)

Para rate limiting mais robusto que persiste entre deployments:

#### 8.1. Criar Vercel KV Database

1. No dashboard do Vercel, vá em **Storage**
2. Clique em **"Create Database"**
3. Selecione **"KV"**
4. Dê um nome (ex: `rate-limit-store`)
5. Selecione a região mais próxima
6. Clique em **"Create"**

#### 8.2. Obter Credenciais

1. Após criar, você verá:
   - **REST API URL**
   - **REST API Token**
2. Adicione como variáveis de ambiente:
   - `KV_REST_API_URL`
   - `KV_REST_API_TOKEN`

#### 8.3. Integração no Código

O projeto já usa Vercel KV automaticamente quando `KV_REST_API_URL` e `KV_REST_API_TOKEN` estão configurados (`lib/rate-limit.ts`). Sem essas variáveis, o rate limiting usa memória local (adequado para desenvolvimento).

### 8.4. Analytics e Speed Insights

`@vercel/analytics` e `@vercel/speed-insights` já estão integrados em `app/layout.tsx`. Na Vercel, basta fazer deploy — não é necessário configurar variáveis extras.

### 8.5. URL de Agendamento

Configure `NEXT_PUBLIC_SCHEDULING_URL` com o link do Calendly, Cal.com ou LinkedIn. O padrão aponta para o perfil do LinkedIn.

### 9. Configurar Logs e Monitoramento

#### 9.1. Ver Logs em Tempo Real

1. Vá em **Deployments**
2. Clique em um deployment
3. Vá na aba **"Functions"** ou **"Logs"**
4. Veja logs em tempo real

#### 9.2. Configurar Alertas (Opcional)

1. Vá em **Settings** → **Notifications**
2. Configure alertas para:
   - Falhas de deploy
   - Erros em produção
   - Performance

### 10. Testar a Configuração

#### 10.1. Testar em Preview

1. Faça um commit e push para o repositório
2. O Vercel criará automaticamente um preview deployment
3. Acesse a URL do preview
4. Teste o formulário de contato
5. Verifique os logs para erros

#### 10.2. Testar em Produção

1. Após verificar no preview, faça merge para a branch principal
2. O Vercel fará deploy em produção
3. Acesse seu domínio de produção
4. Teste o formulário completo
5. Verifique se o email é recebido

### 11. Verificar Headers e IPs

O Vercel adiciona headers úteis que o código já utiliza:

- `x-forwarded-for`: IP do cliente (usado no rate limiting)
- `x-real-ip`: IP real (usado como fallback)
- `cf-connecting-ip`: IP do Cloudflare (se usar Cloudflare)

O código em `lib/rate-limit.ts` já trata esses headers corretamente.

## Troubleshooting

### Variáveis não funcionam

1. **Verifique se fez redeploy** após adicionar variáveis
2. **Verifique o nome da variável**:
   - Variáveis públicas devem começar com `NEXT_PUBLIC_`
   - Variáveis privadas NÃO devem começar com `NEXT_PUBLIC_`
3. **Verifique os ambientes selecionados**:
   - Production: apenas em produção
   - Preview: em previews e staging
   - Development: apenas em desenvolvimento local

### Erro: "Configuração de email incompleta"

1. Verifique se as variáveis `ZOHO_USER`, `ZOHO_APP_PASSWORD`, `ZOHO_FROM_EMAIL` e `ZOHO_TO_EMAIL` estão adicionadas no Vercel
2. Verifique se a senha de aplicativo foi gerada corretamente no Zoho Mail (requer autenticação de dois fatores)
3. Verifique se o email em `ZOHO_USER` e `ZOHO_FROM_EMAIL` corresponde a uma caixa de correio existente no Zoho
4. Verifique se fez redeploy após adicionar as variáveis
5. Verifique se selecionou o ambiente correto (Production/Preview)

### Erro: "reCAPTCHA site key is missing"

1. Verifique se `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` está configurada
2. Verifique se começa com `NEXT_PUBLIC_`
3. Faça redeploy após adicionar

### Formulário não funciona em produção

1. Verifique os logs do Vercel
2. Verifique se todas as variáveis estão configuradas
3. Teste as credenciais SMTP do Zoho em um cliente de email ou script isolado
4. Verifique se o reCAPTCHA está configurado corretamente

### Rate limiting muito restritivo

1. Ajuste `RATE_LIMIT_MAX_REQUESTS` para um valor maior
2. Ajuste `RATE_LIMIT_WINDOW_MS` para uma janela maior
3. Faça redeploy

## Boas Práticas

1. **Nunca commite variáveis sensíveis**:
   - Use apenas `.env.example` no Git
   - Adicione `.env.local` ao `.gitignore`

2. **Use ambientes diferentes**:
   - Production: valores de produção
   - Preview: valores de teste/staging
   - Development: valores locais

3. **Monitore logs regularmente**:
   - Verifique erros em produção
   - Ajuste configurações conforme necessário

4. **Faça redeploy após mudanças**:
   - Variáveis só são aplicadas em novos deployments

5. **Teste em preview primeiro**:
   - Use preview deployments para testar antes de produção

## Checklist de Configuração

Antes de ir para produção, verifique:

- [ ] `ZOHO_USER` configurado
- [ ] `ZOHO_APP_PASSWORD` configurada e testada
- [ ] `ZOHO_FROM_EMAIL` configurado
- [ ] `ZOHO_TO_EMAIL` configurado
- [ ] `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` configurada
- [ ] `RECAPTCHA_SECRET_KEY` configurada
- [ ] `RATE_LIMIT_MAX_REQUESTS` configurada (opcional)
- [ ] `RATE_LIMIT_WINDOW_MS` configurada (opcional)
- [ ] Domínio configurado (se aplicável)
- [ ] SSL/TLS funcionando (automático no Vercel)
- [ ] Formulário testado em preview
- [ ] Formulário testado em produção
- [ ] Logs verificados sem erros

## Próximos Passos

Após configurar tudo no Vercel:

1. ✅ Teste o formulário completo
2. ✅ Monitore por alguns dias
3. ✅ Ajuste configurações conforme necessário
4. ✅ Configure Cloudflare (veja `cloudflare-setup.md`)
5. ✅ Configure Zoho Mail (veja `zoho-setup.md`)
6. ✅ Configure reCAPTCHA (veja `recaptcha-setup.md`)

## Recursos Adicionais

- [Documentação do Vercel](https://vercel.com/docs)
- [Guia de Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Guia de Domains](https://vercel.com/docs/concepts/projects/domains)
- [Vercel Dashboard](https://vercel.com/dashboard)

## Suporte

Se encontrar problemas:

1. Verifique a [documentação oficial do Vercel](https://vercel.com/docs)
2. Consulte os [fóruns da comunidade](https://github.com/vercel/vercel/discussions)
3. Entre em contato com o [suporte do Vercel](https://vercel.com/support)

