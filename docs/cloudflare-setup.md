# Configuração do Cloudflare

Este guia explica como configurar o Cloudflare para proteger seu site contra DDoS, configurar DNS e implementar rate limiting adicional.

## O que é Cloudflare?

O Cloudflare é uma plataforma que oferece:
- **CDN (Content Delivery Network)**: Acelera o carregamento do site
- **Proteção DDoS**: Bloqueia ataques de negação de serviço
- **WAF (Web Application Firewall)**: Proteção contra vulnerabilidades web
- **Rate Limiting**: Limita requisições por IP
- **SSL/TLS**: Certificados SSL gratuitos

## Pré-requisitos

- Conta no Cloudflare (gratuita): https://www.cloudflare.com/sign-up/
- Domínio registrado (ou acesso ao domínio)
- Acesso ao painel de controle do seu registrador de domínio

## Passo a Passo

### 1. Adicionar Site ao Cloudflare

1. Acesse: https://dash.cloudflare.com/
2. Faça login na sua conta
3. Clique em **"Add a Site"** ou **"Adicionar um Site"**
4. Digite seu domínio (ex: `seu-dominio.com`)
5. Selecione o plano:
   - **Free**: Gratuito, inclui proteção DDoS básica
   - **Pro**: Pago, com mais recursos
   - Para começar, o plano **Free** é suficiente
6. Clique em **"Add site"**

### 2. Verificar Registros DNS

O Cloudflare irá escanear seus registros DNS atuais. Revise e confirme:

1. Verifique se todos os registros importantes estão listados
2. Para sites no Vercel, você geralmente precisa:
   - **A Record** ou **CNAME** apontando para o Vercel
   - **CNAME** para `www` (se usar www)

### 3. Atualizar Nameservers

1. O Cloudflare fornecerá dois nameservers (ex: `ns1.cloudflare.com` e `ns2.cloudflare.com`)
2. Copie esses nameservers
3. Acesse o painel do seu registrador de domínio
4. Encontre a seção de **Nameservers** ou **DNS**
5. Substitua os nameservers atuais pelos do Cloudflare
6. Salve as alterações

**Nota**: A propagação pode levar de algumas horas até 48 horas.

### 4. Configurar DNS no Cloudflare

Após atualizar os nameservers:

1. No Cloudflare, vá em **DNS** → **Records**
2. Configure os registros necessários:

   **Para Vercel (sem www)**:
   - Tipo: `CNAME`
   - Nome: `@` ou seu domínio raiz
   - Target: `cname.vercel-dns.com`
   - Proxy: ✅ (laranja) - Ativa proteção do Cloudflare

   **Para Vercel (com www)**:
   - Tipo: `CNAME`
   - Nome: `www`
   - Target: `cname.vercel-dns.com`
   - Proxy: ✅ (laranja)

3. Salve os registros

### 5. Configurar SSL/TLS

1. Vá em **SSL/TLS** no menu lateral
2. Selecione **"Full"** ou **"Full (strict)"**:
   - **Full**: Permite certificados auto-assinados
   - **Full (strict)**: Requer certificados válidos (recomendado para Vercel)
3. O Cloudflare gerará automaticamente um certificado SSL

### 6. Ativar Proteção DDoS

1. Vá em **Security** → **Settings**
2. **Security Level**: Configure como **"Medium"** ou **"High"**:
   - **Low**: Menos bloqueios, mais permissivo
   - **Medium**: Balanceado (recomendado)
   - **High**: Mais bloqueios, mais restritivo
3. **Challenge Passage**: Configure o tempo de desafio (padrão: 30 minutos)

### 7. Configurar WAF (Web Application Firewall)

**Nota**: WAF completo está disponível apenas em planos pagos. O plano Free inclui proteção básica.

1. Vá em **Security** → **WAF**
2. Ative as regras recomendadas:
   - **Cloudflare Managed Ruleset**: Ativado por padrão
   - **OWASP Core Ruleset**: Recomendado (se disponível no seu plano)

### 8. Configurar Rate Limiting

**Nota**: Rate Limiting básico está disponível no plano Free com limitações.

1. Vá em **Security** → **WAF** → **Rate limiting rules**
2. Clique em **"Create rule"**
3. Configure a regra:

   **Rule name**: `Contact Form Protection`
   
   **Match**:
   - **When incoming requests match**: `(http.request.uri.path eq "/api/contact" or http.request.uri.path contains "send-email")`
   - Ou configure para o endpoint específico do seu formulário
   
   **Then**:
   - **Action**: `Block`
   - **Rate**: `10` requests
   - **Period**: `1` minute
   - **Counting expression**: `ip.src`

4. Clique em **"Deploy"**

### 9. Configurar Page Rules (Opcional)

1. Vá em **Rules** → **Page Rules**
2. Crie regras para:
   - Cache de assets estáticos
   - Redirecionamento de HTTP para HTTPS
   - Configurações de segurança específicas

### 10. Configurar Firewall Rules (Opcional)

1. Vá em **Security** → **WAF** → **Firewall rules**
2. Crie regras personalizadas para:
   - Bloquear países específicos (se necessário)
   - Bloquear user agents suspeitos
   - Proteger endpoints específicos

### 11. Verificar Configuração

1. Aguarde a propagação DNS (pode levar até 48 horas)
2. Verifique se o site está acessível
3. Verifique se o SSL está funcionando (https://)
4. Teste o formulário de contato

## Configurações Recomendadas para Produção

### Security Settings

- **Security Level**: Medium
- **Challenge Passage**: 30 minutes
- **Browser Integrity Check**: Enabled
- **Privacy Pass Support**: Enabled

### Speed Settings

- **Auto Minify**: Ative para HTML, CSS e JavaScript
- **Brotli**: Enabled
- **Rocket Loader**: Opcional (pode causar problemas com alguns scripts)

### Caching

- **Caching Level**: Standard
- **Browser Cache TTL**: 4 hours (ou conforme necessário)

## Monitoramento e Analytics

### 1. Analytics

1. Vá em **Analytics** → **Web Analytics**
2. Veja estatísticas de:
   - Requisições
   - Tráfego
   - Ameaças bloqueadas
   - Performance

### 2. Logs (Planos Pagos)

- Acesse logs detalhados de requisições
- Analise padrões de ataque
- Identifique IPs suspeitos

## Troubleshooting

### Site não carrega após configurar Cloudflare

1. Verifique se os nameservers foram atualizados corretamente
2. Aguarde a propagação DNS (use https://dnschecker.org/)
3. Verifique se os registros DNS estão corretos
4. Verifique o SSL/TLS (deve estar em "Full" ou "Full (strict)")

### Erro 1016: Origin DNS Error

- Verifique se o domínio está apontando corretamente para o Vercel
- Verifique se o proxy está ativado (ícone laranja)
- Verifique os registros DNS no Cloudflare

### Formulário não funciona

1. Verifique se o Cloudflare não está bloqueando requisições
2. Verifique os logs do Cloudflare para bloqueios
3. Ajuste as regras de WAF se necessário
4. Verifique se o rate limiting não está muito restritivo

### SSL não funciona

1. Verifique se o SSL/TLS está em "Full" ou "Full (strict)"
2. Verifique se o Vercel está configurado corretamente
3. Aguarde alguns minutos para o certificado ser gerado

## Integração com Vercel

### Configurar no Vercel

1. No Vercel, vá em **Settings** → **Domains**
2. Adicione seu domínio
3. O Vercel detectará automaticamente o Cloudflare
4. Configure o DNS conforme instruções do Vercel

### Headers Importantes

O Cloudflare adiciona headers úteis que você pode usar:

- `CF-Connecting-IP`: IP real do cliente (já usado no código)
- `CF-Ray`: ID único da requisição
- `CF-Country`: País do cliente

## Boas Práticas

1. **Mantenha o Cloudflare atualizado**:
   - Verifique regularmente as configurações
   - Atualize regras de segurança conforme necessário

2. **Monitore analytics**:
   - Acompanhe tentativas de ataque
   - Ajuste configurações baseado em dados reais

3. **Teste regularmente**:
   - Teste o formulário após mudanças
   - Verifique se não há bloqueios falsos positivos

4. **Combine com outras proteções**:
   - Rate limiting no código (já implementado)
   - reCAPTCHA (já implementado)
   - Validação de dados

## Próximos Passos

Após configurar o Cloudflare:

1. Configure as variáveis de ambiente no Vercel (veja `vercel-setup.md`)
2. Teste o formulário completo
3. Monitore o dashboard do Cloudflare por alguns dias
4. Ajuste configurações conforme necessário

## Recursos Adicionais

- [Documentação do Cloudflare](https://developers.cloudflare.com/)
- [Guia de DNS do Cloudflare](https://developers.cloudflare.com/dns/)
- [Guia de WAF](https://developers.cloudflare.com/waf/)
- [Cloudflare Learning Center](https://www.cloudflare.com/learning/)

## Planos e Limitações

### Free Plan

- ✅ Proteção DDoS básica
- ✅ SSL/TLS gratuito
- ✅ CDN básico
- ✅ WAF básico
- ⚠️ Rate Limiting limitado
- ⚠️ Analytics limitado

### Pro Plan ($20/mês)

- ✅ Tudo do Free
- ✅ WAF avançado
- ✅ Rate Limiting completo
- ✅ Analytics detalhado
- ✅ Page Rules ilimitadas

Para a maioria dos casos, o plano Free é suficiente para proteção básica.

