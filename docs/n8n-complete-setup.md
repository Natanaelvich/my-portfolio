# Configuração Completa do n8n com Zoho Mail

**Guia completo para configurar o n8n e Zoho Mail para envio de emails do formulário de contato do portfólio.**

---

## 📑 Table of Contents

### 1. [Introdução](#1-introdução)
   - 1.1 [O que é este guia](#11-o-que-é-este-guia)
   - 1.2 [Pré-requisitos](#12-pré-requisitos)

### 2. [Configuração Inicial do Workflow](#2-configuração-inicial-do-workflow)
   - 2.1 [Opção 1: Importar Workflow Completo (Recomendado)](#21-opção-1-importar-workflow-completo-recomendado)
   - 2.2 [Opção 2: Criar Workflow Manualmente](#22-opção-2-criar-workflow-manualmente)
   - 2.3 [Adicionar Nó Webhook](#23-adicionar-nó-webhook)

### 3. [Configuração do Zoho Mail](#3-configuração-do-zoho-mail)
   - 3.1 [Criar Senha de Aplicativo no Zoho](#31-criar-senha-de-aplicativo-no-zoho)
   - 3.2 [Configurar Credenciais SMTP no n8n](#32-configurar-credenciais-smtp-no-n8n)
   - 3.3 [Campos da Tela de Configuração SMTP](#33-campos-da-tela-de-configuração-smtp)
   - 3.4 [Configurações por Região do Zoho](#34-configurações-por-região-do-zoho)
   - 3.5 [Testar Configuração do Zoho](#35-testar-configuração-do-zoho)

### 4. [Configuração dos Nós Send Email](#4-configuração-dos-nós-send-email)
   - 4.1 [Email de Notificação (Para Você)](#41-email-de-notificação-para-você)
   - 4.2 [Email de Confirmação (Para o Usuário)](#42-email-de-confirmação-para-o-usuário)
   - 4.3 [Templates HTML](#43-templates-html)
   - 4.4 [Resumo dos Campos](#44-resumo-dos-campos)
   - 4.5 [Variáveis Disponíveis](#45-variáveis-disponíveis)

### 5. [Finalização e Ativação](#5-finalização-e-ativação)
   - 5.1 [Adicionar Nó de Resposta](#51-adicionar-nó-de-resposta)
   - 5.2 [Ativar o Workflow](#52-ativar-o-workflow)
   - 5.3 [Configurar no Projeto](#53-configurar-no-projeto)

### 6. [Testes e Validação](#6-testes-e-validação)
   - 6.1 [Estrutura do Payload Esperado](#61-estrutura-do-payload-esperado)
   - 6.2 [Testar o Webhook](#62-testar-o-webhook)

### 7. [Segurança e Melhorias](#7-segurança-e-melhorias)
   - 7.1 [Autenticação por Header](#71-autenticação-por-header)
   - 7.2 [Validação de IP](#72-validação-de-ip)
   - 7.3 [Rate Limiting no n8n](#73-rate-limiting-no-n8n)

### 8. [Troubleshooting](#8-troubleshooting)
   - 8.1 [Problemas com Webhook](#81-problemas-com-webhook)
   - 8.2 [Problemas com Zoho Mail](#82-problemas-com-zoho-mail)
   - 8.3 [Problemas com Envio de Email](#83-problemas-com-envio-de-email)

### 9. [Recursos e Próximos Passos](#9-recursos-e-próximos-passos)
   - 9.1 [Arquivo JSON do Workflow](#91-arquivo-json-do-workflow)
   - 9.2 [Links Úteis](#92-links-úteis)
   - 9.3 [Próximos Passos](#93-próximos-passos)

---

## 1. Introdução

### 1.1 O que é este guia

Este guia completo explica passo a passo como configurar o n8n para receber dados do formulário de contato e enviar emails através do Zoho Mail. Você aprenderá a:

- Criar ou importar um workflow no n8n
- Configurar credenciais SMTP do Zoho Mail
- Configurar o nó de envio de email
- Testar e validar a configuração
- Resolver problemas comuns

### 1.2 Pré-requisitos

Antes de começar, certifique-se de ter:

- ✅ Conta no n8n (cloud ou self-hosted)
- ✅ Acesso ao n8n para criar workflows
- ✅ Conta Zoho Mail com acesso ao email `contato@solunorde.com.br`
- ✅ Acesso ao painel de segurança do Zoho para criar senhas de aplicativo

---

## 2. Configuração Inicial do Workflow

### 2.1 Opção 1: Importar Workflow Completo (Recomendado)

Esta é a forma mais rápida de começar:

1. Acesse seu n8n
2. Clique em **"Workflows"** no menu lateral
3. Clique em **"Import from File"** ou **"Importar de Arquivo"**
4. Selecione o arquivo `n8n-workflow.json` que está na pasta `docs/`
5. O workflow será importado com todas as configurações
6. **Importante**: Configure as credenciais de email (veja seção 3)
7. Ative o workflow (veja seção 5.2)

### 2.2 Opção 2: Criar Workflow Manualmente

Se preferir criar do zero:

1. Acesse seu n8n
2. Clique em **"New Workflow"** ou **"Novo Workflow"**
3. Dê um nome ao workflow: **"Portfolio Contact Form"**

### 2.3 Adicionar Nó Webhook

1. Clique no botão **"+"** para adicionar um nó
2. Procure por **"Webhook"** na busca
3. Selecione **"Webhook"** (nó de trigger)
4. Configure o webhook:
   - **HTTP Method**: `POST`
   - **Path**: Escolha um caminho único, por exemplo: `/contact-form`
   - **Response Mode**: `Last Node` (ou `Using 'Respond to Webhook' Node`)
   - **Authentication**: 
     - Para maior segurança, recomenda-se usar **"Header Auth"** ou **"Query Auth"**
     - Configure uma chave secreta (ex: `X-API-Key` com valor secreto)

---

## 3. Configuração do Zoho Mail

### 3.1 Criar Senha de Aplicativo no Zoho

Para maior segurança, use uma senha de aplicativo ao invés da senha principal:

1. Acesse: https://accounts.zoho.com/home#security/app-passwords
2. Faça login na sua conta Zoho
3. Role até a seção **"App Passwords"**
4. Clique em **"Generate New Password"**
5. Dê um nome descritivo: `n8n Portfolio Contact Form`
6. Clique em **"Generate"**
7. **Copie a senha gerada imediatamente** (ela só aparece uma vez)
8. Guarde esta senha - você usará no próximo passo

**Por que usar senha de aplicativo?**
- Mais seguro que a senha principal
- Pode ser revogada individualmente
- Não compromete sua conta principal se vazada

### 3.2 Configurar Credenciais SMTP no n8n

1. No nó "Send Email", clique em **"Create New Credential"** ou **"Criar Nova Credência"**
2. Selecione **"SMTP"**
3. Preencha os campos conforme a seção 3.3 abaixo

### 3.3 Campos da Tela de Configuração SMTP

Baseado na tela de configuração SMTP do n8n, preencha os seguintes campos:

#### **User** (Usuário)
```
contato@solunorde.com.br
```
- Use o email que você gerencia no Zoho Mail
- Se você gerencia `contato@solunorde.com.br` no Zoho, use este
- Ou use outro email da sua conta Zoho que tem acesso ao domínio `solunorde.com.br`

#### **Password** (Senha)
```
[sua senha de aplicativo do Zoho]
```
- Cole a senha de aplicativo que você criou na seção 3.1
- **NÃO use sua senha normal do Zoho**

#### **Host** (Servidor)
```
smtp.zoho.com
```
- Para Europa: `smtp.zoho.eu`
- Para Índia: `smtp.zoho.in`
- Para Austrália: `smtp.zoho.com.au`

#### **Port** (Porta)
```
465
```
- Já deve estar preenchido com `465` por padrão
- Alternativa: `587` (se preferir TLS)

#### **SSL/TLS** (Toggle)
```
✅ ATIVADO (verde)
```
- **Deixe o toggle ATIVADO** (deve ficar verde)
- Para porta 465: usa SSL
- Para porta 587: usa TLS

#### **Client Host Name** (Opcional)
```
smtp.zoho.com
```
- Pode deixar em branco
- Ou use o mesmo valor do Host

#### Resumo Visual dos Campos

```
┌─────────────────────────────────────┐
│ User: contato@solunorde.com.br     │
│ Password: [senha de aplicativo]    │
│ Host: smtp.zoho.com                │
│ Port: 465                           │
│ SSL/TLS: ✅ (ATIVADO)               │
│ Client Host Name: smtp.zoho.com    │
└─────────────────────────────────────┘
```

4. Clique em **"Save"** (botão vermelho no topo) para salvar as credenciais

### 3.4 Configurações por Região do Zoho

Dependendo da sua região, o servidor SMTP pode variar:

- **Global/Américas**: `smtp.zoho.com`
- **Europa**: `smtp.zoho.eu`
- **Índia**: `smtp.zoho.in`
- **Austrália**: `smtp.zoho.com.au`

**Porta e SSL/TLS**:
- **Porta 465**: Use com **SSL** ativado
- **Porta 587**: Use com **TLS** ativado (SSL/TLS toggle ativado)

### 3.5 Testar Configuração do Zoho

Após configurar, teste o workflow:

1. Ative o workflow no n8n
2. Use o comando curl ou teste pelo formulário do site
3. Verifique se o email chegou no email do remetente
4. Se não funcionar, verifique:
   - Se a senha está correta
   - Se o SSL/TLS está ativado
   - Se a porta está correta (465 ou 587)
   - Se não há bloqueio de firewall

---

## 4. Configuração dos Nós Send Email

O workflow envia **dois emails**:
1. **Email de Notificação** → Para você (`taelima1997@gmail.com`) com a mensagem do formulário
2. **Email de Confirmação** → Para o usuário que preencheu o formulário, avisando que receberam a mensagem

### 4.1 Email de Notificação (Para Você)

Este email é enviado para você com os dados do formulário. Configure o primeiro nó "Send Email - Notificação":

#### Campos Obrigatórios:

#### 1. **Credential to connect with**
```
SMTP account
```
- Selecione a credencial SMTP que você criou (ex: "SMTP account")
- Se não aparecer, clique no ícone de lápis (✏️) para editar ou criar

#### 2. **Operation**
```
Send
```
- Deixe como está (padrão)

#### 3. **From Email** ⚠️ IMPORTANTE
```
contato@solunorde.com.br
```
- Este é o email remetente que aparecerá nas mensagens
- ⚠️ Este email deve estar configurado na sua conta Zoho Mail
- ⚠️ Nas credenciais SMTP, use o email que tem acesso ao `contato@solunorde.com.br`
- Se você gerencia este email no Zoho, use-o nas credenciais SMTP também

#### 4. **To Email**
```
taelima1997@gmail.com
```
- Este é o seu email onde você receberá as notificações das mensagens do formulário
- Use um email fixo para garantir que sempre receba as notificações

#### 5. **Subject**
```
Nova mensagem do portfólio: {{ $json.body.subject }}
```
- O `{{ $json.body.subject }}` será substituído pelo assunto enviado pelo formulário

#### 6. **Email Format**
```
HTML
```
- Selecione "HTML" no dropdown

#### 7. **HTML** (Campo grande de texto)
- Cole o template HTML de notificação (veja seção 4.3.1)

### 4.2 Email de Confirmação (Para o Usuário)

Este email é enviado automaticamente para o usuário que preencheu o formulário, confirmando que receberam a mensagem. Configure o segundo nó "Send Email - Confirmação":

#### Campos Obrigatórios:

1. **Credential to connect with**:
   - Selecione a mesma credencial SMTP (ex: "SMTP account")

2. **Operation**:
   - Deixe como **"Send"** (padrão)

3. **From Email**:
   - `contato@solunorde.com.br`

4. **To Email**:
   ```
   ={{ $json.body.email }}
   ```
   - Este campo será preenchido **dinamicamente** com o email do usuário que preencheu o formulário
   - Assim, o usuário receberá a confirmação no próprio email dele

5. **Subject**:
   ```
   Recebemos sua mensagem!
   ```
   - Assunto do email de confirmação

6. **Email Format**:
   - Selecione **"HTML"**

7. **HTML** (Campo grande de texto):
   - Cole o template HTML de confirmação (veja seção 4.3.2)

### 4.3 Templates HTML

#### 4.3.1 Template HTML - Email de Notificação (Para Você)

Cole este template no primeiro nó "Send Email - Notificação":

```html
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
    .header { background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%); color: white; padding: 20px; text-align: center; }
    .header h2 { margin: 0; font-size: 24px; }
    .content { padding: 30px; background: #f9fafb; }
    .field { margin-bottom: 20px; }
    .label { font-weight: bold; color: #1e3a8a; margin-bottom: 8px; display: block; font-size: 14px; }
    .value { color: #374151; font-size: 15px; }
    .message-box { background: white; padding: 20px; border-left: 4px solid #1e3a8a; margin: 15px 0; border-radius: 4px; white-space: pre-wrap; }
    .footer { background: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; }
    .meta-info { margin-top: 25px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
    .meta-info div { margin-bottom: 5px; }
    a { color: #1e40af; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Nova Mensagem do Portfólio</h2>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Nome:</span>
        <span class="value">{{ $json.body.name }}</span>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <span class="value"><a href="mailto:{{ $json.body.email }}">{{ $json.body.email }}</a></span>
      </div>
      <div class="field">
        <span class="label">Assunto:</span>
        <span class="value">{{ $json.body.subject }}</span>
      </div>
      <div class="field">
        <span class="label">Mensagem:</span>
        <div class="message-box">{{ $json.body.message }}</div>
      </div>
      <div class="meta-info">
        <div><strong>Enviado em:</strong> {{ $json.body.timestamp }}</div>
        <div><strong>IP do remetente:</strong> {{ $json.body.ip }}</div>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0;">Esta mensagem foi enviada através do formulário de contato do portfólio.</p>
    </div>
  </div>
</body>
</html>
```

**Nota**: As variáveis `{{ $json.body.name }}`, `{{ $json.body.email }}`, etc. serão automaticamente substituídas pelos dados enviados pelo formulário. Os dados chegam em `json.body` no n8n.

**⚠️ IMPORTANTE**: Certifique-se que o campo "Email Format" está configurado como **"HTML"** no nó Send Email. Se estiver como "Text", o email será enviado como texto plano e o HTML não será renderizado (você verá `\n` literais e código HTML visível).

#### 4.3.2 Template HTML - Email de Confirmação (Para o Usuário)

Cole este template no segundo nó "Send Email - Confirmação":

```html
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f9fafb; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
    .header { background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%); color: white; padding: 30px 20px; text-align: center; }
    .header h1 { margin: 0; font-size: 28px; font-weight: 600; }
    .content { padding: 40px 30px; }
    .greeting { font-size: 18px; color: #1e3a8a; margin-bottom: 20px; font-weight: 600; }
    .message { font-size: 16px; color: #374151; line-height: 1.8; margin-bottom: 25px; }
    .highlight-box { background: #eff6ff; border-left: 4px solid #1e40af; padding: 20px; margin: 25px 0; border-radius: 4px; }
    .highlight-box p { margin: 0; color: #1e40af; font-weight: 500; }
    .footer { background: #f3f4f6; padding: 25px; text-align: center; font-size: 14px; color: #6b7280; border-top: 1px solid #e5e7eb; }
    .footer p { margin: 5px 0; }
    .signature { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; }
    .signature p { margin: 5px 0; color: #374151; }
    .signature strong { color: #1e3a8a; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Mensagem Recebida!</h1>
    </div>
    <div class="content">
      <div class="greeting">Olá {{ $json.body.name }},</div>
      <div class="message">
        <p>Recebemos sua mensagem através do formulário de contato do meu portfólio e gostaria de agradecer pelo seu interesse em entrar em contato.</p>
        <p>Estou revisando sua mensagem e retornarei o mais breve possível, geralmente em até 24 horas.</p>
      </div>
      <div class="highlight-box">
        <p>✓ Sua mensagem foi recebida com sucesso!</p>
      </div>
      <div class="signature">
        <p><strong>Assunto da sua mensagem:</strong></p>
        <p>{{ $json.body.subject }}</p>
        <p style="margin-top: 20px;"><strong>Atenciosamente,</strong></p>
        <p><strong>Natanael Silva Lima</strong></p>
        <p>Tech Lead & Desenvolvedor Fullstack</p>
      </div>
    </div>
    <div class="footer">
      <p><strong>Esta é uma mensagem automática de confirmação.</strong></p>
      <p>Por favor, não responda este email. Para entrar em contato, use o formulário em meu portfólio.</p>
    </div>
  </div>
</body>
</html>
```

### 4.4 Resumo dos Campos

#### Email de Notificação (Para Você)

| Campo | Valor |
|-------|-------|
| Credential | SMTP account (sua credencial) |
| Operation | Send |
| From Email | `contato@solunorde.com.br` |
| To Email | `taelima1997@gmail.com` |
| Subject | `Nova mensagem do portfólio: {{ $json.body.subject }}` |
| Email Format | HTML |
| HTML | (Template de notificação - seção 4.3.1) |

#### Email de Confirmação (Para o Usuário)

| Campo | Valor |
|-------|-------|
| Credential | SMTP account (sua credencial) |
| Operation | Send |
| From Email | `contato@solunorde.com.br` |
| To Email | `={{ $json.body.email }}` (dinâmico - email do usuário) |
| Subject | `Recebemos sua mensagem!` |
| Email Format | HTML |
| HTML | (Template de confirmação - seção 4.3.2) |

### 4.5 Variáveis Disponíveis

O template HTML usa estas variáveis que vêm do formulário. **Importante**: Os dados chegam em `json.body` no n8n, então use `$json.body.*`:

- `{{ $json.body.name }}` - Nome do remetente
- `{{ $json.body.email }}` - Email do remetente
- `{{ $json.body.subject }}` - Assunto da mensagem
- `{{ $json.body.message }}` - Conteúdo da mensagem
- `{{ $json.body.timestamp }}` - Data/hora do envio
- `{{ $json.body.ip }}` - IP do remetente

---

## 5. Finalização e Ativação

### 5.1 Configurar Conexões entre Nós

O workflow deve ter a seguinte estrutura:

1. **Webhook** → conecta para **ambos** os nós de email:
   - "Send Email - Notificação" (para você)
   - "Send Email - Confirmação" (para o usuário)

2. **Ambos os nós de email** → conectam para **"Respond to Webhook"**

**Como conectar no n8n**:
- Clique e arraste do Webhook para o primeiro nó "Send Email - Notificação"
- Clique e arraste do Webhook para o segundo nó "Send Email - Confirmação"
- Clique e arraste de ambos os nós de email para o nó "Respond to Webhook"

### 5.2 Adicionar Nó de Resposta

1. Adicione um nó **"Respond to Webhook"**
2. Configure a resposta de sucesso:
   - **Response Code**: `200`
   - **Response Body**: 
     ```json
     {
       "success": true,
       "message": "Email enviado com sucesso"
     }
     ```

### 5.3 Ativar o Workflow

1. Clique no botão **"Active"** no canto superior direito para ativar o workflow
2. Copie a URL do webhook que aparece no nó Webhook
   - URL do webhook: `https://n8n-n8n.tv2two.easypanel.host/webhook/contact-form`

### 5.4 Configurar no Projeto

1. Adicione a URL do webhook na variável de ambiente `N8N_WEBHOOK_URL`:
   ```env
   N8N_WEBHOOK_URL=https://n8n-n8n.tv2two.easypanel.host/webhook/contact-form
   ```

2. Se você configurou autenticação no webhook, você precisará:
   - Atualizar o código em `app/actions/send-email.ts` para incluir o header de autenticação
   - Ou configurar a autenticação via query string na URL

---

## 6. Testes e Validação

### 6.1 Estrutura do Payload Esperado

O webhook receberá um JSON com a seguinte estrutura:

```json
{
  "name": "Nome do Usuário",
  "email": "taelima1997@gmail.com",
  "subject": "Assunto da Mensagem",
  "message": "Conteúdo da mensagem...",
  "timestamp": "2025-01-15T10:30:00.000Z",
  "ip": "192.168.1.1"
}
```

### 6.2 Testar o Webhook

Você pode testar o webhook usando curl ou Postman:

```bash
curl -X POST https://n8n-n8n.tv2two.easypanel.host/webhook/contact-form \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Teste",
    "email": "taelima1997@gmail.com",
    "subject": "Teste de Webhook",
    "message": "Esta é uma mensagem de teste do formulário de contato.",
    "timestamp": "2025-01-15T10:30:00.000Z",
    "ip": "127.0.0.1"
  }'
```

Após o teste, você deve receber um email no endereço especificado no campo "To Email" com o conteúdo formatado.

---

## 7. Segurança e Melhorias

### 7.1 Autenticação por Header

Para aumentar a segurança do webhook:

1. No n8n, configure autenticação no nó Webhook
2. No código, adicione o header na requisição:
   ```typescript
   headers: {
     "Content-Type": "application/json",
     "X-API-Key": process.env.N8N_WEBHOOK_KEY,
   }
   ```

### 7.2 Validação de IP

Configure no n8n para aceitar apenas requisições do seu domínio Vercel (se possível).

### 7.3 Rate Limiting no n8n

Configure limites de requisições no n8n para evitar abuso do webhook.

---

## 8. Troubleshooting

### 8.1 Problemas com Webhook

#### Webhook não recebe dados
- Verifique se o workflow está ativo
- Verifique se a URL do webhook está correta
- Verifique os logs do n8n para erros

#### Erro 404 ao chamar webhook
- Verifique se o workflow está ativo
- Verifique se o path do webhook está correto
- Verifique se você copiou a URL completa do webhook

### 8.2 Problemas com Zoho Mail

#### Erro: "Authentication failed"
- Verifique se a senha está correta
- Use senha de aplicativo ao invés da senha normal
- Verifique se o email está correto

#### Erro: "Connection timeout"
- Verifique se o Host está correto: `smtp.zoho.com`
- Verifique se a porta está correta: `465` ou `587`
- Verifique firewall/proxy

#### Erro: "SSL/TLS required"
- Certifique-se que o toggle SSL/TLS está **ATIVADO**
- Para porta 465: deve estar ativado
- Para porta 587: deve estar ativado

### 8.3 Problemas com Envio de Email

#### Email não é enviado
- Verifique se o "From Email" é o mesmo das credenciais
- Verifique se as credenciais SMTP estão corretas
- Verifique se o nó de email está configurado corretamente
- Verifique os logs de execução do workflow no n8n
- Teste executando o nó manualmente

#### Email não chega
- Verifique a pasta de spam
- Verifique se o email de destino está correto
- Verifique os logs do n8n para erros

#### Template HTML não renderiza
- Certifique-se que selecionou "HTML" no Email Format
- Verifique se copiou o template completo
- Teste com um HTML simples primeiro

#### Variáveis não são substituídas
- Verifique se o webhook está enviando os dados corretos
- Use `{{ $json }}` ou `{{ $json.body }}` para ver todos os dados recebidos
- **Importante**: Os dados chegam em `json.body`, então use `{{ $json.body.name }}` ao invés de `{{ $json.name }}`
- Verifique a conexão entre o Webhook e o Send Email

#### ⚠️ Erro Comum: "From Email" Incorreto

**Problema**: O campo "From Email" mostra um aviso (⚠️) ou o email não é enviado.

**Solução**: 
- O "From Email" (`contato@solunorde.com.br`) deve estar configurado na sua conta Zoho Mail
- Nas credenciais SMTP, você pode usar:
  - O mesmo email: `contato@solunorde.com.br` (se você gerencia este email no Zoho)
  - Ou outro email da sua conta Zoho que tem permissão para enviar como `contato@solunorde.com.br`
- Certifique-se que o domínio `solunorde.com.br` está configurado no seu Zoho Mail

---

## 9. Recursos e Próximos Passos

### 9.1 Arquivo JSON do Workflow

Um arquivo JSON completo do workflow está disponível em `docs/n8n-workflow.json`. Este arquivo contém:

- ✅ Webhook configurado para receber POST
- ✅ **Dois nós de email**:
  - Email de notificação para `taelima1997@gmail.com` (com a mensagem do formulário)
  - Email de confirmação para o usuário (avisando que receberam a mensagem)
- ✅ Templates HTML formatados para ambos os emails
- ✅ Nó de resposta configurado
- ✅ Todas as conexões entre nós configuradas

**Para usar**:
1. No n8n, vá em **Workflows** → **Import from File**
2. Selecione o arquivo `docs/n8n-workflow.json`
3. Configure as credenciais de email (veja seção 3)
4. Ative o workflow

### 9.2 Links Úteis

- **Criar Senha de Aplicativo Zoho**: https://accounts.zoho.com/home#security/app-passwords
- **Documentação Zoho SMTP**: https://www.zoho.com/mail/help/zoho-mail-smtp-configuration.html
- **Suporte Zoho**: https://help.zoho.com/portal/en/kb/mail
- **Documentação n8n**: https://docs.n8n.io/

### 9.3 Próximos Passos

Após configurar o n8n:

1. ✅ Configure as variáveis de ambiente no Vercel (veja `vercel-setup.md`)
2. ✅ Configure o reCAPTCHA (veja `recaptcha-setup.md`)
3. ✅ Configure o Cloudflare (veja `cloudflare-setup.md`)
4. ✅ Teste o formulário completo em produção

---

**Desenvolvido para o portfólio de Natanael Silva Lima**  
**Email de contato**: contato@solunorde.com.br

