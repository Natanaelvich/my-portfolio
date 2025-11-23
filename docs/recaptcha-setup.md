# Configuração do Google reCAPTCHA v3

Este guia explica como configurar o Google reCAPTCHA v3 para proteger o formulário de contato contra spam e bots.

## Índice

- [O que é reCAPTCHA v3?](#o-que-é-recaptcha-v3)
- [Pré-requisitos](#pré-requisitos)
- [Passo a Passo](#passo-a-passo)
  - [1. Acessar o Google reCAPTCHA Admin Console](#1-acessar-o-google-recaptcha-admin-console)
  - [2. Registrar um Novo Site](#2-registrar-um-novo-site)
  - [3. Obter as Chaves](#3-obter-as-chaves)
  - [4. Configurar no Projeto](#4-configurar-no-projeto)
    - [4.1. Variáveis de Ambiente Locais](#41-variáveis-de-ambiente-locais)
    - [4.2. Variáveis de Ambiente no Vercel](#42-variáveis-de-ambiente-no-vercel)
  - [5. Configurações Avançadas (Opcional)](#5-configurações-avançadas-opcional)
    - [5.1. Ajustar Score Mínimo](#51-ajustar-score-mínimo)
    - [5.2. Configurar Ações](#52-configurar-ações)
  - [6. Testar a Configuração](#6-testar-a-configuração)
    - [6.1. Teste Local](#61-teste-local)
    - [6.2. Verificar Logs](#62-verificar-logs)
  - [7. Monitoramento](#7-monitoramento)
    - [7.1. Dashboard do reCAPTCHA](#71-dashboard-do-recaptcha)
    - [7.2. Ajustar Thresholds](#72-ajustar-thresholds)
- [Troubleshooting](#troubleshooting)
  - [Erro: "reCAPTCHA site key is missing"](#erro-recaptcha-site-key-is-missing)
  - [Erro: "reCAPTCHA secret key is missing"](#erro-recaptcha-secret-key-is-missing)
  - [Score muito baixo](#score-muito-baixo)
  - [reCAPTCHA não carrega](#recaptcha-não-carrega)
  - [Erro: "Invalid site key"](#erro-invalid-site-key)
- [Boas Práticas](#boas-práticas)
- [Próximos Passos](#próximos-passos)
- [Recursos Adicionais](#recursos-adicionais)

## O que é reCAPTCHA v3?

O reCAPTCHA v3 é uma solução de segurança invisível que analisa o comportamento do usuário e atribui um score de 0.0 a 1.0, onde:
- **1.0**: Muito provável que seja um humano
- **0.0**: Muito provável que seja um bot

Diferente do reCAPTCHA v2, o v3 não exige interação do usuário (sem checkbox), proporcionando uma experiência mais fluida.

## Pré-requisitos

- Conta Google (Gmail)
- Acesso ao [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)

## Passo a Passo

### 1. Acessar o Google reCAPTCHA Admin Console

1. Acesse: https://www.google.com/recaptcha/admin
2. Faça login com sua conta Google

### 2. Registrar um Novo Site

1. Clique no botão **"+"** ou **"Create"** para criar um novo site
2. Preencha o formulário:

   **Label** (Nome do site):
   - Exemplo: `Portfolio - Natanael Lima`

   **reCAPTCHA type**:
   - Selecione **"reCAPTCHA v3"**

   **Domains** (Domínios permitidos):
   - Adicione seus domínios:
     - `localhost` (para desenvolvimento local)
     - `natanaelsilvalima.dev.br` (domínio de produção)
     - `www.natanaelsilvalima.dev.br` (domínio com www)
     - `*.vercel.app` (se quiser testar em previews do Vercel)
   
   **Owners** (Proprietários):
   - Seu email será adicionado automaticamente

3. Aceite os **Termos de Serviço** do reCAPTCHA
4. Clique em **"Submit"**

### 3. Obter as Chaves

Após criar o site, você verá duas chaves:

1. **Site Key** (Chave do Site):
   - Esta é a chave pública que será usada no frontend
   - Pode ser exposta publicamente
   - Exemplo: `6LcXXXXXXXXXXXXX-XXXXXXXXXXXXX`

2. **Secret Key** (Chave Secreta):
   - Esta é a chave privada usada no servidor
   - **NUNCA** exponha esta chave publicamente
   - Exemplo: `6LcXXXXXXXXXXXXX_XXXXXXXXXXXXX`

### 4. Configurar no Projeto

#### 4.1. Variáveis de Ambiente Locais

Crie um arquivo `.env.local` na raiz do projeto:

```env
# reCAPTCHA v3 - Site Key (pública)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LcXXXXXXXXXXXXX-XXXXXXXXXXXXX

# reCAPTCHA v3 - Secret Key (privada)
RECAPTCHA_SECRET_KEY=6LcXXXXXXXXXXXXX_XXXXXXXXXXXXX
```

#### 4.2. Variáveis de Ambiente no Vercel

1. Acesse o dashboard do Vercel: https://vercel.com/dashboard
2. Selecione seu projeto
3. Vá em **Settings** → **Environment Variables**
4. Adicione as variáveis:
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` = Sua Site Key
   - `RECAPTCHA_SECRET_KEY` = Sua Secret Key
5. Selecione os ambientes onde aplicar (Production, Preview, Development)
6. Clique em **Save**

### 5. Configurações Avançadas (Opcional)

#### 5.1. Ajustar Score Mínimo

Por padrão, o código aceita scores acima de **0.5**. Você pode ajustar isso em `lib/recaptcha.ts`:

```typescript
const MIN_SCORE = 0.5; // Ajuste conforme necessário
```

Recomendações:
- **0.3-0.5**: Mais permissivo (pode permitir alguns bots)
- **0.5-0.7**: Balanceado (recomendado)
- **0.7-1.0**: Mais restritivo (pode bloquear usuários legítimos)

#### 5.2. Configurar Ações

O reCAPTCHA v3 permite definir "ações" para diferentes contextos. No código, usamos a ação `submit_contact_form`. Você pode:

1. Acessar o Admin Console do reCAPTCHA
2. Ver estatísticas por ação
3. Ajustar thresholds por ação se necessário

### 6. Testar a Configuração

#### 6.1. Teste Local

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Acesse: http://localhost:3000
3. Preencha o formulário de contato
4. Verifique no console do navegador se não há erros
5. Verifique se o email é enviado com sucesso

#### 6.2. Verificar Logs

No console do servidor, você deve ver:
- Se o reCAPTCHA foi validado com sucesso
- O score recebido (em caso de falha)

### 7. Monitoramento

#### 7.1. Dashboard do reCAPTCHA

1. Acesse: https://www.google.com/recaptcha/admin
2. Clique no seu site
3. Veja estatísticas:
   - Número de requisições
   - Score médio
   - Requisições por ação
   - Análise de tráfego

#### 7.2. Ajustar Thresholds

Com base nas estatísticas, você pode:
- Ajustar o score mínimo no código
- Identificar padrões suspeitos
- Bloquear IPs específicos (se necessário)

## Troubleshooting

### Erro: "reCAPTCHA site key is missing"

- Verifique se `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` está configurada
- Verifique se a variável começa com `NEXT_PUBLIC_` (necessário para variáveis públicas no Next.js)
- Reinicie o servidor de desenvolvimento após adicionar variáveis

### Erro: "reCAPTCHA secret key is missing"

- Verifique se `RECAPTCHA_SECRET_KEY` está configurada
- Verifique se não está usando `NEXT_PUBLIC_` no início (deve ser privada)
- Verifique se está configurada no Vercel para produção

### Score muito baixo

- Verifique se o domínio está correto no Admin Console
- Verifique se não há problemas de rede/firewall
- Considere ajustar o `MIN_SCORE` se muitos usuários legítimos estão sendo bloqueados

### reCAPTCHA não carrega

- Verifique se o domínio está na lista de domínios permitidos
- Verifique o console do navegador para erros
- Verifique se há bloqueadores de anúncio/tracking interferindo

### Erro: "Invalid site key"

- Verifique se copiou a chave corretamente
- Verifique se está usando a Site Key (não a Secret Key) no frontend
- Verifique se o domínio está registrado no Admin Console

## Boas Práticas

1. **Nunca exponha a Secret Key**:
   - Não commite no Git
   - Não coloque em código do frontend
   - Use apenas variáveis de ambiente

2. **Monitore regularmente**:
   - Verifique o dashboard do reCAPTCHA periodicamente
   - Ajuste thresholds conforme necessário

3. **Teste em diferentes ambientes**:
   - Desenvolvimento local
   - Preview do Vercel
   - Produção

4. **Combine com outras proteções**:
   - Rate limiting (já implementado)
   - Validação de campos
   - Cloudflare (veja `cloudflare-setup.md`)

## Próximos Passos

Após configurar o reCAPTCHA:

1. Configure as variáveis no Vercel (veja `vercel-setup.md`)
2. Configure o Cloudflare para proteção adicional (veja `cloudflare-setup.md`)
3. Teste o formulário completo em produção

## Recursos Adicionais

- [Documentação oficial do reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3)
- [Guia de migração do v2 para v3](https://developers.google.com/recaptcha/docs/v3-migration)
- [FAQ do reCAPTCHA](https://developers.google.com/recaptcha/docs/faq)

